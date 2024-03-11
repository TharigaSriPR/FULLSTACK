import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux'; // Importing useSelector from react-redux
import '../../assets/css/theme.css'

const Theme = () => {
  const [products, setProducts] = useState([]);
  const token = useSelector(state => state.auth.token);

  // State for form inputs
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    imageUrl: '',
  });

  // Function to fetch data from the backend when the component mounts
  useEffect(() => {
    fetchData();
  }, []);

  // Function to fetch data from the backend
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/theme'); // Replace 'YOUR_BACKEND_ENDPOINT' with your actual backend endpoint
      setProducts(response.data); // Update the state with fetched data
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // Function to handle form submission (add new product)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newProduct = {
        name: formData.name,
        price: formData.price,
        imageUrl: formData.imageUrl || 'https://via.placeholder.com/150', // Default placeholder image
      };
      const response = await axios.post(
        'http://localhost:8080/api/theme/addtheme',
        newProduct,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log('Product added successfully!');
      setProducts([...products, response.data]); // Update the products state with the new product
      setFormData({ name: '', price: '', imageUrl: '' }); // Clear the form fields
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  // Function to handle theme edit
  const handleEdit = async (themeId) => {
    try {
      const response = await axios.get(`http://localhost:8080/api/theme/${themeId}`,
      { headers: { Authorization: `Bearer ${token}` }});
      const existingTheme = response.data; // Assuming your API returns the existing theme details
      setFormData({
        name: existingTheme.name,
        price: existingTheme.price,
        imageUrl: existingTheme.imageUrl,
      });
    } catch (error) {
      console.error('Error fetching theme details for editing:', error);
    }
  };

  // Function to handle theme deletion
  const handleDelete = async (themeId) => {
    try {
      await axios.delete(`http://localhost:8080/api/theme/${themeId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setProducts(products.filter((theme) => theme.themeId !== themeId));
      console.log('Theme deleted successfully!');
    } catch (error) {
      console.error('Error deleting theme:', error);
    }
  };

  return (
    <div className="container">
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter Theme Name"
            required
          />
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            placeholder="Enter Price"
            required
          />
          <input
            type="url"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleInputChange}
            placeholder="Enter Photo URL"
          />
          <br />
          <br />
          <button className="button" type="submit">
            Save Gift
          </button>
        </form>
      </div>
    </div>
  );
};

export default Theme;

import React, { useState } from 'react';
import '../../assets/css/crud.css'; // Importing styles from crud.css

const EcommerceTable = () => {
  // State to manage products
  const [products, setProducts] = useState([
    { id: 1, name: 'photo frame', price: 1500, photo: '' },
    { id: 2, name: 'mug', price: 690, photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQo_6cfPismHCce1XAxIOXCYrFOYSTSt2G_g&usqp=CAU' },
    { id: 3, name: 'calender', price: 450, photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeiFcJzjw--cERDZoD1C9ZrF9PUTl-PzWkMnI4u9Adw_ylpejB4eEi5ETH07jdROvJfqg&usqp=CAU' },
  ]);

  // State for form inputs
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    photo: '',
  });

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // Function to handle form submission (add or edit product)
  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      id: products.length + 1,
      name: formData.name,
      price: formData.price,
      photo: formData.photo || 'https://via.placeholder.com/150', // Default placeholder image
    };
    const existingProductIndex = products.findIndex((product) => product.id === newProduct.id);
    if (existingProductIndex !== -1) {
      // Edit existing product
      const updatedProducts = [...products];
      updatedProducts[existingProductIndex] = newProduct;
      setProducts(updatedProducts);
    } else {
      // Add new product
      setProducts([...products, newProduct]);
    }
    setFormData({
      name: '',
      price: '',
      photo: '',
    });
  };

  // Function to handle product deletion
  const handleDelete = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  // Function to handle product edit
  const handleEdit = (product) => {
    setFormData({
      name: product.name,
      price: product.price,
      photo: product.photo,
    });
  };

  return (
    <div className="container">
      <div className="add-product">
      <br/>
      <br/>

        <h2>Add Product</h2>
        <br/>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter Product Name"
            required
          />
          <br/>
          <br/>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            placeholder="Enter Price"
            required
          />
           <br/>
           <br/>
          <input
            type="url"
            name="photo"
            value={formData.photo}
            onChange={handleInputChange}
            placeholder="Enter Photo URL"
          />
           <br/>
           <br/>
          <button className="button" type="submit">Save Product</button>
        </form>
      </div>

      <div className="table-container">
      <br/>
      <br/>
        <h2>Products</h2>
        <br/>
        <br/>
        <br/>
        <br/>
        <table className="table">
          <thead>
            <tr>
              <th>Photo</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td><img src={product.photo} alt={product.name} /></td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                  <button className="button edit-button" onClick={() => handleEdit(product)}>Edit</button>
                  <button className="button delete-button" onClick={() => handleDelete(product.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EcommerceTable;

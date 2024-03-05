
import '../../assets/css/Profile.css'; // Import CSS for profile styling
import { useState } from 'react';
const Profile = () => {
  const [name, setName] = useState('TharigaSri P R');
  const [email, setEmail] = useState('tharigasri@gmail.com');
  const [address, setAddress] = useState('123 main colony, Coimbatore, India');

  // Define state variables for edit mode
  const [editMode, setEditMode] = useState(false);

  // Function to handle edit mode toggle
  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  // Function to handle saving changes
  const saveChanges = () => {
    // Perform actions to save changes, such as making API requests
    // For demonstration purposes, we'll just toggle edit mode
    toggleEditMode();
  };
  return (
    <div className="user-dashboard">
      <div className="profile-section">
        {/* Profile Photo */}
        <div className="profile-photo">
          <img src="data:image/jpeg;base64,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" alt="Profile" />
        </div>
        
        {/* Profile Information */}
        <div className="profile-details">
        <h2 className="section-title">Profile Information</h2>
        {editMode ? (
          <>
            <p><strong>Name:</strong> <input type="text" value={name} onChange={(e) => setName(e.target.value)} /></p>
            <p><strong>Email:</strong> <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} /></p>
            <p><strong>Address:</strong> <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} /></p>
          </>
        ) : (
          <>
            <p><strong>Name:</strong> {name}</p>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Address:</strong> {address}</p>
          </>
        )}
        {/* Edit and Save buttons */}
        {editMode ? (
          <button onClick={saveChanges}>Save</button>
        ) : (
          <button onClick={toggleEditMode}>Edit</button>
        )}
      </div>
    </div>

      {/* Wishlist Section */}
      <div className="wishlist-section">
        <h2 className="section-title">Wishlist</h2>
        <div className="wishlist">
          {/* Display user's wishlist here */}
          <div className="wishlist-item">
            <p>Photo album customised</p>
            {/* Additional product details can be displayed here */}
          </div>
          {/* Repeat this structure for each wishlist item */}
        </div>
      </div>

      {/* Order History Section */}
      <div className="order-history-section">
        <h2 className="section-title">Order History</h2>
        <div className="order-history">
          {/* Display user's order history here */}
          <div className="order">
            <p><strong>Order ID:</strong> #12345</p>
            <p><strong>Date:</strong> January 1, 2024</p>
            <p><strong>Total:</strong> $100.00</p>
            {/* Additional order details can be displayed here */}
          </div>
          {/* Repeat this structure for each order */}
        </div>
      </div>

      {/* Payment Methods Section */}
      <div className="payment-methods-section">
        <h2 className="section-title">Payment Methods</h2>
        <div className="payment-methods">
          {/* Display user's saved payment methods here */}
          <div className="payment-method">
            <p><strong>Card Type:</strong> Visa</p>
            <p><strong>Card Number:</strong> **** **** **** 1234</p>
            {/* Additional payment method details can be displayed here */}
          </div>
          {/* Repeat this structure for each payment method */}
        </div>
      </div>
    </div>
  );
};

export default Profile;

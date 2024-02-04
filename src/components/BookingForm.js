import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./BookingForm.css"; // Import CSS file

const BookingForm = ({ movieName }) => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // For now, let's just log the form data
    console.log(formData);
    // Display popup/notification
    alert("Done We will send you the movie ticket on your phone number. You can make online payment or pay offline at the movie theatre.");
    // Redirect to home or any other page
    navigate("/");
  };

  return (
    <div className="blue-background">
      <div className="booking-form-container">
        <h2>Book Ticket: {movieName}</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
          </label>
          <label>
            Email:
            <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
          </label>
          <label>
            Phone:
            <input type="text" name="phone" value={formData.phone} onChange={handleInputChange} />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;

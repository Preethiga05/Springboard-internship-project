import React, { useState } from "react";
import "./adminRegister.css"; // Assuming this file is created for Admin registration

const AdminRegister = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    societyName: "",
    societyAddress: "",
    city: "",
    district: "",
  });

  const [email, setEmail] = useState(""); // State for email

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value); // Update email separately
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:8080/admin-register/${email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // Send form data for admin
      });

      if (response.ok) {
        alert("Admin registered successfully!");
        setFormData({
          name: "",
          phone: "",
          societyName: "",
          societyAddress: "",
          city: "",
          district: "",
        });
        setEmail(""); // Reset email
      } else {
        const errorMessage = await response.text();
        alert(`Error: ${errorMessage}`);
      }
    } catch (error) {
      alert(`An error occurred: ${error.message}`);
    }
  };

  return (
    <div className="admin-register-container">
      {/* Admin registration form */}
      <div className="form-section">
        <div className="form-wrapper">
          <h2>Admin Registration</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone No"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="societyName"
              placeholder="Society Name"
              value={formData.societyName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="societyAddress"
              placeholder="Society Address"
              value={formData.societyAddress}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="district"
              placeholder="District"
              value={formData.district}
              onChange={handleChange}
              required
            />
            <button type="submit">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminRegister;

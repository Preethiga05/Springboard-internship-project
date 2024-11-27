import React, { useState } from "react";
import "./userRegist.css";

const UserRegister = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    societyName: "",
    flatNo: "",
    postal: "",
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
      const response = await fetch(`http://localhost:8080/resident-register/${email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // Send form data
      });

      if (response.ok) {
        alert("Resident registered successfully!");
        // Reset form fields after successful submission
        setFormData({
          name: "",
          phone: "",
          societyName: "",
          flatNo: "",
          postal: "",
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
    <div className="user-register-container">
      {/* Left Side - Image */}
      <div className="image-section">
        <img
          src="https://media.istockphoto.com/id/1165384568/photo/europe-modern-complex-of-residential-buildings.jpg?s=1024x1024&w=is&k=20&c=1golptGIidGvd8qhQ7FvKAT2lFl7hIu8KGCJzBT_H8o="
          alt="Apartment"
          className="apartment-image"
        />
      </div>

      {/* Right Side - Form */}
      <div className="form-section">
        <div className="form-wrapper">
          <h2>Fill these details to continue</h2>
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
              name="flatNo"
              placeholder="Flat No"
              value={formData.flatNo}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="postal"
              placeholder="Postal"
              value={formData.postal}
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

export default UserRegister;

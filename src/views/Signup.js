import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

function Signup() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/auth/signup",
        formData
      );
      console.log(response.data);
      // Handle success (e.g., redirect, display message)
    } catch (error) {
      console.error(error);
      // Handle error (e.g., display error message)
    }
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
        <h2 style={{ color: "#7B66FF" }}>Sign Up</h2>
        <div className="mb-3" style={{ maxWidth: "300px", margin: "auto" }}>
          <input
            type="text"
            className="form-control"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3" style={{ maxWidth: "300px", margin: "auto" }}>
          <input
            type="text"
            className="form-control"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3" style={{ maxWidth: "300px", margin: "auto" }}>
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3" style={{ maxWidth: "300px", margin: "auto" }}>
          <input
            type="text"
            className="form-control"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3" style={{ maxWidth: "300px", margin: "auto" }}>
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="btn d-block mx-auto"
          style={{ backgroundColor: "#7B66FF", color: "white" }}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Signup;

import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "../assets/css/login.css";

function Login() {
  const [formData, setFormData] = useState({
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
        "http://localhost:8080/api/v1/auth/signin",
        formData
      );
      console.log(response.data);
      // Handle success 
    } catch (error) {
      console.error(error);
      // Handle error 
    }
  };

  return (
    <div className="container mt-5 login-form-container">
      <form onSubmit={handleSubmit}>
        <h2 style={{ color: "#7B66FF", textAlign: "center", padding: "20px" }}>
          Login
        </h2>
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
        <div className="text-center mt-3">
          <p>
            Don't have an account?{" "}
            <Link
              to="/signup"
              style={{ color: "#7B66FF", textDecoration: "none" }}
            >
              Create one!
            </Link>
          </p>
        </div>

        <button
          type="submit"
          className="btn d-block mx-auto"
          style={{ backgroundColor: "#7B66FF", color: "white" }}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;

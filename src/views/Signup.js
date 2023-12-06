import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "../assets/css/signup.css";
import { Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
  });

  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

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
      setShowModal(true);
    } catch (error) {
      console.error(error);
      // Handle error 
    }
  };

  const handleContinue = () => {
    navigate("/posts");
  };

  return (
    <div className="container mt-5 signup-form-container">
      <form onSubmit={handleSubmit}>
        <h2 style={{ color: "#7B66FF", textAlign: "center", padding: "30px" }}>
          Sign Up
        </h2>
        <div className="mb-3" style={{ maxWidth: "300px", margin: "auto" }}>
          <input
            type="text"
            className="form-control"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
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
            required
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
            required
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
            required
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
            required
          />
        </div>
        <div className="text-center mt-3">
          <p>
            Already have an account?{" "}
            <Link
              to="/login"
              style={{ color: "#7B66FF", textDecoration: "none" }}
            >
              Log in!
            </Link>
          </p>
        </div>
        <button
          type="submit"
          className="btn d-block mx-auto"
          style={{ backgroundColor: "#7B66FF", color: "white" }}
        >
          Sign Up
        </button>
      </form>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header>
          <Modal.Title style={{ color: "#7B66FF" }}>
            Welcome to CodeChronicles!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Your account has been successfully created. Get ready to dive into the
          world of CodeChronicles!
        </Modal.Body>
        <Modal.Footer>
          <button
            className="btn"
            style={{
              backgroundColor: "#7B66FF",
              color: "white",
              textAlign: "center",
            }}
            onClick={handleContinue}
          >
            Continue
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Signup;

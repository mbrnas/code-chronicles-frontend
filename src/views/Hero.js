import React from "react";
import "../assets/css/hero.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero-container text-center d-flex flex-column align-items-center justify-content-center animate__animated animate__fadeInUp">
      <div>
        <h1 className="hero-heading">CodeChronicles</h1>
        <p className="hero-description">
          Dive into the world of CodeChronicles, where coding meets creativity.
          Join our vibrant community of developers sharing insights, discussing
          ideas, and shaping the future of tech.
        </p>
      </div>

      <div className="mt-4 animate__animated animate__bounce animate__infinite">
        <FontAwesomeIcon icon={faArrowDown} size="2x" />
      </div>
      <button
        className="btn mt-4 animate__animated animate__bounce"
        style={{ backgroundColor: "#7B66FF", color: "white", border: "none" }}
      >
        <Link to="/signup" style={{ color: "inherit", textDecoration: "none" }}>
          Join now!
        </Link>
      </button>
    </div>
  );
};

export default Hero;

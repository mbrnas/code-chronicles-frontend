import React from "react";
import "../assets/css/hero.css"; // Path to your custom CSS

const Hero = () => {
  return (
    <div className="hero-container text-center d-flex align-items-center justify-content-center animate__animated animate__fadeInUpBig">
      <div>
        <h1 className="hero-heading">CodeChronicles</h1>
        <p className="hero-description">
          Dive into the world of CodeChronicles, where coding meets creativity.
          Join our vibrant community of developers sharing insights, discussing
          ideas, and shaping the future of tech.
        </p>
      </div>
    </div>
  );
};

export default Hero;

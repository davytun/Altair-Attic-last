import React from "react";
import "./About.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="flexCenter innerWidth paddings about-us-container">
      <div className="about-us-content">
        <div className="about-us-text">
          <h2>ABOUT US</h2>
          <p>
            Altair Attic Limited is a cutting-edge technology company dedicated
            to providing innovative solutions in smart home automation, software
            development, IoT and embedded systems integration, general
            merchandise, and IT skill acquisition. We strive to bridge the gap
            between technology and everyday life, making advanced tech
            accessible and beneficial for everyone.
          </p>
          <Link to="/about" className="button">
            Learn more
          </Link>
        </div>
        <div className="about-us-image">
          <img
            src="./about.jpg"
            alt="Altair Attic Limited Tech Visualization"
          />
        </div>
      </div>
    </div>
  );
};

export default About;

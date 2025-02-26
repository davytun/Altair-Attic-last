import React from "react";
import "./Footer.css";
import logo from "/fLogo.png";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="inner-width footer-container">
        {/* Left side */}
        <div className="footer-left">
          <img src={logo} alt="Logo" className="footer-logo" />
          <p className="footer-text">
            Empowering your world with smart, <br />
            innovative, and reliable tech solutions.
          </p>
          <div className="footer-social">
            <a
              href="https://facebook.com/altairattic"
              className="footer-social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com/altairattic"
              className="footer-social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com/altairattic"
              className="footer-social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Right side */}
        <div className="footer-right">
          <h3 className="footer-title">Address</h3>
          <p className="footer-text">
            3rd floor, E n j Supermarket Building, <br />
            Along Oba Ademola Maternity <br />
            Hospital, Ake, Abeokuta.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

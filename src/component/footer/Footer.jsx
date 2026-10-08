import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import {
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <span>The</span>
            Olive Table
          </Link>

          <p>
            A warm place for thoughtful food,
            meaningful conversations and
            memorable evenings.
          </p>

          <div className="footer-socials">
             <a
              href="#"
              aria-label="Instagram"
              className="social-icon"
            >
              <FaInstagram />
            </a>

             <a
              href="#"
              aria-label="Facebook"
              className="social-icon"
            >
              <FaFacebookF />
            </a>

            <a href="mailto:hello@theolivetable.com" aria-label="Email">
              <Mail size={17} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h3>Explore</h3>

          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/menu">Our Menu</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* Reservations */}
        <div className="footer-column">
          <h3>Reservations</h3>

          <Link to="/reservation">Book a Table</Link>

          <p className="footer-info">
            <ClockText />
            Mon – Sun
            <br />
            12:00 PM – 10:30 PM
          </p>
        </div>

        {/* Contact */}
        <div className="footer-column footer-contact">
          <h3>Visit Us</h3>

          <p>
            <MapPin size={16} />
            <span>
              24 Olive Street,
              <br />
              Green Park, Nagpur
            </span>
          </p>

          <p>
            <Phone size={16} />
            <span>+91 99999 99999</span>
          </p>

          <p>
            <Mail size={16} />
            <span>Business@elvrixtechsolutions.com</span>
          </p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 The Olive Table. All rights reserved.</p>

        <p>~ Created by Elvrix TechSolution</p>
      </div>

    </footer>
  );
};

const ClockText = () => (
  <span className="clock-dot">●</span>
);

export default Footer;
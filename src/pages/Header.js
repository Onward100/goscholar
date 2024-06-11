import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="header">
      <div className="fixed-header">
      <div className="header-content">
        <div className="logo">
          <h2>GoScholar</h2>
          {isOpen ? (
            <FaTimes onClick={toggle} className="menu" />
          ) : (
            <FaBars onClick={toggle} className="menu" />
          )}
        </div>
        <ul className={isOpen ? "nav-links open" : "nav-links"}>
          <Link to="/" className="link" onClick={closeMenu}>
            <li>Home</li>
          </Link>
          <Link to="/about" className="link" onClick={closeMenu}>
            <li>About</li>
          </Link>
          <Link to="/services" className="link" onClick={closeMenu}>
            <li>Services</li>
          </Link>
          <Link to="/blog" className="link" onClick={closeMenu}>
            <li>Blog</li>
          </Link>
          <Link to="/contact" className="link" onClick={closeMenu}>
            <li>Contact</li>
          </Link>
          <Link to="/getstarted" className="link" onClick={closeMenu}>
            <li>Get Started</li>
          </Link>
        </ul>
      </div>
      </div>
    </div>
  );
}

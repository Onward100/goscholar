import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes} from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const dropDownToggle = () => {
     setDropDown(!dropDown);
     console.log('log')
  }
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
            <div className="dropDown">
              <li onClick={dropDownToggle}>
                Services <FaChevronDown />
              </li>
              {dropDown && (
                <ul className="dropDown-menu">
                  <li onClick={closeMenu}>
                    <Link className="services--link">Voice Over</Link>
                  </li>
                  <li onClick={closeMenu}>
                    <Link className="services--link">Academic writing</Link>
                  </li>
                  <li >
                    <Link className="services--link">Academic writing</Link>
                  </li>
                </ul>
              )}
            </div>
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

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes} from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import logo from '../goscholar-logo.png'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [show, setShow] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const handleShow = () => setShow(!show);
  const dropDownToggle = () => {
     setDropDown(!dropDown);
  }
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="header">
      <div className="fixed-header">
        <div className="header-content">
          <div className="logo">
           <Link to='/'> <img src={logo} alt="GoScholar" className="goscholar--logo" /></Link>
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
                    <Link className="services--link">Academic writing</Link>
                  </li>
                  <li onClick={closeMenu}>
                    <Link className="services--link">SOP & Research proposals</Link>
                  </li>
                  <li >
                    <Link className="services--link">Business proposal writing</Link>
                  </li>
                  <li >
                    <Link className="services--link">Branding & Design</Link>
                  </li>
                  <li >
                    <Link className="services--link">Proofreading</Link>
                  </li>
                  <li >
                    <Link className="services--link">Advert and promotions</Link>
                  </li>
                  <li >
                    <Link className="services--link">Thesis</Link>
                  </li>
                  <li >
                    <Link className="services--link">Term Paper</Link>
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
            <div className="getStarted--dropdown">
              <button onClick={handleShow} className="getStarted--btn">
                Get Started <FaChevronDown />
              </button>
              {show && (
                <ul className="getStarted-menu">
                  <li onClick={closeMenu}>
                    <Link to='/getstarted' className="services--link">For Academic Services</Link>
                  </li>
                  <li onClick={closeMenu}>
                    <Link className="services--link">For Business Services</Link>
                  </li>
                </ul>
              )}
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <footer className="footer">
        <div>
          <div className="footer--content">
            {/* Vita Links */}
            <div className="vital--links">
              <h2>VITAL LINKS</h2>
              <ul>
                <li>
                  <Link className= 'social-link' to="/about">Meet us</Link>
                </li>
                <li>
                  <Link  className= 'social-link'to="/services">Services</Link>
                </li>
                <li>
                  <Link className= 'social-link' to="/blog">Latest News</Link>
                </li>
                <li>
                  <Link  className= 'social-link'to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            <br />
            {/* Our Services Links */}
            <div className="our--services">
              <h2>OUR SERVICES</h2>
              <ul>
                <li>
                  <Link className= 'social-link' to="/services">Academic Writing</Link>
                </li>
                <li>
                  <Link className= 'social-link' to="/services">SOP & Research Proposals</Link>
                </li>
                <li>
                  <Link className= 'social-link' to="/services">Proofreading</Link>
                </li>
                <li>
                  <Link className= 'social-link' to="/services">Business proposal writing</Link>
                </li>
                <li>
                  <Link className= 'social-link' to="/services">Advert and promotions</Link>
                </li>
                <li>
                  <Link className= 'social-link' to="/services">Voice Over</Link>
                </li>
                <li>
                  <Link className= 'social-link' to="/services">Branding & Design</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="social">
          <ul>
            <li>
              <Link to="/"className= 'social-link' >
                <FaFacebook />
              </Link>
            </li>
            <li>
              <Link to="/" className="social-link">
                <FaX />
              </Link>
            </li>
            <li>
              <Link to="/"className= 'social-link' >
                <FaYoutube />
              </Link>
            </li>
            <li>
              <Link to="/"className= 'social-link' >
                <FaLinkedin />
              </Link>
            </li>
          </ul>
          <p>
            © 2024 Goscholar | The leading education support network. All rights
            reserved.
          </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

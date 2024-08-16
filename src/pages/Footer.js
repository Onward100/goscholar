import React from "react";
import {
  FaChevronRight,
  FaEnvelope,
  FaFacebook,
  FaLinkedin,
  FaPhoneAlt,
  FaYoutube,
} from "react-icons/fa";
import { FaLocationDot, FaX } from "react-icons/fa6";
import { Link } from "react-router-dom";
import servicesDetails from "./servicesData";

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
                  <Link className="social-link" to="/about">
                    Meet us
                  </Link>
                </li>
                <li>
                  <Link className="social-link" to="/services">
                    Services
                  </Link>
                </li>
                <li>
                  <Link className="social-link" to="/blog">
                    Latest News
                  </Link>
                </li>
                <li>
                  <Link className="social-link" to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <br />
            {/* Our Services Links */}
            <div className="our--services">
              <h2>OUR SERVICES</h2>
             <div className="our-services-links">
             <ul>
                <li>
                  <Link className="social-link" to="/services">
                    Academic Writing
                  </Link>
                </li>
                <li>
                  <Link className="social-link" to="/services">
                    SOP & Research Proposals
                  </Link>
                </li>
                <li>
                  <Link className="social-link" to="/services">
                    Proofreading
                  </Link>
                </li>
                <li>
                  <Link className="social-link" to="/services">
                    Business proposal writing
                  </Link>
                </li>
                <li>
                  <Link className="social-link" to="/services">
                    Advert and promotions
                  </Link>
                </li>
                <li>
                  <Link className="social-link" to="/services">
                    Voice Over
                  </Link>
                </li>
              </ul>
              <ul className="links-right">
                <li>
                  <Link className="social-link" to="/services">
                    Content Marketing
                  </Link>
                </li>
                <li>
                  <Link className="social-link" to="/services">
                    Social Media Management
                  </Link>
                </li>

                <li>
                  <Link className="social-link" to="/services">
                    Branding & Design
                  </Link>
                </li>
              </ul>
             </div>
            </div>
            <div className="footer-newsletter">
              <p>Stay ahead in business and learning!</p>
              <div className="footer-newsletter-input">
                <input type="text" placeholder="email address" />
                <button>
                  <FaChevronRight className="newsletter-icon" />
                </button>
              </div>
              <p>
                Subscribe to be our newsletter for top business and educational
                tips.
              </p>
            </div>
          </div>
<hr />
          <div className="information">
            <div className="info-number information-info">
              <div className="info-social-icon">
                <FaPhoneAlt className="information-icon" />
              </div>
              <p>+23409159523278</p>
            </div>
            <div className="info-email information-info">
              <div className="info-social-icon">
                <FaEnvelope className="information-icon" />
              </div>
              <p>Hello@goscholar.com.ng</p>
            </div>
            <div className="info-location information-info">
              <div className="info-social-icon">
                <FaLocationDot className="information-icon" />
              </div>
              <p>Lagos,Nigeria</p>
            </div>
          </div>
          <hr />
          <div className="social">
            <ul>
              <p>Follow us on</p>
              <li>
                <Link to="/" className="social-link">
                  <FaFacebook />
                </Link>
              </li>
              <li>
                <Link to="/" className="social-link">
                  <FaX />
                </Link>
              </li>
              <li>
                <Link to="/" className="social-link">
                  <FaYoutube />
                </Link>
              </li>
              <li>
                <Link to="/" className="social-link">
                  <FaLinkedin />
                </Link>
              </li>
            </ul>
            <p>
              © 2024 Goscholar | The leading education support network. All
              rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

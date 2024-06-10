import React, { useState } from "react";
import contactImage from "../goscholar-contact.jpg";
import { FaPhoneAlt, FaEnvelope, FaSearchLocation } from "react-icons/fa";
import Footer from "../pages/Footer";
import { Link } from "react-router-dom";

export default function Contact() {
  const [contactForm, setContactForm] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [showModal, setShowModal] = useState(false);
  function handleChange(e) {
    const { name, value } = e.target;
    setContactForm((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (contactForm.name && contactForm.phone && contactForm.email) {
      setShowModal(true);
      setTimeout(() => {
        setShowModal(false);
      }, 3000);
      setContactForm({
        name: "",
        phone: "",
        email: "",
      });
      localStorage.setItem("contactForm", JSON.stringify(contactForm));
    } else {
      alert("Please fill in all fields");
    }
  };
  return (
    <div className="contact all--pages">
      <div className="contact-details">
        <div className="contact-bg">
          <img className="image2" src={contactImage} alt="About us" />
          <div className="image-overlay">
            <div className="image-overlay-content">
              <h1>Contact Us</h1>
              <p>
                Ready to elevate your success? Contact us today to learn more
                about how GOSCHOLAR can help you achieve your academic and
                business objectives. Let us turn your ideas into reality
              </p>
            </div>
          </div>
        </div>
        <div className="contact-content-container">
          <div className="contact-address">
            <div className="contact-phone-details">
              <div className="phone-content">
                <FaPhoneAlt className="contact-icon"/>
                <div className="phone-text">
                  <h5>Call us on</h5>
                </div>
              </div>
              <p>Tel Number: (234) 701 678 9077</p>
            </div>

            <div className="contact-phone-details">
              <div className="phone-content">
                <FaEnvelope className="contact-icon"/>
                <div className="phone-text">
                  <h5>Send us a mail</h5>
                </div>
              </div>
              <Link to='mailto:worukaonward@gmail.com' className='contact-email'>
              <p>support@goscholar.com</p>
              </Link>
            </div>
            <div className="contact-phone-details">
              <div className="phone-content">
                <FaSearchLocation className="contact-icon"/>
                <div className="phone-text">
                  <h5>Visit Us At</h5>
                </div>
              </div>
              <p>123 Main Street, Allen Avenue, Ikeja, Lagos State.</p>
            </div>
          </div>
          <div className="contact-content">
            <div className="contact-header">
              <h2>Get in Touch</h2>
            </div>
            <div className="contact-form">
              <input
                name="name"
                type="text"
                value={contactForm.name}
                onChange={handleChange}
                placeholder="Name"
              />
              <input
                name="phone"
                type="tel"
                value={contactForm.phone}
                onChange={handleChange}
                placeholder="Phone Number"
              />
              <input
                name="email"
                type="text"
                value={contactForm.email}
                onChange={handleChange}
                placeholder="Email address"
              />
            </div>
            <button className="button send-btn" onClick={handleSubmit}>
              Send
            </button>
            {showModal && (
              <p style={{ textAlign: "center", color: "green" }}>
                Thank you for messaging us!
              </p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { client } from "../client";
import {
  FaLightbulb
} from "react-icons/fa";
import SliderPage from "../SliderPage";
import Image from "../why-choose.png";
import ContactImg from "../goscholar-contact.png";
import Footer from "./Footer";
import Aos from "aos";
import "aos/dist/aos.css";
import { FaShareNodes } from "react-icons/fa6";
import Rating from "../pages/Rating";
import services from "./servicesData";
import { FaChevronDown } from "react-icons/fa6";

export default function HomePage() {
  useEffect(() => {
    Aos.init();
  }, []);

  //Blog

  const [posts, setPosts] = useState([]);
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(!show);
  const closeMenu = () => setShow(false);

  useEffect(() => {
    client
      .fetch(
        `
        *[_type == "post"]{
          title,
            slug,
                  body,
                  mainImage {
                    asset -> {
                      _id,
                      url
                    },
                    alt
            }
        }
        `
      )
      .then((data) => {
        setPosts(data);
      })
      .catch(console.error);
  }, []);

  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      localStorage.setItem("Form data:", JSON.stringify(contactForm));
      setSuccessMessage("Message sent successfully!");
      setContactForm({
        name: "",
        email: "",
        message: "",
      });
      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
    } else {
      setErrors(newErrors);
      setTimeout(() => {
        setErrors({});
      }, 3000);
    }
  };

  const validateForm = () => {
    const { name, email, message } = contactForm;
    const newErrors = {};

    if (!name) newErrors.name = "Name is required";
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
    }
    if (!message) newErrors.message = "Message is required";

    return newErrors;
  };

  const handleShare = (post) => {
    if (navigator.share) {
      navigator
        .share({
          title: post.title,
          url: `${window.location.origin}/blog/${post.slug.current}`,
        })
        .then(() => {
          console.log("Thanks for sharing!");
        })
        .catch(console.error);
    } else {
      alert(
        "Sharing is not supported in your browser. Copy the link manually: " +
          `${window.location.origin}/blog/${post.slug.current}`
      );
    }
  };

  return (
    <div className="landingpage">
      <section className="landingpage-content">
        <div className="background">
          <SliderPage />
        </div>
        <div className="background-overlay">
          <div className="overlay-content">
            <h1 data-aos="fade-up" data-aos-duration="1000">
              Your Gateway to Academic Excellence and Business Triumph.
            </h1>
            <p data-aos="fade-up" data-aos-duration="1500">
              Empower your success with top-notch academic writing, persuasive
              proposals, captivating ads, professional voice overs, and standout
              branding websites.
            </p>
            <div className="getStarted--dropdown">
              <button onClick={handleShow} className="getStarted--btn">
                Get Started <FaChevronDown />
              </button>
              {show && (
                <ul className="getStarted-menu">
                  <li onClick={closeMenu}>
                    <Link to='/getstarted' className="services--link">For Academic</Link>
                  </li>
                  <li onClick={closeMenu}>
                    <Link className="services--link">For Business</Link>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </section>

      <div className="services-section">
        <h1 className="intro--header">Our Services</h1>
        <div className="services-section-content">
          {services.map((service) => (
            <div key={service.id} className="services">
              <img src={service.image} alt={service.name} />
              <h1>{service.name}</h1>
              <Link to={`/services/${service.id}`} className="services--btn">
                Get Started
              </Link>
            </div>
          ))}
        </div>
      </div>

      <Rating />

      <div className="why-choose-us">
        <h2 className="intro--header">Why Choose Us</h2>
        <div className="why-choose-content">
          <div className="why-choose--info">
            <div className="creativity">
              <div className="info info1">
                <span className="bulb-icon">
                  <FaLightbulb className="info-icon" />
                </span>
                <span>Creativity</span>
              </div>
              <div className="info info2">
                <span className="bulb-icon">
                  <FaLightbulb className="info-icon" />
                </span>
                <span>Affordability</span>
              </div>
            </div>
            <div className="prof">
              <div className="info info3">
                <span className="bulb-icon">
                  <FaLightbulb className="info-icon" />
                </span>
                <span>Timeliness</span>
              </div>
              <div className="info info4">
                <span className="bulb-icon">
                  <FaLightbulb className="info-icon" />
                </span>
                <span>Professionalism</span>
              </div>
            </div>
          </div>
          <div className="why-choose-img">
            <img src={Image} className="why-choose-img" />
          </div>
        </div>
      </div>

      <br />

      <div className="client-feedback">
        <h2 className="intro--header">Our Clients Feedback</h2>
        <div className="client-feedback-cards">
          <div
            className="feedback-card"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="feedback-header">
              <img src={Image} className="feedback-img" />
              <div className="feedback-card-header">
                <h3>John Doe</h3>
                <p>Manager</p>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              dolorem, dolores culpa nisi reprehenderit necessitatibus
              cupiditate quae quaerat dolore natus blanditiis eaque veritatis
              magnam ipsa repellendus vel corrupti rerum deleniti dicta odio
              fuga. Modi fuga ut facere, culpa eius cupiditate.
            </p>
          </div>
          <div
            className="feedback-card"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div className="feedback-header">
              <img src={Image} className="feedback-img" />
              <div className="feedback-card-header">
                <h3>John Doe</h3>
                <p>Manager</p>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              dolorem, dolores culpa nisi reprehenderit necessitatibus
              cupiditate quae quaerat dolore natus blanditiis eaque veritatis
              magnam ipsa repellendus vel corrupti rerum deleniti dicta odio
              fuga. Modi fuga ut facere, culpa eius cupiditate.
            </p>
          </div>
          <div
            className="feedback-card"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div className="feedback-header">
              <img src={Image} className="feedback-img" />
              <div className="feedback-card-header">
                <h3>John Doe</h3>
                <p>Manager</p>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              dolorem, dolores culpa nisi reprehenderit necessitatibus
              cupiditate quae quaerat dolore natus blanditiis eaque veritatis
              magnam ipsa repellendus vel corrupti rerum deleniti dicta odio
              fuga. Modi fuga ut facere, culpa eius cupiditate.
            </p>
          </div>
        </div>
      </div>

      <div className="contact2">
        <div className="contact2-img">
          <img src={ContactImg} />
        </div>
        <div className="contact2-form">
          <h2>Book us now</h2>
          <form onSubmit={handleSubmit} className="contact2-form-content">
            <label htmlFor="name">Name</label>
            <br />
            <input
              type="text"
              name="name"
              value={contactForm.name}
              placeholder="Enter a name"
              onChange={handleChange}
              className="contact2-input"
            />
            {errors.name && <span className="error-msg">{errors.name}</span>}
            <br />
            <label htmlFor="email">Email</label>
            <br />
            <input
              type="text"
              name="email"
              value={contactForm.email}
              placeholder="Enter your email"
              onChange={handleChange}
              className="contact2-input"
            />
            {errors.email && <span className="error-msg">{errors.email}</span>}
            <br /><br />
            <select onChange={handleChange} className="services-dropdown">
              <option value="">Select a Service</option>
              <option value="academic-writing">Academic Writing</option>
              <option value="voice-over">Voice Over</option>
              <option value="editing">SOP & Research proposals</option>
              <option value="proofreading">Proofreading</option>
              <option value="translation">Business proposal writing</option>
              <option value="transcription">Advert and promotions</option>
              <option value="copywriting">Branding & Design</option>
              <option value="content-creation">Thesis</option>
            </select>
            <br /><br />
            <label htmlFor="message">Message</label>
            <br />
            <textarea
              type="text"
              name="message"
              value={contactForm.message}
              onChange={handleChange}
              className="contact2-input"
            />
            {errors.message && (
              <span className="error-msg">{errors.message}</span>
            )}
            <br />
            <button type="submit" className="button contact2-btn">
              Send
            </button>
            {successMessage && (
              <span className="success-msg">{successMessage}</span>
            )}
          </form>
        </div>
      </div>

      <section className="blog">
        <div className="blog--content">
          <h2 className="intro--header">Our Latest News Feed</h2>
          <div className="blog--section">
            <div className="blog--cards">
              {posts &&
                posts.slice(0, 3).map((post) => (
                  <article key={post._id}>
                    <img src={post.mainImage.asset.url} alt={post.title} />
                    <h4>{post.title}</h4>
                    <div className="blog-link">
                      <Link
                        className="blog--links"
                        to={`/blog/${post.slug.current}`}
                      >
                        Read more
                      </Link>
                    </div>
                     <p onClick={() => handleShare(post)} className="share--btn"><FaShareNodes/> Share</p>
                  </article>
                ))}
            </div>
            <div className="show-more-blog">
              <Link className="show-more-link" to="/blog">
                See More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-content">
        <div className="faq--content">
          <h2 className="intro--header">FAQ</h2>
          <div className="faq--section">

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

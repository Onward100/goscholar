import React, { useEffect } from "react";
import AboutImage from "../About-bg.png";
import serviceImage4 from "../services-bg4.png";
import serviceImage2 from "../services-bg2.png";
import serviceImage7 from "../services-bg7.png";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Aos from "aos";
import "aos/dist/aos.css";

export default function About() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="about--page all--pages">
      <div className="bg-about">
        <img className="image2" src={AboutImage} alt="About us" />
        <h1>Who We Are</h1>
      </div>
      <div className="about--content">
        <div className="about--content1">
          <div className="about-content-text" data-aos="zoom-in" data-aos-duration="1000">
            <h1>About Us</h1>
            <p>
              We are your one-stop solution for all your professional writing,
              branding, and promotional needs. We are dedicated to helping you
              achieve your goals through expert services tailored to meet the
              unique demands of academia, business, and beyond.
            </p>
            <Link className="mail" to="mailto: worukaonard@gmail.com">
              <button className="services--btn">SEND US A MAIL</button>
            </Link>
          </div>
          <div className="about-img" data-aos="zoom-in" data-aos-duration="1500">
            <img src={serviceImage4} />
          </div>
        </div>
        <br />

        <div className="about--content1 vision">
          <div className="about-content-text" data-aos="zoom-in" data-aos-duration="1000">
            <h1>Our Vision</h1>
            <p>
              To be an excellent provider of access to world-class education
              opportunities to all, and to be an inspiration to our partner
              institutions and our students to take action to change our local
              and global communities.
            </p>
          </div>
          <div className="about-img" data-aos="zoom-in" data-aos-duration="1500">
            <img src={serviceImage7} />
          </div>
        </div>

        <br />
        <div className="about--content1 mission">
          <div className="about-content-text" data-aos="zoom-in" data-aos-duration="1000">
            <h1>Our Mission</h1>
            <p>
              To provide our services in the most ethical and professional
              manner to all our students and partners; and to provide a very
              safe, comfortable and stimulating environment for our staff,
              students, partner institutions and any one in need of our
              services.
            </p>
          </div>
          <div className="about-img" data-aos="zoom-in" data-aos-duration="1500">
            <img src={serviceImage2} />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

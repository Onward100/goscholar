import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import servicesBgImage from "../Goscholar-services-bg.png";
import serviceImage1 from "../services-bg1.png";
import serviceImage2 from "../services-bg2.png";
import serviceImage3 from "../services-bg3.png";
import serviceImage4 from "../services-bg4.png";
import serviceImage6 from "../services-bg6.png";
import serviceImage7 from "../services-bg7.png";
import Aos from "aos";
import 'aos/dist/aos.css'

export default function Services() {
  useEffect(() =>{
    Aos.init()
  })
  return (
    <div className="services-page all--pages">
      <div className="services-container">
        <div className="services-bg">
        <img src={servicesBgImage} alt="Image" />
        </div>
        <div className="services--content">
          <h2 className="intro--header">Our Services</h2>
          <div className="service--content">
            <div className="service--img" data-aos="zoom-in" data-aos-duration="1000">
              <img src={serviceImage1} />
            </div>
            <div className="service-text-content" data-aos="zoom-in" data-aos-duration="1500">
              <h2>Academic Writing</h2>
              <p>
                Unlock your academic potential with our top-tier academic
                writing services. Our experienced writers specialize in creating
                well-researched, meticulously structured papers that adhere to
                the highest academic standards. Whether you need essays,
                research papers, dissertations, or scholarly articles, we ensure
                your work stands out.
              </p>
              <Link className="services--link">
                <button className="services--btn">Get Started</button>
              </Link>
            </div>
          </div>

          <div className="service--content content2">
            <div className="service--img" data-aos="zoom-in" data-aos-duration="1500">
              <img src={serviceImage4} />
            </div>
            <div className="service-text-content" data-aos="zoom-in" data-aos-duration="1000">
              <h2>Advertisement and Promotions</h2>
              <p>
                Capture your audience's attention with our strategic advertising
                and promotional services. From crafting compelling ad copy to
                designing eye-catching visuals, we help you stand out in a
                crowded market and drive engagement.
              </p>
              <Link className="services--link">
                <button className="services--btn">Get Started</button>
              </Link>
            </div>
          </div>

          <div className="service--content content3">
            <div className="service--img" data-aos="zoom-in" data-aos-duration="1500">
              <img src={serviceImage2} />
            </div>
            <div className="service-text-content" data-aos="zoom-in" data-aos-duration="1000">
              <h2>Branding & Design</h2>
              <p>
                Establish a strong online presence with our bespoke branding
                website services. We design and develop modern, user-friendly
                websites that reflect your brand's identity and engage your
                audience effectively.
              </p>
              <Link className="services--link">
                <button className="services--btn">Get Started</button>
              </Link>
            </div>
          </div>

          <div className="service--content content4">
            <div className="service--img" data-aos="zoom-in" data-aos-duration="1000">
              <img src={serviceImage3} />
            </div>
            <div className="service-text-content" data-aos="zoom-in" data-aos-duration="1500">
              <h2>Business Proposal and Writing</h2>
              <p>
                Seal the deal with our professionally crafted business
                proposals. We create persuasive, comprehensive proposals that
                clearly articulate your value proposition and drive business
                success. Let us help you win contracts and secure partnerships.
              </p>
              <Link className="services--link">
                <button className="services--btn">Get Started</button>
              </Link>
            </div>
          </div>

          <div className="service--content content5">
            <div className="service--img" data-aos="zoom-in" data-aos-duration="1000">
              <img src={serviceImage1} />
            </div>
            <div className="service-text-content" data-aos="zoom-in" data-aos-duration="1500">
              <h2>CopyWriting & Proofreading</h2>
              <p>
                Precision and clarity are essential for effective communication.
                Our proofreading services ensure your documents are error-free
                and polished, while our copywriting services deliver engaging,
                persuasive content tailored to your audience.
              </p>
              <Link className="services--link">
                <button className="services--btn">Get Started</button>
              </Link>
            </div>
          </div>

          <div className="service--content content6">
            <div className="service--img" data-aos="zoom-in" data-aos-duration="1000">
              <img src={serviceImage7} />
            </div>
            <div className="service-text-content" data-aos="zoom-in" data-aos-duration="1500">
              <h2>Statement of Purpose (SOP) and Research Proposals</h2>
              <p>
                Crafting a compelling SOP or research proposal is crucial for
                securing admissions, grants, and research opportunities. Our
                expert writers will help you articulate your strengths, goals,
                and aspirations in a clear and persuasive manner, giving you the
                edge you need.
              </p>
              <Link className="services--link">
                <button className="services--btn">Get Started</button>
              </Link>
            </div>
          </div>

          <div className="service--content content7">
            <div className="service--img" data-aos="zoom-in" data-aos-duration="1000">
              <img src={serviceImage6} />
            </div>
            <div className="service-text-content" data-aos="zoom-in" data-aos-duration="1500">
              <h2>Voice Over Services</h2>
              <p>
                Our professional voice over services bring your scripts to life.
                Whether it's for commercials, corporate videos, e-learning
                modules, or any other project, our talented voice artists
                deliver clear, engaging, and impactful voice overs.
              </p>
              <Link className="services--link">
                <button className="services--btn">Get Started</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Aos from "aos";
import "aos/dist/aos.css";
import services from "./servicesData";

export default function Services() {
  useEffect(() => {
    Aos.init();
  });

  return (
    <div className="services-page all--pages service">
      <h1 className="intro--header">Our Services</h1>
      <div className="services--page">
        {services.map((service) => (
          <div key={service.id} className="services">
            <img src={service.image} alt={service.name} />
            <h2>{service.name}</h2>
            <Link to={`/services/${service.id}`} className="services--btn">
              Get Started
            </Link>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

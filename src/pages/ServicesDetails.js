import React from "react";
import { useParams } from "react-router-dom";
import servicesDetails  from "./servicesData";
import { Link } from "react-router-dom";

const ServicesDetails = () => {
  const { id } = useParams();
  const service = servicesDetails.find(
    (service) => service.id === parseInt(id, 10)
  );

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div className="service all--pages">
      <div className="servicesDetails">
        <h1>{service.name}</h1>
        <img src={service.image} alt={service.name} />
        <p>{service.description}</p>

        <Link to="/" className="services--btn">
          Go back
        </Link>
      </div>
    </div>
  );
};

export default ServicesDetails;

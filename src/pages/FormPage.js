import React, { useState } from "react";
import FieldsetData from "../FieldsetData";
import Modal from "./Modal";

export default function FormPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [show, setShow] = useState(false);

  function handleChange(e) {
    const { type, value, checked, name } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setShow(!show);
    localStorage.setItem("formData", JSON.stringify(formData));
  }

  return (
    <div className="form--page">
      {show ? (
        <div className="modal--overlay">
          <Modal />
        </div>
      ) : (
        <div className="form-page-content">
          <p>
            <span>*</span> Required
          </p>
          <form className="form--data" onSubmit={handleSubmit}>
            <legend>
              1. Name <span>*</span>
            </legend>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your answer"
              className="input"
            />
            <legend>
              2. Email Address <span>*</span>
            </legend>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your answer"
              className="input"
            />
            <legend>
              3. Phone Number <span>*</span>
            </legend>
            <input
              type="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your answer"
              className="input"
            />
            <FieldsetData />
            <button type="submit" className="submit--btn">
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

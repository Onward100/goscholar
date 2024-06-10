import React, { useState } from "react";

export default function FieldsetData() {
  const [fieldset, setFieldset] = useState({
    graduate: "",
    otherInput: "",
    academicField: "",
    study: "",
    typeOfProject: "",
    educationalServices: "",
    projectSummary: "",
    startDate: "",
    endDate: "",
    nameOfInstitution: "",
    countryOfInstitution: "",
    additionalInfo: "",
    currency: "",
    projectBudget: "",
    hearAboutUs: "",
  });
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    if (type === "checkbox") {
      const selectedOptions = [...fieldset[name]];

      if (checked) {
        selectedOptions.push(value);
      } else {
        const index = selectedOptions.indexOf(value);
        if (index !== -1) {
          selectedOptions.splice(index, 1);
        }
      }

      setFieldset({ ...fieldset, [name]: selectedOptions });
    } else {
      setFieldset({ ...fieldset, [name]: value });
    }
    localStorage.setItem("fieldset", JSON.stringify(fieldset));
  };
  return (
    <div>
      <fieldset>
        <legend>
          4. What is your eduction level? <span>*</span>
        </legend>
        <input
          type="radio"
          id="undergraduate"
          name="graduate"
          value="undergraduate"
          checked={fieldset.graduate === "undergraduate"}
          onChange={handleChange}
          style={{ marginRight: "10px" }}
        />
        <label htmlFor="undergraduate">Undergraduate</label>
        <br />
        <input
          className="radio--btn"
          type="radio"
          id="post-graduate"
          name="graduate"
          value="post-graduate"
          checked={fieldset.graduate === "post-graduate"}
          onChange={handleChange}
          style={{ marginRight: "10px" }}
        />
        <label htmlFor="post-graduate">Post Graduate</label>
        <br />
        <input
          className="radio--btn"
          type="radio"
          id="mba"
          name="graduate"
          value="mba"
          checked={fieldset.graduate === "mba"}
          onChange={handleChange}
          style={{ marginRight: "10px" }}
        />
        <label htmlFor="mba">Mba</label>
        <br />
        <input
          className="radio--btn"
          type="radio"
          id="masters"
          name="graduate"
          value="masters"
          checked={fieldset.graduate === "masters"}
          onChange={handleChange}
          style={{ marginRight: "10px" }}
        />
        <label htmlFor="masters">Masters</label>
        <br />
        <input
          type="radio"
          id="others"
          name="graduate"
          value="others"
          checked={fieldset.graduate === "others"}
          onChange={handleChange}
          style={{ marginRight: "5px" }}
        />

        <input
          type="text"
          id="otherInput"
          name="otherInput"
          placeholder="Other"
          value={fieldset.otherInput}
          onChange={handleChange}
          className="other"
        />
      </fieldset>
      <br />

      <fieldset>
        <legend>
          5. Academic Field <span>*</span>
        </legend>
        <input
          type="radio"
          id="social-science"
          name="academicField"
          value="social-science"
          checked={fieldset.academicField === "social-science"}
          onChange={handleChange}
          style={{ marginRight: "10px" }}
        />
        <label htmlFor="social-science">Social Sciences</label>
        <br />
        <input
          className="radio--btn"
          type="radio"
          id="art-humanity"
          name="academicField"
          value="art-humanity"
          checked={fieldset.academicField === "art-humanity"}
          onChange={handleChange}
          style={{ marginRight: "10px" }}
        />
        <label htmlFor="art-humanity">Art & Humanities</label>
        <br />
        <input
          className="radio--btn"
          type="radio"
          id="law"
          name="academicField"
          value="law"
          checked={fieldset.academicField === "law"}
          onChange={handleChange}
          style={{ marginRight: "10px" }}
        />
        <label htmlFor="law">Law</label>
        <br />
        <input
          className="radio--btn"
          type="radio"
          id="education"
          name="academicField"
          value="education"
          checked={fieldset.academicField === "education"}
          onChange={handleChange}
          style={{ marginRight: "10px" }}
        />
        <label htmlFor="education">Education</label>
        <br />
        <input
          className="radio--btn"
          type="radio"
          id="natural-science"
          name="academicField"
          value="natural-science"
          checked={fieldset.academicField === "natural-science"}
          onChange={handleChange}
          style={{ marginRight: "10px" }}
        />
        <label htmlFor="natural-science">Natural Sciences</label>
      </fieldset>
      <br />

      <legend htmlFor="study">
        6. What is your course of study? <span>*</span>
      </legend>
      <input
        className="input"
        type="text"
        value={fieldset.study}
        name="study"
        placeholder="Enter your answer"
        onChange={handleChange}
      />
      <br />

      <fieldset>
        <legend>
          7. Type of project? <span>*</span>
        </legend>
        <input
          type="radio"
          id="dissertation"
          name="typeOfProject"
          value="dissertation"
          checked={fieldset.typeOfProject === "dissertation"}
          onChange={handleChange}
          style={{ marginRight: "10px" }}
        />
        <label htmlFor="dissertation">Dissertation</label>
        <br />
        <input
          className="radio--btn"
          type="radio"
          id="essay"
          name="typeOfProject"
          value="essay"
          checked={fieldset.typeOfProject === "essay"}
          onChange={handleChange}
          style={{ marginRight: "10px" }}
        />
        <label htmlFor="essay">Essay</label>
        <br />
        <input
          className="radio--btn"
          type="radio"
          id="termPaper"
          name="typeOfProject"
          value="termPaper"
          checked={fieldset.typeOfProject === "termPaper"}
          onChange={handleChange}
          style={{ marginRight: "10px" }}
        />
        <label htmlFor="termPaper">Term paper</label>
        <br />
        <input
          className="radio--btn"
          type="radio"
          id="researchPaper"
          name="typeOfProject"
          value="researchPaper"
          checked={fieldset.typeOfProject === "researchPaper"}
          onChange={handleChange}
          style={{ marginRight: "10px" }}
        />
        <label htmlFor="researchPaper">Research Paper</label>
        <br />
        <input
          className="radio--btn"
          type="radio"
          id="thesis"
          name="typeOfProject"
          value="thesis"
          checked={fieldset.typeOfProject === "thesis"}
          onChange={handleChange}
          style={{ marginRight: "10px" }}
        />
        <label htmlFor="thesis">Thesis</label>
        <br />
        <input
          type="radio"
          id="others"
          name="typeOfProject"
          value="others"
          checked={fieldset.typeOfProject === "others"}
          onChange={handleChange}
          style={{ marginRight: "5px" }}
        />

        <input
          type="text"
          id="otherInput"
          name="otherInput"
          placeholder="Other"
          value={fieldset.otherInput}
          onChange={handleChange}
          className="other"
        />
      </fieldset>
      <br />

      <fieldset>
        <legend>
          8. Educational Services <span>*</span>
        </legend>
        <input
          type="radio"
          id="letterOfMotivation"
          name="educationalServices"
          value="letterOfMotivation"
          checked={fieldset.educationalServices === "letterOfMotivation"}
          onChange={handleChange}
          style={{ marginRight: "10px" }}
        />
        <label htmlFor="letterOfMotivation">Letter Of Motivation</label>
        <br />
        <input
          className="radio--btn"
          type="radio"
          id="AcademicCv"
          name="educationalServices"
          value="AcademicCv"
          checked={fieldset.educationalServices === "AcademicCv"}
          onChange={handleChange}
          style={{ marginRight: "10px" }}
        />
        <label htmlFor="AcademicCv">Academic CV</label>
        <br />
        <input
          className="radio--btn"
          type="radio"
          id="proofReading"
          name="educationalServices"
          value="proofReading"
          checked={fieldset.educationalServices === "proofReading"}
          onChange={handleChange}
          style={{ marginRight: "10px" }}
        />
        <label htmlFor="proofReading">Proofreading</label>
        <br />
        <input
          className="radio--btn"
          type="radio"
          id="statementOfPurpose"
          name="educationalServices"
          value="statementOfPurpose"
          checked={fieldset.educationalServices === "statementOfPurpose"}
          onChange={handleChange}
          style={{ marginRight: "10px" }}
        />
        <label htmlFor="statementOfPurpose">Statement of Purpose</label>
        <br />
        <input
          type="radio"
          id="others"
          name="educationalServices"
          value="others"
          checked={fieldset.educationalServices === "others"}
          onChange={handleChange}
          style={{ marginRight: "5px" }}
        />

        <input
          type="text"
          id="otherInput"
          name="otherInput"
          placeholder="Other"
          value={fieldset.otherInput}
          onChange={handleChange}
          className="other"
        />
      </fieldset>
      <br />

      <legend htmlFor="projectSummary">
        9. Project brief summary? (Tell us a little bit more about your project)
        <span>*</span>
      </legend>
      <textarea
        className="input"
        type="text"
        value={fieldset.projectSummary}
        name="projectSummary"
        placeholder="Enter your answer"
        onChange={handleChange}
      />
      <br />

      <legend htmlFor="startDate">
        10. Proposed project start date? (Note: Payment determines project start
        date) <span>*</span>
      </legend>
      <input
        className="input"
        type="date"
        value={fieldset.startDate}
        name="startDate"
        placeholder="Please input start date"
        onChange={handleChange}
      />
      <br />

      <legend htmlFor="endDate">
        11. Project Delivery Due Date? <span>*</span>
      </legend>
      <input
        className="input"
        type="date"
        value={fieldset.endDate}
        name="endDate"
        placeholder="Please input end date"
        onChange={handleChange}
      />
      <br />

      <legend htmlFor="nameOfInstitution">
        12. Name of Institution? <span>*</span>
      </legend>
      <input
        className="input"
        type="text"
        value={fieldset.nameOfInstitution}
        name="nameOfInstitution"
        placeholder="Enter your answer"
        onChange={handleChange}
      />
      <br />

      <legend htmlFor="countryOfInstitution">
        13. Country of Institution? <span>*</span>
      </legend>
      <input
        className="input"
        type="text"
        value={fieldset.countryOfInstitution}
        name="countryOfInstitution"
        placeholder="Enter your answer"
        onChange={handleChange}
      />
      <br />

      <legend htmlFor="additionalInfo">
        14. Additional information that would be helpful to the project (No. of
        pages, referencing style, project sample and structure, etc.)?
        <span>*</span>
      </legend>
      <textarea
        className="input"
        type="text"
        value={fieldset.additionalInfo}
        name="additionalInfo"
        placeholder="Enter your answer"
        onChange={handleChange}
      />
      <br />

      <fieldset>
        <legend>
          15. What currency are you paying in? (Charges are based on the
          currency of the country of Institution) <span>*</span>
        </legend>
        <input
          type="radio"
          id="dollar"
          name="currency"
          value="dollar"
          checked={fieldset.currency === "dollar"}
          onChange={handleChange}
          style={{ marginRight: "10px" }}
        />
        <label htmlFor="dollar">Dollar</label>
        <br />
        <input
          className="radio--btn"
          type="radio"
          id="pound"
          name="currency"
          value="pound"
          checked={fieldset.currency === "pound"}
          onChange={handleChange}
          style={{ marginRight: "10px" }}
        />
        <label htmlFor="pound">Pound</label>
        <br />
        <input
          className="radio--btn"
          type="radio"
          id="euro"
          name="currency"
          value="euro"
          checked={fieldset.currency === "euro"}
          onChange={handleChange}
          style={{ marginRight: "10px" }}
        />
        <label htmlFor="euro">Euro</label>
        <br />

        <input
          className="radio--btn"
          type="radio"
          id="naira"
          name="currency"
          value="naira"
          checked={fieldset.currency === "naira"}
          onChange={handleChange}
          style={{ marginRight: "10px" }}
        />
        <label htmlFor="naira">Naira</label>
        <br />
        <input
          type="radio"
          id="others"
          name="currency"
          value="others"
          checked={fieldset.hearAboutUs === "others"}
          onChange={handleChange}
          style={{ marginRight: "5px" }}
        />
        <input
          type="text"
          id="otherInput"
          name="otherInput"
          placeholder="Other"
          value={fieldset.otherInput}
          onChange={handleChange}
          className="other"
        />
      </fieldset>
      <br />

      <legend htmlFor="projectBudget">
        16. Project Budget (How much are you willing to pay for the project) ?
        <span>*</span>
      </legend>
      <input
        className="input"
        type="text"
        value={fieldset.projectBudget}
        name="projectBudget"
        placeholder="Enter your answer"
        onChange={handleChange}
      />
      <br />

      <fieldset>
        <legend>
          17. How did you hear about Go Scholar? <span>*</span>
        </legend>
        <input
          type="checkbox"
          id="socialMedia"
          name="hearAboutUs"
          value="socialMedia"
          checked={fieldset.hearAboutUs.includes("socialMedia")}
          onChange={handleChange}
          style={{ marginRight: "10px" }}
        />
        <label htmlFor="socialMedia">Social media</label>
        <br />
        <input
          className="checkbox--btn"
          type="checkbox"
          id="testimonial"
          name="hearAboutUs"
          value="testimonial"
          checked={fieldset.hearAboutUs.includes("testimonial")}
          onChange={handleChange}
          style={{ marginRight: "10px" }}
        />
        <label htmlFor="testimonial">Testimonial</label>
        <br />
        <input
          className="checkbox--btn"
          type="checkbox"
          id="referral"
          name="hearAboutUs"
          value="referral"
          checked={fieldset.hearAboutUs.includes("referral")}
          onChange={handleChange}
          style={{ marginRight: "10px" }}
        />
        <label htmlFor="referral">Referral</label>
        <br />
        <input
          className="checkbox--btn"
          type="checkbox"
          id="google"
          name="hearAboutUs"
          value="google"
          checked={fieldset.hearAboutUs.includes("google")}
          onChange={handleChange}
          style={{ marginRight: "10px" }}
        />
        <label htmlFor="google">Google</label>
        <br />
        <input
          type="checkbox"
          id="others"
          name="hearAboutUs"
          value="others"
          checked={fieldset.hearAboutUs.includes("others")}
          onChange={handleChange}
          style={{ marginRight: "5px" }}
        />
        <input
          type="text"
          id="otherInput"
          name="otherInput"
          placeholder="Other"
          value={fieldset.otherInput}
          onChange={handleChange}
          className="other"
        />
      </fieldset>
      <br />
    </div>
  );
}

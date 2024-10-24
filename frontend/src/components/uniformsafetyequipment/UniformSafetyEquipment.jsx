import React from "react";
import './UniformSafetyEquipment.css'; // Import CSS file

const formFields = [
  { label: "Violation Type", placeholder: "Select here" },
  { label: "Violator Id & Name", placeholder: "Select here" },
  { label: "Location", placeholder: "Select here" },
  { label: "Date", placeholder: "Select here" },
  { label: "Time", placeholder: "Select here" }
];

function FormField({ label, placeholder }) {
  return (
    <div className="fieldWrapper">
      <label className="fieldLabel">{label}</label>
      <div className="fieldGroup">
        <input type="text" className="fieldInput" placeholder={placeholder} aria-label={label} />
        <img loading="lazy" src="path/to/icon.png" alt="" className="dropdownIcon" />
      </div>
      <div className="fieldDivider" />
    </div>
  );
}

function DescriptionBox() {
  return (
    <div className="descriptionWrapper">
      <div className="descriptionBox">
        <label htmlFor="description" className="visually-hidden">Description</label>
        <textarea
          id="description"
          className="descriptionPlaceholder"
          placeholder="Enter Description here....."
          aria-label="Enter Description"
        />
        <div className="descriptionDivider" />
      </div>
      <div className="buttonGroup">
        <button type="submit" className="submitButton">Submit</button>
        <button type="button" className="cancelButton">Cancel</button>
      </div>
    </div>
  );
}

function UniformSafetyEquipment() {
  return (
    <section className="container">
      <header className="header">
        <div className="contentWrapper">
          <div className="violationBanner">
            <h1 className="violationText">Uniform & Safety Equipment Violation</h1>
          </div>
        </div>
      </header>
      <main className="formContainer">
        <div className="formLayout">
          <div className="formColumn">
            <form className="formFields">
              {formFields.map((field, index) => (
                <FormField key={index} label={field.label} placeholder={field.placeholder} />
              ))}
            </form>
          </div>
          <div className="descriptionColumn">
            <DescriptionBox />
          </div>
        </div>
      </main>
    </section>
  );
}

export default UniformSafetyEquipment;

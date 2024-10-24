import React from 'react';
import './EquipmentRelatedIncidents.css';

const formFields = [
  { label: "Incident type" },
  { label: "Equipment Type" },
  { label: "Severity" },
  { label: "Serial Number", placeholder: "Enter here" },
  { label: "Location" },
  { label: "Date", type: "date" },
  { label: "Time", type: "time" }
];

const FormField = ({ label, type = "text", placeholder = "Select here" }) => {
  return (
    <div className="fieldGroup123">
      <label className="label123">{label}</label>
      <input 
        type={type}
        className="input123"
        placeholder={placeholder}
        aria-label={label}
      />
      <hr className="divider123" />
    </div>
  );
};

export const EquipmentRelatedIncidents = () => {
  return (
    <main className="wrapper123">
      <header className="header123">
        <div className="headerContent123">
          <div className="logoWrapper123">
            <img 
              loading="lazy" 
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1c963d99f174aad5540dee07b91b3781d6fcfdc78c07a1dab54ccc02daf64170?placeholderIfAbsent=true&apiKey=b67877099f254c4f955d4b1ed8bf2e1c" 
              className="logo123"
              alt="Company logo"
            />
          </div>
          <div className="titleWrapper123">
            <div className="titleBox123">
              <img 
                loading="lazy" 
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9a7361a5ae367fd2388df71d44a23161ea5a7adae503259ffe839f27f71eeedf?placeholderIfAbsent=true&apiKey=b67877099f254c4f955d4b1ed8bf2e1c" 
                className="titleIcon123"
                alt=""
              />
              <h1 className="title123">equipment related incidents</h1>
            </div>
          </div>
        </div>
      </header>

      <section className="formSection123">
        <div className="formContent123">
          <form className="formFields123">
            {formFields.map((field, index) => (
              <FormField key={index} {...field} />
            ))}
          </form>

          <section className="descriptionSection123">
            <div className="descriptionBox123">
              <textarea
                className="descriptionInput123"
                placeholder="Enter Description here....."
                aria-label="Description"
              />
              <hr className="divider123" />
            </div>
            <div className="buttonGroup123">
              <button type="submit" className="submitButton123">Submit</button>
              <button type="button" className="cancelButton123">Cancel</button>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
};
export default EquipmentRelatedIncidents;
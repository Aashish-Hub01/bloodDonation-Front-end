import React from "react";
import "./Eligibility.css";

const Eligibility = () => {
  return (
    <div className="eligibility-container">
      <h1 className="eligibility-title">Blood Donors Eligibility</h1>
      <ul className="eligibility-list">
        <li>You should not be suffering from any of the following diseases or taking medicines for them:</li>
        <li>Hepatitis B, C</li>
        <li>AIDS</li>
        <li>Diabetes (are you under medication currently?)</li>
        <li>Fits/Convulsions (are you under medication currently?)</li>
        <li>Cancer</li>
        <li>Leprosy or any other infectious diseases</li>
        <li>Any allergies (only if you are suffering from severe symptoms)</li>
        <li>Hemophilia/Bleeding problems</li>
        <li>Kidney disease</li>
        <li>Heart disease</li>
        <li>Hormonal disorders</li>
        <li>Any other type of Jaundice (within 5 years)</li>
        <li>Tuberculosis (within 2 years)</li>
        <li>Chicken Pox (within 1 year)</li>
        <li>Malaria (within 1 year)</li>
        <li>Organ Transplant (within one year)</li>
        <li>Blood Transfusion (within the last 6 months)</li>
        <li>Pregnancy (within the last 6 months)</li>
        <li>Blood Donation (within the last 3 months)</li>
        <li>Major Surgery (within the last 3 months)</li>
        <li>Small Pox Vaccination (within the last 3 weeks)</li>
        <li>Hemoglobin deficiency/Anemia (recently)</li>
        <li>Drastic weight loss (recently)</li>
      </ul>
      <p className="eligibility-note">Note: If you are unsure about your eligibility, please consult a doctor.</p>
    </div>
  );
};

export default Eligibility;

import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./GaavSeva.css";

const GaavSevaSuccess = () => {
  const location = useLocation();

  const registrationId = location.state?.registrationId || "GS-REGISTERED";

  return (
    <main className="gaav-seva-success-page">
      <div className="gaav-seva-success-card">
        <div className="gaav-seva-success-icon">✓</div>

        <h1>पंजीकरण सफलतापूर्वक हो गया है</h1>

        <p>
          आपका गांव सेवा पंजीकरण सफलतापूर्वक प्राप्त हो गया है। आप हमारे
          स्थानीय पते पर आकर हड्डीजोड़ औषधि निःशुल्क प्राप्त कर सकते हैं।
        </p>

        <div className="gaav-seva-registration-id-box">
          <span>आपकी पंजीकरण आईडी</span>
          <strong>{registrationId}</strong>
        </div>

        <div className="gaav-seva-success-address">
          <strong>स्थानीय पता</strong>
          <span>गांगड़ा हड्डा, आगर मालवा</span>
        </div>

        <p className="gaav-seva-success-note">
          कृपया आते समय अपना नाम, मोबाइल नंबर और पंजीकरण आईडी बताएं।
        </p>

        <div className="gaav-seva-success-actions">
          <Link to="/gaav-seva" className="gaav-seva-submit-btn">
            नया पंजीकरण करें
          </Link>

          <Link to="/" className="gaav-seva-home-link">
            होम पेज पर जाएं
          </Link>
        </div>
      </div>
    </main>
  );
};

export default GaavSevaSuccess;
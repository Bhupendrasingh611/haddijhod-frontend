import React from "react";

const StickyContactButtons = () => {
  return (
    <>
      <a
        href="tel:8120282859"
        className="btn btn-dark position-fixed"
        style={{
          left: "20px",
          bottom: "20px",
          zIndex: 9999,
          borderRadius: "50px",
          padding: "12px 18px",
        }}
      >
        Call
      </a>

      <a
        href="https://wa.me/918120282859"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-success position-fixed"
        style={{
          right: "20px",
          bottom: "20px",
          zIndex: 9999,
          borderRadius: "50px",
          padding: "12px 18px",
        }}
      >
        WhatsApp
      </a>
    </>
  );
};

export default StickyContactButtons;
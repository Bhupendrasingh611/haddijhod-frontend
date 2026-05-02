import React from "react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const ContactSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-5 bg-success text-white">
      <div className="container text-center">

        <h2 className="fw-bold mb-3">
          {t("contactTitle")}
        </h2>

        <p className="mb-4">
          {t("contactText")}
        </p>

        <div className="d-flex justify-content-center gap-3 flex-wrap">

          <a
            href="tel:8120282859"
            className="btn btn-light btn-lg d-flex align-items-center gap-2 px-4"
          >
            <FaPhoneAlt />
            {t("callNow")}
          </a>

          <a
            href="https://wa.me/918120282859"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-light btn-lg d-flex align-items-center gap-2 px-4"
          >
            <FaWhatsapp />
            {t("whatsappOrder")}
          </a>

        </div>

      </div>
    </section>
  );
};

export default ContactSection;
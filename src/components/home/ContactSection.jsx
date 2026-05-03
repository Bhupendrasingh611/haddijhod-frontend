import React from "react";
import { FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const ContactSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-5 bg-success text-white">
      <div className="container text-center">
        <h2 className="fw-bold mb-3">{t("contactTitle")}</h2>

        <p className="mb-2">{t("contactText")}</p>

        <p className="fw-bold mb-3">
          📦 All India Delivery • ⚡ Fast Response • 📞 Direct Contact
        </p>

        <p className="mb-4">
          <FaMapMarkerAlt className="me-2" />
          Gangda, Harda / Agar Malwa, Madhya Pradesh
        </p>

        <div className="d-flex justify-content-center gap-3 flex-wrap">
          <a
            href="tel:9399968513"
            className="btn btn-light btn-lg d-flex align-items-center gap-2 px-4"
          >
            <FaPhoneAlt />
            Call: 9399968513
          </a>

          <a
            href="tel:8120282859"
            className="btn btn-light btn-lg d-flex align-items-center gap-2 px-4"
          >
            <FaPhoneAlt />
            Call: 8120282859
          </a>

          <a
            href="https://wa.me/918120282859"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-light btn-lg d-flex align-items-center gap-2 px-4"
          >
            <FaWhatsapp />
            WhatsApp
          </a>

          <a
            href="https://maps.app.goo.gl/9r97Ny5xQXUjSrEe9?g_st=aw"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-warning btn-lg d-flex align-items-center gap-2 px-4"
          >
            <FaMapMarkerAlt />
            Live Location
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
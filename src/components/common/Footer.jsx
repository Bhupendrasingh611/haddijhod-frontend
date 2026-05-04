import React from "react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row">

          {/* Brand Info */}
          <div className="col-lg-4 mb-4">
            <h4 className="fw-bold text-success">
              HaddiJhod
            </h4>

            <p className="text-light">
              {t("footerText")}
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-lg-4 mb-4">
            <h5 className="fw-bold mb-3">
              {t("quickLinks")}
            </h5>

            <ul className="list-unstyled">
              <li><a href="/" className="text-white text-decoration-none">{t("home")}</a></li>
              <li><a href="/about" className="text-white text-decoration-none">{t("about")}</a></li>
              <li><a href="/product" className="text-white text-decoration-none">{t("product")}</a></li>
              <li><a href="/contact" className="text-white text-decoration-none">{t("contact")}</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-lg-4 mb-4">
            <h5 className="fw-bold mb-3">
              {t("contactUs")}
            </h5>

            <p className="mb-2">
              <FaPhoneAlt className="me-2" />
              9399968513
            </p>

            <p>
              <FaWhatsapp className="me-2" />
              {t("whatsappAvailable")}
            </p>
          </div>

        </div>

        <hr className="border-light" />

        <div className="text-center">
          <p className="mb-0">
            © 2026 HaddiJhod. {t("rightsReserved")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
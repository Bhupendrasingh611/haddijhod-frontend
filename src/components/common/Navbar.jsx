import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);

  };

  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm py-3">
      <div className="container">

        {/* Logo */}
        <a className="navbar-brand fw-bold fs-3 text-success" href="/">
          HaddiJhod
        </a>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <a className="nav-link fw-semibold" href="/">
                {t("home")}
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link fw-semibold" href="/about">
                {t("about")}
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link fw-semibold" href="/product">
                {t("product")}
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link fw-semibold" href="/order">
                {t("orderNow")}
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link fw-semibold" href="/contact">
                {t("contact")}
              </a>
            </li>

            <li className="nav-item">
                <Link className="nav-link" to="/orders">
                 Orders
                </Link>
            </li>

          </ul>

          {/* Language Switch */}
          <div className="d-flex align-items-center gap-2 me-3">
            <button
              onClick={() => changeLanguage("hi")}
              className="btn btn-sm btn-outline-success"
            >
              हिंदी
            </button>

            <button
              onClick={() => changeLanguage("en")}
              className="btn btn-sm btn-outline-success"
            >
              English
            </button>
          </div>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/918120282859"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-success d-flex align-items-center gap-2 px-4"
          >
            <FaWhatsapp size={20} />
            {t("whatsapp")}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
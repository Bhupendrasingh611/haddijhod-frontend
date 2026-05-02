import React from "react";
import { useTranslation } from "react-i18next";

const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-5">
      <div className="container">
        <div className="row align-items-center">

          {/* Left Side */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h2 className="fw-bold mb-4">
              {t("aboutTitle")}
            </h2>

            <p className="text-muted mb-3">
              {t("aboutText1")}
            </p>

            <p className="text-muted mb-3">
              {t("aboutText2")}
            </p>

            <p className="text-muted mb-4">
              {t("aboutText3")}
            </p>

            <a
              href="/about"
              className="btn btn-outline-success px-4"
            >
              {t("readMore")}
            </a>
          </div>

          {/* Right Side */}
          <div className="col-lg-6 text-center">
            <img
              src="https://via.placeholder.com/500x350"
              alt="About HaddiJhod"
              className="img-fluid rounded shadow"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
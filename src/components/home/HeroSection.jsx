import React from "react";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row align-items-center">

          {/* Left Content */}
          <div className="col-lg-6">
            <h1 className="display-4 fw-bold mb-3">
              {t("heroTitle")}
            </h1>

            <p className="lead text-muted mb-4">
              {t("heroText")}
            </p>

            <h2 className="text-success fw-bold mb-4">
              {t("price")}
            </h2>
            <p className="text-muted fw-bold">
            3-Day Herbal Course • Free Delivery • No COD
            </p>

            <div className="d-flex gap-3 flex-wrap">
              <a href="/order" className="btn btn-success btn-lg px-4">
                {t("orderNow")}
              </a>

              <a
                href="https://wa.me/918120282859"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-success btn-lg px-4"
              >
                Order on WhatsApp
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="col-lg-6 text-center mt-5 mt-lg-0">
            <img
              src="https://via.placeholder.com/500x400"
            alt="Haddi Jhod Herbal Davai"
              className="img-fluid rounded shadow"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const ProductHighlight = () => {
  const { t } = useTranslation();

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row align-items-center g-4">

          {/* Left Side - Product Image */}
          <div className="col-lg-6 text-center">
            <img
              src="https://via.placeholder.com/450x350"
              alt="Haddi Jhod Herbal Davai"
              className="img-fluid rounded shadow"
            />
          </div>

          {/* Right Side - Product Details */}
          <div className="col-lg-6">
            <div className="card shadow-lg border-0 p-4">
              <h2 className="fw-bold mb-3">
                {t("productTitle")}
              </h2>

              <p className="text-muted mb-4">
                {t("productText")}
              </p>

              <div className="row mb-4 g-3">
                <div className="col-6">✔ {t("benefit1")}</div>
                <div className="col-6">✔ {t("benefit2")}</div>
                <div className="col-6">✔ {t("benefit3")}</div>
                <div className="col-6">✔ {t("benefit4")}</div>
              </div>

              <div className="mb-4">
                <h2 className="text-success fw-bold mb-1">
                  {t("price")}
                </h2>
                <span className="badge bg-success">
                  3-Day Course
                </span>
              </div>

              <p className="text-muted">
                3-Day Course • Free Delivery • All India Delivery
              </p>

              <div className="d-flex gap-3 flex-wrap">
                <Link to="/order" className="btn btn-success btn-lg px-4">
                  {t("buyNow")}
                </Link>

                <a
                  href="https://wa.me/918120282859"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-success btn-lg px-4"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProductHighlight;
import React from "react";
import { useTranslation } from "react-i18next";

const ProductHighlight = () => {
  const { t } = useTranslation();

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row align-items-center">

          {/* Left Side - Product Image */}
          <div className="col-lg-6 text-center mb-4 mb-lg-0">
            <img
              src="https://via.placeholder.com/450x350"
              alt="HaddiJhod Powder"
              className="img-fluid rounded shadow"
            />
          </div>

          {/* Right Side - Product Details */}
          <div className="col-lg-6">
            <h2 className="fw-bold mb-3">
              {t("productTitle")}
            </h2>

            <p className="text-muted mb-4">
              {t("productText")}
            </p>

            <ul className="list-unstyled mb-4">
              <li className="mb-2">✔ {t("benefit1")}</li>
              <li className="mb-2">✔ {t("benefit2")}</li>
              <li className="mb-2">✔ {t("benefit3")}</li>
              <li className="mb-2">✔ {t("benefit4")}</li>
            </ul>

            <h3 className="text-success fw-bold mb-4">
              {t("price")}
            </h3>

            <a
              href="/order"
              className="btn btn-success btn-lg px-4"
            >
              {t("buyNow")}
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProductHighlight;
import React from "react";
import { useTranslation } from "react-i18next";

const Product = () => {
  const { t } = useTranslation();

  return (
    <div className="container py-5">
      <h1>{t("productPageTitle")}</h1>

      <p className="mt-3">
        {t("productPageText")}
      </p>
    </div>
  );
};

export default Product;
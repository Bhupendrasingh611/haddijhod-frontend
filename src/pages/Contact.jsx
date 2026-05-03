import React from "react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="container py-5 text-center">

      <h1 className="mb-3">
        {t("contactPageTitle")}
      </h1>

      <p className="mb-4">
        {t("contactPageText")}
      </p>

      <div className="card p-4 shadow-sm mx-auto" style={{ maxWidth: "400px" }}>
        <p className="mb-2">
          <strong>{t("phoneLabel")}:</strong> 8120282859
        </p>
        <p className="mt-3">
         <strong>Alternate:</strong> 9399968513
        </p>

        <p className="mb-0">
          <strong>{t("whatsappLabel")}:</strong> Available for orders
        </p>
      </div>

    </div>
  );
};

export default Contact;
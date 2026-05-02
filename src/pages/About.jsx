import React from "react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="container py-5">
      <h1>{t("aboutPageTitle")}</h1>

      <p className="mt-3">
        {t("aboutPageText")}
      </p>
    </div>
  );
};

export default About;
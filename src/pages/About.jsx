import React from "react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="container py-5">
      <h1>{t("aboutPageTitle")}</h1>

      {t("aboutPageText").split("\n\n").map((para, index) => (
  <p key={index}>{para}</p>
))}
    </div>
  );
};

export default About;
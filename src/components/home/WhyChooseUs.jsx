import React from "react";
import {
  FaLeaf,
  FaClock,
  FaRupeeSign,
  FaPhoneAlt,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const WhyChooseUs = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: <FaClock size={28} />,
      title: t("trustedTitle"),
      description: t("trustedDesc"),
    },
    {
      icon: <FaLeaf size={28} />,
      title: t("herbalTitle"),
      description: t("herbalDesc"),
    },
    {
      icon: <FaRupeeSign size={28} />,
      title: t("priceTitle"),
      description: t("priceDesc"),
    },
    {
      icon: <FaPhoneAlt size={28} />,
      title: t("easyTitle"),
      description: t("easyDesc"),
    },
  ];

  return (
    <section className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">{t("whyChooseTitle")}</h2>
          <p className="text-muted">{t("whyChooseText")}</p>
        </div>

        <div className="row g-4">
          {features.map((item, index) => (
            <div className="col-md-6 col-lg-3" key={index}>
              <div className="card border-0 shadow-sm h-100 text-center p-4">
                <div className="text-success mb-3">
                  {item.icon}
                </div>
                <h5 className="fw-bold">{item.title}</h5>
                <p className="text-muted mb-0">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
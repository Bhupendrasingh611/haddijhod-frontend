import React from "react";
import { useTranslation } from "react-i18next";
import { FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="container py-5">

      {/* TITLE */}
      <h2 className="fw-bold text-center mb-3">
        {t("contactPageTitle")}
      </h2>

      <p className="text-center text-muted mb-4">
        {t("contactPageText")}
      </p>

      {/* TRUST LINE */}
      <p className="text-center fw-bold mb-5">
        📦 All India Delivery • ⚡ Fast Response • 📞 Direct Contact
      </p>

      <div className="row g-4">

        {/* CONTACT INFO */}
        <div className="col-lg-6">

          <div className="card shadow-sm border-0 h-100">
            <div className="card-body">

              <h4 className="fw-bold mb-3">Contact Details</h4>

              <p>
                <FaPhoneAlt className="me-2 text-success" />
                <strong>Call:</strong> 9399968513
              </p>

              <p>
                <FaPhoneAlt className="me-2 text-success" />
                <strong>Alternate:</strong> 8120282859
              </p>

              <p>
                <FaWhatsapp className="me-2 text-success" />
                <strong>WhatsApp:</strong> 8120282859
              </p>

              <p>
                <FaMapMarkerAlt className="me-2 text-danger" />
                <strong>Location:</strong> Gangda, Harda / Agar Malwa, MP
              </p>

              {/* BUTTONS */}
              <div className="mt-4 d-flex gap-3 flex-wrap">

                <a
                  href="tel:8120282859"
                  className="btn btn-success"
                >
                  Call Now
                </a>

                <a
                  href="https://wa.me/918120282859"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-success"
                >
                  WhatsApp
                </a>

                <a
                  href="https://maps.app.goo.gl/9r97Ny5xQXUjSrEe9?g_st=aw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-warning"
                >
                  Live Location
                </a>

              </div>
            </div>
          </div>

        </div>

        {/* MAP EMBED */}
        <div className="col-lg-6">

          <div className="card shadow-sm border-0 h-100">
            <div className="card-body p-0">

              <iframe
                src="https://maps.google.com/maps?q=Gangda%20Harda&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "350px" }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>

            </div>
          </div>

        </div>

      </div>

    </div>
  );
};

export default Contact;
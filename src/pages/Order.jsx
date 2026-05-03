import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { createOrder } from "../api/orderApi";
import upiQr from "../assets/upi.jpeg";

const Order = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    quantity: 1,
  });

 const handleChange = (e) => {
  const { name, value } = e.target;

  setFormData({
    ...formData,
    [name]: name === "quantity" ? Number(value) : value,
  });
};

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await createOrder({
        ...formData,
        quantity: Number(formData.quantity),
      });

      alert(res.data.message || t("successMessage"));

      console.log("Success:", res.data);

      // reset form
      setFormData({
        name: "",
        phone: "",
        address: "",
        quantity: 1,
      });

    } catch (error) {
      console.log("Error:", error);
      alert("Failed to submit order");
    }
  };

  
  return (
  <div className="container py-5">

    {/* TITLE */}
    <h2 className="fw-bold mb-4 text-center">
      {t("orderPageTitle")}
    </h2>

    <div className="row g-4">

      {/* LEFT SIDE - INFO + PAYMENT */}
      <div className="col-lg-5">

        {/* PRICE CARD */}
        <div className="card shadow-sm border-0 mb-4">
          <div className="card-body text-center">
            <h3 className="fw-bold">₹350</h3>
            <p className="mb-1">3-Day Herbal Course</p>
            <p className="text-success fw-bold mb-0">
              Free Delivery All Over India
            </p>
          </div>
        </div>

        {/* ORDER STEPS */}
        <div className="card shadow-sm border-0 mb-4">
          <div className="card-body">
            <h5 className="fw-bold mb-3">How to Order</h5>

            <ol className="mb-0">
              <li>Scan QR and make payment</li>
              <li>Take payment screenshot</li>
              <li>Fill order form</li>
              <li>Send screenshot on WhatsApp</li>
            </ol>
          </div>
        </div>

        {/* UPI PAYMENT */}
        <div className="card shadow-sm border-0">
          <div className="card-body text-center">
            <h5 className="fw-bold mb-3">UPI Payment</h5>

            <img
              src={upiQr}
              alt="UPI QR"
              className="img-fluid mb-3"
              style={{ maxWidth: "250px" }}
            />

            <p className="text-muted mb-0">
              Scan and send screenshot on WhatsApp
            </p>
          </div>
        </div>

      </div>

      {/* RIGHT SIDE - FORM */}
      <div className="col-lg-7">

        <form onSubmit={handleSubmit} className="card shadow p-4">

          <div className="mb-3">
            <label className="form-label">{t("fullName")}</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder={t("enterName")}
              value={formData.name}
              required
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">{t("mobileNumber")}</label>
            <input
              type="tel"
              name="phone"
              className="form-control"
              placeholder={t("enterPhone")}
              value={formData.phone}
              required
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">{t("address")}</label>
            <textarea
              name="address"
              className="form-control"
              rows="3"
              placeholder={t("enterAddress")}
              value={formData.address}
              required
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="mb-3">
            <label className="form-label">{t("quantity")}</label>
            <select
              name="quantity"
              className="form-select"
              value={formData.quantity}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  quantity: Number(e.target.value),
                })
              }
            >
              <option value="1">{t("pack1")}</option>
              <option value="2">{t("pack2")}</option>
              <option value="3">{t("pack3")}</option>
            </select>
          </div>

          <button type="submit" className="btn btn-success w-100">
            {t("submitOrder")}
          </button>

        </form>

      </div>
    </div>
  </div>
);
};

export default Order;
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { createOrder } from "../api/orderApi";
import upiQr from "../assets/upi.jpeg";

const Order = () => {
  const { t } = useTranslation();

  const pricePerPack = 350;
  const whatsappNumber = "918120282859";

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    quantity: 1,
    paymentDone: false,
  });

  const totalAmount = pricePerPack * Number(formData.quantity);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]:
        type === "checkbox"
          ? checked
          : name === "quantity"
          ? Number(value)
          : value,
    });
  };

  const openWhatsApp = () => {
    const message = `${t("whatsappOrderMsg")}

${t("fullName")}: ${formData.name}
${t("mobileNumber")}: ${formData.phone}
${t("address")}: ${formData.address}
${t("quantityLabel")}: ${formData.quantity}
${t("totalLabel")}: ₹${totalAmount}
Payment: ${t("paymentDoneText")}

I will send payment screenshot here.`;

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.paymentDone) {
      alert(t("paymentRequiredMsg"));
      return;
    }

    try {
      const res = await createOrder({
        name: formData.name,
        phone: formData.phone,
        address: formData.address,
        quantity: Number(formData.quantity),
      });

      alert(res.data.message || t("successMessage"));
      openWhatsApp();

      setFormData({
        name: "",
        phone: "",
        address: "",
        quantity: 1,
        paymentDone: false,
      });
    } catch (error) {
      console.log("Error:", error);
      alert(t("failedOrderMsg"));
    }
  };

  return (
    <div className="bg-light py-5">
      <div className="container">
        <div className="text-center mb-5">
          <span className="badge bg-success mb-3">Secure UPI Order</span>
          <h1 className="fw-bold">{t("orderPageTitle")}</h1>
          <p className="text-muted mb-0">{t("orderPageSubtitle")}</p>
        </div>

        <div className="row g-4 align-items-start">
          {/* LEFT SIDE */}
          <div className="col-lg-5">
            <div className="card shadow-lg border-0 p-4 mb-4">
              <h4 className="fw-bold mb-3">{t("orderSummary")}</h4>

              <div className="d-flex justify-content-between mb-2">
                <span>{t("productLabel")}</span>
                <strong>{t("orderProductName")}</strong>
              </div>

              <div className="d-flex justify-content-between mb-2">
                <span>{t("priceLabel")}</span>
                <strong>₹{pricePerPack}</strong>
              </div>

              <div className="d-flex justify-content-between mb-2">
                <span>{t("quantityLabel")}</span>
                <strong>{formData.quantity}</strong>
              </div>

              <hr />

              <div className="d-flex justify-content-between fs-5">
                <span>{t("totalLabel")}</span>
                <strong className="text-success">₹{totalAmount}</strong>
              </div>

              <div className="alert alert-success mt-4 mb-0">
                {t("freeDeliveryLine")}
              </div>
            </div>

            <div className="card shadow-lg border-0 p-4">
              <h4 className="fw-bold mb-3">{t("upiPayment")}</h4>

              <div className="text-center">
                <img
                  src={upiQr}
                  alt="UPI QR"
                  className="img-fluid rounded shadow-sm mb-3"
                  style={{ maxWidth: "260px" }}
                />

                <h5 className="text-success fw-bold">
                  {t("payAmount")} ₹{totalAmount}
                </h5>

                <p className="text-muted mb-0">{t("paymentInstruction")}</p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="col-lg-7">
            <form
              onSubmit={handleSubmit}
              className="card shadow-lg border-0 p-4"
            >
              <h4 className="fw-bold mb-4">{t("customerDetails")}</h4>

              <div className="mb-3">
                <label className="form-label fw-semibold">
                  {t("fullName")}
                </label>
                <input
                  type="text"
                  name="name"
                  className="form-control form-control-lg"
                  placeholder={t("enterName")}
                  value={formData.name}
                  required
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">
                  {t("mobileNumber")}
                </label>
                <input
                  type="tel"
                  name="phone"
                  className="form-control form-control-lg"
                  placeholder={t("enterPhone")}
                  value={formData.phone}
                  required
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">
                  {t("fullAddress")}
                </label>
                <textarea
                  name="address"
                  className="form-control form-control-lg"
                  rows="3"
                  placeholder={t("enterAddress")}
                  value={formData.address}
                  required
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="mb-4">
                <label className="form-label fw-semibold">
                  {t("quantityLabel")}
                </label>
                <select
                  name="quantity"
                  className="form-select form-select-lg"
                  value={formData.quantity}
                  onChange={handleChange}
                >
                  <option value="1">{t("pack1")}</option>
                  <option value="2">{t("pack2")}</option>
                  <option value="3">{t("pack3")}</option>
                </select>
              </div>

              <div className="border rounded-4 p-3 mb-4 bg-light">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="paymentDone"
                    checked={formData.paymentDone}
                    onChange={handleChange}
                    id="paymentDone"
                  />

                  <label
                    className="form-check-label fw-semibold"
                    htmlFor="paymentDone"
                  >
                    {t("paymentConfirmText")} ₹{totalAmount}
                  </label>
                </div>

                <small className="text-muted">{t("whatsappAfterSubmit")}</small>
              </div>

              <button type="submit" className="btn btn-success btn-lg w-100">
                {t("submitAndWhatsapp")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
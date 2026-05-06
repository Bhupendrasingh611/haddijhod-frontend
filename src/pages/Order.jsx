import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  createCashfreeOrder,
  verifyCashfreePayment,
} from "../api/orderApi";
import { Link } from "react-router-dom";

const Order = () => {
  const { t } = useTranslation();

  const whatsappNumber = "918120282859";
  const pricePerPack = 350;

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
    quantity: 1,
  });

  const [loading, setLoading] = useState(false);
  const [confirmedOrder, setConfirmedOrder] = useState(null);

  const totalAmount = pricePerPack * Number(formData.quantity || 1);

  const reviews = [
    {
      name: "Rajesh",
      city: "Indore",
      text: "Product lene ke baad pain aur swelling me kaafi relief feel hua.",
    },
    {
      name: "Sunita",
      city: "Bhopal",
      text: "Order process simple tha aur product time par deliver ho gaya.",
    },
    {
      name: "Amit",
      city: "Ujjain",
      text: "Natural product hai, customer support bhi bahut helpful raha.",
    },
  ];

  const handleChange = (e) => {
  const { name, value } = e.target;

  if (name === "phone") {
    setFormData({
      ...formData,
      phone: value.replace(/\D/g, "").slice(0, 10),
    });
    return;
  }

  if (name === "pincode") {
    setFormData({
      ...formData,
      pincode: value.replace(/\D/g, "").slice(0, 6),
    });
    return;
  }

  setFormData({
    ...formData,
    [name]: name === "quantity" ? Number(value) : value,
  });
};

  const handlePayment = async (e) => {
  e.preventDefault();

  if (loading) return;
  if (!validateForm()) return;

  try {
    setLoading(true);

    const createRes = await createCashfreeOrder({
      name: formData.name,
      phone: formData.phone,
      address: formData.address,
      city: formData.city,
      pincode: formData.pincode,
      quantity: Number(formData.quantity),
    });

    const orderData = createRes.data.data;

    if (!orderData?.paymentSessionId) {
      alert("Payment session not received. Please try again.");
      setLoading(false);
      return;
    }

    if (!window.Cashfree) {
      alert(t("paymentGatewayLoadError"));
      setLoading(false);
      return;
    }

    const cashfree = window.Cashfree({
      mode: "production",
    });

    await cashfree.checkout({
      paymentSessionId: orderData.paymentSessionId,
      redirectTarget: "_self",
    });

    setLoading(false);
  } catch (error) {
    console.log("Payment Error:", error);
    alert(t("failedOrderMsg"));
    setLoading(false);
  }
};

  const validateForm = () => {
    if (!formData.name.trim()) {
      alert(t("enterName"));
      return false;
    }

    if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      alert(t("invalidPhone"));
      return false;
    }

    if (!formData.address.trim()) {
      alert(t("enterAddress"));
      return false;
    }

    if (formData.pincode && !/^\d{6}$/.test(formData.pincode)) {
      alert(t("invalidPincode"));
      return false;
    }

    if (Number(formData.quantity) <= 0) {
      alert(t("invalidQuantity"));
      return false;
    }

    return true;
  };

  const openWhatsAppSupport = (order) => {
    const message = `${t("whatsappOrderMsg")}

${t("orderIdLabel")}: ${order?.orderNumber || ""}
${t("fullName")}: ${formData.name}
${t("mobileNumber")}: ${formData.phone}
${t("totalLabel")}: ₹${order?.totalAmount || totalAmount}
${t("paymentStatusLabel")}: ${t("paidText")}`;

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };


  if (confirmedOrder) {
    return (
      <div className="bg-light py-5">
        <div className="container">
          <div className="card shadow-lg border-0 rounded-4 p-4 p-md-5 text-center">
            <div className="display-3 text-success mb-3">✓</div>

            <span className="badge bg-success mb-3">
              {t("paymentSuccessBadge")}
            </span>

            <h1 className="fw-bold mb-3">{t("orderConfirmedTitle")}</h1>
            <p className="text-muted fs-5">{t("orderConfirmedSubtitle")}</p>

            <div className="row g-3 my-4">
              <div className="col-md-4">
                <div className="border rounded-4 p-3 bg-light">
                  <small className="text-muted">{t("orderIdLabel")}</small>
                  <h5 className="fw-bold mb-0">
                    {confirmedOrder.orderNumber}
                  </h5>
                </div>
              </div>

              <div className="col-md-4">
                <div className="border rounded-4 p-3 bg-light">
                  <small className="text-muted">
                    {t("paymentStatusLabel")}
                  </small>
                  <h5 className="fw-bold text-success mb-0">
                    {confirmedOrder.paymentStatus}
                  </h5>
                </div>
              </div>

              <div className="col-md-4">
                <div className="border rounded-4 p-3 bg-light">
                  <small className="text-muted">{t("totalLabel")}</small>
                  <h5 className="fw-bold mb-0">
                    ₹{confirmedOrder.totalAmount}
                  </h5>
                </div>
              </div>
            </div>

            <div className="text-start mx-auto" style={{ maxWidth: "650px" }}>
              <h5 className="fw-bold mb-3">{t("orderProcessTitle")}</h5>

              {[
                t("processConfirmed"),
                t("processProcessing"),
                t("processDispatch"),
                t("processOutForDelivery"),
                t("processDelivered"),
              ].map((item, index) => (
                <div className="d-flex align-items-center mb-3" key={item}>
                  <div
                    className={`rounded-circle d-flex align-items-center justify-content-center me-3 ${
                      index === 0 ? "bg-success text-white" : "bg-white border"
                    }`}
                    style={{ width: "36px", height: "36px" }}
                  >
                    {index === 0 ? "✓" : index + 1}
                  </div>
                  <strong>{item}</strong>
                </div>
              ))}
            </div>

            <div className="alert alert-success mt-4">
              {t("deliveryLine")}
            </div>

            <div className="d-flex flex-wrap justify-content-center gap-3">
              <button
                className="btn btn-success btn-lg rounded-pill px-5"
                onClick={() => openWhatsAppSupport(confirmedOrder)}
              >
                {t("whatsappSupport")}
              </button>

              <Link
                to="/track-order"
                className="btn btn-outline-success btn-lg rounded-pill px-5"
              >
                Track Your Order
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-light py-5">
      <div className="container">
        <div className="text-center mb-5">
          <span className="badge bg-success mb-3">
            {t("securePaymentOrder")}
          </span>
          <h1 className="fw-bold">{t("orderPageTitle")}</h1>
          <p className="text-muted mb-3">{t("orderPageSubtitle")}</p>

          <div className="d-flex flex-wrap justify-content-center gap-2">
            <span className="badge bg-white text-success shadow-sm px-3 py-2">
              ⭐ 1000+ Happy Customers
            </span>
            <span className="badge bg-white text-success shadow-sm px-3 py-2">
              🔒 Secure Cashfree Payment
            </span>
            <span className="badge bg-white text-success shadow-sm px-3 py-2">
              🚚 Fast Delivery
            </span>
          </div>
        </div>

        {/* <div className="text-center mb-4">
          <div className="bg-white shadow-sm rounded-4 p-3 d-inline-block">
            <p className="mb-2 text-muted">
              Already placed an order?
            </p>

            <Link
              to="/track-order"
              className="btn btn-outline-success rounded-pill px-4"
            >
              Track Your Order
            </Link>
          </div>
        </div> */}

        <div className="d-flex justify-content-center mb-4">
          <div className="bg-white shadow-sm rounded-pill px-4 py-2">
            <span className="text-success fw-bold">1 {t("detailsStep")}</span>
            <span className="mx-2">→</span>
            <span className="fw-bold">2 {t("paymentStep")}</span>
            <span className="mx-2">→</span>
            <span className="fw-bold">3 {t("successStep")}</span>
          </div>
        </div>

        <div className="row g-4 align-items-start">
          <div className="col-lg-7">
            <form
              onSubmit={handlePayment}
              className="card shadow-lg border-0 rounded-4 p-4"
            >
              <h4 className="fw-bold mb-1">{t("customerDetails")}</h4>
              <p className="text-muted mb-4">
                Fill your delivery details and continue to secure payment.
              </p>

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
                  maxLength="10"
                  required
                  onChange={handleChange}
                />
                <small className="text-muted">{t("phoneHelp")}</small>
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

              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label fw-semibold">{t("city")}</label>
                  <input
                    type="text"
                    name="city"
                    className="form-control form-control-lg"
                    placeholder={t("enterCity")}
                    value={formData.city}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label fw-semibold">
                    {t("pincode")}
                  </label>
                  <input
                    type="text"
                    name="pincode"
                    className="form-control form-control-lg"
                    placeholder={t("enterPincode")}
                    value={formData.pincode}
                    maxLength="6"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="mb-4 mt-3">
                <label className="form-label fw-semibold">
                  {t("quantityLabel")}
                </label>
                <select
                  name="quantity"
                  className="form-select form-select-lg"
                  value={formData.quantity}
                  onChange={handleChange}
                >
                  <option value="1">1 {t("packText")}</option>
                  <option value="2">2 {t("packText")}</option>
                  <option value="3">3 {t("packText")}</option>
                </select>
              </div>

              <button
                type="submit"
                className="btn btn-success btn-lg w-100 rounded-pill"
                disabled={loading}
              >
                {loading
                  ? t("processingPayment")
                  : `${t("continueToPayment")} ₹${totalAmount}`}
              </button>

              <p className="text-muted text-center small mt-3 mb-0">
                {t("securePaymentLine")}
              </p>
            </form>
          </div>

          <div className="col-lg-5">
            <div
              className="card shadow-lg border-0 rounded-4 p-4"
              style={{ position: "sticky", top: "90px" }}
            >
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

              <div className="d-flex justify-content-between mb-2">
                <span>{t("deliveryCharge")}</span>
                <strong className="text-success">{t("freeText")}</strong>
              </div>

              <hr />

              <div className="d-flex justify-content-between fs-4">
                <span>{t("totalLabel")}</span>
                <strong className="text-success">₹{totalAmount}</strong>
              </div>

              <div className="alert alert-success mt-4 mb-0">
                {t("freeDeliveryLine")}
              </div>

              <div className="row g-2 mt-3 text-center">
                <div className="col-4">
                  <div className="bg-light rounded-4 p-2 small fw-semibold">
                    🔒 {t("secure")}
                  </div>
                </div>
                <div className="col-4">
                  <div className="bg-light rounded-4 p-2 small fw-semibold">
                    🚚 {t("fast")}
                  </div>
                </div>
                <div className="col-4">
                  <div className="bg-light rounded-4 p-2 small fw-semibold">
                    ☎ {t("support")}
                  </div>
                </div>
              </div>

              <hr />

              <div className="small text-muted">
                <strong className="text-dark">Note:</strong> This is a
                traditional herbal wellness product. Results may vary from
                person to person.
              </div>
            </div>
          </div>
        </div>

        {/* <div className="mt-5">
          <div className="text-center mb-4">
            <span className="badge bg-success mb-2">Customer Trust</span>
            <h3 className="fw-bold">What Customers Say</h3>
            <p className="text-muted">
              Real-style customer feedback to build trust before ordering.
            </p>
          </div>

          <div className="row g-4">
            {reviews.map((review, index) => (
              <div className="col-md-4" key={index}>
                <div className="card border-0 shadow-sm rounded-4 p-4 h-100">
                  <div className="text-warning fs-5 mb-2">★★★★★</div>
                  <p className="text-muted mb-3">“{review.text}”</p>
                  <strong>
                    - {review.name}, {review.city}
                  </strong>
                </div>
              </div>
            ))}
          </div> */}
        {/* </div> */}

        <div className="mt-5">
          <div className="card border-0 shadow-sm rounded-4 p-4">
            <div className="row g-4 align-items-center">
              <div className="col-lg-8">
                <h4 className="fw-bold mb-2">
                  Why customers choose Haddi Jhod?
                </h4>
                <p className="text-muted mb-0">
                  Trusted traditional herbal support, secure online payment,
                  easy order tracking, and quick customer support.
                </p>
              </div>

              <div className="col-lg-4 text-lg-end">
                <Link
                  to="/track-order"
                  className="btn btn-outline-success rounded-pill px-4"
                >
                  Track Existing Order
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Order;
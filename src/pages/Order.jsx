import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { createOrder } from "../api/orderApi";

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
      <h2 className="fw-bold mb-4 text-center">
        {t("orderPageTitle")}
      </h2>

      <div className="row justify-content-center">
        <div className="col-lg-6">
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
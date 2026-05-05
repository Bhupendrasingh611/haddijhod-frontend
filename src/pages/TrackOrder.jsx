import React, { useState } from "react";
import { trackOrders } from "../api/orderApi";

const TrackOrder = () => {
  const [phone, setPhone] = useState("");
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!/^[6-9]\d{9}$/.test(phone)) {
      alert("Enter valid 10 digit mobile number");
      return;
    }

    try {
      setLoading(true);
      const res = await trackOrders(phone);
      setOrders(res.data.data);
    } catch (error) {
      alert("No orders found");
      setOrders([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-5">
      <div className="text-center mb-4">
        <h2 className="fw-bold">Track Your Order</h2>
        <p className="text-muted">Enter mobile number to view your orders</p>
      </div>

      <div className="card shadow p-4 mb-4">
        <input
          type="text"
          className="form-control form-control-lg mb-3"
          placeholder="Enter mobile number"
          value={phone}
          onChange={(e) =>
            setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))
          }
        />

        <button
          className="btn btn-success btn-lg"
          onClick={handleSearch}
          disabled={loading}
        >
          {loading ? "Searching..." : "Track Order"}
        </button>
      </div>

      {orders.length > 0 && (
        <div className="row">
          {orders.map((order) => (
            <div className="col-md-6 mb-4" key={order.id}>
              <div className="card shadow border-0 p-4">
                <h5 className="fw-bold text-success">
                  Order: {order.orderNumber}
                </h5>

                <p className="mb-1">
                  <strong>Amount:</strong> ₹{order.totalAmount}
                </p>

                <p className="mb-1">
                  <strong>Payment:</strong> {order.paymentStatus}
                </p>

                <p className="mb-1">
                  <strong>Status:</strong>{" "}
                  <span className="badge bg-warning">
                    {order.orderStatus}
                  </span>
                </p>

                <p className="text-muted small mb-0">
                  {new Date(order.createdAt).toLocaleString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TrackOrder;
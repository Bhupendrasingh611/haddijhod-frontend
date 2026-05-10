import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { checkCashfreePaymentStatus } from "../api/orderApi";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState("checking");
  const [order, setOrder] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const orderId = searchParams.get("order_id");

    if (!orderId) {
      setStatus("failed");
      setMessage("Order ID not found in payment response.");
      return;
    }

    const verifyPayment = async () => {
      try {
        const res = await checkCashfreePaymentStatus(orderId);

        const apiSuccess = res.data?.success;
        const orderData = res.data?.data;

        setOrder(orderData || null);
        setMessage(res.data?.message || "");

        const paymentStatus = orderData?.paymentStatus?.toLowerCase();
        const orderStatus = orderData?.orderStatus?.toLowerCase();
        const statusValue = orderData?.status?.toLowerCase();

        if (
          apiSuccess &&
          (paymentStatus === "paid" ||
            orderStatus === "confirmed" ||
            statusValue === "confirmed")
        ) {
          setStatus("success");
        } else if (
          paymentStatus === "pending" ||
          orderStatus === "pending" ||
          statusValue === "pending"
        ) {
          setStatus("pending");
        } else {
          setStatus("failed");
        }
      } catch (error) {
        console.log("Payment status check error:", error);
        setStatus("failed");
        setMessage("Unable to verify payment. Please contact support.");
      }
    };

    verifyPayment();
  }, [searchParams]);

  return (
    <div className="container py-5 text-center">
      {status === "checking" && (
        <div className="card shadow border-0 rounded-4 p-5">
          <h3>Checking payment status...</h3>
          <p>Please wait, we are confirming your payment.</p>
        </div>
      )}

      {status === "success" && (
        <div className="card shadow border-0 rounded-4 p-5">
          <h1 className="text-success">Payment Successful ✅</h1>
          <p>{message || "Your order has been confirmed."}</p>

          <h5>Order No: {order?.orderNumber}</h5>
          <h5>Name: {order?.name}</h5>
          <h5>Phone: {order?.phone}</h5>
          <h5>Payment Status: {order?.paymentStatus || "Paid"}</h5>
          <h5>Order Status: {order?.orderStatus || order?.status || "Confirmed"}</h5>
          <h5>Total: ₹{order?.totalAmount}</h5>

          <Link
            to={`/track-order?phone=${order?.phone || ""}`}
            className="btn btn-success mt-3"
          >
            Track Order
          </Link>
        </div>
      )}

      {status === "pending" && (
        <div className="card shadow border-0 rounded-4 p-5">
          <h1 className="text-warning">Payment Pending ⏳</h1>
          <p>{message || "If amount is deducted, your order will update shortly."}</p>

          <h5>Order No: {order?.orderNumber}</h5>
          <h5>Payment Status: {order?.paymentStatus || "Pending"}</h5>
          <h5>Order Status: {order?.orderStatus || order?.status || "Pending"}</h5>

          <Link
            to={`/track-order?phone=${order?.phone || ""}`}
            className="btn btn-outline-success mt-3"
          >
            Track Order
          </Link>
        </div>
      )}

      {status === "failed" && (
        <div className="card shadow border-0 rounded-4 p-5">
          <h1 className="text-danger">Payment Failed / Not Verified ❌</h1>
          <p>{message || "Please contact support if amount was deducted."}</p>

          {order?.orderNumber && <h5>Order No: {order.orderNumber}</h5>}
          {order?.paymentStatus && <h5>Payment Status: {order.paymentStatus}</h5>}
          {order?.orderStatus && <h5>Order Status: {order.orderStatus}</h5>}

          <Link to="/order" className="btn btn-success mt-3">
            Try Again
          </Link>
        </div>
      )}
    </div>
  );
};

export default PaymentSuccess;
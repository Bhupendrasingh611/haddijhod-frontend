import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { checkCashfreePaymentStatus } from "../api/orderApi";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState("checking");
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const orderId = searchParams.get("order_id");

    if (!orderId) {
      setStatus("failed");
      return;
    }

    const verifyPayment = async () => {
      try {
        const res = await checkCashfreePaymentStatus(orderId);

        if (res.data.success) {
          setOrder(res.data.data);
          setStatus("success");
        } else {
          setStatus("pending");
        }
      } catch (error) {
        console.log("Payment status check error:", error);
        setStatus("failed");
      }
    };

    verifyPayment();
  }, [searchParams]);

  return (
    <div className="container py-5 text-center">
      {status === "checking" && <h3>Checking payment status...</h3>}

      {status === "success" && (
        <div className="card shadow border-0 rounded-4 p-5">
          <h1 className="text-success">Payment Successful ✅</h1>
          <p>Your order has been confirmed.</p>
          <h5>Order No: {order?.orderNumber}</h5>
          <h5>Total: ₹{order?.totalAmount}</h5>
          <Link to="/track-order" className="btn btn-success mt-3">
            Track Order
          </Link>
        </div>
      )}

      {status === "pending" && (
        <div className="card shadow border-0 rounded-4 p-5">
          <h1 className="text-warning">Payment Pending</h1>
          <p>If amount is deducted, your order will update shortly.</p>
          <Link to="/track-order" className="btn btn-outline-success mt-3">
            Track Order
          </Link>
        </div>
      )}

      {status === "failed" && (
        <div className="card shadow border-0 rounded-4 p-5">
          <h1 className="text-danger">Unable to Verify Payment</h1>
          <p>Please contact support if amount was deducted.</p>
          <Link to="/order" className="btn btn-success mt-3">
            Try Again
          </Link>
        </div>
      )}
    </div>
  );
};

export default PaymentSuccess;
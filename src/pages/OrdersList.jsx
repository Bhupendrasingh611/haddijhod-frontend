import React, { useEffect, useState } from "react";
import {
  getOrders,
  deleteOrder,
  updateOrder,
  updateOrderStatus,
} from "../api/orderApi";

const OrdersList = () => {
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const [editOrder, setEditOrder] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [paymentFilter, setPaymentFilter] = useState("All");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const fetchOrders = async () => {
    try {
      setLoading(true);
      const res = await getOrders();
      const orderData = res.data.data || [];
      setOrders(orderData);
      setFilteredOrders(orderData);
    } catch (error) {
      console.log("Error fetching orders:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  useEffect(() => {
    const filtered = orders.filter((order) => {
      const orderDate = new Date(order.createdAt);

      const currentStatus = order.orderStatus || order.status || "Pending";
      const currentPayment = order.paymentStatus || "Pending";

      const matchesSearch =
        (order.name || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
        (order.phone || "").includes(searchTerm) ||
        (order.orderNumber || "").toLowerCase().includes(searchTerm.toLowerCase());

      const matchesStatus =
        statusFilter === "All" || currentStatus === statusFilter;

      const matchesPayment =
        paymentFilter === "All" || currentPayment === paymentFilter;

      const matchesFromDate = !fromDate || orderDate >= new Date(fromDate);

      const matchesToDate =
        !toDate || orderDate <= new Date(toDate + "T23:59:59");

      return (
        matchesSearch &&
        matchesStatus &&
        matchesPayment &&
        matchesFromDate &&
        matchesToDate
      );
    });

    setFilteredOrders(filtered);
  }, [searchTerm, statusFilter, paymentFilter, fromDate, toDate, orders]);

  const handleEdit = (order) => {
    setEditOrder(order);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setEditOrder(null);
  };

  const handleUpdate = async () => {
    try {
      await updateOrder(editOrder.id, editOrder);

      if (editOrder.orderStatus) {
        await updateOrderStatus(editOrder.id, editOrder.orderStatus);
      }

      alert("Order updated successfully");
      closeModal();
      fetchOrders();
    } catch (error) {
      console.log("Update error:", error);
      alert("Failed to update order");
    }
  };

  const handleStatusChange = async (id, status) => {
    try {
      await updateOrderStatus(id, status);
      fetchOrders();
    } catch (error) {
      console.log("Status update error:", error);
      alert("Failed to update status");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this order?")) return;

    try {
      await deleteOrder(id);
      alert("Order deleted successfully");
      fetchOrders();
    } catch (error) {
      console.log("Delete error:", error);
      alert("Failed to delete order");
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case "Delivered":
        return "bg-success";
      case "Confirmed":
        return "bg-primary";
      case "Processing":
        return "bg-info text-dark";
      case "Shipped":
        return "bg-secondary";
      case "Cancelled":
        return "bg-danger";
      case "Pending":
      default:
        return "bg-warning text-dark";
    }
  };

  const getPaymentBadge = (status) => {
    switch (status) {
      case "Paid":
        return "bg-success";
      case "Failed":
        return "bg-danger";
      case "Pending":
      default:
        return "bg-warning text-dark";
    }
  };

  const exportToCSV = () => {
    if (filteredOrders.length === 0) {
      alert("No data to export");
      return;
    }

    const headers = [
      "ID",
      "Order Number",
      "Name",
      "Phone",
      "Address",
      "City",
      "Pincode",
      "Quantity",
      "Total Amount",
      "Payment Status",
      "Order Status",
      "Razorpay Order ID",
      "Razorpay Payment ID",
      "Created At",
    ];

    const rows = filteredOrders.map((order) => [
      order.id,
      order.orderNumber || "",
      order.name || "",
      order.phone || "",
      order.address || "",
      order.city || "",
      order.pincode || "",
      order.quantity || "",
      order.totalAmount || "",
      order.paymentStatus || "Pending",
      order.orderStatus || order.status || "Pending",
      order.razorpayOrderId || "",
      order.razorpayPaymentId || "",
      order.createdAt ? new Date(order.createdAt).toLocaleString() : "",
    ]);

    const csvContent =
      "data:text/csv;charset=utf-8," +
      [headers, ...rows]
        .map((row) => row.map((item) => `"${item}"`).join(","))
        .join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");

    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "orders_report.csv");

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const clearFilters = () => {
    setSearchTerm("");
    setStatusFilter("All");
    setPaymentFilter("All");
    setFromDate("");
    setToDate("");
  };

  const totalOrders = orders.length;
  const pendingOrders = orders.filter(
    (o) => (o.orderStatus || o.status || "Pending") === "Pending"
  ).length;
  const confirmedOrders = orders.filter(
    (o) => (o.orderStatus || o.status) === "Confirmed"
  ).length;
  const processingOrders = orders.filter(
    (o) => (o.orderStatus || o.status) === "Processing"
  ).length;
  const shippedOrders = orders.filter(
    (o) => (o.orderStatus || o.status) === "Shipped"
  ).length;
  const deliveredOrders = orders.filter(
    (o) => (o.orderStatus || o.status) === "Delivered"
  ).length;
  const cancelledOrders = orders.filter(
    (o) => (o.orderStatus || o.status) === "Cancelled"
  ).length;
  const paidOrders = orders.filter((o) => o.paymentStatus === "Paid").length;

  return (
    <div className="bg-light min-vh-100 py-5">
      <div className="container-fluid px-4">
        <div className="d-flex flex-wrap justify-content-between align-items-center mb-4 gap-3">
          <div>
            <h2 className="fw-bold mb-1">📦 Admin Dashboard - Orders</h2>
            <p className="text-muted mb-0">
              Manage customer orders, payments, delivery status and reports
            </p>
          </div>

          <button
            className="btn btn-outline-danger rounded-pill px-4"
            onClick={() => {
              localStorage.removeItem("isAdminLoggedIn");
              window.location.href = "/admin-login";
            }}
          >
            Logout
          </button>
        </div>

        <div className="row g-3 mb-4">
          <div className="col-md-3 col-lg-2">
            <div className="card shadow-sm border-0 rounded-4">
              <div className="card-body text-center">
                <small className="text-muted">Total Orders</small>
                <h2 className="fw-bold mb-0">{totalOrders}</h2>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-lg-2">
            <div className="card shadow-sm border-0 rounded-4 bg-warning text-dark">
              <div className="card-body text-center">
                <small>Pending</small>
                <h2 className="fw-bold mb-0">{pendingOrders}</h2>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-lg-2">
            <div className="card shadow-sm border-0 rounded-4 bg-primary text-white">
              <div className="card-body text-center">
                <small>Confirmed</small>
                <h2 className="fw-bold mb-0">{confirmedOrders}</h2>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-lg-2">
            <div className="card shadow-sm border-0 rounded-4 bg-info text-dark">
              <div className="card-body text-center">
                <small>Processing</small>
                <h2 className="fw-bold mb-0">{processingOrders}</h2>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-lg-2">
            <div className="card shadow-sm border-0 rounded-4 bg-secondary text-white">
              <div className="card-body text-center">
                <small>Shipped</small>
                <h2 className="fw-bold mb-0">{shippedOrders}</h2>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-lg-2">
            <div className="card shadow-sm border-0 rounded-4 bg-success text-white">
              <div className="card-body text-center">
                <small>Delivered</small>
                <h2 className="fw-bold mb-0">{deliveredOrders}</h2>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-lg-2">
            <div className="card shadow-sm border-0 rounded-4 bg-danger text-white">
              <div className="card-body text-center">
                <small>Cancelled</small>
                <h2 className="fw-bold mb-0">{cancelledOrders}</h2>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-lg-2">
            <div className="card shadow-sm border-0 rounded-4 bg-dark text-white">
              <div className="card-body text-center">
                <small>Paid</small>
                <h2 className="fw-bold mb-0">{paidOrders}</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="card shadow-sm border-0 rounded-4 mb-4">
          <div className="card-body">
            <div className="row g-3">
              <div className="col-md-4">
                <label className="form-label fw-semibold">
                  Search Order
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search by name, phone or order no..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <div className="col-md-2">
                <label className="form-label fw-semibold">
                  Order Status
                </label>
                <select
                  className="form-select"
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                >
                  <option value="All">All Status</option>
                  <option value="Pending">Pending</option>
                  <option value="Confirmed">Confirmed</option>
                  <option value="Processing">Processing</option>
                  <option value="Shipped">Shipped</option>
                  <option value="Delivered">Delivered</option>
                  <option value="Cancelled">Cancelled</option>
                </select>
              </div>

              <div className="col-md-2">
                <label className="form-label fw-semibold">
                  Payment
                </label>
                <select
                  className="form-select"
                  value={paymentFilter}
                  onChange={(e) => setPaymentFilter(e.target.value)}
                >
                  <option value="All">All Payment</option>
                  <option value="Pending">Pending</option>
                  <option value="Paid">Paid</option>
                  <option value="Failed">Failed</option>
                </select>
              </div>

              <div className="col-md-2">
                <label className="form-label fw-semibold">From Date</label>
                <input
                  type="date"
                  className="form-control"
                  value={fromDate}
                  onChange={(e) => setFromDate(e.target.value)}
                />
              </div>

              <div className="col-md-2">
                <label className="form-label fw-semibold">To Date</label>
                <input
                  type="date"
                  className="form-control"
                  value={toDate}
                  onChange={(e) => setToDate(e.target.value)}
                />
              </div>
            </div>

            <div className="d-flex flex-wrap justify-content-between align-items-center mt-4 gap-2">
              <button className="btn btn-outline-secondary" onClick={clearFilters}>
                Clear Filters
              </button>

              <button className="btn btn-success" onClick={exportToCSV}>
                ⬇ Export CSV
              </button>
            </div>
          </div>
        </div>

        {loading ? (
          <div className="card border-0 shadow-sm rounded-4 p-5 text-center">
            <h5>Loading orders...</h5>
          </div>
        ) : (
          <div className="card shadow-sm border-0 rounded-4">
            <div className="card-body p-0">
              <div className="table-responsive">
                <table className="table table-hover align-middle mb-0">
                  <thead className="table-dark">
                    <tr>
                      <th>Order No</th>
                      <th>Customer</th>
                      <th>Phone</th>
                      <th>Address</th>
                      <th>Qty</th>
                      <th>Amount</th>
                      <th>Payment</th>
                      <th>Status</th>
                      <th>Change Status</th>
                      <th>Created</th>
                      <th width="170">Actions</th>
                    </tr>
                  </thead>

                  <tbody>
                    {filteredOrders.length > 0 ? (
                      filteredOrders.map((order) => {
                        const currentStatus =
                          order.orderStatus || order.status || "Pending";
                        const currentPayment =
                          order.paymentStatus || "Pending";

                        return (
                          <tr key={order.id}>
                            <td>
                              <strong>{order.orderNumber || order.id}</strong>
                              <div className="small text-muted">ID: {order.id}</div>
                            </td>

                            <td>{order.name}</td>
                            <td>{order.phone}</td>

                            <td style={{ minWidth: "220px" }}>
                              <div>{order.address}</div>
                              <small className="text-muted">
                                {order.city || ""} {order.pincode || ""}
                              </small>
                            </td>

                            <td>{order.quantity}</td>
                            <td>
                              <strong>₹{order.totalAmount || 0}</strong>
                            </td>

                            <td>
                              <span
                                className={`badge ${getPaymentBadge(
                                  currentPayment
                                )}`}
                              >
                                {currentPayment}
                              </span>
                            </td>

                            <td>
                              <span
                                className={`badge ${getStatusBadge(
                                  currentStatus
                                )}`}
                              >
                                {currentStatus}
                              </span>
                            </td>

                            <td style={{ minWidth: "160px" }}>
                              <select
                                className="form-select form-select-sm"
                                value={currentStatus}
                                onChange={(e) =>
                                  handleStatusChange(order.id, e.target.value)
                                }
                              >
                                <option value="Pending">Pending</option>
                                <option value="Confirmed">Confirmed</option>
                                <option value="Processing">Processing</option>
                                <option value="Shipped">Shipped</option>
                                <option value="Delivered">Delivered</option>
                                <option value="Cancelled">Cancelled</option>
                              </select>
                            </td>

                            <td style={{ minWidth: "160px" }}>
                              {order.createdAt
                                ? new Date(order.createdAt).toLocaleString()
                                : "-"}
                            </td>

                            <td>
                              <button
                                className="btn btn-primary btn-sm me-2"
                                onClick={() => handleEdit(order)}
                              >
                                Edit
                              </button>

                              <button
                                className="btn btn-danger btn-sm"
                                onClick={() => handleDelete(order.id)}
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        );
                      })
                    ) : (
                      <tr>
                        <td colSpan="11" className="text-center py-4">
                          No matching orders found
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {showModal && editOrder && (
          <div
            className="modal d-block"
            style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
          >
            <div className="modal-dialog modal-lg modal-dialog-centered">
              <div className="modal-content rounded-4 border-0">
                <div className="modal-header">
                  <h5 className="fw-bold mb-0">Edit Order</h5>
                  <button className="btn-close" onClick={closeModal}></button>
                </div>

                <div className="modal-body">
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label fw-semibold">Name</label>
                      <input
                        className="form-control"
                        value={editOrder.name || ""}
                        onChange={(e) =>
                          setEditOrder({
                            ...editOrder,
                            name: e.target.value,
                          })
                        }
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label fw-semibold">Phone</label>
                      <input
                        className="form-control"
                        value={editOrder.phone || ""}
                        onChange={(e) =>
                          setEditOrder({
                            ...editOrder,
                            phone: e.target.value,
                          })
                        }
                      />
                    </div>

                    <div className="col-12">
                      <label className="form-label fw-semibold">Address</label>
                      <textarea
                        className="form-control"
                        rows="3"
                        value={editOrder.address || ""}
                        onChange={(e) =>
                          setEditOrder({
                            ...editOrder,
                            address: e.target.value,
                          })
                        }
                      />
                    </div>

                    <div className="col-md-4">
                      <label className="form-label fw-semibold">City</label>
                      <input
                        className="form-control"
                        value={editOrder.city || ""}
                        onChange={(e) =>
                          setEditOrder({
                            ...editOrder,
                            city: e.target.value,
                          })
                        }
                      />
                    </div>

                    <div className="col-md-4">
                      <label className="form-label fw-semibold">Pincode</label>
                      <input
                        className="form-control"
                        value={editOrder.pincode || ""}
                        onChange={(e) =>
                          setEditOrder({
                            ...editOrder,
                            pincode: e.target.value,
                          })
                        }
                      />
                    </div>

                    <div className="col-md-4">
                      <label className="form-label fw-semibold">Quantity</label>
                      <input
                        type="number"
                        className="form-control"
                        value={editOrder.quantity || 1}
                        onChange={(e) =>
                          setEditOrder({
                            ...editOrder,
                            quantity: Number(e.target.value),
                          })
                        }
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label fw-semibold">
                        Order Status
                      </label>
                      <select
                        className="form-select"
                        value={
                          editOrder.orderStatus ||
                          editOrder.status ||
                          "Pending"
                        }
                        onChange={(e) =>
                          setEditOrder({
                            ...editOrder,
                            orderStatus: e.target.value,
                            status: e.target.value,
                          })
                        }
                      >
                        <option value="Pending">Pending</option>
                        <option value="Confirmed">Confirmed</option>
                        <option value="Processing">Processing</option>
                        <option value="Shipped">Shipped</option>
                        <option value="Delivered">Delivered</option>
                        <option value="Cancelled">Cancelled</option>
                      </select>
                    </div>

                    <div className="col-md-6">
                      <label className="form-label fw-semibold">
                        Payment Status
                      </label>
                      <input
                        className="form-control"
                        value={editOrder.paymentStatus || "Pending"}
                        disabled
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label fw-semibold">
                        Total Amount
                      </label>
                      <input
                        className="form-control"
                        value={`₹${editOrder.totalAmount || 0}`}
                        disabled
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label fw-semibold">
                        Razorpay Payment ID
                      </label>
                      <input
                        className="form-control"
                        value={editOrder.razorpayPaymentId || "-"}
                        disabled
                      />
                    </div>
                  </div>
                </div>

                <div className="modal-footer">
                  <button className="btn btn-secondary" onClick={closeModal}>
                    Cancel
                  </button>

                  <button className="btn btn-success" onClick={handleUpdate}>
                    Update Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrdersList;
import React, { useEffect, useState } from "react";
import { getOrders, deleteOrder, updateOrder } from "../api/orderApi";

const OrdersList = () => {
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editOrder, setEditOrder] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchOrders = async () => {
    try {
      const res = await getOrders();
      const orderData = res.data.data || [];

      setOrders(orderData);
      setFilteredOrders(orderData);
      setLoading(false);
    } catch (error) {
      console.log("Error fetching orders:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  useEffect(() => {
    const filtered = orders.filter(
      (order) =>
        order.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.phone.includes(searchTerm)
    );

    setFilteredOrders(filtered);
  }, [searchTerm, orders]);

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
      alert("Order updated successfully");
      closeModal();
      fetchOrders();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteOrder(id);
      alert("Order deleted successfully");
      fetchOrders();
    } catch (error) {
      console.log("Delete error:", error);
    }
  };

  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>📦 Admin Dashboard - Orders</h2>

        <div className="row mb-4">

  <div className="col-md-3 mb-3">
    <div className="card shadow-sm border-0 bg-dark text-white">
      <div className="card-body text-center">
        <h6>Total Orders</h6>
        <h2>{orders.length}</h2>
      </div>
    </div>
  </div>

  <div className="col-md-3 mb-3">
    <div className="card shadow-sm border-0 bg-warning text-dark">
      <div className="card-body text-center">
        <h6>Pending</h6>
        <h2>
          {orders.filter((o) => (o.status || "Pending") === "Pending").length}
        </h2>
      </div>
    </div>
  </div>

  <div className="col-md-3 mb-3">
    <div className="card shadow-sm border-0 bg-success text-white">
      <div className="card-body text-center">
        <h6>Delivered</h6>
        <h2>
          {orders.filter((o) => o.status === "Delivered").length}
        </h2>
      </div>
    </div>
  </div>

  <div className="col-md-3 mb-3">
    <div className="card shadow-sm border-0 bg-danger text-white">
      <div className="card-body text-center">
        <h6>Cancelled</h6>
        <h2>
          {orders.filter((o) => o.status === "Cancelled").length}
        </h2>
      </div>
    </div>
  </div>

</div>
      </div>

      <div className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search by Name or Phone..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {loading ? (
        <p>Loading orders...</p>
      ) : (
        <>
          {/* Edit Modal */}
          {showModal && editOrder && (
            <div
              className="modal d-block"
              style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5>Edit Order</h5>
                    <button
                      className="btn-close"
                      onClick={closeModal}
                    ></button>
                  </div>

                  <div className="modal-body">
                    <input
                      className="form-control mb-2"
                      value={editOrder.name}
                      onChange={(e) =>
                        setEditOrder({
                          ...editOrder,
                          name: e.target.value,
                        })
                      }
                    />

                    <input
                      className="form-control mb-2"
                      value={editOrder.phone}
                      onChange={(e) =>
                        setEditOrder({
                          ...editOrder,
                          phone: e.target.value,
                        })
                      }
                    />

                    <textarea
                      className="form-control mb-2"
                      value={editOrder.address}
                      onChange={(e) =>
                        setEditOrder({
                          ...editOrder,
                          address: e.target.value,
                        })
                      }
                    />

                    <input
                      type="number"
                      className="form-control"
                      value={editOrder.quantity}
                      onChange={(e) =>
                        setEditOrder({
                          ...editOrder,
                          quantity: Number(e.target.value),
                        })
                      }
                    />

                      <select
                        className="form-control"
                         value={editOrder.status || "Pending"}
                         onChange={(e) =>
                        setEditOrder({
                       ...editOrder,
                        status: e.target.value,
                           })
                          }
                      >
                          <option value="Pending">Pending</option>
                           <option value="Confirmed">Confirmed</option>
                           <option value="Processing">Processing</option>
                           <option value="Delivered">Delivered</option>
                           <option value="Cancelled">Cancelled</option>
                          </select>

                  </div>

                  <div className="modal-footer">
                    <button
                      className="btn btn-secondary"
                      onClick={closeModal}
                    >
                      Cancel
                    </button>

                    <button
                      className="btn btn-success"
                      onClick={handleUpdate}
                    >
                      Update
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Orders Table */}
          <div className="table-responsive">
            <table className="table table-bordered table-hover shadow-sm">
              <thead className="table-dark">
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Address</th>
                  <th>Quantity</th>
                  <th>Status</th>
                  <th>Created At</th>
                  <th width="180">Actions</th>
                </tr>
              </thead>

              <tbody>
                {filteredOrders.length > 0 ? (
                  filteredOrders.map((order) => (
                    <tr key={order.id}>
                      <td>{order.id}</td>
                      <td>{order.name}</td>
                      <td>{order.phone}</td>
                      <td>{order.address}</td>
                      <td>{order.quantity}</td>
                     <td>
                    <span
                      className={`badge ${
                     order.status === "Delivered"
                       ? "bg-success"
                    : order.status === "Pending"
                       ? "bg-warning text-dark"
                         : order.status === "Confirmed"
                        ? "bg-primary"
                        : order.status === "Processing"
                        ? "bg-info text-dark"
                       : order.status === "Cancelled"
                       ? "bg-danger"
                       : "bg-secondary"
                        }`}
                        >
                       {order.status || "Pending"}
                       </span>
                      </td>
                      <td>
                        {new Date(order.createdAt).toLocaleString()}
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
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="text-center">
                      No matching orders found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default OrdersList;
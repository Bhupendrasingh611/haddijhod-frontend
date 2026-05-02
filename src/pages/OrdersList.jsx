import React, { useEffect, useState } from "react";
import { getOrders, deleteOrder, updateOrder } from "../api/orderApi";


const OrdersList = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editOrder, setEditOrder] = useState(null);
  const [showModal, setShowModal] = useState(false);

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

    setEditOrder(null);
    fetchOrders();
  } catch (error) {
    console.log(error);
  }
};

  const handleDelete = async (id) => {
  try {
    await deleteOrder(id);

    alert("Order deleted successfully");

    // refresh list after delete
    fetchOrders();
  } catch (error) {
    console.log("Delete error:", error);
  }
};

  const fetchOrders = async () => {
    try {
      const res = await getOrders();

      // IMPORTANT: backend response is inside data.data
      setOrders(res.data.data);

      setLoading(false);
    } catch (error) {
      console.log("Error fetching orders:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);
return (
  <div className="container py-5">
    <h2 className="mb-4">📦 Orders List</h2>

    {loading ? (
      <p>Loading...</p>
    ) : (


      <>
        {/* EDIT FORM */}
       {showModal && editOrder && (
  <div
    className="modal d-block"
    style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
  >
    <div className="modal-dialog">
      <div className="modal-content">

        <div className="modal-header">
          <h5 className="modal-title">Edit Order</h5>
          <button className="btn-close" onClick={closeModal}></button>
        </div>

        <div className="modal-body">

          <input
            className="form-control mb-2"
            value={editOrder.name}
            onChange={(e) =>
              setEditOrder({ ...editOrder, name: e.target.value })
            }
          />

          <input
            className="form-control mb-2"
            value={editOrder.phone}
            onChange={(e) =>
              setEditOrder({ ...editOrder, phone: e.target.value })
            }
          />

          <textarea
            className="form-control mb-2"
            value={editOrder.address}
            onChange={(e) =>
              setEditOrder({ ...editOrder, address: e.target.value })
            }
          />

          <input
            type="number"
            className="form-control mb-2"
            value={editOrder.quantity}
            onChange={(e) =>
              setEditOrder({
                ...editOrder,
                quantity: Number(e.target.value),
              })
            }
          />

        </div>

        <div className="modal-footer">
          <button className="btn btn-secondary" onClick={closeModal}>
            Cancel
          </button>

          <button className="btn btn-success" onClick={handleUpdate}>
            Update
          </button>
        </div>

      </div>
    </div>
  </div>
)}

        {/* TABLE */}
        <table className="table table-bordered table-striped">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Quantity</th>
              <th>Created At</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {orders.length > 0 ? (
              orders.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.name}</td>
                  <td>{order.phone}</td>
                  <td>{order.address}</td>
                  <td>{order.quantity}</td>
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
                  No orders found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </>
    )}
  </div>
);
};

export default OrdersList;
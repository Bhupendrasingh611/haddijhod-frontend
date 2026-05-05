import axios from "axios";

// const API_BASE_URL =
//   "https://haddijhodapi20260502134128-fgbebbftcqaubahc.canadacentral-01.azurewebsites.net/api";

  const API_BASE_URL = "https://localhost:7269/api";

const ORDER_API_URL = `${API_BASE_URL}/Orders`;
const PAYMENT_API_URL = `${API_BASE_URL}/Payment`;

// Existing order APIs
export const createOrder = (data) => {
  return axios.post(ORDER_API_URL, data);
};

export const getOrders = () => {
  return axios.get(ORDER_API_URL);
};

export const deleteOrder = (id) => {
  return axios.delete(`${ORDER_API_URL}/${id}`);
};

export const updateOrder = (id, data) => {
  return axios.put(`${ORDER_API_URL}/${id}`, data);
};

// New Razorpay payment APIs
export const createRazorpayOrder = (data) => {
  return axios.post(`${PAYMENT_API_URL}/create-razorpay-order`, data);
};

export const verifyRazorpayPayment = (data) => {
  return axios.post(`${PAYMENT_API_URL}/verify-payment`, data);
};

export const trackOrders = (phone) => {
  return axios.get(`${ORDER_API_URL}/track/${phone}`);
};

export const updateOrderStatus = (id, orderStatus) => {
  return axios.put(`${ORDER_API_URL}/update-status/${id}`, {
    orderStatus,
  });
};
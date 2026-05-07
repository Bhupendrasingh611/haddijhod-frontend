import axios from "axios";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ||
  "https://haddijhodapi20260502134128-fgbebbftcqaubahc.canadacentral-01.azurewebsites.net/api";

// For local development, add a .env file with: VITE_API_BASE_URL=http://localhost:7011/api

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

// Cashfree payment APIs
export const createCashfreeOrder = (data) => {
  return axios.post(`${PAYMENT_API_URL}/create-cashfree-order`, data);
};

export const verifyCashfreePayment = (data) => {
  return axios.post(`${PAYMENT_API_URL}/verify-cashfree-payment`, data);
};

export const trackOrders = (phone) => {
  return axios.get(`${ORDER_API_URL}/track/${phone}`);
};

export const updateOrderStatus = (id, orderStatus) => {
  return axios.put(`${ORDER_API_URL}/update-status/${id}`, {
    orderStatus,
  });
};

export const checkCashfreePaymentStatus = (orderId) => {
  return axios.get(`${PAYMENT_API_URL}/check-payment-status/${orderId}`);
};
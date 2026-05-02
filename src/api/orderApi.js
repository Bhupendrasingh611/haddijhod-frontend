import axios from "axios";

const API_URL = "https://localhost:7269/api/Orders";

export const createOrder = (data) => {
    return axios.post(API_URL, data);
};

export const getOrders = () => {
    return axios.get(API_URL);
};

export const deleteOrder = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};

export const updateOrder = (id, data) => {
  return axios.put(`https://localhost:7269/api/Orders/${id}`, data);
};
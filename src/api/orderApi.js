import axios from "axios";

const API_URL = "https://haddijhodapi20260502134128-fgbebbftcqaubahc.canadacentral-01.azurewebsites.net/api/Orders";

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
    return axios.put(`${API_URL}/${id}`, data);
};
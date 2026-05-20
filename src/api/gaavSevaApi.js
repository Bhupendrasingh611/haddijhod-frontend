import axios from "axios";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "https://localhost:7204/api";

export const registerGaavSeva = async (formData) => {
  return await axios.post(`${API_BASE_URL}/GaavSeva/register`, formData);
};

export const getAllGaavSevaRegistrations = async () => {
  return await axios.get(`${API_BASE_URL}/GaavSeva/get-all`);
};

export const getGaavSevaById = async (id) => {
  return await axios.get(`${API_BASE_URL}/GaavSeva/${id}`);
};

export const getGaavSevaByRegistrationId = async (registrationId) => {
  return await axios.get(
    `${API_BASE_URL}/GaavSeva/by-registration/${registrationId}`
  );
};

export const getGaavSevaByMobile = async (mobile) => {
  return await axios.get(`${API_BASE_URL}/GaavSeva/by-mobile/${mobile}`);
};

export const searchGaavSevaRegistrations = async ({ keyword = "", status = "" }) => {
  return await axios.get(`${API_BASE_URL}/GaavSeva/search`, {
    params: {
      keyword,
      status,
    },
  });
};

export const getGaavSevaStats = async () => {
  return await axios.get(`${API_BASE_URL}/GaavSeva/stats`);
};

export const updateGaavSevaStatus = async (id, status) => {
  return await axios.put(`${API_BASE_URL}/GaavSeva/update-status/${id}`, {
    status,
  });
};

export const updateGaavSevaRegistration = async (id, formData) => {
  return await axios.put(`${API_BASE_URL}/GaavSeva/update/${id}`, formData);
};

export const deleteGaavSevaRegistration = async (id) => {
  return await axios.delete(`${API_BASE_URL}/GaavSeva/${id}`);
};
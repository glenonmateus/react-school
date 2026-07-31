import axios, { handleAxiosError } from "services/axios";

export const fetchUserById = async (userId) => {
  try {
    return await axios.get(`/users/${userId}`);
  } catch (error) {
    handleAxiosError(error);
  }
};

export const storeUser = async (payload) => {
  try {
    return await axios.post(`/users/store`, {
      ...payload,
    });
  } catch (error) {
    handleAxiosError(error);
  }
};

export const updateUser = async (payload) => {
  try {
    return await axios.put(`/users`, { ...payload });
  } catch (error) {
    handleAxiosError(error);
  }
};

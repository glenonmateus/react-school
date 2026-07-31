import axios, { handleAxiosError } from "services/axios";

export const fetchUser = async () => {
  try {
    return await axios.get(`/users/`);
  } catch (error) {
    handleAxiosError(error);
  }
};

export const storeUser = async (payload) => {
  const { name, surname, email, password } = payload;
  try {
    return await axios.post(`/users/store`, {
      name,
      surname,
      email,
      password,
    });
  } catch (error) {
    handleAxiosError(error);
  }
};

export const updateUser = async (payload) => {
  const { name, surname, email, password } = payload;
  try {
    return await axios.put(`/users`, { name, surname, email, password });
  } catch (error) {
    handleAxiosError(error);
  }
};

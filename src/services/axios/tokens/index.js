import axios, { handleAxiosError } from "services/axios";

export const generateToken = async ({ email, password }) => {
  try {
    return await axios.post("/tokens", { email, password });
  } catch (error) {
    handleAxiosError(error);
  }
};

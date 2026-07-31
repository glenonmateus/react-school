import axios, { handleAxiosError } from "services/axios";

export const fetchStudent = async () => {
  try {
    return await axios.get(`/students/`);
  } catch (error) {
    handleAxiosError(error);
  }
};

export const deleteStudent = async (studentId) => {
  try {
    return await axios.delete(`/students/${studentId}`);
  } catch (error) {
    handleAxiosError(error);
  }
};

export const storeStudent = async (payload) => {
  try {
    return await axios.post(`/students/store`, {
      ...payload,
    });
  } catch (error) {
    handleAxiosError(error);
  }
};

export const updateStudent = async (payload) => {
  const { studentId } = payload;
  try {
    return await axios.put(`/students/${studentId}`, {
      ...payload,
    });
  } catch (error) {
    handleAxiosError(error);
  }
};

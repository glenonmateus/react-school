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
  const { name, surname, email, age, weight, height } = payload;
  try {
    return await axios.post(`/students/store`, {
      name,
      surname,
      email,
      age,
      weight,
      height,
    });
  } catch (error) {
    handleAxiosError(error);
  }
};

export const updateStudent = async (payload) => {
  const { studentId, name, surname, email, age, weight, height } = payload;
  try {
    return await axios.put(`/students/${studentId}`, {
      name,
      surname,
      email,
      age,
      weight,
      height,
    });
  } catch (error) {
    handleAxiosError(error);
  }
};

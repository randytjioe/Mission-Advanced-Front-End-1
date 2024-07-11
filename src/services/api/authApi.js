// src/services/api/authApi.js
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const login = async (credentials) => {
  const response = await axios.post(`${API_URL}/auth/login`, credentials);
  return response.data;
};

export const logout = async () => {
  localStorage.removeItem('token');

};

export const getCurrentUser = async () => {
  const token = localStorage.getItem('token');
  if (!token) return null;

  const response = await axios.get(`${API_URL}/users/profile`, {
    headers: { 'x-auth-token': token }
  });
  return response.data;
};

export const getUserCourses = async (userId) => {
    const response = await axios.get(`${API_URL}/users/${userId}/courses`);
    return response.data;
  };

  export const purchaseCourse = async (courseId, userId) => {
    const response = await axios.post(`${API_URL}/courses/${courseId}/purchase`, { userId });
    return response.data;
  };
  
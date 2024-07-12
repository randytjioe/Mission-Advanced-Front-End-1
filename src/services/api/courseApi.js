import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const getCourses = () => axios.get(`${API_URL}/courses`);
export const getCourse = (id) => axios.get(`${API_URL}/courses/${id}`);
export const createCourse = (courseData) => axios.post(`${API_URL}/courses`, courseData);
export const updateCourse = (id, courseData) => axios.put(`${API_URL}/courses/${id}`, courseData);
export const deleteCourse = (id) => axios.delete(`${API_URL}/courses/${id}`);

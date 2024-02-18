
import axios from 'axios';

const baseURL = 'http://localhost:5000/api'; // Update with your backend URL

const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Auth endpoints
export const login = async (userData) => {
  try {
    const response = await api.post('/auth/login', userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const signup = async (userData) => {
  try {
    const response = await api.post('/auth/signup', userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Book endpoints
export const searchBooks = async (query) => {
  try {
    const response = await api.get(`/books?query=${query}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getBookDetails = async (bookId) => {
  try {
    const response = await api.get(`/books/${bookId}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Add more functions for other endpoints as needed

export default api;

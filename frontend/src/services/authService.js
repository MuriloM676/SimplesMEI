import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth';

export const login = async (email, password) => {
  const response = await axios.post(`${API_URL}/login`, { email, password });
  const { token } = response.data;
  localStorage.setItem('token', token); // Salvar o token no localStorage
  return response.data;
};

export const register = async (name, email, password) => {
  const response = await axios.post(`${API_URL}/register`, { name, email, password });
  return response.data;
};

export const getToken = () => {
  return localStorage.getItem('token');
};
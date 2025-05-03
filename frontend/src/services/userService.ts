import axios from 'axios';

const API_BASE = 'http://localhost:5000'; // Adjust if different port

export const createUser = (data: { name: string; email: string; password: string }) =>
  axios.post(`${API_BASE}/user/createUser`, data);

export const updateUser = (id: string, data: { name: string; email: string; password: string }) =>
  axios.put(`${API_BASE}/user/updateUser/${id}`, data);

export const getUserById = (id: string) =>
  axios.get(`${API_BASE}/user/getUserById/${id}`);

export const deleteUser = (id: string) =>
  axios.delete(`${API_BASE}/user/deleteUser/${id}`);

export const bulkDeleteUsers = (ids: string[]) =>
  axios.delete(`${API_BASE}/user/bulkDeleteUsers`, { data: { ids } });

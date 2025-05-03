import axios from 'axios';
const API_BASE = 'http://localhost:3000';

export const createUser = (data: unknown) => axios.post(`${API_BASE}/User/createUser`, data);
export const updateUser = (id: number, data: unknown) => axios.put(`${API_BASE}/User/updateUser/${id}`, data);
export const getUserById = (id: number) => axios.get(`${API_BASE}/User/getUserById/${id}`);
export const deleteUser = (id: number) => axios.delete(`${API_BASE}/User/deleteUser/${id}`);
export const bulkDeleteUsers = (ids: number[]) => axios.delete(`${API_BASE}/User/bulkDeleteUsers`, { data: { ids } });

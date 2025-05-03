import axios from 'axios';
const API_BASE = 'http://localhost:3000';

export const createVehicle = (data: unknown) => axios.post(`${API_BASE}/Vehicle/createVehicle`, data);
export const updateVehicle = (id: number, data: unknown) => axios.put(`${API_BASE}/Vehicle/updateVehicle/${id}`, data);
export const getVehicleById = (id: number) => axios.get(`${API_BASE}/Vehicle/getVehicleById/${id}`);
export const deleteVehicle = (id: number) => axios.delete(`${API_BASE}/Vehicle/deleteVehicle/${id}`);
export const bulkDeleteVehicles = (ids: number[]) => axios.delete(`${API_BASE}/Vehicle/bulkDeleteVehicles`, { data: { ids } });

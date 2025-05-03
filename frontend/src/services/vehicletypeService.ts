import axios from 'axios';
const API_BASE = 'http://localhost:3000';

export const createVehicleType = (data: unknown) => axios.post(`${API_BASE}/VehicleType/createVehicleType`, data);
export const updateVehicleType = (id: number, data: unknown) => axios.put(`${API_BASE}/VehicleType/updateVehicleType/${id}`, data);
export const getVehicleTypeById = (id: number) => axios.get(`${API_BASE}/VehicleType/getVehicleTypeById/${id}`);
export const deleteVehicleType = (id: number) => axios.delete(`${API_BASE}/VehicleType/deleteVehicleType/${id}`);
export const bulkDeleteVehicleTypes = (ids: number[]) => axios.delete(`${API_BASE}/VehicleType/bulkDeleteVehicleTypes`, { data: { ids } });

import axios from 'axios';
const API_BASE = 'http://localhost:3000';

export const createBooking = (data: unknown) => axios.post(`${API_BASE}/booking/createBooking`, data);
export const updateBooking = (id: number, data: unknown) => axios.put(`${API_BASE}/booking/updateBooking/${id}`, data);
export const getBookingById = (id: number) => axios.get(`${API_BASE}/booking/getBookingById/${id}`);
export const deleteBooking = (id: number) => axios.delete(`${API_BASE}/booking/deleteBooking/${id}`);
export const bulkDeleteBookings = (ids: number[]) => axios.delete(`${API_BASE}/booking/bulkDeleteBookings`, { data: { ids } });

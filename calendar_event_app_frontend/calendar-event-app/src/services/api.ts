import axios from 'axios';
import { CalendarEvent } from '../types/event';

const api = axios.create({
    baseURL: import.meta.env.VITE_REACT_APP_API_URL,
});

api.interceptors.request.use(async (config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});


export const getEvents = () => api.get('/events/');

export const createEvent = (data: Partial<CalendarEvent>) => api.post('/events/', data);

export const updateEvent = (id: number, data: Partial<CalendarEvent>) =>
    api.put(`/events/${id}/`, data);

export const deleteEvent = (id: number) => api.delete(`/events/${id}/`);
import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.BACKEND_URL || 'http://localhost:5000/api/auth',
  withCredentials: true,   
});

export const register = (payload) => api.post('/register', payload).then(r => r.data);
export const login    = (payload) => api.post('/login',    payload).then(r => r.data);

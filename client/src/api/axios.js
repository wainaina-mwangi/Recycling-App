import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000',
  // baseURL: 'https://recycling-app-eotz.vercel.app/',
  withCredentials: true,
});

export default api;

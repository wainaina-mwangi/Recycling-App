




import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // ✅ change to your backend URL in production
  withCredentials: true,                // 🔐 allows cookies (e.g. JWTs) to be sent
});

// Optional: Refresh token logic (only needed if you're using /api/auth/refresh)
api.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;

    // Handle expired access token (401)
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        await api.post('/auth/refresh');
        return api(originalRequest); // retry original request
      } catch (refreshError) {
        console.error('Token refresh failed:', refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default api;

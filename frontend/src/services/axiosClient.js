import axios from 'axios';

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api', 
  timeout: 10000,
  withCredentials: true, // Allows HttpOnly cookies for authentication
});

// Request interceptor
axiosClient.interceptors.request.use(
  (config) => {
    // TODO: Attach token if needed
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor
axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // Optional: handle 401/403 errors here globally
    return Promise.reject(error);
  }
);

export default axiosClient;

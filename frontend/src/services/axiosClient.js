import axios from 'axios';

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true, // 👈 SUPER IMPORTANT
});

export default axiosClient;

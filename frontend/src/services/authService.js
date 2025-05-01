import axiosClient from './axiosClient';

const AuthService = {
  login: (credentials) => axiosClient.post('/auth/login', credentials),
  register: (data) => axiosClient.post('/auth/register', data),
  logout: () => axiosClient.post('/auth/logout'),
  getCurrentUser: () => axiosClient.get('/auth/me'),
};

export default AuthService;

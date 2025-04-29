import axiosClient from './axiosClient';

const AuthService = {
  register: (data) => axiosClient.post('/auth/register', data),
  login: (data) => axiosClient.post('/auth/login', data),
  logout: () => axiosClient.post('/auth/logout'),
  getCurrentUser: () => axiosClient.get('/auth/me'),
};

export default AuthService;

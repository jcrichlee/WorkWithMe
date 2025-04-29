import axiosClient from './axiosClient';

const AdminService = {
  getUsers: () => axiosClient.get('/admin/users'),
  deleteUser: (id) => axiosClient.delete(`/admin/users/${id}`),
  getAllBookings: () => axiosClient.get('/admin/bookings'),
};

export default AdminService;

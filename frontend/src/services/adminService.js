import axiosClient from './axiosClient';

const AdminService = {
  getUsers: () => axiosClient.get('/admin/users'),
  deleteUser: (id) => axiosClient.delete(`/admin/user/${id}`),
  getAllBookings: () => axiosClient.get('/admin/bookings'),
};

export default AdminService;

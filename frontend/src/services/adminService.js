import axiosClient from './axiosClient';

const adminService = {
  getDashboardStats: async () => {
    const { data } = await axiosClient.get('/admin/stats');
    return data;
  },
  getAllUsers: async () => {
    const { data } = await axiosClient.get('/admin/users');
    return data;
  },
  getAllWorkspaces: async () => {
    const { data } = await axiosClient.get('/admin/workspaces');
    return data;
  },
  deleteUser: async (userId) => {
    await axiosClient.delete(`/admin/users/${userId}`);
  },
  deleteWorkspace: async (workspaceId) => {
    await axiosClient.delete(`/admin/workspaces/${workspaceId}`);
  }
};

export default adminService;

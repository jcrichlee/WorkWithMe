import axiosClient from './axiosClient';

const WorkspaceService = {
  getAll: (filters = {}) => axiosClient.get('/workspaces', { params: filters }),
  getById: (id) => axiosClient.get(`/workspaces/${id}`),
  create: (data) => axiosClient.post('/workspaces', data),
  update: (id, data) => axiosClient.patch(`/workspaces/${id}`, data),
  remove: (id) => axiosClient.delete(`/workspaces/${id}`),
};

export default WorkspaceService;

import axiosClient from './axiosClient';

const WorkspaceService = {
  getAll: () => axiosClient.get('/workspaces'),
  getById: (id) => axiosClient.get(`/workspaces/${id}`),
  create: (workspaceData) => axiosClient.post('/workspaces', workspaceData),
  update: (id, workspaceData) => axiosClient.put(`/workspaces/${id}`, workspaceData),
  delete: (id) => axiosClient.delete(`/workspaces/${id}`),
};

export default WorkspaceService;

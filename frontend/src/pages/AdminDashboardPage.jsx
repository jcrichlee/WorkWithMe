import React, { useEffect, useState } from 'react';
import AdminNavbar from '../components/AdminNavbar';
import AdminCard from '../components/AdminCard';
import adminService from '../services/adminService';

const AdminDashboardPage = () => {
  const [stats, setStats] = useState({});
  const [users, setUsers] = useState([]);
  const [workspaces, setWorkspaces] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const dashboardStats = await adminService.getDashboardStats();
      const userList = await adminService.getAllUsers();
      const workspaceList = await adminService.getAllWorkspaces();
      setStats(dashboardStats);
      setUsers(userList);
      setWorkspaces(workspaceList);
    };
    fetchData();
  }, []);

  return (
    <div>
      <AdminNavbar />
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>

        <div className="grid grid-cols-3 gap-6 mb-8">
          <AdminCard title="Users" value={stats.totalUsers || 0} />
          <AdminCard title="Workspaces" value={stats.totalWorkspaces || 0} />
          <AdminCard title="Bookings" value={stats.totalBookings || 0} />
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">All Users</h2>
          <div className="bg-white shadow rounded p-4 overflow-auto h-64">
            {users.map(user => (
              <div key={user._id} className="border-b p-2 flex justify-between">
                <span>{user.email}</span>
                <button className="text-red-500" onClick={() => adminService.deleteUser(user._id)}>Delete</button>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Workspaces</h2>
          <div className="bg-white shadow rounded p-4 overflow-auto h-64">
            {workspaces.map(workspace => (
              <div key={workspace._id} className="border-b p-2 flex justify-between">
                <span>{workspace.title}</span>
                <button className="text-red-500" onClick={() => adminService.deleteWorkspace(workspace._id)}>Remove</button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default AdminDashboardPage;

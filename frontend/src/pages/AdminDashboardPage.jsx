import { useEffect, useState } from 'react';
import AdminService from '../services/adminService';
import Loader from '../components/Loader';

const AdminDashboardPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AdminService.getUsers()
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loader />;

  return (
    <section className="p-6">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
      <table className="w-full table-auto border">
        <thead>
          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td className="border p-2">{user.name}</td>
              <td className="border p-2">{user.email}</td>
              <td className="border p-2">{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default AdminDashboardPage;

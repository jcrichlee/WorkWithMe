import { mockWorkspaces } from '../services/mockData';

const AdminDashboardPage = () => {
  return (
    <section className="p-6">
      <h2 className="text-3xl font-bold mb-6">Admin Panel</h2>

      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-4">Users</h3>
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="bg-primary text-white">
                <th className="border p-3">Name</th>
                <th className="border p-3">Email</th>
                <th className="border p-3">Role</th>
              </tr>
            </thead>
            <tbody>
              {/* Mock user row */}
              <tr className="text-center">
                <td className="border p-3">John Doe</td>
                <td className="border p-3">john@example.com</td>
                <td className="border p-3">Host</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-4">Listings</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {mockWorkspaces.map((workspace) => (
            <div key={workspace.id} className="border p-4 rounded shadow">
              <h4 className="font-semibold mb-2">{workspace.title}</h4>
              <p className="text-gray-500 mb-2">{workspace.location}</p>
              <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700">Delete</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdminDashboardPage;

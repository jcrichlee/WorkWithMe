import { mockWorkspaces } from '../services/mockData';
import WorkspaceCard from '../components/WorkspaceCard';

const HostDashboardPage = () => {
  return (
    <section className="p-6">
      <h2 className="text-3xl font-bold mb-6">Manage Your Listings</h2>
      <button className="mb-6 px-6 py-3 bg-accent text-white rounded hover:bg-blue-700">
        Add New Workspace
      </button>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {mockWorkspaces.map((workspace) => (
          <WorkspaceCard key={workspace.id} workspace={workspace} />
        ))}
      </div>
    </section>
  );
};

export default HostDashboardPage;

import { useEffect, useState } from 'react';
import WorkspaceService from '../services/workspaceService';
import WorkspaceCard from '../components/WorkspaceCard';
import Loader from '../components/Loader';

const WorkspacesPage = () => {
  const [workspaces, setWorkspaces] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    WorkspaceService.getAll()
      .then((res) => {
        setWorkspaces(res.data);
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
      <h1 className="text-3xl font-bold mb-6">Available Workspaces</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {workspaces.map((workspace) => (
          <WorkspaceCard key={workspace._id} workspace={workspace} />
        ))}
      </div>
    </section>
  );
};

export default WorkspacesPage;

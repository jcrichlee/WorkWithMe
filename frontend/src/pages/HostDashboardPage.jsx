import { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import WorkspaceService from '../services/workspaceService';
import WorkspaceCard from '../components/WorkspaceCard';
import Loader from '../components/Loader';

const HostDashboardPage = () => {
  const { user } = useContext(AuthContext);
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      WorkspaceService.getAll()
        .then((res) => {
          const mine = res.data.filter(ws => ws.user === user._id);
          setListings(mine);
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setLoading(false);
        });
    }
  }, [user]);

  if (loading) return <Loader />;

  return (
    <section className="p-6">
      <h1 className="text-2xl font-bold mb-6">My Hosted Workspaces</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {listings.map((workspace) => (
          <WorkspaceCard key={workspace._id} workspace={workspace} />
        ))}
      </div>
    </section>
  );
};

export default HostDashboardPage;

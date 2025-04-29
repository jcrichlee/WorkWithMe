import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import WorkspaceService from '../services/workspaceService';
import BookingForm from '../components/BookingForm';
import Loader from '../components/Loader';

const WorkspaceDetailPage = () => {
  const { id } = useParams();
  const [workspace, setWorkspace] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    WorkspaceService.getById(id)
      .then((res) => {
        setWorkspace(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <Loader />;

  if (!workspace) return <div className="p-6">Workspace not found</div>;

  return (
    <section className="p-6">
      <h1 className="text-2xl font-bold">{workspace.title}</h1>
      <img src={workspace.image || '/default.jpg'} alt={workspace.title} className="w-full h-64 object-cover rounded my-4" />
      <p className="mb-2 text-gray-600">{workspace.location}</p>
      <p className="text-primary font-bold">${workspace.price}/day</p>
      <BookingForm workspaceId={workspace._id} />
    </section>
  );
};

export default WorkspaceDetailPage;

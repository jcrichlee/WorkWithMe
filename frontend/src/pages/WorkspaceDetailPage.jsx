import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import WorkspaceService from '../services/workspaceService';
import BookingForm from '../components/BookingForm';

const WorkspaceDetailPage = () => {
  const { id } = useParams();
  const [workspace, setWorkspace] = useState(null);

  useEffect(() => {
    WorkspaceService.getById(id)
      .then(res => setWorkspace(res.data))
      .catch(() => setWorkspace(null));
  }, [id]);

  if (!workspace) return <div className="p-6">Workspace not found.</div>;

  return (
    <section className="p-6">
      <h2 className="text-3xl font-bold mb-6">{workspace.title}</h2>
      <img src={workspace.image || '/default-workspace.jpg'} alt={workspace.title} className="w-full h-64 object-cover rounded mb-4" />
      <p className="text-lg text-gray-700 mb-2">Location: {workspace.location}</p>
      <p className="text-lg text-accent font-bold mb-4">${workspace.price} / day</p>
      <BookingForm workspaceId={workspace._id} />
    </section>
  );
};

export default WorkspaceDetailPage;
// This page displays the details of a specific workspace, including its title, image, location, and price.
// It uses the `useParams` hook to get the workspace ID from the URL and fetches the workspace data using the `WorkspaceService`. If the workspace is not found, it displays a message indicating that. Otherwise, it renders the workspace details along with a booking form.
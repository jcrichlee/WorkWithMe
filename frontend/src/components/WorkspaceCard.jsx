import { Link } from 'react-router-dom';

const WorkspaceCard = ({ workspace }) => {
  return (
    <div className="border p-4 rounded shadow hover:shadow-lg transition">
      <img src={workspace.image || '/default.jpg'} alt={workspace.title} className="w-full h-40 object-cover rounded" />
      <h3 className="font-bold text-lg mt-2">{workspace.title}</h3>
      <p className="text-gray-500">{workspace.location}</p>
      <p className="text-accent font-bold mt-1">${workspace.price}/day</p>
      <Link to={`/workspaces/${workspace._id}`} className="block mt-2 text-primary hover:underline">View Details</Link>
    </div>
  );
};

export default WorkspaceCard;

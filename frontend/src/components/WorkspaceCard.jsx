import { Link } from 'react-router-dom';

const WorkspaceCard = ({ workspace }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition">
      <img src={workspace.image || '/default-workspace.jpg'} alt={workspace.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{workspace.title}</h3>
        <p className="text-gray-500">{workspace.location}</p>
        <p className="text-accent font-bold mt-2">${workspace.price}/day</p>
        <Link to={`/workspace/${workspace.id}`} className="block mt-4 text-center bg-accent text-white py-2 rounded hover:bg-blue-700">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default WorkspaceCard;

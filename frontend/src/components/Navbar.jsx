import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="flex justify-between items-center p-4 shadow bg-white">
      <Link to="/" className="text-2xl font-bold text-primary">WorkWithMe</Link>
      <div className="flex gap-4">
        {user ? (
          <>
            <Link to="/workspaces" className="hover:underline">Workspaces</Link>
            <Link to="/host" className="hover:underline">Host</Link>
            {user.role === 'admin' && <Link to="/admin" className="hover:underline">Admin</Link>}
            <button onClick={logout} className="hover:underline text-red-500">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="hover:underline">Login</Link>
            <Link to="/register" className="hover:underline">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

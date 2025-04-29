import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';
import { FaMoon, FaSun } from 'react-icons/fa';

const Navbar = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-primary text-white">
      <Link to="/" className="text-2xl font-bold text-accent">
        WorkWithMe
      </Link>
      <div className="flex items-center gap-6">
        <button onClick={toggleTheme}>
          {theme === 'light' ? <FaMoon /> : <FaSun />}
        </button>

        {user ? (
          <>
            <Link to="/listings" className="hover:text-accent">
              My Listings
            </Link>
            <button onClick={logout} className="hover:text-accent">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="hover:text-accent">
              Login
            </Link>
            <Link to="/register" className="hover:text-accent">
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

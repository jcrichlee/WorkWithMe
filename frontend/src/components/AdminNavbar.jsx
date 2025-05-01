import React from 'react';
import { Link } from 'react-router-dom';

const AdminNavbar = () => {
  return (
    <nav className="bg-gray-800 p-4 flex justify-between">
      <div className="text-white font-bold">Admin Panel</div>
      <Link to="/" className="text-white">Back to Site</Link>
    </nav>
  );
};

export default AdminNavbar;

import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

const Navbar = ({ openProfile, user }) => {
  return (
    <nav className="bg-white shadow p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">Kaam Finder</div>
        <div className="flex gap-8">
          <Link to="/" className="text-gray-600 hover:text-blue-600">
            Home
          </Link>
          <Link to="/jobs" className="text-gray-600 hover:text-blue-600">
            Jobs
          </Link>
          <div className="flex items-center gap-2 cursor-pointer" onClick={openProfile}>
          {user.image ? (
            <img
              src={user.image}
              alt="profile"
              className="w-9 h-9 rounded-full object-cover border-2 border-white"
            />
          ) : (
            <FaUserCircle className="text-2xl" />
          )}
        </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
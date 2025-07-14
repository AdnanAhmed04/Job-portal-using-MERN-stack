import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

const Navbar = ({ setPage, openProfile, user }) => {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">KaamFinder</h1>
      <div className="flex items-center gap-4">
        <button onClick={() => setPage('home')}>Home</button>
        <button onClick={() => setPage('jobs')}>Jobs</button>

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
          <span className="hidden sm:inline"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

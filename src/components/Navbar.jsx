import React from 'react';


// react icons
import { FaUserCircle } from 'react-icons/fa'; 


export default function Navbar({ setPage, openProfile }) {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">KaamFinder</h1>
      <div className="space-x-4">
        <button onClick={() => setPage('home')} className="cursor-pointer">Home</button>
        <button onClick={() => setPage('jobs')} className="cursor-pointer">Jobs</button>
        <button onClick={openProfile} className="cursor-pointer text-2xl"><FaUserCircle /></button>
      </div>
    </nav>
  );
}

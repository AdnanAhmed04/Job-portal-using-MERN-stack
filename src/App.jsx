import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Jobs from './pages/Jobs';
import Modal from './components/Modal';

export default function App() {
  const [page, setPage] = useState('home');
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar setPage={setPage} openProfile={() => setShowModal(true)} />
      
      <div className="p-6">
        {page === 'home' && <Home />}
        {page === 'jobs' && <Jobs />}
      </div>

      {showModal && <Modal onClose={() => setShowModal(false)} />}
    </div>
  );
}

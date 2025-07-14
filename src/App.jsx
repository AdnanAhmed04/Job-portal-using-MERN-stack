import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Jobs from './pages/Jobs';
import Modal from './components/Modal';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from './components/Footer';

export default function App() {
  const [page, setPage] = useState('home');
  const [showModal, setShowModal] = useState(false);

  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    role: 'Job Seeker',
    phone: '',
    image: '',
  });

  const handleSave = (updatedData) => {
    setUser(updatedData);
    setShowModal(false);
  };

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar setPage={setPage} openProfile={() => setShowModal(true)} user={user} />

      <div className="p-6">
        {page === 'home' && <Home />}
        {page === 'jobs' && <Jobs />}
      </div>

      {showModal && (
        <Modal
          onClose={() => setShowModal(false)}
          onSave={handleSave}
          initialData={user}
        />
      )}
      <Footer/>
    </div>
  );
}

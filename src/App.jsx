import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Jobs from './pages/Jobs';
import JobDetail from './components/JobDetail';
import Modal from './components/Modal';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from './components/Footer';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Jobcreation from './pages/Jobcreation';

export default function App() {
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
    <Router>
      <div className="min-h-screen bg-gray-50">
        {/* Removed setPage prop from Navbar */}
        <Navbar openProfile={() => setShowModal(true)} user={user} />

        <div className="p-6">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/" element={<Home />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/job/:id" element={<JobDetail />} />
            <Route path="/Jobcreation" element={<Jobcreation />} />

          </Routes>
        </div>

        {showModal && (
          <Modal
            onClose={() => setShowModal(false)}
            onSave={handleSave}
            initialData={user}
          />
        )}
        <Footer />
      </div>
    </Router>
  );
}
import React, { useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { jobFields } from './jobData'; // fallback data
import ApplyModal from './ApplyModal';

const JobDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const jobFromState = location.state?.job;
  const job = jobFromState || jobFields.find((job) => job.id === parseInt(id));
  const [showModal, setShowModal] = useState(false);

  if (!job) {
    return (
      <div className="p-6 text-center text-red-600 font-semibold">
        <p>❌ Job not found.</p>
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="p-6 max-w-3xl mx-auto bg-gray-100 rounded-lg shadow-sm space-y-2">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">{job.title}</h2>
        <p className="text-sm text-gray-500 mb-4">{job.company} — {job.location}</p>
        <p className="text-base text-gray-700 mb-6">{job.description}</p>
        <div>
          <p><span className="font-semibold">📌 Positions:</span> {job.positions}</p>
          <p><span className="font-semibold">🕒 Type:</span> {job.type}</p>
          <p><span className="font-semibold">💰 Salary:</span> {job.salary}</p>
          <p className='text-blue-700'><span className="font-semibold text-black ">🧠 Skills:</span> {job.skills}</p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className='bg-blue-500 text-white w-full py-2 text-lg rounded mt-3 cursor-pointer hover:bg-blue-600 transition'
        >
          Apply
        </button>
      </div>

      {showModal && <ApplyModal onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default JobDetail;

import React from 'react';
import { useParams } from 'react-router-dom';
import { jobFields } from './Job';

const JobDetail = () => {
  const { id } = useParams();
  const job = jobFields.find((job) => job.id === parseInt(id));

  if (!job) {
    return (
      <div className="p-6 text-center text-red-600 font-semibold">
        <p>❌ Job not found.</p>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">{job.title}</h2>
      <p className="text-sm text-gray-500 mb-4">{job.company} — {job.location}</p>
      <p className="text-base text-gray-700 mb-6">{job.description}</p>
      <div className="bg-gray-100 p-4 rounded-lg shadow-sm space-y-2">
        <p><span className="font-semibold">📌 Positions:</span> {job.positions}</p>
        <p><span className="font-semibold">🕒 Type:</span> {job.type}</p>
        <p><span className="font-semibold">💰 Salary:</span> {job.salary}</p>
      </div>
    </div>
  );
};

export default JobDetail;
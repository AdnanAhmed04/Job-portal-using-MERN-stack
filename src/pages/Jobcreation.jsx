import React, { useState } from 'react';

const Jobcreation = ({ onAddJob = () => {} }) => {
  const [job, setJob] = useState({
    name: '',
    lastDate: '',
    role: '',
    applicants: '',
    description: '',
    salary: '',
  });

  const handleChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(job).some((field) => field.trim() === '')) {
      alert('Please fill in all fields.');
      return;
    }

    onAddJob(job);
    alert('Job added successfully!');
    setJob({
      name: '',
      lastDate: '',
      role: '',
      applicants: '',
      description: '',
      salary: '',
    });
  };

  return (
    <div className="max-w-md mx-auto p-6 mt-10 bg-white rounded-lg shadow">
        <button>Veiw Applicants</button>
      <h2 className="text-2xl font-bold mb-4">Create a New Job</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" placeholder="Job title" value={job.name} onChange={handleChange} className="w-full border p-2 rounded" />
        <input type="text" name="lastDate" placeholder="Last date of submission" value={job.lastDate} onChange={handleChange} className="w-full border p-2 rounded" />
        <input type="text" name="role" placeholder="Role" value={job.role} onChange={handleChange} className="w-full border p-2 rounded" />
        <input type="text" name="applicants" placeholder="Applicants" value={job.applicants} onChange={handleChange} className="w-full border p-2 rounded" />
        <input type="text" name="description" placeholder="Job description" value={job.description} onChange={handleChange} className="w-full border p-2 rounded" />
        <input type="text" name="salary" placeholder="Salary" value={job.salary} onChange={handleChange} className="w-full border p-2 rounded" />
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Add Job</button>
      </form>
    </div>
  );
};

export default Jobcreation;

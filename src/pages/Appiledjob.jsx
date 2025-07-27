import React from 'react';

const Appiledjob = () => {
  return (
    <div className="flex flex-col items-center px-4 py-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Applied Jobs</h1>

      {[
        { role: "Front-end", date: "01-02-2025", company: "meri company hai", status: "Hired" },
        { role: "Back-end", date: "01-02-2025", company: "meri company hai", status: "InProgress" },
        { role: "Fullstack", date: "01-02-2025", company: "meri company hai", status: "Rejected" },
      ].map((job, index) => {

        let statusColor = 'text-yellow-500'; 
        if (job.status === 'Hired') statusColor = 'text-green-600';
        else if (job.status === 'Rejected') statusColor = 'text-red-600';

        return (
          <div
            key={index}
            className="flex flex-col md:flex-row md:justify-between bg-gray-200 w-full max-w-4xl p-4 rounded-lg mb-4 shadow-sm"
          >
            <p>Date : {job.date}</p>
            <p>Job Role : {job.role}</p>
            <p>Company : {job.company}</p>
            <p className={`font-semibold ${statusColor}`}>Status : {job.status}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Appiledjob;

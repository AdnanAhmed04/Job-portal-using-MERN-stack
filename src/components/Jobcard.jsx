import React from 'react';

const jobFields = [
  {
    company: 'JobHunt',
    location: 'Pakistan',
    title: 'Fullstack Developer',
    description: 'I need senior Fullstack developer, who can able to write the efficient code, and deal with frontend and backend both.',
    positions: '4 Positions',
    type: 'Full Time',
    salary: '340K monthly'
  },
  {
    company: 'TechVision',
    location: 'USA',
    title: 'Frontend Developer',
    description: 'Looking for a skilled frontend developer with experience in React and Tailwind CSS.',
    positions: '2 Positions',
    type: 'Remote',
    salary: '180K monthly'
  },
  {
    company: 'Creative Minds',
    location: 'Germany',
    title: 'UI/UX Designer',
    description: 'Creative UI/UX designer needed to design user-friendly and elegant interfaces.',
    positions: '1 Position',
    type: 'Full Time',
    salary: '150K monthly'
  },
  {
    company: 'SoftServe',
    location: 'Canada',
    title: 'Backend Developer',
    description: 'Seeking backend developer skilled in Node.js and database architecture.',
    positions: '3 Positions',
    type: 'Hybrid',
    salary: '220K monthly'
  },
  {
    company: 'HRConnect',
    location: 'Pakistan',
    title: 'HR Manager',
    description: 'Experienced HR manager required for handling internal recruitment and policies.',
    positions: '1 Position',
    type: 'Full Time',
    salary: '120K monthly'
  },
  {
    company: 'MarketRise',
    location: 'Dubai',
    title: 'Sales Executive',
    description: 'Sales executive with experience in B2B needed for global outreach.',
    positions: '5 Positions',
    type: 'On-site',
    salary: '120K monthly'
  },
  {
    company: 'Visionary Labs',
    location: 'Singapore',
    title: 'Data Analyst',
    description: 'Analyze data trends and generate actionable insights from business reports.',
    positions: '2 Positions',
    type: 'Full Time',
    salary: '205K monthly'
  },
  {
    company: 'BuildRight',
    location: 'UK',
    title: 'Project Manager',
    description: 'Project manager to oversee and deliver software projects within deadline.',
    positions: '1 Position',
    type: 'Full Time',
    salary: '300K monthly'
  }
];

const Jobcard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {jobFields.map((job, index) => (
        <div key={index} className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
          <h2 className="text-sm text-gray-600">{job.company}</h2>
          <p className="text-xs text-gray-500 mb-2">{job.location}</p>
          <h3 className="text-xl font-semibold mb-1">{job.title}</h3>
          <p className="text-gray-700 text-sm mb-4">{job.description}</p>
          <div className="flex gap-2 flex-wrap text-sm">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">{job.positions}</span>
            <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full">{job.type}</span>
            <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full">{job.salary}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Jobcard;

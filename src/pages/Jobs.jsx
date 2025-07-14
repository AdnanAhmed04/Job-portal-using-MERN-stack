import React, { useState } from 'react';

const Jobs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [salaryFilter, setSalaryFilter] = useState('');
  const [dateFilter, setDateFilter] = useState('');

  const jobs = [
    {
      company: 'JobHunt',
      location: 'Pakistan',
      title: 'Fullstack Developer',
      description: 'Senior Fullstack developer needed.',
      positions: '4 Positions',
      type: 'Full Time',
      salary: '340K monthly',
      datePosted: '2025-07-10',
    },
    {
      company: 'TechVision',
      location: 'USA',
      title: 'Frontend Developer',
      description: 'React and Tailwind CSS developer required.',
      positions: '2 Positions',
      type: 'Remote',
      salary: '180K monthly',
      datePosted: '2025-06-28',
    },
    {
      company: 'Creative Minds',
      location: 'Germany',
      title: 'UI/UX Designer',
      description: 'Design intuitive UI/UX.',
      positions: '1 Position',
      type: 'Full Time',
      salary: '150K monthly',
      datePosted: '2025-06-05',
    },
    {
      company: 'SoftServe',
      location: 'Canada',
      title: 'Backend Developer',
      description: 'Node.js backend role.',
      positions: '3 Positions',
      type: 'Hybrid',
      salary: '220K monthly',
      datePosted: '2025-07-05',
    },
    {
      company: 'HRConnect',
      location: 'Pakistan',
      title: 'HR Manager',
      description: 'HR policy & recruitment.',
      positions: '1 Position',
      type: 'Full Time',
      salary: '90K monthly',
      datePosted: '2025-07-02',
    },
    {
      company: 'MarketRise',
      location: 'Dubai',
      title: 'Sales Executive',
      description: 'B2B sales expert.',
      positions: '5 Positions',
      type: 'On-site',
      salary: '120K monthly',
      datePosted: '2025-06-15',
    },
    {
      company: 'Visionary Labs',
      location: 'Singapore',
      title: 'Data Analyst',
      description: 'Analyze business trends.',
      positions: '2 Positions',
      type: 'Full Time',
      salary: '205K monthly',
      datePosted: '2025-06-10',
    },
    {
      company: 'BuildRight',
      location: 'UK',
      title: 'Project Manager',
      description: 'Deliver projects on time.',
      positions: '1 Position',
      type: 'Full Time',
      salary: '300K monthly',
      datePosted: '2025-07-08',
    },
  ];

  const parseSalary = (salaryStr) => {
    if (!salaryStr || typeof salaryStr !== 'string') return 0;
    // Extract numeric value from salary string (e.g., '340K monthly' -> 340000)
    const match = salaryStr.match(/(\d+\.?\d*)\s*K/);
    return match ? parseFloat(match[1]) * 1000 : 0;
  };

  const isDateWithinRange = (dateStr, filter) => {
    const jobDate = new Date(dateStr);
    const today = new Date();

    if (filter === 'lastWeek') {
      const lastWeek = new Date();
      lastWeek.setDate(today.getDate() - 7);
      return jobDate >= lastWeek;
    }

    if (filter === 'lastMonth') {
      const lastMonth = new Date();
      lastMonth.setMonth(today.getMonth() - 1);
      return jobDate >= lastMonth;
    }

    return true;
  };

  const filteredJobs = jobs.filter((job) => {
    const salary = parseSalary(job.salary);

    const matchSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase());

    const matchSalary = (() => {
      if (!salaryFilter) return true;
      switch (salaryFilter) {
        case '<100K':
          return salary > 0 && salary < 100000;
        case '100K-200K':
          return salary >= 100000 && salary <= 200000;
        case '200K-300K':
          return salary > 200000 && salary <= 300000;
        case '>300K':
          return salary > 300000;
        default:
          return true;
      }
    })();

    const matchDate = !dateFilter || isDateWithinRange(job.datePosted, dateFilter);

    return matchSearch && matchSalary && matchDate;
  });

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Available Jobs</h2>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-6 items-start md:items-center">
        <input
          type="text"
          placeholder="Search by title or company..."
          className="w-full md:w-1/3 p-2 border border-gray-300 rounded"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          className="w-full md:w-1/4 p-2 border border-gray-300 rounded"
          value={salaryFilter}
          onChange={(e) => setSalaryFilter(e.target.value)}
        >
          <option value="">Filter by Salary</option>
          <option value="<100K">Below 100K</option>
          <option value="100K-200K">100K - 200K</option>
          <option value="200K-300K">200K - 300K</option>
          <option value=">300K">Above 300K</option>
        </select>

        <select
          className="w-full md:w-1/4 p-2 border border-gray-300 rounded"
          value={dateFilter}
          onChange={(e) => setDateFilter(e.target.value)}
        >
          <option value="">Filter by Date</option>
          <option value="lastWeek">Last Week</option>
          <option value="lastMonth">Last Month</option>
        </select>
      </div>

      {/* Job List */}
      <ul className="space-y-4">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job, index) => (
            <li key={index} className="bg-white p-4 rounded shadow-md">
              <h3 className="text-lg font-semibold">{job.title}</h3>
              <p className="text-sm text-gray-600">
                {job.company} - {job.location}
              </p>
              <p className="text-sm">{job.description}</p>
              <div className="text-sm mt-2">
                <span>{job.positions}</span> | <span>{job.type}</span> | <span>{job.salary}</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">Posted on: {job.datePosted}</p>
            </li>
          ))
        ) : (
          <p className="text-gray-500">No matching jobs found.</p>
        )}
      </ul>
    </div>
  );
};

export default Jobs;
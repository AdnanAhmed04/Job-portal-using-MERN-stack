import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const parseSalary = (salaryStr) => {
    if (!salaryStr || typeof salaryStr !== 'string') return 0;
    const match = salaryStr.match(/(\d+\.?\d*)\s*K/i);
    return match ? parseFloat(match[1]) * 1000 : 0;
};

export const jobFields = [
    {
        id: 1,
        company: 'JobHunt',
        location: 'Pakistan',
        title: 'Fullstack Developer',
        description: 'I need senior Fullstack developer, who can able to write the efficient code, and deal with frontend and backend both.',
        positions: '4 Positions',
        type: 'Full Time',
        salary: '340K monthly',
        datePosted: '2025-05-02'

    },
    {
        id: 2,
        company: 'TechVision',
        location: 'USA',
        title: 'Frontend Developer',
        description: 'Looking for a skilled frontend developer with experience in React and Tailwind CSS.',
        positions: '2 Positions',
        type: 'Remote',
        salary: '180K monthly',
        datePosted: '2025-06-22'

    },
    {
        id: 3,
        company: 'Creative Minds',
        location: 'Germany',
        title: 'UI/UX Designer',
        description: 'Creative UI/UX designer needed to design user-friendly and elegant interfaces.',
        positions: '1 Position',
        type: 'Full Time',
        salary: '150K monthly',
        datePosted: '2025-07-01'

    },
    {
        id: 4,
        company: 'SoftServe',
        location: 'Canada',
        title: 'Backend Developer',
        description: 'Seeking backend developer skilled in Node.js and database architecture.',
        positions: '3 Positions',
        type: 'Hybrid',
        salary: '220K monthly',
        datePosted: '2025-07-12'

    },
    {
        id: 5,
        company: 'HRConnect',
        location: 'Pakistan',
        title: 'HR Manager',
        description: 'Experienced HR manager required for handling internal recruitment and policies.',
        positions: '1 Position',
        type: 'Full Time',
        salary: '120K monthly',
        datePosted: '2025-03-14'

    },
    {
        id: 6,
        company: 'MarketRise',
        location: 'Dubai',
        title: 'Sales Executive',
        description: 'Sales executive with experience in B2B needed for global outreach.',
        positions: '5 Positions',
        type: 'On-site',
        salary: '120K monthly',
        datePosted: '2025-07-05'

    },
    {
        id: 7,
        company: 'Visionary Labs',
        location: 'Singapore',
        title: 'Data Analyst',
        description: 'Analyze data trends and generate actionable insights from business reports.',
        positions: '2 Positions',
        type: 'Full Time',
        salary: '205K monthly',
        datePosted: '2025-07-14'

    },
    {
        id: 8,
        company: 'BuildRight',
        location: 'UK',
        title: 'Project Manager',
        description: 'Project manager to oversee and deliver software projects within deadline.',
        positions: '1 Position',
        type: 'Full Time',
        salary: '300K monthly',
        datePosted: '2025-07-08'

    }
];

const Job = () => {
    const [fieldFilter, setFieldFilter] = useState('');
    const [salaryFilter, setSalaryFilter] = useState('');
    const [dateFilter, setDateFilter] = useState('');

    const filteredJobs = jobFields.filter((job) => {
        const fieldMatch = job.title.toLowerCase().includes(fieldFilter.toLowerCase());
        const salary = parseSalary(job.salary);

        let salaryMatch = true;
        if (salaryFilter === '<100K') salaryMatch = salary < 100000;
        else if (salaryFilter === '<200K') salaryMatch = salary < 200000;
        else if (salaryFilter === '<300K') salaryMatch = salary < 300000;
        else if (salaryFilter === '>300K') salaryMatch = salary > 300000;

        let dateMatch = true;
        if (dateFilter) {
            const days = parseInt(dateFilter);
            const jobDate = new Date(job.datePosted);
            const today = new Date();
            const diffDays = (today - jobDate) / (1000 * 60 * 60 * 24);
            dateMatch = diffDays <= days;
        }

        return fieldMatch && salaryMatch && dateMatch;
    });

    return (
        <div className="p-6">
            <div className="mb-6 flex flex-col sm:flex-row gap-4">
                <div className='w-[100%] '>
                    <input
                    type="text"
                    placeholder="Seearch By Field . . . ."
                    value={fieldFilter}
                    onChange={(e) => setFieldFilter(e.target.value)}
                    className="border p-2 rounded w-full  text-gray-800"
                />
                </div>
                <select
                    value={salaryFilter}
                    onChange={(e) => setSalaryFilter(e.target.value)}
                    className="border p-2 rounded w-full sm:w-1/3 text-gray-800"
                >
                    <option value="">All Salaries</option>
                    <option value="<100K">Below 100K</option>
                    <option value="<200K">Below 200K</option>
                    <option value="<300K">Below 300K</option>
                    <option value=">300K">Above 300K</option>
                </select>
                <select
                    value={dateFilter}
                    onChange={(e) => setDateFilter(e.target.value)}
                    className="border p-2 rounded w-full sm:w-1/3 text-gray-800"
                >
                    <option value="">All Dates</option>
                    <option value="7">Last 7 Days</option>
                    <option value="30">Last 30 Days</option>
                    <option value="90">Last 90 Days</option>
                </select>
            </div>

            {/* Jobs Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" data-aos="zoom-in-up">
                {filteredJobs.map((job) => (
                    <Link to={`/job/${job.id}`} key={job.id}>
                        <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
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
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Job;

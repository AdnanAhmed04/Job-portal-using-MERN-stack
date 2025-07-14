import React from 'react'
import { Link } from 'react-router-dom';


const Jobcard = () => {
    const jobFields = [
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
    
];
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 " data-aos="zoom-in-up">
            {jobFields.map((job) => (
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
    )
}

export default Jobcard

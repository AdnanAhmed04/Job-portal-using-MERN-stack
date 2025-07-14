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
    description: `A Fullstack Developer handles both frontend and backend development tasks.
You’ll build complete web applications, manage databases, and design APIs.
Strong knowledge of JavaScript, Node.js, React/Vue, and databases like MongoDB or SQL is required.
You will collaborate with designers and product managers throughout the project lifecycle.
Experience with deployment, CI/CD, and version control is a plus.`,
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
    description: `As a Frontend Developer, you'll create engaging user interfaces using modern frameworks like React or Vue.
You must ensure responsive design, cross-browser compatibility, and optimal performance.
Work closely with designers to bring mockups to life.
You should have a strong understanding of HTML, CSS, and JavaScript.
Experience with APIs and version control (Git) is essential.`,
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
    description: `The UI/UX Designer will craft intuitive and visually appealing digital experiences.
You’ll conduct user research, build wireframes, and design mockups in tools like Figma or Adobe XD.
Collaborate with developers to ensure smooth implementation of your designs.
Focus on usability, accessibility, and interaction design principles.
A strong portfolio showcasing UI/UX skills is required.`,
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
    description: `As a Backend Developer, you’ll focus on server-side logic, APIs, and database management.
You should have expertise in Node.js, Python, or similar backend technologies.
Optimizing performance, ensuring scalability, and implementing security best practices are key responsibilities.
Work closely with frontend developers to integrate user-facing elements.
Familiarity with RESTful APIs and cloud platforms is preferred.`,
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
    description: `As an HR Manager, you’ll oversee recruitment, employee relations, and HR policies.
You’ll manage hiring processes, conduct interviews, and coordinate onboarding.
Maintain compliance with labor laws and ensure workplace satisfaction.
Act as a bridge between management and employees.
Strong communication, leadership, and organizational skills are essential.`,
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
    description: `As a Sales Executive, your role is to generate leads and close deals to drive revenue.
You’ll present products/services to potential clients and maintain client relationships.
Achieve sales targets through cold calls, meetings, and presentations.
Understand market trends and customer needs to tailor sales strategies.
Strong communication, negotiation, and persuasive skills are vital.`,
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
    description: `As a Data Analyst, you’ll collect, clean, and analyze large datasets to uncover actionable insights.
You’ll use tools like Excel, SQL, Python, and BI platforms (e.g., Power BI or Tableau).
Collaborate with teams to support data-driven decision-making.
Identify trends, prepare reports, and visualize key metrics.
Strong analytical, statistical, and problem-solving skills are essential.`,
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
    description: `The Project Manager is responsible for planning, executing, and closing projects.
You’ll coordinate teams, set deadlines, and ensure project goals are met.
Manage resources, budgets, and stakeholder expectations.
Use tools like Trello, Jira, or Asana to track progress.
Excellent leadership and problem-solving abilities are required.`,
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
        <div className="w-full">
          <input
            type="text"
            placeholder="Search By Field..."
            value={fieldFilter}
            onChange={(e) => setFieldFilter(e.target.value)}
            className="border p-2 rounded w-full text-gray-800"
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
            <div className="relative">
              <div className="bg-gray-100 h-78 shadow-md rounded-xl p-6 pb-14 hover:shadow-lg transition relative">
                <h2 className="text-sm text-gray-600">{job.company}</h2>
                <p className="text-xs text-gray-500 mb-2">{job.location}</p>
                <h3 className="text-xl font-semibold mb-1">{job.title}</h3>
                <p className="text-gray-700 text-sm mb-4">{job.description}</p>

                {/* Tags at bottom */}
                <div className="flex gap-2 flex-wrap text-sm absolute bottom-4 left-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">{job.positions}</span>
                  <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full">{job.type}</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full">{job.salary}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Job;

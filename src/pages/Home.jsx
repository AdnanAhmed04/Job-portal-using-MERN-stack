import React from 'react';
import Jobcard from '../components/Jobcard';

const Home = () => {
  return (
    <div className="mt-10 px-4 md:px-8 lg:px-16">

      {/* Hero Section */}
      <div
        className="text-center mb-10 backdrop-blur-sm bg-white/30 p-6 rounded-xl shadow-md"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
          Welcome to the Job Portal
        </h2>
        <p className="text-gray-600 text-lg md:text-2xl">
          Find your dream job today!
        </p>
      </div>

      {/* Jobs Heading */}
      <div
        className="backdrop-blur-sm bg-white/30 p-4 rounded-xl shadow"
        data-aos="zoom-in-up"
        data-aos-delay="200"
      >
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center md:text-left">
          Latest Top Jobs Opening
        </h2>
        <div data-aos="fade-up" data-aos-delay="500">
          <Jobcard />
        </div>
      </div>
    </div>
  );
};

export default Home;

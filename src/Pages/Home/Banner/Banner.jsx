import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <section className="bg-[#07332F] pt-28 pb-16 md:py-32">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Your Best Medical Help Center
          </h1>
          <p className="text-gray-600 mb-6 text-lg">
            Manage, access, and share your documents securely—all in one place.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/get-started"
              className="bg-[#F7A582] text-white px-6 py-3 rounded-xl text-lg font-medium hover:bg-[#F7A582]/80 transition"
            >
              All Services
            </Link>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1 flex lg:flex-row flex-col items-center"
        >
          <img
            src="https://i.ibb.co/wNXGpsLh/Rectangle-20077-1.png"
            alt="DocHouse Illustration"
            className="max-w-md h-72 mx-auto"
          />
          <img
            src="https://i.ibb.co/Qv941wGG/Rectangle-20076-1.png"
            alt="DocHouse Illustration"
            className="max-w-md h-72 mx-auto md:absolute top-60 right-56"
          />
          <img
            src="https://i.ibb.co/fd1shqJw/Rectangle-20075-1.png"
            alt="DocHouse Illustration"
            className="max-w-md h-72 mx-auto z-20"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;

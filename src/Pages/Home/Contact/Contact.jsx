import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section className="bg-[#04332A] text-white p-8 md:p-12 rounded-xl max-w-6xl mx-auto my-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

        {/* Left Section - Text and Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Contact With Us</h2>
          <p className="text-gray-300 mb-6">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi.
          </p>
          <div className="flex items-center gap-3 mb-4">
            <Phone size={20} />
            <span className="text-sm">+88 01750 14 14 14</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin size={20} />
            <span className="text-sm">Dhanmondi, Dhaka, Bangladesh</span>
          </div>
        </motion.div>

        {/* Right Section - Form */}
        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          <input type="text" placeholder="Name" className="p-3 rounded bg-[#0D3C32] placeholder-gray-400 text-white outline-none" />
          <input type="email" placeholder="Email" className="p-3 rounded bg-[#0D3C32] placeholder-gray-400 text-white outline-none" />
          <input type="tel" placeholder="Mobile Number" className="p-3 rounded bg-[#0D3C32] placeholder-gray-400 text-white outline-none" />
          <input type="text" placeholder="Doctor Name" className="p-3 rounded bg-[#0D3C32] placeholder-gray-400 text-white outline-none" />
          <div className="relative">
            <input type="date" className="p-3 pr-10 rounded w-full bg-[#0D3C32] text-white outline-none" />
            <Calendar className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-400" size={18} />
          </div>
          <select className="p-3 rounded bg-[#0D3C32] text-white outline-none">
            <option>Time</option>
            <option>10:00 AM</option>
            <option>12:00 PM</option>
            <option>03:00 PM</option>
          </select>
          <button
            type="submit"
            className="col-span-1 sm:col-span-2 mt-2 bg-[#F78C6B] hover:bg-[#f5734e] transition text-white font-medium py-3 rounded"
          >
            Book Now
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;

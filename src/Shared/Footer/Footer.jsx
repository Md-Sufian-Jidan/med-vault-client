import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-100 pt-16 pb-6 mt-20 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10">

                {/* Logo & Description */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    <div className="flex items-center gap-2 mb-4">
                        <img src="https://i.ibb.co/yjn2X7Z/logo.png" alt="Med vault logo" className="w-8 h-8 text-[#07332F]" />
                        <h2 className="text-2xl font-bold text-[#1C2B32]">Med <span className="text-[#E2725B]">Vault</span></h2>
                    </div>
                    <p className="text-sm text-gray-500 mb-4">
                        Empowering patients and providers with secure, smart health record management.
                    </p>
                    <button className="px-4 py-2 text-sm border border-[#E2725B] text-[#E2725B] rounded hover:bg-[#E2725B] hover:text-white transition">
                        Appointment
                    </button>
                </motion.div>

                {/* Quick Links */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                >
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/service">Service</Link></li>
                        <li><Link to="/doctors">Doctors</Link></li>
                        <li><Link to="/departments">Departments</Link></li>
                        <li><Link to="/payment">Online Payment</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                        <li><Link to="/account">My Account</Link></li>
                    </ul>
                </motion.div>

                {/* Doc House Services */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                >
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Doc House Services</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                        <li>Pediatric Clinic</li>
                        <li>Diagnosis Clinic</li>
                        <li>Cardiac Clinic</li>
                        <li>Laboratory Analysis</li>
                        <li>Gynecological Clinic</li>
                        <li>Personal Counseling</li>
                        <li>Dental Clinic</li>
                    </ul>
                </motion.div>

                {/* Working Hours */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                >
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Working Hours</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                        <li>Monday – 10 am to 7 pm</li>
                        <li>Tuesday – 10 am to 7 pm</li>
                        <li>Wednesday – 10 am to 7 pm</li>
                        <li>Thursday – 10 am to 7 pm</li>
                        <li>Friday – 10 am to 7 pm</li>
                        <li>Saturday – 10 am to 7 pm</li>
                        <li>Sunday – 10 am to 7 pm</li>
                    </ul>
                </motion.div>
            </div>

            {/* Bottom bar */}
            <div className="mt-12 border-t pt-4 text-center text-sm text-gray-400">
                &copy; {new Date().getFullYear()} · All rights reserved by MedVault Ltd
            </div>
        </footer>
    );
};

export default Footer;

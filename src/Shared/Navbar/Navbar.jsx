import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const linkClass = 'hover:text-blue-600 text-white transition';
    const activeClass = 'text-blue-600 font-semibold';

    const navLinks = (
        <>
            <li><NavLink to="/" className={({ isActive }) => isActive ? `${linkClass} ${activeClass}` : linkClass}>Home</NavLink></li>
            <li><NavLink to="/features" className={({ isActive }) => isActive ? `${linkClass} ${activeClass}` : linkClass}>Features</NavLink></li>
            <li><NavLink to="/pricing" className={({ isActive }) => isActive ? `${linkClass} ${activeClass}` : linkClass}>Pricing</NavLink></li>
            <li><NavLink to="/contact" className={({ isActive }) => isActive ? `${linkClass} ${activeClass}` : linkClass}>Contact</NavLink></li>
        </>
    );

    return (
        <motion.nav
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="bg-[#07332F] shadow-md fixed top-0 left-0 right-0 z-50"
        >
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                <div className="text-2xl font-bold flex items-center gap-1">
                    <img className='w-8 h-8' src="https://i.ibb.co/yjn2X7Z/logo.png" alt="" />
                    <span className='text-[#F7A582]'>Med</span>Vault
                </div>

                {/* Desktop nav */}
                <ul className="hidden md:flex space-x-8 items-center">
                    {React.Children.map(navLinks.props.children, (child) => (
                        <motion.li whileHover={{ scale: 1.05 }}>
                            {child}
                        </motion.li>
                    ))}
                </ul>

                {/* Mobile menu toggle */}
                <div className="md:hidden text-white">
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.ul
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden px-4 pb-4 space-y-2"
                    >
                        {React.Children.map(navLinks.props.children, (child) => (
                            <motion.li whileHover={{ scale: 1.02 }}>
                                {child}
                            </motion.li>
                        ))}
                    </motion.ul>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;

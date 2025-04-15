import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { user, logOut } = useAuth();
    const linkClass = 'hover:text-blue-600 text-white transition';
    const activeClass = 'text-blue-600 font-semibold';

    const handleLogout = () => {
        logOut()
            .then(res => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'User Logout successfully.',
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch(err => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: err.message,
                    showConfirmButton: false,
                    timer: 1500
                });
            })
    };

    const navLinks = (
        <>
            <li><NavLink to="/" className={({ isActive }) => isActive ? `${linkClass} ${activeClass}` : linkClass}>Home</NavLink></li>
            <li><NavLink to="/features" className={({ isActive }) => isActive ? `${linkClass} ${activeClass}` : linkClass}>Features</NavLink></li>
            <li><NavLink to="/pricing" className={({ isActive }) => isActive ? `${linkClass} ${activeClass}` : linkClass}>Pricing</NavLink></li>
            <li><NavLink to="/contact" className={({ isActive }) => isActive ? `${linkClass} ${activeClass}` : linkClass}>Contact</NavLink></li>
            {
                user ?
                    <li><button onClick={handleLogout} className='btn btn-error'>Logout</button></li> :
                    <li><NavLink to="/signIn" className={({ isActive }) => isActive ? `${linkClass} ${activeClass}` : linkClass}>Sign In</NavLink></li>
            }
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
                <div className='md:flex items-center gap-3 hidden'>
                    {/*  user profile */}
                    {
                        user && <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src={user?.photoURL} />
                            </div>
                        </div>
                    }
                    <ul className="hidden md:flex space-x-8 items-center">
                        {React.Children.map(navLinks.props.children, (child) => (
                            <motion.li whileHover={{ scale: 1.05 }}>
                                {child}
                            </motion.li>
                        ))}
                    </ul>
                </div>
                <div className='flex items-center gap-3 md:hidden'>
                    {/*  user profile */}
                    {
                        user && <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="User profile"
                                    src={user?.photoURL} />
                            </div>
                        </div>
                    }
                    {/* Mobile menu toggle */}
                    <div className="md:hidden text-white">
                        <button onClick={() => setMenuOpen(!menuOpen)}>
                            {menuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
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

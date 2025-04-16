import { FaCommentDots, FaEnvelope, FaHome, FaList, FaRegCalendarAlt, FaShoppingCart, FaUsers, FaUtensilSpoon } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { motion } from 'framer-motion';
import useAdmin from "../../Hooks/useAdmin";

const Dashboard = () => {
    const [isAdmin] = useAdmin();
    return (
        <div className="flex">
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-[#07332F] text-white">
                <ul className="menu w-full space-y-3">
                    {isAdmin ?
                        <>
                            <li>
                                <NavLink className={({ isActive }) => isActive ? 'bg-[#383838] text-white' : ''} to="/dashboard/adminHome">
                                    <FaHome size={20} />Admin Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className={({ isActive }) => isActive ? 'bg-[#383838] text-white' : ''} to="/dashboard/addDoctor">
                                    <FaUtensilSpoon size={20} />Add Doctor
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className={({ isActive }) => isActive ? 'bg-[#383838] text-white' : ''} to="/dashboard/manageDoctors">
                                    <FaList size={20} />Manage Doctors
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className={({ isActive }) => isActive ? 'bg-[#383838] text-white' : ''} to="/dashboard/users">
                                    <FaUsers size={20} />All User
                                </NavLink>
                            </li>
                        </>
                        : <>
                            <li>
                                <NavLink className={({ isActive }) => isActive ? 'bg-[#383838] text-white' : ''} to="/dashboard/userHome">
                                    <FaHome size={20} />User Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className={({ isActive }) => isActive ? 'bg-[#383838] text-white' : ''} to="/dashboard/reservation">
                                    <FaRegCalendarAlt size={20} />Reservation
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className={({ isActive }) => isActive ? 'bg-[#383838] text-white' : ''} to="/dashboard/cart">
                                    <FaShoppingCart size={20} />My Cart
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className={({ isActive }) => isActive ? 'bg-[#383838] text-white' : ''} to="/dashboard/review">
                                    <FaCommentDots size={20} />Reviews
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className={({ isActive }) => isActive ? 'bg-[#383838] text-white' : ''} to="/dashboard/lists">
                                    <FaList size={20} />My Bookings
                                </NavLink>
                            </li></>}
                    {/* shared nav links */}
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/">
                            <FaHome size={20} />Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/order/contact">
                            <FaEnvelope size={20} />Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
            {/* dashboard content */}
            <motion.main
                className="flex-1 p-6 bg-gray-50"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
            >
                <Outlet />
            </motion.main>
        </div>
    );
};

export default Dashboard;
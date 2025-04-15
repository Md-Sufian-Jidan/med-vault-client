import { FaMapMarkerAlt, FaCalendarAlt, FaDollarSign, FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const DoctorCard = ({ doctor }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg shadow-md border p-5 flex flex-col  space-y-4"
        >
            <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full h-64 rounded-md object-cover"
            />
            <div className="text-center">
                <h2 className="text-lg font-semibold">{doctor.name}</h2>
                <p className="text-sm text-gray-500">{doctor.designation}</p>
                <div className="flex justify-center text-yellow-400 mt-1">
                    {Array(5).fill(0).map((_, i) => (
                        <FaStar key={i} size={14} />
                    ))}
                </div>
            </div>
            <div className="text-sm space-y-2 text-gray-600">
                <div className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-[#F7A582]" />
                    <span>{doctor.location}</span>
                </div>
                <div className="flex items-center gap-2">
                    <FaCalendarAlt className="text-[#F7A582]" />
                    <span>{doctor.availability}</span>
                </div>
                <div className="flex items-center gap-2">
                    <FaDollarSign className="text-[#F7A582]" />
                    <span>${doctor.fee}</span>
                </div>
            </div>
            <Link to={`view/${doctor?._id}`} className="px-5 py-2 text-sm text-center border-2 border-[#F7A582] text-[#F7A582] rounded-md hover:bg-[#F7A582] hover:text-white transition">
                View Profile
            </Link>
        </motion.div>
    );
};

export default DoctorCard;
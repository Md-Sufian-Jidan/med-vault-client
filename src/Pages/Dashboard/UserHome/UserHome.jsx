import { FaCalendarCheck, FaFileMedical, FaEnvelopeOpenText } from 'react-icons/fa';
import useAuth from '../../../Hooks/useAuth';

const UserHome = () => {
    const { user } = useAuth();

    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            <h2 className="text-3xl font-bold mb-4">Welcome back, <span className="text-[#F7A582]">{user?.displayName}</span> 👋</h2>
            <p className="text-gray-600 mb-8">Here's a quick look at your medical dashboard.</p>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="bg-white rounded-xl shadow p-6 flex items-center gap-4 border">
                    <FaCalendarCheck className="text-3xl text-[#F7A582]" />
                    <div>
                        <h3 className="text-lg font-semibold">Appointments</h3>
                        <p className="text-gray-500">2 Upcoming</p>
                    </div>
                </div>
                <div className="bg-white rounded-xl shadow p-6 flex items-center gap-4 border">
                    <FaFileMedical className="text-3xl text-[#F7A582]" />
                    <div>
                        <h3 className="text-lg font-semibold">Prescriptions</h3>
                        <p className="text-gray-500">5 Available</p>
                    </div>
                </div>
                <div className="bg-white rounded-xl shadow p-6 flex items-center gap-4 border">
                    <FaEnvelopeOpenText className="text-3xl text-[#F7A582]" />
                    <div>
                        <h3 className="text-lg font-semibold">Messages</h3>
                        <p className="text-gray-500">1 New</p>
                    </div>
                </div>
            </div>

            {/* Upcoming Appointment */}
            <div className="bg-[#FFF7F3] border border-[#F7A582] p-6 rounded-xl shadow-md mb-10">
                <h3 className="text-xl font-bold mb-2">Next Appointment</h3>
                <p><strong>Date:</strong> April 20, 2025</p>
                <p><strong>Doctor:</strong> Dr. Sarah Malik (Dermatologist)</p>
                <p><strong>Time:</strong> 10:30 AM</p>
            </div>

            {/* Health Tips or Announcement */}
            <div className="bg-white rounded-xl shadow-md border p-6">
                <h3 className="text-xl font-bold mb-3">Health Tip 💡</h3>
                <p className="text-gray-600">
                    Drinking enough water daily can help prevent headaches, keep your joints lubricated,
                    and improve overall health. Aim for 8–10 glasses a day!
                </p>
            </div>
        </div>
    );
}
export default UserHome;
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const DoctorProfile = () => {
    const tabs = ['overview', 'locations', 'reviews', 'business hours'];
    const [activeTab, setActiveTab] = useState('overview');
    const { id } = useParams();
    const [doctor, setDoctor] = useState();
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        axiosSecure.get(`/view/${id}`)
            .then(res => setDoctor(res.data));
    }, []);

    return (
        <div className="max-w-5xl mx-auto my-10 p-6 bg-white rounded-xl shadow-md">
            {/* Profile Header */}
            <div className="flex flex-col md:flex-row items-center border border-blue-200 p-6 rounded-md">
                <div className="w-32 h-32 bg-gray-200 rounded-md mr-6">
                    <img src={doctor?.image} alt='Not Found' />
                </div>
                <div className="space-y-2">
                    <h2 className="text-2xl font-bold">{doctor?.name || 'Not Found'}</h2>
                    <p className="text-sm text-gray-600">{doctor?.designation || 'Not Found'}</p>
                    <div className="flex items-center space-x-2 text-sm">
                        <span>⭐ {doctor?.rating || 'Not Found'}</span>
                        <span className="text-gray-500">•</span>
                        <span>32 Reviews</span>
                    </div>
                    <p className="text-sm text-gray-600">{doctor?.location || 'Not available'}</p>
                    <div className="flex gap-2 mt-2">
                        <button className="px-4 py-1 border border-gray-300 rounded-md text-sm hover:bg-gray-100">Dental Filling</button>
                        <button className="px-4 py-1 border border-gray-300 rounded-md text-sm hover:bg-gray-100">Teeth Whitening</button>
                    </div>
                </div>
            </div>

            {/* Tabs */}
            <div className="flex border-b mt-6">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`capitalize px-4 py-2 text-sm font-medium ${activeTab === tab
                            ? 'border-b-2 border-[#F7A582] text-[#F7A582]'
                            : 'text-gray-500 hover:text-[#F7A582]'
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <div className="mt-6 space-y-4 text-sm leading-relaxed">
                {activeTab === 'overview' && (
                    <>
                        <h3 className="text-lg font-semibold">About Me</h3>
                        <p>
                            With years of experience in delivering compassionate and personalized care, I am dedicated to helping my patients achieve better health and well-being. I believe in a patient-centered approach, combining evidence-based practices with a deep understanding of each individual's unique needs.
                            Whether it's through preventive care, accurate diagnosis, or advanced treatment options, my goal is to ensure a comfortable and informed journey for every patient. I am committed to staying updated with the latest advancements in medical science to provide the best possible care.

                        </p>

                        <div className="grid md:grid-cols-2 gap-6 mt-4">
                            <div>
                                <h4 className="font-semibold">Education</h4>
                                <ul className="list-disc list-inside">
                                    <li>BDS - Bangabandhu Medical University</li>
                                    <li>MDS - India Institute of Dental Studies</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold">Awards</h4>
                                <ul className="list-disc list-inside">
                                    <li>Best Dentist 2021</li>
                                    <li>Top Oral Surgeon - 2022</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold">Work & Experience</h4>
                                <ul className="list-disc list-inside">
                                    <li>Dhaka Dental Center (5 years)</li>
                                    <li>OralCare Hospital (3 years)</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold">Services</h4>
                                <ul className="list-disc list-inside">
                                    <li>Root Canal</li>
                                    <li>Teeth Cleaning</li>
                                    <li>Dental Implants</li>
                                    <li>Smile Design</li>
                                </ul>
                            </div>
                        </div>
                    </>
                )}
                {activeTab === 'locations' && <p>📍 Location: {doctor?.location}</p>}
                {activeTab === 'reviews' && <p>⭐ User reviews will be listed here.</p>}
                {activeTab === 'business hours' && <p>🕘 {doctor?.availability}</p>}
            </div>
        </div>
    );
}

export default DoctorProfile;
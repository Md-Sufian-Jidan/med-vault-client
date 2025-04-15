import { useState } from 'react';

const DoctorProfile = () => {
    const [activeTab, setActiveTab] = useState('overview');

    return (
        <div className="max-w-5xl mx-auto my-10 p-6 bg-white rounded-xl shadow-md">
            {/* Profile Header */}
            <div className="flex flex-col md:flex-row items-center border border-blue-200 p-6 rounded-md">
                <div className="w-32 h-32 bg-gray-200 rounded-md mr-6" />
                <div className="space-y-2">
                    <h2 className="text-2xl font-bold">Dr. Ruby Perrin</h2>
                    <p className="text-sm text-gray-600">BDS, MDS - Oral & Maxillofacial Surgery</p>
                    <div className="flex items-center space-x-2 text-sm">
                        <span>⭐ 4.5</span>
                        <span className="text-gray-500">•</span>
                        <span>32 Reviews</span>
                    </div>
                    <p className="text-sm text-gray-600">Dhanmondi, Dhaka, Bangladesh</p>
                    <div className="flex gap-2 mt-2">
                        <button className="px-4 py-1 border border-gray-300 rounded-md text-sm hover:bg-gray-100">Dental Filling</button>
                        <button className="px-4 py-1 border border-gray-300 rounded-md text-sm hover:bg-gray-100">Teeth Whitening</button>
                    </div>
                </div>
            </div>

            {/* Tabs */}
            <div className="flex border-b mt-6">
                {['overview', 'locations', 'reviews', 'business hours'].map((tab) => (
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua. Ut enim ad minim veniam.
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
                {activeTab === 'locations' && <p>📍 Location: Dhanmondi, Dhaka</p>}
                {activeTab === 'reviews' && <p>⭐ User reviews will be listed here.</p>}
                {activeTab === 'business hours' && <p>🕘 Mon-Fri: 9am - 5pm</p>}
            </div>
        </div>
    );
}

export default DoctorProfile;
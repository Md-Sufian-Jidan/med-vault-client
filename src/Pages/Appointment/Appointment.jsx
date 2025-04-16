import { useState } from 'react';
import { FaCalendarAlt } from 'react-icons/fa';

const services = [
    { name: 'Teeth Orthodontics', icon: '🦷' },
    { name: 'Cosmetic Dentistry', icon: '💄' },
    { name: 'Teeth Cleaning', icon: '🪥' },
    { name: 'Cavity Protection', icon: '🛡️' },
    { name: 'Pediatric Dental', icon: '👶' },
    { name: 'Oral Surgery', icon: '🩺' },
];

const slots = [
    { service: 'Teeth Orthodontics', time: '10:00 AM - 11:00 AM' },
    { service: 'Cosmetic Dentistry', time: '11:30 AM - 12:30 PM' },
    { service: 'Teeth Cleaning', time: '1:00 PM - 2:00 PM' },
    { service: 'Teeth Orthodontics', time: '3:00 PM - 4:00 PM' },
    { service: 'Teeth Orthodontics', time: '4:30 PM - 5:30 PM' },
];

const Appointment = () => {
    const [selectedService, setSelectedService] = useState(null);

    return (
        <div className="max-w-6xl mx-auto p-4 space-y-8">
            {/* Top Section */}
            <div className="grid md:grid-cols-2 gap-6 items-center">
                <div className="flex flex-col items-center">
                    <FaCalendarAlt className="text-4xl text-[#F7A582]" />
                    <p className="mt-2 text-sm text-gray-500">Available Services on April 16, 2025</p>
                </div>
                <img
                    className="rounded-lg shadow-lg"
                    src="https://i.ibb.co/5WL81RHp/chair-1-1.png"
                    alt="Chair"
                />
            </div>

            {/* Service Selection */}
            <div className="text-center">
                <h2 className="text-xl font-semibold mb-4">Please select a service.</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {services.map((service, idx) => (
                        <button
                            key={idx}
                            onClick={() => setSelectedService(service.name)}
                            className={`border rounded-lg p-4 text-center text-sm shadow hover:bg-[#F7A582] hover:text-white transition ${selectedService === service.name ? 'bg-[#F7A582] text-white' : ''
                                }`}
                        >
                            <div className="text-2xl mb-2">{service.icon}</div>
                            {service.name}
                        </button>
                    ))}
                </div>
            </div>

            {/* Available Slots */}
            {selectedService && (
                <div>
                    <h3 className="text-center text-lg font-bold mt-10">
                        Available slots for {selectedService}.
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6">
                        {slots
                            .filter(slot => slot.service === selectedService)
                            .map((slot, idx) => (
                                <div
                                    key={idx}
                                    className="border p-5 rounded-lg shadow text-center space-y-3"
                                >
                                    <div className="text-3xl">{services.find(s => s.name === slot.service)?.icon}</div>
                                    <h4 className="font-semibold">{slot.service}</h4>
                                    <p>{slot.time}</p>
                                    <button className="px-4 py-1 border-2 border-[#F7A582] text-[#F7A582] rounded-md hover:bg-[#F7A582] hover:text-white transition">
                                        Book Appointment
                                    </button>
                                </div>
                            ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Appointment;

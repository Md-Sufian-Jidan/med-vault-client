import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
    return (
        <section className="max-w-6xl mx-auto px-4 py-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Get in Touch</h2>
            <p className="text-center text-gray-600 max-w-xl mx-auto mb-12">
                Have questions or need help? Reach out to us anytime — we're here for you.
            </p>

            <div className="grid md:grid-cols-2 gap-10">
                {/* Contact Info */}
                <div className="space-y-6">
                    <div className="flex items-center gap-4">
                        <FaPhone className="text-[#F7A582] text-xl" />
                        <span className="text-gray-700">+880 1234 567 890</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <FaEnvelope className="text-[#F7A582] text-xl" />
                        <span className="text-gray-700">support@dochouse.com</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <FaMapMarkerAlt className="text-[#F7A582] text-xl" />
                        <span className="text-gray-700">123 Medical Lane, Dhaka, Bangladesh</span>
                    </div>

                    {/* Optional Map */}
                    <div className="mt-6">
                        <img
                            src="https://i.ibb.co/0rH4JX1/map-placeholder.png"
                            alt="Map"
                            className="rounded-lg shadow"
                        />
                    </div>
                </div>

                {/* Contact Form */}
                <form className="space-y-6 bg-white p-8 rounded-lg shadow border">
                    <div>
                        <label className="block mb-1 font-medium">Your Name</label>
                        <input
                            type="text"
                            className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#F7A582]"
                            placeholder="Enter your name"
                        />
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">Email Address</label>
                        <input
                            type="email"
                            className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#F7A582]"
                            placeholder="you@example.com"
                        />
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">Message</label>
                        <textarea
                            rows="5"
                            className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#F7A582]"
                            placeholder="Write your message here..."
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="bg-[#F7A582] text-white px-6 py-2 rounded hover:bg-[#e68a4d] transition"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
}

export default Contact;
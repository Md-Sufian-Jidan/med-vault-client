import { FaUserMd, FaLaptopMedical, FaHeartbeat, FaShieldAlt } from 'react-icons/fa';

const Features = () => {
  const features = [
    {
      icon: <FaUserMd className="text-4xl text-[#F7A582]" />,
      title: 'Expert Doctors',
      description: 'Get access to highly qualified and experienced medical professionals in all specialties.',
    },
    {
      icon: <FaLaptopMedical className="text-4xl text-[#F7A582]" />,
      title: 'Advanced Technology',
      description: 'We use modern diagnostic equipment and telemedicine to enhance patient care.',
    },
    {
      icon: <FaHeartbeat className="text-4xl text-[#F7A582]" />,
      title: 'Personalized Care',
      description: 'Every patient gets a tailored treatment plan suited to their needs and history.',
    },
    {
      icon: <FaShieldAlt className="text-4xl text-[#F7A582]" />,
      title: 'Data Privacy',
      description: 'Your health data is safe with us — secure and compliant with regulations.',
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Why Choose Med Vault?</h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
        Discover what makes us the most trusted healthcare provider for thousands of patients.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition flex flex-col items-center"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
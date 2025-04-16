const Pricing = () => {
    const plans = [
        {
            name: 'Basic',
            price: '$29/month',
            features: [
                '1 Appointment / Month',
                'Basic Doctor Access',
                'Email Support',
            ],
            highlighted: false,
        },
        {
            name: 'Standard',
            price: '$59/month',
            features: [
                '5 Appointments / Month',
                'Access to Specialists',
                'Priority Support',
                'Health Tracker App',
            ],
            highlighted: true,
        },
        {
            name: 'Premium',
            price: '$99/month',
            features: [
                'Unlimited Appointments',
                '24/7 Support',
                'Video Consultations',
                'Dedicated Care Manager',
            ],
            highlighted: false,
        },
    ];

    return (
        <section className="max-w-6xl mx-auto px-4 py-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Choose Your Plan</h2>
            <p className="text-center text-gray-600 max-w-xl mx-auto mb-12">
                Affordable pricing plans designed for every stage of your health journey.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
                {plans.map((plan, idx) => (
                    <div
                        key={idx}
                        className={`rounded-xl p-6 border ${plan.highlighted
                                ? 'border-[#F7A582] shadow-lg'
                                : 'border-gray-200 shadow-sm'
                            } bg-white text-center`}
                    >
                        <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                        <p className="text-2xl font-bold text-[#F7A582] mb-4">{plan.price}</p>
                        <ul className="text-gray-600 space-y-2 mb-6">
                            {plan.features.map((feature, i) => (
                                <li key={i}>✅ {feature}</li>
                            ))}
                        </ul>
                        <button className="bg-[#F7A582] text-white px-5 py-2 rounded hover:bg-[#e38e5a] transition">
                            Get Started
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Pricing;
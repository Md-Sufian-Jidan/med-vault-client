import React from 'react';
import { motion } from 'framer-motion';
import { Clock, MapPin, Phone } from 'lucide-react';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.4,
    },
  }),
};

const ContactHighlights = () => {
  const cards = [
    {
      icon: <Clock size={28} />,
      title: 'Opening Hours',
      desc: 'Open 9.00 am to 5.00pm\nEveryday',
      bg: 'bg-[#04332A]',
      text: 'text-white',
    },
    {
      icon: <MapPin size={28} />,
      title: 'Our Locations',
      desc: 'Dhanmondi 17, Dhaka\n-1200, Bangladesh',
      bg: 'bg-[#F78C6B]',
      text: 'text-white',
    },
    {
      icon: <Phone size={28} />,
      title: 'Contact Us',
      desc: '+88 01750 00 00 00\n+88 01750 00 00 00',
      bg: 'bg-[#04332A]',
      text: 'text-white',
    },
  ];

  return (
    <section className="my-16 max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
      {cards.map((card, i) => (
        <motion.div
          key={i}
          className={`rounded-lg p-6 ${card.bg} ${card.text} shadow-md`}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={i}
        >
          <div className="mb-3">{card.icon}</div>
          <h4 className="font-semibold text-lg mb-1">{card.title}</h4>
          <p className="text-sm whitespace-pre-line">{card.desc}</p>
        </motion.div>
      ))}
    </section>
  );
};

export default ContactHighlights;

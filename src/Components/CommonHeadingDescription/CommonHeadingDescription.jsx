import React from 'react';
import { motion } from 'framer-motion';

const CommonHeadingDescription = ({ title, description, }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={`max-w-2xl mx-auto my-5 text-center`}
        >
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
                {title}
            </h2>
            <p className="text-sm md:text-base text-[#3B3A3A]">{description}</p>
        </motion.div>
    );
};

export default CommonHeadingDescription;

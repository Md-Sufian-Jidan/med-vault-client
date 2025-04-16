import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';

const OurServices = () => {
    const axiosPublic = useAxiosPublic();
    const [services, setServices] = useState();

    useEffect(() => {
        fetch('/public/services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, }}
            className='max-w-7xl mx-auto px-4 text-center py-5 flex md:flex-row flex-col items-center gap-10'
        >
            <div className='flex-1'>
                <img src='https://i.ibb.co/jkz985k2/Rectangle-20078-1.png' alt='doctor picture' />
            </div>

            <div className='flex-1 space-y-5  text-left'>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-4xl font-bold"
                >
                    Our Services
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-xl md:text-lg font-light"
                >
                    At MedVault, we provide a suite of smart, secure, and user-friendly tools designed to simplify your healthcare experience. Whether you're managing medical records, staying on top of your health, or sharing files with your doctor — our services ensure everything is just a click away.
                </motion.p>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                    {
                        services?.map(service => (
                            <div key={service?.service_name} className='flex flex-col items-center p-3 shadow-md rounded-xl'>
                                <img src={service.service_icon} alt={service.service_name} className="w-10 h-10" />
                                <h2>{service.service_name}</h2>
                            </div>
                        ))
                    }
                </div>
                <div className='mt-5 flex justify-self-center md:flex-row flex-col'>
                    <button className='p-5 md:rounded-l-lg md:border-t-2 md:border-b-2 md:border-l-2 bg-[#F7A582]'>Cavity Protection</button>
                    <button className='p-5 md:border-t-2 md:border-b-2'>Cosmetic Dentisty</button>
                    <button className='p-5 md:rounded-r-lg md:border-t-2 md:border-b-2 md:border-r-2'>Oral Surgery</button>
                </div>
                <div className='mt-5'>
                    <img className='w-full' src='https://i.ibb.co/LKC9K8q/Rectangle-10-1.png' alt='services img' />
                    <div className='text-left mt-3 space-y-3'>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-xl md:text-3xl font-bold"
                        >Electro  Gastrology Therapy
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-xl md:text-lg font-light"
                        >Electro Gastrology Therapy is a non-invasive treatment that uses mild electrical stimulation to regulate and restore normal gastric function. This innovative approach is designed to assist patients suffering from digestive disorders such as gastroparesis, bloating, and chronic indigestion. By gently stimulating the stomach muscles and nerves, it enhances motility, promotes better digestion, and supports overall gastrointestinal health — offering a modern solution for long-standing gastric issues.</motion.p>
                        <button className='btn btn-outline text-[#F7A582] mt-5'>More Details</button>
                    </div>
                </div>

            </div>

        </motion.div>
    );
};

export default OurServices;

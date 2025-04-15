import { useEffect, useState } from "react";
import CommonHeadingDescription from "../../../Components/CommonHeadingDescription/CommonHeadingDescription";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import DoctorCard from "../../../Components/DoctorCard/DoctorCard";

const Doctors = () => {
    const axiosPublic = useAxiosPublic();
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        axiosPublic.get('/doctors')
            .then(res => setDoctors(res.data));
    }, []);

    return (
        <div className="max-w-7xl mx-auto">
            <CommonHeadingDescription title={'Our Expert Doctors'} description={'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    doctors.slice(0, 3)?.map(doctor => <DoctorCard doctor={doctor} />)
                }

            </div>
            <div className="w-full flex justify-center items-center mt-5">
                <button className="px-5 py-2 text-sm border-2 border-[#F7A582] text-[#F7A582] rounded-md hover:bg-[#F7A582] hover:text-white transition">
                    See All Doctors
                </button>
            </div>
        </div>
    );
};

export default Doctors;
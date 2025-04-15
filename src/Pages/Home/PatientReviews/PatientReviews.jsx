import { useEffect, useRef, useState } from 'react';
import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import CommonHeadingDescription from "../../../Components/CommonHeadingDescription/CommonHeadingDescription";
import useAxiosPublic from '../../../Hooks/useAxiosPublic';

const PatientReviews = () => {
    const axiosPublic = useAxiosPublic();
    const [reviews, setReviews] = useState([]);
    const [swiperRef, setSwiperRef] = useState(null);
    const appendNumber = useRef(500);
    const prependNumber = useRef(1);
    // Create array with 500 slides
    const [slides, setSlides] = useState(
        Array.from({ length: 500 }).map((_, index) => `Slide ${index + 1}`)
    );

    const prepend = () => {
        setSlides([
            `Slide ${prependNumber.current - 2}`,
            `Slide ${prependNumber.current - 1}`,
            ...slides,
        ]);
        prependNumber.current = prependNumber.current - 2;
        swiperRef.slideTo(swiperRef.activeIndex + 2, 0);
    };

    const append = () => {
        setSlides([...slides, 'Slide ' + ++appendNumber.current]);
    };

    const slideTo = (index) => {
        swiperRef.slideTo(index - 1, 0);
    };

    useEffect(() => {
        axiosPublic.get('/reviews')
            .then(res => setReviews(res.data));
    }, []);

    return (
        <div className='max-w-7xl mx-auto '>
            <CommonHeadingDescription title={'What Our Patients Says'} description={'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'} />


            <Swiper
                modules={[Virtual, Navigation, Pagination]}
                onSwiper={setSwiperRef}
                slidesPerView={2}
                centeredSlides={true}
                spaceBetween={30}
                pagination={{
                    type: 'fraction',
                }}
                navigation={true}
                virtual
            >
                {reviews.map((item, index) => (
                    <SwiperSlide key={item?.patient_name} virtualIndex={index}>
                        <div className="flex flex-col justify-between h-full max-w-2xl my-10 rounded-lg shadow-md border-2 border-[#E6E6E6] md:p-10 p-3">
                            <div className="space-y-5">
                                <div className="flex md:flex-row flex-col items-center justify-between mt-4 space-y-3">
                                    <div className="flex md:flex-row flex-col items-center">
                                        <img className="w-20 h-20 mx-4 rounded-full border-2 border-[#F7A582]" src={item?.image} alt="avatar" />
                                        <div>
                                            <h2 className="text-xl font-bold">{item?.patient_name}</h2>
                                            <p>{item?.patient_work}</p>
                                        </div>
                                    </div>
                                    <img src="https://i.ibb.co/JR47WWnr/Quote-1.png" alt="quote" />
                                </div>
                                <p className="text-lg">{item?.review_description}</p>
                            </div>
                        </div>

                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default PatientReviews;
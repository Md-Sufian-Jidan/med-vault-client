import { FaStar } from 'react-icons/fa';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const UserReviews = () => {
    const { register, handleSubmit, reset } = useForm();
    const [rating, setRating] = useState(0);
    const axiosSecure = useAxiosSecure();

    const onSubmit = async (data) => {
        const reviewData = {
            doctorId: data.doctorId,
            patient_name: data.name,
            patient_work: data.work,
            review_description: data.review,
            rating,
            image: data.image
        };

        console.log(reviewData);

        // const res = await axiosSecure.post('/reviews', reviewData);
        // if (res.data.insertedId) {
        //     alert('Review submitted!');
        //     reset();
        //     setRating(0);
        // }
    };

    return (
        <div className="max-w-3xl mx-auto px-4 py-12">
            <h2 className="text-2xl font-bold mb-6">Write a Review ✍️</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-white p-6 rounded-xl border shadow-md">

                <div>
                    <label className="block font-medium mb-1">Your Name</label>
                    <input {...register("name")} className="input input-bordered w-full" required />
                </div>

                <div>
                    <label className="block font-medium mb-1">Your Profession</label>
                    <input {...register("work")} className="input input-bordered w-full" required />
                </div>

                <div>
                    <label className="block font-medium mb-1">Upload Photo (URL)</label>
                    <input {...register("image")} className="input input-bordered w-full" />
                </div>

                <div>
                    <label className="block font-medium mb-1">Select Doctor</label>
                    <select {...register("doctorId")} className="input input-bordered w-full" required>
                        <option value="">Select a doctor</option>
                        <option value="1">Dr. Sarah Malik</option>
                        <option value="2">Dr. Ahmed Rafi</option>
                        {/* Ideally fetch doctors from DB */}
                    </select>
                </div>

                <div>
                    <label className="block font-medium mb-1">Rating</label>
                    <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map(star => (
                            <FaStar
                                key={star}
                                onClick={() => setRating(star)}
                                className={`cursor-pointer text-2xl ${rating >= star ? 'text-yellow-400' : 'text-gray-300'}`}
                            />
                        ))}
                    </div>
                </div>

                <div>
                    <label className="block font-medium mb-1">Review</label>
                    <textarea {...register("review")} rows="4" className="textarea textarea-bordered w-full" required />
                </div>

                <button type="submit" className="bg-[#F7A582] text-white px-6 py-2 rounded-md hover:bg-orange-500 transition">
                    Submit Review
                </button>
            </form>
        </div>
    );
}

export default UserReviews;
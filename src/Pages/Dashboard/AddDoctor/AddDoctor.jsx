import { useState } from 'react';
import { FaUpload } from 'react-icons/fa';

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddDoctor = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        specialty: 'Teeth Orthodontics',
        photo: null
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'photo') {
            setFormData({ ...formData, photo: files[0] });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // const image = new FormData();
        // image.append('image', data.image[0]);
        // const res = await axiosPublic.post(image_hosting_api, image, {
        //     headers: {
        //         'content-type': 'multipart/form-data'
        //     }
        // });

        console.log(formData);
        // You can upload the image and post data to backend here
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Add a New Doctor</h2>
            <form onSubmit={handleSubmit} className="space-y-4">

                <input
                    type="text"
                    name="name"
                    placeholder="Enter Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none"
                    required
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Enter Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none"
                    required
                />

                <select
                    name="specialty"
                    value={formData.specialty}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none"
                >
                    <option>Teeth Orthodontics</option>
                    <option>Cardiology</option>
                    <option>Gastrology</option>
                    <option>Eye Care</option>
                </select>

                <label className="block w-full border-2 border-dashed rounded-md p-6 text-center cursor-pointer text-sm text-gray-500 hover:bg-gray-50">
                    <input
                        type="file"
                        name="photo"
                        accept="image/*"
                        onChange={handleChange}
                        className="hidden"
                    />
                    <div className="flex flex-col items-center">
                        <FaUpload className="text-lg mb-2" />
                        <span>{formData.photo ? formData.photo.name : "Upload Your Photo"}</span>
                    </div>
                </label>

                <button
                    type="submit"
                    className="w-full py-2 bg-[#003F34] text-white rounded-md hover:bg-[#005545] transition"
                >
                    Add
                </button>
            </form>
        </div>
    );
};

export default AddDoctor;

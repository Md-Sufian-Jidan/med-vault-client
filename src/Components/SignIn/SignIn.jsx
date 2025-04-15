import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';

const SignIn = () => {
    const { register, handleSubmit, reset, formState: { errors }, } = useForm();
    const { signIn } = useAuth();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        if (data.password.length < 6) {
            setLoading(false);
            return toast.error('Your password should at least 6 character long');
        }
        if (!/[A-Z]/.test(data.password)) {
            setLoading(false);
            return toast.error('Your password should contain a Capital letter')
        }
        if (!/[a-z]/.test(data.password)) {
            setLoading(false);
            return toast.error('Your password should contain a lower letter')
        }

        signIn(data.email, data.password)
            .then(res => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'User Login successfully.',
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/');
            })
            .catch(err => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: err.message,
                    showConfirmButton: false,
                    timer: 1500
                });
            });
    };

    return (
        <div className="flex lg:flex-row flex-col items-center justify-center min-h-screen bg-[#F0F4F8] px-4 gap-10">
            <motion.div
                className="w-full max-w-md bg-white p-8 rounded-xl shadow-md"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Sign in to Med Vault</h2>

                <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>

                    <div>
                        <label className="block text-sm font-medium text-gray-600">Email</label>
                        <input {...register("email", { required: true })}
                            type="email"
                            placeholder="Your email"
                            className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#F7A582]"
                        />
                        {errors.email && <span className='text-red-500'>Email field is required</span>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-600">Password</label>
                        <input {...register("password", { required: true })}
                            type="password"
                            placeholder="********"
                            className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#F7A582]"
                        />
                        {errors.password && <span className='text-red-500'>Password field is required</span>}
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#F7A582] text-white py-2 rounded-md hover:bg-[#e18a5c] transition"
                    >
                        Sign In
                    </button>

                    <p className="text-sm text-center text-gray-600 mt-3">
                        Do not have an account? <Link to="/signUp" className="text-[#F7A582] font-semibold">Sign Up</Link>
                    </p>
                </form>
            </motion.div>
            <motion.div
                className="w-full max-w-md rounded-xl "
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <img className='min-h-screen' src="https://i.ibb.co/xqS0fhVR/authentication-1.png" alt="" />
            </motion.div>
        </div>
    );
};

export default SignIn;

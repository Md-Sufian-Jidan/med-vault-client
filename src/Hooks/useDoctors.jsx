import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useDoctors = () => {
    const axiosPublic = useAxiosPublic();

    const { data: doctors = [], isPending: loading, refetch } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            const res = await axiosPublic.get('/doctors');
            console.log(res);
            return res.data;
        }
    })
    return { doctors, loading, refetch };
};

export default useDoctors;
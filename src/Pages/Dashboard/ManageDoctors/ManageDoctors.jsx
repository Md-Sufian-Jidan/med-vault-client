import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useDoctors from "../../../Hooks/useDoctors";

const ManageDoctors = () => {
    const axiosSecure = useAxiosSecure();
    const { doctors, refetch } = useDoctors();
    // console.log(doctors);
    // handle delete a item
    const handleDeleteItem = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/doctor/${item._id}`)
                if (res.data.deletedCount > 0) {
                    // refetch the api to update the ui
                    Swal.fire({
                        title: "Deleted!",
                        text: `${item.name} has been deleted.`,
                        icon: "success",
                        timer: 1500
                    });
                    refetch();
                }
            }
        });
    };

    return (
        <>
            <h2 className="text-xl md:text-3xl font-bold my-3">Manage Doctors : {doctors.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full rounded-xl">
                    {/* head */}
                    <thead className="bg-[#E6E6E6]">
                        <tr>
                            <th>#</th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>SPECIALITY</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* creating rows */}
                        {
                            doctors?.map((item, idx) => (
                                <tr key={item._id}>
                                    <td>{idx + 1}</td>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item?.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{item?.name}</td>
                                    <td>{item?.designation}</td>
                                    <td>
                                        <button
                                            onClick={() => handleDeleteItem(item)}
                                            className="btn bg-red-500 text-white">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>

                </table>
            </div>
        </>
    );
};

export default ManageDoctors;
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Home/Home/Home";
import DoctorProfile from "../Components/DoctorProfile/DoctorProfile";
import { axiosSecure } from "../Hooks/useAxiosSecure";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/view/:id',
                element: <DoctorProfile />,
                // loader: ({ params }) => axiosSecure.get(`view/${params?.id}`)
            },
        ]
    },
]);
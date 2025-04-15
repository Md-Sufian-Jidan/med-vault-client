import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Home/Home/Home";
import DoctorProfile from "../Components/DoctorProfile/DoctorProfile";
import SignUp from "../Components/SignUp/SignUp";

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
            },
        ]
    },
    {
        path: '/signUp',
        element: <SignUp />
    },
    {
        path: '/signUp',
        element: <SignUp />
    },
]);
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Home/Home/Home";
import DoctorProfile from "../Components/DoctorProfile/DoctorProfile";
import SignUp from "../Components/SignUp/SignUp";
import SignIn from "../Components/SignIn/SignIn";
import Error from "../Shared/Error/Error";
import Dashboard from "../Layouts/Dashboard/Dashboard";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <Error />,
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
        path: 'dashboard',
        element: <Dashboard />,
        errorElement: <Error />,
        children: [
            {
                path: 'adminHome',
                element: <AdminHome />
            },
            {
                path: 'users',
                element: <AllUsers />
            },
        ]
    },
    {
        path: '/signUp',
        element: <SignUp />
    },
    {
        path: '/signIn',
        element: <SignIn />
    },
]);
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
import ManageDoctors from "../Pages/Dashboard/ManageDoctors/ManageDoctors";
import AddDoctor from "../Pages/Dashboard/AddDoctor/AddDoctor";
import Appointment from "../Pages/Appointment/Appointment";
import Features from "../Pages/Features/Features";
import Pricing from "../Pages/Pricing/Pricing";

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
            {
                path: '/appointment',
                element: <Appointment />
            },
            {
                path: '/features',
                element: <Features />
            },
            {
                path: '/pricing',
                element: <Pricing />
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
            {
                path: 'manageDoctors',
                element: <ManageDoctors />
            },
            {
                path: 'addDoctor',
                element: <AddDoctor />
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
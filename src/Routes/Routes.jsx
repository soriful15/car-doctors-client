
import {
    createBrowserRouter,
} from "react-router-dom";

import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SingUp from "../Pages/SingUp/SingUp";

import BookServices from "../Pages/BookServices/BookServices";
import Booking from "../Pages/Booking/Booking";
import PrivateRout from "./PrivateRout";
// import UpdatedBooking from "../Pages/UpdateBooking/UpdatedBooking";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/singup',
                element: <SingUp></SingUp>
            },
            {
                path: '/books/:id',
                element: <PrivateRout><BookServices></BookServices></PrivateRout>,
                loader: ({ params }) => fetch(`https://cars-doctors-server-rho.vercel.app/services/${params.id}`)
            },
            {
                path: '/booking',
                element: <PrivateRout><Booking></Booking></PrivateRout>
            },
            // {
            //     path:'/booking/:id',
            //     element:<UpdatedBooking></UpdatedBooking>,
            //     loader:({params})=>fetch(`https://cars-doctors-server-rho.vercel.app/bookings/${params.id}`)
            // },
        ]
    },
]);
export default router
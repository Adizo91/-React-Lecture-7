import React from 'react'
import {createBrowserRouter, useNavigate} from "react-router-dom"
import Home from "./Components/Home"
import Login from "./Components/Login"
import Register from "./Components/Register"

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>,
    },
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/register",
        element: <Register/>
    },
])
// function Router() {
//   return (
//     <div>Router</div>
//   )
// }

export default router
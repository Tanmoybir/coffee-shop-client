import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import AddCoffee from "../pages/AddCoffee/AddCoffee";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";

const myCreateRouter = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        children:([
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/addCoffee',
                element:<AddCoffee/>
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/register',
                element:<Register/>
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/contact',
                element:<Contact/>
            },
        ])
    }
])

export default myCreateRouter;
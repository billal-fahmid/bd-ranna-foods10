import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import LoginLayout from "../layouts/LoginLayout/LoginLayout";
import Login from "../components/Login";
import Register from "../components/Register";
import Home from "../components/Home";
import ChefsLayout from "../layouts/ChefsLayout/ChefsLayout";
import Chefs from "../components/Chefs";
import ChefDetails from "../components/ChefDetails";
import Blog from "../components/Blog";

const router = createBrowserRouter([
    {
      path: "/",
      element:<LoginLayout></LoginLayout>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/blog',
            element:<Blog></Blog>
        },
        {
            path:'login',
            element:<Login></Login>
        },
        {
            path:'register',
            element:<Register></Register>
        }
      ]
    },
    {
        path:'chefs',
        element:<ChefsLayout></ChefsLayout>,
        children:[
            {
                path:'/chefs',
                element:<Chefs></Chefs>
            },
            {
                path:':id',
                element:<ChefDetails></ChefDetails>
            }
        ]
    }
  ]);

export default router;
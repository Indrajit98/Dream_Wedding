import { createBrowserRouter } from "react-router-dom";
import AllService from "../components/AllService";
import Blog from "../components/Blog";
import ErrorPage from "../components/ErrorPage";
import Home from "../components/Home";
import Login from "../components/Login";
import MyReview from "../components/MyReview";
import Review from "../components/Review";
import ServiceDetails from "../components/ServiceDetails";
import ServiceIdReviews from "../components/ServiceIdReviews";
import SignUp from "../components/SignUp";
import Main from "../layout/Main";
import PrivateRoutes from "./PrivateRoutes";

 export const routes = createBrowserRouter([
    {
        path:'/',element:<Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',element:<Home></Home>
            },
            {
                path:'/login',element:<Login></Login>
            },
            {
                path:'/signup',element:<SignUp></SignUp>
            },
            {
                path:'/myReview',element:<MyReview></MyReview>
            },
            {
                path:'/blog',element:<Blog></Blog>
            },
            {
                path:'/allServices',element:<AllService></AllService>,
                loader:()=>fetch('https://dream-wedding-server.vercel.app/allServices')
            },
            {
                path:'/serviceDetails/:id',element:<ServiceDetails></ServiceDetails>,
                loader:({params})=>fetch(`https://dream-wedding-server.vercel.app/servicesDetails/${params.id}`)
            },
            {
                path:'/review/:id',element:<PrivateRoutes><Review></Review></PrivateRoutes>,
                loader:({params})=>fetch(`https://dream-wedding-server.vercel.app/servicesDetails/${params.id}`)
               
            },
            {
                path:'/serviceIdReviews/:id',element:<ServiceIdReviews></ServiceIdReviews>,
                loader:({params})=>fetch(`https://dream-wedding-server.vercel.app/servicesDetails/${params.id}`)

               
            },
        ]
    }
])
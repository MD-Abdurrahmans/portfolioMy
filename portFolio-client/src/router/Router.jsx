import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../layouts/Root/Root";
import Home from "../pages/home/Home";
// import Register from "../components/form/register/Register";
// import Login from "../components/form/login/Login";
// import Dashboard from "../layouts/Dashboard/Dashboard";



  const router = createBrowserRouter([

     {
        path:'/',
        element:<Root/>,
        children:[
         {
            path:'/',
            element:<Home/>
         },
         // {
         //    path:'/register',
         //    element:<Register/>
         // },
         // {
         //    path:'/login',
         //    element:<Login/>
         // },
         // {
         //    path:'/dashboard',
         //    element:<Dashboard/>
         // },
        ]
     }
  ])



  
  export default  router
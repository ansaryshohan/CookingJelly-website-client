import { createBrowserRouter } from "react-router-dom";
import Home from "../Conponents/Home/Home/Home";
import AllProducts from "../Conponents/Products/AllProducts";
import ErrorPage from "../ErrorPage/ErrorPage";
import Main from "../Layouts/Main";

const router = createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/home',
        element:<Home></Home>
      },
      {
        path:'/products',
        element:<AllProducts></AllProducts>,
        loader:()=> fetch('http://localhost:5000/allProducts')
      }
    ]
  }
])

export default router;
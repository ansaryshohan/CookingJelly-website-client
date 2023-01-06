import { createBrowserRouter } from "react-router-dom";
import Home from "../Conponents/Home/Home/Home";
import AllProducts from "../Conponents/Products/AllProducts";
import ProductDetail from "../Conponents/Products/ProductDetail";
import ErrorPage from "../ErrorPage/ErrorPage";
import Main from "../Layouts/Main";
import Login from "../Login&Registration/Login";
import Registration from "../Login&Registration/Registration";

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
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Registration></Registration>
      },
      {
        path:'/products',
        element:<AllProducts></AllProducts>,
        loader:()=> fetch('http://localhost:5000/allProducts')
      },
      {
        path:'/singleProduct/:id',
        element:<ProductDetail></ProductDetail>,
        loader:({params})=> fetch(`http://localhost:5000/singleProduct/${params.id}`)
      }
    ]
  }
])

export default router;
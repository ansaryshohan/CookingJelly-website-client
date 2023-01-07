import { createBrowserRouter } from "react-router-dom";
import AddRecipe from "../Conponents/AddARecipe/AddRecipe";
import Blog from "../Conponents/Blog/Blog";
import Home from "../Conponents/Home/Home/Home";
import MyReview from "../Conponents/MyReview/MyReview";
import ReviewUpdate from "../Conponents/MyReview/ReviewUpdate";
import AllProducts from "../Conponents/Products/Product/AllProducts";
import ProductDetail from "../Conponents/Products/Product/ProductDetail";
import ErrorPage from "../ErrorPage/ErrorPage";
import Main from "../Layouts/Main";
import Login from "../Login&Registration/Login";
import Registration from "../Login&Registration/Registration";
import PrivaterRouter from "./PrivaterRouter";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/home',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Registration></Registration>
      },
      {
        path: '/products',
        element: <AllProducts></AllProducts>,
        loader: () => fetch('https://cooking-jelly-server.vercel.app/allProducts')
      },
      {
        path: '/singleProduct/:id',
        element: <ProductDetail></ProductDetail>,
        loader: ({ params }) => fetch(`https://cooking-jelly-server.vercel.app/singleProduct/${params.id}`)
      },
      {
        path: '/addrecipe',
        element: <PrivaterRouter><AddRecipe></AddRecipe></PrivaterRouter>
      },
      {
        path: '/review',
        element: <PrivaterRouter><MyReview></MyReview></PrivaterRouter>,
      },
      {
        path: '/blog',
        element:<Blog></Blog> ,
      },
      {
        path: '/reviewUpdate/:id',
        element:<ReviewUpdate></ReviewUpdate> ,
        loader:({params})=>fetch(`https://cooking-jelly-server.vercel.app/reviewUpdate/${params.id}`)
      },
    ]
  }
])

export default router;
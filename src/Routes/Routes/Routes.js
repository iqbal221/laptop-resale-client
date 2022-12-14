import Main from "../../Layout/Main";
import Home from "../../pages/Home/Home/Home";
import { createBrowserRouter } from "react-router-dom";
import Login from "../../pages/LoginAndSignup/Login/Login";
import Signup from "../../pages/LoginAndSignup/Signup/Signup";
import CategoryDetails from "../../pages/Home/CategoryDetails/CategoryDetails";

import NotFound from "../../pages/NotFound/NotFound";
import DashboardLayout from "../../Layout/DashboardLayout";
import Dashboard from "../../pages/Dashboard/Dashboard/Dashboard";
import MyOrder from "../../pages/Dashboard/MyOrder/MyOrder";
import BuyerAndSeller from "../../pages/Dashboard/BuyerAndSeller/BuyerAndSeller";
import AddProduct from "../../pages/Dashboard/AddProduct/AddProduct";
import MyProduct from "../../pages/Dashboard/MyProduct/MyProduct";
import Blogs from "../../pages/Blogs/Blogs";
import Wishlist from "../../pages/Home/Whislist/Wishlist";
import CategoryDetailsSpecial from "../../pages/Home/CategoryDetailsSpecial/CategoryDetailsSpecial";
// import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/categories/:id",
        element: <CategoryDetails></CategoryDetails>,
        loader: ({ params }) =>
          fetch(
            `https://laptop-sells-server.vercel.app/categories/${params.id}`
          ),
      },

      {
        path: "/addSpecialProduct/:id",
        element: <CategoryDetailsSpecial></CategoryDetailsSpecial>,
        loader: ({ params }) =>
          fetch(
            `https://laptop-sells-server.vercel.app/addSpecialProduct/${params.id}`
          ),
      },
      {
        path: "/wishlist/:id",
        element: <Wishlist></Wishlist>,
        loader: ({ params }) =>
          fetch(`https://laptop-sells-server.vercel.app/wishlist/${params.id}`),
      },
      {
        path: "/wishlistSpecial/:id",
        element: <Wishlist></Wishlist>,
        loader: ({ params }) =>
          fetch(
            `https://laptop-sells-server.vercel.app/wishlistSpecial/${params.id}`
          ),
      },
    ],
  },
  {
    path: "/blogs",
    element: <Blogs></Blogs>,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/dashboard/myOrder",
        element: <MyOrder></MyOrder>,
      },
      {
        path: "/dashboard/buyerAndSeller",
        element: <BuyerAndSeller></BuyerAndSeller>,
      },
      {
        path: "/dashboard/addProduct",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/dashboard/myProduct",
        element: <MyProduct></MyProduct>,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);

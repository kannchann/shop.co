import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from "./provider/AuthContext";

import Login from "./pages/auth/login";
import Home from "./pages/home";
import SignUp from "./pages/auth/signUp";
import RootLayout from "./layout/RootLayout";
import Dashboard from "./pages/protected/dashboard/Dashboard";
import ProductDetail from "./pages/product/productDetail";
import Profile from "./pages/protected/profile/Profile";
import Orders from "./pages/protected/orders/Orders";
import ProtectedLayout from "./layout/ProtectedLayout";
import NotFoundPage from "./pages/NotFoundPage";
import ProductsListing from "./pages/product/productListing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/products/:productID",
        element: <ProductDetail />,
      },
      {
        path: "/products/category/:categoryName/:categoryID",
        element: <ProductsListing />,
      },
      {
        element: <ProtectedLayout />,
        children: [
          {
            path: "/dashboard",
            element: <Dashboard />,
          },
          {
            path: "/profile",
            element: <Profile />,
          },
          {
            path: "/orders",
            element: <Orders />,
          },
        ],
      },
      {
        path: "/*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

const App = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
};

export default App;

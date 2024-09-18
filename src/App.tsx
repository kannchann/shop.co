import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/auth/login";
import Home from "./pages/home";
import SignUp from "./pages/auth/signUp";
import RootLayout from "./layout/RootLayout";
import { AuthProvider } from "./provider/AuthContext";
import axios from "axios";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Dashboard from "./pages/protected/dashboard/Dashboard";
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
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "*",
        element: <div>404 Not Found</div>,
      },
    ],
  },
]);

const App = () => {
  // useEffect(() => {
  //   getUser();
  //   console.log();
  // }, []);

  // const getUser = () => {
  //   axios
  //     .get("https://dummyjson.com/auth/me", {
  //       headers: {
  //         Authorization: `Bearer ${localStorage.getItem("token")}`,
  //       },
  //     })
  //     .then((res) => {
  //       console.log(res);
  //     });
  // };

  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
};

export default App;

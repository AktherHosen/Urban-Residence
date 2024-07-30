import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Profile from "../pages/Profile/Profile";
import PrivateRoutes from "./PrivateRoutes";
import Error from "../pages/Error/Error";
import PropertyDetails from "../pages/PropertyDetails/PropertyDetails";
import UpdateProfile from "../pages/Profile/UpdateProfile";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/estate/estates.json"),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoutes>
            <Profile />
          </PrivateRoutes>
        ),
      },
      {
        path: "/updateProfile/:_id",
        element: (
          <PrivateRoutes>
            <UpdateProfile />
          </PrivateRoutes>
        ),
      },
      {
        path: "/property/:id",
        element: (
          <PrivateRoutes>
            <PropertyDetails />
          </PrivateRoutes>
        ),
        loader: () => fetch("/estate/estates.json"),
      },
    ],
  },
]);

export default Routes;

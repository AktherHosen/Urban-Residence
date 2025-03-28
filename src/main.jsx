import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Routes from "./routes/Routes.jsx";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./providers/AuthProvider.jsx";
import { Toaster } from "react-hot-toast";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={Routes} />
        <Toaster />
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>
);

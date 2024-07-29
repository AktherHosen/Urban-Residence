import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Routes from "./routes/Routes.jsx";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./providers/AuthProvider.jsx";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={Routes} />
      <Toaster />
    </AuthProvider>
  </React.StrictMode>
);

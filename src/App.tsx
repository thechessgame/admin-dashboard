import React, { lazy, useEffect } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";

import { themeChange } from "theme-change";
import { action as loginAction } from "./pages/Login";
import { action as forgetpasswordAction } from "./pages/ForgotPassword";
import { action as registerAction } from "./pages/Register";

const Login = lazy(() => import("./pages/Login"));
const ForgotPassword = lazy(() => import("./pages/ForgotPassword"));
const Register = lazy(() => import("./pages/Register"));

const router = createBrowserRouter([
  {
    path: "/",
    id: "root",
    children: [
      {
        path: "/",
        element: <Navigate to="/login" replace />,
      },
      {
        path: "login",
        element: <Login />,
        action: loginAction,
      },
      {
        path: "forgot-password",
        element: <ForgotPassword />,
        action: forgetpasswordAction,
      },
      {
        path: "register",
        element: <Register />,
        action: registerAction,
      },
      {
        path: "*",
        element: <Navigate to="/login" replace />,
      },
    ],
  },
]);

function App() {
  useEffect(() => {
    themeChange(true);
  }, []);

  // const authCtx = useContext(AuthContext);
  return <RouterProvider router={router} />;
}

export default App;

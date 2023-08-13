import routes from "./sidebar";
import React, { lazy, Suspense } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";

import { action as loginAction } from "../pages/Login";
import { action as forgetpasswordAction } from "../pages/ForgotPassword";
import { action as registerAction } from "../pages/Register";
import SuspenseContent from "../containers/SuspenseContent";

const Login = lazy(() => import("../pages/Login"));
const ForgotPassword = lazy(() => import("../pages/ForgotPassword"));
const Register = lazy(() => import("../pages/Register"));

const Layout = lazy(() => import("../containers/Layout"));
const Users = lazy(() => import("../pages/protected/Users"));
const Home = lazy(() => import("../pages/protected/Home"));
const Dashboard = lazy(() => import("../pages/protected/Dashboard"));

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
        path: "app",
        action: registerAction,
        element: <Layout />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: "dashboard",
            element: <Dashboard />,
          },
          {
            path: "summary",
            element: <></>,
          },
          {
            path: "users",
            element: <Users />,
          },
          {
            path: "transactions",
            element: <></>,
          },
          {
            path: "charts",
            element: <></>,
          },
          {
            path: "event",
            element: <></>,
          },
          {
            path: "profile",
            element: <></>,
          },
          {
            path: "todays-report",
            element: <></>,
          },
          {
            path: "weekly-report",
            element: <></>,
          },
          {
            path: "monthly-report",
            element: <></>,
          },
          {
            path: "issues",
            element: <></>,
          },
        ],
      },
      {
        path: "*",
        element: <Navigate to="/login" replace />,
      },
    ],
  },
]);

export default router;

import App from "@/App";
import DashboardLayout from "@/components/layout/DashboardLayout";

import About from "@/pages/About";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Verify from "@/pages/Verify";
import { generateRoutes } from "@/utils/generateRoutes";

import { createBrowserRouter } from "react-router";
import { adminSidebarItems } from "./adminSidebarItems";

import { userSidebarItems } from "./userSidebarItems";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "/about",
        Component: About,
      },
    ],
  },
  {
    Component: DashboardLayout,
    path: "/admin",
    children: [
      ...generateRoutes(adminSidebarItems),
      // {
      //   Component: Analytics,
      //   path: "analytics",
      // },
      // {
      //   Component: AddTour,
      //   path: "add-tour",
      // },
      // {
      //   Component: AddTour,
      //   path: "add-tour-type",
      // },
    ],
  },
  {
    Component: DashboardLayout,
    path: "/user",
    // children: [
    //   {
    //     path: "/user/bookings",
    //     Component: Bookings,
    //   },
    // ],
    children: [...generateRoutes(userSidebarItems)],
  },
  {
    Component: Login,
    path: "/login",
  },
  {
    Component: Register,
    path: "/register",
  },
  {
    Component: Verify,
    path: "/verify",
  },
]);

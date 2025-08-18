import App from "@/App";
import DashboardLayout from "@/components/layout/DashboardLayout";
import About from "@/pages/About";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Verify from "@/pages/Verify";
import { generateRoutes } from "@/utils/generateRoutes";
import { createBrowserRouter, Navigate } from "react-router";
import { adminSidebarItems } from "./adminSidebarItems";

import { userSidebarItems } from "./userSidebarItems";
import { withAuth } from "@/utils/withAuth";
import UnAuthorized from "@/pages/UnAuthorized";
import { role } from "@/constants/role";
import type { TRole } from "@/types";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "/about",
        Component: withAuth(About),
      },
    ],
  },
  {
    Component: withAuth(DashboardLayout, role.superAdmin as TRole),
    path: "/admin",
    children: [
      { index: true, element: <Navigate to={"/admin/analytics"} /> },
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
    children: [
      { index: true, element: <Navigate to={"/user/bookings"} /> },
      ...generateRoutes(userSidebarItems),
    ],
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
  {
    Component: UnAuthorized,
    path: "/unAuthorized",
  },
]);

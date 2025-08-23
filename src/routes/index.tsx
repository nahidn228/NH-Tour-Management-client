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
import Tours from "@/pages/Tours";
import TourDetails from "@/pages/TourDetails";
import Booking from "@/pages/Booking";
import HomePage from "@/pages/HomePage";
import Success from "@/pages/payment/Success";
import Fail from "@/pages/payment/Fail";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "/about",
        Component: withAuth(About),
      },
      {
        path: "/tours",
        Component: Tours,
      },
      {
        path: "/tours/:id",
        Component: TourDetails,
      },
      {
        path: "/booking/:id",
        Component: withAuth(Booking),
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
  {
    Component: Success,
    path: "/payment/success",
  },
  {
    Component: Fail,
    path: "/payment/fail",
  },
]);

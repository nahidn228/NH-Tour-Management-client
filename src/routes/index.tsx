import App from "@/App";
import AdminLayout from "@/components/layout/AdminLayout";
import About from "@/pages/About";
import Analytics from "@/pages/Analytics";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    // element: <App />,
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
    Component: AdminLayout,
    path: "admin",
    children: [
      {
        path: "analytics",
        Component: Analytics,
      },
    ],
  },
]);

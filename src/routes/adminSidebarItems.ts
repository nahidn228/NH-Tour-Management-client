import AddTour from "@/pages/admin/AddTour";
import Analytics from "@/pages/admin/Analytics";
import type { ISidebarItem } from "@/types";

export const adminSidebarItems: ISidebarItem[] = [
  {
    title: "Dashboard",
    items: [
      {
        title: "Analytics",
        url: "/admin/analytics",
        Component: Analytics,
      },
    ],
  },
  {
    title: "Tour Management",
    items: [
      {
        title: "Add Tour Type",
        url: "/admin/add-tour-type",
        Component: AddTour,
      },
      {
        title: "Add Tour",
        url: "/admin/add-tour",
        Component: AddTour,
      },
    ],
  },
];

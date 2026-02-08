import { createBrowserRouter } from "react-router";
import { Layout } from "@/app/components/Layout";
import { HomePage } from "@/app/pages/HomePage";
import { ServicesPage } from "@/app/pages/ServicesPage";
import { ProjectsPage } from "@/app/pages/ProjectsPage";
import { ContactPage } from "@/app/pages/ContactPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "services", Component: ServicesPage },
      { path: "projects", Component: ProjectsPage },
      { path: "contact", Component: ContactPage },
    ],
  },
]);

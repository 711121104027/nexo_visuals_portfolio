// src/app/routes.ts
import { createBrowserRouter } from "react-router";

import { Layout } from "@/app/components/Layout";
import { BlankLayout } from "@/app/components/BlankLayout";

import { HomePage } from "@/app/pages/HomePage";
import { ServicesPage } from "@/app/pages/ServicesPage";
import { ProjectsPage } from "@/app/pages/ProjectsPage";
import { ContactPage } from "@/app/pages/ContactPage";

import DigitalCardPage from "@/app/digital-card/DigitalCardPage";
import ProjectsShowcasePage from "@/app/projects-showcase/ProjectsShowcasePage";

export const router = createBrowserRouter([
  // Main Website
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

  // Private Digital Card
  {
    path: "/connect",
    Component: BlankLayout,
    children: [
      {
        index: true,
        Component: DigitalCardPage,
      },
      {
        path: "projects",
        Component: ProjectsShowcasePage,
      },
    ],
  },
]);
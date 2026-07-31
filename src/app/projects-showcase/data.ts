// src/app/projects-showcase/data.ts

import {
  Globe,
  Figma,
  Smartphone,
} from "lucide-react";

export const websiteProjects = [
  {
    id: 1,
    name: "Kalloviyam",
    description: "Premium Interior Design Website",
    icon: Globe,
    url: "https://www.kalloviyam.com/",
    buttonText: "Visit Website",
    external: true,
  },

  {
    id: 2,
    name: "Shree Visaalakshi Laces",
    description: "Lace Manufacturing Website",
    icon: Globe,
    url: "https://www.lacemanufactures.in/",
    buttonText: "Visit Website",
    external: true,
  },

  {
    id: 3,
    name: "Stone Shutters",
    description: "Wedding Photography Website",
    icon: Globe,
    url: "https://www.stoneshutters.com/",
    buttonText: "Visit Website",
    external: true,
  },

  {
    id: 4,
    name: "MPR Furniture",
    description: "Furniture Company Website",
    icon: Globe,
    url: "https://mpr-website.vercel.app/",
    buttonText: "Visit Website",
    external: true,
  },

  {
    id: 5,
    name: "Chippy Export",
    description: "Export Business Website",
    icon: Globe,
    url: "https://chippyexport.vercel.app/",
    buttonText: "Visit Website",
    external: true,
  },
];

export const erpProjects = [
  {
    id: 1,
    name: "VNS Construction ERP",
    description: "Figma UI Design",
    icon: Figma,
    url: "https://www.figma.com/design/MNCurJ4UzJcJKp81aM3nOS/VNS-ERP?node-id=0-1&t=QWuUtKra8HstaFEU-1",
    buttonText: "View Figma",
    external: true,
  },

  {
    id: 2,
    name: "VNS Construction ERP",
    description: "Interactive HTML Prototype",
    icon: Smartphone,
    url: "/prototype/VNS_ERP_Prototype.html",
    buttonText: "Open Prototype",
    external: true,
  },
];
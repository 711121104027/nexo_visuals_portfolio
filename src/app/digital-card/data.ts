// src/app/digital-card/data.ts

import {
  MapPin,
  Mail,
  MessageCircle,
  Instagram,
  Linkedin,
  Globe,
  Palette,
  Laptop,
} from "lucide-react";

export const profile = {
  logo: "/namelogo.png",

  name: "Dharanidharan S",

  designation: [
    "Founder",
    "Designer",
    "Project Handler",
  ],
};

export const contactCards = [
  {
    id: 1,
    title: "Location",
    value: "Coimbatore",
    icon: MapPin,
    href: "https://maps.google.com/?q=Coimbatore",
    external: true,
  },

  {
    id: 2,
    title: "Email",
    value: "nexovisualss@gmail.com",
    icon: Mail,
    href: "mailto:nexovisualss@gmail.com",
    external: false,
  },

  {
    id: 3,
    title: "WhatsApp",
    value: "+91 93603 75656",
    icon: MessageCircle,
    href: "https://wa.me/919360375656",
    external: true,
  },

  {
    id: 4,
    title: "Instagram",
    value: "@nexo_visualss",
    icon: Instagram,
    href: "https://www.instagram.com/nexo_visualss/",
    external: true,
  },

  {
    id: 5,
    title: "LinkedIn",
    value: "Nexo Visuals",
    icon: Linkedin,
    href: "https://www.linkedin.com/company/nexovisuals",
    external: true,
  },

  {
    id: 6,
    title: "Website",
    value: "nexovisuals.in",
    icon: Globe,
    href: "https://nexovisuals.in/",
    external: true,
  },
];

export const portfolioCards = [
  {
    id: 1,
    title: "See Our Designs",
    subtitle: "Creative Portfolio",
    icon: Palette,
    href: "https://drive.google.com/drive/folders/1pIqy6WLXLhGy1YyVSAxaHOOMalrudkXj?usp=sharing",
    external: true,
  },

  {
    id: 2,
    title: "Website & ERP Projects",
    subtitle: "Websites • ERP • Apps",
    icon: Laptop,
    href: "/connect/projects",
    external: false,
  },
];
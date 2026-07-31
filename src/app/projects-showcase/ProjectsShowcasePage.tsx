// src/app/projects-showcase/ProjectsShowcasePage.tsx

import { Background } from "../digital-card/components/Background";

import { ShowcaseHeader } from "./components/ShowcaseHeader";
import { CategoryTitle } from "./components/CategoryTitle";
import { ProjectCard } from "./components/ProjectCard";
import { Share2, UserPlus } from "lucide-react";

import {
  websiteProjects,
  erpProjects,
} from "./data";

export default function ProjectsShowcasePage() {
    const handleAddContact = () => {
  const vCard = `BEGIN:VCARD
VERSION:3.0
FN:Dharanidharn S
ORG:Nexo Visuals
TITLE:Founder | Designer | Project Handler
TEL;TYPE=CELL:+919360375656
EMAIL:nexovisualss@gmail.com
URL:https://nexovisuals.in
END:VCARD`;

  const blob = new Blob([vCard], {
    type: "text/vcard",
  });

  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "Nexo-Visuals.vcf";
  a.click();

  URL.revokeObjectURL(url);
};

const handleShare = async () => {
  const shareData = {
    title: "Nexo Visuals",
    text: "Check out our Website & ERP Projects",
    url: window.location.href,
  };

  if (navigator.share) {
    try {
      await navigator.share(shareData);
    } catch {
      // User cancelled sharing
    }
  } else {
    await navigator.clipboard.writeText(window.location.href);
    alert("Project page link copied to clipboard!");
  }
};
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#F8F7F4]">
      {/* Premium Background */}
      <Background />

      {/* Content */}
      <div className="relative z-10">
        <div className="mx-auto w-full max-w-[430px] px-5 pt-8 pb-12">

          {/* Header */}
          <ShowcaseHeader />

          {/* ================= WEBSITES ================= */}

          <CategoryTitle
            title="Website Projects"
            subtitle="Professional websites designed and developed for our clients."
          />

          <div className="space-y-5">
            {websiteProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                name={project.name}
                description={project.description}
                buttonText={project.buttonText}
                url={project.url}
                icon={project.icon}
                external={project.external}
                delay={index * 0.1}
              />
            ))}
          </div>

          {/* ================= ERP ================= */}

          <div className="mt-12">

            <CategoryTitle
              title="ERP & UI Projects"
              subtitle="ERP software, UI/UX designs and interactive prototypes."
            />

            <div className="space-y-5">
              {erpProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  name={project.name}
                  description={project.description}
                  buttonText={project.buttonText}
                  url={project.url}
                  icon={project.icon}
                  external={project.external}
                  delay={index * 0.1}
                />
              ))}
            </div>

          </div>
          {/* Action Buttons */}

<div className="mt-12 grid grid-cols-2 gap-4">
  <button
    onClick={handleAddContact}
    className="
      flex
      items-center
      justify-center
      gap-2
      rounded-2xl
      bg-gradient-to-r
      from-[#FF9800]
      to-[#F26A00]
      px-5
      py-4
      text-sm
      font-semibold
      text-white
      shadow-lg
      transition-all
      duration-300
      hover:scale-[1.02]
      active:scale-95
    "
  >
    <UserPlus size={18} />
    Add Contact
  </button>

  <button
    onClick={handleShare}
    className="
      flex
      items-center
      justify-center
      gap-2
      rounded-2xl
      border
      border-white/70
      bg-white/70
      px-5
      py-4
      text-sm
      font-semibold
      text-[#202020]
      backdrop-blur-xl
      shadow-lg
      transition-all
      duration-300
      hover:scale-[1.02]
      active:scale-95
    "
  >
    <Share2 size={18} />
    Share
  </button>
</div>

          {/* Footer */}

          <div className="pb-10 pt-14 text-center">

            <p className="text-xs uppercase tracking-[0.3em] text-[#999999]">
              Crafted with love by
            </p>

            <p className="mt-2 text-sm font-semibold tracking-[0.3em] text-[#202020]">
              Nexo Visuals
            </p>

          </div>

        </div>
      </div>
    </section>
  );
}
// src/app/projects-showcase/components/ProjectCard.tsx

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  name: string;
  description: string;
  buttonText: string;
  url: string;
  external?: boolean;
  icon: React.ElementType;
  delay?: number;
}

export function ProjectCard({
  name,
  description,
  buttonText,
  url,
  external = true,
  icon: Icon,
  delay = 0,
}: ProjectCardProps) {
  const openProject = () => {
    if (external) {
      window.open(url, "_blank", "noopener,noreferrer");
      return;
    }

    window.location.href = url;
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 25,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        delay,
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -4,
      }}
      whileTap={{
        scale: 0.98,
      }}
      onClick={openProject}
      className="
        group
        cursor-pointer
        overflow-hidden
        rounded-[28px]
        border
        border-white/60
        bg-white/65
        backdrop-blur-3xl
        shadow-[0_12px_35px_rgba(0,0,0,0.06)]
        transition-all
        duration-300
      "
    >
      {/* Hover Background */}
      <div
        className="
          absolute
          inset-0
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
          bg-gradient-to-br
          from-[#F7A300]/5
          via-transparent
          to-[#F26A00]/5
        "
      />

      <div className="relative z-10 flex items-center gap-4 p-5">
        {/* Icon */}
        <div
          className="
            flex
            h-14
            w-14
            shrink-0
            items-center
            justify-center
            rounded-2xl
            bg-[#FFF8EF]
            shadow-md
          "
        >
          <Icon
            size={24}
            className="text-[#C9892B]"
            strokeWidth={2}
          />
        </div>

        {/* Content */}
        <div className="min-w-0 flex-1">
          <h3 className="text-[18px] font-semibold text-[#202020]">
            {name}
          </h3>

          <p className="mt-1 text-[14px] leading-6 text-[#6B7280]">
            {description}
          </p>

          <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#FFF7EC] px-4 py-2 text-[13px] font-semibold text-[#C9892B] transition-all duration-300 group-hover:bg-[#F7A300] group-hover:text-white">
            {buttonText}

            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
// src/app/projects-showcase/components/ShowcaseHeader.tsx

import "@fontsource/cormorant-garamond/600.css";
import "@fontsource/cormorant-garamond/700.css";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router";

export function ShowcaseHeader() {
  const navigate = useNavigate();

  return (
    <motion.header
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="mb-10"
    >
      {/* Back Button */}
      <button
        onClick={() => {
  navigate("/connect", {
    state: {
      skipSplash: true,
    },
  });
}}
        className="
          group
          mb-8
          flex
          items-center
          gap-3
          rounded-full
          border
          border-white/70
          bg-white/70
          px-5
          py-3
          shadow-[0_8px_24px_rgba(0,0,0,0.06)]
          backdrop-blur-xl
          transition-all
          duration-300
          hover:-translate-y-1
          hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)]
        "
      >
        <ArrowLeft
          size={18}
          className="
            text-[#F26A00]
            transition-transform
            duration-300
            group-hover:-translate-x-1
          "
        />

        <span className="text-sm font-semibold text-[#202020]">
          Back
        </span>
      </button>

      {/* Title */}
      <motion.h1
  initial={{
    opacity: 0,
    y: 15,
  }}
  animate={{
    opacity: 1,
    y: 0,
  }}
  transition={{
    delay: 0.15,
    duration: 0.5,
  }}
  className="
    text-[42px]
    leading-none
    font-semibold
    tracking-tight
    text-[#171717]
    whitespace-nowrap
  "
  style={{
    fontFamily: "Cormorant Garamond, serif",
  }}
>
  Website & ERP Projects
</motion.h1>

      {/* Subtitle */}
      <motion.p
  initial={{
    opacity: 0,
    y: 15,
  }}
  animate={{
    opacity: 1,
    y: 0,
  }}
  transition={{
    delay: 0.3,
    duration: 0.5,
  }}
  className="
    mt-4
    max-w-[390px]
    text-[15px]
    leading-7
    text-[#6B7280]
  "
>
  Explore our websites, ERP systems, UI/UX designs and
  interactive prototypes crafted for clients.
</motion.p>

      {/* Accent Divider */}
      <motion.div
        initial={{
          opacity: 0,
          scaleX: 0,
        }}
        animate={{
          opacity: 1,
          scaleX: 1,
        }}
        transition={{
          delay: 0.45,
          duration: 0.45,
        }}
        className="
          mt-7
          h-[2px]
          w-24
          origin-left
          rounded-full
          bg-gradient-to-r
          from-[#F7A300]
          via-[#F26A00]
          to-transparent
        "
      />
    </motion.header>
  );
}
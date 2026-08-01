//src/app/digital-card/components/GlassCard.tsx

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface GlassCardProps {
  children: ReactNode;
}

export function GlassCard({ children }: GlassCardProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.94,
        y: 30,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        relative
        mx-auto
        w-full
        max-w-[92vw]
        sm:max-w-[400px]
      "
    >
      {/* Soft Outer Glow */}
      <div
        className="
          absolute
          inset-0
          rounded-[clamp(28px,6vw,40px)]
          bg-white/35
          blur-3xl
        "
      />

      {/* Glass Card */}
      <div
        className="
          relative
          overflow-hidden
          rounded-[clamp(28px,6vw,40px)]
          border
          border-white/70
          bg-white/55
          backdrop-blur-[30px]
          shadow-[0_25px_70px_rgba(0,0,0,0.08)]
        "
      >
        {/* Top Highlight */}
        <div
          className="
            absolute
            inset-x-0
            top-0
            h-px
            bg-gradient-to-r
            from-transparent
            via-white
            to-transparent
          "
        />

        {/* Left Highlight */}
        <div
          className="
            absolute
            left-0
            top-0
            h-full
            w-px
            bg-white/40
          "
        />

        {/* Reflection */}
        <div
          className="
            absolute
            -top-20
            -right-20
            h-52
            w-52
            rounded-full
            bg-white/45
            blur-3xl
          "
        />

        {/* Orange Glow */}
        <div
          className="
            absolute
            -bottom-24
            -left-20
            h-56
            w-56
            rounded-full
            bg-[#F7A300]/10
            blur-[90px]
          "
        />

        {/* Main Content */}
        <div
          className="
            relative
            z-10
            flex
            min-h-[70vh]
            flex-col
            justify-center
            px-[clamp(22px,6vw,38px)]
            py-[clamp(36px,8vh,60px)]
          "
        >
          {children}
        </div>
      </div>
    </motion.div>
  );
}
//src/app/digital-card/components/Logo.tsx

import { motion } from "framer-motion";

interface LogoProps {
  size?: number;
}

export function Logo({ size }: LogoProps) {
  const logoSize = size ?? "clamp(95px, 22vw, 145px)";

  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.82,
        rotate: -6,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        rotate: 0,
      }}
      transition={{
        delay: 0.25,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative flex items-center justify-center"
    >
      {/* White Glow */}
      <div
        className="
          absolute
          rounded-full
          bg-white/80
          blur-[65px]
        "
        style={{
          width: `calc(${logoSize} + 80px)`,
          height: `calc(${logoSize} + 80px)`,
        }}
      />

      {/* Orange Glow */}
      <div
        className="
          absolute
          rounded-full
          bg-[#F7A300]/12
          blur-[85px]
        "
        style={{
          width: `calc(${logoSize} + 50px)`,
          height: `calc(${logoSize} + 50px)`,
        }}
      />

      {/* Main Logo */}
      <motion.img
        src="/logo.png"
        alt="Nexo Visuals"
        draggable={false}
        className="
          relative
          z-10
          select-none
          object-contain
        "
        style={{
          width: logoSize,
        }}
        animate={{
          y: [0, -4, 0],
        }}
        transition={{
          delay: 1,
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
}
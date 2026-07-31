//src/app/digital-card/components/Logo.tsx

import { motion } from "framer-motion";

interface LogoProps {
  size?: number;
}

export function Logo({ size = 145 }: LogoProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.75,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        delay: 0.25,
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative flex items-center justify-center"
    >
      {/* White Glow */}
      <div
        className="absolute rounded-full bg-white/80 blur-3xl"
        style={{
          width: size + 80,
          height: size + 80,
        }}
      />

      {/* Orange Glow */}
      <div
        className="absolute rounded-full bg-[#F7A300]/10 blur-[80px]"
        style={{
          width: size + 50,
          height: size + 50,
        }}
      />

      <img
        src="/logo.svg"
        alt="Nexo Visuals"
        draggable={false}
        className="relative z-10 select-none"
        style={{
          width: size,
        }}
      />
    </motion.div>
  );
}
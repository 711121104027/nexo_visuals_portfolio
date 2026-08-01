//src/app/digital-card/components/BrandTitle.tsx

import { motion } from "framer-motion";

export function BrandTitle() {
  return (
    <>
      {/* NEXO */}
      <motion.div
        initial={{
          opacity: 0,
          y: 24,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.45,
          duration: 0.65,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="mt-[clamp(28px,6vw,42px)] text-center"
      >
        <h1
          className="
            font-extrabold
            leading-none
            tracking-[0.18em]
            text-[#171717]
          "
          style={{
            fontSize: "clamp(36px,9vw,36px)",
          }}
        >
          NEXO
        </h1>
      </motion.div>

      {/* VISUALS */}
      <motion.p
        initial={{
          opacity: 0,
          y: 18,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.65,
          duration: 0.55,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          mt-[clamp(10px,2vw,14px)]
          text-center
          uppercase
          text-[#777777]
        "
        style={{
          fontSize: "clamp(12px,3vw,15px)",
          letterSpacing: "0.85em",
        }}
      >
        VISUALS
      </motion.p>

      {/* Divider */}
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
          delay: 0.85,
          duration: 0.45,
        }}
        className="
          mx-auto
          mt-[clamp(22px,5vw,34px)]
          h-[2px]
          rounded-full
          origin-center
          bg-gradient-to-r
          from-transparent
          via-[#F26A00]
          to-transparent
        "
        style={{
          width: "clamp(70px,18vw,90px)",
        }}
      />

      {/* Tagline */}
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
          delay: 1,
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          mx-auto
          mt-[clamp(22px,5vw,34px)]
          text-center
          font-medium
          text-[#666666]
        "
        style={{
          maxWidth: "clamp(240px,70vw,300px)",
          fontSize: "clamp(14px,3.6vw,16px)",
          lineHeight: "1.8",
        }}
      >
        Creating Smart Digital Experiences
      </motion.p>
    </>
  );
}
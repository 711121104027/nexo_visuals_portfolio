//src/app/digital-card/components/BrandTitle.tsx

import { motion } from "framer-motion";

export function BrandTitle() {
  return (
    <>
      <motion.div
        initial={{
          opacity: 0,
          y: 25,
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
        className="mt-10 text-center"
      >
        <h1 className="text-[44px] font-extrabold tracking-[0.18em] text-[#161616]">
          NEXO
        </h1>
      </motion.div>

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
        className="mt-3 text-center text-[14px] uppercase tracking-[0.95em] text-[#777777]"
      >
        VISUALS
      </motion.p>

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
        className="mx-auto mt-8 h-[2px] w-20 origin-center rounded-full bg-gradient-to-r from-transparent via-[#F26A00] to-transparent"
      />

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
          delay: 1.0,
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="mx-auto mt-8 max-w-[260px] text-center text-[15px] leading-7 text-[#666666]"
      >
        Creating Smart Digital Experiences
      </motion.p>
    </>
  );
}
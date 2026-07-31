// src/app/digital-card/components/ProfileHeader.tsx

import "@fontsource/cormorant-garamond/600.css";
import "@fontsource/cormorant-garamond/700.css";

import { motion } from "framer-motion";
import { profile } from "../data";

export function ProfileHeader() {
  return (
    <motion.header
      initial={{
        opacity: 0,
        y: 30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="flex flex-col items-center text-center"
    >
      {/* Logo */}
      <motion.img
        src={profile.logo}
        alt="Nexo Visuals"
        draggable={false}
        initial={{
          opacity: 0,
          scale: 0.9,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          delay: 0.2,
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="w-[250px] max-w-full object-contain select-none"
      />

      {/* Name */}
      <motion.div
  initial={{
    opacity: 0,
    y: 16,
  }}
  animate={{
    opacity: 1,
    y: 0,
  }}
  transition={{
    delay: 0.45,
    duration: 0.6,
  }}
  className="mt-5 flex items-start justify-center"
>
  <h1
  style={{
    fontFamily: '"Cormorant Garamond", serif',
  }}
  className="text-[34px] font-semibold leading-none tracking-[0.02em] text-[#171717]"
>
  {profile.name}
</h1>

<span
  style={{
    fontFamily: '"Cormorant Garamond", serif',
  }}
  className="ml-2 mt-2 text-[18px] font-semibold uppercase tracking-[0.14em] text-[#777777]"
>
  B.E.
</span>
</motion.div>

      {/* Designation */}
      <motion.div
        initial={{
          opacity: 0,
          y: 15,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.65,
          duration: 0.6,
        }}
        className="mt-4 flex flex-wrap items-center justify-center text-[13px] tracking-[0.04em] text-[#757575]"
      >
        {profile.designation.map((item, index) => (
          <div
            key={item}
            className="flex items-center"
          >
            <span>{item}</span>

            {index !== profile.designation.length - 1 && (
              <span className="mx-2 h-1.5 w-1.5 rounded-full bg-[#F7A300]" />
            )}
          </div>
        ))}
      </motion.div>

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
          delay: 0.9,
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="mt-7 h-[2px] w-20 origin-center rounded-full bg-gradient-to-r from-transparent via-[#F26A00] to-transparent"
      />
    </motion.header>
  );
}
//src/app/digital-card/components/Background.tsx

import { motion } from "framer-motion";

export function Background() {
  return (
    <>
      {/* Base */}
      <div className="absolute inset-0 bg-[#F8F7F4]" />

      {/* Large Top Left Glow */}
      <div
        className="
          absolute
          -top-72
          -left-64
          h-[700px]
          w-[700px]
          rounded-full
          bg-[#F7A300]/18
          blur-[180px]
        "
      />

      {/* Large Top Right Glow */}
      <div
        className="
          absolute
          -top-40
          -right-64
          h-[620px]
          w-[620px]
          rounded-full
          bg-[#F26A00]/12
          blur-[180px]
        "
      />

      {/* Bottom Left */}
      <div
        className="
          absolute
          -bottom-64
          -left-40
          h-[560px]
          w-[560px]
          rounded-full
          bg-[#FFD07A]/10
          blur-[170px]
        "
      />

      {/* Bottom Right */}
      <div
        className="
          absolute
          -bottom-72
          -right-52
          h-[650px]
          w-[650px]
          rounded-full
          bg-[#C73A16]/10
          blur-[190px]
        "
      />

      {/* Center Highlight */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[500px]
          w-[500px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-white/70
          blur-[120px]
        "
      />

      {/* Soft Noise Overlay */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 20%, rgba(0,0,0,.20) 0.6px, transparent 0.6px),
            radial-gradient(circle at 80% 80%, rgba(0,0,0,.18) 0.6px, transparent 0.6px)
          `,
          backgroundSize: "26px 26px",
        }}
      />

      {/* Soft Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, transparent 45%, rgba(0,0,0,.03) 100%)",
        }}
      />
    </>
  );
}
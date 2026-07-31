// src/app/digital-card/components/ContactCard.tsx

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

interface ContactCardProps {
  title: string;
  value: string;
  href: string;
  external?: boolean;
  icon: React.ElementType;
  delay?: number;
}

export function ContactCard({
  title,
  value,
  href,
  external = false,
  icon: Icon,
  delay = 0,
}: ContactCardProps) {
  return (
    <motion.a
      href={href}
      target={external ? "_blank" : "_self"}
      rel={external ? "noopener noreferrer" : undefined}
      initial={{
        opacity: 0,
        y: 30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay,
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -3,
        scale: 1.01,
      }}
      whileTap={{
        scale: 0.98,
      }}
      className="
        group
        relative
        flex
        items-center
        gap-4
        overflow-hidden
        rounded-[22px]
        border
        border-white/60
        bg-white/60
        p-4
        shadow-[0_12px_35px_rgba(0,0,0,0.06)]
        backdrop-blur-2xl
        transition-all
        duration-300
      "
    >
      {/* Background Glow */}
      <div
        className="
          absolute
          inset-0
          opacity-0
          transition-opacity
          duration-300
          group-hover:opacity-100
          bg-gradient-to-r
          from-[#F7A300]/5
          via-transparent
          to-[#F26A00]/5
        "
      />

      {/* Icon */}
      <div
        className="
          relative
          z-10
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-2xl
          bg-gradient-to-br
          from-[#FFF7EB]
          to-white
          shadow-md
        "
      >
        <Icon
          size={22}
          className="text-[#C9892B]"
          strokeWidth={2}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1">
        <h3 className="text-[16px] font-semibold text-[#202020]">
          {title}
        </h3>

        <p className="mt-1 text-[13px] leading-5 text-[#6B7280] break-all">
          {value}
        </p>
      </div>

      {/* Arrow */}
      <motion.div
        className="relative z-10"
        whileHover={{
          x: 3,
        }}
      >
        <ChevronRight
          size={20}
          className="
            text-[#C9892B]
            opacity-0
            transition-all
            duration-300
            group-hover:opacity-100
          "
        />
      </motion.div>
    </motion.a>
  );
}
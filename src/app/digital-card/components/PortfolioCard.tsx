// src/app/digital-card/components/PortfolioCard.tsx

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router";

interface PortfolioCardProps {
  title: string;
  subtitle: string;
  href: string;
  external?: boolean;
  icon: React.ElementType;
  delay?: number;
}

export function PortfolioCard({
  title,
  subtitle,
  href,
 external = false,
  icon: Icon,
  delay = 0,
}: PortfolioCardProps) {
  const cardContent = (
    <motion.div
      initial={{
        opacity: 0,
        y: 35,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -5,
        scale: 1.015,
      }}
      whileTap={{
        scale: 0.985,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-[28px]
        border
        border-white/60
        bg-white/60
        backdrop-blur-3xl
        shadow-[0_10px_24px_rgba(0,0,0,0.06)]
        transition-all
        duration-300
      "
    >
      {/* Hover Gradient */}
      <div
        className="
          absolute
          inset-0
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
          bg-gradient-to-br
          from-[#F7A300]/8
          via-transparent
          to-[#F26A00]/8
        "
      />

      <div className="relative z-10 flex items-center gap-4 px-5 py-4">
        {/* Icon */}
        <div
  className="
    flex
    h-14
    w-14
    items-center
    justify-center
    rounded-2xl
    bg-[#FFF9F1]
    shadow-md
  "
>
  <Icon
    size={22}
    className="text-[#C9892B]"
    strokeWidth={2}
  />
</div>

        {/* Text */}
        <div className="min-w-0 flex-1">
          <h2 className="text-[17px] font-semibold leading-6 text-[#1A1A1A]">
            {title}
          </h2>

          <p className="mt-1 text-[13px] text-[#6B7280] leading-5">
            {subtitle}
          </p>
        </div>

        {/* Arrow */}
        <motion.div
          whileHover={{
            x: 4,
          }}
          className="
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            bg-[#FFF7EB]
          "
        >
          <ChevronRight
            size={22}
            className="text-[#F26A00]"
          />
        </motion.div>
      </div>
    </motion.div>
  );

  if (external) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      {cardContent}
    </a>
  );
}

return (
  <Link
    to={href}
    className="block"
  >
    {cardContent}
  </Link>
);
}
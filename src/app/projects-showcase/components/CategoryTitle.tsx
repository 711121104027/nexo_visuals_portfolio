// src/app/projects-showcase/components/CategoryTitle.tsx

import { motion } from "framer-motion";

interface CategoryTitleProps {
  title: string;
  subtitle?: string;
}

export function CategoryTitle({
  title,
  subtitle,
}: CategoryTitleProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="mb-6"
    >
      {/* Category Label */}
      <div className="flex items-center gap-3">
        <div className="h-10 w-1 rounded-full bg-gradient-to-b from-[#F7A300] via-[#F26A00] to-[#C73A16]" />

        <div>
          <h2 className="text-[22px] font-bold tracking-tight text-[#171717]">
            {title}
          </h2>

          {subtitle && (
            <p className="mt-1 text-[14px] leading-6 text-[#6B7280]">
              {subtitle}
            </p>
          )}
        </div>
      </div>

      {/* Divider */}
      <div className="mt-5 h-px w-full bg-gradient-to-r from-[#F7A300]/40 via-[#F26A00]/20 to-transparent" />
    </motion.div>
  );
}
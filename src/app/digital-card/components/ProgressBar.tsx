//src/app/digital-card/components/ProgressBar.tsx

import { motion } from "framer-motion";

interface ProgressBarProps {
  duration?: number;
}

export function ProgressBar({
  duration = 3.2,
}: ProgressBarProps) {
  return (
    <div className="mt-12 w-full">
      <div className="relative h-[4px] overflow-hidden rounded-full bg-[#ECECEC]">

        <motion.div
          className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-[#F7A300] via-[#F26A00] to-[#C73A16]"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{
            duration,
            ease: "easeInOut",
          }}
        />

      </div>
    </div>
  );
}
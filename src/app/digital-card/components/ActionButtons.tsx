// src/app/digital-card/components/ActionButtons.tsx

import { motion } from "framer-motion";
import { Share2, UserPlus } from "lucide-react";

export function ActionButtons() {
  const downloadContact = () => {
    const vCard = `BEGIN:VCARD
VERSION:3.0
FN:Dharanidharn S
ORG:Nexo Visuals
TITLE:Founder | Designer | Project Handler
TEL;TYPE=CELL:+919360375656
EMAIL:nexovisualss@gmail.com
URL:https://nexovisuals.in
ADR:;;Coimbatore;;;;India
END:VCARD`;

    const blob = new Blob([vCard], {
      type: "text/vcard",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "Dharanidharn-S.vcf";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    URL.revokeObjectURL(url);
  };

  const shareCard = async () => {
    const shareData = {
      title: "Nexo Visuals",
      text: "Connect with Dharanidharn S - Founder of Nexo Visuals",
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);

        alert("Business card link copied to clipboard.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: 1.2,
        duration: 0.6,
      }}
      className="grid grid-cols-2 gap-4"
    >
      {/* Add Contact */}
      <motion.button
        whileHover={{
          y: -3,
          scale: 1.02,
        }}
        whileTap={{
          scale: 0.97,
        }}
        onClick={downloadContact}
        className="
          flex
          items-center
          justify-center
          gap-3
          rounded-2xl
          bg-gradient-to-r
          from-[#F7A300]
          via-[#F26A00]
          to-[#C73A16]
          px-5
          py-4
          text-white
          shadow-lg
        "
      >
        <UserPlus size={20} />

        <span className="font-semibold">
          Add Contact
        </span>
      </motion.button>

      {/* Share */}
      <motion.button
        whileHover={{
          y: -3,
          scale: 1.02,
        }}
        whileTap={{
          scale: 0.97,
        }}
        onClick={shareCard}
        className="
          flex
          items-center
          justify-center
          gap-3
          rounded-2xl
          border
          border-white/70
          bg-white/70
          backdrop-blur-2xl
          px-5
          py-4
          text-[#202020]
          shadow-md
        "
      >
        <Share2 size={20} />

        <span className="font-semibold">
          Share
        </span>
      </motion.button>
    </motion.div>
  );
}

import { motion } from "motion/react";
import { FaWhatsapp } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";

export function FloatingContactButtons() {
  const phoneNumber = "9360375656"; // same for phone & WhatsApp

  const whatsappMessage =
    "Hi, I want know about your services..";

  const whatsappLink = `https://wa.me/91${phoneNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
      {/* WhatsApp Button */}
      <motion.a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
        title="Chat on WhatsApp"
      >
        <FaWhatsapp className="w-7 h-7" />
      </motion.a>

      {/* Phone Call Button */}
      <motion.a
        href={`tel:+91${phoneNumber}`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 rounded-full bg-orange-500 text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
        title="Call Now"
      >
        <FiPhoneCall className="w-7 h-7" />
      </motion.a>
    </div>
  );
}

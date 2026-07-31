//src/app/digital-card/BusinessCard.tsx

import { motion } from "framer-motion";

import { Background } from "./components/Background";
import { ProfileHeader } from "./components/ProfileHeader";
import { ContactCard } from "./components/ContactCard";
import { PortfolioCard } from "./components/PortfolioCard";
import { ActionButtons } from "./components/ActionButtons";

import {
  contactCards,
  portfolioCards,
} from "./data";

export default function BusinessCard() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#F8F7F4]">
      {/* Background */}
      <Background />

      {/* Scrollable Content */}
      <div className="relative z-10">
        <div className="mx-auto w-full max-w-[430px] px-5 pt-8 pb-10">

          {/* Header */}
          <ProfileHeader />

          {/* Contact Cards */}
          <motion.div
            className="mt-10 space-y-4"
            initial="hidden"
            animate="show"
          >
            {contactCards.map((card, index) => (
              <ContactCard
                key={card.id}
                title={card.title}
                value={card.value}
                href={card.href}
                icon={card.icon}
                external={card.external}
                delay={1 + index * 0.12}
              />
            ))}
          </motion.div>

          {/* Portfolio Section */}
          <motion.div
            className="mt-5 flex flex-col gap-5"
            initial="hidden"
            animate="show"
          >
            {portfolioCards.map((card, index) => (
              <PortfolioCard
                key={card.id}
                title={card.title}
                subtitle={card.subtitle}
                href={card.href}
                icon={card.icon}
                external={card.external}
                delay={1.8 + index * 0.18}
              />
            ))}
          </motion.div>

          {/* Action Buttons */}
          <div className="mt-8">
            <ActionButtons />
          </div>

          {/* Footer */}
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 2.5,
            }}
            className="pb-8 pt-10 text-center"
          >
            <p className="text-xs tracking-[0.3em] text-[#8B8B8B] uppercase">
              Crafted with love by
            </p>

            <p className="mt-2 text-sm font-semibold tracking-[0.3em] text-[#202020]">
              Nexo Visuals
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
// src/app/digital-card/SplashScreen.tsx

import { Background } from "./components/Background";
import { GlassCard } from "./components/GlassCard";
import { Logo } from "./components/Logo";
import { ProgressBar } from "./components/ProgressBar";
import { BrandTitle } from "./components/BrandTitle";

export function SplashScreen() {
  return (
    <section
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#F8F7F4]
      "
    >
      {/* Background */}
      <Background />

      {/* Responsive Mobile Container */}
      <div
        className="
          relative
          z-10
          flex
          min-h-screen
          items-center
          justify-center
          px-4
          sm:px-6
          py-6
        "
        style={{
          paddingTop: "max(env(safe-area-inset-top), 24px)",
          paddingBottom: "max(env(safe-area-inset-bottom), 24px)",
        }}
      >
        <div
          className="
            flex
            w-full
            items-center
            justify-center
          "
        >
          <GlassCard>
            {/* Logo */}
            <Logo />

            {/* Brand */}
            <BrandTitle />

            {/* Progress */}
            <ProgressBar duration={2.8} />

            {/* Footer */}
            <div
              className="
                mt-10
                sm:mt-12
                text-center
              "
            >
              <p
                className="
                  text-[10px]
                  sm:text-[11px]
                  font-medium
                  uppercase
                  tracking-[0.35em]
                  text-[#A2A2A2]
                "
              >
                POWERED BY NEXO VISUALS
              </p>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
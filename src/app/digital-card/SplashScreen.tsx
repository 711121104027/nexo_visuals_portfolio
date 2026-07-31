// src/app/digital-card/SplashScreen.tsx

import { Background } from "./components/Background";
import { GlassCard } from "./components/GlassCard";
import { Logo } from "./components/Logo";
import { ProgressBar } from "./components/ProgressBar";
import { BrandTitle } from "./components/BrandTitle";

export function SplashScreen() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#F8F7F4]">
      {/* Background */}
      <Background />

      {/* Mobile Container */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
        <div className="w-full max-w-[430px]">
          <GlassCard>
            {/* Logo */}
            <Logo size={145} />

            <BrandTitle />

            {/* Progress Bar */}
            <ProgressBar duration={2.8} />

            {/* Footer */}
            <div className="mt-12 text-center">
              <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-[#A2A2A2]">
                Power By Nexo Visuals
              </p>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
// src/app/digital-card/DigitalCardPage.tsx

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router";

import { SplashScreen } from "./SplashScreen";
import BusinessCard from "./BusinessCard";

export default function DigitalCardPage() {
  const location = useLocation();
  const navigate = useNavigate();

  // Check whether we came from the Back button
  const shouldSkipSplash = location.state?.skipSplash === true;

  // Show splash normally, but skip it when returning from Projects
  const [showSplash, setShowSplash] = useState(!shouldSkipSplash);

  useEffect(() => {
    // If returning from Projects, immediately clear the navigation state
    if (shouldSkipSplash) {
      navigate(location.pathname, {
        replace: true,
        state: null,
      });
      return;
    }

    // Normal splash animation
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, [shouldSkipSplash, navigate, location.pathname]);

  return (
    <AnimatePresence mode="wait">
      {showSplash ? (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: -40,
            transition: {
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            },
          }}
        >
          <SplashScreen />
        </motion.div>
      ) : (
        <motion.div
          key="business-card"
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <BusinessCard />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
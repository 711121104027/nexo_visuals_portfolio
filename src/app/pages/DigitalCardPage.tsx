//src/app/pages/DigitalCardPage.tsx

import { useEffect, useState } from "react";

import { SplashScreen } from "@/app/digital-card/SplashScreen";
import { BusinessCard } from "@/app/digital-card/BusinessCard";

export default function DigitalCardPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <SplashScreen />;
  }

  return <BusinessCard />;
}
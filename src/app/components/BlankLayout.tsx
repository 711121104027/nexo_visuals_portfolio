//src/app/components/BlankLayout.tsx
import { Outlet } from "react-router";
import { ScrollToTop } from "@/app/components/ScrollToTop";

export function BlankLayout() {
  return (
    <div className="min-h-screen w-full bg-[#FAFAF8] overflow-hidden">
      <ScrollToTop />
      <Outlet />
    </div>
  );
}
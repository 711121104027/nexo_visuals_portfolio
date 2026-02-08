import { Outlet } from "react-router";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { FloatingContactButtons } from "./FloatingContactButtons";
import { ScrollToTop } from "@/app/components/ScrollToTop";

export function Layout() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <ScrollToTop />
      <Header />
      <main className="flex-1 pt-20">
        <Outlet />
      </main>
      <Footer />
      <FloatingContactButtons />
    </div>
  );
}

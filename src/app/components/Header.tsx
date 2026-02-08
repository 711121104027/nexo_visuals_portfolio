import { NavLink } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import logo from "../../assets/logo.png";
import { useState } from "react";
import { X } from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/services", label: "Services" },
    { to: "/projects", label: "Projects" },
    { to: "/contact", label: "Contact Us" },
  ];

  return (
   <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="flex items-center" onClick={() => setMobileMenuOpen(false)}>
            <motion.img
              src={logo}
              alt="Nexo Visuals"
              className="h-12 w-auto"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            />
          </NavLink>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `relative px-6 py-2.5 rounded-full transition-colors duration-300 ${
                    isActive
                      ? "text-white"
                      : "text-gray-700 hover:text-gray-900"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute inset-0 rounded-full"
                        style={{
                          background: "linear-gradient(135deg, #F59E0B 0%, #EF4444 50%, #DC2626 100%)",
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2"
            whileTap={{ scale: 0.95 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-200 overflow-hidden"
          >
            <nav className="container mx-auto px-6 py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === "/"}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `px-6 py-3 rounded-xl transition-colors ${
                      isActive
                        ? "text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }`
                  }
                  style={({ isActive }) =>
                    isActive
                      ? {
                          background:
                            "linear-gradient(135deg, #F59E0B 0%, #EF4444 50%, #DC2626 100%)",
                        }
                      : {}
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
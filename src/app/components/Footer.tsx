import { Link } from "react-router";
import { Instagram, Mail, Phone, MapPin } from "lucide-react";
import logo from "../../assets/logo.png";
import { FiSend } from "react-icons/fi";
import { useState } from "react";

export function Footer() {
  const [email, setEmail] = useState("");

  const handleLetsTalk = () => {
    if (!email) {
      alert("Please enter your email address");
      return;
    }

    const subject = encodeURIComponent("Project Enquiry");
    const body = encodeURIComponent(
      `Hello Nexo Visuals,\n\nI need to enquire about your work.\n\nUser Email: ${email}\n\nThank you.`
    );

    window.location.href = `mailto:nexovisualss@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-5 md:px-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.6fr] gap-6">

          {/* COLUMN 1 - BRAND / LOGO */}
          <div>
            <img
              src={logo}
              alt="Nexo Visuals"
              className="h-12 mb-3 object-contain"
            />
            <p className="text-gray-400 max-w-xs">
              Creative Digital Solutions for Modern Businesses. Transforming ideas into exceptional digital experiences.
            </p>
          </div>

          {/* COLUMN 2 - QUICK LINKS */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
              <Link to="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link>
              <Link to="/projects" className="text-gray-400 hover:text-white transition-colors">Projects</Link>
              <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link>
            </div>
          </div>

          {/* COLUMN 3 - CONTACT US */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:nexovisualss@gmail.com"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>nexovisualss@gmail.com</span>
              </a>

              <a
                href="tel:+919360375656"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>+91 93603 75656</span>
              </a>

              <div className="flex items-center gap-2 text-gray-400">
                <MapPin className="w-5 h-5" />
                <span>Coimbatore</span>
              </div>
            </div>
          </div>

          {/* COLUMN 4 - LET'S TALK */}
          <div>
             <h4 className="text-lg font-semibold mb-4">Let’s Talk</h4>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-5">
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-[#1A1A1A] border border-gray-700 text-gray-300 px-4 py-2.5 rounded-lg outline-none 
w-[320px] sm:w-[260px] md:w-[300px] lg:w-[320px] h-11"
              />

              <button
                onClick={handleLetsTalk}
                className="bg-white text-black px-4 sm:px-5 h-11 rounded-lg font-semibold flex items-center justify-center gap-2 whitespace-nowrap w-[150px] sm:w-auto"
              >
                Let's Talk
                <FiSend className="w-4.5 h-4.5 stroke-[1.8]" />
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4">
              <a
                href="https://instagram.com/nexo_visualss"
                target="_blank"
                className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-md flex items-center justify-center text-gray-300 hover:text-white transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>

              <a
                href="https://www.linkedin.com/in/nexo-visuals-261ab63ab/"
                target="_blank"
                className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-md flex items-center justify-center text-gray-300 hover:text-white transition-all"
              >
                <span className="text-lg font-semibold">in</span>
              </a>

              <a
                href="https://www.behance.net/nexovisuals1"
                target="_blank"
                className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-md flex items-center justify-center text-gray-300 hover:text-white transition-all"
              >
                <span className="text-lg font-semibold">Bē</span>
              </a>
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Nexo Visuals. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

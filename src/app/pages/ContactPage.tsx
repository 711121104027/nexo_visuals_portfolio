import { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, Linkedin } from "lucide-react";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";
import { Label } from "@/app/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";
import { FaInstagram, FaWhatsapp, FaBehance } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";




export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    whatsapp: "",
    services: [] as string[],
    message: "",
  });

  const services = [
    "Branding & Visual Identity",
    "Logo Design",
    "Web Design",
    "Web Development",
    "E-commerce Website",
    "Mobile App Design & Development",
    "Digital Marketing",
    "Content Creation",
    "Video Editing",
    "Instagram Post & Story Editing",
    "AI Agent Solutions",
    "Print Design (Brochures, Posters, Flyers)",
    "E-Wedding Invitations",
    "Other",
  ];

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  const handleSubmit = (e: any) => {
    e.preventDefault();

    // Create WhatsApp message
    const whatsappNumber = "919360375656";
    const message = `New Enquiry from Website:
    
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
WhatsApp: ${formData.whatsapp || "Not provided"}
Services: ${formData.services.join(", ")}
Message: ${formData.message}`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    // Also create email subject and body
    const emailSubject = `New Enquiry: ${formData.service}`;
    const emailBody = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0AWhatsApp: ${formData.whatsapp || "Not provided"}%0D%0AService: ${formData.service}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    const emailUrl = `mailto:nexovisualss@gmail.com?subject=${emailSubject}&body=${emailBody}`;


    // Open WhatsApp
    window.open(whatsappUrl, "_blank");

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      whatsapp: "",
      service: "",
      message: "",
    });
  };

  return (
    <div className="overflow-hidden px-2 md:px-12 lg:px-20">
      {/* Hero Section */}
      <section className="py-10 md:py-15 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            className="inline-block mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="px-6 py-1.5 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm tracking-wider">
              Nexo Visuals
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl mb-6">
              Get In
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(135deg, #F59E0B 0%, #EF4444 50%, #DC2626 100%)",
                }}
              >
                {" "}
                Touch
              </span>
            </h1>
            <p className="text-lg md:text-11xl text-gray-600 max-w-1xl mx-auto">
              Let's discuss your project and bring your vision to life
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================== CONTACT CARDS SECTION ================== */}
      <section className="py-5 md:py-10 bg-gradient-to-br from-gray-50 to-white relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* Call Card */}
            <motion.a
              href="tel:+919360375656"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all group cursor-pointer"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform"
                style={{
                  background: "linear-gradient(135deg, #F59E0B 0%, #EF4444 100%)",
                }}
              >
                <Phone className="w-6 h-6 text-white" />
              </div>

              <h3 className="text-xl mb-1">Call Us</h3>
              <p className="text-gray-600 mb-2 text-sm">
                Mon-Sat from 9am to 8pm
              </p>
              <p className="text-lg group-hover:text-orange-500 transition-colors">
                +91 9360375656
              </p>
            </motion.a>

            {/* Email Card */}
            <motion.a
              href="mailto:nexovisualss@gmail.com"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all group cursor-pointer"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform"
                style={{
                  background: "linear-gradient(135deg, #EF4444 0%, #DC2626 100%)",
                }}
              >
                <Mail className="w-6 h-6 text-white" />
              </div>

              <h3 className="text-xl mb-1">Email Us</h3>
              <p className="text-gray-600 mb-2 text-sm">
                We'll reply within 24 hours
              </p>
              <p className="text-base group-hover:text-red-500 transition-colors break-all">
                nexovisualss@gmail.com
              </p>
            </motion.a>

            {/* Visit Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all group"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform"
                style={{
                  background: "linear-gradient(135deg, #DC2626 0%, #F59E0B 100%)",
                }}
              >
                <MapPin className="w-6 h-6 text-white" />
              </div>

              <h3 className="text-xl mb-1">Visit Us</h3>
              <p className="text-gray-600 mb-2 text-sm">
                Come say hello
              </p>
              <p className="text-lg">Coimbatore</p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ================== FORM + SOCIAL SECTION (SECTION 2) ================== */}
      <section className="py-5 md:py-16 bg-gradient-to-br from-gray-50 to-white relative">

        {/* Glass Background Overlay */}
        <div className="absolute inset-0 bg-white/40 backdrop-blur-xl"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">

          {/* Glass Card Wrapper */}
          <div className="
      border border-white/30 
      bg-white/20 backdrop-blur-2xl 
      rounded-3xl 
      shadow-[0_10px_40px_rgba(0,0,0,0.08)] 
      p-6 md:p-18 
      mx-auto max-w-7xl
    ">

            {/* Form and Social Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 items-start">

              {/* Left Side - Message Info & Social Icons */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-4 md:space-y-6"
              >
                {/* Title and Description */}
                <div className="text-center lg:text-left">
                  <h2 className="text-2xl md:text-4xl mb-2 md:mb-3">
                    Reach Out to Us
                  </h2>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    Ready to start your project? Fill out the form and our team will connect with you shortly.
                  </p>
                </div>

                {/* Social Media Icons */}
                <div className="space-y-3">
                  <h3 className="text-lg md:text-xl text-center lg:text-left">
                    Follow Us
                  </h3>

                  <div className="flex justify-center lg:justify-start gap-3 md:gap-4">

                    {/* Instagram */}
                    <motion.a
                      href="https://instagram.com/nexo_visualss"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -4 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-orange-50/80 backdrop-blur-md flex items-center justify-center shadow-md hover:shadow-lg transition-all"
                      title="Instagram"
                    >
                      <FaInstagram className="w-4 h-4 md:w-5 md:h-5 text-orange-600" />
                    </motion.a>

                    {/* LinkedIn */}
                    <motion.a
                      href="https://www.linkedin.com/in/nexo-visuals-261ab63ab/"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -4 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-red-50/80 backdrop-blur-md flex items-center justify-center shadow-md hover:shadow-lg transition-all"
                      title="LinkedIn"
                    >
                      <FaLinkedinIn className="w-4 h-4 md:w-5 md:h-5 text-red-600" />
                    </motion.a>

                    {/* WhatsApp */}
                    <motion.a
                      href="https://wa.me/919360375656"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -4 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-amber-50/80 backdrop-blur-md flex items-center justify-center shadow-md hover:shadow-lg transition-all"
                      title="WhatsApp"
                    >
                      <FaWhatsapp className="w-4 h-4 md:w-5 md:h-5 text-amber-600" />
                    </motion.a>

                    {/* Behance */}
                    <motion.a
                      href="https://www.behance.net/nexovisuals1"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -4 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-orange-100/60 backdrop-blur-md flex items-center justify-center shadow-md hover:shadow-lg transition-all"
                      title="Behance"
                    >
                      <FaBehance className="w-4 h-4 md:w-5 md:h-5 text-orange-600" />
                    </motion.a>

                  </div>
                </div>
              </motion.div>

              {/* Right Side - Form (BIGGER ON LARGE, CLEAN ON MOBILE) */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="
            bg-white/60 backdrop-blur-lg 
            border border-white/40 
            rounded-3xl 
            p-6 md:p-12 
            shadow-2xl
          "
              >
                <form onSubmit={handleSubmit} className="space-y-4">

                  <div>
                    <Label htmlFor="name" className="text-sm md:text-base mb-2 block">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="h-9 md:h-10 rounded-xl border-gray-300 focus:border-orange-500"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-sm md:text-base mb-2 block">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="h-9 md:h-10 rounded-xl border-gray-300 focus:border-orange-500"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-sm md:text-base mb-2 block">
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="h-9 md:h-10 rounded-xl border-gray-300 focus:border-orange-500"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div className="relative" ref={dropdownRef}>
                    <Label className="text-sm md:text-base mb-2 block">
                      Services Required *
                    </Label>

                    {/* Dropdown button */}
                    <div
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      className="h-10 rounded-xl border border-gray-300 flex items-center px-3 cursor-pointer"
                    >
                      {formData.services.length > 0
                        ? `${formData.services.length} selected`
                        : "Select services"}
                    </div>

                    {/* Dropdown list */}
                    {dropdownOpen && (
                      <div className="absolute z-20 mt-2 w-full bg-white border rounded-xl shadow-lg max-h-52 overflow-y-auto p-2">
                        {services.map((service) => (
                          <label
                            key={service}
                            className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded cursor-pointer"
                          >
                            <input
                              type="checkbox"
                              checked={formData.services.includes(service)}
                              onChange={(e) => {
                                if (e.target.checked) {
                                  setFormData({
                                    ...formData,
                                    services: [...formData.services, service],
                                  });
                                } else {
                                  setFormData({
                                    ...formData,
                                    services: formData.services.filter((s) => s !== service),
                                  });
                                }
                              }}
                            />
                            {service}
                          </label>
                        ))}
                      </div>
                    )}

                    {/* Selected tags */}
                    <div className="flex flex-wrap gap-2 mt-3">
                      {formData.services.map((s) => (
                        <div
                          key={s}
                          className="flex items-center gap-2 bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm"
                        >
                          {s}
                          <button
                            type="button"
                            onClick={() =>
                              setFormData({
                                ...formData,
                                services: formData.services.filter((item) => item !== s),
                              })
                            }
                          >
                            ×
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-sm md:text-base mb-2 block">
                      Project Details *
                    </Label>
                    <Textarea
                      id="message"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="min-h-[120px] md:min-h-[140px] rounded-xl border-gray-300 focus:border-orange-500"
                      placeholder="Type your message"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full h-12 md:h-14 rounded-xl text-white text-base md:text-lg flex items-center justify-center gap-2 md:gap-3 shadow-lg hover:shadow-xl transition-shadow"
                    style={{
                      background: "linear-gradient(135deg, #F59E0B 0%, #EF4444 50%, #DC2626 100%)",
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Send className="w-4 h-4 md:w-5 md:h-5" />
                    Send Message
                  </motion.button>

                </form>
              </motion.div>

            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

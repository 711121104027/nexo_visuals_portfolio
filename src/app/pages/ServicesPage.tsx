import { motion } from "motion/react";
import {
  Palette,
  Globe,
  ShoppingCart,
  Smartphone,
  Megaphone,
  PenTool,
  Instagram,
  Video,
  Sparkles,
  CreditCard,
  FileText,
  Frame,
  Newspaper,
  Layout,
  FileImage,
} from "lucide-react";

const serviceCategories = [
  {
    title: "Branding & Design",
    icon: Palette,
    services: [
      { icon: Palette, name: "Branding & Visual Identity" },
      { icon: PenTool, name: "Logo Design" },
      { icon: CreditCard, name: "Visiting Cards" },
      { icon: FileText, name: "Brochures" },
      { icon: Layout, name: "Posters, Flyers, Flex, Pamphlets" },
      { icon: Frame, name: "Frames & Print Designs" },
    ],
  },
  {
    title: "Web & App Solutions",
    icon: Globe,
    services: [
      { icon: Globe, name: "Web Design" },
      { icon: Globe, name: "Web Development" },
      { icon: ShoppingCart, name: "E-commerce Websites" },
      { icon: Smartphone, name: "Mobile Application Design & Development" },
    ],
  },
  {
    title: "Digital Marketing & Content",
    icon: Megaphone,
    services: [
      { icon: Megaphone, name: "Digital Marketing" },
      { icon: FileImage, name: "Content Creation" },
      { icon: Instagram, name: "Instagram Post & Story Editing" },
      { icon: Video, name: "Video Editing" },
    ],
  },
  {
    title: "Advanced Digital Solutions",
    icon: Sparkles,
    services: [
      { icon: Sparkles, name: "AI Agent Solutions" },
      { icon: Newspaper, name: "E-Wedding Invitations" },
      { icon: Layout, name: "Custom Digital Solutions" },
    ],
  },
];

const workflowSteps = [
  {
    number: "01",
    title: "Understand",
    description: "We listen to your requirements and understand your vision",
  },
  {
    number: "02",
    title: "Plan",
    description: "We strategize and plan the perfect solution for your needs",
  },
  {
    number: "03",
    title: "Design & Develop",
    description: "Our team brings your project to life with creativity and precision",
  },
  {
    number: "04",
    title: "Deliver & Support",
    description: "We deliver on time and provide ongoing support",
  },
];

export function ServicesPage() {
  return (
    <div className="overflow-hidden px-4 md:px-12 lg:px-30">
      {/* Hero Section */}
      <section className="py-10 md:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl md:text-5xl mb-6 leading-tight">
              Creative Digital Services
              <span
                className="block mt-2 bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, #F59E0B 0%, #EF4444 50%, #DC2626 100%)",
                }}
              >
                Under One Roof
              </span>
            </h1>

            <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto">
              From branding to websites, marketing to content — we help businesses grow digitally
            </p>

          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-5 md:py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {serviceCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="
      bg-gray-200/40 backdrop-blur-lg 
      border border-gray-200/40 
      rounded-3xl p-8 
      shadow-[0_8px_25px_rgba(0,0,0,0.06)]
    "
              >
                <div className="flex items-center gap-3 md:gap-4 mb-6">
                  <div
                    className="
      w-12 h-12 md:w-16 md:h-16 
      rounded-xl md:rounded-2xl 
      flex items-center justify-center
    "
                    style={{
                      background: "linear-gradient(135deg, #F59E0B 0%, #EF4444 50%, #DC2626 100%)",
                    }}
                  >
                    <category.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <h2 className="text-2xl md:text-3xl">{category.title}</h2>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={service.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: serviceIndex * 0.05 }}
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-3 p-4 bg-white rounded-xl hover:shadow-md transition-all"
                    >
                      <service.icon className="w-5 h-5 text-[#F59E0B] flex-shrink-0" />
                      <span className="text-gray-700">{service.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

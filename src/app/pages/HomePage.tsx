import { motion, useScroll, useTransform } from "motion/react";
import { Link } from "react-router";
import {
  Palette,
  Globe,
  Megaphone,
  Video,
  Smartphone,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  ShoppingCart,
  Instagram,
  Zap,
  Target,
  Users,
  Clock,
} from "lucide-react";
import { useRef } from "react";
import { useNavigate } from "react-router";
import logo2 from "../../assets/logo2.png";
import realEstate from "../../assets/real_estate.png";
import hospital from "../../assets/hospital.png";
import studio from "../../assets/studio.png";
import productDesign from "../../assets/product_design.png";
import poster from "../../assets/poster.jpeg";
import logo1 from "../../assets/logo1.png";
import dsignpath from "../../assets/dsignpath_web_design.jpeg";


const services = [
  {
    icon: Palette,
    title: "Branding",
    description: "Complete brand identity and visual systems that make you memorable",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Globe,
    title: "Web Design & Development",
    description: "Beautiful, responsive websites that convert visitors into customers",
    color: "from-red-500 to-pink-500",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Websites",
    description: "Powerful online stores that drive sales and growth",
    color: "from-pink-500 to-purple-500",
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description: "Native and cross-platform apps with seamless user experiences",
    color: "from-purple-500 to-indigo-500",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Data-driven strategies that amplify your brand's reach",
    color: "from-indigo-500 to-blue-500",
  },
  {
    icon: Video,
    title: "Video Editing",
    description: "Professional video content that tells your story powerfully",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Instagram,
    title: "Social Media Design",
    description: "Eye-catching posts and stories that boost engagement",
    color: "from-cyan-500 to-teal-500",
  },
  {
    icon: Sparkles,
    title: "AI Agent Solutions",
    description: "Intelligent automation that transforms your business operations",
    color: "from-teal-500 to-green-500",
  },
];

const featuredProjects = [
  {
    title: "Modern Brand Identity",
    category: "Design",
    image: logo2,
  },
  {
    title: "E-commerce Platform",
    category: "Web Development",
    image: realEstate,
  },
  {
    title: "Hospital Website",
    category: "Web Design",
    image: hospital,
  },
  {
    title: "Creative Studio Branding",
    category: "Design",
    image: studio,
  },
  {
    title: "Product Packaging Design",
    category: "Design",
    image: productDesign,
  },
  {
    title: "Poster Design",
    category: "Design",
    image: poster,
  },
];

const processSteps = [
  {
    number: "01",
    title: "Understand",
    description: "We dive deep into your vision, goals, and requirements",
    icon: Target,
  },
  {
    number: "02",
    title: "Plan",
    description: "Strategic planning and perfect solution architecture",
    icon: Zap,
  },
  {
    number: "03",
    title: "Create",
    description: "Creative execution with technical excellence",
    icon: Sparkles,
  },
  {
    number: "04",
    title: "Deliver",
    description: "Timely delivery with ongoing support",
    icon: CheckCircle2,
  },
];

const reasons = [
  {
    icon: Users,
    title: "One Team, All Solutions",
    description: "Everything you need under one roof",
  },
  {
    icon: Sparkles,
    title: "Creative + Technical",
    description: "Perfect blend of design and development",
  },
  {
    icon: Clock,
    title: "Fast Delivery",
    description: "On-time project completion guaranteed",
  },
  {
    icon: Target,
    title: "Premium Quality",
    description: "Studio-level quality for every project",
  },
];

export function HomePage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const navigate = useNavigate();


  return (
    <div className="overflow-hidden bg-white relative">
      {/* Hero Section - Premium Dark Gradient */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
        }}
      >

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Background Image with Dark Overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1770003354677-7c3b06d302e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBjcmVhdGl2ZSUyMGRlc2t8ZW58MXx8fHwxNzcwMjgwNjQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`,
            }}
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Subtle Gradient Overlays for Brand Colors */}
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 rounded-full opacity-10"
            style={{
              background: "linear-gradient(135deg, #F59E0B 0%, #EF4444 100%)",
              filter: "blur(80px)",
            }}
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 30, 0],
              y: [0, 20, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-10"
            style={{
              background: "linear-gradient(135deg, #DC2626 0%, #F59E0B 100%)",
              filter: "blur(80px)",
            }}
            animate={{
              scale: [1, 1.3, 1],
              x: [0, -40, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <motion.div
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="container mx-auto px-6 text-center relative z-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <motion.div
              className="inline-block mb-6"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <span className="px-6 py-2 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm tracking-wider">
                CREATIVE DIGITAL STUDIO
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-6xl mb-8 text-white leading-tight">
              We Create Digital{" "}
              <motion.span
                className="bg-clip-text text-transparent inline-block"
                style={{
                  backgroundImage: "linear-gradient(135deg, #F59E0B 0%, #EF4444 50%, #DC2626 100%)",
                }}
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                Experiences
              </motion.span>
              <br />
              That Make Brands
              <br />
              <span className="relative inline-block">
                Stand Out
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-red-500"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                />
              </span>
            </h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              Branding • Web • Marketing • Content • Apps • AI Solutions
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <Link to="/contact">
                <motion.button
                  className="px-10 py-5 rounded-full text-white text-lg relative overflow-hidden group"
                  style={{
                    background: "linear-gradient(135deg, #F59E0B 0%, #EF4444 50%, #DC2626 100%)",
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-white"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ opacity: 0.1 }}
                  />
                  <span className="relative z-10 flex items-center gap-2">
                    Get a Quote
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </motion.button>
              </Link>
              <Link to="/projects">
                <motion.button
                  className="px-10 py-5 rounded-full border-2 border-white text-white text-lg hover:bg-white hover:text-gray-900 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Our Work
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Services Preview Section */}
      <section className="py-10 md:py-20 bg-white relative">
        <div className="container mx-auto px-10 md:px-16 lg:px-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500 text-lg tracking-wider mb-4 block"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              WHAT WE DO
            </motion.span>
            <h2 className="text-5xl md:text-6xl mb-6">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital solutions tailored to elevate your brand
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative p-8 rounded-3xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden"
              >
                {/* Hover Gradient Background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />

                {/* Animated Icon Container */}
                <motion.div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} mb-6 flex items-center justify-center relative`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </motion.div>

                <h3 className="text-xl mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-red-500 transition-all">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>

                {/* Hover Arrow */}
                <motion.div
                  className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100"
                  initial={{ x: -10 }}
                  whileHover={{ x: 0 }}
                >
                  <ArrowRight className="w-6 h-6 text-orange-500" />
                </motion.div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Link to="/services">
              <motion.button
                className="px-8 py-4 rounded-full border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-all inline-flex items-center gap-2 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View All Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-10 md:px-16 lg:px-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500 text-lg tracking-wider mb-4 block"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              HOW WE WORK
            </motion.span>
            <h2 className="text-5xl md:text-6xl mb-6">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple, transparent, and effective workflow
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connection Lines */}
            <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500 via-red-500 to-red-600 mx-[12%]" />

            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                <motion.div
                  className="text-center group"
                  whileHover={{ y: -10 }}
                >
                  <motion.div
                    className="w-24 h-24 rounded-full bg-gradient-to-br from-orange-500 to-red-500 mx-auto mb-6 flex flex-col items-center justify-center relative z-10"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <step.icon className="w-9 h-9 text-white mb-2" />
                    <span className="text-white text-sm opacity-75">{step.number}</span>
                  </motion.div>
                  <h3 className="text-2xl mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-10 md:py-24 bg-white">
        <div className="container mx-auto px-5 md:px-16 lg:px-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500 text-lg tracking-wider mb-4 block"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              FEATURED WORK
            </motion.span>
            <h2 className="text-4xl md:text-6xl mb-6">Selected Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A glimpse of our creative excellence and technical expertise
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-3xl cursor-pointer aspect-[4/3]"
                onClick={() => navigate("/contact")}
              >
                <div className="relative w-full h-full">
                  {/* Project Image */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-30 transition-opacity duration-300 group-hover:opacity-90" />

                  {/* TEXT CONTAINER - DEFAULT BOTTOM, MOVES UP ON HOVER */}
                  <motion.div
                    className="absolute bottom-6 left-6 right-6 text-white"
                    initial={{ y: 0 }}
                    whileHover={{ y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-sm text-orange-400 uppercase tracking-wide">
                      {project.category}
                    </p>

                    <h3 className="text-2xl font-semibold">
                      {project.title}
                    </h3>
                  </motion.div>

                  {/* ARROW - ONLY SHOWS ON HOVER */}
                  <motion.div
                    className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ x: -10 }}
                    whileHover={{ x: 0 }}
                  >
                    <ArrowRight className="w-8 h-8 text-white" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Link to="/projects">
              <motion.button
                className="px-8 py-4 rounded-full text-white text-lg group relative overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #F59E0B 0%, #EF4444 50%, #DC2626 100%)",
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  View All Projects
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>



      {/* Why Choose Us Section */}
      <section className="py-15 md:py-24 bg-[#FFFFFF] text-gray-800 relative overflow-hidden shadow-[0_-10px_30px_rgba(0,0,0,0.08)] rounded-t-[60px] md:rounded-t-[100px]">

        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, rgba(255, 120, 0, 0.2) 1px, transparent 0)",
              backgroundSize: "45px 45px",
            }}
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500 text-lg tracking-wider mb-4 block"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              WHY NEXO VISUALS
            </motion.span>

            <h2 className="text-5xl md:text-6xl mb-6 text-[#1F2937]">Why Choose Us</h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your trusted partner for complete digital transformation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="text-center group"
              >
                <motion.div
                  className="w-20 h-20 rounded-full bg-gradient-to-br from-orange-500 to-red-500 mx-auto mb-6 flex items-center justify-center shadow-md"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <reason.icon className="w-10 h-10 text-white" />
                </motion.div>

                <h3 className="text-2xl mb-3 text-[#1F2937]">{reason.title}</h3>

                <p className="text-gray-600">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
}
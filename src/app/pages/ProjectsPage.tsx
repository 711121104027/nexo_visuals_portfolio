import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Palette, Globe, Smartphone, Sparkles } from "lucide-react";
import logo2 from "../../assets/logo2.png";
import realEstate from "../../assets/real_estate.png";
import hospital from "../../assets/hospital.png";
import studio from "../../assets/studio.png";
import productDesign from "../../assets/product_design.png";
import poster from "../../assets/poster.jpeg";
import logo1 from "../../assets/logo1.png";
import dsignpath from "../../assets/dsignpath_web_design.jpeg";
import { useNavigate } from "react-router";


type ProjectCategory = "All" | "Design" | "Web" | "Mobile" | "AI";

interface Project {
  id: number;
  title: string;
  category: ProjectCategory;
  type: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Modern Brand Identity",
    category: "Design",
    type: "Logo & Branding",
    image: logo2,
  },
  {
    id: 2,
    title: "Real Estate Website",
    category: "Web",
    type: "Web Development",
    image: realEstate,
  },
  {
    id: 3,
    title: "Hospital Website Design",
    category: "Design",
    type: "Web Design",
    image: hospital,
  },
  {
    id: 4,
    title: "Creative Studio Branding",
    category: "Design",
    type: "Brand Identity",
    image: studio,
  },
  {
    id: 5,
    title: "Product Packaging Design",
    category: "Design",
    type: "Brochures & Posters",
    image: productDesign,
  },
  {
    id: 6,
    title: "Poster Design",
    category: "Design",
    type: "Print Design",
    image: poster,
  },
  {
    id: 7,
    title: "Minimal Logo Design",
    category: "Design",
    type: "Logo & Branding",
    image: logo1,
  },
  {
    id: 8,
    title: "Portfolio Website",
    category: "Web",
    type: "Web Development",
    image: dsignpath,
  },
];




const categories = [
  { id: "All", label: "All Projects", icon: null },
  { id: "Design", label: "Designing", icon: Palette },
  { id: "Web", label: "Web Development", icon: Globe },
  { id: "Mobile", label: "Mobile Application", icon: Smartphone },
  { id: "AI", label: "AI Agent", icon: Sparkles },
];

export function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");

  const navigate = useNavigate();

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <div className="overflow-hidden px-2 md:px-12 lg:px-20">
      {/* Hero Section */}
      <section className="py-10 md:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl mb-6">
              Our
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(135deg, #F59E0B 0%, #EF4444 50%, #DC2626 100%)",
                }}
              >
                {" "}
                Portfolio
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our diverse range of creative projects and digital solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 md:py-12 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-6">

          {/* MOBILE: Horizontal scroll | DESKTOP: Center flex wrap */}
          <div className="
  flex md:flex-wrap 
  overflow-x-auto md:overflow-visible 
  justify-start md:justify-center 
  gap-3 md:gap-4 
  hide-scrollbar
">

            {categories.map((category) => {
              const Icon = category.icon;
              const isActive = activeCategory === category.id;

              return (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id as ProjectCategory)}
                  className={`
              px-5 md:px-6 py-2.5 md:py-3 
              rounded-full transition-all 
              flex items-center gap-2 
              whitespace-nowrap
              ${isActive
                      ? "text-white shadow-lg"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }
            `}
                  style={
                    isActive
                      ? {
                        background:
                          "linear-gradient(135deg, #F59E0B 0%, #EF4444 50%, #DC2626 100%)",
                      }
                      : {}
                  }
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {Icon && <Icon className="w-4 h-4 md:w-5 md:h-5" />}
                  <span className="text-sm md:text-base">
                    {category.label}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>


      {/* Projects Grid */}
      <section className="py-5 md:py-20 bg-white">
        <div className="container mx-auto px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group cursor-pointer"
                  onClick={() => navigate("/contact")}
                >
                  <div className="relative overflow-hidden rounded-2xl bg-gray-100 aspect-[4/3]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/0 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-sm text-gray-500 mb-1">{project.type}</p>
                    <h3 className="text-lg text-gray-900">{project.title}</h3>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-6 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
        bg-white/30 backdrop-blur-xl border border-white/40
        rounded-2xl md:rounded-[60px]
        shadow-[0_10px_40px_rgba(0,0,0,0.12)]
        p-6 md:p-10
        flex flex-col md:flex-row
        items-center justify-between
        gap-4 md:gap-6
        text-center md:text-left
      "
          >

            {/* Left Content */}
            <div>
              <h2 className="text-2xl md:text-4xl font-semibold mb-2 md:mb-3 text-black">
                Let’s Create Your Next Project
              </h2>
              <p className="text-base md:text-lg text-gray-600">
                Ready to bring your ideas to life? Get in touch with us today
              </p>
            </div>

            {/* Right Button */}
            <a href="/contact">
              <motion.button
                className="
            px-6 md:px-8 py-2.5 md:py-3
            rounded-full 
            border-2 border-black 
            text-black text-base md:text-lg
            transition-all duration-300
          "
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ background: "transparent" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#000";
                  e.currentTarget.style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "#000";
                }}
              >
                Start your project
              </motion.button>
            </a>

          </motion.div>
        </div>
      </section>


    </div>
  );
}

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Search } from "lucide-react";
import { useInView } from "react-intersection-observer";

const projects = [
  {
    title: "University Website",
    description: "Created a modern, responsive website for a university  ",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tech: ["TypeScript", "CSS"],
    github: "https://github.com/Maroun-Assaad/University-Website",
    live: "https://example.com",
    category: "Frontend",
  },
  /* {
    title: "AI Content Assistant",
    description:
      "AI-powered writing assistant that helps create and optimize content",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tech: ["React", "Python", "OpenAI", "FastAPI"],
    github: "https://github.com",
    live: "https://example.com",
    category: "AI/ML",
  },*/
  /*{
    title: "Real Estate Platform",
    description:
      "Modern real estate platform with virtual tours and appointment scheduling",
    image:
      "https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tech: ["React", "Node.js", "MongoDB", "WebGL"],
    github: "https://github.com",
    live: "https://example.com",
    category: "Full Stack",
  },*/
];

const categories = ["All", "Full Stack", "Frontend", "Backend", "AI/ML"];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      selectedCategory === "All" || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tech.some((tech) =>
        tech.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold mb-6">My Projects</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
              Here are some of my featured projects that showcase my skills and
              experience in web development and design.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
              <div className="relative w-full sm:w-64">
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 pl-10 bg-gray-900 border border-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                />
                <Search
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={18}
                />
              </div>
              <div className="flex flex-wrap justify-center gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full transition-colors ${
                      selectedCategory === category
                        ? "bg-blue-500 text-white"
                        : "bg-gray-900 text-gray-400 hover:bg-gray-800"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          <div
            ref={ref}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="wait">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-blue-500/50 transition-all"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-white">
                        {project.title}
                      </h3>
                      <span className="text-sm bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full">
                        {project.category}
                      </span>
                    </div>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="text-sm bg-gray-800 text-gray-300 px-3 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                      >
                        <Github size={18} />
                        Code
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                      >
                        <ExternalLink size={18} />
                        Live Demo
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
}

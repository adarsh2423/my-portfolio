import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiGithub, FiExternalLink, FiCode } from 'react-icons/fi'

interface ProjectTag {
  id: string;
  name: string;
}

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
}

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })
  
  const tags: ProjectTag[] = [
    { id: "all", name: "All" },
    { id: "react", name: "React" },
    { id: "python", name: "Python" },
    { id: "php", name: "PHP" },
    { id: "javascript", name: "JavaScript" },
    { id: "machine-learning", name: "Machine Learning" }
  ]
  
  const projects: Project[] = [
    {
      id: "online-bookstore",
      title: "Online Bookstore",
      description: "A complete e-commerce solution for purchasing books online with shopping cart, payment integration, and admin dashboard.",
      image: "https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["php", "mysql", "html", "css"],
      github: "https://github.com",
      demo: "https://example.com"
    },
    {
      id: "stock-price-prediction",
      title: "Stock Price Prediction",
      description: "Machine learning application that predicts stock prices based on historical data and various technical indicators.",
      image: "https://images.pexels.com/photos/6802042/pexels-photo-6802042.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["python", "machine-learning", "tensorflow"],
      demo: "https://colab.research.google.com/drive/1nSJOxUTjlyUsMg6-uXVgBvkMkx_sp3NB?usp=sharing"
    },
    {
      id: "e-learning-portal",
      title: "E-learning Portal for CICT",
      description: "Comprehensive e-learning platform with course management, quizzes, and analytics for students and instructors.",
      image: "https://images.pexels.com/photos/5940721/pexels-photo-5940721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["react", "firebase", "flask"],
      github: "https://github.com",
      demo: "https://example.com"
    },
    {
      id: "personal-portfolio",
      title: "Personal Portfolio Website",
      description: "Responsive portfolio website built with modern web technologies to showcase skills and projects.",
      image: "https://images.pexels.com/photos/196646/pexels-photo-196646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["react", "tailwindcss", "typescript"],
      github: "https://github.com",
      demo: "https://example.com"
    },
    {
      id: "simon-game",
      title: "Simons Game",
      description: "A memory game where players must repeat a sequence of colors and sounds.",
      image: "https://images.pexels.com/photos/7117502/pexels-photo-7117502.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["html", "css", "javascript"],
      github: "https://github.com",
      demo: "https://example.com"
    }
  ]
  
  const [activeTag, setActiveTag] = useState("all")
  const [filteredProjects, setFilteredProjects] = useState(projects)
  
  const handleTagChange = (tagId: string) => {
    setActiveTag(tagId)
    
    if (tagId === "all") {
      setFilteredProjects(projects)
    } else {
      setFilteredProjects(projects.filter(project => 
        project.tags.some(tag => tag.includes(tagId))
      ))
    }
  }
  
  return (
    <section id="projects" className="section bg-gray-50 dark:bg-gray-800/50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="h-1 w-20 bg-primary-600 mx-auto rounded-full"></div>
          <p className="mt-6 max-w-2xl mx-auto text-gray-600 dark:text-gray-400 text-lg">
            Here are some of the projects I've worked on that showcase my skills and experience in building real-world applications.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12"
        >
          {tags.map(tag => (
            <button
              key={tag.id}
              onClick={() => handleTagChange(tag.id)}
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                activeTag === tag.id 
                  ? 'bg-primary-600 text-white dark:bg-primary-500'
                  : 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {tag.name}
            </button>
          ))}
        </motion.div>
        
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTag}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -10 }}
                className="card overflow-hidden"
              >
                <div className="h-52 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span 
                        key={`${project.id}-${tag}`}
                        className="px-2 py-1 text-xs rounded-md bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex space-x-3">
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                        aria-label="GitHub Repository"
                      >
                        <FiGithub className="w-5 h-5" />
                      </a>
                    )}
                    
                    {project.demo && (
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                        aria-label="Live Demo"
                      >
                        <FiExternalLink className="w-5 h-5" />
                      </a>
                    )}
                    
                    <a 
                      href="#"
                      className="p-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                      aria-label="View Details"
                    >
                      <FiCode className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
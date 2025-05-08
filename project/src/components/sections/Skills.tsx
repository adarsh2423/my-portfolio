import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface Skill {
  name: string;
  icon: string;
  // level: number;
  about : string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })
  
  const skillCategories: SkillCategory[] = [
    {
      title: "Languages",
      skills: [
        { name: "JavaScript", icon: "javascript", about:"JavaScript is a programming language used to create interactive and dynamic features on websites, like forms, animations, and menus."},
        { name: "Python", icon: "python", about:"A beginner-friendly language known for its simplicity and wide use in data science, web development, and automation." },
        { name: "Java", icon: "java", about:"A powerful, object-oriented language used for building cross-platform apps, especially Android and enterprise software." },
        { name: "C/C++", icon: "c", about:"Low-level languages used for system programming, game development, and high-performance applications." },
        { name: "PHP", icon: "php", about:"A server-side scripting language mainly used for building dynamic websites and web apps." },
        { name: "HTML5", icon: "html5", about:" The standard markup language used to structure content on the web." },
        { name: "CSS3", icon: "css3", about:"A style sheet language used to design and visually style web pages." }
      ]
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: "React", icon: "react", about:"A JavaScript library for building fast, interactive user interfaces, mainly for single-page apps." },
        { name: "Node.js", icon: "nodejs", about:"A runtime that lets you run JavaScript on the server side to build scalable backend services." },
        { name: "Flask", icon: "flask", about:"A lightweight Python web framework for building simple to moderate web applications." },
        { name: "Express", icon: "express", about:"A minimal Node.js framework used to build web APIs and servers easily and quickly." },
        { name: "TailwindCSS", icon: "tailwindcss", about:"A utility-first CSS framework for rapidly building custom user interfaces." },
        { name: "Bootstrap", icon: "bootstrap", about:"A popular CSS framework for building responsive, mobile-first websites quickly." }
      ]
    },
    {
      title: "Databases & Tools",
      skills: [
        { name: "MySQL", icon: "mysql", about:"An open-source relational database used to store and manage structured data." },
        { name: "Firebase", icon: "firebase", about:"A platform by Google offering backend services like databases, authentication, and hosting." },
        { name: "GitHub", icon: "github", about:"A cloud-based platform to host and manage code using Git, widely used for collaboration." },
        { name: "Git", icon: "git", about:"A version control system that tracks changes in code and enables collaborative development." },
        { name: "Figma", icon: "figma", about:"A browser-based design tool used for UI/UX design and prototyping." }
      ]
    }
  ]
  
  return (
    <section id="skills" className="section">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="h-1 w-20 bg-primary-600 mx-auto rounded-full"></div>
          <p className="mt-6 max-w-2xl mx-auto text-gray-600 dark:text-gray-400 text-lg">
            Here's my technical toolkit that I've developed over the years to build powerful and efficient solutions.
          </p>
        </motion.div>
        
        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 + categoryIndex * 0.1 }}
            >
              <h3 className="text-2xl font-semibold mb-8 text-center">{category.title}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* {category.skills.map((skill, skillIndex) => ( */}
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                    className="card hover:shadow-lg p-6"
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-primary-100 dark:bg-primary-900/30 mr-4">
                        <img 
                          src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon}/${skill.icon}-original.svg`} 
                          alt={`${skill.name} logo`}
                          className="w-8 h-8"
                          draggable="false"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon}/${skill.icon}-plain.svg`;
                          }}
                        />
                      </div>
                      <h4 className="text-lg font-semibold">{skill.name}</h4>
                    </div>
                    
                    {/* <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-2">
                      <motion.div 
                        className="bg-primary-600 dark:bg-primary-500 h-2.5 rounded-full"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: 0.4 + skillIndex * 0.1 }}
                      ></motion.div>
                    </div> */}
                    
                    <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 text-justify text-[1rem] leading-normal">
                      {skill.about}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
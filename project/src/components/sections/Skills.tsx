import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface Skill {
  name: string;
  icon: string;
  level: number;
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
        { name: "JavaScript", icon: "javascript", level: 90 },
        { name: "Python", icon: "python", level: 85 },
        { name: "Java", icon: "java", level: 75 },
        { name: "C/C++", icon: "c", level: 70 },
        { name: "HTML5", icon: "html5", level: 95 },
        { name: "CSS3", icon: "css3", level: 90 }
      ]
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: "React", icon: "react", level: 85 },
        { name: "Node.js", icon: "nodejs", level: 80 },
        { name: "Flask", icon: "flask", level: 75 },
        { name: "Express", icon: "express", level: 80 },
        { name: "TailwindCSS", icon: "tailwindcss", level: 90 },
        { name: "Bootstrap", icon: "bootstrap", level: 85 }
      ]
    },
    {
      title: "Databases & Tools",
      skills: [
        { name: "MySQL", icon: "mysql", level: 80 },
        { name: "MongoDB", icon: "mongodb", level: 75 },
        { name: "Firebase", icon: "firebase", level: 85 },
        { name: "Git", icon: "git", level: 90 },
        { name: "Docker", icon: "docker", level: 70 },
        { name: "Figma", icon: "figma", level: 75 }
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
                {category.skills.map((skill, skillIndex) => (
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
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon}/${skill.icon}-plain.svg`;
                          }}
                        />
                      </div>
                      <h4 className="text-lg font-semibold">{skill.name}</h4>
                    </div>
                    
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-2">
                      <motion.div 
                        className="bg-primary-600 dark:bg-primary-500 h-2.5 rounded-full"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: 0.4 + skillIndex * 0.1 }}
                      ></motion.div>
                    </div>
                    
                    <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
                      <span>Beginner</span>
                      <span>Advanced</span>
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
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiAward, FiCalendar, FiShield, FiMonitor } from 'react-icons/fi'

interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  icon: React.ReactNode;
}

interface Internship {
  id: string;
  role: string;
  company: string;
  duration: string;
  description: string[];
}

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })
  
  const internships: Internship[] = [
    {
      id: "cict",
      role: "Full Stack Developer",
      company: "CICT",
      duration: "Jan 2024 - Present",
      description: [
        "Developing an e-learning platform using React, Firebase, and Flask",
        "Implementing user authentication and authorization",
        "Creating interactive course materials and quizzes",
        "Optimizing application performance and user experience"
      ]
    }
  ]
  
  const certifications: Certification[] = [
    {
      id: "google-android",
      title: "Google Android Development",
      issuer: "Google",
      date: "2023",
      icon: <FiMonitor />
    },
    {
      id: "palo-alto",
      title: "Cyber Security",
      issuer: "Palo Alto Networks",
      date: "2022",
      icon: <FiShield />
    },
    {
      id: "ibm-data-science",
      title: "Data Science Professional",
      issuer: "IBM",
      date: "2022",
      icon: <FiAward />
    },
    {
      id: "oracle-java",
      title: "Java Programming",
      issuer: "Oracle",
      date: "2021",
      icon: <FiAward />
    },
    {
      id: "nptel-python",
      title: "Python Programming",
      issuer: "NPTEL",
      date: "2021",
      icon: <FiAward />
    },
    {
      id: "udemy-web-dev",
      title: "Web Development Bootcamp",
      issuer: "Udemy",
      date: "2020",
      icon: <FiAward />
    }
  ]
  
  return (
    <section id="experience" className="section">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience & Certifications</h2>
          <div className="h-1 w-20 bg-primary-600 mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-8">Internships</h3>
            
            <div className="space-y-8">
              {internships.map((internship, index) => (
                <motion.div
                  key={internship.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="card p-6 hover:shadow-lg transition-all"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-xl font-semibold">{internship.role}</h4>
                      <p className="text-primary-600 dark:text-primary-400">{internship.company}</p>
                    </div>
                    <span className="text-sm bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full flex items-center">
                      <FiCalendar className="mr-1 h-4 w-4" /> {internship.duration}
                    </span>
                  </div>
                  
                  <ul className="space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300">
                    {internship.description.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold mb-8">Certifications</h3>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="card p-5 flex items-start space-x-4 hover:shadow-md"
                >
                  <div className="p-3 rounded-lg bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                    {cert.icon}
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg leading-tight mb-1">{cert.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">{cert.issuer}</p>
                    <div className="flex items-center text-xs text-gray-500 dark:text-gray-500">
                      <FiCalendar className="mr-1 h-3 w-3" /> {cert.date}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
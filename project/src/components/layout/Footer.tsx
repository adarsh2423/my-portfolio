import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-gray-50 dark:bg-gray-800 py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-2">
              R Adarsh
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-md">
              Full Stack Developer | MCA Graduate | Passionate about building web applications that solve real-world problems.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <motion.a 
                href="https://github.com/adarsh2423" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
                aria-label="GitHub"
              >
                <FiGithub className="w-6 h-6" />
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/in/phoenixlife/" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="w-6 h-6" />
              </motion.a>
              <motion.a 
                href="mailto:adarshr1635@gmail.com" 
                whileHover={{ y: -3 }}
                className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
                aria-label="Email"
              >
                <FiMail className="w-6 h-6" />
              </motion.a>
            </div>
            <p className="text-gray-500 dark:text-gray-500 text-sm">
              © {currentYear} R Adarsh. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
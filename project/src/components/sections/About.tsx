import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiUser, FiBriefcase, FiBook, FiAward } from 'react-icons/fi'

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })
  
  return (
    <section id="about" className="section bg-gray-50 dark:bg-gray-800/50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-primary-600 mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="aspect-[4/5] bg-gradient-to-tr from-primary-500/30 to-secondary-500/30 dark:from-primary-500/20 dark:to-secondary-500/20 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl font-bold text-primary-600/20 dark:text-primary-400/20">RA</span>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent-500 rounded-full flex items-center justify-center text-white">
                <span className="font-semibold">MCA</span>
              </div>
            </div>
          </motion.div>
          
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-700 dark:text-gray-300 text-justify">
                I'm a passionate Full Stack Developer with a reasonable foundation in modern web technologies.
                With a Master's in Computer Applications (MCA) from SRM University and a Bachelor's in Computer Applications (BCA) from SKASC,
                I combine academic knowledge with practical skills to create innovative digital solutions.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 text-justify">
                My approach blends technical expertise with creativity, allowing me to build efficient, 
                scalable, and user-friendly applications. I'm constantly learning and adapting to new technologies 
                to stay at the forefront of the ever-evolving tech landscape.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-start space-x-3">
                  <div className="p-3 rounded-lg bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                    <FiUser className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Adaptable</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Quick learner adapting to new technologies</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="p-3 rounded-lg bg-secondary-100 dark:bg-secondary-900/30 text-secondary-600 dark:text-secondary-400">
                    <FiBriefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Leadership</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Leading teams with vision and empathy</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="p-3 rounded-lg bg-accent-100 dark:bg-accent-900/30 text-accent-600 dark:text-accent-400">
                    <FiBook className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Continuous Learner</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Always exploring new technologies</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="p-3 rounded-lg bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                    <FiAward className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Optimistic</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Positive approach to challenges</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Education Timeline</h3>
          
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-200 dark:bg-primary-800/30 rounded-full"></div>
            
            <div className="space-y-12">
              <div className="relative flex justify-between items-center">
                <div className="w-5/12 text-right">
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                    <span className="text-sm text-gray-500 dark:text-gray-400">2023 - 2025</span>
                    <h4 className="text-xs md:text-xl font-semibold mb-2 text-center">Master of Computer Applications</h4>
                    <p className="text-primary-600 dark:text-primary-400 font-medium mb-2 text-center">SRM University</p>
                    <p className="text-gray-600 dark:text-gray-400 text-center text-xs md:text-xl">Specialized in Full Stack Development and AI</p>
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary-600 dark:bg-primary-500 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                
                <div className="w-5/12"></div>
              </div>
              
              <div className="relative flex justify-between items-center">
                <div className="w-5/12"></div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary-600 dark:bg-primary-500 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                
                <div className="w-5/12">
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                    <span className="text-sm text-gray-500 dark:text-gray-400">2020 - 2023</span>
                    <h4 className="text-xs md:text-xl font-semibold mb-2 text-center">Bachelor of Computer Applications</h4>
                    <p className="text-primary-600 dark:text-primary-400 font-medium mb-2 text-center">SKASC</p>
                    <p className="text-gray-600 dark:text-gray-400 text-center text-xs md:text-lg">Foundation in programming and software development</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
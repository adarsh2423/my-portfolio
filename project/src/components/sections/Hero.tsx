import { FiDownload, FiArrowRight } from 'react-icons/fi'
import { MdPreview } from "react-icons/md";
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useTheme } from '../../context/ThemeContext'

export default function Hero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const { theme } = useTheme()
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1] 
      }
    }
  }
  
  const techIcons = ['react', 'java', 'python', 'flask', 'node', 'mysql', 'firebase']
  
  return (
    <section id="hero" className="min-h-screen flex items-center pt-16">
      <div className="container-custom z-10 relative">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <motion.span 
              variants={itemVariants}
              className="inline-block px-3 py-1 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 text-sm font-medium mb-4"
            >
              Full Stack Developer
            </motion.span>
            
            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white"
            >
              Hi, I'm <span className="text-primary-600 dark:text-primary-400">R Adarsh</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-xl"
            >
              Full Stack Developer | MCA Graduate 
              <br />
              Crafting beautiful, functional user experiences with modern web technologies.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="btn-primary cursor-pointer"
              >
                View My Work
                <FiArrowRight className="ml-2" />
              </Link>
              
              <a
                href="https://drive.google.com/file/d/1JR5Ct04dQ96E6o45xpM7FlfYi5ZE1PUt/view?usp=sharing"
                className="btn-outline"
                target='_blank'
              >
                View Resume
                <MdPreview className="ml-2" />
              </a>
              <a
                href="/R Adarsh Resume.pdf"
                download
                className="btn-outline"
              >
                Download Resume
                <FiDownload className="ml-2" />
              </a>
            </motion.div>
          </div>
          
          <motion.div
            variants={itemVariants}
            className="relative hidden md:block"
          >
            <div className="w-full h-[450px] bg-gradient-to-tr from-primary-500/20 to-secondary-500/20 dark:from-primary-500/10 dark:to-secondary-500/10 rounded-2xl flex items-center justify-center">
              <div className="relative w-96 h-96">
                {techIcons.map((icon, index) => (
                  <motion.div
                    key={icon}
                    className="absolute w-16 h-16 rounded-full bg-white dark:bg-gray-800 shadow-md flex items-center justify-center"
                    style={{
                      top: `${45 + 45 * Math.sin(index * (Math.PI / 3.5))}%`,
                      left: `${45 + 42 * Math.cos(index * (Math.PI / 3.5))}%`,
                      transform: 'translate(-50%, 50%)'
                    }}
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 4,
                      ease: "easeInOut",
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: index * 0.5
                    }}
                  >
                    <img 
                      src={icon==='node'? 'https://www.svgrepo.com/download/303360/nodejs-logo.svg':`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}/${icon}-original.svg`}
                      alt={`${icon} logo`}
                      className="w-8 h-8 rounded-full"
                      draggable="false"
                    />
                  </motion.div>
                ))}
                 <span><img src={theme==="dark"?"Portfolio_photod.png":"Portfolio_photol.png"} className='absolute rounded-full ml-24 mt-24 inset-0 flex items-center justify-center w-56 h-56 scale-x-[-1]' draggable="false" /></span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
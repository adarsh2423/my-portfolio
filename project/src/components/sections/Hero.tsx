import { FiDownload, FiArrowRight } from 'react-icons/fi'
import { MdPreview } from "react-icons/md";
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function Hero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })
  
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
  
  const techIcons = ['react', 'java', 'python', 'flask', 'node', 'mysql']
  
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
                className="btn-primary"
              >
                View My Work
                <FiArrowRight className="ml-2" />
              </Link>
              
              <a
                href="https://docs.google.com/document/d/1ZABcEPalMEE7Etrn80EN6Nc36OA7DA1_ZeCtHYdGkfQ/edit?usp=sharing"
                className="btn-outline"
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
                    className="absolute w-16 h-16 rounded-lg bg-white dark:bg-gray-800 shadow-md flex items-center justify-center"
                    style={{
                      top: `${45 + 45 * Math.sin(index * (Math.PI / 3))}%`,
                      left: `${45 + 45 * Math.cos(index * (Math.PI / 3))}%`,
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
                      className="w-8 h-8"
                    />
                  </motion.div>
                ))}
                 <span><img src="/Portfolio_photo1.png" className='absolute ml-24 mt-16 rounded-full inset-0 flex items-center justify-center w-52 h-64 scale-x-[-1]' /></span>
                {/*<div className="absolute ml-10 mt-4 inset-0 flex items-center justify-center">
                  <div className="w-60 h-60 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center border-4 border-white dark:border-gray-700">
                    <span className="text-3xl font-bold bg-gradient-to-br from-primary-600 to-secondary-600 bg-clip-text text-transparent">RA</span>
                   
                  </div>
                </div>*/}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
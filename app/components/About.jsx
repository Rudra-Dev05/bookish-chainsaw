import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion"

const About = ({ isDarkMode }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 400,
        damping: 25,
        mass: 0.8
      }
    }
  }

  const profileVariants = {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.02, 1],
      rotate: [0, 1, -1, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    hover: {
      scale: 1.03,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 15
      }
    }
  }

  // Add gradient animation for background
  const gradientVariants = {
    animate: {
      backgroundPosition: ["0% 0%", "100% 100%"],
      transition: {
        duration: 15,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "linear"
      }
    }
  }

  return (
    <motion.section
      id="about"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="relative min-h-screen py-32 px-6 md:px-12 lg:px-24 
        bg-gradient-to-b from-white via-gray-50 to-white
        dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 
        overflow-hidden scroll-mt-24"
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-20 dark:opacity-10 
          bg-[url('/noise-texture.png')] mix-blend-soft-light" />
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity,
            ease: "linear" 
          }}
          className="absolute inset-0"
        >
          <motion.div
            variants={gradientVariants}
            animate="animate"
            className="absolute w-[1200px] h-[1200px] -top-1/2 -right-1/4
              bg-gradient-to-br from-blue-100/30 via-purple-100/30 to-pink-100/30
              dark:from-blue-900/20 dark:via-purple-900/20 dark:to-pink-900/20
              rounded-full blur-[120px] transform-gpu"
          />
        </motion.div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Enhanced Header */}
        <motion.div
          variants={itemVariants}
          className="text-center mb-24 space-y-6"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Technical
            <motion.span
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
              className="bg-clip-text text-transparent bg-gradient-to-r 
                from-blue-600 via-purple-600 to-pink-600
                dark:from-blue-400 dark:via-purple-400 dark:to-pink-400
                bg-[length:200%_auto] ml-3"
            >
              Expertise
            </motion.span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-light">
            Bridging innovation with technical excellence through cutting-edge solutions
          </p>
        </motion.div>

        {/* Enhanced Three-column grid */}
        <div className="grid md:grid-cols-3 gap-12 items-start">
          {/* Enhanced Profile Column */}
          <motion.div
            variants={itemVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            className="relative h-full group"
          >
            <motion.div
              variants={profileVariants}
              className="relative rounded-[2.5rem] overflow-hidden shadow-2xl 
                border-8 border-white dark:border-gray-800 
                transition-all duration-500"
            >
              <motion.div
                initial={{ opacity: 0, scale: 1.5 }}
                animate={{ opacity: 0.2, scale: 1.2 }}
                whileHover={{ opacity: 0.4, scale: 1.3 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 
                  blur-3xl transform-gpu"
              />
              <Image
                src={assets.user_image}
                alt="Profile"
                width={600}
                height={800}
                className="w-full h-auto object-cover relative z-10"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 via-transparent to-transparent z-20" />
              <div className="absolute bottom-0 left-0 right-0 p-8 z-30">
                <h2 className="text-3xl font-bold text-white tracking-tight">
                  Rudradev
                  <span className="block text-gray-200 font-medium text-xl mt-2 opacity-90">
                    AI/ML Engineer
                  </span>
                </h2>
              </div>
              <motion.div 
                className="absolute top-4 right-4 p-2 
                  bg-white/10 backdrop-blur-sm rounded-full z-30"
              >
                <div className="w-3 h-3 bg-green-400 rounded-full 
                  animate-[pulse_1.5s_ease-in-out_infinite]" />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Info Cards Column */}
          <motion.div
            variants={containerVariants}
            className="grid gap-8 h-full"
          >
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-8 rounded-3xl bg-white dark:bg-gray-800 shadow-xl hover:shadow-2xl transition-shadow
                  border border-gray-100 dark:border-gray-700 h-full cursor-default
                  hover:-translate-y-1.5 transform-gpu duration-300"
              >
                <div className="flex items-center gap-5 mb-5">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30">
                    <Image
                      src={isDarkMode ? iconDark : icon}
                      alt={title}
                      width={28}
                      height={28}
                      className="w-7 h-7 text-blue-600"
                    />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white tracking-tight">
                    {title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                  {description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Tools Column */}
          <motion.div
            variants={containerVariants}
            className="flex flex-col gap-8 h-full"
          >
            <motion.div
              variants={itemVariants}
              className="p-8 rounded-3xl bg-white dark:bg-gray-800 shadow-xl border border-gray-100 dark:border-gray-700"
            >
              <h3 className="text-2xl font-semibold mb-8 text-gray-900 dark:text-white tracking-tight">
                Technical Stack
              </h3>
              <div className="grid grid-cols-3 gap-5">
                {toolsData.map((tool, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-700/30 flex items-center justify-center
                      hover:bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 
                      transition-all duration-300 cursor-pointer hover:scale-105"
                  >
                    <Image
                      src={tool}
                      alt="Technology"
                      width={48}
                      height={48}
                      className="w-10 h-10 object-contain grayscale hover:grayscale-0 transition-all"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="p-8 rounded-3xl bg-white dark:bg-gray-800 shadow-xl border border-gray-100 dark:border-gray-700"
            >
              <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white tracking-tight">
                Specializations
              </h3>
              <ul className="space-y-4 text-gray-600 dark:text-gray-400 text-lg">
                {[
                  { title: "Machine Learning", color: "blue" },
                  { title: "Full Stack Development", color: "purple" },
                  { title: "Cloud Architecture", color: "pink" }
                ].map((spec, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`
                      flex items-center gap-3 p-4 rounded-xl
                      bg-gray-50 dark:bg-gray-700/30
                      hover:bg-${spec.color}-50 dark:hover:bg-${spec.color}-900/10
                      transition-all duration-300 cursor-pointer
                      hover:shadow-lg hover:shadow-${spec.color}-500/10
                    `}
                  >
                    <div className={`
                      w-2.5 h-2.5 rounded-full 
                      bg-${spec.color}-500
                      animate-[pulse_2s_ease-in-out_infinite]
                      group-hover:animate-[pulse_1s_ease-in-out_infinite]
                    `} />
                    <span className="font-medium transition-colors duration-300
                      hover:text-${spec.color}-600 dark:hover:text-${spec.color}-400">
                      {spec.title}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default About;

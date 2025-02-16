import { serviceData } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import { motion } from "framer-motion"

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 20
      }
    }
  }

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      id="services" 
      className="relative min-h-screen py-32 px-6 md:px-12 lg:px-24 
        bg-gradient-to-b from-white via-gray-50 to-white
        dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 
        overflow-hidden scroll-mt-24"
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-20 dark:opacity-10 
          bg-[url('/noise-texture.png')] mix-blend-soft-light" />
        <div className="absolute inset-0">
          <div className="absolute w-[1000px] h-[1000px] -top-1/2 -right-1/4
            bg-gradient-to-br from-blue-100/30 via-purple-100/30 to-pink-100/30
            dark:from-blue-900/20 dark:via-purple-900/20 dark:to-pink-900/20
            rounded-full blur-[120px] animate-pulse-slow" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Enhanced Header */}
        <motion.div 
          variants={itemVariants}
          className="text-center mb-24 space-y-6"
        >
          <span className="inline-block px-4 py-2 rounded-full
            bg-gradient-to-r from-blue-100/50 to-purple-100/50
            dark:from-blue-900/50 dark:to-purple-900/50
            text-blue-600 dark:text-blue-400 text-sm font-medium">
            Our Expertise
          </span>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight">
            Our
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
              Services
            </motion.span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-light">
            Delivering innovative solutions that transform ideas into reality
          </p>
        </motion.div>

        {/* Enhanced Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceData.map(({ icon, title, description, link }, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative p-8 rounded-3xl
                bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm
                border border-gray-200/50 dark:border-gray-700/50
                hover:shadow-2xl hover:shadow-blue-500/10
                transition-all duration-500"
            >
              <div className="relative z-10">
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="w-16 h-16 mb-6 rounded-2xl
                    bg-gradient-to-br from-blue-100 to-purple-100
                    dark:from-blue-900/30 dark:to-purple-900/30
                    flex items-center justify-center
                    group-hover:shadow-lg group-hover:shadow-blue-500/20
                    transition-all duration-500"
                >
                  <Image 
                    src={icon} 
                    alt={title} 
                    className="w-8 h-8 transition-transform duration-500 
                      group-hover:scale-110 group-hover:rotate-3"
                  />
                </motion.div>
                <h3 className="text-2xl font-semibold mb-4 
                  text-gray-900 dark:text-white tracking-tight">
                  {title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 
                  leading-relaxed">
                  {description}
                </p>
                <motion.a 
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center gap-2 
                    text-blue-600 dark:text-blue-400 font-medium
                    group/link"
                  href={link}
                >
                  Learn more 
                  <Image 
                    src={assets.right_arrow} 
                    alt="Arrow" 
                    className="w-4 transition-transform duration-300 
                      group-hover/link:translate-x-1"
                  />
                </motion.a>
              </div>
              
              {/* Enhanced Hover Effect */}
              <div className="absolute inset-0 rounded-3xl
                bg-gradient-to-br from-blue-500/5 to-purple-500/5
                dark:from-blue-500/10 dark:to-purple-500/10
                opacity-0 group-hover:opacity-100 
                transition-opacity duration-500 blur-xl"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default Services;

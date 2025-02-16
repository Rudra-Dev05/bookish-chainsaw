import { assets } from '@/assets/assets';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Header = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: 'spring', stiffness: 400, damping: 20 } 
    }
  }

  return (
    <motion.header
      id="top"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="relative py-24 px-6 md:px-12 lg:px-24 min-h-screen
        bg-gradient-to-b from-white via-gray-50 to-white
        dark:from-gray-900 dark:via-gray-800 dark:to-gray-900
        overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20 dark:opacity-10 bg-[url('/noise-texture.png')] mix-blend-soft-light" />
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
        <div className="absolute w-[1000px] h-[1000px] -top-1/2 -right-1/4
          bg-gradient-to-br from-blue-100/30 via-purple-100/30 to-pink-100/30
          dark:from-blue-900/20 dark:via-purple-900/20 dark:to-pink-900/20
          rounded-full blur-[120px]" />
      </motion.div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        {/* Left Section - Profile Image */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center lg:justify-start"
        >
          <motion.div
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 
              rounded-2xl blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
            <div className="relative rounded-2xl overflow-hidden border border-gray-200/30 dark:border-gray-700/50
              bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm
              shadow-2xl hover:shadow-3xl transition-all duration-500">
              <Image
                src={assets.profile_img}
                alt="Rudradev - Data Scientist"
                width={400}
                height={400}
                className="w-full h-auto object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30" />
              <div className="absolute bottom-4 right-4 px-3 py-1 rounded-full 
                bg-white/80 backdrop-blur-sm text-xs font-medium text-gray-800">
                Hyderabad, IN
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Section - Text Content */}
        <div className="flex flex-col space-y-6">
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full 
              bg-gradient-to-r from-green-400/20 to-emerald-400/20 backdrop-blur-sm 
              border border-green-400/30 dark:border-green-400/20
              hover:border-green-400/50 dark:hover:border-green-400/30
              text-base font-medium text-green-800 dark:text-green-200 
              shadow-lg shadow-green-500/5 hover:shadow-xl hover:shadow-green-500/10
              transition-all duration-300"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-[pulse_1.5s_ease-in-out_infinite]" />
            Available for select projects
          </motion.div>

          <motion.h1 
            variants={itemVariants} 
            className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight
              bg-clip-text text-transparent bg-gradient-to-r 
              from-gray-900 via-gray-700 to-gray-900
              dark:from-white dark:via-gray-300 dark:to-white
              animate-gradient-x"
          >
            Data Scientist
          </motion.h1>

          <motion.p 
            variants={itemVariants} 
            className="text-xl md:text-2xl font-light max-w-xl 
              text-gray-700 dark:text-gray-300 leading-relaxed"
          >
            Transforming data into actionable insights that drive innovation and growth.
          </motion.p>

          <motion.div 
            variants={itemVariants} 
            className="flex items-center text-2xl font-medium 
              text-gray-900 dark:text-white"
          >
            Rudradev 
            <motion.span 
              animate={{ 
                rotate: [0, 15, -15, 15, 0],
                transition: {
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }
              }}
              className="ml-3 text-3xl transform-gpu"
            >
              👋
            </motion.span>
          </motion.div>

          <motion.p 
            variants={itemVariants} 
            className="max-w-xl text-lg md:text-xl font-light leading-relaxed 
              text-gray-600 dark:text-gray-400"
          >
            Utilizing advanced analytics and machine learning techniques, I convert complex datasets into strategic insights that empower organizations to make informed, data-driven decisions for sustainable growth.
          </motion.p>

          <motion.div 
            variants={itemVariants} 
            className="flex flex-wrap gap-6 mt-8"
          >
            <motion.a
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 10
              }}
              href="#contact"
              className="group px-8 py-4 rounded-xl
                bg-gradient-to-r from-blue-600 to-purple-600
                hover:from-blue-700 hover:to-purple-700
                text-white font-medium text-lg
                shadow-xl shadow-blue-500/20
                hover:shadow-2xl hover:shadow-blue-500/30
                transition-all duration-300
                flex items-center gap-2"
            >
              Start a Project
              <motion.span
                className="inline-block transition-transform duration-300 
                  transform group-hover:translate-x-1"
              >
                →
              </motion.span>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 10
              }}
              href="/resume.pdf"
              download 
              className="group px-8 py-4 rounded-xl
                border-2 border-gray-200 dark:border-gray-700
                hover:border-blue-500 dark:hover:border-blue-400
                hover:bg-gray-50 dark:hover:bg-gray-800
                text-gray-700 dark:text-gray-300
                hover:text-blue-600 dark:hover:text-blue-400
                font-medium text-lg
                transition-all duration-300
                flex items-center gap-2"
            >
              View Full CV
              <motion.span
                className="inline-block transition-transform duration-300 
                  transform group-hover:translate-y-0.5"
              >
                ↓
              </motion.span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </motion.header>
  )
}

export default Header;
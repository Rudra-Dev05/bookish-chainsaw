import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion"

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.15 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  }

  return (
    <motion.footer 
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="relative py-16 overflow-hidden
        bg-gradient-to-b from-white via-gray-50 to-white
        dark:from-gray-900 dark:via-gray-800 dark:to-gray-900
        border-t border-gray-200/50 dark:border-gray-800/50"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-20 dark:opacity-10 
          bg-[url('/noise-texture.png')] mix-blend-soft-light" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))]
          from-blue-100/20 via-purple-100/20 to-transparent
          dark:from-blue-500/5 dark:via-purple-500/5 dark:to-transparent" />
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
          className="absolute inset-0"
        >
          <div className="absolute w-[1000px] h-[1000px] bottom-0 left-1/2 -translate-x-1/2
            bg-gradient-to-t from-blue-100/30 via-purple-100/30 to-transparent
            dark:from-blue-900/20 dark:via-purple-900/20 dark:to-transparent
            rounded-full blur-[80px] animate-pulse-slow" />
        </motion.div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        {/* Logo Section with Enhanced Background */}
        <motion.div variants={itemVariants} className="flex flex-col items-center mb-12">
          <motion.div
            whileHover={{ scale: 1.05, rotate: [-1, 1, -1], transition: { repeat: Infinity, duration: 2 } }}
            className="relative mb-8 p-4 rounded-2xl 
              bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm
              hover:bg-white/80 dark:hover:bg-gray-800/80 
              shadow-lg hover:shadow-xl
              border border-gray-200/50 dark:border-gray-700/50
              transition-all duration-300"
          >
            <Image 
              src={assets.logo} 
              alt="logo" 
              width={120}
              height={40}
              className="dark:brightness-110 relative z-10" 
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r 
              from-blue-100/20 to-purple-100/20
              dark:from-blue-900/20 dark:to-purple-900/20 
              blur-md" />
          </motion.div>
          
          <motion.a
            href="mailto:myadararudradev@gmail.com"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="group relative flex items-center gap-3 px-6 py-3 
              bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm
              rounded-full shadow-lg hover:shadow-xl
              border border-gray-200/50 dark:border-gray-700/50
              transition-all duration-300"
          >
            <motion.div whileHover={{ rotate: 15 }} className="group-hover:scale-110 transition-transform duration-300">
              <Image 
                src={assets.mail_icon} 
                alt="email"
                width={20}
                height={20}
                className="opacity-75 group-hover:opacity-100 transition-opacity" 
              />
            </motion.div>
            <span className="text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
              myadararudradev@gmail.com
            </span>
          </motion.a>
        </motion.div>

        {/* Social Links with Enhanced Styling */}
        <motion.div variants={itemVariants} 
          className="flex flex-col md:flex-row items-center justify-between gap-8 
            pt-8 border-t border-gray-200/50 dark:border-gray-700/50"
        >
          <motion.p variants={itemVariants} className="text-gray-500 dark:text-gray-400">
            © {currentYear} Rudradev. All rights reserved.
          </motion.p>
          <div className="flex items-center gap-8">
            {[
              { name: 'Github', url: 'https://github.com/Rudra-Dev05' },
              { name: 'LinkedIn', url: 'https://www.linkedin.com/in/rudradev-myadara/' },
              { name: 'X', url: 'https://x.com/RMyadara' }
            ].map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="relative px-4 py-2 rounded-lg text-gray-500 dark:text-gray-400 font-medium transition-all duration-300 hover:text-gray-900 dark:hover:text-white
                           after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-blue-500 after:transition-all after:duration-300"
              >
                {link.name}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.footer>
  )
}

export default Footer;

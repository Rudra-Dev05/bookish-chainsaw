import { assets, workData } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion"

const Work = () => {
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

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
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
      viewport={{ once: true }}
      id="work"
      className="relative py-32 px-6 md:px-12 lg:px-24 
        bg-gradient-to-b from-white via-gray-50 to-white
        dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 
        overflow-hidden scroll-mt-24"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-20 dark:opacity-10 
          bg-[url('/noise-texture.png')] mix-blend-soft-light" />
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
          <div className="absolute w-[1200px] h-[1200px] -top-1/2 -right-1/4
            bg-gradient-to-br from-blue-100/30 via-purple-100/30 to-pink-100/30
            dark:from-blue-900/20 dark:via-purple-900/20 dark:to-pink-900/20
            rounded-full blur-[120px]" />
        </motion.div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Compact Header */}
        <motion.div 
          variants={headerVariants}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight flex items-center justify-center gap-3">
            Latest
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
                bg-[length:200%_auto]"
            >
              Work
            </motion.span>
          </h2>
        </motion.div>

        {/* Single Row Project Scroll */}
        <div className="relative">
          <motion.div 
            className="flex space-x-6 overflow-x-auto pb-8 px-4
              scrollbar-none snap-x snap-mandatory"
            style={{
              WebkitOverflowScrolling: 'touch',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {workData.map((project, index) => (
              <motion.div
                key={index}
                variants={headerVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative rounded-3xl overflow-hidden
                  min-w-[300px] md:min-w-[400px] aspect-[3/4]
                  flex-shrink-0 snap-center
                  bg-white dark:bg-gray-800 
                  shadow-xl hover:shadow-2xl
                  transition-all duration-500"
              >
                {/* Project Image */}
                <div className="absolute inset-0">
                  <Image
                    src={project.bgImage}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t 
                    from-gray-900/90 via-gray-900/50 to-transparent" />
                </div>

                {/* Project Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-200 text-sm mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 rounded-xl
                        bg-white/10 backdrop-blur-sm
                        text-white font-medium
                        border border-white/20
                        hover:bg-white/20 
                        transition-all duration-300
                        flex items-center gap-2"
                    >
                      View Project
                      <motion.span
                        animate={{ x: [0, 4, 0] }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          repeatType: "reverse"
                        }}
                      >
                        →
                      </motion.span>
                    </motion.button>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll Indicators */}
          <div className="absolute -left-4 top-1/2 -translate-y-1/2">
            <motion.div
              className="w-8 h-8 rounded-full bg-white/80 dark:bg-gray-800/80
                shadow-lg flex items-center justify-center
                cursor-pointer backdrop-blur-sm"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                const container = document.querySelector('.overflow-x-auto');
                container.scrollBy({ left: -400, behavior: 'smooth' });
              }}
            >
              ←
            </motion.div>
          </div>
          <div className="absolute -right-4 top-1/2 -translate-y-1/2">
            <motion.div
              className="w-8 h-8 rounded-full bg-white/80 dark:bg-gray-800/80
                shadow-lg flex items-center justify-center
                cursor-pointer backdrop-blur-sm"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                const container = document.querySelector('.overflow-x-auto');
                container.scrollBy({ left: 400, behavior: 'smooth' });
              }}
            >
              →
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Work;

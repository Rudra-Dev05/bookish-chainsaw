"use client"
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from "framer-motion"

// Common button styles to use across components
const buttonClasses = {
  primary: `group px-8 py-4 rounded-xl
    bg-gradient-to-r from-blue-600 to-purple-600
    hover:from-blue-700 hover:to-purple-700
    text-white font-medium text-lg
    shadow-xl shadow-blue-500/20
    hover:shadow-2xl hover:shadow-blue-500/30
    transition-all duration-300
    flex items-center gap-2
    relative overflow-hidden
    before:absolute before:inset-0 
    before:bg-gradient-to-r before:from-white/10 before:to-transparent
    before:translate-x-[-100%] before:hover:translate-x-[100%]
    before:transition-transform before:duration-500`,

  secondary: `group px-8 py-4 rounded-xl
    border-2 border-gray-200 dark:border-gray-700
    hover:border-blue-500 dark:hover:border-blue-400
    hover:bg-gray-50 dark:hover:bg-gray-800
    text-gray-700 dark:text-gray-300
    hover:text-blue-600 dark:hover:text-blue-400
    font-medium text-lg
    transition-all duration-300
    flex items-center gap-2`
}

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScroll(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Home', id: 'top' },
    { name: 'About me', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'My Work', id: 'work' },
    { name: 'Contact me', id: 'contact' }
  ];

  const menuVariants = {
    hidden: { x: '100%', opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 200, damping: 20 } },
    exit: { x: '100%', opacity: 0, transition: { type: "spring", stiffness: 200, damping: 20 } }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 0.5, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.3 } }
  };

  const handleNavClick = (e, id) => {
    e.preventDefault();
    scrollToSection(id);
    if (menuOpen) setMenuOpen(false);
  };

  return (
    <>
      {/* Enhanced Background Decoration */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed inset-0 -z-10 pointer-events-none overflow-hidden"
      >
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
          className="absolute top-0 right-0 w-[500px] h-[500px] 
            bg-gradient-to-br from-purple-200/30 to-blue-200/20 
            dark:from-purple-900/10 dark:to-blue-900/5 
            rounded-full blur-[80px] animate-pulse-slow"
        />
      </motion.div>

      {/* Enhanced Navbar with Gradients */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`w-full fixed top-0 px-5 lg:px-8 py-3 z-50
          ${isScroll 
            ? "bg-gradient-to-r from-white/80 via-gray-50/80 to-white/80 dark:from-gray-900/80 dark:via-gray-800/80 dark:to-gray-900/80 shadow-lg" 
            : "bg-gradient-to-r from-white/60 via-gray-50/60 to-white/60 dark:from-gray-800/60 dark:via-gray-900/60 dark:to-gray-800/60"}
          backdrop-blur-md border-b border-gray-200/50 dark:border-gray-700/50
          transition-all duration-500 ease-in-out`}
      >
        {/* Add subtle light beam effect */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              x: ["0%", "100%"],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-0 -left-1/2 w-1/2 h-full
              bg-gradient-to-r from-transparent via-blue-100/10 to-transparent
              dark:via-blue-400/5"
          />
        </div>

        <div className="relative max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <motion.a 
            href="#top"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="relative shrink-0"
          >
            <Image 
              src={isDarkMode ? assets.logo_dark : assets.logo} 
              alt="Logo" 
              className="w-24 h-auto"
              priority
            />
          </motion.a>

          {/* Desktop Navigation */}
          <motion.ul className="hidden md:flex items-center gap-6 mx-6">
            {navigationItems.map((item, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <motion.a 
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  whileHover={{ y: -2 }}
                  className="group relative px-2 py-1 font-medium text-gray-700 dark:text-gray-200 
                    transition-all duration-300 hover:text-black dark:hover:text-white"
                >
                  {item.name}
                  <span className="absolute left-0 bottom-0 w-full h-0.5 
                    bg-gradient-to-r from-blue-500 to-purple-500 
                    transform scale-x-0 group-hover:scale-x-100 
                    transition-transform duration-300"
                  />
                </motion.a>
              </motion.li>
            ))}
          </motion.ul>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            <ThemeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

            {/* Contact Button */}
            <motion.a 
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#contact" 
              className="hidden lg:inline-flex items-center gap-2 px-5 py-2 
                rounded-xl bg-gradient-to-r from-blue-600 to-purple-600
                hover:from-blue-700 hover:to-purple-700
                text-white font-medium text-sm
                shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30
                transition-all duration-300"
            >
              Contact
              <Image 
                src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} 
                alt="Arrow" 
                className="w-3 transform group-hover:translate-x-1 transition-transform"
              />
            </motion.a>

            {/* Mobile Menu Button */}
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="block md:hidden p-2 rounded-lg
                bg-gray-100 dark:bg-gray-800
                hover:bg-gray-200 dark:hover:bg-gray-700
                transition-all duration-300"
              onClick={() => setMenuOpen(true)}
            >
              <Image src={assets.menu_black} alt="Menu" className="w-5" />
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu Overlay & Menu */}
        <AnimatePresence>
          {menuOpen && (
            <>
              <motion.div 
                className='fixed inset-0 bg-black z-40'
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={overlayVariants}
                onClick={() => setMenuOpen(false)}
              />
              <motion.ul 
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={menuVariants}
                className='fixed top-0 right-0 h-screen w-64 z-50 py-20 px-8 bg-white dark:bg-gray-900 backdrop-blur-xl shadow-xl rounded-l-2xl'
              >
                <div 
                  className='absolute top-6 right-6 p-2 rounded-full transition-transform duration-300 hover:scale-110'
                  onClick={() => setMenuOpen(false)}
                >
                  <Image 
                    src={isDarkMode ? assets.close_white : assets.close_black} 
                    alt='Close Menu' 
                    className='w-4 cursor-pointer' 
                  />
                </div>
                {navigationItems.map((item, index) => (
                  <li key={index} className='mb-4'>
                    <a 
                      href={`#${item.id}`}
                      onClick={(e) => handleNavClick(e, item.id)}
                      className='font-medium block py-2 text-gray-700 dark:text-gray-200 transition-all duration-300 ease-out hover:text-black dark:hover:text-white'
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </motion.ul>
            </>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

const ThemeToggle = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <motion.button
      onClick={() => setIsDarkMode(!isDarkMode)}
      className="p-2 rounded-lg
        bg-gray-100 hover:bg-gray-200
        dark:bg-gray-800 dark:hover:bg-gray-700
        transition-all duration-300"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <motion.span
        animate={{
          rotate: isDarkMode ? [0, 360] : [0, -360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 0.6,
          ease: "easeInOut",
        }}
        className="text-xl block"
      >
        {isDarkMode ? "🌙" : "☀️"}
      </motion.span>
    </motion.button>
  );
};

export const scrollToSection = (elementId) => {
  const element = document.getElementById(elementId);
  if (element) {
    const headerOffset = 80; // Adjust this value based on your navbar height
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

export default Navbar;

'use client'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from "framer-motion"
import dynamic from 'next/dynamic'

// Dynamically import canvas-confetti
const confetti = dynamic(() => import('canvas-confetti'), {
  ssr: false,
});

const Contact = () => {
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  // Enhanced success effect
  const triggerSuccessAnimation = async () => {
    if (typeof window === 'undefined') return;
    
    const fire = (particleRatio, opts) => {
      confetti({
        ...opts,
        origin: { y: 0.7 },
        particleCount: Math.floor(200 * particleRatio),
      });
    };

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
      colors: ['#4F46E5', '#818CF8', '#6366F1']
    });

    fire(0.2, {
      spread: 60,
      colors: ['#8B5CF6', '#A78BFA', '#7C3AED']
    });

    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
      colors: ['#EC4899', '#F472B6', '#DB2777']
    });
  };

  useEffect(() => {
    if (result === "Form Submitted Successfully") {
      triggerSuccessAnimation();
    }
  }, [result]);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setResult("Sending....");
    
    const formDataToSend = new FormData(event.target);
    formDataToSend.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        setFormData({ name: '', email: '', message: '' });
        event.target.reset();
      } else {
        setResult(data.message);
      }
    } catch (error) {
      setResult("Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <motion.section
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="min-h-screen relative py-24 px-6 md:px-12 lg:px-24 overflow-hidden
        bg-gradient-to-b from-white via-gray-50 to-white
        dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      {/* Background elements */}
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

      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div variants={itemVariants} className="text-center mb-20 space-y-6">
          <h2 className="text-6xl md:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
            Let's
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent ml-4">
              Connect
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-light">
            Have a project in mind? Let's create something extraordinary together.
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          variants={itemVariants}
          className="max-w-3xl mx-auto relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 
            dark:from-blue-500/5 dark:to-purple-500/5 transform rotate-1 rounded-2xl blur" />
          
          <form onSubmit={onSubmit} className="relative backdrop-blur-xl bg-white/80 dark:bg-gray-800/80 
            p-8 md:p-12 rounded-2xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50
            transition-all duration-500 hover:shadow-3xl hover:shadow-blue-500/10"
          >
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <motion.input
                whileFocus={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                type="text"
                placeholder="Your Name"
                required
                name="name"
                className="w-full px-6 py-4 rounded-xl bg-white/50 dark:bg-gray-900/50
                  border border-gray-200 dark:border-gray-700
                  focus:border-blue-500 dark:focus:border-blue-400
                  focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-blue-400/20
                  outline-none transition-all duration-300
                  hover:shadow-lg hover:shadow-blue-500/5"
              />
              <motion.input
                whileFocus={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                type="email"
                placeholder="Your Email"
                required
                name="email"
                className="w-full px-6 py-4 rounded-xl bg-white/50 dark:bg-gray-900/50
                  border border-gray-200 dark:border-gray-700
                  focus:border-blue-500 dark:focus:border-blue-400
                  focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-blue-400/20
                  outline-none transition-all duration-300
                  hover:shadow-lg hover:shadow-blue-500/5"
              />
            </div>

            <motion.textarea
              whileFocus={{ scale: 1.005 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              rows="6"
              placeholder="Your Message"
              required
              name="message"
              className="w-full px-6 py-4 rounded-xl bg-white/50 dark:bg-gray-900/50
                border border-gray-200 dark:border-gray-700
                focus:border-blue-500 dark:focus:border-blue-400
                focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-blue-400/20
                outline-none transition-all duration-300 mb-8
                hover:shadow-lg hover:shadow-blue-500/5"
            />

            <div className="flex justify-end w-full">
              <motion.button
                whileHover={{ scale: 1.02, translateY: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 15
                }}
                type="submit"
                className="group px-8 py-4 rounded-xl
                  bg-gradient-to-r from-blue-500 to-purple-600
                  hover:from-blue-600 hover:to-purple-700
                  text-white font-medium text-lg
                  transition-all duration-300
                  hover:shadow-xl hover:shadow-blue-500/25
                  flex items-center justify-center gap-2
                  relative overflow-hidden"
              >
                <span className="relative z-10">Send Message</span>
                <motion.svg
                  className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 relative z-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </motion.svg>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>

      {/* Loading Overlay */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-white/50 dark:bg-gray-900/50 
              backdrop-blur-sm flex items-center justify-center z-50"
          >
            <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent
              rounded-full animate-spin" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  )
}

export default Contact

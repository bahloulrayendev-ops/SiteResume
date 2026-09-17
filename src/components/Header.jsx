import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail } from 'lucide-react';

const Header = () => {
  return (
    <motion.header 
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-teal-500/10 via-transparent to-transparent" />
      
      <div className="relative max-w-6xl w-full mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-500" />
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-teal-500/50">
              <img 
                src="/image.jpg"
                alt="Bahloul Mohamed Rayen"
                className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
              />
            </div>
          </motion.div>

          {/* Profile Info */}
          <motion.div 
            className="flex-1 text-center lg:text-left space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div>
              <motion.h1 
                className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-2 bg-gradient-to-r from-white via-teal-100 to-white bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                BAHLOUL MOHAMED
              </motion.h1>
              <motion.h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-teal-400"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                RAYEN
              </motion.h2>
            </div>

            <motion.div 
              className="h-1 w-24 bg-gradient-to-r from-teal-500 to-cyan-500 mx-auto lg:mx-0"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            />

            <motion.p 
              className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              Computer Systems Engineering student with a solid foundation in programming, 
              problem-solving, and a strong interest in programming and development. 
              Comfortable working in teams, learning new technologies, and explaining 
              technical concepts. Motivated to grow professionally while contributing to 
              real-world technical projects.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <a 
                href="tel:+21628354645"
                className="group flex items-center gap-3 px-6 py-3 bg-slate-800/50 hover:bg-slate-800 border border-teal-500/30 hover:border-teal-500 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="w-5 h-5 text-teal-400 group-hover:animate-pulse" />
                <span className="font-medium">+216 28 354 645</span>
              </a>
              <a 
                href="mailto:Bahloul.Rayen.Dev@gmail.com"
                className="group flex items-center gap-3 px-6 py-3 bg-slate-800/50 hover:bg-slate-800 border border-teal-500/30 hover:border-teal-500 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                <Mail className="w-5 h-5 text-teal-400 group-hover:animate-pulse" />
                <span className="font-medium">Bahloul.Rayen.Dev@gmail.com</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, Download } from 'lucide-react';

const StickyNav = ({ show }) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur-lg border-b border-teal-500/20 shadow-lg"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-white">Bahloul Mohamed Rayen</h2>
                <p className="text-sm text-teal-400">Computer Systems Engineering</p>
              </div>
              
              <div className="flex items-center gap-3 sm:gap-4">
                <a
                  href="/ATS-Friendly%20Resume.pdf"
                  download="Bahloul-Mohamed-Rayen-ATS-Resume.pdf"
                  className="flex items-center gap-2 px-3 py-2 bg-teal-500 hover:bg-teal-400 text-slate-950 text-sm font-semibold rounded-lg transition-colors"
                  aria-label="Download ATS resume as PDF"
                >
                  <Download className="w-4 h-4" />
                  <span>Resume PDF</span>
                </a>
                <div className="hidden sm:flex items-center gap-4">
                <a 
                  href="tel:+21628354645"
                  className="flex items-center gap-2 text-sm text-gray-300 hover:text-teal-400 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>+216 28 354 645</span>
                </a>
                <a 
                  href="mailto:Bahloul.Rayen.Dev@gmail.com"
                  className="flex items-center gap-2 text-sm text-gray-300 hover:text-teal-400 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>Bahloul.Rayen.Dev@gmail.com</span>
                </a>
                </div>
              </div>
            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default StickyNav;
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { User } from 'lucide-react';

const ProfileSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm rounded-2xl p-8 sm:p-10 border border-teal-500/20 shadow-2xl hover:shadow-teal-500/10 transition-shadow duration-500"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-teal-500/10 rounded-lg border border-teal-500/30">
              <User className="w-6 h-6 text-teal-400" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Profile</h2>
          </div>
          
          <div className="h-1 w-20 bg-gradient-to-r from-teal-500 to-cyan-500 mb-6" />
          
          <motion.p 
            className="text-lg text-gray-300 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Computer Systems Engineering student with a solid foundation in programming, 
            problem-solving, and a strong interest in programming and development. 
            Comfortable working in teams, learning new technologies, and explaining 
            technical concepts. Motivated to grow professionally while contributing to 
            real-world technical projects.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProfileSection;
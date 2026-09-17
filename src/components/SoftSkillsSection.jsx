import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Lightbulb, Users, MessageSquare, Zap, Clock, Target } from 'lucide-react';

const SoftSkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const skills = [
    { name: "Teamwork & Collaboration", icon: Users },
    { name: "Communication Skills", icon: MessageSquare },
    { name: "Adaptability & Quick Learning", icon: Zap },
    { name: "Time Management", icon: Clock },
    { name: "Problem-Solving Mindset", icon: Target }
  ];

  return (
    <section ref={ref} className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 bg-teal-500/10 rounded-lg border border-teal-500/30">
              <Lightbulb className="w-7 h-7 text-teal-400" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Soft Skills</h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative overflow-hidden bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-teal-500/20 hover:border-teal-500/50 shadow-lg hover:shadow-teal-500/30 transition-all duration-300 hover:scale-105 cursor-pointer"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />
                  
                  <div className="relative flex items-center gap-4">
                    <div className="flex-shrink-0 p-3 bg-teal-500/10 rounded-lg border border-teal-500/30 group-hover:bg-teal-500/20 transition-colors">
                      <Icon className="w-6 h-6 text-teal-400" />
                    </div>
                    <span className="text-white font-medium group-hover:text-teal-400 transition-colors">
                      {skill.name}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SoftSkillsSection;
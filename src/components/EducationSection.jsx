import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const education = [
    {
      degree: "Bachelor's Degree in Computer Systems Engineering",
      institution: "ISSATSO Sousse - Tunisia",
      period: "2024 - Present",
      description: "Currently pursuing advanced studies in computer systems engineering, focusing on software development, system architecture, and modern programming paradigms."
    },
    {
      degree: "Baccalaureate in Computer Science",
      institution: "Ibnou Sina High School, Sousse - Tunisia",
      period: "2024",
      honor: "Honor Good",
      description: "Graduated with honors, demonstrating strong foundational knowledge in computer science principles, mathematics, and programming."
    }
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
              <GraduationCap className="w-7 h-7 text-teal-400" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Education</h2>
          </div>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm rounded-xl p-6 sm:p-8 border-l-4 border-teal-500 hover:border-teal-400 shadow-lg hover:shadow-teal-500/20 transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-teal-400 transition-colors">
                      {edu.degree}
                    </h3>
                    <p className="text-teal-400 font-medium mb-1">{edu.institution}</p>
                    <p className="text-gray-400 text-sm">{edu.period}</p>
                  </div>
                  {edu.honor && (
                    <div className="flex items-center gap-2 px-4 py-2 bg-teal-500/10 border border-teal-500/30 rounded-lg">
                      <Award className="w-5 h-5 text-teal-400" />
                      <span className="text-teal-400 font-medium">{edu.honor}</span>
                    </div>
                  )}
                </div>
                <p className="text-gray-300 leading-relaxed">{edu.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
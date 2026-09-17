import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Languages, ExternalLink } from 'lucide-react';

const LanguagesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const languages = [
    { name: "Arabic", level: "Native", proficiency: 100 },
    { name: "English", level: "Very Good (C1)", certification: "Certified by EF SET", proficiency: 90, certificateLink: "https://cert.efset.org/gVWnCW" },
    { name: "French", level: "Good", proficiency: 70 },
    { name: "German", level: "Basic", proficiency: 30 }
  ];

  return (
    <section ref={ref} className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 bg-teal-500/10 rounded-lg border border-teal-500/30">
              <Languages className="w-7 h-7 text-teal-400" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Languages</h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {languages.map((lang, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-teal-500/20 hover:border-teal-500/50 shadow-lg hover:shadow-teal-500/20 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-teal-400 transition-colors">
                      {lang.name}
                    </h3>
                    <p className="text-teal-400 text-sm font-medium">{lang.level}</p>
                    {lang.certification && (
                      <p className="text-gray-400 text-xs mt-1">{lang.certification}</p>
                    )}
                  </div>
                  <span className="text-2xl font-bold text-teal-400">{lang.proficiency}%</span>
                </div>
                
                <div className="relative h-2 bg-slate-700 rounded-full overflow-hidden mb-4">
                  <motion.div
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-teal-500 to-cyan-500"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${lang.proficiency}%` } : { width: 0 }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.3, ease: "easeOut" }}
                  />
                </div>

                {lang.certificateLink && (
                  <a
                    href={lang.certificateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 hover:bg-slate-800 border border-teal-500/30 hover:border-teal-500 rounded-lg text-sm font-medium text-white transition-all duration-300 transform hover:scale-[1.02]"
                  >
                    View Certificate
                    <ExternalLink className="w-4 h-4 text-teal-400" />
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LanguagesSection;
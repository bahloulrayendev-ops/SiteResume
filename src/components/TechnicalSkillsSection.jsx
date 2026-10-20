import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code2, Database, Globe, Cpu, Wrench } from 'lucide-react';

const TechnicalSkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      skills: ["Python", "C", "SQL", "Assembly","Java"]
    },
    {
      title: "Web Technologies",
      icon: Globe,
      skills: ["HTML5", "CSS", "JavaScript", "PHP","React", "Tailwind CSS"]
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["MySQL", "MongoDB","PostgreSQL","XAMPP","SQLDeveloper"]
    },
    {
      title: "Concepts & Paradigms",
      icon: Cpu,
      skills: ["Data Structures", "Object-Oriented Programming"]
    },
    {
      title: "Computer Systems",
      icon: Cpu,
      skills: ["Operating Systems Fundamentals", "Computer Architecture"]
    },
    {
      title: "Tools",
      icon: Wrench,
      skills: ["Microsoft Office", "Google Workspace","Git", "GitHub", "Postman"]
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
              <Code2 className="w-7 h-7 text-teal-400" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Technical Skills</h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((category, categoryIndex) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={categoryIndex}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                  className="group bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-teal-500/20 hover:border-teal-500/50 shadow-lg hover:shadow-teal-500/20 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-teal-500/10 rounded-lg border border-teal-500/30 group-hover:bg-teal-500/20 transition-colors">
                      <Icon className="w-5 h-5 text-teal-400" />
                    </div>
                    <h3 className="text-lg font-bold text-teal-400">{category.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ 
                          duration: 0.3, 
                          delay: categoryIndex * 0.1 + skillIndex * 0.05 
                        }}
                        className="px-3 py-1.5 bg-slate-800/80 border border-teal-500/30 rounded-lg text-sm text-gray-300 hover:bg-teal-500/10 hover:text-teal-400 hover:border-teal-500/50 transition-all duration-200 cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
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

export default TechnicalSkillsSection;
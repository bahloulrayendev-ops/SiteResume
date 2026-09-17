import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FolderGit2, Brain, Building2 } from 'lucide-react';

const ProjectSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const projects = [
{
  title: "Clever",
  subtitle: "Student Productivity & Development Platform",
  icon: Brain,
  description: [
    "Developed an all-in-one platform providing students with tools for academic planning, organization and personal development",
    "Implemented features including calendar management, AI-powered chats, goal roadmaps and academic average calculators",
    "Created an opportunities feed featuring conferences, hackathons and activities to help students develop their skills and improve their resumes"
  ]
},
{
  title: "Ceremony & Conference Hall Management System",
  subtitle: "Management & Reservation Web Platform",
  icon: Building2,
  description: [
    "Developed a web-based platform for managing ceremony and conference halls, reservations and daily operations",
    "Implemented features for employee management, work schedules, task organization, and financial tracking",
    "Centralized hall management and administrative operations through an organized and user-friendly interface"
  ]
}
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
              <FolderGit2 className="w-7 h-7 text-teal-400" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Personal Projects</h2>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-teal-500 via-teal-400 to-teal-500 hidden sm:block" />

            <div className="space-y-8 sm:ml-12">
              {projects.map((project, index) => {
                const Icon = project.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="relative"
                  >
                    {/* Timeline Dot */}
                    <div className="absolute -left-14 top-6 w-6 h-6 bg-teal-500 rounded-full border-4 border-slate-900 shadow-lg shadow-teal-500/50 hidden sm:block" />

                    <div className="group bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-teal-500/20 hover:border-teal-500/50 shadow-lg hover:shadow-teal-500/20 transition-all duration-300 hover:scale-[1.02]">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="flex-shrink-0 p-3 bg-teal-500/10 rounded-lg border border-teal-500/30 group-hover:bg-teal-500/20 transition-colors">
                          <Icon className="w-6 h-6 text-teal-400" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 group-hover:text-teal-400 transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-teal-400 font-medium">{project.subtitle}</p>
                        </div>
                      </div>

                      <ul className="space-y-2 ml-16">
                        {project.description.map((item, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                            transition={{ duration: 0.4, delay: index * 0.2 + i * 0.1 }}
                            className="flex items-start gap-3 text-gray-300"
                          >
                            <span className="flex-shrink-0 w-1.5 h-1.5 bg-teal-400 rounded-full mt-2" />
                            <span>{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectSection;
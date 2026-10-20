import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase,Server, Code, Users,Database } from 'lucide-react';

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const experiences = [
        {
      title: "Backend Developer Intern",
      subtitle: "DataInfo",
      period: "Septembre 2026",
      place:"Cairo, Egypt",
      icon: Database,
      description: [
        "Developed the complete backend of a token-based business contact data platform",
        "Built REST APIs secured with JWT authentication, with dynamic multi-filter search, pagination and company and people detail endpoints",
        "Designed the PostgreSQL database and JPA entity model, and implemented the token-system, pay-per-contact unlocks tracking"
      ]
    },
            {
      title: "Global Volunteer",
      subtitle: "AIESEC",
      period: "Septembre 2026–Octobre 2026",
      place:"Cairo, Egypt",
      icon: Database,
      description: [
        "Developed global leadership, cross-cultural communication, and adaptability while working in a multicultural environment",
        "Collaborated with an international team to deliver community-focused training and skill-development workshops under the Skill Up project",
        "Facilitated cross-cultural exchange, practical problem-solving, and team coordination to achieve project goals within fixed timelines"
      ]
    },
    {
      title: "Web Development Intern",
      subtitle: "WhiteCape",
      period: "July 2026",
      place:"Sousse, Tunisia",
      icon: Server,
      description: [
        "Developed the complete backend of a ceremony and conference hall management system",
        "Designed and implemented backend functionality for hall management, reservations, employees, schedules, tasks and financial tracking",
        "Collaborated with a frontend developer to integrate and test the system using Git, GitHub and Postman"
      ]
    },
    {
      title: "Member",
      subtitle: "Google Developer Groups on Campus",
      period: "2024 - Present",
      place:"Sousse, Tunisia",
      icon: Code,
      description: [
        "Participating in a team-based hackathon",
        "Collaborating with team members to develop solutions under time constraints",
      ]
    },
    {
      title: "Team Leader",
      subtitle: "Lyna Ceremony Hall",
      period: "2023 - Present",
      place:"M'saken, Tunisia",
      icon: Users,
      description: [
        "Worked in a high-pressure event environment",
        "Coordinated with team members to ensure smooth and timely service",
        "Demonstrated leadership and organizational skills in managing team dynamics"
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
              <Briefcase className="w-7 h-7 text-teal-400" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Experience & Activities</h2>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-teal-500 via-teal-400 to-teal-500 hidden sm:block" />

            <div className="space-y-8 sm:ml-12">
              {experiences.map((exp, index) => {
                const Icon = exp.icon;
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
                            {exp.title}
                          </h3>
                          <p className="text-teal-400 font-medium">{exp.subtitle}</p>
                          <p className="text-gray-400 text-sm mt-1">{exp.period}</p>
                          <p className="text-gray-400 text-sm mt-1">{exp.place}</p>
                        </div>
                      </div>

                      <ul className="space-y-2 ml-16">
                        {exp.description.map((item, i) => (
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

export default ExperienceSection;
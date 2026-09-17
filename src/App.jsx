import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { motion, useScroll, useTransform } from 'framer-motion';
import Header from './components/Header';
import StickyNav from './components/StickyNav';
import ProfileSection from './components/ProfileSection';
import EducationSection from './components/EducationSection';
import LanguagesSection from './components/LanguagesSection';
import SoftSkillsSection from './components/SoftSkillsSection';
import ExperienceSection from './components/ExperienceSection';
import TechnicalSkillsSection from './components/TechnicalSkillsSection';
import ProjectSection from './components/ProjectSection';
import Footer from './components/Footer';
import { Toaster } from './components/ui/toaster';

function App() {
  const [showStickyNav, setShowStickyNav] = useState(false);
  const lastScrollY = useRef(0);
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollingDown = currentScrollY > lastScrollY.current && currentScrollY > 400;

      setShowStickyNav(scrollingDown);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Helmet>
        <title>Bahloul Mohamed Rayen - Computer Systems Engineering Student</title>
        <meta 
          name="description" 
          content="Portfolio of Bahloul Mohamed Rayen, Computer Systems Engineering student with expertise in web development, programming, and team collaboration." 
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-x-hidden">
        {/* Animated Background Pattern */}
        <motion.div 
          className="fixed inset-0 opacity-5 pointer-events-none"
          style={{ y: backgroundY }}
        >
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #14b8a6 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }} />
        </motion.div>

        <StickyNav show={showStickyNav} />
        
        <main className="relative">
          <Header />
          <ProfileSection />
          <EducationSection />
          <ExperienceSection />
          <ProjectSection />
          <LanguagesSection />
          <TechnicalSkillsSection />
          <SoftSkillsSection />
          <Footer />
        </main>

        <Toaster />
      </div>
    </>
  );
}

export default App;
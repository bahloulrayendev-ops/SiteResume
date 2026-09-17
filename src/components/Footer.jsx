import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Linkedin, Instagram, Facebook } from 'lucide-react';
import { useToast } from './ui/use-toast';

const Footer = () => {
  const { toast } = useToast();

  const handleSocialClick = (platform) => {
    toast({
      title: "🚧 Feature Not Implemented",
      description: `${platform} link isn't available yet—but you can request it in your next prompt! 🚀`,
    });
  };

  return (
    <footer className="relative py-12 px-4 sm:px-6 lg:px-8 border-t border-teal-500/20 bg-slate-950/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-bold text-white mb-4">Contact</h3>
            <div className="space-y-3">
              <a 
                href="tel:+21628354645"
                className="flex items-center gap-3 text-gray-300 hover:text-teal-400 transition-colors group"
              >
                <Phone className="w-5 h-5 group-hover:animate-pulse" />
                <span>+216 28 354 645</span>
              </a>
              <a 
                href="mailto:Bahloul.Rayen.Dev@gmail.com"
                className="flex items-center gap-3 text-gray-300 hover:text-teal-400 transition-colors group"
              >
                <Mail className="w-5 h-5 group-hover:animate-pulse" />
                <span>Bahloul.Rayen.Dev@gmail.com</span>
              </a>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold text-white mb-4">Connect</h3>
            <div className="flex gap-4">
              {/* LinkedIn link */}
              <a
                href="https://www.linkedin.com/in/faze-rayen-273884334/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 hover:bg-teal-500/20 border border-teal-500/30 hover:border-teal-500 rounded-lg transition-all duration-300 transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-teal-400" />
              </a>
              {/* Instagram link */}
              <a
                href="https://www.instagram.com/rayen__bhl/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 hover:bg-teal-500/20 border border-teal-500/30 hover:border-teal-500 rounded-lg transition-all duration-300 transform hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-teal-400" />
              </a>
              {/* Facebook link */}
              <a
                href="https://www.facebook.com/rayen.bhl.5/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 hover:bg-teal-500/20 border border-teal-500/30 hover:border-teal-500 rounded-lg transition-all duration-300 transform hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-teal-400" />
              </a>
            </div>
          </motion.div>

          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="sm:col-span-2 lg:col-span-1"
          >
            <h3 className="text-xl font-bold text-white mb-4">About</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Computer Systems Engineering student passionate about technology, 
              programming, and continuous learning. Always eager to take on new 
              challenges and contribute to meaningful projects.
            </p>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 pt-8 border-t border-teal-500/20 text-center"
        >
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Bahloul Mohamed Rayen. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black text-white pt-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <h1 className="text-6xl font-bold leading-tight">
            Hi, I'm <span className="text-blue-500">Your Name</span>
            <br />
            Full Stack Developer
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            I build exceptional digital experiences that combine beautiful design with efficient functionality.
            Specialized in creating modern web applications with cutting-edge technologies.
          </p>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex gap-6"
          >
            <a 
              href="#projects"
              className="group flex items-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-colors"
            >
              View My Work
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            <a 
              href="#contact"
              className="flex items-center gap-2 border border-gray-700 text-white px-6 py-3 rounded-full hover:bg-white/10 transition-colors"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
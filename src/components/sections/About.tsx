import React from 'react';
import { motion } from 'framer-motion';

export function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-[#FF7757] rounded-3xl -rotate-6" />
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"
              alt="Peter's portrait"
              className="relative rounded-3xl w-full aspect-[3/4] object-cover"
            />
          </div>
          
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
              About Me
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              With over 16 years of experience in web development, I specialize in creating 
              beautiful, functional, and user-centered digital experiences. My approach 
              combines technical expertise with creative problem-solving to deliver 
              solutions that exceed expectations.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm passionate about staying current with emerging technologies and best 
              practices, ensuring that every project I undertake benefits from the latest 
              innovations in web development.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
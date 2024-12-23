import React from 'react';
import { Code, Palette, Cpu } from 'lucide-react';

const skills = [
  {
    icon: Code,
    title: 'Frontend Development',
    description: 'Creating responsive and interactive user interfaces with modern frameworks.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS']
  },
  {
    icon: Cpu,
    title: 'Backend Development',
    description: 'Building scalable server-side applications and APIs.',
    technologies: ['Node.js', 'Express', 'PostgreSQL']
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Designing intuitive and beautiful user experiences.',
    technologies: ['Figma', 'Adobe XD', 'Prototyping']
  }
];

export function Skills() {
  return (
    <div className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12">Skills</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all"
            >
              <skill.icon className="h-12 w-12 text-[#FF7757] mb-6" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {skill.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {skill.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {skill.technologies.map((tech, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
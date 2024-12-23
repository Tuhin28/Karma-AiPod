import React from 'react';
import { Trophy, Users, Code } from 'lucide-react';
import { StatModal } from '../ui/StatModal';

const stats = [
  {
    icon: Trophy,
    number: "150+",
    label: "Projects Completed",
    description: "Successfully delivered digital solutions",
    details: [
      "60+ E-commerce Platforms",
      "45+ Corporate Websites",
      "30+ Mobile Applications",
      "15+ Enterprise Solutions"
    ]
  },
  {
    icon: Users,
    number: "2k+",
    label: "Happy Clients",
    description: "Satisfied customers worldwide",
    details: [
      "500+ Long-term Partnerships",
      "98% Client Satisfaction Rate",
      "85% Repeat Business Rate",
      "40+ Countries Served"
    ]
  },
  {
    icon: Code,
    number: "16+",
    label: "Years Experience",
    description: "Deep industry expertise",
    details: [
      "Full-stack Development",
      "UI/UX Design",
      "Project Management",
      "Technical Leadership"
    ]
  }
];

export function Stats() {
  const [selectedStat, setSelectedStat] = React.useState<typeof stats[0] | null>(null);

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <button
              key={index}
              onClick={() => setSelectedStat(stat)}
              className="group bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <stat.icon className="w-12 h-12 text-[#FF7757] mx-auto mb-4" />
              <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                {stat.number}
              </h3>
              <p className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {stat.label}
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                {stat.description}
              </p>
            </button>
          ))}
        </div>
      </div>

      <StatModal
        stat={selectedStat}
        isOpen={!!selectedStat}
        onClose={() => setSelectedStat(null)}
      />
    </section>
  );
}
import React from 'react';
import { Trophy, Users, Clock } from 'lucide-react';

export function Stats() {
  return (
    <div className="py-20 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Trophy,
              number: "150+",
              label: "Completed Projects",
              description: "Successfully delivered digital solutions"
            },
            {
              icon: Users,
              number: "2k+",
              label: "Satisfied Clients",
              description: "Happy customers worldwide"
            },
            {
              icon: Clock,
              number: "16+",
              label: "Years Experience",
              description: "Deep industry expertise"
            }
          ].map((stat, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl text-center hover:shadow-lg transition-shadow"
            >
              <stat.icon className="w-12 h-12 text-[#FF7757] mx-auto mb-4" />
              <h3 className="text-4xl font-bold text-[#333333] mb-2">{stat.number}</h3>
              <p className="text-xl font-semibold text-[#333333] mb-2">{stat.label}</p>
              <p className="text-gray-600">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
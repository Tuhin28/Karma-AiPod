import React from 'react';
import { Brain, Zap, Shield, Users } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Advanced AI',
    description: 'Cutting-edge machine learning algorithms for intelligent decision making'
  },
  {
    icon: Zap,
    title: 'Real-time Processing',
    description: 'Lightning-fast data processing and instant insights'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-grade security with advanced encryption'
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Seamless integration with your existing workflow'
  }
];

export function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Powerful Features
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all"
            >
              <feature.icon className="h-12 w-12 text-[#FF7757] mb-6" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
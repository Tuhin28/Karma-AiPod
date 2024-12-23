import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '$49',
    features: [
      'Basic AI Processing',
      '5 Team Members',
      '10GB Storage',
      'Email Support'
    ]
  },
  {
    name: 'Professional',
    price: '$99',
    features: [
      'Advanced AI Features',
      'Unlimited Team Members',
      '100GB Storage',
      '24/7 Priority Support',
      'Custom Integration'
    ]
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    features: [
      'Full AI Suite',
      'Dedicated Resources',
      'Unlimited Storage',
      'Dedicated Support Team',
      'Custom Development',
      'SLA Guarantee'
    ]
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Simple, Transparent Pricing
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {plan.name}
              </h3>
              <p className="text-4xl font-bold text-[#FF7757] mb-6">
                {plan.price}
                {plan.price !== 'Custom' && <span className="text-lg text-gray-600 dark:text-gray-300">/month</span>}
              </p>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-[#FF7757]" />
                    <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full bg-[#FF7757] text-white px-8 py-3 rounded-lg hover:bg-[#ff8f75] transition-colors">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
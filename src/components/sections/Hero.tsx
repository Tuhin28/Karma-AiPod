import React from 'react';
import { Download, ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <div className="min-h-screen pt-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white">
            Hello, I'm Peter
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            I create functional and visually engaging digital solutions that help businesses 
            grow and succeed in the modern digital landscape.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="flex items-center gap-2 bg-[#FF7757] text-white px-8 py-3 rounded-full hover:bg-[#ff8f75] transition-colors">
              Work with me
              <ArrowRight className="h-5 w-5" />
            </button>
            <button className="flex items-center gap-2 border-2 border-[#FF7757] text-[#FF7757] px-8 py-3 rounded-full hover:bg-[#FF7757] hover:text-white transition-colors">
              Download Resume
              <Download className="h-5 w-5" />
            </button>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-[#FF7757] rounded-3xl -rotate-6"></div>
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"
            alt="Peter's portrait"
            className="relative rounded-3xl w-full h-[600px] object-cover"
          />
        </div>
      </div>
    </div>
  );
}
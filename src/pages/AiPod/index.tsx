import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Showcase } from './components/Showcase';
import { Pricing } from './components/Pricing';
import { Contact } from '../../components/sections/Contact';

export function AiPod() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <Header />
      <main>
        <Hero />
        <Features />
        <Showcase />
        <Pricing />
        <Contact />
      </main>
    </div>
  );
}
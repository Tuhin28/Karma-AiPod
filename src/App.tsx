import React from 'react';
import { Header } from './components/layout/Header';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Contact } from './components/sections/Contact';
import { AiPod } from './pages/AiPod';

function App() {
  // For demo purposes, let's add a simple route toggle
  const [showAiPod, setShowAiPod] = React.useState(false);

  if (showAiPod) {
    return <AiPod />;
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <Header />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <button
        onClick={() => setShowAiPod(true)}
        className="fixed bottom-8 right-8 bg-[#FF7757] text-white px-6 py-3 rounded-full hover:bg-[#ff8f75] transition-colors"
      >
        View AI Pod
      </button>
    </div>
  );
}

export default App;
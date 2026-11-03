import React from 'react';
import { NetworkScene } from './components/NetworkScene';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { useScrollReveal } from './hooks/useScrollReveal';

export const App: React.FC = () => {
  useScrollReveal();

  return (
    <>
      {/* 3D Network Topology Canvas */}
      <NetworkScene />

      {/* Custom Precision Cursor */}
      <CustomCursor />

      {/* Global Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Main Content */}
      <main>
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default App;

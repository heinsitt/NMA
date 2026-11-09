import React from 'react';
import { DottedMatrixCanvas } from './components/DottedMatrixCanvas';
import { Navbar } from './components/Navbar';
import { SubHeaderBar } from './components/SubHeaderBar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { TechStackTools } from './components/TechStackTools';
import { EducationCertifications } from './components/EducationCertifications';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ContactSection } from './components/ContactSection';
import { CustomCursor } from './components/CustomCursor';
import { ScrollProgressIndicator } from './components/ScrollProgressIndicator';
import { SectionDivider } from './components/SectionDivider';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#060606] text-white selection:bg-white selection:text-black relative">
      {/* Precision Telemetry Custom Cursor */}
      <CustomCursor />

      {/* Subtle Vertical Scroll Progress Indicator & Waypoint HUD */}
      <ScrollProgressIndicator />

      {/* Interactive Dotted Matrix Background */}
      <DottedMatrixCanvas />

      {/* Navigation Bar & Info Ticker */}
      <Navbar />
      <SubHeaderBar />

      {/* Main Portfolio Sections */}
      <main className="relative z-10">
        {/* Hero Section */}
        <Hero />

        {/* Divider 01: Hero -> About */}
        <SectionDivider index="01" label="ABOUT & PROFILE" delay={0} />

        {/* 01: About Section */}
        <About />

        {/* Divider 02: About -> Tech Stack */}
        <SectionDivider index="02" label="TECH STACK & TOOLS" reverse delay={0.6} />

        {/* 02: Tech Stack & Tools Section (Continuous alternating marquees) */}
        <TechStackTools />

        {/* Divider 03: Tech Stack -> Education */}
        <SectionDivider index="03" label="EDUCATION & CERTIFICATIONS" delay={1.2} />

        {/* 03: Education & Certifications Section (Scroll-driven pinned horizontal slide) */}
        <EducationCertifications />

        {/* Divider 04: Education -> Projects */}
        <SectionDivider index="04" label="CLOUD PROJECTS & LABS" reverse delay={1.8} />

        {/* 04: Cloud Architecture & Lab Projects Section */}
        <ProjectsSection />

        {/* Divider 05: Projects -> Experience */}
        <SectionDivider index="05" label="CAREER & NOC OPERATIONS" delay={2.4} />

        {/* 05: Experience & NOC Operations Section */}
        <ExperienceSection />

        {/* Divider 06: Experience -> Contact */}
        <SectionDivider index="06" label="CONNECT & COLLABORATE" reverse delay={3.0} />

        {/* 06: Contact & Dispatch Section */}
        <ContactSection />
      </main>

      {/* Minimal Footer */}
      <footer className="border-t border-white/10 py-8 bg-[#050505] relative z-10 font-mono text-xs text-neutral-500">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 flex flex-col sm:flex-row justify-between items-center gap-4 uppercase tracking-widest">
          <span>© 2026 NAING MOE AUNG · ALL RIGHTS RESERVED</span>
          <span>BIM GROUP OF COMPANIES • WAVEMONEY</span>
        </div>
      </footer>
    </div>
  );
};

export default App;

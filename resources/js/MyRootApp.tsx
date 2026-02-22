import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ChatBot from './components/ChatBot';
import Navigation from './components/Navigation';
import Experince from './components/Experience';
import Education from './components/Education';
import { EDUCATION, EXPERIENCES, PERSONAL_INFO, PROJECTS, SKILLS } from './utils/constants';

function App() {
  return (
    <div className="min-h-screen bg-[#0F172A] text-[#E5E7EB] selection:bg-[#38BDF8]/30 selection:text-white">
    <Navigation />
    <Hero />

    {/* About Section */}
    <About />

    {/* Projects Section */}
   <Projects />

    {/* Skills Section */}
   <Skills />

    {/* Experience Section */}
   <Experince />

    {/* Education Section */}
   <Education />

    {/* Contact Section */}
   <Contact />

    {/* Footer */}
    <footer className="py-16 border-t border-slate-800 bg-[#0B1120]">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-2xl font-black text-[#38BDF8] mb-6">AM.</p>
        <p className="text-slate-400 font-medium">© {new Date().getFullYear()} {PERSONAL_INFO.name}.</p>
        <p className="text-xs text-slate-500 mt-4 uppercase tracking-[0.2em]">{PERSONAL_INFO.location} • Front End and Back End Developer</p>
      </div>
    </footer>

    {/* AI Assistant */}
    <ChatBot />
  </div>
  );
}

export default App;

import React from 'react';
import { PERSONAL_INFO } from '../utils/constants';

const Hero: React.FC = () => {
  return (
    <header id="home" className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      <div className="text-center relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#38BDF8]/10 blur-[120px] rounded-full -z-10 animate-pulse"></div>
        <div className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wide text-[#38BDF8] uppercase bg-[#38BDF8]/10 border border-[#38BDF8]/20 rounded-full animate-fade-in">
          Available for Opportunities
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold text-[#E5E7EB] tracking-tight mb-4 leading-[1.1]">
          {PERSONAL_INFO.name.split(' ')[0]}{' '}
          <span className="text-[#38BDF8]">{PERSONAL_INFO.name.split(' ')[1]}</span>
        </h1>
        <p className="text-xl md:text-2xl text-[#94A3B8] max-w-2xl mx-auto font-normal leading-relaxed">
          {PERSONAL_INFO.title}
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a href="#contact" className="px-8 py-4 bg-[#38BDF8] text-[#0F172A] rounded-full font-bold shadow-xl shadow-[#38BDF8]/20 hover:bg-sky-400 transition-all hover:-translate-y-1 active:scale-95">
            Hire Me
          </a>
          <a
            href={PERSONAL_INFO.cvUrl}
            className="px-8 py-4 bg-slate-800 text-[#E5E7EB] border border-slate-700 rounded-full font-bold hover:bg-slate-700 transition-all hover:-translate-y-1 active:scale-95 flex items-center gap-2"
            download
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download CV
          </a>
          <a href="#projects" className="px-8 py-4 bg-transparent text-[#38BDF8] border border-[#38BDF8]/30 rounded-full font-bold hover:bg-[#38BDF8]/5 transition-all hover:-translate-y-1 active:scale-95">
            View Projects
          </a>
        </div>
      </div>
    </header>
  );
};

export default Hero;

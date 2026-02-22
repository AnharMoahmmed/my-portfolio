import React from 'react';
import { EDUCATION } from '../utils/constants';

const Hero: React.FC = () => {
  return (
    <section id="education" className="py-24 bg-[#0B1120] px-4 sm:px-6 lg:px-8 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#E5E7EB] tracking-tight">Academic Background</h2>
          <div className="h-1.5 w-24 bg-[#38BDF8] rounded-full mt-4"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {EDUCATION.map((edu, idx) => (
            <div key={idx} className="bg-[#1E293B] p-10 rounded-[2.5rem] shadow-xl border border-slate-800 hover:border-[#38BDF8]/30 transition-all hover:-translate-y-2">
              <div className="w-12 h-12 bg-[#38BDF8] rounded-2xl flex items-center justify-center text-[#0F172A] mb-6 shadow-lg shadow-[#38BDF8]/20">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M10.394 2.827a1 1 0 00-.788 0l-7 3a1 1 0 000 1.848l7 3a1 1 0 00.788 0l7-3a1 1 0 000-1.848l-7-3zM14 11.595l-3.394 1.455a3 3 0 01-2.606 0L4.606 11.595 10 14.122l5.394-2.527zM16.455 15.606l-6.455 2.582L3.545 15.606 3 13.606l7 3.5 7-3.5-.545 2z"/></svg>
              </div>
              <h3 className="text-2xl font-extrabold text-[#E5E7EB] mb-2 leading-tight">{edu.degree}</h3>
              <p className="text-[#38BDF8] font-bold text-sm uppercase tracking-widest mb-4">{edu.period}</p>
              <div className="space-y-1">
                 <p className="text-[#94A3B8] font-bold">{edu.institution}</p>
                 <p className="text-slate-500 text-sm font-medium">{edu.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;

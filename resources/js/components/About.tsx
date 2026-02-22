import React from 'react';
import { PERSONAL_INFO } from '../utils/constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto scroll-mt-20">
    <div className="bg-[#1E293B] rounded-[2.5rem] p-8 md:p-16 shadow-2xl border border-slate-800">
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-4xl font-extrabold text-[#E5E7EB]">About Me</h2>
        <div className="h-px flex-1 bg-slate-800 rounded-full"></div>
      </div>
      <p className="text-xl text-[#94A3B8] leading-relaxed mb-10 font-medium italic">
        "{PERSONAL_INFO.objective}"
      </p>
      <div className="grid md:grid-cols-2 gap-10 mt-12">
        <div className="p-6 rounded-2xl bg-[#0F172A] border border-slate-800">
          <h3 className="text-xs font-extrabold text-[#38BDF8] uppercase tracking-[0.2em] mb-4">Communication</h3>
          <p className="text-[#E5E7EB] font-medium leading-relaxed opacity-90">{PERSONAL_INFO.communication}</p>
        </div>
        <div className="p-6 rounded-2xl bg-[#0F172A] border border-slate-800">
          <h3 className="text-xs font-extrabold text-[#38BDF8] uppercase tracking-[0.2em] mb-4">Leadership</h3>
          <p className="text-[#E5E7EB] font-medium leading-relaxed opacity-90">{PERSONAL_INFO.leadership}</p>
        </div>
      </div>
    </div>
  </section>
  );
};

export default About;

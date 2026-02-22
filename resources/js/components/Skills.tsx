import React from 'react';
import { SKILLS } from '../utils/constants';



const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-[#0B1120] text-white overflow-hidden scroll-mt-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#38BDF8]/5 blur-[120px] rounded-full -z-10"></div>
      <h2 className="text-4xl md:text-5xl font-extrabold mb-16 tracking-tight">Technical <span className="text-[#38BDF8]">Arsenal</span></h2>
      <div className="flex flex-wrap justify-center gap-4 md:gap-6">
        {SKILLS.map((skill) => (
          <div
            key={skill.name}
            className="group px-8 py-4 bg-[#1E293B] rounded-2xl border border-slate-800 text-slate-300 font-bold hover:border-[#38BDF8] hover:text-[#38BDF8] transition-all duration-300 cursor-default hover:scale-105 shadow-lg"
          >
            {skill.name}
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};

export default Skills;

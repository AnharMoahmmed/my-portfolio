import React from 'react';
import { EXPERIENCES } from '../utils/constants';

const Hero: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto scroll-mt-20">
      <div className="flex items-center gap-6 mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#E5E7EB] tracking-tight">Experience</h2>
        <div className="h-px flex-1 bg-slate-800"></div>
      </div>

      <div className="space-y-20">
        {EXPERIENCES.map((exp, idx) => (
          <div key={idx} className="relative group">
            <div className="grid md:grid-cols-[1fr_2.5fr] gap-8">
              <div className="md:text-right">
                <span className="inline-block px-4 py-1.5 bg-[#38BDF8]/10 text-[#38BDF8] border border-[#38BDF8]/20 rounded-full text-sm font-bold mb-4">
                  {exp.period}
                </span>
                <p className="text-[#94A3B8] font-bold tracking-wide uppercase text-xs">{exp.company}</p>
              </div>
              <div>
                <h3 className="text-3xl font-extrabold text-[#E5E7EB] mb-6 group-hover:text-[#38BDF8] transition-colors">{exp.title}</h3>
                <ul className="space-y-5">
                  {exp.responsibilities.map((resp, ridx) => (
                    <li key={ridx} className="flex items-start text-[#94A3B8] leading-relaxed text-lg">
                      <span className="mr-4 mt-1.5 flex-shrink-0 w-2 h-2 rounded-full bg-[#38BDF8]"></span>
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;

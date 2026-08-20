import React from 'react';
import { FileDown, FileText, CheckCircle2, ShieldCheck, Mail, Phone, ExternalLink, Sparkles } from 'lucide-react';
import { personalProfile } from '../data/portfolioData';
import { SectionHeading } from '../components/SectionHeading';
import { TiltCard } from '../components/TiltCard';

export const ResumeSection: React.FC = () => {
  return (
    <section id="resume" className="py-24 px-4 sm:px-6 lg:px-8 bg-dark-900/30 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="Curriculum Vitae"
          title="Resume & Qualifications"
          subtitle="Download my complete technical resume formatted specifically for technical recruiters, engineering directors, and hiring managers."
        />

        <TiltCard
          maxTilt={4}
          glowColor="rgba(16, 185, 129, 0.15)"
          className="max-w-4xl mx-auto rounded-3xl p-8 sm:p-12 glass-panel border border-emerald-500/30 shadow-2xl relative overflow-hidden animated-gradient-border"
        >
          {/* Subtle Background Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
            {/* Left Content */}
            <div className="space-y-4 text-left">
              <div className="w-13 h-13 p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-[0_0_20px_rgba(52,211,153,0.2)]">
                <FileText className="w-7 h-7" />
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-100">
                  {personalProfile.name} — Resume
                </h3>
                <p className="text-sm text-emerald-400 font-mono mt-1 font-semibold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  Java Full Stack Developer (4 Years Enterprise Experience)
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-300 pt-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Java 17 & Spring Boot Microservices</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>U.S. Utility Client Experience (FPL)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>React.js & Vue.js Frontend</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Azure OpenAI & Azure Entra ID</span>
                </div>
              </div>
            </div>

            {/* Right Download CTA */}
            <div className="flex flex-col items-center sm:items-end gap-3 shrink-0 w-full md:w-auto">
              <a
                href={personalProfile.resumePath}
                download="Munnam-Sateesh-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group inline-flex items-center justify-center gap-3 px-9 py-4 rounded-2xl font-bold text-sm bg-emerald-500 hover:bg-emerald-400 text-dark-950 shadow-xl shadow-emerald-500/25 transition-all hover:scale-[1.05] active:scale-95 w-full sm:w-auto text-center cursor-pointer overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <FileDown className="w-5 h-5" />
                  <span>Download Resume (PDF)</span>
                </span>
                <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              <span className="text-[11px] font-mono text-slate-400">
                PDF Format • Standard ATS-Friendly Layout
              </span>
            </div>
          </div>
        </TiltCard>
      </div>
    </section>
  );
};

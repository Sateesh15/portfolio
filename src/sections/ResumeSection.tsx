import React from 'react';
import { FileDown, FileText, CheckCircle2, ShieldCheck, Mail, Phone, ExternalLink } from 'lucide-react';
import { personalProfile } from '../data/portfolioData';
import { SectionHeading } from '../components/SectionHeading';

export const ResumeSection: React.FC = () => {
  return (
    <section id="resume" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-900/30 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="Curriculum Vitae"
          title="Resume & Qualifications"
          subtitle="Download my complete technical resume formatted specifically for technical recruiters, engineering directors, and hiring managers."
        />

        <div className="max-w-4xl mx-auto rounded-3xl p-8 sm:p-12 glass-panel border border-emerald-500/30 shadow-2xl relative overflow-hidden">
          {/* Subtle Background Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
            {/* Left Content */}
            <div className="space-y-4 text-left">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <FileText className="w-6 h-6" />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-slate-100">
                  {personalProfile.name} — Resume
                </h3>
                <p className="text-sm text-emerald-400 font-mono mt-1">
                  Java Full Stack Developer (4 Years Enterprise Experience)
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300 pt-2">
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
                download
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-sm bg-emerald-500 hover:bg-emerald-600 text-dark-950 shadow-xl shadow-emerald-500/25 transition-all hover:scale-[1.03] active:scale-95 w-full sm:w-auto text-center"
              >
                <FileDown className="w-5 h-5" />
                <span>Download Resume</span>
              </a>

              <span className="text-[11px] font-mono text-slate-400">
                PDF Format • Standard ATS-Friendly Layout
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

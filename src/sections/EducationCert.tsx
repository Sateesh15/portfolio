import React from 'react';
import { GraduationCap, Award, MapPin } from 'lucide-react';
import { educationData, certificationData } from '../data/portfolioData';
import { SectionHeading } from '../components/SectionHeading';
import { TechBadge } from '../components/TechBadge';
import { TiltCard } from '../components/TiltCard';

export const EducationCert: React.FC = () => {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 bg-dark-950 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="Credentials & Academics"
          title="Education & Certifications"
          subtitle="Academic engineering foundation complemented by continuous enterprise training in Java, Spring Boot, and Cloud architectures."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Education Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-8 h-8 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                <GraduationCap className="w-4 h-4" />
              </div>
              <h3 className="text-lg font-bold text-slate-100 font-mono">
                Academic Background
              </h3>
            </div>

            {educationData.map((edu, index) => (
              <TiltCard
                key={index}
                maxTilt={5}
                glowColor="rgba(16, 185, 129, 0.12)"
                className="p-7 rounded-3xl glass-card border border-slate-800 space-y-4 hover:border-emerald-500/40"
              >
                <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                  Undergraduate Degree
                </span>
                <h4 className="text-xl font-bold text-slate-100">
                  {edu.degree}
                </h4>
                <p className="text-sm font-semibold text-slate-300">
                  {edu.field}
                </p>
                <div className="pt-2 text-xs font-mono text-slate-400 space-y-1.5 border-t border-slate-800/80">
                  <div className="text-slate-300 font-medium">
                    <span>{edu.institution}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-500">
                    <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{edu.location}</span>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>

          {/* Certifications Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-8 h-8 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                <Award className="w-4 h-4" />
              </div>
              <h3 className="text-lg font-bold text-slate-100 font-mono">
                Professional Certifications & Training
              </h3>
            </div>

            {certificationData.map((cert, index) => (
              <TiltCard
                key={index}
                maxTilt={5}
                glowColor="rgba(6, 182, 212, 0.12)"
                className="p-7 rounded-3xl glass-card border border-slate-800 space-y-4 hover:border-cyan-500/40"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                    {cert.status}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {cert.issuer}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-slate-100">
                  {cert.name}
                </h4>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {cert.topics.map((topic) => (
                    <TechBadge key={topic} name={topic} variant="subtle" size="sm" />
                  ))}
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

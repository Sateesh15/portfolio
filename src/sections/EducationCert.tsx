import React from 'react';
import { GraduationCap, Award, CheckCircle2, Calendar, MapPin } from 'lucide-react';
import { educationData, certificationData } from '../data/portfolioData';
import { SectionHeading } from '../components/SectionHeading';
import { TechBadge } from '../components/TechBadge';

export const EducationCert: React.FC = () => {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-950 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="Credentials & Academics"
          title="Education & Certifications"
          subtitle="Academic engineering foundation complemented by continuous enterprise training in Java, Spring Boot, and Cloud architectures."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Education Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-2">
              <GraduationCap className="w-5 h-5 text-emerald-400" />
              <h3 className="text-lg font-bold text-slate-100 font-mono">
                Academic Background
              </h3>
            </div>

            {educationData.map((edu, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl glass-card border border-slate-800 space-y-3"
              >
                <span className="inline-block px-2.5 py-0.5 rounded-md text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Undergraduate Degree
                </span>
                <h4 className="text-lg font-bold text-slate-100">
                  {edu.degree}
                </h4>
                <p className="text-sm font-semibold text-slate-300">
                  {edu.field}
                </p>
                <div className="pt-2 text-xs font-mono text-slate-400 space-y-1">
                  <div className="flex items-center gap-1.5 text-slate-300">
                    <span>{edu.institution}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-500">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{edu.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-2">
              <Award className="w-5 h-5 text-cyan-400" />
              <h3 className="text-lg font-bold text-slate-100 font-mono">
                Professional Certifications & Training
              </h3>
            </div>

            {certificationData.map((cert, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl glass-card border border-slate-800 space-y-3"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-block px-2.5 py-0.5 rounded-md text-xs font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    {cert.status}
                  </span>
                  <span className="text-xs font-mono text-slate-500">
                    {cert.issuer}
                  </span>
                </div>
                <h4 className="text-base font-bold text-slate-100">
                  {cert.name}
                </h4>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {cert.topics.map((topic) => (
                    <TechBadge key={topic} name={topic} variant="subtle" size="sm" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

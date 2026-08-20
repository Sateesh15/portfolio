import React from 'react';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  Building2, 
  CheckCircle2, 
  Layers, 
  ExternalLink,
  Sparkles
} from 'lucide-react';
import { experienceData } from '../data/portfolioData';
import { SectionHeading } from '../components/SectionHeading';
import { TechBadge } from '../components/TechBadge';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-900/30 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="Career Journey"
          title="Professional Experience"
          subtitle="4 years of enterprise software engineering experience delivering resilient backend services, cloud architectures, and modern web applications."
        />

        {/* Timeline Container */}
        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-8 md:ml-12 pl-6 sm:pl-10 space-y-12">
          {experienceData.map((exp, index) => (
            <div key={exp.id} className="relative group">
              {/* Timeline Marker */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-dark-900 border-2 border-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-500/20 group-hover:scale-125 transition-transform">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              </div>

              {/* Company & Role Header */}
              <div className="p-6 sm:p-8 rounded-2xl glass-card border border-slate-800 hover:border-emerald-500/30 transition-all">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4 pb-4 border-b border-slate-850">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        {exp.role}
                      </span>
                      {exp.isCurrent && (
                        <span className="text-xs font-mono px-2 py-0.5 rounded-md bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                          Current Role
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-100 mt-1 flex items-center gap-2">
                      <Building2 className="w-5 h-5 text-emerald-400" />
                      {exp.company}
                    </h3>
                  </div>

                  <div className="flex flex-col md:items-end text-xs sm:text-sm font-mono text-slate-400 gap-1">
                    <span className="flex items-center gap-1.5 text-slate-300 font-semibold">
                      <Calendar className="w-4 h-4 text-emerald-400" />
                      {exp.period}
                    </span>
                    {exp.location && (
                      <span className="flex items-center gap-1.5 text-slate-500">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </span>
                    )}
                  </div>
                </div>

                {/* Company Overview Summary */}
                {exp.summary && (
                  <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                    {exp.summary}
                  </p>
                )}

                {/* Nested Client Projects (if available) */}
                {exp.projects && exp.projects.length > 0 && (
                  <div className="space-y-6">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold flex items-center gap-2">
                      <Layers className="w-4 h-4" />
                      Key Client Engagements & Projects
                    </h4>

                    <div className="grid grid-cols-1 gap-6">
                      {exp.projects.map((project, pIdx) => (
                        <div
                          key={pIdx}
                          className="p-5 rounded-xl bg-dark-950/70 border border-slate-800/90 hover:border-slate-700 transition-colors"
                        >
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                            <h5 className="text-base font-bold text-slate-100 flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                              {project.name}
                            </h5>
                          </div>

                          <p className="text-xs sm:text-sm text-slate-400 mb-4 leading-relaxed">
                            {project.description}
                          </p>

                          {/* Responsibilities list */}
                          <div className="mb-4 space-y-2">
                            {project.responsibilities.map((resp, rIdx) => (
                              <div key={rIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                                <span>{resp}</span>
                              </div>
                            ))}
                          </div>

                          {/* Technologies */}
                          <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-850">
                            {project.technologies.map((tech) => (
                              <TechBadge key={tech} name={tech} variant="subtle" size="sm" />
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Direct Responsibilities for roles without nested projects */}
                {exp.responsibilities && exp.responsibilities.length > 0 && (
                  <div className="space-y-2.5">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-3">
                      Core Responsibilities
                    </h4>
                    {exp.responsibilities.map((resp, rIdx) => (
                      <div key={rIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { 
  Building2, 
  Layers, 
  CheckCircle2, 
  Lock, 
  Eye, 
  Cpu,
  ArrowUpRight
} from 'lucide-react';
import { featuredProjects } from '../data/portfolioData';
import { FeaturedProject } from '../types';
import { SectionHeading } from '../components/SectionHeading';
import { TechBadge } from '../components/TechBadge';
import { TiltCard } from '../components/TiltCard';

interface ProjectsProps {
  onSelectProject: (project: FeaturedProject) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-dark-950 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="Enterprise Portfolios"
          title="Featured Projects"
          subtitle="Real-world enterprise systems and platforms built with Java, Spring Boot microservices, cloud deployments, and AI integrations."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((project) => (
            <TiltCard
              key={project.id}
              maxTilt={6}
              glowColor="rgba(16, 185, 129, 0.12)"
              onClick={() => onSelectProject(project)}
              className="rounded-3xl glass-card border border-slate-800 flex flex-col justify-between overflow-hidden group hover:border-emerald-500/50 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-300"
            >
              {/* Card Top Header */}
              <div className="p-7 sm:p-8 flex-1">
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                    <Building2 className="w-3.5 h-3.5" />
                    {project.clientOrContext}
                  </span>

                  {project.isPrivate ? (
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-amber-300 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20">
                      <Lock className="w-3 h-3" />
                      Private Enterprise
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-cyan-300 bg-cyan-500/10 px-2.5 py-0.5 rounded-full border border-cyan-500/20">
                      Active Deployment
                    </span>
                  )}
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-100 group-hover:text-emerald-400 transition-colors mb-3 flex items-center justify-between">
                  <span>{project.title}</span>
                  <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-emerald-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
                  {project.summary}
                </p>

                {/* Key Contributions Preview */}
                <div className="mb-6 space-y-2.5 bg-dark-900/60 p-4 rounded-2xl border border-slate-800/80">
                  <h4 className="text-[11px] font-mono uppercase text-slate-400 font-semibold tracking-wider flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                    Core Architecture & Engineering:
                  </h4>
                  <ul className="space-y-1.5">
                    {project.contributions.slice(0, 3).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-2">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.technologies.map((tech) => (
                    <TechBadge key={tech} name={tech} variant="subtle" size="sm" />
                  ))}
                </div>
              </div>

              {/* Card Bottom Actions */}
              <div className="p-4 sm:px-8 bg-dark-850/80 border-t border-slate-800/80 flex items-center justify-between gap-4">
                <span className="text-xs font-mono text-slate-400">
                  {project.badge || 'Enterprise Grade'}
                </span>

                <button
                  type="button"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-500/10 hover:bg-emerald-500 text-emerald-400 hover:text-dark-950 text-xs font-bold border border-emerald-500/30 hover:border-emerald-500 transition-all active:scale-95 shadow-sm"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Explore Architecture</span>
                </button>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { 
  Building2, 
  ExternalLink, 
  Layers, 
  CheckCircle2, 
  Lock, 
  Eye, 
  Cpu 
} from 'lucide-react';
import { featuredProjects } from '../data/portfolioData';
import { FeaturedProject } from '../types';
import { SectionHeading } from '../components/SectionHeading';
import { TechBadge } from '../components/TechBadge';

interface ProjectsProps {
  onSelectProject: (project: FeaturedProject) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-950 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="Enterprise Portfolios"
          title="Featured Projects"
          subtitle="Real-world enterprise systems and platforms built with Java, Spring Boot microservices, cloud deployments, and AI integrations."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl glass-card border border-slate-800 flex flex-col justify-between overflow-hidden group hover:border-emerald-500/40 transition-all duration-300"
            >
              {/* Card Top Header */}
              <div className="p-6 sm:p-7 flex-1">
                <div className="flex items-center justify-between gap-3 mb-3">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/25">
                    <Building2 className="w-3.5 h-3.5" />
                    {project.clientOrContext}
                  </span>

                  {project.isPrivate && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono text-slate-400 bg-dark-850 px-2 py-0.5 rounded border border-slate-800">
                      <Lock className="w-3 h-3 text-amber-400" />
                      Private Project
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-slate-100 group-hover:text-emerald-400 transition-colors mb-3">
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 mb-5 leading-relaxed">
                  {project.summary}
                </p>

                {/* Key Contributions Preview */}
                <div className="mb-5 space-y-2">
                  <h4 className="text-xs font-mono uppercase text-slate-400 font-semibold tracking-wider flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                    Key Engineering Contributions:
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
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-850">
                  {project.technologies.map((tech) => (
                    <TechBadge key={tech} name={tech} variant="subtle" size="sm" />
                  ))}
                </div>
              </div>

              {/* Card Bottom Actions */}
              <div className="p-4 sm:px-7 bg-dark-850/70 border-t border-slate-800/80 flex items-center justify-between gap-4">
                <span className="text-xs font-mono text-slate-500">
                  {project.badge || 'Enterprise Grade'}
                </span>

                <button
                  onClick={() => onSelectProject(project)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-dark-800 hover:bg-emerald-500 hover:text-dark-950 text-slate-200 text-xs font-semibold border border-slate-700 hover:border-emerald-500 transition-all active:scale-95"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>View Details</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

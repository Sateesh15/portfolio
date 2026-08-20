import React, { useEffect } from 'react';
import { X, Layers, CheckCircle2, ShieldAlert, Cpu, Building2 } from 'lucide-react';
import { FeaturedProject } from '../types';
import { TechBadge } from './TechBadge';

interface ProjectModalProps {
  project: FeaturedProject | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-dark-950/80 backdrop-blur-md transition-opacity">
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-dark-900 border border-slate-700/80 shadow-2xl p-6 sm:p-8 text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 pb-6 border-b border-slate-800">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-xs font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                <Building2 className="w-3.5 h-3.5" />
                {project.clientOrContext}
              </span>
              {project.isPrivate && (
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-xs font-mono bg-slate-800 text-slate-300 border border-slate-700">
                  <ShieldAlert className="w-3 h-3 text-amber-400" />
                  Enterprise Internal / NDA
                </span>
              )}
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-100">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-dark-800 text-slate-400 hover:text-slate-100 hover:bg-dark-700 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="py-6 space-y-6 text-sm sm:text-base">
          {/* Summary / Overview */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-2">
              Project Overview
            </h4>
            <p className="text-slate-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Architecture Details */}
          <div className="p-4 rounded-xl bg-dark-850/80 border border-slate-800">
            <div className="flex items-center gap-2 mb-2 text-emerald-400 font-mono text-sm font-semibold">
              <Layers className="w-4 h-4" />
              Technical Architecture & Integration
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              {project.architectureOverview}
            </p>
          </div>

          {/* Key Contributions */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-3 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-cyan-400" />
              My Direct Engineering Contributions
            </h4>
            <ul className="space-y-2.5">
              {project.contributions.map((contribution, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-300 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{contribution}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies Used */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-3">
              Technology Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <TechBadge key={tech} name={tech} variant="subtle" size="sm" />
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs text-slate-500 font-mono">
            * Source code & endpoints proprietary to client engagement.
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-medium transition-colors"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
};

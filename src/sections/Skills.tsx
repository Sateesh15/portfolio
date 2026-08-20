import React, { useState } from 'react';
import { 
  Server, 
  Code2, 
  Layout, 
  Database, 
  Cloud, 
  CheckCircle2, 
  ShieldCheck, 
  Check 
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';
import { SectionHeading } from '../components/SectionHeading';
import { TechBadge } from '../components/TechBadge';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Server':
        return <Server className="w-5 h-5 text-emerald-400" />;
      case 'Code2':
        return <Code2 className="w-5 h-5 text-cyan-400" />;
      case 'Layout':
        return <Layout className="w-5 h-5 text-sky-400" />;
      case 'Database':
        return <Database className="w-5 h-5 text-amber-400" />;
      case 'Cloud':
        return <Cloud className="w-5 h-5 text-indigo-400" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-5 h-5 text-rose-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-emerald-400" />;
      default:
        return <Code2 className="w-5 h-5 text-slate-400" />;
    }
  };

  const filteredCategories = selectedCategory === 'all'
    ? skillCategories
    : skillCategories.filter((cat) => cat.id === selectedCategory);

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-950 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="Technical Competencies"
          title="Skills & Technologies"
          subtitle="A comprehensive overview of backend, full-stack, cloud, testing, and security competencies gained across 4 years of enterprise production experience."
        />

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs md:text-sm font-medium transition-all ${
              selectedCategory === 'all'
                ? 'bg-emerald-500 text-dark-950 font-semibold shadow-md shadow-emerald-500/20'
                : 'bg-dark-850 text-slate-400 hover:text-slate-200 border border-slate-800'
            }`}
          >
            All Categories ({skillCategories.length})
          </button>
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-xl text-xs md:text-sm font-medium transition-all ${
                selectedCategory === category.id
                  ? 'bg-emerald-500 text-dark-950 font-semibold shadow-md shadow-emerald-500/20'
                  : 'bg-dark-850 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="p-6 rounded-2xl glass-card flex flex-col justify-between group hover:border-emerald-500/30"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-dark-850 border border-slate-700/80 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getIcon(category.iconName)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-100 group-hover:text-emerald-400 transition-colors">
                      {category.name}
                    </h3>
                    <span className="text-[11px] font-mono text-slate-500">
                      {category.skills.length} core technologies
                    </span>
                  </div>
                </div>

                <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                  {category.description}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <TechBadge
                      key={skill}
                      name={skill}
                      variant="default"
                      size="sm"
                    />
                  ))}
                </div>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="mt-6 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>Enterprise Grade</span>
                <span className="text-emerald-400/80">Production Verified</span>
              </div>
            </div>
          ))}
        </div>

        {/* Core Java & Spring Boot Spotlight Bar */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-dark-850 via-dark-900 to-dark-850 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
              <Server className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm md:text-base font-bold text-slate-100">
                Primary Specialization: Java Microservices Architecture
              </h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Robust REST API design, Spring Data JPA mappings, transaction management, and Splunk telemetry.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 shrink-0">
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 font-semibold">
              Java 17
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 font-semibold">
              Spring Boot
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-indigo-500/15 text-indigo-300 border border-indigo-500/30 font-semibold">
              Microservices
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

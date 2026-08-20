import React, { useState } from 'react';
import { 
  Server, 
  Code2, 
  Layout, 
  Database, 
  Cloud, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles,
  Zap
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';
import { SectionHeading } from '../components/SectionHeading';
import { TechBadge } from '../components/TechBadge';
import { TiltCard } from '../components/TiltCard';

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
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-dark-950 relative">
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
            className={`px-4 py-2 rounded-xl text-xs md:text-sm font-medium transition-all cursor-pointer active:scale-95 ${
              selectedCategory === 'all'
                ? 'bg-emerald-500 text-dark-950 font-bold shadow-lg shadow-emerald-500/25 scale-105'
                : 'bg-dark-850 text-slate-400 hover:text-slate-200 border border-slate-800 hover:border-slate-700'
            }`}
          >
            All Competencies ({skillCategories.length})
          </button>
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-xl text-xs md:text-sm font-medium transition-all cursor-pointer active:scale-95 ${
                selectedCategory === category.id
                  ? 'bg-emerald-500 text-dark-950 font-bold shadow-lg shadow-emerald-500/25 scale-105'
                  : 'bg-dark-850 text-slate-400 hover:text-slate-200 border border-slate-800 hover:border-slate-700'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <TiltCard
              key={category.id}
              maxTilt={7}
              glowColor="rgba(6, 182, 212, 0.12)"
              className="p-6 sm:p-7 rounded-3xl glass-card flex flex-col justify-between group hover:border-emerald-500/40 hover:shadow-xl hover:shadow-emerald-500/5 transition-all"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-dark-900 border border-slate-700/80 flex items-center justify-center group-hover:scale-110 group-hover:border-emerald-500/50 group-hover:shadow-[0_0_15px_rgba(52,211,153,0.2)] transition-all">
                    {getIcon(category.iconName)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-100 group-hover:text-emerald-400 transition-colors">
                      {category.name}
                    </h3>
                    <span className="text-[11px] font-mono text-emerald-400/90 flex items-center gap-1">
                      <Zap className="w-3 h-3" />
                      {category.skills.length} core technologies
                    </span>
                  </div>
                </div>

                <p className="text-xs text-slate-400 mb-6 leading-relaxed">
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
              <div className="mt-6 pt-3.5 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  Enterprise Grade
                </span>
                <span className="text-emerald-400 font-semibold">4 Yrs Applied</span>
              </div>
            </TiltCard>
          ))}
        </div>

        {/* Core Java & Spring Boot Spotlight Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-dark-900 via-dark-850 to-dark-900 border border-emerald-500/30 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 animated-gradient-border">
          <div className="flex items-center gap-4 relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 shadow-[0_0_20px_rgba(52,211,153,0.2)]">
              <Server className="w-7 h-7" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-300 mb-1">
                <Sparkles className="w-3 h-3" />
                PRIMARY CORE STACK
              </div>
              <h4 className="text-base sm:text-lg font-bold text-slate-100">
                Java 17 & Spring Boot Microservices Architecture
              </h4>
              <p className="text-xs text-slate-400 mt-1 max-w-xl">
                Specialized in high-volume REST APIs, Spring Data JPA mappings, OAuth2/JWT security, Splunk log telemetry, and JUnit 5 test suites.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 shrink-0 relative z-10">
            <span className="px-3.5 py-1.5 rounded-xl text-xs font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-bold shadow-sm">
              Java 17
            </span>
            <span className="px-3.5 py-1.5 rounded-xl text-xs font-mono bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-bold shadow-sm">
              Spring Boot 3
            </span>
            <span className="px-3.5 py-1.5 rounded-xl text-xs font-mono bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 font-bold shadow-sm">
              Microservices
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

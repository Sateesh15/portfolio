import React from 'react';
import { 
  Sparkles, 
  Shield, 
  Cloud, 
  Activity, 
  CheckCircle2,
  Cpu,
  ArrowRight
} from 'lucide-react';
import { aiCloudSpotlights } from '../data/portfolioData';
import { SectionHeading } from '../components/SectionHeading';
import { TechBadge } from '../components/TechBadge';
import { TiltCard } from '../components/TiltCard';

export const AICloud: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-emerald-400" />;
      case 'Shield':
        return <Shield className="w-6 h-6 text-cyan-400" />;
      case 'Cloud':
        return <Cloud className="w-6 h-6 text-sky-400" />;
      case 'Activity':
        return <Activity className="w-6 h-6 text-purple-400" />;
      default:
        return <Cloud className="w-6 h-6 text-slate-400" />;
    }
  };

  return (
    <section id="ai-cloud" className="py-24 px-4 sm:px-6 lg:px-8 bg-dark-900/40 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="Specialized Expertise"
          title="AI & Cloud Engineering"
          subtitle="Modern enterprise integration involving Azure OpenAI, enterprise identity via Azure Entra ID, cloud services, and production telemetry."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {aiCloudSpotlights.map((item, index) => (
            <TiltCard
              key={index}
              maxTilt={6}
              glowColor="rgba(139, 92, 246, 0.12)"
              className="p-7 sm:p-9 rounded-3xl glass-card border border-slate-800 flex flex-col justify-between group hover:border-purple-500/40 hover:shadow-2xl hover:shadow-purple-500/10 transition-all"
            >
              <div>
                <div className="flex items-center gap-3.5 mb-5">
                  <div className="w-13 h-13 p-3 rounded-2xl bg-dark-900 border border-slate-700/80 flex items-center justify-center group-hover:scale-110 group-hover:border-purple-500/50 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] transition-all">
                    {getIcon(item.icon)}
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-purple-400 uppercase tracking-wider font-bold">
                      {item.category} Specialization
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-100 group-hover:text-purple-300 transition-colors">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
                  {item.description}
                </p>

                {/* Key Highlights */}
                <div className="space-y-2.5 mb-6 bg-dark-950/60 p-4 rounded-2xl border border-slate-800/80">
                  {item.keyHighlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-850">
                {item.skills.map((skill) => (
                  <TechBadge key={skill} name={skill} variant="subtle" size="sm" />
                ))}
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { 
  Sparkles, 
  Shield, 
  Cloud, 
  Activity, 
  CheckCircle2 
} from 'lucide-react';
import { aiCloudSpotlights } from '../data/portfolioData';
import { SectionHeading } from '../components/SectionHeading';
import { TechBadge } from '../components/TechBadge';

export const AICloud: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-emerald-400" />;
      case 'Shield':
        return <Shield className="w-5 h-5 text-cyan-400" />;
      case 'Cloud':
        return <Cloud className="w-5 h-5 text-sky-400" />;
      case 'Activity':
        return <Activity className="w-5 h-5 text-purple-400" />;
      default:
        return <Cloud className="w-5 h-5 text-slate-400" />;
    }
  };

  return (
    <section id="ai-cloud" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-900/40 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="Specialized Expertise"
          title="AI & Cloud Engineering"
          subtitle="Modern enterprise integration involving Azure OpenAI, enterprise identity via Azure Entra ID, cloud services, and production telemetry."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {aiCloudSpotlights.map((item, index) => (
            <div
              key={index}
              className="p-6 sm:p-8 rounded-2xl glass-card border border-slate-800 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-dark-850 border border-slate-700/80 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getIcon(item.icon)}
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider font-semibold">
                      {item.category} Specialization
                    </span>
                    <h3 className="text-lg font-bold text-slate-100 group-hover:text-emerald-400 transition-colors">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 mb-5 leading-relaxed">
                  {item.description}
                </p>

                {/* Key Highlights */}
                <div className="space-y-2 mb-6">
                  {item.keyHighlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import React, { useState, useEffect } from 'react';
import { Briefcase, Code, ShieldCheck, Zap, Server, Activity } from 'lucide-react';
import { sounds } from './SoundEffects';

interface StatItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
  sublabel: string;
  icon: typeof Briefcase;
  color: string;
}

export const StatsCounter: React.FC = () => {
  const stats: StatItem[] = [
    {
      id: 'exp',
      value: 4,
      suffix: '+',
      label: 'Years Experience',
      sublabel: 'Enterprise Production',
      icon: Briefcase,
      color: 'from-emerald-400 to-teal-500 text-emerald-400',
    },
    {
      id: 'services',
      value: 15,
      suffix: '+',
      label: 'Microservices & APIs',
      sublabel: 'Spring Boot Architecture',
      icon: Server,
      color: 'from-cyan-400 to-blue-500 text-cyan-400',
    },
    {
      id: 'uptime',
      value: 99.9,
      suffix: '%',
      label: 'SLA Reliability',
      sublabel: 'Splunk Telemetry & Alerts',
      icon: Activity,
      color: 'from-purple-400 to-indigo-500 text-purple-400',
    },
    {
      id: 'opt',
      value: 40,
      suffix: '%',
      label: 'Query Optimization',
      sublabel: 'SQL & JPA Performance',
      icon: Zap,
      color: 'from-amber-400 to-orange-500 text-amber-400',
    },
  ];

  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0]);

  useEffect(() => {
    const duration = 1800; // ms
    const steps = 30;
    const intervalTime = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const easeOutQuad = 1 - (1 - progress) * (1 - progress);

      setCounts(
        stats.map((s) => {
          const val = s.value * easeOutQuad;
          return s.value % 1 === 0 ? Math.floor(val) : parseFloat(val.toFixed(1));
        })
      );

      if (step >= steps) {
        clearInterval(timer);
        setCounts(stats.map((s) => s.value));
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 my-10 relative z-10">
      {stats.map((stat, idx) => {
        const Icon = stat.icon;
        return (
          <div
            key={stat.id}
            onMouseEnter={() => sounds.playHover()}
            className="p-5 sm:p-6 rounded-3xl glass-card border border-slate-800/90 hover:border-emerald-500/40 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all hover:scale-[1.03] group cursor-pointer relative overflow-hidden"
          >
            {/* Ambient Corner Glow */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-emerald-500/20 transition-colors pointer-events-none" />

            <div className="flex items-center justify-between mb-3">
              <div className={`w-10 h-10 rounded-2xl bg-dark-900 border border-slate-700/80 flex items-center justify-center ${stat.color} group-hover:scale-110 group-hover:border-emerald-500/50 transition-all shadow-inner`}>
                <Icon className="w-5 h-5" />
              </div>
              <span className="w-2 h-2 rounded-full bg-emerald-400/80 animate-ping opacity-60" />
            </div>

            <div className="flex items-baseline gap-1">
              <span className="text-3xl sm:text-4xl font-extrabold text-slate-100 font-mono tracking-tight group-hover:text-emerald-300 transition-colors">
                {counts[idx]}
              </span>
              <span className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono">
                {stat.suffix}
              </span>
            </div>

            <h4 className="text-xs sm:text-sm font-bold text-slate-200 mt-2">
              {stat.label}
            </h4>
            <p className="text-[11px] text-slate-400 font-mono mt-0.5">
              {stat.sublabel}
            </p>
          </div>
        );
      })}
    </div>
  );
};

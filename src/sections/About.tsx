import React from 'react';
import { 
  Server, 
  Layers, 
  Cloud, 
  ShieldCheck, 
  Activity, 
  Code2, 
  FileDown, 
  CheckCircle2,
  Cpu,
  Sparkles,
  TrendingUp
} from 'lucide-react';
import { personalProfile } from '../data/portfolioData';
import { SectionHeading } from '../components/SectionHeading';
import { TiltCard } from '../components/TiltCard';

export const About: React.FC = () => {
  const highlights = [
    {
      icon: Server,
      title: 'Enterprise Java & Spring Boot',
      desc: '4 years architecting resilient microservices, high-throughput REST APIs, and JPA data layers using Java 17 and Java 8.',
      color: 'text-emerald-400',
      border: 'hover:border-emerald-500/40',
      bg: 'bg-emerald-500/10',
    },
    {
      icon: Layers,
      title: 'Full Stack Capabilities',
      desc: 'Bridging backend services with modern responsive frontends using Vue.js and React.js for clean, intuitive workflows.',
      color: 'text-cyan-400',
      border: 'hover:border-cyan-500/40',
      bg: 'bg-cyan-500/10',
    },
    {
      icon: Cloud,
      title: 'Cloud & AI Engineering',
      desc: 'Deploying scalable services across AWS and Azure, integrating Azure OpenAI LLMs, and securing auth with Azure Entra ID.',
      color: 'text-sky-400',
      border: 'hover:border-sky-500/40',
      bg: 'bg-sky-500/10',
    },
    {
      icon: Activity,
      title: 'Production Support & Observability',
      desc: 'Proactive application monitoring via Splunk, SonarQube quality gates, and high-priority incident troubleshooting.',
      color: 'text-purple-400',
      border: 'hover:border-purple-500/40',
      bg: 'bg-purple-500/10',
    },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-dark-900/40 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="Professional Background"
          title="About Me"
          subtitle="Engineering robust backend microservices and full-stack solutions for enterprise clients."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Narrative & Profile Overview */}
          <div className="lg:col-span-6 space-y-6 text-slate-300 text-base leading-relaxed">
            <TiltCard
              maxTilt={4}
              glowColor="rgba(16, 185, 129, 0.1)"
              className="p-7 sm:p-8 rounded-3xl bg-dark-850/90 border border-slate-800 shadow-2xl space-y-4 hover:border-emerald-500/40"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-slate-100 flex items-center gap-2.5">
                <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></span>
                Munnam Sateesh — Java Full Stack Developer
              </h3>

              <p>
                I am a dedicated <strong className="text-emerald-400 font-semibold">Java Full Stack Developer with 4 years of experience</strong> building mission-critical enterprise applications and microservices, primarily supporting U.S.-based client engagements in the energy and utility sectors.
              </p>

              <p>
                My core expertise centers on <strong className="text-slate-100">Java 17, Spring Boot, Spring Data JPA, Microservices, and REST APIs</strong>. On the frontend, I develop responsive, user-friendly client interfaces using <strong className="text-slate-100">Vue.js and React.js</strong>.
              </p>

              <p>
                Throughout my career at <strong className="text-slate-100">INU Technology Solutions</strong> and <strong className="text-slate-100">AvenData Technologies</strong>, I have contributed across the complete software development lifecycle: from initial architecture and secure authentication (Azure Entra ID, MSAL, RBAC) to automated testing (JUnit, Mockito, Selenium), Splunk observability, and strict SLA production support.
              </p>

              <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono text-slate-300">
                <span className="px-3 py-1.5 rounded-xl bg-dark-800 border border-slate-700/80 hover:border-emerald-500/40 transition-colors">
                  📍 Hyderabad, India
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-dark-800 border border-slate-700/80 hover:border-emerald-500/40 transition-colors">
                  ⚡ Florida Power & Light (FPL)
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-dark-800 border border-slate-700/80 hover:border-emerald-500/40 transition-colors">
                  🏢 Central Hudson
                </span>
              </div>
            </TiltCard>

            {/* Core Values / Recruiter Checklist */}
            <div className="p-6 rounded-3xl bg-dark-850/50 border border-slate-800/80 space-y-3">
              <h4 className="text-xs font-mono uppercase text-slate-400 font-bold tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                Engineering Tenets & Standards
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
                <div className="flex items-center gap-2 p-2 rounded-lg bg-dark-900/60 border border-slate-800/60">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Clean SOLID Architecture</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg bg-dark-900/60 border border-slate-800/60">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Test-Driven (JUnit / Vitest)</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg bg-dark-900/60 border border-slate-800/60">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Role-Based Access Control</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg bg-dark-900/60 border border-slate-800/60">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Telemetry & Splunk Logging</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Highlights Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <TiltCard
                  key={index}
                  maxTilt={8}
                  glowColor="rgba(16, 185, 129, 0.12)"
                  className={`p-6 rounded-3xl glass-card flex flex-col justify-between group ${item.border}`}
                >
                  <div>
                    <div className={`w-12 h-12 rounded-2xl ${item.bg} border border-white/10 flex items-center justify-center ${item.color} mb-5 group-hover:scale-110 transition-transform shadow-inner`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-base font-bold text-slate-100 mb-2 group-hover:text-emerald-400 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </TiltCard>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

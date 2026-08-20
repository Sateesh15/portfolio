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
  Cpu
} from 'lucide-react';
import { personalProfile } from '../data/portfolioData';
import { SectionHeading } from '../components/SectionHeading';

export const About: React.FC = () => {
  const highlights = [
    {
      icon: Server,
      title: 'Enterprise Java & Spring Boot',
      desc: '4 years architecting resilient microservices, high-throughput REST APIs, and JPA data layers using Java 17 and Java 8.',
      accent: 'emerald',
    },
    {
      icon: Layers,
      title: 'Full Stack Capabilities',
      desc: 'Bridging backend services with modern responsive frontends using Vue.js and React.js for clean, intuitive workflows.',
      accent: 'cyan',
    },
    {
      icon: Cloud,
      title: 'Cloud & AI Engineering',
      desc: 'Deploying scalable services across AWS and Azure, integrating Azure OpenAI LLMs, and securing auth with Azure Entra ID.',
      accent: 'sky',
    },
    {
      icon: Activity,
      title: 'Production Support & Observability',
      desc: 'Proactive application monitoring via Splunk, SonarQube quality gates, and high-priority incident troubleshooting.',
      accent: 'purple',
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-900/40 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="Professional Background"
          title="About Me"
          subtitle="Engineering robust backend microservices and full-stack solutions for enterprise clients."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Narrative & Profile Overview */}
          <div className="lg:col-span-6 space-y-5 text-slate-300 text-base leading-relaxed">
            <div className="p-6 rounded-2xl bg-dark-850/80 border border-slate-800 shadow-xl space-y-4">
              <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                Munnam Sateesh — Java Full Stack Developer
              </h3>

              <p>
                I am a passionate <strong className="text-emerald-400 font-semibold">Java Full Stack Developer with 4 years of experience</strong> building mission-critical enterprise applications and microservices, primarily supporting U.S.-based client engagements in the energy and utility sectors.
              </p>

              <p>
                My core expertise centers on <strong className="text-slate-100">Java 17, Spring Boot, Spring Data JPA, Microservices, and REST APIs</strong>. On the frontend, I develop responsive, user-friendly client interfaces using <strong className="text-slate-100">Vue.js and React.js</strong>.
              </p>

              <p>
                Throughout my career at <strong className="text-slate-100">INU Technology Solutions</strong> and <strong className="text-slate-100">AvenData Technologies</strong>, I have contributed across the complete software development lifecycle: from initial architecture and secure authentication (Azure Entra ID, MSAL, RBAC) to automated testing (JUnit, Mockito, Selenium), Splunk observability, and strict SLA production support.
              </p>

              <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono text-slate-400">
                <span className="px-2.5 py-1 rounded bg-dark-800 border border-slate-700/60">
                  📍 Hyderabad, India
                </span>
                <span className="px-2.5 py-1 rounded bg-dark-800 border border-slate-700/60">
                  ⚡ Florida Power & Light (FPL)
                </span>
                <span className="px-2.5 py-1 rounded bg-dark-800 border border-slate-700/60">
                  🏢 Central Hudson
                </span>
              </div>
            </div>

            {/* Core Values / Recruiter Checklist */}
            <div className="p-5 rounded-2xl bg-dark-850/40 border border-slate-800/80 space-y-3">
              <h4 className="text-xs font-mono uppercase text-slate-400 font-semibold tracking-wider">
                Engineering Tenets & Standards
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Clean SOLID Architecture</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Test-Driven (JUnit / Vitest)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Role-Based Access Control</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Telemetry & Splunk Logging</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Highlights Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="p-5 rounded-2xl glass-card flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-bold text-slate-100 mb-2 group-hover:text-emerald-400 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

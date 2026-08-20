import React, { useState, useEffect } from 'react';
import { 
  Server, 
  Database, 
  Cloud, 
  Sparkles, 
  ShieldCheck, 
  Activity, 
  Play, 
  RotateCcw,
  Cpu,
  Zap,
  CheckCircle2,
  Lock
} from 'lucide-react';
import { sounds } from './SoundEffects';

interface FlowStep {
  id: string;
  name: string;
  category: string;
  icon: typeof Server;
  color: string;
  status: string;
  detail: string;
}

export const ArchitectureVisualizer: React.FC = () => {
  const [activePreset, setActivePreset] = useState<'utility' | 'ai' | 'security'>('utility');
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [packetPos, setPacketPos] = useState<number>(0);

  const presets = {
    utility: {
      title: 'Florida Power & Light — Microservice Pipeline',
      description: 'Spring Boot REST endpoint processing customer eligibility through JPA caching and Splunk telemetry.',
      steps: [
        { id: '1', name: 'Vue.js Client', category: 'Frontend Portal', icon: Cpu, color: 'text-emerald-400', status: 'HTTP GET /eligibility', detail: 'Payload dispatched with JWT token' },
        { id: '2', name: 'API Gateway', category: 'Spring Cloud Gateway', icon: ShieldCheck, color: 'text-cyan-400', status: 'RBAC Validated', detail: 'Role evaluated: OPERATOR_ROLE' },
        { id: '3', name: 'Spring Boot Microservice', category: 'Java 17 Service', icon: Server, color: 'text-indigo-400', status: 'Business Logic Executed', detail: 'Tier calculations & business rules' },
        { id: '4', name: 'MySQL Database', category: 'Hibernate / JPA', icon: Database, color: 'text-amber-400', status: 'Query Time: 12ms', detail: 'Read replica indexed retrieval' },
        { id: '5', name: 'Splunk Telemetry', category: 'Observability Node', icon: Activity, color: 'text-purple-400', status: 'Event Logged', detail: 'Audit logged with latency metric' },
      ],
    },
    ai: {
      title: 'Azure OpenAI Resume Intelligence Engine',
      description: 'Full-stack AI parsing pipeline extracting entities and calculating semantic matching scores.',
      steps: [
        { id: '1', name: 'React UI Portal', category: 'Client Application', icon: Cpu, color: 'text-sky-400', status: 'Resume Ingested', detail: 'PDF document uploaded' },
        { id: '2', name: 'Node.js / Express', category: 'Ingestion Service', icon: Server, color: 'text-emerald-400', status: 'Text Extracted', detail: 'OCR & schema normalization' },
        { id: '3', name: 'Azure OpenAI (GPT-4o)', category: 'LLM Extraction', icon: Sparkles, color: 'text-purple-400', status: 'Semantic Match: 96%', detail: 'Skills matrix & score computed' },
        { id: '4', name: 'MongoDB Store', category: 'Document Store', icon: Database, color: 'text-amber-400', status: 'JSON Record Saved', detail: 'Candidate profile indexed' },
      ],
    },
    security: {
      title: 'Enterprise Identity (Azure Entra ID & MSAL)',
      description: 'Single Sign-On (SSO) OAuth2 token lifecycle and fine-grained Role-Based Access Control (RBAC).',
      steps: [
        { id: '1', name: 'User Login', category: 'Enterprise SSO', icon: Lock, color: 'text-cyan-400', status: 'Authentication Triggered', detail: 'Redirect to Microsoft Entra ID' },
        { id: '2', name: 'MSAL Token Exchange', category: 'Identity Provider', icon: ShieldCheck, color: 'text-emerald-400', status: 'JWT Bearer Issued', detail: 'RSA Signature Verified' },
        { id: '3', name: 'Spring Security Filter', category: 'OAuth2 Resource Server', icon: Server, color: 'text-indigo-400', status: 'Token Decoded', detail: 'Claims & scopes extracted' },
        { id: '4', name: 'Protected Resource', category: 'Restricted Endpoints', icon: CheckCircle2, color: 'text-emerald-400', status: '200 OK Authorized', detail: 'Access granted with audit trail' },
      ],
    },
  };

  const currentPresetData = presets[activePreset];

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setActiveStepIndex((prev) => {
        const next = (prev + 1) % currentPresetData.steps.length;
        setPacketPos(next);
        sounds.playHover();
        return next;
      });
    }, 2200);

    return () => clearInterval(interval);
  }, [isPlaying, currentPresetData.steps.length]);

  return (
    <div className="rounded-3xl p-6 sm:p-8 glass-panel border border-slate-800 shadow-2xl relative overflow-hidden animated-gradient-border">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 mb-2">
            <Zap className="w-3.5 h-3.5 animate-pulse" />
            LIVE ARCHITECTURE SIMULATOR
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-100">
            {currentPresetData.title}
          </h3>
          <p className="text-xs text-slate-400 mt-1 max-w-2xl">
            {currentPresetData.description}
          </p>
        </div>

        {/* Preset Selector Tabs */}
        <div className="flex flex-wrap items-center gap-2">
          {(['utility', 'ai', 'security'] as const).map((key) => (
            <button
              key={key}
              onClick={() => {
                setActivePreset(key);
                setActiveStepIndex(0);
                setPacketPos(0);
                sounds.playClick();
              }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all cursor-pointer ${
                activePreset === key
                  ? 'bg-emerald-500 text-dark-950 shadow-lg shadow-emerald-500/25 scale-105'
                  : 'bg-dark-850 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              {key === 'utility' ? '⚡ Utility Microservices' : key === 'ai' ? '🤖 Azure AI Pipeline' : '🔒 Azure Entra Security'}
            </button>
          ))}
        </div>
      </div>

      {/* Flow Nodes Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative z-10 my-6">
        {currentPresetData.steps.map((step, idx) => {
          const Icon = step.icon;
          const isActive = idx === activeStepIndex;
          const isPassed = idx < activeStepIndex;

          return (
            <div
              key={step.id}
              onClick={() => {
                setActiveStepIndex(idx);
                sounds.playClick();
              }}
              className={`p-5 rounded-2xl transition-all cursor-pointer relative overflow-hidden flex flex-col justify-between border ${
                isActive
                  ? 'bg-dark-900 border-emerald-400 shadow-[0_0_25px_rgba(52,211,153,0.25)] scale-[1.03] -translate-y-1'
                  : isPassed
                  ? 'bg-dark-900/80 border-emerald-500/40 text-slate-300'
                  : 'bg-dark-950/60 border-slate-800 text-slate-400 hover:border-slate-700'
              }`}
            >
              {/* Step indicator pill */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-md ${
                  isActive
                    ? 'bg-emerald-400 text-dark-950'
                    : 'bg-dark-800 text-slate-400 border border-slate-800'
                }`}>
                  STEP 0{idx + 1}
                </span>

                {isActive && (
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                )}
              </div>

              <div>
                <div className={`w-10 h-10 rounded-xl bg-dark-850 border border-slate-700/80 flex items-center justify-center mb-3 ${step.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-slate-100 mb-0.5">
                  {step.name}
                </h4>
                <span className="text-[11px] font-mono text-emerald-400/90 block mb-2">
                  {step.category}
                </span>
              </div>

              {/* Status payload */}
              <div className="mt-3 pt-3 border-t border-slate-800/80">
                <span className="text-[11px] font-mono text-slate-200 font-semibold block truncate">
                  {step.status}
                </span>
                <span className="text-[10px] text-slate-500 block truncate mt-0.5">
                  {step.detail}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Controller & Telemetry Bar */}
      <div className="mt-6 p-4 rounded-2xl bg-dark-900/90 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono relative z-10">
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              setIsPlaying(!isPlaying);
              sounds.playClick();
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-dark-800 hover:bg-dark-750 text-slate-200 border border-slate-700 hover:border-emerald-500/50 transition-colors cursor-pointer"
          >
            {isPlaying ? (
              <>
                <span className="w-2 h-2 rounded-sm bg-amber-400"></span>
                <span>Pause Flow</span>
              </>
            ) : (
              <>
                <Play className="w-3 h-3 text-emerald-400" />
                <span>Play Flow</span>
              </>
            )}
          </button>

          <button
            onClick={() => {
              setActiveStepIndex(0);
              sounds.playClick();
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-dark-800 hover:bg-dark-750 text-slate-400 hover:text-slate-200 border border-slate-700 transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset</span>
          </button>
        </div>

        <div className="flex items-center gap-4 text-slate-400">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Uptime: <strong>99.99%</strong></span>
          </span>
          <span className="text-slate-600">|</span>
          <span>Throughput: <strong className="text-cyan-400">2.4k req/sec</strong></span>
          <span className="text-slate-600">|</span>
          <span>Avg Latency: <strong className="text-emerald-400">18ms</strong></span>
        </div>
      </div>
    </div>
  );
};

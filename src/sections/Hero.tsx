import React, { useState } from 'react';
import { 
  FileDown, 
  ArrowRight, 
  Mail, 
  MapPin, 
  Briefcase, 
  CheckCircle2, 
  Copy, 
  Check 
} from 'lucide-react';
import { personalProfile, codeSampleSnippet } from '../data/portfolioData';
import { LinkedinIcon, GithubIcon } from '../components/Icons';

interface HeroProps {
  onCopySnippet: (text: string, label: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onCopySnippet }) => {
  const [copiedCode, setCopiedCode] = useState(false);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSampleSnippet);
    setCopiedCode(true);
    onCopySnippet(codeSampleSnippet, 'Spring Boot code snippet copied');
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-grid-pattern bg-radial-gradient"
    >
      {/* Background glow orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Column: Hero Intro & Value Prop */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/25 mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>4 Years Enterprise Experience • U.S. Client Engagements</span>
          </div>

          {/* Main Greeting & Title */}
          <div className="space-y-2 mb-4">
            <h2 className="text-lg sm:text-xl font-mono text-emerald-400 font-semibold">
              Hi, I'm {personalProfile.preferredName}
            </h2>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-100 tracking-tight leading-tight">
              Java Full Stack <br />
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-sky-400 bg-clip-text text-transparent">
                Developer
              </span>
            </h1>
          </div>

          {/* Core Subtitle as requested */}
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed mb-6 font-normal">
            Building scalable enterprise applications with Java, Spring Boot, Microservices and modern frontend technologies.
          </p>

          {/* Location & Summary Highlight */}
          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm font-mono text-slate-400 mb-8">
            <span className="flex items-center gap-1.5 bg-dark-850 px-3 py-1.5 rounded-lg border border-slate-800">
              <MapPin className="w-4 h-4 text-emerald-400" />
              {personalProfile.location}
            </span>
            <span className="flex items-center gap-1.5 bg-dark-850 px-3 py-1.5 rounded-lg border border-slate-800">
              <Briefcase className="w-4 h-4 text-cyan-400" />
              Spring Boot & Microservices Specialist
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-8 w-full sm:w-auto">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-emerald-500 hover:bg-emerald-600 text-dark-950 shadow-lg shadow-emerald-500/20 transition-all hover:scale-[1.02] active:scale-95 w-full sm:w-auto text-center"
            >
              <span>View My Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={personalProfile.resumePath}
              download
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-dark-850 hover:bg-dark-800 text-slate-200 border border-slate-700/80 hover:border-slate-600 transition-all hover:scale-[1.02] active:scale-95 w-full sm:w-auto text-center"
            >
              <FileDown className="w-4 h-4 text-emerald-400" />
              <span>Download Resume</span>
            </a>
          </div>

          {/* Socials & Direct Contact */}
          <div className="flex items-center gap-3 pt-4 border-t border-slate-800/80 w-full">
            <span className="text-xs font-mono text-slate-500 mr-2">Connect:</span>
            <a
              href={personalProfile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-dark-850 border border-slate-800 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
              aria-label="LinkedIn Profile"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={personalProfile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-dark-850 border border-slate-800 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
              aria-label="GitHub Profile"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalProfile.email}`}
              className="p-2.5 rounded-lg bg-dark-850 border border-slate-800 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
              aria-label="Email Munnam Sateesh"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Right Column: Interactive Code & Architecture Card */}
        <div className="lg:col-span-5 w-full">
          <div className="relative rounded-2xl glass-panel border border-slate-700/70 shadow-2xl overflow-hidden group">
            
            {/* Terminal Top Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-dark-900 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                <span className="ml-2 text-xs font-mono text-slate-400">
                  UtilityServiceController.java
                </span>
              </div>
              <button
                onClick={handleCopyCode}
                className="flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-slate-200 transition-colors"
                title="Copy snippet"
              >
                {copiedCode ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Code Body */}
            <div className="p-4 sm:p-5 font-mono text-xs text-slate-300 overflow-x-auto bg-dark-950/90 leading-relaxed">
              <pre className="text-slate-300">
                <span className="text-slate-500">// Enterprise Microservice REST Controller</span>{'\n'}
                <span className="text-cyan-400">@RestController</span>{'\n'}
                <span className="text-cyan-400">@RequestMapping</span>(<span className="text-amber-300">"/api/v1/utility/services"</span>){'\n'}
                <span className="text-purple-400">public class</span> <span className="text-emerald-400 font-semibold">UtilityServiceController</span> {'{'}{'\n\n'}
                {'    '}<span className="text-purple-400">private final</span> CustomerServiceProgram serviceProgram;{'\n\n'}
                {'    '}<span className="text-cyan-400">@GetMapping</span>(<span className="text-amber-300">"/{'{'}accountId{'}'}/eligibility"</span>){'\n'}
                {'    '}<span className="text-cyan-400">@PreAuthorize</span>(<span className="text-amber-300">"hasRole('OPERATOR')"</span>){'\n'}
                {'    '}<span className="text-purple-400">public</span> ResponseEntity&lt;EligibilityResponse&gt; checkEligibility({'\n'}
                {'            '}<span className="text-cyan-400">@PathVariable</span> String accountId) {'{'}{'\n'}
                {'        '}log.info(<span className="text-amber-300">"Evaluating account [{}]"</span>, accountId);{'\n'}
                {'        '}<span className="text-purple-400">return</span> ResponseEntity.ok(serviceProgram.evaluate(accountId));{'\n'}
                {'    }'}{'\n'}
                {'}'}
              </pre>
            </div>

            {/* Microservice Spec Badge Footer */}
            <div className="px-4 py-3 bg-dark-900/90 border-t border-slate-800 grid grid-cols-3 gap-2 text-center text-[11px] font-mono">
              <div className="p-2 rounded bg-dark-850 border border-slate-800/80">
                <span className="text-slate-400 block">Runtime</span>
                <span className="text-emerald-400 font-semibold">Java 17</span>
              </div>
              <div className="p-2 rounded bg-dark-850 border border-slate-800/80">
                <span className="text-slate-400 block">Framework</span>
                <span className="text-cyan-400 font-semibold">Spring Boot</span>
              </div>
              <div className="p-2 rounded bg-dark-850 border border-slate-800/80">
                <span className="text-slate-400 block">Telemetry</span>
                <span className="text-purple-400 font-semibold">Splunk</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

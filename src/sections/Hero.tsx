import React, { useState } from 'react';
import { 
  FileDown, 
  ArrowRight, 
  Mail, 
  MapPin, 
  Briefcase, 
  CheckCircle2, 
  Copy, 
  Check, 
  Terminal, 
  Sparkles,
  Shield,
  Layers,
  Activity,
  Code2
} from 'lucide-react';
import { personalProfile } from '../data/portfolioData';
import { LinkedinIcon, GithubIcon } from '../components/Icons';
import { StatsCounter } from '../components/StatsCounter';
import { sounds } from '../components/SoundEffects';

interface HeroProps {
  onCopySnippet: (text: string, label: string) => void;
}

interface CodeSnippet {
  id: string;
  name: string;
  lang: string;
  icon: typeof Code2;
  code: string;
  highlights: { runtime: string; framework: string; keyFeature: string };
}

const SNIPPETS: CodeSnippet[] = [
  {
    id: 'rest',
    name: 'UtilityServiceController.java',
    lang: 'java',
    icon: Terminal,
    code: `// Enterprise Java 17 Microservice REST Controller
@RestController
@RequestMapping("/api/v1/utility/services")
@Slf4j
public class UtilityServiceController {

    private final CustomerServiceProgram serviceProgram;

    @GetMapping("/{accountId}/eligibility")
    @PreAuthorize("hasRole('OPERATOR') or hasAuthority('SCOPE_read:utility')")
    public ResponseEntity<EligibilityResponse> checkEligibility(
            @PathVariable @NotBlank String accountId) {
        log.info("Evaluating eligibility for account [{}]", accountId);
        return ResponseEntity.ok(serviceProgram.evaluate(accountId));
    }
}`,
    highlights: {
      runtime: 'Java 17',
      framework: 'Spring Boot 3',
      keyFeature: 'RBAC Security',
    },
  },
  {
    id: 'security',
    name: 'SecurityConfig.java',
    lang: 'java',
    icon: Shield,
    code: `// Azure Entra ID (SSO) & JWT Token Validator
@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        return http
            .csrf(AbstractHttpConfigurer::disable)
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/actuator/health").permitAll()
                .requestMatchers("/api/v1/admin/**").hasRole("ADMIN")
                .anyRequest().authenticated())
            .oauth2ResourceServer(oauth2 -> oauth2.jwt(Customizer.withDefaults()))
            .build();
    }
}`,
    highlights: {
      runtime: 'OAuth2.0 / JWT',
      framework: 'Spring Security',
      keyFeature: 'Azure Entra ID',
    },
  },
  {
    id: 'openai',
    name: 'OpenAIResumeParser.java',
    lang: 'java',
    icon: Sparkles,
    code: `// Azure OpenAI Semantic Extraction & Matching
@Service
public class OpenAIResumeParser {

    private final OpenAIClient openAIClient;

    public MatchScore parseAndScore(String resumeText, String jobDescription) {
        ChatCompletionsOptions options = new ChatCompletionsOptions(List.of(
            new ChatMessage(ChatRole.SYSTEM, "Extract skills & score candidate fit in JSON"),
            new ChatMessage(ChatRole.USER, "Resume: " + resumeText + "\\nJob: " + jobDescription)
        ));
        return openAIClient.getChatCompletions("gpt-4o", options);
    }
}`,
    highlights: {
      runtime: 'Azure OpenAI',
      framework: 'JSON Schema',
      keyFeature: 'Semantic Scoring',
    },
  },
  {
    id: 'observability',
    name: 'SplunkMetricsLogger.java',
    lang: 'java',
    icon: Activity,
    code: `// Splunk Telemetry & Production Observability
@Aspect
@Component
@Slf4j
public class SplunkMetricsLogger {

    @Around("@annotation(LogExecutionTime)")
    public Object logExecutionTime(ProceedingJoinPoint joinPoint) throws Throwable {
        long start = System.currentTimeMillis();
        Object proceed = joinPoint.proceed();
        long executionTime = System.currentTimeMillis() - start;
        
        log.info("SPLUNK_METRIC event=api_exec method={} duration_ms={}",
            joinPoint.getSignature().getName(), executionTime);
        return proceed;
    }
}`,
    highlights: {
      runtime: 'Splunk Log Agent',
      framework: 'Spring AOP',
      keyFeature: 'Real-time Metrics',
    },
  },
];

export const Hero: React.FC<HeroProps> = ({ onCopySnippet }) => {
  const [activeTab, setActiveTab] = useState<string>('rest');
  const [copiedCode, setCopiedCode] = useState(false);
  const [hoveredBadge, setHoveredBadge] = useState<string | null>(null);

  const currentSnippet = SNIPPETS.find((s) => s.id === activeTab) || SNIPPETS[0];

  const handleCopyCode = () => {
    navigator.clipboard.writeText(currentSnippet.code);
    setCopiedCode(true);
    sounds.playSuccess();
    onCopySnippet(currentSnippet.code, `${currentSnippet.name} copied to clipboard!`);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const floatingBadges = [
    { name: 'Java 17', color: 'text-amber-400 border-amber-500/30 bg-amber-500/10', pos: '-top-4 -left-4', anim: 'animate-float-slow' },
    { name: 'Spring Boot', color: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10', pos: '-top-6 -right-4', anim: 'animate-float-delayed' },
    { name: 'Azure OpenAI', color: 'text-cyan-400 border-cyan-500/30 bg-cyan-500/10', pos: '-bottom-5 -left-3', anim: 'animate-float-delayed' },
    { name: 'Splunk', color: 'text-purple-400 border-purple-500/30 bg-purple-500/10', pos: '-bottom-4 -right-3', anim: 'animate-float-slow' },
  ];

  return (
    <section 
      id="hero" 
      className="relative min-h-[95vh] flex flex-col justify-center pt-28 pb-12 px-4 sm:px-6 lg:px-8 bg-grid-pattern bg-radial-gradient overflow-hidden"
    >
      {/* Background animated glow orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[550px] h-[550px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none animate-pulse-subtle" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
          
          {/* Left Column: Hero Intro & Value Prop */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status Badge with Live Pulse */}
            <div 
              onMouseEnter={() => sounds.playHover()}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 mb-6 shadow-lg shadow-emerald-500/5 hover:border-emerald-400/60 transition-all hover:scale-105 cursor-default"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>4 Years Enterprise Experience • U.S. Client Engagements</span>
            </div>

            {/* Main Greeting & Title with Rich Gradient */}
            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2">
                <h2 className="text-lg sm:text-xl font-mono text-emerald-400 font-semibold tracking-wide">
                  Hi, I'm {personalProfile.preferredName}
                </h2>
                <span className="text-xl animate-bounce">👋</span>
              </div>
              
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-100 tracking-tight leading-none sm:leading-tight">
                Java Full Stack <br />
                <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-sky-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(52,211,153,0.3)]">
                  Developer
                </span>
              </h1>
            </div>

            {/* Core Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed mb-6 font-normal">
              Building high-throughput, resilient enterprise applications with <strong className="text-emerald-400 font-semibold">Java 17, Spring Boot, Microservices</strong>, and modern reactive frontends.
            </p>

            {/* Location & Specialist Badges */}
            <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm font-mono text-slate-400 mb-8">
              <div 
                onMouseEnter={() => sounds.playHover()}
                className="flex items-center gap-2 bg-dark-850/90 px-3.5 py-2 rounded-xl border border-slate-800 hover:border-emerald-500/40 transition-all hover:translate-y-[-2px]"
              >
                <MapPin className="w-4 h-4 text-emerald-400 animate-pulse" />
                <span>{personalProfile.location}</span>
              </div>
              <div 
                onMouseEnter={() => sounds.playHover()}
                className="flex items-center gap-2 bg-dark-850/90 px-3.5 py-2 rounded-xl border border-slate-800 hover:border-cyan-500/40 transition-all hover:translate-y-[-2px]"
              >
                <Briefcase className="w-4 h-4 text-cyan-400" />
                <span>Spring Boot & Microservices</span>
              </div>
              <div 
                onMouseEnter={() => sounds.playHover()}
                className="flex items-center gap-2 bg-dark-850/90 px-3.5 py-2 rounded-xl border border-slate-800 hover:border-purple-500/40 transition-all hover:translate-y-[-2px]"
              >
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span>Azure OpenAI & SSO</span>
              </div>
            </div>

            {/* CTA Buttons with Hover Glows */}
            <div className="flex flex-wrap items-center gap-4 mb-8 w-full sm:w-auto">
              <a
                href="#projects"
                onMouseEnter={() => sounds.playHover()}
                onClick={() => sounds.playClick()}
                className="relative group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm bg-emerald-500 hover:bg-emerald-400 text-dark-950 shadow-xl shadow-emerald-500/25 transition-all hover:scale-[1.03] active:scale-95 w-full sm:w-auto text-center overflow-hidden cursor-pointer"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span>View My Projects</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              <a
                href={personalProfile.resumePath}
                download="Munnam-Sateesh-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => sounds.playHover()}
                onClick={() => sounds.playClick()}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm bg-dark-850 hover:bg-dark-800 text-slate-200 border border-slate-700/90 hover:border-emerald-500/60 hover:text-emerald-400 shadow-lg transition-all hover:scale-[1.03] active:scale-95 w-full sm:w-auto text-center cursor-pointer"
              >
                <FileDown className="w-4 h-4 text-emerald-400" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Socials & Direct Contact */}
            <div className="flex items-center gap-3 pt-4 border-t border-slate-800/80 w-full">
              <span className="text-xs font-mono text-slate-500 mr-1">Connect:</span>
              <a
                href={personalProfile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => sounds.playHover()}
                className="p-2.5 rounded-xl bg-dark-850 border border-slate-800 text-slate-400 hover:text-white hover:bg-[#0077b5] hover:border-[#0077b5] hover:scale-110 active:scale-95 transition-all shadow-sm cursor-pointer"
                aria-label="LinkedIn Profile"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={personalProfile.github}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => sounds.playHover()}
                className="p-2.5 rounded-xl bg-dark-850 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 hover:border-slate-600 hover:scale-110 active:scale-95 transition-all shadow-sm cursor-pointer"
                aria-label="GitHub Profile"
                title="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalProfile.email}`}
                onMouseEnter={() => sounds.playHover()}
                className="p-2.5 rounded-xl bg-dark-850 border border-slate-800 text-slate-400 hover:text-white hover:bg-emerald-600 hover:border-emerald-500 hover:scale-110 active:scale-95 transition-all shadow-sm cursor-pointer"
                aria-label="Email Munnam Sateesh"
                title="Email Directly"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Code Console with Tabs & Floating Badges */}
          <div className="lg:col-span-5 w-full relative">
            
            {/* Floating Technology Badges */}
            {floatingBadges.map((badge, idx) => (
              <div
                key={idx}
                onMouseEnter={() => {
                  setHoveredBadge(badge.name);
                  sounds.playHover();
                }}
                onMouseLeave={() => setHoveredBadge(null)}
                className={`absolute z-20 hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-[11px] font-mono font-bold border backdrop-blur-md shadow-xl ${badge.color} ${badge.pos} ${badge.anim} transition-transform hover:scale-110 cursor-pointer`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
                <span>{badge.name}</span>
              </div>
            ))}

            {/* Interactive Code Console Container */}
            <div className="relative rounded-2xl glass-panel border border-slate-700/80 shadow-2xl overflow-hidden group animated-gradient-border">
              
              {/* Terminal Tab Bar */}
              <div className="flex items-center justify-between px-3 py-2.5 bg-dark-900/95 border-b border-slate-800 overflow-x-auto gap-2">
                <div className="flex items-center gap-1.5 shrink-0">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                </div>

                {/* Code Snippet Tabs */}
                <div className="flex items-center gap-1 overflow-x-auto py-0.5">
                  {SNIPPETS.map((snippet) => {
                    const Icon = snippet.icon;
                    const isActive = activeTab === snippet.id;
                    return (
                      <button
                        key={snippet.id}
                        onClick={() => {
                          setActiveTab(snippet.id);
                          sounds.playClick();
                        }}
                        onMouseEnter={() => sounds.playHover()}
                        className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono transition-all shrink-0 cursor-pointer ${
                          isActive
                            ? 'bg-dark-800 text-emerald-400 border border-emerald-500/30 font-semibold shadow-inner'
                            : 'text-slate-400 hover:text-slate-200 hover:bg-dark-850'
                        }`}
                      >
                        <Icon className="w-3 h-3" />
                        <span className="truncate max-w-[120px]">{snippet.name}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Copy Button */}
                <button
                  onClick={handleCopyCode}
                  className="flex items-center gap-1 px-2 py-1 rounded bg-dark-850 border border-slate-800 text-[11px] font-mono text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors shrink-0 cursor-pointer"
                  title="Copy code to clipboard"
                >
                  {copiedCode ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Code Body */}
              <div className="p-4 font-mono text-[11px] sm:text-xs text-slate-300 overflow-x-auto bg-dark-950/95 leading-relaxed min-h-[220px]">
                <pre className="text-slate-300 font-mono">
                  <code>{currentSnippet.code}</code>
                </pre>
              </div>

              {/* Spec Badge Footer */}
              <div className="px-4 py-3 bg-dark-900/90 border-t border-slate-800 grid grid-cols-3 gap-2 text-center text-[11px] font-mono">
                <div className="p-1.5 rounded-lg bg-dark-850 border border-slate-800/80 hover:border-emerald-500/30 transition-colors">
                  <span className="text-slate-500 block text-[10px]">Runtime</span>
                  <span className="text-emerald-400 font-semibold">{currentSnippet.highlights.runtime}</span>
                </div>
                <div className="p-1.5 rounded-lg bg-dark-850 border border-slate-800/80 hover:border-cyan-500/30 transition-colors">
                  <span className="text-slate-500 block text-[10px]">Framework</span>
                  <span className="text-cyan-400 font-semibold">{currentSnippet.highlights.framework}</span>
                </div>
                <div className="p-1.5 rounded-lg bg-dark-850 border border-slate-800/80 hover:border-purple-500/30 transition-colors">
                  <span className="text-slate-500 block text-[10px]">Key Feature</span>
                  <span className="text-purple-400 font-semibold">{currentSnippet.highlights.keyFeature}</span>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Dynamic Enterprise Stats Counter HUD */}
        <StatsCounter />

      </div>
    </section>
  );
};

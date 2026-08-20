import { Terminal, ArrowUp, Mail, Heart } from 'lucide-react';
import { personalProfile } from '../data/portfolioData';
import { LinkedinIcon, GithubIcon } from './Icons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-dark-950 text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-850">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-mono font-bold text-sm">
              <Terminal className="w-4 h-4" />
            </div>
            <div>
              <span className="font-bold text-slate-200">{personalProfile.name}</span>
              <p className="text-xs text-slate-500 font-mono">
                Java Full Stack Developer • Hyderabad, India
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={personalProfile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-dark-850 border border-slate-800 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={personalProfile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-dark-850 border border-slate-800 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalProfile.email}`}
              className="p-2.5 rounded-lg bg-dark-850 border border-slate-800 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
              aria-label="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-lg bg-dark-850 border border-slate-800 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors ml-2"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Munnam Sateesh. Enterprise-grade Full Stack Portfolio.
          </p>
          <p className="font-mono flex items-center gap-1.5">
            Crafted with React, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

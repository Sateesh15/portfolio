import React, { useState, useEffect } from 'react';
import { Menu, X, FileDown, Terminal, Volume2, VolumeX } from 'lucide-react';
import { personalProfile } from '../data/portfolioData';
import { sounds } from './SoundEffects';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Architecture', href: '#architecture' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'AI & Cloud', href: '#ai-cloud' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleToggleSound = () => {
    const newState = sounds.toggle();
    setSoundEnabled(newState);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-dark-950/85 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-lg shadow-black/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#"
          onMouseEnter={() => sounds.playHover()}
          className="flex items-center gap-2.5 text-slate-100 group transition-transform hover:scale-[1.02]"
        >
          <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-mono font-bold text-sm group-hover:border-emerald-400/60 transition-colors shadow-inner">
            <Terminal className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold tracking-tight text-base sm:text-lg text-slate-100 flex items-center gap-1">
              Munnam Sateesh
            </span>
            <span className="text-[11px] font-mono text-emerald-400 -mt-1">
              Java Full Stack Dev
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.label}
                href={link.href}
                onMouseEnter={() => sounds.playHover()}
                onClick={() => sounds.playClick()}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                  isActive
                    ? 'text-emerald-400 bg-emerald-500/10 font-semibold'
                    : 'text-slate-300 hover:text-slate-100 hover:bg-slate-800/50'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Sound FX Toggle Button */}
          <button
            onClick={handleToggleSound}
            className={`p-2 rounded-xl border text-xs font-mono transition-all flex items-center gap-1.5 cursor-pointer ${
              soundEnabled
                ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40 shadow-[0_0_10px_rgba(52,211,153,0.3)]'
                : 'bg-dark-850 text-slate-400 border-slate-800 hover:text-slate-200'
            }`}
            title={soundEnabled ? 'Mute Sound FX' : 'Enable Sci-Fi Sound FX'}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4 text-emerald-400 animate-pulse" /> : <VolumeX className="w-4 h-4" />}
            <span className="hidden md:inline text-[11px] font-semibold">{soundEnabled ? 'FX ON' : 'FX OFF'}</span>
          </button>

          <a
            href={personalProfile.resumePath}
            download="Munnam-Sateesh-Resume.pdf"
            onMouseEnter={() => sounds.playHover()}
            onClick={() => sounds.playClick()}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs md:text-sm font-bold bg-emerald-500 hover:bg-emerald-400 text-dark-950 shadow-sm transition-all hover:shadow-emerald-500/25 active:scale-95 cursor-pointer"
          >
            <FileDown className="w-4 h-4" />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={handleToggleSound}
            className="p-2 rounded-lg bg-dark-850 border border-slate-800 text-slate-300"
          >
            {soundEnabled ? <Volume2 className="w-4 h-4 text-emerald-400" /> : <VolumeX className="w-4 h-4" />}
          </button>

          <a
            href={personalProfile.resumePath}
            download="Munnam-Sateesh-Resume.pdf"
            className="sm:hidden inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-emerald-500 text-dark-950"
            aria-label="Download Resume"
          >
            <FileDown className="w-3.5 h-3.5" />
            Resume
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-dark-850 border border-slate-800 text-slate-300 hover:text-slate-100"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bg-dark-950/95 backdrop-blur-xl border-b border-slate-800 p-6 shadow-2xl animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:text-emerald-400 hover:bg-slate-800/60 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-slate-800 flex flex-col gap-2">
              <a
                href={personalProfile.resumePath}
                download="Munnam-Sateesh-Resume.pdf"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-emerald-500 text-dark-950 font-bold text-sm"
              >
                <FileDown className="w-4 h-4" />
                Download Resume (PDF)
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

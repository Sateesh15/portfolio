import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { sounds } from './SoundEffects';

export const ScrollToTop: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      const progress = totalScroll > 0 ? (currentScroll / totalScroll) * 100 : 0;
      setScrollProgress(progress);
      setVisible(currentScroll > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    sounds.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <div className="fixed bottom-6 right-6 z-40 animate-in fade-in zoom-in duration-300">
      <button
        onClick={scrollToTop}
        onMouseEnter={() => sounds.playHover()}
        className="relative w-12 h-12 rounded-full bg-dark-900/90 border border-emerald-500/30 flex items-center justify-center text-emerald-400 hover:text-white hover:bg-emerald-500 hover:border-emerald-400 shadow-xl shadow-emerald-500/20 transition-all hover:scale-110 active:scale-95 group cursor-pointer backdrop-blur-md"
        aria-label="Scroll to top"
        title="Scroll to top"
      >
        {/* Circular Progress Ring */}
        <svg className="absolute inset-0 w-12 h-12 -rotate-90 pointer-events-none">
          <circle
            cx="24"
            cy="24"
            r={radius}
            className="stroke-slate-800"
            strokeWidth="2.5"
            fill="transparent"
          />
          <circle
            cx="24"
            cy="24"
            r={radius}
            className="stroke-emerald-400 transition-all duration-150"
            strokeWidth="2.5"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            fill="transparent"
          />
        </svg>

        <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform relative z-10" />
      </button>
    </div>
  );
};

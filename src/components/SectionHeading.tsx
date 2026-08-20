import React from 'react';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  alignment?: 'center' | 'left';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  alignment = 'center',
}) => {
  const alignClass = alignment === 'center' ? 'text-center items-center' : 'text-left items-start';

  return (
    <div className={`flex flex-col mb-12 md:mb-16 ${alignClass}`}>
      {badge && (
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-3 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          {badge}
        </div>
      )}
      <h2 className="text-2xl md:text-4xl font-extrabold text-slate-100 tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-slate-400 text-sm md:text-base max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className={`mt-4 h-1 w-12 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full ${alignment === 'center' ? '' : ''}`} />
    </div>
  );
};

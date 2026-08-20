import React from 'react';

interface TechBadgeProps {
  name: string;
  variant?: 'default' | 'primary' | 'cyan' | 'purple' | 'subtle';
  size?: 'sm' | 'md';
}

export const TechBadge: React.FC<TechBadgeProps> = ({ 
  name, 
  variant = 'default',
  size = 'md' 
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30';
      case 'cyan':
        return 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30';
      case 'purple':
        return 'bg-purple-500/10 text-purple-300 border-purple-500/30';
      case 'subtle':
        return 'bg-slate-800/60 text-slate-300 border-slate-700/50';
      default:
        return 'bg-dark-800 text-slate-200 border-slate-700/60 hover:border-slate-500/60';
    }
  };

  const getSizeStyles = () => {
    return size === 'sm' 
      ? 'text-xs px-2.5 py-0.5' 
      : 'text-xs md:text-sm px-3 py-1';
  };

  return (
    <span
      className={`inline-flex items-center font-mono font-medium rounded-md border transition-all duration-200 ${getVariantStyles()} ${getSizeStyles()}`}
    >
      {name}
    </span>
  );
};

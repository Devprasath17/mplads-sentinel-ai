import React from 'react';
import { RiskLevel } from '../../types';
import { ShieldAlert, AlertTriangle, AlertCircle, CheckCircle2 } from 'lucide-react';

interface RiskBadgeProps {
  level: RiskLevel | string;
  score?: number;
  showIcon?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const RiskBadge: React.FC<RiskBadgeProps> = ({ level, score, showIcon = true, size = 'md' }) => {
  const lvl = level.toUpperCase() as RiskLevel;

  let bgClass = 'bg-slate-800 text-slate-300 border-slate-700';
  let Icon = CheckCircle2;

  if (lvl === 'CRITICAL') {
    bgClass = 'bg-rose-950/80 text-rose-300 border-rose-600/50 shadow-rose-950/40';
    Icon = ShieldAlert;
  } else if (lvl === 'HIGH') {
    bgClass = 'bg-amber-950/80 text-amber-300 border-amber-500/50 shadow-amber-950/40';
    Icon = AlertTriangle;
  } else if (lvl === 'MODERATE') {
    bgClass = 'bg-yellow-950/60 text-yellow-300 border-yellow-600/40';
    Icon = AlertCircle;
  } else if (lvl === 'LOW') {
    bgClass = 'bg-emerald-950/60 text-emerald-300 border-emerald-600/40';
    Icon = CheckCircle2;
  }

  const sizeClasses = {
    sm: 'px-1.5 py-0.5 text-[10px]',
    md: 'px-2.5 py-1 text-xs font-semibold',
    lg: 'px-3 py-1.5 text-sm font-bold',
  };

  return (
    <span className={`inline-flex items-center gap-1.5 border rounded-md uppercase tracking-wider font-mono shadow-sm ${bgClass} ${sizeClasses[size]}`}>
      {showIcon && <Icon className={size === 'sm' ? 'w-3 h-3' : size === 'lg' ? 'w-4.5 h-4.5' : 'w-3.5 h-3.5'} />}
      <span>{lvl}</span>
      {score !== undefined && (
        <span className="font-bold border-l border-current/30 pl-1.5 ml-0.5">
          {score}/100
        </span>
      )}
    </span>
  );
};

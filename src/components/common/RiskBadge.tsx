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
  const lvl = (level || 'LOW').toUpperCase() as RiskLevel;

  let bgClass = 'bg-slate-100 text-slate-700 border-slate-300';
  let Icon = CheckCircle2;

  if (lvl === 'CRITICAL') {
    bgClass = 'bg-red-50 text-red-700 border-red-200';
    Icon = ShieldAlert;
  } else if (lvl === 'HIGH') {
    bgClass = 'bg-red-50 text-red-700 border-red-200';
    Icon = AlertTriangle;
  } else if (lvl === 'MODERATE') {
    bgClass = 'bg-amber-50 text-amber-700 border-amber-200';
    Icon = AlertCircle;
  } else if (lvl === 'LOW') {
    bgClass = 'bg-emerald-50 text-emerald-700 border-emerald-200';
    Icon = CheckCircle2;
  }

  const sizeClasses = {
    sm: 'px-1.5 py-0.5 text-[10px]',
    md: 'px-2.5 py-1 text-xs font-semibold',
    lg: 'px-3 py-1.5 text-sm font-bold',
  };

  return (
    <span className={`inline-flex items-center gap-1.5 border rounded-md uppercase tracking-wider font-mono shadow-2xs ${bgClass} ${sizeClasses[size]}`}>
      {showIcon && <Icon className={size === 'sm' ? 'w-3 h-3' : size === 'lg' ? 'w-4 h-4' : 'w-3.5 h-3.5'} />}
      <span>{lvl}</span>
      {score !== undefined && (
        <span className="font-bold border-l border-current/30 pl-1.5 ml-0.5 font-mono">
          {score}/100
        </span>
      )}
    </span>
  );
};


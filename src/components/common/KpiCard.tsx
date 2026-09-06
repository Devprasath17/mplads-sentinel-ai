import React from 'react';
import { LucideIcon } from 'lucide-react';

interface KpiCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  subtext?: string;
  badgeText?: string;
  badgeType?: 'primary' | 'warning' | 'alert' | 'success';
  icon?: LucideIcon;
  trend?: string;
  isPositive?: boolean;
}

export const KpiCard: React.FC<KpiCardProps> = ({
  title,
  value,
  subtitle,
  subtext,
  badgeText,
  badgeType = 'primary',
  icon: Icon,
  trend,
  isPositive
}) => {
  let badgeColor = 'bg-blue-950 text-blue-300 border-blue-800';
  if (badgeType === 'warning') badgeColor = 'bg-amber-950 text-amber-300 border-amber-800';
  if (badgeType === 'alert') badgeColor = 'bg-rose-950 text-rose-300 border-rose-800';
  if (badgeType === 'success') badgeColor = 'bg-emerald-950 text-emerald-300 border-emerald-800';

  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 shadow-gov-md hover:border-slate-700 transition-all group">
      <div className="flex items-start justify-between gap-2">
        <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider font-mono">
          {title}
        </div>
        {Icon && (
          <div className="p-2 rounded-lg bg-slate-800/80 text-blue-400 group-hover:bg-blue-950/60 group-hover:text-blue-300 transition-colors">
            <Icon className="w-4 h-4" />
          </div>
        )}
      </div>

      <div className="mt-2 flex items-baseline gap-2">
        <span className="text-2xl lg:text-3xl font-extrabold text-white font-mono tracking-tight">
          {value}
        </span>
        {trend && (
          <span className={`text-xs font-mono font-bold ${isPositive ? 'text-emerald-400' : 'text-rose-400'}`}>
            {trend}
          </span>
        )}
      </div>

      {subtitle && (
        <div className="mt-1 text-xs text-slate-300 font-medium">
          {subtitle}
        </div>
      )}

      {(subtext || badgeText) && (
        <div className="mt-3 pt-2.5 border-t border-slate-800/80 flex items-center justify-between gap-2 text-xs">
          {subtext && <span className="text-slate-400 truncate">{subtext}</span>}
          {badgeText && (
            <span className={`px-2 py-0.5 rounded text-[11px] font-mono font-semibold border ${badgeColor}`}>
              {badgeText}
            </span>
          )}
        </div>
      )}
    </div>
  );
};

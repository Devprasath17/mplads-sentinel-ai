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
  let badgeColor = 'bg-blue-50 text-blue-700 border-blue-200';
  if (badgeType === 'warning') badgeColor = 'bg-amber-50 text-amber-700 border-amber-200';
  if (badgeType === 'alert') badgeColor = 'bg-red-50 text-red-700 border-red-200';
  if (badgeType === 'success') badgeColor = 'bg-emerald-50 text-emerald-700 border-emerald-200';

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-gov-sm hover:shadow-gov-md hover:border-slate-300 transition-all duration-150 group flex flex-col justify-between">
      <div>
        <div className="flex items-start justify-between gap-2">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider font-mono">
            {title}
          </div>
          {Icon && (
            <div className="p-2 rounded-lg bg-blue-50 text-blue-700 group-hover:bg-blue-100 transition-colors shrink-0">
              <Icon className="w-4 h-4" />
            </div>
          )}
        </div>

        <div className="mt-2.5 flex items-baseline gap-2">
          <span className="text-3xl font-extrabold text-slate-900 font-sans tracking-tight">
            {value}
          </span>
          {trend && (
            <span className={`text-xs font-semibold font-mono px-1.5 py-0.5 rounded ${isPositive ? 'text-emerald-700 bg-emerald-50' : 'text-red-700 bg-red-50'}`}>
              {trend}
            </span>
          )}
        </div>

        {subtitle && (
          <div className="mt-1 text-xs text-slate-600 font-medium leading-relaxed">
            {subtitle}
          </div>
        )}
      </div>

      {(subtext || badgeText) && (
        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between gap-2 text-xs">
          {subtext && <span className="text-slate-500 truncate font-medium">{subtext}</span>}
          {badgeText && (
            <span className={`px-2 py-0.5 rounded text-[11px] font-semibold border shrink-0 ${badgeColor}`}>
              {badgeText}
            </span>
          )}
        </div>
      )}
    </div>
  );
};


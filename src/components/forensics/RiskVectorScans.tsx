import React from 'react';
import { NATIONAL_OVERVIEW_DATA } from '../../../server/mockData';
import { DollarSign, Clock, Zap, MapPin, Scale, ShieldAlert } from 'lucide-react';

export const RiskVectorScans: React.FC = () => {
  const icons = [DollarSign, Clock, Zap, MapPin, Scale, ShieldAlert];

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 shadow-gov-md">
      <div className="flex items-center justify-between gap-2 mb-3">
        <div>
          <div className="text-xs font-bold font-mono uppercase tracking-wider text-slate-300">
            FORENSIC DIMENSION SCANNING
          </div>
          <div className="text-sm font-extrabold text-white">
            National Algorithmic Risk Vector Scans
          </div>
        </div>

        <div className="text-[11px] font-mono text-slate-400">
          Standard baseline model: 12-month rolling Gaussian variance scan
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-3">
        {NATIONAL_OVERVIEW_DATA.vectors.map((vec, idx) => {
          const Icon = icons[idx % icons.length];
          const isHigh = vec.score >= 75;

          return (
            <div
              key={idx}
              className="bg-slate-950/80 border border-slate-800 rounded-lg p-3 hover:border-slate-700 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span>{vec.name}</span>
                  <span className="font-semibold text-rose-400">{vec.count} Works</span>
                </div>

                <div className="mt-2 flex items-baseline justify-between">
                  <span className="text-2xl font-extrabold font-mono text-white">
                    {vec.score}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">/ 100 Risk</span>
                </div>
              </div>

              {/* Sparkline simulation bar */}
              <div className="mt-3 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono">
                <span className="text-slate-400">12M Trend</span>
                <span className={`font-bold ${isHigh ? 'text-rose-400' : 'text-amber-400'}`}>
                  {vec.trend}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

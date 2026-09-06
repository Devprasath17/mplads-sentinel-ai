import React from 'react';
import { AlertTriangle, ShieldCheck } from 'lucide-react';

export const DemoBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-amber-950 via-slate-900 to-amber-950 border-b border-amber-500/30 px-4 py-1.5 text-xs text-amber-200 flex flex-wrap items-center justify-between gap-2 shadow-sm">
      <div className="flex items-center gap-2 font-mono">
        <span className="bg-amber-500 text-slate-950 font-bold px-1.5 py-0.5 rounded text-[10px] uppercase tracking-wider">
          SYNTHETIC DEMO DATA
        </span>
        <span className="text-amber-300/90 font-medium">
          MPLADS SENTINEL AI — Executive Oversight & Algorithmic Risk Prioritization Platform
        </span>
      </div>

      <div className="flex items-center gap-4 text-[11px]">
        <div className="flex items-center gap-1.5 text-amber-300 font-semibold bg-amber-950/60 px-2 py-0.5 rounded border border-amber-500/30">
          <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
          <span>ANOMALY ≠ FRAUD (AI Prioritizes. Human Decides.)</span>
        </div>

        <div className="hidden md:flex items-center gap-1.5 text-emerald-400">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>NIC AI Safety Assured</span>
        </div>
      </div>
    </div>
  );
};

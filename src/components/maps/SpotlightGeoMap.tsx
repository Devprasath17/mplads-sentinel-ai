import React from 'react';
import { MapPin, Target, ShieldAlert } from 'lucide-react';

interface SpotlightGeoMapProps {
  alertCode?: string;
  locationName?: string;
  latLng?: string;
}

export const SpotlightGeoMap: React.FC<SpotlightGeoMapProps> = ({
  alertCode = 'ALT-2026-8802',
  locationName = 'Chennai, T. Nagar Ward 142',
  latLng = '13.0827° N, 80.2707° E'
}) => {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 shadow-gov-md">
      <div className="flex items-center justify-between gap-2 mb-2">
        <div className="text-xs font-bold font-mono text-slate-300 flex items-center gap-1.5">
          <Target className="w-4 h-4 text-rose-400" />
          <span>SPOTLIGHT INSPECTOR GEOSPATIAL SCAN</span>
        </div>
        <span className="text-[10px] font-mono text-rose-400 bg-rose-950 px-2 py-0.5 rounded border border-rose-800 font-bold">
          FOCUS: {alertCode}
        </span>
      </div>

      <div className="bg-slate-950 border border-slate-800 rounded-lg p-4 relative h-48 flex flex-col justify-between overflow-hidden">
        {/* Radar concentric circle animation */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-36 h-36 rounded-full border border-rose-500/30 animate-ping opacity-40" />
          <div className="w-24 h-24 rounded-full border border-rose-500/50" />
          <div className="w-12 h-12 rounded-full bg-rose-500/20 flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-rose-500 animate-pulse" />
          </div>
        </div>

        <div className="relative z-10 flex items-start justify-between">
          <div className="text-xs font-mono">
            <div className="font-bold text-white">{locationName}</div>
            <div className="text-[10px] text-slate-400">GPS: {latLng}</div>
          </div>

          <div className="bg-slate-900/90 border border-rose-500/40 p-2 rounded text-right">
            <div className="text-[10px] text-slate-400 font-mono">OVERLAP RADIUS</div>
            <div className="text-xs font-extrabold font-mono text-rose-400">180m Vector Zone</div>
          </div>
        </div>

        <div className="relative z-10 mt-auto flex items-center justify-between text-[11px] font-mono">
          <div className="bg-rose-950/80 border border-rose-500/60 px-2.5 py-1 rounded text-rose-300 font-bold">
            92% Duplicate Risk Overlap
          </div>
          <div className="text-slate-400">
            Scanning 500m Periphery
          </div>
        </div>
      </div>
    </div>
  );
};

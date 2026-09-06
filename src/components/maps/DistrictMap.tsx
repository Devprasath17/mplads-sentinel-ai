import React from 'react';
import { MapPin, AlertTriangle, ShieldCheck } from 'lucide-react';

interface DistrictMapProps {
  districtName?: string;
}

export const DistrictMap: React.FC<DistrictMapProps> = ({ districtName = 'Chennai Metropolitan District' }) => {
  const subZones = [
    { name: 'T. Nagar (High Density Zone X)', count: 14, risk: 'CRITICAL', color: 'border-rose-500 bg-rose-950/60 text-rose-300' },
    { name: 'Velachery / Lake Surplus Channel', count: 10, risk: 'HIGH', color: 'border-amber-500 bg-amber-950/60 text-amber-300' },
    { name: 'Royapuram / Wellness Annex', count: 8, risk: 'HIGH', color: 'border-amber-500 bg-amber-950/60 text-amber-300' },
    { name: 'Tondiarpet (Cleanest Execution)', count: 2, risk: 'LOW', color: 'border-emerald-500 bg-emerald-950/60 text-emerald-300' },
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 shadow-gov-md flex flex-col h-full">
      <div className="flex items-center justify-between gap-2 mb-3">
        <div>
          <div className="text-xs font-bold font-mono uppercase tracking-wider text-slate-300 flex items-center gap-2">
            <MapPin className="w-4 h-4 text-emerald-400" />
            <span>SPATIAL RISK DISTRIBUTION — CHENNAI METRO SUB-ZONES</span>
          </div>
          <div className="text-[11px] text-slate-400">GIS Live Layer • EPSG:3857</div>
        </div>

        <div className="flex items-center gap-1.5 font-mono text-[10px]">
          <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-bold">ALL WORKS (1,428)</span>
          <span className="px-2 py-0.5 rounded bg-rose-950 text-rose-300 font-bold border border-rose-800">CRITICAL FLAGS (8)</span>
        </div>
      </div>

      <div className="flex-1 bg-slate-950 border border-slate-800 rounded-lg p-4 relative overflow-hidden flex flex-col justify-between">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] opacity-25" />

        <div className="relative z-10 space-y-3">
          {subZones.map((zone, idx) => (
            <div key={idx} className={`p-3 rounded-lg border flex items-center justify-between text-xs ${zone.color}`}>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <div>
                  <div className="font-bold font-mono">{zone.name}</div>
                  <div className="text-[10px] opacity-80">{zone.count} Active Anomaly Vectors</div>
                </div>
              </div>
              <span className="font-mono text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-black/40 border border-current">
                {zone.risk}
              </span>
            </div>
          ))}
        </div>

        <div className="relative z-10 mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
          <div>Highest Density Zone X: <span className="text-rose-400 font-bold">Kodambakkam</span></div>
          <div>Cleanest Execution: <span className="text-emerald-400 font-bold">Zone IV (Tondiarpet)</span></div>
        </div>
      </div>
    </div>
  );
};

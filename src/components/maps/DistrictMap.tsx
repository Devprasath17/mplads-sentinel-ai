import React from 'react';
import { MapPin, AlertTriangle, ShieldCheck } from 'lucide-react';

interface DistrictMapProps {
  districtName?: string;
}

export const DistrictMap: React.FC<DistrictMapProps> = ({ districtName = 'Chennai Metropolitan District' }) => {
  const subZones = [
    { name: 'T. Nagar (High Density Zone X)', count: 14, risk: 'CRITICAL', color: 'border-red-200 bg-red-50 text-red-900' },
    { name: 'Velachery / Lake Surplus Channel', count: 10, risk: 'HIGH', color: 'border-amber-200 bg-amber-50 text-amber-900' },
    { name: 'Royapuram / Wellness Annex', count: 8, risk: 'HIGH', color: 'border-amber-200 bg-amber-50 text-amber-900' },
    { name: 'Tondiarpet (Cleanest Execution)', count: 2, risk: 'LOW', color: 'border-emerald-200 bg-emerald-50 text-emerald-900' },
  ];

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm flex flex-col h-full font-sans">
      <div className="flex items-center justify-between gap-2 mb-3 font-mono">
        <div>
          <div className="text-xs font-bold font-mono uppercase tracking-wider text-slate-900 flex items-center gap-2">
            <MapPin className="w-4 h-4 text-emerald-700" />
            <span>SPATIAL RISK DISTRIBUTION — CHENNAI METRO SUB-ZONES</span>
          </div>
          <div className="text-[11px] text-slate-500 font-sans mt-0.5">GIS Live Layer • EPSG:3857</div>
        </div>

        <div className="flex items-center gap-1.5 font-mono text-[10px]">
          <span className="px-2.5 py-1 rounded bg-slate-100 text-slate-700 font-bold border border-slate-200">ALL WORKS (1,428)</span>
          <span className="px-2.5 py-1 rounded bg-red-50 text-red-800 font-bold border border-red-200">CRITICAL FLAGS (8)</span>
        </div>
      </div>

      <div className="flex-1 bg-slate-50 border border-slate-200 rounded-lg p-4 relative overflow-hidden flex flex-col justify-between font-sans">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] opacity-40" />

        <div className="relative z-10 space-y-3 font-sans">
          {subZones.map((zone, idx) => (
            <div key={idx} className={`p-3.5 rounded-lg border flex items-center justify-between text-xs shadow-sm ${zone.color}`}>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 shrink-0" />
                <div>
                  <div className="font-bold font-mono text-slate-900">{zone.name}</div>
                  <div className="text-[10px] text-slate-600 mt-0.5">{zone.count} Active Anomaly Vectors</div>
                </div>
              </div>
              <span className="font-mono text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-white border border-current">
                {zone.risk}
              </span>
            </div>
          ))}
        </div>

        <div className="relative z-10 mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-[11px] font-mono text-slate-600">
          <div>Highest Density Zone X: <span className="text-red-700 font-bold">Kodambakkam</span></div>
          <div>Cleanest Execution: <span className="text-emerald-700 font-bold">Zone IV (Tondiarpet)</span></div>
        </div>
      </div>
    </div>
  );
};

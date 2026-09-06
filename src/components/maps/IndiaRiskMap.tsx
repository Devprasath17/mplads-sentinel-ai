import React from 'react';
import { useNavigate } from 'react-router-dom';
import { STATES_DATA } from '../../../server/mockData';
import { ExternalLink, ShieldAlert, MapPin } from 'lucide-react';

interface IndiaRiskMapProps {
  onSelectState?: (stateId: string) => void;
}

export const IndiaRiskMap: React.FC<IndiaRiskMapProps> = ({ onSelectState }) => {
  const navigate = useNavigate();

  // State coordinates mapping for visual simulation
  const stateCoordinates: Record<string, { lat: number; lng: number; label: string }> = {
    TN: { lat: 11.1271, lng: 78.6569, label: 'Tamil Nadu' },
    UP: { lat: 26.8467, lng: 80.9462, label: 'Uttar Pradesh' },
    MH: { lat: 19.7515, lng: 75.7139, label: 'Maharashtra' },
    WB: { lat: 22.9868, lng: 87.8550, label: 'West Bengal' },
    KA: { lat: 15.3173, lng: 75.7139, label: 'Karnataka' },
    BR: { lat: 25.0961, lng: 85.3131, label: 'Bihar' }
  };

  const handleStateClick = (code: string) => {
    if (onSelectState) onSelectState(code);
    else navigate(`/state/${code}`);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 shadow-gov-md relative overflow-hidden flex flex-col h-[420px]">
      <div className="flex items-center justify-between gap-2 mb-3">
        <div>
          <div className="text-xs font-bold font-mono uppercase tracking-wider text-slate-300 flex items-center gap-2">
            <MapPin className="w-4 h-4 text-blue-400" />
            <span>INDIA GEOGRAPHIC RISK INTELLIGENCE MAP</span>
          </div>
          <div className="text-[11px] text-slate-400">
            Real-time geospatial risk synthesis across 28 States & 8 UTs
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => handleStateClick('TN')}
            className="px-2.5 py-1 bg-blue-600 hover:bg-blue-500 text-white rounded text-xs font-semibold font-mono flex items-center gap-1.5 shadow-sm transition-all"
          >
            <span>Open TN State Dashboard</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Map visual graphic representation */}
      <div className="relative flex-1 bg-slate-950 rounded-lg border border-slate-800 overflow-hidden flex items-center justify-center p-4">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-30" />

        {/* India map vector zone nodes */}
        <div className="relative w-full max-w-lg h-full flex flex-col justify-between items-center py-4">
          <div className="absolute top-4 left-4 z-10 bg-slate-900/90 border border-slate-800 p-2.5 rounded-lg text-xs space-y-1">
            <div className="font-bold text-white text-[11px] font-mono">RISK LEGEND</div>
            <div className="flex items-center gap-2 text-[10px]">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse" />
              <span className="text-slate-300">High Risk Concentration (&gt;70)</span>
            </div>
            <div className="flex items-center gap-2 text-[10px]">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
              <span className="text-slate-300">Moderate Vigilance (50-70)</span>
            </div>
            <div className="flex items-center gap-2 text-[10px]">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <span className="text-slate-300">Standard Baseline (&lt;50)</span>
            </div>
          </div>

          {/* Interactive State Pins Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 z-10 w-full mt-8 px-4">
            {STATES_DATA.map(st => {
              const isHigh = st.riskIndex >= 70;
              return (
                <div
                  key={st.id}
                  onClick={() => handleStateClick(st.code)}
                  className={`p-3 rounded-lg border cursor-pointer transition-all hover:scale-105 ${
                    st.code === 'TN'
                      ? 'bg-rose-950/80 border-rose-500 text-white shadow-lg shadow-rose-950/50 ring-2 ring-rose-500/50'
                      : isHigh
                      ? 'bg-slate-900/90 border-amber-500/60 hover:border-amber-400 text-slate-200'
                      : 'bg-slate-900/90 border-slate-700 hover:border-slate-500 text-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-xs font-mono">{st.name}</span>
                    <span className={`text-xs font-extrabold font-mono ${isHigh ? 'text-rose-400' : 'text-amber-400'}`}>
                      {st.riskIndex}
                    </span>
                  </div>

                  <div className="mt-1 text-[10px] text-slate-400 flex items-center justify-between">
                    <span>Works: {st.totalProjects.toLocaleString()}</span>
                    <span className="text-rose-300 font-semibold">{st.highRiskCount} Flagged</span>
                  </div>

                  <div className="mt-2 text-[9px] font-mono text-blue-400 underline flex items-center gap-1">
                    <span>Inspect State</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-auto z-10 text-center text-[11px] text-slate-400 font-mono bg-slate-900/80 px-4 py-1.5 rounded-full border border-slate-800">
            Coordinates Reference: EPSG:4326 (Survey of India Standards)
          </div>
        </div>
      </div>
    </div>
  );
};

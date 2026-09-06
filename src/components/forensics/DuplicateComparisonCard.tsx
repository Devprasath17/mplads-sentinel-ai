import React from 'react';
import { DUPLICATE_COMPARISON_DATA } from '../../../server/mockData';
import { Search, ArrowRightLeft, MapPin, ShieldAlert, Check } from 'lucide-react';

export const DuplicateComparisonCard: React.FC = () => {
  const { currentProject, historicalWork, metrics, analysisRemark } = DUPLICATE_COMPARISON_DATA;

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 shadow-gov-md space-y-4">
      <div className="flex items-center justify-between gap-2 border-b border-slate-800 pb-3">
        <div>
          <div className="text-xs font-bold font-mono uppercase tracking-wider text-slate-300 flex items-center gap-2">
            <Search className="w-4 h-4 text-amber-400" />
            <span>NLP SIMILARITY & HISTORICAL ASSET CONCORDANCE</span>
          </div>
          <div className="text-[11px] text-slate-400">
            Geospatial & NLP Vector Duplicate Analysis Engine
          </div>
        </div>

        <span className="px-2.5 py-1 rounded bg-rose-950 text-rose-300 border border-rose-800 text-xs font-bold font-mono">
          CROSS-EXCUTION CORRELATION
        </span>
      </div>

      {/* Side-by-side comparison cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Current Project */}
        <div className="bg-slate-950 border border-blue-500/40 rounded-lg p-3 space-y-2 text-xs">
          <div className="flex items-center justify-between text-[10px] font-mono font-bold text-blue-400">
            <span>UNDER AUDIT: CURRENT WORK</span>
            <span className="bg-blue-900/60 px-1.5 py-0.5 rounded text-white">{currentProject.projectCode}</span>
          </div>

          <div className="font-bold text-white text-sm">
            {currentProject.title}
          </div>

          <div className="grid grid-cols-2 gap-2 text-[11px] font-mono text-slate-300 pt-1 border-t border-slate-800">
            <div>Sanction Year: <span className="text-white">{currentProject.sanctionYear}</span></div>
            <div>Sanction Cost: <span className="text-emerald-400 font-bold">{currentProject.sanctionedCost}</span></div>
            <div>Agency: <span className="text-slate-200">{currentProject.executingAgency}</span></div>
            <div>Contractor: <span className="text-slate-200">{currentProject.primaryContractor}</span></div>
          </div>

          <div className="text-[10px] font-mono text-slate-400 pt-1">
            GPS: <span className="text-slate-200">{currentProject.latLng}</span>
          </div>
        </div>

        {/* Historical Work */}
        <div className="bg-slate-950 border border-amber-500/40 rounded-lg p-3 space-y-2 text-xs">
          <div className="flex items-center justify-between text-[10px] font-mono font-bold text-amber-400">
            <span>HISTORICAL COMPLETED WORK</span>
            <span className="bg-amber-900/60 px-1.5 py-0.5 rounded text-white">{historicalWork.projectCode}</span>
          </div>

          <div className="font-bold text-white text-sm">
            {historicalWork.title}
          </div>

          <div className="grid grid-cols-2 gap-2 text-[11px] font-mono text-slate-300 pt-1 border-t border-slate-800">
            <div>Sanction Year: <span className="text-white">{historicalWork.sanctionYear}</span></div>
            <div>Sanction Cost: <span className="text-emerald-400 font-bold">{historicalWork.sanctionedCost}</span></div>
            <div>Agency: <span className="text-slate-200">{historicalWork.executingAgency}</span></div>
            <div>Contractor: <span className="text-slate-200">{historicalWork.primaryContractor}</span></div>
          </div>

          <div className="text-[10px] font-mono text-amber-300 pt-1 font-semibold">
            GPS: {historicalWork.latLng}
          </div>
        </div>
      </div>

      {/* Metric badges row */}
      <div className="grid grid-cols-3 gap-3 p-3 bg-slate-950/80 border border-slate-800 rounded-lg text-center">
        <div>
          <div className="text-[10px] font-mono text-slate-400">GEO PROXIMITY VECTOR</div>
          <div className="text-sm font-extrabold font-mono text-rose-400">{metrics.geoProximity}</div>
        </div>
        <div>
          <div className="text-[10px] font-mono text-slate-400">WORK TYPE NLP OVERLAP</div>
          <div className="text-sm font-extrabold font-mono text-rose-400">{metrics.nlpOverlapScore}</div>
        </div>
        <div>
          <div className="text-[10px] font-mono text-slate-400">AGENCY & VENDOR MATCH</div>
          <div className="text-sm font-extrabold font-mono text-rose-400">{metrics.agencyVendorMatch}</div>
        </div>
      </div>

      {/* Analytical Remark */}
      <div className="p-3 bg-amber-950/30 border border-amber-500/30 rounded-lg text-xs text-amber-200 leading-relaxed font-mono">
        <span className="font-bold uppercase text-amber-400">Analysis Remark: </span>
        {analysisRemark}
      </div>
    </div>
  );
};

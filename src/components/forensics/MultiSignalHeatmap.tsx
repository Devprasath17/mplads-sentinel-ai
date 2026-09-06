import React from 'react';
import { STATES_DATA } from '../../../server/mockData';

export const MultiSignalHeatmap: React.FC = () => {
  const getCellColor = (val: number) => {
    if (val >= 85) return 'bg-rose-950 text-rose-300 font-extrabold border-rose-800';
    if (val >= 70) return 'bg-amber-950 text-amber-300 font-bold border-amber-800';
    if (val >= 50) return 'bg-yellow-950/60 text-yellow-300 font-semibold border-yellow-800/60';
    return 'bg-slate-900 text-slate-400 border-slate-800';
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 shadow-gov-md flex flex-col h-full">
      <div className="flex items-center justify-between gap-2 mb-3">
        <div>
          <div className="text-xs font-bold font-mono uppercase tracking-wider text-slate-300">
            CORRELATIVE PATTERN MATRIX
          </div>
          <div className="text-sm font-extrabold text-white">
            Multi-Signal Risk Heatmap (State vs Risk Vector)
          </div>
        </div>
        <div className="text-[11px] font-mono text-slate-400">
          Showing percentage of works triggering risk threshold
        </div>
      </div>

      <div className="overflow-x-auto flex-1">
        <table className="w-full text-xs text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-800 text-[10px] font-mono uppercase text-slate-400">
              <th className="p-2">State / Region</th>
              <th className="p-2 text-center">Cost Dev</th>
              <th className="p-2 text-center">Delay</th>
              <th className="p-2 text-center">Velocity</th>
              <th className="p-2 text-center">Geo Dup</th>
              <th className="p-2 text-center">Disparity</th>
              <th className="p-2 text-center">Compliance</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60 font-mono">
            {STATES_DATA.map(st => (
              <tr key={st.id} className="hover:bg-slate-850 transition-colors">
                <td className="p-2 font-bold text-white text-xs">{st.name}</td>
                <td className="p-1 text-center">
                  <span className={`px-2 py-1 rounded border inline-block w-12 text-center text-xs ${getCellColor(st.vectors.cost)}`}>
                    {st.vectors.cost}%
                  </span>
                </td>
                <td className="p-1 text-center">
                  <span className={`px-2 py-1 rounded border inline-block w-12 text-center text-xs ${getCellColor(st.vectors.delay)}`}>
                    {st.vectors.delay}%
                  </span>
                </td>
                <td className="p-1 text-center">
                  <span className={`px-2 py-1 rounded border inline-block w-12 text-center text-xs ${getCellColor(st.vectors.velocity)}`}>
                    {st.vectors.velocity}%
                  </span>
                </td>
                <td className="p-1 text-center">
                  <span className={`px-2 py-1 rounded border inline-block w-12 text-center text-xs ${getCellColor(st.vectors.geoDup)}`}>
                    {st.vectors.geoDup}%
                  </span>
                </td>
                <td className="p-1 text-center">
                  <span className={`px-2 py-1 rounded border inline-block w-12 text-center text-xs ${getCellColor(st.vectors.disparity)}`}>
                    {st.vectors.disparity}%
                  </span>
                </td>
                <td className="p-1 text-center">
                  <span className={`px-2 py-1 rounded border inline-block w-12 text-center text-xs ${getCellColor(st.vectors.compliance)}`}>
                    {st.vectors.compliance}%
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

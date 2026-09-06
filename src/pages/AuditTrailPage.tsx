import React from 'react';
import { AUDIT_TRAIL_LOGS } from '../../server/mockData';
import { History, Lock, ShieldCheck } from 'lucide-react';

export const AuditTrailPage: React.FC = () => {
  return (
    <div className="p-4 lg:p-6 space-y-6 max-w-[1700px] mx-auto">
      <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl shadow-gov-md flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest flex items-center gap-1.5">
            <History className="w-4 h-4" />
            <span>CRYPTOGRAPHIC AUDIT LEDGER LOGS</span>
          </div>
          <h1 className="text-xl font-extrabold text-white tracking-tight font-mono mt-0.5">
            Immutable Audit Trail & Regulatory Compliance Log
          </h1>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs text-emerald-400 bg-emerald-950 px-3 py-1.5 rounded border border-emerald-800 font-bold">
          <Lock className="w-3.5 h-3.5" />
          <span>SHA-256 LEDGER VALIDATED</span>
        </div>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-gov-md">
        <table className="w-full text-xs text-left border-collapse font-mono">
          <thead>
            <tr className="border-b border-slate-800 bg-slate-950 text-[10px] uppercase text-slate-400">
              <th className="p-3">Timestamp</th>
              <th className="p-3">User & Officer</th>
              <th className="p-3">Action Recorded</th>
              <th className="p-3">Audit Details</th>
              <th className="p-3 text-right">Block Hash</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            {AUDIT_TRAIL_LOGS.map(log => (
              <tr key={log.id} className="hover:bg-slate-850 transition-colors">
                <td className="p-3 text-slate-400">{log.timestamp}</td>
                <td className="p-3 font-bold text-white">{log.user}</td>
                <td className="p-3">
                  <span className="bg-blue-950 text-blue-300 border border-blue-800 px-2 py-0.5 rounded text-[10px] font-bold">
                    {log.action}
                  </span>
                </td>
                <td className="p-3 text-slate-300">{log.details}</td>
                <td className="p-3 text-right text-emerald-400 font-bold">{log.blockHash}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

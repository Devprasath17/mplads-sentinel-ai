import React from 'react';
import { AUDIT_TRAIL_LOGS } from '../../server/mockData';
import { History, Lock, ShieldCheck } from 'lucide-react';

export const AuditTrailPage: React.FC = () => {
  return (
    <div className="p-4 lg:p-6 space-y-6 max-w-[1700px] mx-auto font-sans">
      <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-sm flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-widest flex items-center gap-1.5">
            <History className="w-4 h-4" />
            <span>CRYPTOGRAPHIC AUDIT LEDGER LOGS</span>
          </div>
          <h1 className="text-2xl font-extrabold text-[#0F172A] tracking-tight font-sans mt-0.5">
            Immutable Audit Trail & Regulatory Compliance Log
          </h1>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200 font-bold">
          <Lock className="w-3.5 h-3.5" />
          <span>SHA-256 LEDGER VALIDATED</span>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
        <table className="w-full text-xs text-left border-collapse font-mono">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50 text-[10px] uppercase text-slate-500 font-bold">
              <th className="p-3.5">Timestamp</th>
              <th className="p-3.5">User & Officer</th>
              <th className="p-3.5">Action Recorded</th>
              <th className="p-3.5">Audit Details</th>
              <th className="p-3.5 text-right">Block Hash</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {AUDIT_TRAIL_LOGS.map(log => (
              <tr key={log.id} className="hover:bg-slate-50/80 transition-colors">
                <td className="p-3.5 text-slate-500">{log.timestamp}</td>
                <td className="p-3.5 font-bold text-slate-900 font-sans">{log.user}</td>
                <td className="p-3.5">
                  <span className="bg-blue-50 text-blue-800 border border-blue-200 px-2.5 py-1 rounded text-[10px] font-bold">
                    {log.action}
                  </span>
                </td>
                <td className="p-3.5 text-slate-700 font-sans">{log.details}</td>
                <td className="p-3.5 text-right text-emerald-700 font-bold">{log.blockHash}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};


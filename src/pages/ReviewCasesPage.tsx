import React from 'react';
import { useNavigate } from 'react-router-dom';
import { REVIEW_CASES_DATA } from '../../server/mockData';
import { RiskBadge } from '../components/common/RiskBadge';
import { FileCheck, UserCheck, ShieldAlert, ArrowUpRight, ChevronRight, Eye } from 'lucide-react';

export const ReviewCasesPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="p-4 lg:p-6 space-y-6 max-w-[1700px] mx-auto font-sans">
      <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl shadow-gov-md flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="text-xs font-mono font-bold text-rose-400 uppercase tracking-widest flex items-center gap-1.5">
            <FileCheck className="w-4 h-4" />
            <span>STATUTORY REVIEW CASES &amp; INVESTIGATIONS</span>
          </div>
          <h1 className="text-xl font-extrabold text-white tracking-tight font-mono mt-0.5">
            Active Review Cases Registry
          </h1>
          <div className="text-xs text-slate-400 font-mono mt-1">
            Prioritized Human-in-the-Loop Case Management &amp; Statutory Disposition Workflow
          </div>
        </div>

        <button
          onClick={() => navigate('/case/RC-2026-0428')}
          className="px-4 py-2 bg-rose-600 hover:bg-rose-500 text-white font-mono font-bold text-xs rounded shadow flex items-center gap-1.5"
        >
          <ShieldAlert className="w-4 h-4" />
          <span>Inspect Case RC-2026-0428</span>
        </button>
      </div>

      <div className="space-y-4">
        {REVIEW_CASES_DATA.map((c: any) => (
          <div key={c.id} className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-3 shadow-gov-md hover:border-slate-700 transition-all font-mono">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-rose-400 text-sm">{c.caseCode}</span>
                  <RiskBadge level={c.severity} size="sm" />
                  <span className="bg-blue-950 text-blue-300 border border-blue-800 px-2 py-0.5 rounded text-[10px] font-bold">
                    {c.status}
                  </span>
                  <span className="bg-slate-800 text-slate-300 px-2 py-0.5 rounded text-[10px]">
                    Stage {c.currentStage || 4} of 7 Active
                  </span>
                </div>

                <h3 className="font-extrabold text-white text-base mt-1">
                  {c.projectTitle} ({c.projectCode})
                </h3>

                <div className="text-xs text-slate-400 mt-0.5">
                  {c.location} • Created {c.createdDate}
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => navigate(`/case/${c.caseCode}`)}
                  className="px-3.5 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded text-xs font-bold flex items-center gap-1.5 shadow"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Open Review Case Workspace</span>
                </button>
                <button
                  onClick={() => navigate(`/project/${c.projectCode}`)}
                  className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded text-xs font-semibold flex items-center gap-1 border border-slate-700"
                >
                  <span>Project Dossier</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="p-3 bg-slate-950 rounded border border-slate-800 text-xs space-y-1">
              <div className="text-slate-400 font-bold uppercase text-[10px]">Statutory Trigger Reason:</div>
              <div className="text-white leading-relaxed">{c.reason}</div>
              <div className="text-blue-400 pt-1">Assigned Officer: {c.assignedOfficer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

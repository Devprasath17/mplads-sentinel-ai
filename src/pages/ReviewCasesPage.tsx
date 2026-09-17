import React from 'react';
import { useNavigate } from 'react-router-dom';
import { REVIEW_CASES_DATA } from '../../server/mockData';
import { RiskBadge } from '../components/common/RiskBadge';
import { FileCheck, ShieldAlert, ArrowUpRight, Eye } from 'lucide-react';

export const ReviewCasesPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6 lg:p-8 space-y-6 max-w-[1700px] mx-auto font-sans">
      <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-gov-sm flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="text-xs font-semibold font-mono text-blue-700 uppercase tracking-wider flex items-center gap-1.5">
            <FileCheck className="w-4 h-4 text-blue-700" />
            <span>REVIEW & GOVERNANCE</span>
          </div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight mt-1">
            Active Review Cases
          </h1>
          <p className="text-sm text-slate-600 font-normal mt-0.5">
            Prioritized human-in-the-loop case management and statutory verification workflow.
          </p>
        </div>

        <button
          onClick={() => navigate('/case/RC-2026-0428')}
          className="px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white font-sans font-semibold text-xs rounded-lg shadow-sm flex items-center gap-2"
        >
          <ShieldAlert className="w-4 h-4" />
          <span>Inspect Case RC-2026-0428</span>
        </button>
      </div>

      <div className="space-y-4">
        {REVIEW_CASES_DATA.map((c: any) => (
          <div key={c.id} className="bg-white border border-slate-200 rounded-xl p-6 space-y-4 shadow-gov-sm hover:border-slate-300 transition-all">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2.5 font-mono">
                  <span className="font-bold text-blue-700 text-sm">{c.caseCode}</span>
                  <RiskBadge level={c.severity} size="sm" />
                  <span className="bg-blue-50 text-blue-700 border border-blue-200 px-2.5 py-0.5 rounded text-xs font-semibold">
                    {c.status}
                  </span>
                  <span className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded text-xs">
                    Stage {c.currentStage || 4} of 7 Active
                  </span>
                </div>

                <h3 className="font-bold text-slate-900 text-lg mt-2 font-sans">
                  {c.projectTitle} <span className="font-mono text-slate-500 font-normal">({c.projectCode})</span>
                </h3>

                <div className="text-xs text-slate-500 mt-1 font-sans">
                  {c.location} • Created {c.createdDate}
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => navigate(`/case/${c.caseCode}`)}
                  className="px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-lg text-xs font-semibold flex items-center gap-2 shadow-sm"
                >
                  <Eye className="w-4 h-4" />
                  <span>Open Case Workspace</span>
                </button>
                <button
                  onClick={() => navigate(`/project/${c.projectCode}`)}
                  className="px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-semibold flex items-center gap-1.5 border border-slate-200"
                >
                  <span>Project Dossier</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg text-xs space-y-1.5 font-sans">
              <div className="text-slate-500 font-bold uppercase text-[10px] font-mono">Trigger Signal / Reason:</div>
              <div className="text-slate-800 font-medium leading-relaxed">{c.reason}</div>
              <div className="text-blue-700 pt-1 font-semibold">Assigned Inspector: {c.assignedOfficer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


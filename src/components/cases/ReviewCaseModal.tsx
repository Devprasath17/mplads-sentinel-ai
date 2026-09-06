import React, { useState } from 'react';
import { X, FileCheck, ShieldAlert, CheckCircle2 } from 'lucide-react';
import { SentinelApi } from '../../services/api';

interface ReviewCaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectCode?: string;
  projectTitle?: string;
  location?: string;
  onSuccess?: (newCase: any) => void;
}

export const ReviewCaseModal: React.FC<ReviewCaseModalProps> = ({
  isOpen,
  onClose,
  projectCode = 'MPL-2026-1042',
  projectTitle = 'Construction of Multi-purpose Community Infrastructure Centre',
  location = 'Ward 142, T. Nagar AC, Chennai',
  onSuccess
}) => {
  const [assignedOfficer, setAssignedOfficer] = useState('Shri K. Ranganathan, IAS (District Collector)');
  const [reason, setReason] = useState('Cost escalation (+172%), 145-day milestone stalling, and 92% NLP overlap with MPL-2024-6511.');
  const [notes, setNotes] = useState('Requested immediate field measurement book re-audit and stop of remaining ₹10.67L tranche.');
  const [loading, setLoading] = useState(false);
  const [createdCase, setCreatedCase] = useState<any>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const result = await SentinelApi.createReviewCase({
      projectCode,
      projectTitle,
      location,
      assignedOfficer,
      reason,
      notes,
      severity: 'CRITICAL'
    });
    setCreatedCase(result);
    setLoading(false);
    if (onSuccess) onSuccess(result);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-slate-900 border border-slate-700 rounded-xl w-full max-w-lg shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="p-4 border-b border-slate-800 bg-slate-950 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileCheck className="w-5 h-5 text-blue-400" />
            <h3 className="font-extrabold text-white text-sm font-mono uppercase">
              CREATE STATUTORY REVIEW CASE
            </h3>
          </div>
          <button onClick={onClose} aria-label="Close Case Modal" className="p-1 text-slate-400 hover:text-white rounded-lg">
            <X className="w-5 h-5" />
          </button>
        </div>

        {createdCase ? (
          <div className="p-6 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-emerald-950 border border-emerald-500 text-emerald-400 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6" />
            </div>

            <div className="space-y-1">
              <h4 className="font-extrabold text-white text-base font-mono">
                REVIEW CASE CREATED SUCCESSFULLY
              </h4>
              <div className="text-xs font-mono text-emerald-400 font-bold">
                Case Reference: {createdCase.caseCode}
              </div>
            </div>

            <div className="p-3 bg-slate-950 rounded-lg text-xs font-mono text-slate-300 text-left space-y-1">
              <div>Project: <span className="text-white font-bold">{createdCase.projectCode}</span></div>
              <div>Assigned: <span className="text-white font-bold">{createdCase.assignedOfficer}</span></div>
              <div>Status: <span className="text-emerald-400 font-bold">NEW (Logged to Cryptographic Audit Ledger)</span></div>
            </div>

            <button
              onClick={onClose}
              className="w-full py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold font-mono rounded-lg transition-all"
            >
              Done & Return to Dossier
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-4 space-y-4 text-xs">
            <div className="p-3 bg-slate-950 border border-slate-800 rounded-lg space-y-1">
              <div className="font-bold text-white font-mono">{projectCode} • {projectTitle}</div>
              <div className="text-[11px] text-slate-400">{location}</div>
            </div>

            <div className="space-y-1">
              <label className="font-bold font-mono text-slate-300 uppercase text-[10px]">
                Assigned Monitoring Officer
              </label>
              <select
                value={assignedOfficer}
                onChange={(e) => setAssignedOfficer(e.target.value)}
                className="w-full p-2 bg-slate-950 border border-slate-700 rounded text-white font-mono focus:outline-none focus:border-blue-500"
              >
                <option value="Shri K. Ranganathan, IAS (District Collector)">Shri K. Ranganathan, IAS (District Collector)</option>
                <option value="A. Ramanan (JE, Madurai Circle)">A. Ramanan (JE, Madurai Circle)</option>
                <option value="District Vigilance Squad #3">District Vigilance Squad #3</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="font-bold font-mono text-slate-300 uppercase text-[10px]">
                Statutory Review Reason & Trigger
              </label>
              <textarea
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                rows={2}
                className="w-full p-2 bg-slate-950 border border-slate-700 rounded text-white font-mono focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="space-y-1">
              <label className="font-bold font-mono text-slate-300 uppercase text-[10px]">
                Officer Directive Notes
              </label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={2}
                className="w-full p-2 bg-slate-950 border border-slate-700 rounded text-white font-mono focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="pt-3 border-t border-slate-800 flex items-center justify-end gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded font-semibold font-mono"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading}
                className="px-4 py-2 bg-rose-600 hover:bg-rose-500 text-white rounded font-bold font-mono shadow-md flex items-center gap-1.5"
              >
                {loading ? 'Creating...' : 'Create Case & Log Ledger'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

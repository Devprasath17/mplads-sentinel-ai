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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-fade-in font-sans">
      <div className="bg-white border border-slate-200 rounded-xl w-full max-w-lg shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="p-4 border-b border-slate-100 bg-white flex items-center justify-between font-mono">
          <div className="flex items-center gap-2">
            <FileCheck className="w-5 h-5 text-blue-700" />
            <h3 className="font-extrabold text-[#0F172A] text-sm font-mono uppercase">
              CREATE STATUTORY REVIEW CASE
            </h3>
          </div>
          <button onClick={onClose} aria-label="Close Case Modal" className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {createdCase ? (
          <div className="p-6 text-center space-y-4 font-sans">
            <div className="w-12 h-12 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6" />
            </div>

            <div className="space-y-1">
              <h4 className="font-extrabold text-slate-900 text-base font-mono">
                REVIEW CASE CREATED SUCCESSFULLY
              </h4>
              <div className="text-xs font-mono text-emerald-800 font-bold">
                Case Reference: {createdCase.caseCode}
              </div>
            </div>

            <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-mono text-slate-700 text-left space-y-1">
              <div>Project: <span className="text-slate-900 font-bold">{createdCase.projectCode}</span></div>
              <div>Assigned: <span className="text-slate-900 font-bold">{createdCase.assignedOfficer}</span></div>
              <div>Status: <span className="text-emerald-800 font-bold">NEW (Logged to Cryptographic Audit Ledger)</span></div>
            </div>

            <button
              onClick={onClose}
              className="w-full py-2.5 bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold font-mono rounded-lg transition-colors shadow-sm"
            >
              Done &amp; Return to Dossier
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-5 space-y-4 text-xs font-sans">
            <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg space-y-1">
              <div className="font-bold text-slate-900 font-mono text-xs">{projectCode} • {projectTitle}</div>
              <div className="text-[11px] text-slate-500 font-sans">{location}</div>
            </div>

            <div className="space-y-1.5">
              <label className="font-bold font-mono text-slate-700 uppercase text-[10px]">
                Assigned Monitoring Officer
              </label>
              <select
                value={assignedOfficer}
                onChange={(e) => setAssignedOfficer(e.target.value)}
                className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 font-sans focus:outline-none focus:border-blue-600"
              >
                <option value="Shri K. Ranganathan, IAS (District Collector)">Shri K. Ranganathan, IAS (District Collector)</option>
                <option value="A. Ramanan (JE, Madurai Circle)">A. Ramanan (JE, Madurai Circle)</option>
                <option value="District Vigilance Squad #3">District Vigilance Squad #3</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="font-bold font-mono text-slate-700 uppercase text-[10px]">
                Statutory Review Reason &amp; Trigger
              </label>
              <textarea
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                rows={2}
                className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 font-sans focus:outline-none focus:border-blue-600"
              />
            </div>

            <div className="space-y-1.5">
              <label className="font-bold font-mono text-slate-700 uppercase text-[10px]">
                Officer Directive Notes
              </label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={2}
                className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 font-sans focus:outline-none focus:border-blue-600"
              />
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-end gap-2 font-mono">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg font-semibold transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading}
                className="px-4 py-2 bg-red-700 hover:bg-red-800 text-white rounded-lg font-bold shadow-sm flex items-center gap-1.5 transition-colors"
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

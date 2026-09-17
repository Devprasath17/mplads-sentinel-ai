import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ALERTS_INGESTION_FEED } from '../../server/mockData';
import { RiskBadge } from '../components/common/RiskBadge';
import { ReviewCaseModal } from '../components/cases/ReviewCaseModal';
import { AlertItem } from '../types';
import {
  ShieldAlert,
  SlidersHorizontal,
  RefreshCw,
  Download,
  CheckCircle2,
  AlertTriangle,
  Maximize2,
  X,
  FileText,
  Filter,
  Bookmark,
  UserCheck,
  Send,
  HelpCircle,
  FileCheck,
  CheckSquare
} from 'lucide-react';

export const AiRiskCenterPage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedAlert, setSelectedAlert] = useState<AlertItem>(ALERTS_INGESTION_FEED[0] as any);
  const [selectedRowIds, setSelectedRowIds] = useState<string[]>(['ALT-10482']);
  const [isCaseModalOpen, setIsCaseModalOpen] = useState(false);

  const toggleSelectRow = (id: string) => {
    if (selectedRowIds.includes(id)) {
      setSelectedRowIds(selectedRowIds.filter(item => item !== id));
    } else {
      setSelectedRowIds([...selectedRowIds, id]);
    }
  };

  const handleStartReview = () => {
    navigate('/case/RC-2026-0428');
  };

  return (
    <div className="p-6 lg:p-8 space-y-8 max-w-[1700px] mx-auto font-sans">
      {/* Header & Subtitle */}
      <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-gov-sm space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <div className="text-xs font-bold font-mono text-indigo-700 uppercase tracking-wider flex items-center gap-1.5">
              <ShieldAlert className="w-4 h-4 text-indigo-700" />
              <span>AI RISK INTELLIGENCE WORKSPACE</span>
            </div>
            <h1 className="text-2xl lg:text-3xl font-bold text-slate-900 tracking-tight mt-1">
              AI Risk Center
            </h1>
            <p className="text-sm text-slate-600 font-normal mt-0.5 leading-relaxed">
              Identify unusual patterns, understand contributing signals, and prioritize projects for human review.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
            <span className="px-3 py-1.5 bg-indigo-50 text-indigo-700 border border-indigo-200 rounded-lg font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse" />
              <span>MoSPI AI Engine v4.2 Active</span>
            </span>
            <button
              onClick={() => window.print()}
              className="px-3.5 py-1.5 bg-slate-900 hover:bg-slate-800 text-white font-sans font-semibold rounded-lg flex items-center gap-2 shadow-sm transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Export Risk Report (CSV/PDF)</span>
            </button>
          </div>
        </div>

        {/* 6 Top Metric Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4 font-sans text-xs">
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider font-mono">
              PROJECTS ANALYSED
            </div>
            <div className="text-2xl lg:text-3xl font-extrabold text-slate-900 font-mono">42,680</div>
            <div className="text-[11px] text-slate-500 font-medium">Full national database scanned</div>
          </div>

          <div className="p-4 bg-red-50/60 border border-red-200 rounded-xl space-y-1">
            <div className="text-xs font-bold text-red-700 uppercase tracking-wider font-mono flex items-center justify-between">
              <span>HIGH RISK</span>
              <span className="bg-red-100 text-red-800 text-[10px] px-1.5 py-0.5 rounded font-mono">CRITICAL</span>
            </div>
            <div className="text-2xl lg:text-3xl font-extrabold text-red-700 font-mono">184</div>
            <div className="text-[11px] text-red-700 font-medium">Requires prioritized verification</div>
          </div>

          <div className="p-4 bg-amber-50/60 border border-amber-200 rounded-xl space-y-1">
            <div className="text-xs font-bold text-amber-800 uppercase tracking-wider font-mono">
              MEDIUM RISK
            </div>
            <div className="text-2xl lg:text-3xl font-extrabold text-amber-700 font-mono">627</div>
            <div className="text-[11px] text-amber-800 font-medium">Review recommended</div>
          </div>

          <div className="p-4 bg-emerald-50/60 border border-emerald-200 rounded-xl space-y-1">
            <div className="text-xs font-bold text-emerald-800 uppercase tracking-wider font-mono">
              LOW RISK
            </div>
            <div className="text-2xl lg:text-3xl font-extrabold text-emerald-700 font-mono">41,869</div>
            <div className="text-[11px] text-emerald-800 font-medium">Normal execution status</div>
          </div>

          <div className="p-4 bg-blue-50/60 border border-blue-200 rounded-xl space-y-1">
            <div className="text-xs font-bold text-blue-800 uppercase tracking-wider font-mono">
              NEW ALERTS
            </div>
            <div className="text-2xl lg:text-3xl font-extrabold text-blue-700 font-mono">96</div>
            <div className="text-[11px] text-blue-800 font-medium">Ingested past 24 hours</div>
          </div>

          <div className="p-4 bg-purple-50/60 border border-purple-200 rounded-xl space-y-1">
            <div className="text-xs font-bold text-purple-800 uppercase tracking-wider font-mono">
              UNDER REVIEW
            </div>
            <div className="text-2xl lg:text-3xl font-extrabold text-purple-700 font-mono">438</div>
            <div className="text-[11px] text-purple-800 font-medium">Cases in active review queue</div>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-200 font-sans text-xs">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-slate-600 flex items-center gap-1 font-semibold text-xs">
              <Filter className="w-3.5 h-3.5 text-blue-700" />
              <span>Filters:</span>
            </span>

            <select aria-label="Risk Score Filter" className="bg-slate-50 text-slate-900 border border-slate-300 rounded-lg px-2.5 py-1.5 font-medium text-xs focus:outline-none">
              <option>Risk Level: Critical & High</option>
              <option>Critical Only</option>
            </select>

            <select aria-label="Vector Type Filter" className="bg-slate-50 text-slate-900 border border-slate-300 rounded-lg px-2.5 py-1.5 font-medium text-xs focus:outline-none">
              <option>Signal Type: All Vectors</option>
              <option>Cost Anomaly</option>
              <option>Schedule Delay</option>
              <option>Duplicate Description Match</option>
            </select>

            <select aria-label="State Jurisdiction Filter" className="bg-slate-50 text-slate-900 border border-slate-300 rounded-lg px-2.5 py-1.5 font-medium text-xs focus:outline-none">
              <option>State: All States</option>
              <option>Tamil Nadu</option>
              <option>Uttar Pradesh</option>
            </select>
          </div>

          <div className="flex items-center gap-3">
            <button className="text-blue-700 hover:underline font-semibold text-xs">Reset Filters</button>
          </div>
        </div>
      </div>

      {/* Main Split Layout: Risk Priority Queue Table vs Inspection Drawer */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
        {/* Left Column: Risk Priority Queue Table */}
        <div className="xl:col-span-7 space-y-4">
          <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-gov-sm">
            <div className="p-4 border-b border-slate-200 flex items-center justify-between font-sans bg-slate-50">
              <div className="font-bold text-slate-900 text-sm tracking-tight flex items-center gap-2">
                <span>Risk Priority Queue</span>
                <span className="text-xs text-slate-500 font-normal">(Showing 5 of 184 High Risk Projects)</span>
              </div>

              <div className="flex items-center gap-2 text-slate-600 text-xs font-mono">
                <span>Sort:</span>
                <span className="text-slate-900 font-bold">Composite Risk (High → Low) ↓</span>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50 text-xs font-semibold uppercase text-slate-500 font-mono">
                    <th className="p-3.5 w-10">
                      <input type="checkbox" aria-label="Select All" />
                    </th>
                    <th className="p-3.5">Project ID</th>
                    <th className="p-3.5">Location &amp; Work Type</th>
                    <th className="p-3.5 text-center">Risk Score</th>
                    <th className="p-3.5 text-center">Cost Risk</th>
                    <th className="p-3.5 text-center">Delay Risk</th>
                    <th className="p-3.5 text-center">Duplicate Risk</th>
                    <th className="p-3.5 text-center">Status</th>
                    <th className="p-3.5 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-sans">
                  {ALERTS_INGESTION_FEED.map((alt: any) => {
                    const isSelected = selectedAlert.id === alt.id;
                    const isChecked = selectedRowIds.includes(alt.id);

                    return (
                      <tr
                        key={alt.id}
                        onClick={() => setSelectedAlert(alt)}
                        className={`cursor-pointer transition-colors ${
                          isSelected
                            ? 'bg-blue-50/60 border-l-4 border-l-blue-700'
                            : 'hover:bg-slate-50'
                        }`}
                      >
                        <td className="p-3.5" onClick={(e) => e.stopPropagation()}>
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => toggleSelectRow(alt.id)}
                            aria-label={`Select ${alt.id}`}
                          />
                        </td>

                        <td className="p-3.5 font-mono font-bold text-blue-700 text-xs">
                          {alt.projectCode}
                        </td>

                        <td className="p-3.5">
                          <div className="font-semibold text-slate-900 text-xs line-clamp-1">{alt.title}</div>
                          <div className="text-[11px] text-slate-500 mt-0.5 font-mono">Chennai • {alt.type}</div>
                        </td>

                        <td className="p-3.5 text-center font-mono">
                          <span className="text-sm font-extrabold text-red-700">
                            {alt.score}
                          </span>
                        </td>

                        <td className="p-3.5 text-center font-mono text-xs">
                          <span className="text-red-700 font-bold">91</span>
                        </td>

                        <td className="p-3.5 text-center font-mono text-xs">
                          <span className="text-amber-700 font-bold">84</span>
                        </td>

                        <td className="p-3.5 text-center font-mono text-xs">
                          <span className="text-red-700 font-bold">88</span>
                        </td>

                        <td className="p-3.5 text-center">
                          <span className="px-2 py-0.5 bg-red-50 text-red-700 border border-red-200 text-[11px] font-semibold rounded font-mono">
                            Review Rec.
                          </span>
                        </td>

                        <td className="p-3.5 text-right">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              navigate(`/project/${alt.projectCode}`);
                            }}
                            className="px-3 py-1 bg-blue-700 hover:bg-blue-800 text-white rounded text-xs font-semibold shadow-sm transition-all"
                          >
                            Inspect
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right Column: Alert Inspection Drawer */}
        <div className="xl:col-span-5">
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-gov-md space-y-5 font-sans sticky top-20">
            {/* Drawer Header */}
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 bg-red-50 text-red-700 border border-red-200 text-xs font-bold rounded uppercase font-mono">
                  REVIEW RECOMMENDED
                </span>
                <span className="text-xs font-bold text-slate-700 font-mono">{selectedAlert.alertCode}</span>
              </div>

              <div className="flex items-center gap-1.5 text-slate-400">
                <button onClick={() => navigate(`/project/${selectedAlert.projectCode}`)} title="Open Full Dossier" className="p-1 hover:text-slate-800 rounded">
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Title & Metadata */}
            <div>
              <h3 className="font-bold text-slate-900 text-base leading-snug">
                {selectedAlert.title}
              </h3>
              <div className="text-xs text-slate-500 mt-1 flex justify-between font-mono">
                <span>Project Code: <strong className="text-slate-900">{selectedAlert.projectCode}</strong></span>
                <span>Chennai Ward 142</span>
              </div>
            </div>

            {/* Composite Risk Score Box */}
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between">
              <div>
                <div className="text-xs text-slate-500 font-bold uppercase font-mono">OVERALL RISK SCORE</div>
                <div className="text-4xl font-extrabold text-slate-900 font-mono mt-0.5">
                  {selectedAlert.score} <span className="text-sm text-slate-500 font-normal">/ 100</span>
                </div>
              </div>
              <div className="text-right text-xs">
                <div className="text-red-700 font-bold font-mono">High Attention Queue</div>
                <div className="text-slate-500">Bayesian Signal Fusion Model</div>
              </div>
            </div>

            {/* Why Was This Project Flagged? Section (Requirement Section 13) */}
            <div className="p-4 bg-blue-50/60 border border-blue-200 rounded-xl space-y-3">
              <div className="flex items-center justify-between text-xs border-b border-blue-100 pb-2">
                <span className="font-bold text-blue-900 uppercase text-xs font-mono">Why was this project flagged?</span>
                <span className="text-[11px] text-blue-700 font-semibold font-mono">Potential Anomaly Detected</span>
              </div>

              <p className="text-xs text-slate-700 font-medium leading-relaxed">
                The system identified multiple unusual execution patterns requiring administrative review and human verification.
              </p>

              <ul className="space-y-2 text-xs text-slate-700 font-sans pl-1">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600 mt-1.5 shrink-0" />
                  <span>Physical progress is significantly below expected execution trajectory given project sanction timeframe.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600 mt-1.5 shrink-0" />
                  <span>Expenditure is high relative to certified physical completion.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-1.5 shrink-0" />
                  <span>Payment behaviour differs from comparable historical projects in the same cluster.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600 mt-1.5 shrink-0" />
                  <span>A similar project description was identified within 380m proximity.</span>
                </li>
              </ul>

              <div className="flex items-center gap-2 pt-2 border-t border-blue-100">
                <button
                  onClick={() => navigate(`/project/${selectedAlert.projectCode}`)}
                  className="px-3 py-1.5 bg-blue-700 hover:bg-blue-800 text-white rounded text-xs font-semibold shadow-sm"
                >
                  View Evidence
                </button>
                <button
                  onClick={() => navigate(`/project/${selectedAlert.projectCode}`)}
                  className="px-3 py-1.5 bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 rounded text-xs font-semibold"
                >
                  View Project
                </button>
                <button
                  onClick={() => setIsCaseModalOpen(true)}
                  className="px-3 py-1.5 bg-white hover:bg-slate-50 text-blue-700 border border-blue-300 rounded text-xs font-semibold"
                >
                  Create Review Case
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2 pt-2 border-t border-slate-200">
              <button
                onClick={handleStartReview}
                className="w-full py-2.5 bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs rounded-lg shadow-sm flex items-center justify-center gap-2 transition-colors"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Start Review Case</span>
              </button>

              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setIsCaseModalOpen(true)}
                  className="py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 border border-slate-200"
                >
                  <UserCheck className="w-3.5 h-3.5 text-blue-700" />
                  <span>Assign Inspector</span>
                </button>

                <button
                  onClick={() => setIsCaseModalOpen(true)}
                  className="py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Escalate Review</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ReviewCaseModal
        isOpen={isCaseModalOpen}
        onClose={() => setIsCaseModalOpen(false)}
        projectCode={selectedAlert.projectCode}
      />
    </div>
  );
};


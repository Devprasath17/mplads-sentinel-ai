import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ALERTS_INGESTION_FEED, FEATURED_PROJECT_1042 } from '../../server/mockData';
import { RiskBadge } from '../components/common/RiskBadge';
import { ReviewCaseModal } from '../components/cases/ReviewCaseModal';
import { AlertItem } from '../types';
import {
  ShieldAlert,
  SlidersHorizontal,
  RefreshCw,
  Download,
  Users,
  Search,
  FileCheck,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  ChevronRight,
  Crosshair,
  Maximize2,
  X,
  FileText,
  Filter,
  CheckSquare,
  Bookmark,
  UserCheck,
  Send,
  AlertCircle
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
    <div className="p-4 lg:p-6 space-y-5 max-w-[1700px] mx-auto font-sans">
      {/* Top Title & Header Sub-bar */}
      <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl shadow-gov-md space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3">
          <div>
            <h1 className="text-2xl font-extrabold text-white tracking-tight font-mono">
              Alert Queue
            </h1>
            <p className="text-xs text-slate-400 font-mono mt-0.5">
              Prioritized AI-generated operational alerts requiring administrative sampling, engineering verification, and human-in-the-loop triage.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
            <span className="px-2.5 py-1 bg-blue-950 text-blue-300 border border-blue-800 rounded font-bold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping" />
              <span>Live Monitoring (NIC-PFMS Active Sync)</span>
            </span>
            <span className="px-2 py-1 bg-slate-800 text-slate-300 rounded font-bold text-[11px]">
              v4.2 Engine
            </span>
            <button className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded flex items-center gap-1">
              <RefreshCw className="w-3 h-3 text-blue-400" />
              <span>Sync Log (08:42 IST)</span>
            </button>
            <button className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded flex items-center gap-1">
              <SlidersHorizontal className="w-3 h-3 text-slate-400" />
              <span>Algorithms Weights</span>
            </button>
            <button
              onClick={() => window.print()}
              className="px-3.5 py-1 bg-slate-950 hover:bg-black text-white font-bold rounded border border-slate-700 flex items-center gap-1.5 shadow"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export Dossier (CSV/PDF)</span>
            </button>
          </div>
        </div>

        {/* 6 Top Metric Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-3 font-mono text-xs">
          <div className="p-3 bg-rose-950/60 border border-rose-500/60 rounded-xl space-y-1">
            <div className="flex justify-between items-center text-[10px] font-bold text-rose-300 uppercase">
              <span>CRITICAL RISK</span>
              <span className="bg-rose-900 text-rose-200 px-1.5 py-0.5 rounded">+12 today</span>
            </div>
            <div className="text-2xl font-extrabold text-rose-300">184</div>
            <div className="text-[10px] text-rose-200 font-semibold">Immediate inspection needed</div>
          </div>

          <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl space-y-1">
            <div className="flex justify-between items-center text-[10px] font-bold text-slate-400 uppercase">
              <span>HIGH PRIORITY</span>
              <span className="text-slate-400">42% total</span>
            </div>
            <div className="text-2xl font-extrabold text-amber-400">627</div>
            <div className="text-[10px] text-slate-400">Active review recommended</div>
          </div>

          <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl space-y-1">
            <div className="flex justify-between items-center text-[10px] font-bold text-slate-400 uppercase">
              <span>MEDIUM PRIORITY</span>
              <span className="text-slate-400">Sampling</span>
            </div>
            <div className="text-2xl font-extrabold text-blue-400">1,482</div>
            <div className="text-[10px] text-slate-400">Supervisory threshold flags</div>
          </div>

          <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl space-y-1">
            <div className="flex justify-between items-center text-[10px] font-bold text-slate-400 uppercase">
              <span>NEW TODAY</span>
              <span className="text-emerald-400 font-bold">Live</span>
            </div>
            <div className="text-2xl font-extrabold text-white">96</div>
            <div className="text-[10px] text-slate-400">Ingested past 24 hours</div>
          </div>

          <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl space-y-1">
            <div className="flex justify-between items-center text-[10px] font-bold text-slate-400 uppercase">
              <span>AWAITING REVIEW</span>
              <span className="text-amber-400 font-bold">Backlog</span>
            </div>
            <div className="text-2xl font-extrabold text-white">438</div>
            <div className="text-[10px] text-slate-400">Pending officer triage</div>
          </div>

          <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl space-y-1">
            <div className="flex justify-between items-center text-[10px] font-bold text-slate-400 uppercase">
              <span>ESCALATED</span>
              <span className="bg-slate-800 text-slate-200 px-1 py-0.5 rounded text-[9px]">MoSPI/DM</span>
            </div>
            <div className="text-2xl font-extrabold text-rose-400">73</div>
            <div className="text-[10px] text-slate-400">Formal inquiry dispatched</div>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-800 font-mono text-xs">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-slate-400 flex items-center gap-1 font-bold text-[11px]">
              <Filter className="w-3.5 h-3.5 text-blue-400" />
              <span>FILTERS:</span>
            </span>

            <select aria-label="Priority Filter" className="bg-slate-950 text-white border border-slate-700 rounded px-2 py-1 font-bold text-[11px]">
              <option>Priority: Critical &amp; High (811)</option>
              <option>Critical Only (184)</option>
            </select>

            <select aria-label="Alert Type Filter" className="bg-slate-950 text-white border border-slate-700 rounded px-2 py-1 font-bold text-[11px]">
              <option>Type: Physical • Cost • Duplicates</option>
              <option>Physical Progress Lag</option>
              <option>Cost Anomaly</option>
              <option>Duplicate NLP</option>
            </select>

            <select aria-label="State Filter" className="bg-slate-950 text-white border border-slate-700 rounded px-2 py-1 font-bold text-[11px]">
              <option>State: Tamil Nadu</option>
              <option>Uttar Pradesh</option>
              <option>Maharashtra</option>
            </select>

            <select aria-label="District Filter" className="bg-slate-950 text-white border border-slate-700 rounded px-2 py-1 font-bold text-[11px]">
              <option>District: Chennai, Madurai, Coimbatore</option>
            </select>

            <select aria-label="Risk Score Filter" className="bg-slate-950 text-white border border-slate-700 rounded px-2 py-1 font-bold text-[11px]">
              <option>Score: ≥ 75 / 100</option>
              <option>Score: ≥ 90 / 100</option>
            </select>

            <select aria-label="Status Filter" className="bg-slate-950 text-white border border-slate-700 rounded px-2 py-1 font-bold text-[11px]">
              <option>Status: New &amp; In Review</option>
            </select>
          </div>

          <div className="flex items-center gap-3">
            <button className="text-blue-400 hover:underline text-[11px]">Reset All</button>
            <button className="text-slate-300 hover:text-white flex items-center gap-1 text-[11px]">
              <Bookmark className="w-3 h-3 text-amber-400" />
              <span>Save Filter View</span>
            </button>
          </div>
        </div>

        {/* Batch Selection Action Bar */}
        <div className="bg-slate-950 border border-slate-800 p-2.5 rounded-lg flex flex-wrap items-center justify-between gap-3 font-mono text-xs">
          <div className="flex items-center gap-3 text-slate-300">
            <input type="checkbox" checked={selectedRowIds.length > 0} onChange={() => {}} className="accent-blue-500" />
            <span className="font-bold text-white">14 records selected across 5 constituencies</span>
            <span className="text-slate-500">|</span>
            <span className="text-slate-400">Combined Public Allocation: <strong className="text-emerald-400">₹4.82 Cr</strong></span>
          </div>

          <div className="flex items-center gap-2">
            <button className="px-3 py-1 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 rounded font-bold text-[11px]">
              Assign Reviewer
            </button>
            <button className="px-3 py-1 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 rounded font-bold text-[11px]">
              Mark Preliminary Review
            </button>
            <button
              onClick={() => setIsCaseModalOpen(true)}
              className="px-3.5 py-1 bg-rose-600 hover:bg-rose-500 text-white font-extrabold rounded shadow text-[11px] flex items-center gap-1"
            >
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>Escalate to DM</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content: Split View Table vs Alert Inspection Drawer */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
        {/* Left Column: Prioritized Ingestion Feed Table */}
        <div className="xl:col-span-7 space-y-3">
          <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-gov-md">
            <div className="p-3 border-b border-slate-800 flex items-center justify-between font-mono text-xs bg-slate-950">
              <div className="font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <span>Prioritized Ingestion Feed</span>
                <span className="text-[10px] text-slate-400 font-normal">Showing 5 of 184 Critical</span>
              </div>

              <div className="flex items-center gap-2 text-slate-400 text-[11px]">
                <span>Sort by:</span>
                <span className="text-white font-bold">Composite Risk (High → Low) ↓</span>
              </div>
            </div>

            <div className="overflow-x-auto font-mono text-xs">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-800 bg-slate-950/80 text-[10px] uppercase text-slate-400">
                    <th className="p-3 w-8">
                      <input type="checkbox" aria-label="Select All Alerts" />
                    </th>
                    <th className="p-3 w-24">PRIORITY</th>
                    <th className="p-3">ALERT &amp; PROJECT INFO</th>
                    <th className="p-3">TYPE</th>
                    <th className="p-3 text-center">RISK</th>
                    <th className="p-3">KEY ANOMALY / SIGNAL</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {ALERTS_INGESTION_FEED.map((alt: any) => {
                    const isSelected = selectedAlert.id === alt.id;
                    const isChecked = selectedRowIds.includes(alt.id);

                    return (
                      <tr
                        key={alt.id}
                        onClick={() => setSelectedAlert(alt)}
                        className={`cursor-pointer transition-colors ${
                          isSelected
                            ? 'bg-slate-850 border-l-4 border-l-rose-500'
                            : 'hover:bg-slate-850/60'
                        }`}
                      >
                        <td className="p-3" onClick={(e) => e.stopPropagation()}>
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => toggleSelectRow(alt.id)}
                            aria-label={`Select ${alt.id}`}
                          />
                        </td>

                        <td className="p-3">
                          <RiskBadge level={alt.severity} size="sm" showIcon={false} />
                        </td>

                        <td className="p-3">
                          <div className="flex items-center gap-1.5">
                            <span className="font-bold text-white">{alt.alertCode}</span>
                            <span className="text-slate-400 text-[11px]">{alt.projectCode}</span>
                          </div>
                          <div className="text-slate-300 font-bold text-xs line-clamp-1 mt-0.5">
                            {alt.title}
                          </div>
                          <div className="text-[10px] text-slate-400 mt-0.5">
                            Sanction: ₹48.50 L
                          </div>
                        </td>

                        <td className="p-3">
                          <span className="px-2 py-0.5 bg-blue-950 text-blue-300 border border-blue-800 rounded text-[10px] font-bold">
                            {alt.type}
                          </span>
                        </td>

                        <td className="p-3 text-center">
                          <span className="text-sm font-extrabold font-mono text-rose-400">
                            {alt.score}
                          </span>
                        </td>

                        <td className="p-3">
                          <div className="text-rose-300 font-bold text-xs">{alt.keyAnomaly}</div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="p-3 border-t border-slate-800 bg-slate-950 flex items-center justify-between font-mono text-xs text-slate-400">
              <div>Rows per page: 25 • 1-25 of 184 active priority signals</div>
              <div className="flex items-center gap-2">
                <button className="px-2 py-1 bg-slate-800 hover:bg-slate-700 text-white rounded">|&lt;</button>
                <button className="px-2 py-1 bg-slate-800 hover:bg-slate-700 text-white rounded">&lt;</button>
                <span className="px-2 py-1 bg-blue-600 text-white rounded font-bold">1</span>
                <button className="px-2 py-1 bg-slate-800 hover:bg-slate-700 text-white rounded">&gt;</button>
                <button className="px-2 py-1 bg-slate-800 hover:bg-slate-700 text-white rounded">&gt;| </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Alert Inspection Slide-Over Panel (Exact Template 1 Layout) */}
        <div className="xl:col-span-5">
          <div className="bg-slate-900 border border-rose-500/60 rounded-xl p-5 shadow-gov-lg space-y-4 font-mono sticky top-16">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 bg-rose-950 text-rose-300 border border-rose-800 text-[10px] font-bold rounded uppercase">
                  CRITICAL REVIEW
                </span>
                <span className="text-xs font-bold text-white">{selectedAlert.alertCode}</span>
              </div>

              <div className="flex items-center gap-1.5 text-slate-400">
                <button onClick={() => navigate('/project/MPL-2026-1042')} aria-label="Expand Dossier" className="p-1 hover:text-white rounded">
                  <Maximize2 className="w-4 h-4" />
                </button>
                <button onClick={() => {}} aria-label="Close Panel" className="p-1 hover:text-white rounded">
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Title & Metadata */}
            <div>
              <h3 className="font-extrabold text-white text-base">
                {selectedAlert.title}
              </h3>
              <div className="text-xs text-slate-400 mt-1 flex justify-between">
                <span>Project Code: <strong className="text-white">{selectedAlert.projectCode}</strong></span>
                <span>Chennai Dist. Ward 142</span>
              </div>
            </div>

            {/* Composite Risk Score Box */}
            <div className="p-4 bg-slate-950 border border-slate-800 rounded-lg flex items-center justify-between">
              <div>
                <div className="text-[10px] text-slate-400 font-bold uppercase">COMPOSITE RISK SCORE</div>
                <div className="text-3xl font-extrabold text-white">
                  {selectedAlert.score} <span className="text-xs text-slate-400 font-normal">/ 100</span>
                </div>
              </div>
              <div className="text-right text-[10px]">
                <div className="text-rose-400 font-bold">~ Top 1.5% State Risk</div>
                <div className="text-slate-400">Bayesian Signal Fusion Model</div>
              </div>
            </div>

            {/* Why Was This Alert Generated? Callout */}
            <div className="p-3.5 bg-slate-950 border border-slate-800 rounded-lg space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-white uppercase text-[11px]">Why was this alert generated?</span>
                <span className="text-[10px] text-blue-400 font-bold">Primary Vector</span>
              </div>

              <p className="text-xs text-rose-300 font-semibold leading-relaxed">
                Physical progress is significantly below expected execution trajectory given project sanction timeframe.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2 border-t border-slate-800/80 text-xs">
                <div>
                  <div className="text-[10px] text-slate-400">Expected Trajectory</div>
                  <div className="text-base font-extrabold text-white">{selectedAlert.expectedTrajectory || '85.0%'}</div>
                  <div className="text-[9px] text-slate-400">Based on contract schedule</div>
                </div>

                <div>
                  <div className="text-[10px] text-slate-400">Actual Physical Stage</div>
                  <div className="text-base font-extrabold text-rose-400">{selectedAlert.actualPhysicalStage || '38.0%'}</div>
                  <div className="text-[9px] text-slate-400">Plinth level only</div>
                </div>

                <div>
                  <div className="text-[10px] text-slate-400">Net Progress Gap</div>
                  <div className="text-base font-extrabold text-rose-400">{selectedAlert.netProgressGap || '-47.0 pp'}</div>
                  <div className="text-[9px] text-rose-300 font-bold">Critical deficit</div>
                </div>

                <div>
                  <div className="text-[10px] text-slate-400">Execution Stagnation</div>
                  <div className="text-base font-extrabold text-amber-400">{selectedAlert.executionStagnation || '+96 Days'}</div>
                  <div className="text-[9px] text-slate-400">Zero e-MB update</div>
                </div>
              </div>
            </div>

            {/* Multi-Vector Signal Breakdown */}
            <div className="p-3.5 bg-slate-950 border border-slate-800 rounded-lg space-y-3 text-xs">
              <div className="flex justify-between items-center">
                <span className="font-bold text-white uppercase text-[11px]">Multi-Vector Signal Breakdown</span>
                <span className="text-[10px] text-slate-400">5 Vectors Evaluated</span>
              </div>

              <div className="space-y-2 text-[11px]">
                <div>
                  <div className="flex justify-between text-slate-200">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-rose-500" />
                      <span>Progress Trajectory Risk</span>
                    </span>
                    <strong className="text-rose-400">91 / 100</strong>
                  </div>
                  <div className="text-[9px] text-slate-400 mt-0.5">Halted 96 days past mandatory foundation milestone</div>
                </div>

                <div>
                  <div className="flex justify-between text-slate-200">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-rose-500" />
                      <span>Milestone Delay Velocity</span>
                    </span>
                    <strong className="text-rose-400">84 / 100</strong>
                  </div>
                  <div className="text-[9px] text-slate-400 mt-0.5">Project deadline scheduled: 15 Aug 2026 (Unachievable at current pace)</div>
                </div>

                <div>
                  <div className="flex justify-between text-slate-200">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-amber-500" />
                      <span>Advance Disbursement Velocity</span>
                    </span>
                    <strong className="text-amber-400">72 / 100</strong>
                  </div>
                  <div className="text-[9px] text-slate-400 mt-0.5">₹37.80 L drawn (78%) ahead of stage-certified physical inspection</div>
                </div>

                <div>
                  <div className="flex justify-between text-slate-200">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-rose-500" />
                      <span>Duplicate Geo-Semantic Similarity</span>
                    </span>
                    <strong className="text-rose-400">88 / 100</strong>
                  </div>
                  <div className="text-[9px] text-slate-400 mt-0.5">Proximity 380m to closed 2024 work MPL-2024-0311 (92% BoQ overlap)</div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2 pt-2 border-t border-slate-800">
              <button
                onClick={handleStartReview}
                className="w-full py-2.5 bg-slate-950 hover:bg-black text-white font-extrabold text-xs rounded border border-slate-700 shadow-md flex items-center justify-center gap-2 group transition-all"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Start Formal Review (Open Case)</span>
              </button>

              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setIsCaseModalOpen(true)}
                  className="py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded text-[11px] font-bold flex items-center justify-center gap-1"
                >
                  <UserCheck className="w-3.5 h-3.5 text-blue-400" />
                  <span>Assign Inspector</span>
                </button>

                <button
                  onClick={() => setIsCaseModalOpen(true)}
                  className="py-1.5 bg-rose-600 hover:bg-rose-500 text-white rounded text-[11px] font-bold flex items-center justify-center gap-1 shadow"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Escalate to DM</span>
                </button>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-1">
                <button
                  onClick={() => navigate(`/project/${selectedAlert.projectCode}`)}
                  className="py-1.5 bg-slate-950 hover:bg-slate-900 text-slate-300 border border-slate-800 rounded text-[11px] font-bold flex items-center justify-center gap-1"
                >
                  <FileText className="w-3.5 h-3.5 text-blue-400" />
                  <span>Project Dossier</span>
                </button>

                <button
                  onClick={() => {}}
                  className="py-1.5 bg-slate-950 hover:bg-slate-900 text-slate-400 border border-slate-800 rounded text-[11px] font-bold flex items-center justify-center gap-1"
                >
                  <X className="w-3.5 h-3.5" />
                  <span>Dismiss Alert</span>
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

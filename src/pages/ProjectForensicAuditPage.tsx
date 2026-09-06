import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { RiskScoreGauge } from '../components/common/RiskScoreGauge';
import { RiskBadge } from '../components/common/RiskBadge';
import { ExplainRiskDrawer } from '../components/forensics/ExplainRiskDrawer';
import { EvidenceTimeline } from '../components/forensics/EvidenceTimeline';
import { DuplicateComparisonCard } from '../components/forensics/DuplicateComparisonCard';
import { ReviewCaseModal } from '../components/cases/ReviewCaseModal';
import { FEATURED_PROJECT_1042 } from '../../server/mockData';
import {
  ShieldAlert,
  FileCheck,
  Sparkles,
  MapPin,
  Lock,
  Download,
  AlertTriangle,
  CheckCircle2,
  Calendar,
  ExternalLink,
  ChevronRight,
  Printer,
  ShieldCheck,
  UserCheck
} from 'lucide-react';

export const ProjectForensicAuditPage: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();

  const [isExplainOpen, setIsExplainOpen] = useState(false);
  const [isCaseModalOpen, setIsCaseModalOpen] = useState(false);
  const [disbursementFrozen, setDisbursementFrozen] = useState(false);

  const project = FEATURED_PROJECT_1042;

  return (
    <div className="p-4 lg:p-6 space-y-6 max-w-[1700px] mx-auto">
      {/* Top Action & Dossier Title Bar */}
      <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl shadow-gov-md flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="text-xs font-mono font-bold text-rose-400 uppercase tracking-widest flex items-center gap-1.5">
            <ShieldAlert className="w-4 h-4" />
            <span>CRITICAL ENFORCEMENT DOSSIER • SEC-TN-NDLS-01</span>
          </div>
          <h1 className="text-2xl font-extrabold text-white tracking-tight font-mono mt-1">
            Project Forensic Audit & Intelligence Dossier: {project.projectCode}
          </h1>
          <div className="text-xs text-slate-300 font-mono mt-1">
            {project.title} • {project.district}, {project.state}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => window.print()}
            className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono font-semibold rounded flex items-center gap-1.5"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Export Form 41</span>
          </button>

          <button
            onClick={() => setIsExplainOpen(true)}
            className="px-3.5 py-1.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-mono font-bold rounded flex items-center gap-1.5 shadow-sm"
          >
            <Sparkles className="w-4 h-4" />
            <span>Ask AI Explanation</span>
          </button>

          <button
            onClick={() => setIsCaseModalOpen(true)}
            className="px-4 py-1.5 bg-rose-600 hover:bg-rose-500 text-white text-xs font-mono font-extrabold rounded flex items-center gap-1.5 shadow-md"
          >
            <FileCheck className="w-4 h-4" />
            <span>Create Statutory Review Case</span>
          </button>
        </div>
      </div>

      {/* Main Diagnostic Assessment Banner */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
        {/* Risk Score Gauge & Metrics Grid */}
        <div className="xl:col-span-8 bg-slate-900 border border-rose-500/60 rounded-xl p-4 shadow-gov-md grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="md:col-span-4 flex flex-col items-center justify-center border-r border-slate-800 pr-4">
            <RiskScoreGauge
              score={project.overallRisk}
              label="Sentinel Forensics Composite"
              sublabel="HIGH RISK DOSSIER"
              revision="4.2a"
              robustness="98%"
            />
          </div>

          <div className="md:col-span-8 space-y-3 font-mono text-xs flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <span className="text-slate-400">DIAGNOSTIC ASSESSMENT</span>
              <span className="text-rose-400 font-bold">Signal Robustness: 98% (High Confidence)</span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-2.5 bg-slate-950 rounded border border-slate-800">
                <div className="text-[10px] text-slate-400">Cost Deviation:</div>
                <div className="text-sm font-extrabold text-rose-400">2.13x Peer Median</div>
              </div>
              <div className="p-2.5 bg-slate-950 rounded border border-slate-800">
                <div className="text-[10px] text-slate-400">Physical Milestone Gap:</div>
                <div className="text-sm font-extrabold text-amber-400">47% Lag (38% vs 85%)</div>
              </div>
              <div className="p-2.5 bg-slate-950 rounded border border-slate-800">
                <div className="text-[10px] text-slate-400">Disbursed vs Executed:</div>
                <div className="text-sm font-extrabold text-blue-400">78% vs 38%</div>
              </div>
              <div className="p-2.5 bg-slate-950 rounded border border-slate-800">
                <div className="text-[10px] text-slate-400">Priority Rank in Zone:</div>
                <div className="text-sm font-extrabold text-white">#4 Coastal Zone</div>
              </div>
            </div>

            <div className="p-2.5 bg-rose-950/40 border border-rose-500/40 rounded text-rose-200 text-[11px]">
              <strong className="text-rose-400">RECOMMENDED DIRECTIVE: </strong>
              Freeze remaining ₹10.67L tranche and dispatch District Vigilance Squad for Measurement Book (MB) re-audit.
            </div>
          </div>
        </div>

        {/* Cadastral GIS & Evidence Sidebar */}
        <div className="xl:col-span-4 bg-slate-900 border border-slate-800 rounded-xl p-4 shadow-gov-md space-y-3">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <div className="text-xs font-bold font-mono text-slate-300 flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-emerald-400" />
              <span>CADASTRAL GIS VERIFICATION</span>
            </div>
            <span className="text-[10px] font-mono text-slate-400">12.7905° N, 80.2496° E</span>
          </div>

          <div className="bg-slate-950 border border-slate-800 rounded-lg p-3 h-36 flex flex-col justify-between font-mono text-xs relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:1rem_1rem] opacity-30" />
            <div className="relative z-10 font-bold text-white">380m OVERLAY RADIUS DETECTED</div>
            <div className="relative z-10 text-[10px] text-amber-300">Dual Sanction Overlap Vector with Asset #6511</div>
            <div className="relative z-10 text-[10px] text-slate-400">Centroid Offset: 14.2m</div>
          </div>

          {/* Cryptographic Ledger Block */}
          <div className="p-2.5 bg-slate-950 border border-slate-800 rounded flex items-center justify-between font-mono text-[10px]">
            <div className="flex items-center gap-1.5 text-slate-400">
              <Lock className="w-3.5 h-3.5 text-emerald-400" />
              <span>LEDGER BLOCK: #9842-TamilNadu-CHN</span>
            </div>
            <span className="text-slate-300 font-bold">SHA256 Validated</span>
          </div>
        </div>
      </div>

      {/* Why Was This Project Flagged? Section */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 shadow-gov-md space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="text-xs font-bold font-mono text-white flex items-center gap-2 uppercase">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span>WHY WAS THIS PROJECT FLAGGED? (Explainable AI Signal Matrix)</span>
          </div>
          <button
            onClick={() => setIsExplainOpen(true)}
            className="text-xs font-mono text-blue-400 hover:underline flex items-center gap-1"
          >
            <span>Open Interactive Gemini AI Drawer</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 font-mono text-xs">
          <div className="p-3 bg-slate-950 border border-rose-500/40 rounded-lg space-y-1">
            <div className="flex justify-between font-bold text-white">
              <span>01. Cost Outlier Anomaly</span>
              <span className="text-rose-400">+27 Pts</span>
            </div>
            <p className="text-[11px] text-slate-300 leading-relaxed">
              Sanction of ₹48.5 Lakhs exceeds cluster peer median of ₹23.8 Lakhs by 2.04x within a 10 mile radius.
            </p>
          </div>

          <div className="p-3 bg-slate-950 border border-amber-500/40 rounded-lg space-y-1">
            <div className="flex justify-between font-bold text-white">
              <span>02. Severe Schedule Stalling</span>
              <span className="text-rose-400">+23 Pts</span>
            </div>
            <p className="text-[11px] text-slate-300 leading-relaxed">
              38% physical vs expected target of 85% at 240 calendar days (145 days overdue).
            </p>
          </div>

          <div className="p-3 bg-slate-950 border border-amber-500/40 rounded-lg space-y-1">
            <div className="flex justify-between font-bold text-white">
              <span>03. Payment Velocity Burst</span>
              <span className="text-rose-400">+18 Pts</span>
            </div>
            <p className="text-[11px] text-slate-300 leading-relaxed">
              ₹18.4 Lakhs disbursed across 2 rapid tranches in 14 days without corresponding MB measurement signatures.
            </p>
          </div>

          <div className="p-3 bg-slate-950 border border-amber-500/40 rounded-lg space-y-1">
            <div className="flex justify-between font-bold text-white">
              <span>04. Duplicate Sanction Pattern</span>
              <span className="text-rose-400">+14 Pts</span>
            </div>
            <p className="text-[11px] text-slate-300 leading-relaxed">
              High semantic & spatial overlap (92% specification match) with legacy asset MPL-2024-6511.
            </p>
          </div>

          <div className="p-3 bg-slate-950 border border-slate-800 rounded-lg space-y-1">
            <div className="flex justify-between font-bold text-white">
              <span>05. Disbursement Disparity</span>
              <span className="text-amber-400">+5 Pts</span>
            </div>
            <p className="text-[11px] text-slate-300 leading-relaxed">
              Financial release at 78% while physical structural work is certified at only 38%.
            </p>
          </div>
        </div>
      </div>

      {/* Telemetry & Milestone Verification Table */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 shadow-gov-md space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div>
            <div className="text-xs font-bold font-mono text-slate-300 uppercase">
              TELEMETRY: FINANCIAL VS PHYSICAL MILESTONE VERIFICATION
            </div>
            <div className="text-xs text-slate-400">
              Comparative analysis of public capital release versus certified civil delivery
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-3 bg-slate-950 border border-slate-800 rounded-lg font-mono text-xs">
          <div>
            <span className="text-slate-400">SANCTIONED AMOUNT:</span>
            <div className="text-lg font-extrabold text-white">₹48,50,000</div>
          </div>
          <div>
            <span className="text-slate-400">CUMULATIVE EXPENDED:</span>
            <div className="text-lg font-extrabold text-blue-400">₹37,83,000 (78%)</div>
          </div>
          <div>
            <span className="text-slate-400">UNUTILIZED BALANCE:</span>
            <div className="text-lg font-extrabold text-emerald-400">₹10,67,000</div>
          </div>
        </div>

        {/* Milestones table */}
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left border-collapse font-mono">
            <thead>
              <tr className="border-b border-slate-800 text-[10px] uppercase text-slate-400">
                <th className="p-3">Milestone Phase</th>
                <th className="p-3">Planned Target</th>
                <th className="p-3">Date Progress</th>
                <th className="p-3">Disbursement</th>
                <th className="p-3 text-center">Audit Verification</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              <tr>
                <td className="p-3 font-bold text-white">M1: Site Clearing & Foundation</td>
                <td className="p-3 text-slate-300">30 Days Target</td>
                <td className="p-3 text-emerald-400 font-bold">100% Complete</td>
                <td className="p-3 text-slate-300">₹9.70L (20%)</td>
                <td className="p-3 text-center text-emerald-400 font-bold">Verified - Geo-tagged</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-white">M2: Plinth & Reinforced Columns</td>
                <td className="p-3 text-slate-300">60 Days Target</td>
                <td className="p-3 text-emerald-400 font-bold">95% Complete</td>
                <td className="p-3 text-slate-300">₹9.70L (20%)</td>
                <td className="p-3 text-center text-emerald-400 font-bold">Verified - MB Checked</td>
              </tr>
              <tr className="bg-rose-950/30">
                <td className="p-3 font-bold text-rose-300">M3: Roof Slab & Superstructure</td>
                <td className="p-3 text-slate-300">120 Days Target</td>
                <td className="p-3 text-rose-400 font-bold">12% OVERDUE</td>
                <td className="p-3 text-slate-300">₹18.43L (38%)</td>
                <td className="p-3 text-center text-rose-400 font-bold">ALERT: MB Missing</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-slate-400">M4: Electrical & Finishing</td>
                <td className="p-3 text-slate-400">180 Days Target</td>
                <td className="p-3 text-slate-400">0% Not Started</td>
                <td className="p-3 text-slate-400">₹0.00L (0%)</td>
                <td className="p-3 text-center text-slate-400">Unreleased</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Duplicate Comparison Component */}
      <DuplicateComparisonCard />

      {/* Chronological Timeline */}
      <EvidenceTimeline />

      {/* Investigative Bottom Action Bar */}
      <div className="sticky bottom-4 z-20 bg-slate-900/95 border border-slate-700 p-4 rounded-xl shadow-2xl flex flex-wrap items-center justify-between gap-4 backdrop-blur-md">
        <div>
          <div className="text-xs font-mono font-bold text-white">
            INVESTIGATIVE DIRECTIVE ACTIONS (RISK LEVEL: CRITICAL)
          </div>
          <div className="text-[11px] text-slate-400 font-mono">
            Recommended Action: Freeze remaining ₹10.67L tranche pending MB measurement book physical audit.
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => setDisbursementFrozen(!disbursementFrozen)}
            className={`px-4 py-2 text-xs font-mono font-bold rounded shadow-sm transition-all ${
              disbursementFrozen
                ? 'bg-emerald-600 text-white'
                : 'bg-amber-600 hover:bg-amber-500 text-white'
            }`}
          >
            {disbursementFrozen ? '✓ Disbursement Frozen (#LOCK-9481)' : 'Freeze Disbursement Tranche'}
          </button>

          <button
            onClick={() => setIsCaseModalOpen(true)}
            className="px-5 py-2 bg-rose-600 hover:bg-rose-500 text-white text-xs font-mono font-extrabold rounded shadow-md flex items-center gap-1.5"
          >
            <FileCheck className="w-4 h-4" />
            <span>Create Case (TN-2026)</span>
          </button>
        </div>
      </div>

      {/* Explain Risk Drawer */}
      <ExplainRiskDrawer
        isOpen={isExplainOpen}
        onClose={() => setIsExplainOpen(false)}
        projectCode={project.projectCode}
      />

      {/* Review Case Modal */}
      <ReviewCaseModal
        isOpen={isCaseModalOpen}
        onClose={() => setIsCaseModalOpen(false)}
        projectCode={project.projectCode}
        projectTitle={project.title}
      />
    </div>
  );
};

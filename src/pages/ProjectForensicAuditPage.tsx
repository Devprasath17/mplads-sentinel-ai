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
  Printer,
  ChevronRight,
  AlertTriangle,
  FileText,
  DollarSign,
  Layers,
  Clock,
  History,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

export const ProjectForensicAuditPage: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState<'overview' | 'financial' | 'execution' | 'payments' | 'risk' | 'documents' | 'timeline' | 'audit'>('overview');
  const [isExplainOpen, setIsExplainOpen] = useState(false);
  const [isCaseModalOpen, setIsCaseModalOpen] = useState(false);
  const [disbursementFrozen, setDisbursementFrozen] = useState(false);

  const project = FEATURED_PROJECT_1042;

  const tabs = [
    { id: 'overview', label: 'Overview', icon: ShieldAlert },
    { id: 'financial', label: 'Financial', icon: DollarSign },
    { id: 'execution', label: 'Execution', icon: Layers },
    { id: 'payments', label: 'Payments', icon: DollarSign },
    { id: 'risk', label: 'Risk Signals', icon: AlertTriangle },
    { id: 'documents', label: 'Documents', icon: FileText },
    { id: 'timeline', label: 'Timeline', icon: Clock },
    { id: 'audit', label: 'Audit Trail', icon: History },
  ] as const;

  return (
    <div className="p-6 lg:p-8 space-y-6 max-w-[1700px] mx-auto font-sans">
      {/* Investigation Workspace Header */}
      <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-gov-sm space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 bg-red-50 text-red-700 border border-red-200 text-xs font-mono font-bold rounded uppercase">
                CRITICAL INVESTIGATION DOSSIER
              </span>
              <span className="text-xs font-mono text-slate-500">Ref: SEC-TN-NDLS-01</span>
            </div>
            <h1 className="text-2xl lg:text-3xl font-bold text-slate-900 tracking-tight mt-1.5 font-mono">
              Project Audit: {project.projectCode}
            </h1>
            <p className="text-sm text-slate-600 font-medium mt-0.5">
              {project.title} • <span className="font-semibold text-slate-800">{project.district}, {project.state}</span>
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-center font-mono">
              <div className="text-[10px] text-red-700 font-bold uppercase">RISK SCORE</div>
              <div className="text-3xl font-extrabold text-red-700">{project.overallRisk} <span className="text-xs text-slate-500 font-normal">/100</span></div>
            </div>

            <button
              onClick={() => window.print()}
              className="px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 text-xs font-semibold rounded-lg flex items-center gap-2 transition-colors"
            >
              <Printer className="w-4 h-4" />
              <span>Export Dossier</span>
            </button>

            <button
              onClick={() => setIsExplainOpen(true)}
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold rounded-lg flex items-center gap-2 shadow-sm transition-colors"
            >
              <Sparkles className="w-4 h-4" />
              <span>Ask AI Explanation</span>
            </button>

            <button
              onClick={() => setIsCaseModalOpen(true)}
              className="px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white text-xs font-semibold rounded-lg flex items-center gap-2 shadow-sm transition-colors"
            >
              <FileCheck className="w-4 h-4" />
              <span>Create Review Case</span>
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex overflow-x-auto border-b border-slate-200 gap-1 pt-1 font-sans text-xs font-semibold text-slate-600">
          {tabs.map((t) => {
            const Icon = t.icon;
            const isActive = activeTab === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id)}
                className={`px-4 py-2.5 flex items-center gap-2 border-b-2 transition-all whitespace-nowrap ${
                  isActive
                    ? 'border-blue-700 text-blue-700 bg-blue-50/50 font-bold'
                    : 'border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-blue-700' : 'text-slate-400'}`} />
                <span>{t.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Prominent "Why was this project flagged?" Section (Section 13) */}
      <div className="bg-white border border-blue-200 rounded-xl p-6 shadow-gov-sm space-y-4">
        <div className="flex items-center justify-between border-b border-slate-200 pb-3">
          <div className="text-xs font-bold font-mono text-blue-900 uppercase tracking-wider flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-blue-700" />
            <span>WHY WAS THIS PROJECT FLAGGED?</span>
          </div>
          <span className="text-xs text-blue-700 font-semibold font-mono bg-blue-50 px-2.5 py-0.5 rounded border border-blue-200">
            Potential Anomaly Detected
          </span>
        </div>

        <p className="text-xs text-slate-700 font-medium leading-relaxed">
          The system identified multiple unusual execution patterns requiring administrative review and human verification:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 font-sans text-xs">
          <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg space-y-1">
            <div className="font-bold text-slate-900 flex items-center justify-between">
              <span>01. Progress Lag</span>
              <span className="text-red-700 font-mono font-bold">+27 Pts</span>
            </div>
            <p className="text-slate-600 text-xs leading-relaxed">
              Physical progress is significantly below expected progress (38% physical vs 85% expected trajectory).
            </p>
          </div>

          <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg space-y-1">
            <div className="font-bold text-slate-900 flex items-center justify-between">
              <span>02. Cost Exposure</span>
              <span className="text-red-700 font-mono font-bold">+23 Pts</span>
            </div>
            <p className="text-slate-600 text-xs leading-relaxed">
              Expenditure is high relative to certified physical completion (78% funds drawn vs 38% physical).
            </p>
          </div>

          <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg space-y-1">
            <div className="font-bold text-slate-900 flex items-center justify-between">
              <span>03. Payment Velocity</span>
              <span className="text-red-700 font-mono font-bold">+18 Pts</span>
            </div>
            <p className="text-slate-600 text-xs leading-relaxed">
              Payment behaviour differs from comparable historical projects in the same administrative cluster.
            </p>
          </div>

          <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg space-y-1">
            <div className="font-bold text-slate-900 flex items-center justify-between">
              <span>04. Similar Description</span>
              <span className="text-red-700 font-mono font-bold">+14 Pts</span>
            </div>
            <p className="text-slate-600 text-xs leading-relaxed">
              A similar project description was identified within 380m proximity (92% BoQ overlap).
            </p>
          </div>

          <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg space-y-1">
            <div className="font-bold text-slate-900 flex items-center justify-between">
              <span>05. Geographic Relationship</span>
              <span className="text-amber-700 font-mono font-bold">+5 Pts</span>
            </div>
            <p className="text-slate-600 text-xs leading-relaxed">
              Geographic relationships indicate potentially related ongoing public works.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 pt-2 border-t border-slate-100">
          <button
            onClick={() => setIsExplainOpen(true)}
            className="px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-lg text-xs font-semibold shadow-sm"
          >
            View Evidence
          </button>
          <button
            onClick={() => setActiveTab('overview')}
            className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 rounded-lg text-xs font-semibold"
          >
            View Project Details
          </button>
          <button
            onClick={() => setIsCaseModalOpen(true)}
            className="px-4 py-2 bg-white hover:bg-slate-50 text-blue-700 border border-blue-300 rounded-lg text-xs font-semibold"
          >
            Create Review Case
          </button>
        </div>
      </div>

      {/* Tab Content Display */}
      {activeTab === 'overview' && (
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
          <div className="xl:col-span-8 bg-white border border-slate-200 rounded-xl p-6 shadow-gov-sm grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-5 flex flex-col items-center justify-center border-r border-slate-200 pr-6">
              <RiskScoreGauge
                score={project.overallRisk}
                label="Overall Risk Score"
                sublabel="REVIEW RECOMMENDED"
              />
            </div>

            <div className="md:col-span-7 space-y-4 text-xs font-sans">
              <div className="font-bold text-slate-900 text-sm uppercase font-mono border-b border-slate-200 pb-2">
                Executive Summary Metrics
              </div>

              <div className="grid grid-cols-2 gap-3 font-mono">
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                  <div className="text-[11px] text-slate-500 font-sans">Cost Anomaly</div>
                  <div className="text-base font-extrabold text-red-700">91 / 100</div>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                  <div className="text-[11px] text-slate-500 font-sans">Delay Risk</div>
                  <div className="text-base font-extrabold text-amber-700">84 / 100</div>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                  <div className="text-[11px] text-slate-500 font-sans">Payment Anomaly</div>
                  <div className="text-base font-extrabold text-blue-700">72 / 100</div>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                  <div className="text-[11px] text-slate-500 font-sans">Duplicate Similarity</div>
                  <div className="text-base font-extrabold text-red-700">88 / 100</div>
                </div>
              </div>

              <div className="p-3.5 bg-red-50 border border-red-200 rounded-lg text-red-800 text-xs font-medium leading-relaxed">
                <strong className="font-bold font-mono">Recommended Action: </strong>
                Freeze remaining ₹10.67L tranche and dispatch District Inspector for Measurement Book (MB) verification.
              </div>
            </div>
          </div>

          <div className="xl:col-span-4 bg-white border border-slate-200 rounded-xl p-6 shadow-gov-sm space-y-4">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <div className="text-xs font-bold font-mono text-slate-900 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-700" />
                <span>Geographic Location</span>
              </div>
              <span className="text-xs font-mono text-slate-500">12.7905° N, 80.2496° E</span>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 h-40 flex flex-col justify-between font-mono text-xs">
              <div className="font-bold text-slate-900">380m Proximity Overlay</div>
              <div className="text-amber-800 font-semibold">Dual Sanction Overlap Vector with Asset #6511</div>
              <div className="text-slate-500">Centroid Offset: 14.2m</div>
            </div>

            <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg flex items-center justify-between font-mono text-xs">
              <span className="text-slate-600 flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-emerald-700" />
                <span>Ledger Block #9842</span>
              </span>
              <span className="text-slate-900 font-bold">Validated</span>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'financial' && (
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-gov-sm space-y-6">
          <h3 className="text-base font-bold text-slate-900 border-b border-slate-200 pb-3">
            Financial Breakdown & Utilization
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 font-mono text-xs">
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
              <div className="text-slate-500 font-sans">SANCTIONED AMOUNT</div>
              <div className="text-2xl font-extrabold text-slate-900 mt-1">₹48,50,000</div>
            </div>
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
              <div className="text-slate-500 font-sans">ESTIMATED COST</div>
              <div className="text-2xl font-extrabold text-slate-900 mt-1">₹48,50,000</div>
            </div>
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
              <div className="text-slate-500 font-sans">EXPENDITURE</div>
              <div className="text-2xl font-extrabold text-blue-700 mt-1">₹37,83,000</div>
            </div>
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
              <div className="text-slate-500 font-sans">REMAINING AMOUNT</div>
              <div className="text-2xl font-extrabold text-emerald-700 mt-1">₹10,67,000</div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'execution' && (
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-gov-sm space-y-6">
          <h3 className="text-base font-bold text-slate-900 border-b border-slate-200 pb-3">
            Physical Progress & Execution Status
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs">
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
              <div className="text-slate-500 font-sans">EXPECTED PROGRESS</div>
              <div className="text-2xl font-extrabold text-slate-900 mt-1">85.0%</div>
            </div>
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
              <div className="text-slate-500 font-sans">ACTUAL PROGRESS</div>
              <div className="text-2xl font-extrabold text-red-700 mt-1">38.0%</div>
            </div>
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
              <div className="text-slate-500 font-sans">PROGRESS VARIANCE</div>
              <div className="text-2xl font-extrabold text-red-700 mt-1">-47.0 pp</div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'risk' && (
        <div className="space-y-6">
          <DuplicateComparisonCard />
        </div>
      )}

      {activeTab === 'timeline' && (
        <div className="space-y-6">
          <EvidenceTimeline />
        </div>
      )}

      {(activeTab === 'payments' || activeTab === 'documents' || activeTab === 'audit') && (
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-gov-sm">
          <h3 className="text-base font-bold text-slate-900 border-b border-slate-200 pb-3 uppercase font-mono text-xs">
            {activeTab} Module
          </h3>
          <p className="text-sm text-slate-600 mt-4 font-sans">
            Detailed records for {activeTab} logged in statutory database. All transactions synchronized with NIC-PFMS gateway.
          </p>
        </div>
      )}

      {/* Bottom Sticky Action Bar */}
      <div className="sticky bottom-4 z-20 bg-white border border-slate-300 p-4 rounded-xl shadow-gov-lg flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="text-xs font-mono font-bold text-slate-900 uppercase">
            ADMINISTRATIVE DIRECTIVE ACTIONS (RISK: HIGH)
          </div>
          <div className="text-xs text-slate-600 font-sans mt-0.5">
            Recommended Action: Freeze remaining ₹10.67L tranche pending MB measurement book physical audit.
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => setDisbursementFrozen(!disbursementFrozen)}
            className={`px-4 py-2 text-xs font-mono font-bold rounded-lg shadow-sm transition-all ${
              disbursementFrozen
                ? 'bg-emerald-700 text-white'
                : 'bg-amber-600 hover:bg-amber-700 text-white'
            }`}
          >
            {disbursementFrozen ? '✓ Disbursement Frozen (#LOCK-9481)' : 'Freeze Disbursement Tranche'}
          </button>

          <button
            onClick={() => setIsCaseModalOpen(true)}
            className="px-5 py-2 bg-blue-700 hover:bg-blue-800 text-white text-xs font-semibold rounded-lg shadow-sm flex items-center gap-2"
          >
            <FileCheck className="w-4 h-4" />
            <span>Create Case</span>
          </button>
        </div>
      </div>

      <ExplainRiskDrawer
        isOpen={isExplainOpen}
        onClose={() => setIsExplainOpen(false)}
        projectCode={project.projectCode}
      />

      <ReviewCaseModal
        isOpen={isCaseModalOpen}
        onClose={() => setIsCaseModalOpen(false)}
        projectCode={project.projectCode}
        projectTitle={project.title}
      />
    </div>
  );
};


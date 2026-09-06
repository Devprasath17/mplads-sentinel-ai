import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { KpiCard } from '../components/common/KpiCard';
import { RiskBadge } from '../components/common/RiskBadge';
import { DistrictMap } from '../components/maps/DistrictMap';
import { DISTRICT_CHENNAI_DATA, PROJECTS_LIST_DATA, FEATURED_PROJECT_1042 } from '../../server/mockData';
import { MapPin, UserCheck, ShieldAlert, FileText, ArrowRight, ExternalLink, Camera, ChevronRight, AlertCircle, AlertTriangle } from 'lucide-react';
import { ReviewCaseModal } from '../components/cases/ReviewCaseModal';

export const DistrictDashboardPage: React.FC = () => {
  const { districtId } = useParams<{ districtId: string }>();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(FEATURED_PROJECT_1042);

  const district = DISTRICT_CHENNAI_DATA;

  const handleOpenCaseModal = (proj: any) => {
    setSelectedProject(proj);
    setIsModalOpen(true);
  };

  return (
    <div className="p-4 lg:p-6 space-y-6 max-w-[1700px] mx-auto">
      {/* District Header Card */}
      <div className="bg-slate-900 border border-slate-800 p-4 lg:p-6 rounded-xl shadow-gov-md space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div>
            <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest flex items-center gap-1.5">
              <MapPin className="w-4 h-4" />
              <span>DISTRICT EXECUTIVE INTELLIGENCE • {district.code}</span>
            </div>
            <h1 className="text-2xl font-extrabold text-white tracking-tight font-mono mt-1">
              {district.name}
            </h1>
            <div className="text-xs text-slate-300 font-mono mt-1 flex items-center gap-2">
              <UserCheck className="w-3.5 h-3.5 text-blue-400" />
              <span>Authorized Officer: <strong className="text-white">{district.collectorName}</strong> (District Collector & Monitoring Authority)</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="p-3 bg-slate-950 border border-slate-800 rounded-lg text-center font-mono">
              <div className="text-[10px] text-slate-400">COMPOSITE RISK INDEX</div>
              <div className="text-2xl font-extrabold text-rose-400">{district.compositeRiskIndex} <span className="text-xs text-slate-400 font-normal">/100</span></div>
            </div>
            <button
              onClick={() => navigate('/project/MPL-2026-1042')}
              className="px-4 py-2 bg-rose-600 hover:bg-rose-500 text-white font-mono font-bold text-xs rounded-lg shadow-sm flex items-center gap-2 transition-all"
            >
              <span>Initiate District Audit Run</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Sub-header metrics row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-1 font-mono text-xs text-slate-300">
          <div>
            <span className="text-slate-400">Works Scanned:</span> <strong className="text-white">{district.activeSanctionedWorks.toLocaleString()}</strong>
          </div>
          <div>
            <span className="text-slate-400">ACs Tracked:</span> <strong className="text-white">16 Assembly Segments</strong>
          </div>
          <div>
            <span className="text-slate-400">Signal Accuracy:</span> <strong className="text-emerald-400">{district.signalAccuracy}%</strong>
          </div>
          <div>
            <span className="text-slate-400">Total Outlay:</span> <strong className="text-white">₹{district.totalOutlayCr} Cr</strong>
          </div>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        <KpiCard
          title="ACTIVE SANCTIONED WORKS"
          value={district.activeSanctionedWorks.toLocaleString()}
          subtitle={`Total outlay: ₹${district.totalOutlayCr} Cr`}
          subtext="16 Assembly Segments"
          badgeText="Tracked"
          icon={FileText}
        />
        <KpiCard
          title="HIGH-RISK SIGNAL QUEUE"
          value={`${district.highRiskCount} Works`}
          subtitle="Cost • Timeline • Geospatial breaches"
          subtext={`${district.criticalDuplicationFlags} Critical Duplication flags`}
          badgeText="Action Required"
          badgeType="alert"
          icon={ShieldAlert}
        />
        <KpiCard
          title="FUND DISBURSAL BURN RATE"
          value={`${district.disbursalBurnRate}%`}
          subtitle={`Disbursed ₹${district.disbursedCr} Cr / ₹${district.totalOutlayCr} Cr`}
          subtext="Target FY26: 75%"
          badgeText="+2.1% vs Q3"
          badgeType="success"
        />
        <KpiCard
          title="CRITICAL LAGGING WORKS"
          value={district.criticalLaggingWorks}
          subtitle=">60 days milestone breach window"
          subtext="19 Show Cause Notices active"
          badgeText="Stalled"
          badgeType="warning"
          icon={AlertCircle}
        />
      </div>

      {/* Main Grid: Forensic Risk Queue & Spatial Distribution Map */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
        {/* Left Column: Forensic Risk Queue */}
        <div className="xl:col-span-7 space-y-4">
          <div className="flex items-center justify-between bg-slate-900 border border-slate-800 p-3 rounded-xl">
            <div className="text-xs font-bold font-mono text-white flex items-center gap-2 uppercase">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse" />
              <span>FORENSIC RISK QUEUE • IMMEDIATE DM ACTION</span>
            </div>
            <span className="text-[10px] font-mono text-blue-400 bg-blue-950 px-2 py-0.5 rounded border border-blue-800">
              Real-time Anomaly Engine
            </span>
          </div>

          {/* Project 1: Featured 1042 */}
          <div className="bg-slate-900 border border-rose-500/60 rounded-xl p-4 space-y-3 shadow-gov-md">
            <div className="flex items-start justify-between gap-2">
              <div>
                <div className="flex items-center gap-2 font-mono">
                  <span
                    onClick={() => navigate('/project/MPL-2026-1042')}
                    className="font-bold text-white text-sm hover:text-blue-400 cursor-pointer underline"
                  >
                    MPL-2026-1042
                  </span>
                  <RiskBadge level="CRITICAL" score={87} size="sm" />
                </div>
                <div className="font-bold text-white text-xs mt-1">
                  Construction of Multi-purpose Community Infrastructure Centre
                </div>
                <div className="text-[11px] text-slate-400 font-mono mt-0.5">
                  Ward 142, T. Nagar AC • Executing: Greater Chennai Corporation
                </div>
              </div>
              <div className="text-right font-mono">
                <div className="text-sm font-extrabold text-white">₹48.50 L</div>
                <div className="text-[10px] text-slate-400">Disbursed: ₹37.80 L</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-1">
              <span className="bg-rose-950 text-rose-300 border border-rose-800 text-[10px] font-mono px-2 py-0.5 rounded font-bold">
                +172% Cost Variance Spike
              </span>
              <span className="bg-amber-950 text-amber-300 border border-amber-800 text-[10px] font-mono px-2 py-0.5 rounded font-bold">
                47% Milestone Progress Gap
              </span>
              <span className="bg-blue-950 text-blue-300 border border-blue-800 text-[10px] font-mono px-2 py-0.5 rounded font-bold">
                Outflow Velocity Acceleration
              </span>
            </div>

            <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between gap-2">
              <div className="text-[11px] text-rose-400 font-mono flex items-center gap-1">
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>Officer report overdue by 14 days</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleOpenCaseModal(FEATURED_PROJECT_1042)}
                  className="px-3 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono font-semibold rounded"
                >
                  Assign Field Officer
                </button>
                <button
                  onClick={() => navigate('/project/MPL-2026-1042')}
                  className="px-3.5 py-1 bg-blue-600 hover:bg-blue-500 text-white text-xs font-mono font-bold rounded flex items-center gap-1"
                >
                  <span>Inspect Dossier</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Project 2: Velachery Lake */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-3 shadow-gov-md">
            <div className="flex items-start justify-between gap-2">
              <div>
                <div className="flex items-center gap-2 font-mono">
                  <span className="font-bold text-white text-sm">MPL-2026-0819</span>
                  <RiskBadge level="HIGH" score={84} size="sm" />
                </div>
                <div className="font-bold text-white text-xs mt-1">
                  Desilting & Deepening of Velachery Lake Surplus Channel Reach
                </div>
                <div className="text-[11px] text-slate-400 font-mono mt-0.5">
                  Velachery AC • Executing: Water Resources Dept (WRD-TN)
                </div>
              </div>
              <div className="text-right font-mono">
                <div className="text-sm font-extrabold text-white">₹24.00 L</div>
                <div className="text-[10px] text-slate-400">Disbursed: ₹24.00 L (100%)</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-1">
              <span className="bg-amber-950 text-amber-300 border border-amber-800 text-[10px] font-mono px-2 py-0.5 rounded font-bold">
                94-Day Milestone Target Breach
              </span>
              <span className="bg-slate-800 text-slate-300 border border-slate-700 text-[10px] font-mono px-2 py-0.5 rounded font-bold">
                Zero Geo-Tagged Photos Logged
              </span>
            </div>

            <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between gap-2 text-xs font-mono">
              <span className="text-slate-400">Contractor: P.R. Infra Eng. Corp</span>
              <button
                onClick={() => navigate('/project/MPL-2026-0819')}
                className="px-3 py-1 bg-blue-950 hover:bg-blue-900 text-blue-300 border border-blue-800 rounded font-bold"
              >
                View Forensic Graph
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Spatial Map & Diagnostics */}
        <div className="xl:col-span-5 space-y-6">
          <DistrictMap districtName="Chennai Metropolitan District" />

          {/* Model Diagnostic Breakdown */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 shadow-gov-md space-y-3">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <div className="text-xs font-bold font-mono text-white uppercase">
                MODEL DIAGNOSTIC BREAKDOWN
              </div>
              <span className="text-[10px] font-mono text-slate-400">42 Flagged Incidents</span>
            </div>

            <div className="space-y-2 font-mono text-xs">
              <div className="flex items-center justify-between">
                <span className="text-slate-300">Cost Outliers & Estimates Deviation</span>
                <span className="font-bold text-rose-400">14 Works (33%)</span>
              </div>
              <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                <div className="bg-rose-500 h-full w-[33%]" />
              </div>

              <div className="flex items-center justify-between pt-1">
                <span className="text-slate-300">Schedule & Milestone Slippage</span>
                <span className="font-bold text-amber-400">18 Works (43%)</span>
              </div>
              <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                <div className="bg-amber-500 h-full w-[43%]" />
              </div>

              <div className="flex items-center justify-between pt-1">
                <span className="text-slate-300">Unusual Payment Frequency Spike</span>
                <span className="font-bold text-blue-400">6 Works (14%)</span>
              </div>
              <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                <div className="bg-blue-500 h-full w-[14%]" />
              </div>

              <div className="flex items-center justify-between pt-1">
                <span className="text-slate-300">Duplicate Work NLP Proximity Alert</span>
                <span className="font-bold text-rose-400">4 Works (10%)</span>
              </div>
              <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                <div className="bg-rose-500 h-full w-[10%]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lifecycle Capital Deployment & Mobile Geo-Submissions Gallery */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
        <div className="xl:col-span-8 bg-slate-900 border border-slate-800 rounded-xl p-4 shadow-gov-md space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div>
              <div className="text-xs font-bold font-mono text-slate-300 uppercase">
                LIFECYCLE CAPITAL DEPLOYMENT & CONCORDANCE
              </div>
              <div className="text-sm font-extrabold text-white">
                Fund Release Synchrony vs Real-world Field Verification
              </div>
            </div>
            <span className="text-[10px] font-mono text-blue-400 bg-blue-950 px-2.5 py-1 rounded border border-blue-800 font-bold">
              PFMS Gateway #CH-2026
            </span>
          </div>

          <div className="p-4 bg-slate-950 rounded-lg space-y-3 font-mono text-xs">
            <div className="flex justify-between text-slate-300">
              <span>Sanctioned: <strong>₹94.20L (100%)</strong></span>
              <span>Disbursed: <strong className="text-blue-400">₹78.60L (83.4%)</strong></span>
              <span>Expended: <strong className="text-emerald-400">₹67.38L (71.4%)</strong></span>
            </div>

            <div className="w-full bg-slate-800 h-3 rounded-full overflow-hidden flex">
              <div className="bg-emerald-500 h-full w-[71%]" title="Expended" />
              <div className="bg-blue-500 h-full w-[12%]" title="Disbursed" />
            </div>

            <div className="grid grid-cols-2 gap-4 pt-2 border-t border-slate-800 text-[11px]">
              <div>
                <span className="text-slate-400">PHYSICAL VS FINANCIAL CONCORDANCE:</span>
                <div className="text-sm font-bold text-emerald-400">85.6% Sync Rate</div>
              </div>
              <div>
                <span className="text-slate-400">UTILIZATION CERTIFICATE RATE:</span>
                <div className="text-sm font-bold text-blue-400">92.4% Submitted</div>
              </div>
            </div>
          </div>
        </div>

        <div className="xl:col-span-4 bg-slate-900 border border-slate-800 rounded-xl p-4 shadow-gov-md space-y-3">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <div className="text-xs font-bold font-mono text-white flex items-center gap-1.5 uppercase">
              <Camera className="w-4 h-4 text-emerald-400" />
              <span>RECENT MOBILE GEO-SUBMISSIONS</span>
            </div>
            <span className="text-[10px] font-mono text-slate-400">NIC Mobile App</span>
          </div>

          <div className="grid grid-cols-3 gap-2">
            <div className="bg-slate-950 border border-slate-800 rounded p-1.5 text-center text-[10px] font-mono">
              <div className="bg-slate-800 h-16 rounded mb-1 flex items-center justify-center text-slate-500">
                <Camera className="w-5 h-5" />
              </div>
              <div className="text-white font-bold truncate">MPL-1042</div>
              <div className="text-slate-400">Pillar Cast</div>
            </div>
            <div className="bg-slate-950 border border-slate-800 rounded p-1.5 text-center text-[10px] font-mono">
              <div className="bg-slate-800 h-16 rounded mb-1 flex items-center justify-center text-slate-500">
                <Camera className="w-5 h-5" />
              </div>
              <div className="text-white font-bold truncate">MPL-0819</div>
              <div className="text-slate-400">Lake Breach</div>
            </div>
            <div className="bg-slate-950 border border-slate-800 rounded p-1.5 text-center text-[10px] font-mono">
              <div className="bg-slate-800 h-16 rounded mb-1 flex items-center justify-center text-slate-500">
                <Camera className="w-5 h-5" />
              </div>
              <div className="text-white font-bold truncate">MPL-0955</div>
              <div className="text-slate-400">Health Annex</div>
            </div>
          </div>
        </div>
      </div>

      {/* Review Case Modal */}
      <ReviewCaseModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        projectCode={selectedProject?.projectCode}
        projectTitle={selectedProject?.title}
      />
    </div>
  );
};

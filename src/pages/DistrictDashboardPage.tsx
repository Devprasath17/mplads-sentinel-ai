import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { KpiCard } from '../components/common/KpiCard';
import { RiskBadge } from '../components/common/RiskBadge';
import { DistrictMap } from '../components/maps/DistrictMap';
import { DISTRICT_CHENNAI_DATA, PROJECTS_LIST_DATA, FEATURED_PROJECT_1042 } from '../../server/mockData';
import { MapPin, UserCheck, ShieldAlert, FileText, ArrowRight, Camera, ChevronRight, AlertCircle, AlertTriangle, Clock, CheckCircle2, TrendingUp } from 'lucide-react';
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
    <div className="p-6 lg:p-8 space-y-8 max-w-[1700px] mx-auto font-sans">
      {/* State & District Selector Header */}
      <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-gov-sm space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-5 border-b border-slate-200 pb-5">
          <div>
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold font-mono text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200 uppercase flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-emerald-700" />
                <span>DISTRICT DASHBOARD</span>
              </span>

              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-500 font-mono">State:</span>
                <select
                  aria-label="Select State"
                  value="TN"
                  onChange={(e) => navigate(`/state/${e.target.value}`)}
                  className="bg-slate-50 border border-slate-300 font-semibold text-slate-900 rounded-lg text-xs px-2.5 py-1.5 focus:outline-none"
                >
                  <option value="TN">Tamil Nadu</option>
                  <option value="UP">Uttar Pradesh</option>
                  <option value="MH">Maharashtra</option>
                </select>

                <span className="text-xs text-slate-500 font-mono ml-2">District:</span>
                <select
                  aria-label="Select District"
                  value="TN-CHN"
                  onChange={(e) => navigate(`/district/${e.target.value}`)}
                  className="bg-slate-50 border border-slate-300 font-bold text-slate-900 rounded-lg text-xs px-2.5 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  <option value="TN-CHN">Chennai (Metropolitan)</option>
                  <option value="TN-MDU">Madurai</option>
                  <option value="TN-CBE">Coimbatore</option>
                </select>
              </div>
            </div>

            <h1 className="text-2xl lg:text-3xl font-bold text-slate-900 tracking-tight mt-2.5">
              {district.name} District Intelligence
            </h1>
            <div className="text-xs text-slate-600 font-sans mt-1 flex items-center gap-2">
              <UserCheck className="w-4 h-4 text-blue-700" />
              <span>District Magistrate / Collector: <strong className="text-slate-900">{district.collectorName}</strong></span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="p-3.5 bg-red-50 border border-red-200 rounded-xl text-center font-mono">
              <div className="text-[10px] text-red-700 font-bold uppercase">DISTRICT RISK INDEX</div>
              <div className="text-3xl font-extrabold text-red-700">{district.compositeRiskIndex} <span className="text-xs text-slate-500 font-normal">/100</span></div>
            </div>
            <button
              onClick={() => navigate('/project/MPL-2026-1042')}
              className="px-4 py-2.5 bg-blue-700 hover:bg-blue-800 text-white font-sans font-semibold text-xs rounded-lg shadow-sm flex items-center gap-2 transition-all"
            >
              <span>Inspect Priority Project (MPL-1042)</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Sub-header metrics row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-1 font-mono text-xs text-slate-600">
          <div>
            <span className="text-slate-500">Active Works:</span> <strong className="text-slate-900">{district.activeSanctionedWorks.toLocaleString()}</strong>
          </div>
          <div>
            <span className="text-slate-500">Assembly Segments:</span> <strong className="text-slate-900">16 ACs</strong>
          </div>
          <div>
            <span className="text-slate-500">Signal Accuracy:</span> <strong className="text-emerald-700">{district.signalAccuracy}%</strong>
          </div>
          <div>
            <span className="text-slate-500">Total Outlay:</span> <strong className="text-slate-900">₹{district.totalOutlayCr} Cr</strong>
          </div>
        </div>
      </div>

      {/* 7 District KPI Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-7 gap-4">
        <KpiCard
          title="TOTAL PROJECTS"
          value={district.activeSanctionedWorks.toLocaleString()}
          subtitle="Sanctioned Works"
          subtext="16 AC Segments"
          badgeText="Tracked"
          icon={FileText}
        />
        <KpiCard
          title="SANCTIONED OUTLAY"
          value={`₹${district.totalOutlayCr} Cr`}
          subtitle="Approved Outlay"
          subtext="FY 2025-26"
          badgeText="Sanctioned"
          badgeType="primary"
          icon={TrendingUp}
        />
        <KpiCard
          title="EXPENDITURE"
          value={`₹${district.disbursedCr} Cr`}
          subtitle="Cumulative Expended"
          subtext="Disbursed Funds"
          badgeText="Disbursed"
          badgeType="success"
        />
        <KpiCard
          title="UTILIZATION"
          value={`${district.disbursalBurnRate}%`}
          subtitle="Fund Disbursal Rate"
          subtext="Target: 75%"
          badgeText="On Track"
          badgeType="success"
        />
        <KpiCard
          title="PHYSICAL PROGRESS"
          value="68.4%"
          subtitle="Average Stage"
          subtext="Certified Milestones"
          badgeText="Verified"
          badgeType="success"
          icon={CheckCircle2}
        />
        <KpiCard
          title="DELAYED PROJECTS"
          value={district.criticalLaggingWorks}
          subtitle="Milestone Lagging"
          subtext=">60 Days Lag"
          badgeText="Stalled"
          badgeType="warning"
          icon={Clock}
        />
        <KpiCard
          title="HIGH-RISK PROJECTS"
          value={`${district.highRiskCount} Works`}
          subtitle="Risk Flags Triggered"
          subtext={`${district.criticalDuplicationFlags} Duplications`}
          badgeText="Action Req."
          badgeType="alert"
          icon={ShieldAlert}
        />
      </div>

      {/* Main Grid: Forensic Risk Queue & Spatial Map */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
        {/* Left Column: Priority Works Queue */}
        <div className="xl:col-span-7 space-y-4">
          <div className="flex items-center justify-between bg-white border border-slate-200 p-4 rounded-xl shadow-gov-sm">
            <div className="text-xs font-bold font-mono text-slate-900 flex items-center gap-2 uppercase">
              <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse" />
              <span>DISTRICT HIGH-RISK PROJECTS QUEUE</span>
            </div>
            <span className="text-xs font-mono text-blue-700 bg-blue-50 px-2.5 py-1 rounded border border-blue-200 font-semibold">
              Real-time Risk Engine Active
            </span>
          </div>

          {/* Project 1: Featured 1042 */}
          <div className="bg-white border border-red-300 rounded-xl p-5 space-y-4 shadow-gov-sm">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="flex items-center gap-2 font-mono">
                  <span
                    onClick={() => navigate('/project/MPL-2026-1042')}
                    className="font-bold text-blue-700 text-sm hover:underline cursor-pointer"
                  >
                    MPL-2026-1042
                  </span>
                  <RiskBadge level="CRITICAL" score={87} size="sm" />
                </div>
                <div className="font-bold text-slate-900 text-sm mt-1">
                  Construction of Multi-purpose Community Infrastructure Centre
                </div>
                <div className="text-xs text-slate-500 font-mono mt-0.5">
                  Ward 142, T. Nagar AC • Executing Agency: Greater Chennai Corporation
                </div>
              </div>
              <div className="text-right font-mono">
                <div className="text-base font-extrabold text-slate-900">₹48.50 L</div>
                <div className="text-xs text-slate-500">Expended: ₹37.80 L</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-1">
              <span className="bg-red-50 text-red-700 border border-red-200 text-xs font-mono px-2.5 py-0.5 rounded font-semibold">
                +172% Cost Variance Spike
              </span>
              <span className="bg-amber-50 text-amber-700 border border-amber-200 text-xs font-mono px-2.5 py-0.5 rounded font-semibold">
                47% Milestone Progress Deficit
              </span>
              <span className="bg-blue-50 text-blue-700 border border-blue-200 text-xs font-mono px-2.5 py-0.5 rounded font-semibold">
                Payment Outflow Spike
              </span>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
              <div className="text-xs text-red-700 font-mono flex items-center gap-1.5 font-semibold">
                <AlertTriangle className="w-4 h-4" />
                <span>Verification report overdue by 14 days</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleOpenCaseModal(FEATURED_PROJECT_1042)}
                  className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-md border border-slate-200"
                >
                  Assign Inspector
                </button>
                <button
                  onClick={() => navigate('/project/MPL-2026-1042')}
                  className="px-4 py-1.5 bg-blue-700 hover:bg-blue-800 text-white text-xs font-semibold rounded-md flex items-center gap-1.5 shadow-sm"
                >
                  <span>Inspect Audit Dossier</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Project 2: Velachery Lake */}
          <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-4 shadow-gov-sm">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="flex items-center gap-2 font-mono">
                  <span className="font-bold text-slate-900 text-sm">MPL-2026-0819</span>
                  <RiskBadge level="HIGH" score={84} size="sm" />
                </div>
                <div className="font-bold text-slate-900 text-sm mt-1">
                  Desilting & Deepening of Velachery Lake Surplus Channel Reach
                </div>
                <div className="text-xs text-slate-500 font-mono mt-0.5">
                  Velachery AC • Executing: Water Resources Dept (WRD-TN)
                </div>
              </div>
              <div className="text-right font-mono">
                <div className="text-base font-extrabold text-slate-900">₹24.00 L</div>
                <div className="text-xs text-slate-500">Disbursed: ₹24.00 L (100%)</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-1">
              <span className="bg-amber-50 text-amber-700 border border-amber-200 text-xs font-mono px-2.5 py-0.5 rounded font-semibold">
                94-Day Milestone Target Breach
              </span>
              <span className="bg-slate-100 text-slate-700 border border-slate-200 text-xs font-mono px-2.5 py-0.5 rounded font-semibold">
                Zero Geo-Tagged Photos Logged
              </span>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2 text-xs font-mono">
              <span className="text-slate-600">Contractor: P.R. Infra Eng. Corp</span>
              <button
                onClick={() => navigate('/project/MPL-2026-0819')}
                className="px-3.5 py-1.5 bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 rounded-md font-semibold"
              >
                View Risk Graph
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Spatial Map & Diagnostics */}
        <div className="xl:col-span-5 space-y-6">
          <DistrictMap districtName="Chennai Metropolitan District" />

          {/* Model Diagnostic Breakdown */}
          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-gov-sm space-y-4">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <div className="text-xs font-bold font-mono text-slate-900 uppercase">
                DISTRICT ANOMALY DIMENSION BREAKDOWN
              </div>
              <span className="text-xs font-mono text-slate-500">42 Flagged Incidents</span>
            </div>

            <div className="space-y-3 font-sans text-xs">
              <div className="flex items-center justify-between font-medium">
                <span className="text-slate-700">Cost Outliers & Estimates Deviation</span>
                <span className="font-bold text-red-700 font-mono">14 Works (33%)</span>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div className="bg-red-600 h-full w-[33%]" />
              </div>

              <div className="flex items-center justify-between font-medium pt-1">
                <span className="text-slate-700">Schedule & Milestone Slippage</span>
                <span className="font-bold text-amber-700 font-mono">18 Works (43%)</span>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div className="bg-amber-600 h-full w-[43%]" />
              </div>

              <div className="flex items-center justify-between font-medium pt-1">
                <span className="text-slate-700">Unusual Payment Frequency Spike</span>
                <span className="font-bold text-blue-700 font-mono">6 Works (14%)</span>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div className="bg-blue-600 h-full w-[14%]" />
              </div>

              <div className="flex items-center justify-between font-medium pt-1">
                <span className="text-slate-700">Duplicate Work Similarity Alert</span>
                <span className="font-bold text-red-700 font-mono">4 Works (10%)</span>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div className="bg-red-600 h-full w-[10%]" />
              </div>
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


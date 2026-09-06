import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { KpiCard } from '../components/common/KpiCard';
import { RiskScoreGauge } from '../components/common/RiskScoreGauge';
import { RiskBadge } from '../components/common/RiskBadge';
import { DistrictMap } from '../components/maps/DistrictMap';
import { STATES_DATA, PROJECTS_LIST_DATA } from '../../server/mockData';
import { Building2, MapPin, ShieldAlert, ArrowRight, ExternalLink, ChevronRight, FileText } from 'lucide-react';

export const StateDashboardPage: React.FC = () => {
  const { stateId } = useParams<{ stateId: string }>();
  const navigate = useNavigate();

  const stateData = STATES_DATA.find(s => s.code.toLowerCase() === (stateId || 'tn').toLowerCase()) || STATES_DATA[0];

  return (
    <div className="p-4 lg:p-6 space-y-6 max-w-[1700px] mx-auto">
      {/* State Header Card */}
      <div className="bg-slate-900 border border-slate-800 p-4 lg:p-6 rounded-xl shadow-gov-md flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest flex items-center gap-1.5">
            <Building2 className="w-4 h-4" />
            <span>STATE EXECUTIVE INTELLIGENCE • {stateData.name.toUpperCase()} ({stateData.code})</span>
          </div>
          <h1 className="text-2xl font-extrabold text-white tracking-tight font-mono mt-1">
            {stateData.name} State Implementation & Risk Portfolio
          </h1>
          <div className="text-xs text-slate-400 font-mono mt-1 flex items-center gap-3">
            <span>State Outlay: ₹{stateData.outlayCr} Cr</span>
            <span>•</span>
            <span>Total Monitored Works: {stateData.totalProjects.toLocaleString()}</span>
            <span>•</span>
            <span>High Risk Flagged: {stateData.highRiskCount}</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate('/district/TN-CHN')}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-mono font-bold flex items-center gap-2 shadow-sm transition-all"
          >
            <span>Drilldown to Chennai District</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* State KPIs & Risk Gauge Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
        {/* Risk Gauge Card */}
        <div className="xl:col-span-4 bg-slate-900 border border-slate-800 rounded-xl p-4 shadow-gov-md flex flex-col items-center justify-center">
          <RiskScoreGauge
            score={stateData.riskIndex}
            label={`${stateData.name} Composite Risk Index`}
            sublabel="HIGH ATTENTION STATE"
          />

          <div className="w-full mt-4 pt-3 border-t border-slate-800 grid grid-cols-2 gap-2 text-center text-xs font-mono">
            <div className="p-2 bg-slate-950 rounded">
              <div className="text-slate-400 text-[10px]">Utilization Rate</div>
              <div className="text-emerald-400 font-bold text-sm">{stateData.utilizationRate}%</div>
            </div>
            <div className="p-2 bg-slate-950 rounded">
              <div className="text-slate-400 text-[10px]">Active Review Cases</div>
              <div className="text-rose-400 font-bold text-sm">{stateData.reviewCases}</div>
            </div>
          </div>
        </div>

        {/* Vector breakdown metrics */}
        <div className="xl:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <KpiCard
            title="COST RISK VECTOR"
            value={`${stateData.vectors.cost}/100`}
            subtitle="78 Cost Outliers Detected"
            subtext="Highest in Coastal Belt"
            badgeText="High Cost Anomaly"
            badgeType="alert"
          />
          <KpiCard
            title="SCHEDULE DELAY VECTOR"
            value={`${stateData.vectors.delay}/100`}
            subtitle="84 Slippage Breach"
            subtext="Avg 88 Days Milestone Lag"
            badgeText="Action Required"
            badgeType="warning"
          />
          <KpiCard
            title="DUPLICATE GEOSPATIAL VECTOR"
            value={`${stateData.vectors.geoDup}/100`}
            subtitle="92% NLP Specification Overlap"
            subtext="3 Critical Proximity Matches"
            badgeText="Critical Overlap"
            badgeType="alert"
          />
          <KpiCard
            title="PAYMENT VELOCITY VECTOR"
            value={`${stateData.vectors.velocity}/100`}
            subtitle="Rapid Tranche Outflow"
            subtext="14-day rapid disbursal spikes"
            badgeText="Velocity Alert"
            badgeType="warning"
          />
          <KpiCard
            title="FUND DISPARITY VECTOR"
            value={`${stateData.vectors.disparity}/100`}
            subtitle="Disbursement vs Physical Gap"
            subtext="40% Exposure Gap"
            badgeText="Review Rec."
            badgeType="primary"
          />
          <KpiCard
            title="STATUTORY COMPLIANCE"
            value={`${stateData.vectors.compliance}/100`}
            subtitle="UC Certificates Pending"
            subtext="108 UCs awaiting signoff"
            badgeText="Audit Pending"
            badgeType="primary"
          />
        </div>
      </div>

      {/* District Spatial Distribution & High Risk Queue */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
        <div className="xl:col-span-6">
          <DistrictMap districtName={`${stateData.name} Districts`} />
        </div>

        <div className="xl:col-span-6 bg-slate-900 border border-slate-800 rounded-xl p-4 shadow-gov-md flex flex-col justify-between">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-3">
            <div>
              <div className="text-xs font-bold font-mono text-slate-300 uppercase">
                STATE PRIORITY QUEUE
              </div>
              <div className="text-sm font-extrabold text-white">
                High-Risk Flagged Works in {stateData.name}
              </div>
            </div>

            <button
              onClick={() => navigate('/district/TN-CHN')}
              className="text-xs font-mono text-blue-400 hover:underline flex items-center gap-1"
            >
              <span>View All District Works</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="space-y-3">
            {PROJECTS_LIST_DATA.map(proj => (
              <div
                key={proj.id}
                onClick={() => navigate(`/project/${proj.projectCode}`)}
                className="p-3 bg-slate-950 border border-slate-800 hover:border-blue-500 rounded-lg cursor-pointer transition-all space-y-2 group"
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-white font-mono text-xs group-hover:text-blue-300">
                    {proj.projectCode} • {proj.title}
                  </span>
                  <RiskBadge level={proj.status} score={proj.overallRisk} size="sm" />
                </div>

                <div className="text-xs text-slate-400 flex items-center justify-between font-mono">
                  <span>Outlay: ₹{proj.sanctionedAmount}L</span>
                  <span>Physical: {proj.physicalProgress}%</span>
                  <span className="text-rose-400 font-bold">{proj.daysOverdue}d Overdue</span>
                </div>

                <div className="flex flex-wrap gap-1 pt-1 border-t border-slate-900">
                  {proj.tags.map((t, idx) => (
                    <span key={idx} className="bg-slate-900 text-amber-300 text-[9px] font-mono px-1.5 py-0.5 rounded border border-slate-800">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

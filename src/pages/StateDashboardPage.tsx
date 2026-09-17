import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { KpiCard } from '../components/common/KpiCard';
import { RiskScoreGauge } from '../components/common/RiskScoreGauge';
import { RiskBadge } from '../components/common/RiskBadge';
import { DistrictMap } from '../components/maps/DistrictMap';
import { STATES_DATA, PROJECTS_LIST_DATA } from '../../server/mockData';
import { Building2, MapPin, ShieldAlert, ArrowRight, ChevronRight, FileText, CheckCircle2, Clock, DollarSign, TrendingUp, AlertTriangle } from 'lucide-react';

export const StateDashboardPage: React.FC = () => {
  const { stateId } = useParams<{ stateId: string }>();
  const navigate = useNavigate();

  const stateData = STATES_DATA.find(s => s.code.toLowerCase() === (stateId || 'tn').toLowerCase()) || STATES_DATA[0];

  return (
    <div className="p-6 lg:p-8 space-y-8 max-w-[1700px] mx-auto font-sans">
      {/* State Selector & Header */}
      <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-gov-sm flex flex-wrap items-center justify-between gap-5">
        <div>
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold font-mono text-blue-700 bg-blue-50 px-2.5 py-1 rounded border border-blue-200 uppercase">
              STATE DASHBOARD
            </span>
            <span className="text-xs text-slate-500 font-mono">Select State:</span>
            <select
              value={stateData.code}
              onChange={(e) => navigate(`/state/${e.target.value}`)}
              className="bg-slate-50 border border-slate-300 font-bold text-slate-900 rounded-lg text-sm px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              <option value="TN">Tamil Nadu (TN)</option>
              <option value="UP">Uttar Pradesh (UP)</option>
              <option value="MH">Maharashtra (MH)</option>
              <option value="WB">West Bengal (WB)</option>
              <option value="KA">Karnataka (KA)</option>
              <option value="BR">Bihar (BR)</option>
            </select>
          </div>
          <h1 className="text-2xl lg:text-3xl font-bold text-slate-900 tracking-tight mt-2">
            {stateData.name} State Overview
          </h1>
          <p className="text-sm text-slate-600 font-normal mt-0.5">
            How is {stateData.name} performing across projects, expenditure, and risk alerts?
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate('/district/TN-CHN')}
            className="px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-lg text-xs font-semibold flex items-center gap-2 shadow-sm transition-all"
          >
            <span>Drilldown to Chennai District</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 7 State KPI Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-7 gap-4">
        <KpiCard
          title="TOTAL PROJECTS"
          value={stateData.totalProjects.toLocaleString()}
          subtitle="Sanctioned Works"
          subtext="38 Districts"
          badgeText="Active"
          icon={Building2}
        />
        <KpiCard
          title="SANCTIONED OUTLAY"
          value={`₹${stateData.outlayCr} Cr`}
          subtitle="Approved Funds"
          subtext="FY 2025-26"
          badgeText="Sanctioned"
          badgeType="primary"
          icon={TrendingUp}
        />
        <KpiCard
          title="EXPENDITURE"
          value={`₹${Math.round(stateData.outlayCr * 0.78)} Cr`}
          subtitle="Disbursed Funds"
          subtext="78% Released"
          badgeText="Released"
          badgeType="success"
          icon={DollarSign}
        />
        <KpiCard
          title="FUND UTILIZATION"
          value={`${stateData.utilizationRate}%`}
          subtitle="Outlay vs Expended"
          subtext="State Median: 75%"
          badgeText="78% Rate"
          badgeType="success"
          icon={CheckCircle2}
        />
        <KpiCard
          title="COMPLETED WORKS"
          value={Math.round(stateData.totalProjects * 0.72).toLocaleString()}
          subtitle="72% Completion Rate"
          subtext="Certified Works"
          badgeText="Completed"
          badgeType="success"
          icon={CheckCircle2}
        />
        <KpiCard
          title="DELAYED WORKS"
          value={Math.round(stateData.totalProjects * 0.18).toLocaleString()}
          subtitle="Milestone Slippage"
          subtext=">60 Days Lag"
          badgeText="Lagging"
          badgeType="warning"
          icon={Clock}
        />
        <KpiCard
          title="HIGH RISK WORKS"
          value={stateData.highRiskCount}
          subtitle="Flagged Signals"
          subtext="Action Recommended"
          badgeText="Critical"
          badgeType="alert"
          icon={ShieldAlert}
        />
      </div>

      {/* State Risk Index Gauge & Vector Breakdown */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
        {/* Risk Gauge Card */}
        <div className="xl:col-span-4 bg-white border border-slate-200 rounded-xl p-5 shadow-gov-sm flex flex-col items-center justify-between">
          <RiskScoreGauge
            score={stateData.riskIndex}
            label={`${stateData.name} State Risk Score`}
            sublabel="ACTIVE OVERSIGHT REQUIRED"
          />

          <div className="w-full mt-4 pt-4 border-t border-slate-200 grid grid-cols-2 gap-3 text-center font-sans text-xs">
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
              <div className="text-slate-500 font-medium">Utilization Rate</div>
              <div className="text-emerald-700 font-bold text-base font-mono">{stateData.utilizationRate}%</div>
            </div>
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
              <div className="text-slate-500 font-medium">Active Review Cases</div>
              <div className="text-red-700 font-bold text-base font-mono">{stateData.reviewCases}</div>
            </div>
          </div>
        </div>

        {/* Vector breakdown metrics */}
        <div className="xl:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <KpiCard
            title="COST ANOMALY VECTOR"
            value={`${stateData.vectors.cost}/100`}
            subtitle="78 Cost Outliers Detected"
            subtext="Highest in Coastal Belt"
            badgeText="High Anomaly"
            badgeType="alert"
          />
          <KpiCard
            title="SCHEDULE DELAY VECTOR"
            value={`${stateData.vectors.delay}/100`}
            subtitle="84 Slippage Breaches"
            subtext="Avg 88 Days Milestone Lag"
            badgeText="Action Required"
            badgeType="warning"
          />
          <KpiCard
            title="DUPLICATE GEOSPATIAL VECTOR"
            value={`${stateData.vectors.geoDup}/100`}
            subtitle="92% NLP Overlap"
            subtext="3 Critical Proximity Matches"
            badgeText="High Overlap"
            badgeType="alert"
          />
          <KpiCard
            title="PAYMENT VELOCITY VECTOR"
            value={`${stateData.vectors.velocity}/100`}
            subtitle="Rapid Tranche Outflow"
            subtext="14-day rapid disbursal spikes"
            badgeText="Velocity Flag"
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

      {/* District Map & Priority Queue */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
        <div className="xl:col-span-6">
          <DistrictMap districtName={`${stateData.name} Districts`} />
        </div>

        <div className="xl:col-span-6 bg-white border border-slate-200 rounded-xl p-5 shadow-gov-sm flex flex-col justify-between">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-4">
            <div>
              <div className="text-xs font-semibold font-mono text-slate-500 uppercase">
                STATE PRIORITY QUEUE
              </div>
              <div className="text-base font-bold text-slate-900">
                Flagged Projects in {stateData.name}
              </div>
            </div>

            <button
              onClick={() => navigate('/district/TN-CHN')}
              className="text-xs font-semibold text-blue-700 hover:underline flex items-center gap-1"
            >
              <span>View All District Works</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-3">
            {PROJECTS_LIST_DATA.map(proj => (
              <div
                key={proj.id}
                onClick={() => navigate(`/project/${proj.projectCode}`)}
                className="p-4 bg-slate-50 border border-slate-200 hover:border-blue-500 rounded-lg cursor-pointer transition-all space-y-2 group"
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900 font-mono text-sm group-hover:text-blue-700">
                    {proj.projectCode} • {proj.title}
                  </span>
                  <RiskBadge level={proj.status} score={proj.overallRisk} size="sm" />
                </div>

                <div className="text-xs text-slate-600 flex items-center justify-between font-mono">
                  <span>Outlay: ₹{proj.sanctionedAmount}L</span>
                  <span>Physical: {proj.physicalProgress}%</span>
                  <span className="text-red-700 font-semibold">{proj.daysOverdue}d Overdue</span>
                </div>

                <div className="flex flex-wrap gap-1 pt-2 border-t border-slate-200">
                  {proj.tags.map((t, idx) => (
                    <span key={idx} className="bg-amber-50 text-amber-800 text-[10px] font-mono px-2 py-0.5 rounded border border-amber-200 font-semibold">
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


import React from 'react';
import { useNavigate } from 'react-router-dom';
import { KpiCard } from '../components/common/KpiCard';
import { RiskVectorScans } from '../components/forensics/RiskVectorScans';
import { IndiaRiskMap } from '../components/maps/IndiaRiskMap';
import { MultiSignalHeatmap } from '../components/forensics/MultiSignalHeatmap';
import { RiskBadge } from '../components/common/RiskBadge';
import { STATES_DATA, PROJECTS_LIST_DATA } from '../../server/mockData';
import { Globe, ShieldAlert, ArrowUpRight, TrendingUp, AlertTriangle, FileText, ChevronRight, Clock, DollarSign, CheckCircle2 } from 'lucide-react';

export const NationalOversightPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6 lg:p-8 space-y-8 max-w-[1700px] mx-auto font-sans">
      {/* Page Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-white border border-slate-200 p-6 rounded-xl shadow-gov-sm">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-slate-900 tracking-tight">
            National Dashboard
          </h1>
          <p className="text-sm text-slate-600 font-normal mt-1 leading-relaxed">
            National overview of MPLADS implementation, fund utilization and project performance.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate('/state/TN')}
            className="px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-lg text-xs font-semibold flex items-center gap-2 shadow-sm transition-all"
          >
            <span>View State Dashboard (Tamil Nadu)</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 6 Executive KPI Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-5">
        <KpiCard
          title="TOTAL PROJECTS"
          value="42,680"
          subtitle="Monitored Works"
          subtext="785 Districts"
          badgeText="Active"
          icon={Globe}
          trend="+5.4%"
          isPositive={true}
        />
        <KpiCard
          title="TOTAL SANCTIONED"
          value="₹8,420 Cr"
          subtitle="Approved Outlay"
          subtext="FY 2025-26"
          badgeText="Sanctioned"
          badgeType="primary"
          icon={TrendingUp}
        />
        <KpiCard
          title="TOTAL EXPENDITURE"
          value="₹6,730 Cr"
          subtitle="Cumulative Expended"
          subtext="80.0% Release Rate"
          badgeText="Released"
          badgeType="success"
          icon={DollarSign}
        />
        <KpiCard
          title="FUND UTILIZATION"
          value="80.0%"
          subtitle="Outlay vs Expended"
          subtext="Treasury Disbursed: 65.8%"
          badgeText="On Track"
          badgeType="success"
          icon={CheckCircle2}
        />
        <KpiCard
          title="HIGH-RISK PROJECTS"
          value="1,284"
          subtitle="3.0% of Total Works"
          subtext="428 Forensic Audits"
          badgeText="Action Required"
          badgeType="alert"
          icon={ShieldAlert}
          trend="+3.0%"
          isPositive={false}
        />
        <KpiCard
          title="DELAYED PROJECTS"
          value="2,500"
          subtitle="Milestone Lagging"
          subtext=">60 Days Slippage"
          badgeText="Review Pending"
          badgeType="warning"
          icon={Clock}
        />
      </div>

      {/* Analytical Vector Scans */}
      <RiskVectorScans />

      {/* Geographic Map & State Risk Table */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
        <div className="xl:col-span-7">
          <IndiaRiskMap onSelectState={(code) => navigate(`/state/${code}`)} />
        </div>

        <div className="xl:col-span-5 bg-white border border-slate-200 rounded-xl p-5 shadow-gov-sm flex flex-col justify-between">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-4">
            <div>
              <div className="text-xs font-semibold font-mono uppercase text-slate-500">
                STATE PERFORMANCE RANKING
              </div>
              <div className="text-base font-bold text-slate-900">
                State Risk Index & Distribution
              </div>
            </div>
            <span className="text-xs font-mono text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200 font-semibold">
              28 States & 8 UTs
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 text-xs font-semibold uppercase text-slate-500 bg-slate-50">
                  <th className="p-3">State</th>
                  <th className="p-3 text-right">Outlay</th>
                  <th className="p-3 text-center">Risk Score</th>
                  <th className="p-3 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-sans">
                {STATES_DATA.map(st => (
                  <tr key={st.id} className="hover:bg-slate-50 transition-colors">
                    <td className="p-3">
                      <div className="font-semibold text-slate-900 text-sm">{st.name}</div>
                      <div className="text-xs text-slate-500">{st.totalProjects.toLocaleString()} Works • {st.highRiskCount} Flagged</div>
                    </td>
                    <td className="p-3 text-right font-mono text-slate-700 font-medium">₹{st.outlayCr} Cr</td>
                    <td className="p-3 text-center">
                      <span className={`px-2.5 py-1 rounded-md font-bold text-xs font-mono border ${st.riskIndex >= 70 ? 'bg-red-50 text-red-700 border-red-200' : 'bg-amber-50 text-amber-700 border-amber-200'}`}>
                        {st.riskIndex} / 100
                      </span>
                    </td>
                    <td className="p-3 text-right">
                      <button
                        onClick={() => navigate(`/state/${st.code}`)}
                        aria-label={`Inspect ${st.name} State`}
                        className="p-1.5 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-md border border-blue-200 transition-colors"
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Multi-Signal Heatmap & Trajectory Chart */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
        <div className="xl:col-span-7">
          <MultiSignalHeatmap />
        </div>

        <div className="xl:col-span-5 bg-white border border-slate-200 rounded-xl p-5 shadow-gov-sm flex flex-col justify-between">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-4">
            <div>
              <div className="text-xs font-semibold font-mono text-slate-500 uppercase">
                NATIONAL FUND OUTFLOW TRAJECTORY
              </div>
              <div className="text-base font-bold text-slate-900">
                State-wise Fund Utilization Progress
              </div>
            </div>
            <span className="text-xs font-mono text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200 font-semibold">
              ₹1,120 Cr Pending Verification
            </span>
          </div>

          <div className="space-y-4">
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg space-y-3 font-sans text-xs">
              <div className="flex justify-between text-slate-700 font-medium">
                <span>Sanctioned Target (FY 2025-26):</span>
                <span className="text-slate-900 font-bold font-mono">₹8,420 Cr</span>
              </div>
              <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden">
                <div className="bg-blue-700 h-full w-[80%]" />
              </div>
              <div className="flex justify-between text-slate-500 text-xs font-mono">
                <span>Verified Field Exp: ₹5,540 Cr</span>
                <span>80.0% Released</span>
              </div>
            </div>

            <div className="p-4 bg-amber-50/80 border border-amber-200 rounded-lg text-xs text-amber-800 font-sans leading-relaxed">
              <div className="font-bold text-amber-900 uppercase text-[11px] font-mono mb-1">Outflow Velocity Notice:</div>
              <div>Discrepancy observed between Treasury releases and certified physical milestone entries across 4 state clusters.</div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent High-Priority Alerts / Critical Works Table */}
      <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-gov-sm">
        <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-4">
          <div>
            <div className="text-xs font-bold font-mono text-red-700 uppercase tracking-wider flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4" />
              <span>AUTOMATED ALERTS QUEUE</span>
            </div>
            <div className="text-lg font-bold text-slate-900 mt-0.5">
              Recent High-Priority Risk Alerts & Flagged Works
            </div>
          </div>
          <span className="text-xs font-mono text-slate-600 bg-slate-100 px-3 py-1 rounded-md border border-slate-200 font-semibold">
            Showing 4 Critical Incidents
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 text-xs font-semibold uppercase text-slate-500 bg-slate-50 font-mono">
                <th className="p-3.5">Project Code & Description</th>
                <th className="p-3.5">District / State</th>
                <th className="p-3.5 text-right">Sanctioned Outlay</th>
                <th className="p-3.5 text-center">Physical Progress</th>
                <th className="p-3.5 text-center">Risk Score</th>
                <th className="p-3.5">Key Anomaly Signal</th>
                <th className="p-3.5 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-sans">
              {PROJECTS_LIST_DATA.map(proj => (
                <tr key={proj.id} className="hover:bg-slate-50 transition-colors">
                  <td className="p-3.5">
                    <div
                      onClick={() => navigate(`/project/${proj.projectCode}`)}
                      className="font-bold text-blue-700 text-sm hover:underline cursor-pointer flex items-center gap-1.5 font-mono"
                    >
                      <span>{proj.projectCode}</span>
                      <ArrowUpRight className="w-4 h-4 text-blue-600" />
                    </div>
                    <div className="text-xs text-slate-600 line-clamp-1 mt-0.5">{proj.title}</div>
                  </td>
                  <td className="p-3.5">
                    <div className="text-slate-900 font-medium">{proj.district}</div>
                    <div className="text-xs text-slate-500">{proj.state}</div>
                  </td>
                  <td className="p-3.5 text-right font-bold font-mono text-emerald-700">₹{proj.sanctionedAmount}L</td>
                  <td className="p-3.5 text-center">
                    <div className="text-sm font-bold text-slate-800">{proj.physicalProgress}%</div>
                    <div className="text-xs text-red-600 font-mono">Target: {proj.expectedProgress}%</div>
                  </td>
                  <td className="p-3.5 text-center">
                    <RiskBadge level={proj.status} score={proj.overallRisk} size="sm" />
                  </td>
                  <td className="p-3.5">
                    <div className="flex flex-wrap gap-1">
                      {proj.tags.slice(0, 2).map((t, idx) => (
                        <span key={idx} className="bg-amber-50 text-amber-800 text-[10px] font-mono px-2 py-0.5 rounded border border-amber-200 font-semibold">
                          {t}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="p-3.5 text-center">
                    <button
                      onClick={() => navigate(`/project/${proj.projectCode}`)}
                      className="px-3.5 py-1.5 bg-blue-700 hover:bg-blue-800 text-white rounded-lg text-xs font-semibold shadow-sm transition-all"
                    >
                      Inspect Audit Dossier
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};


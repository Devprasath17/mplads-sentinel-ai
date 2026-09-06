import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { KpiCard } from '../components/common/KpiCard';
import { RiskVectorScans } from '../components/forensics/RiskVectorScans';
import { IndiaRiskMap } from '../components/maps/IndiaRiskMap';
import { MultiSignalHeatmap } from '../components/forensics/MultiSignalHeatmap';
import { RiskBadge } from '../components/common/RiskBadge';
import { NATIONAL_OVERVIEW_DATA, STATES_DATA, PROJECTS_LIST_DATA, ALERTS_QUEUE_DATA } from '../../server/mockData';
import { Globe, ShieldAlert, ArrowUpRight, TrendingUp, AlertTriangle, FileText, ChevronRight } from 'lucide-react';

export const NationalOversightPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="p-4 lg:p-6 space-y-6 max-w-[1700px] mx-auto">
      {/* Top Banner Sub-header */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-slate-900 border border-slate-800 p-4 rounded-xl shadow-gov-sm">
        <div>
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest flex items-center gap-1.5">
            <Globe className="w-4 h-4" />
            <span>EXECUTIVE COCKPIT • NATIONAL OVERSIGHT</span>
          </div>
          <h1 className="text-xl font-extrabold text-white tracking-tight font-mono mt-0.5">
            National MPLADS Implementation & Algorithmic Risk Monitoring
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate('/state/TN')}
            className="px-3.5 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-mono font-bold flex items-center gap-2 shadow-sm transition-all"
          >
            <span>Drilldown to Tamil Nadu (TN)</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* KPI Header Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        <KpiCard
          title="TOTAL MONITORED PROJECTS"
          value="42,680"
          subtitle="Across 785 Administrative Districts"
          subtext="+5.4% YoY Growth"
          badgeText="Active"
          icon={Globe}
          trend="+5.4%"
          isPositive={true}
        />
        <KpiCard
          title="SANCTIONED OUTLAY VS EXPENDED"
          value="₹8,420 Cr"
          subtitle="Cumulative Released: ₹6,730 Cr (80%)"
          subtext="Treasury Disbursed: ₹5,540 Cr (65.8%)"
          badgeText="80% Released"
          badgeType="success"
          icon={TrendingUp}
        />
        <KpiCard
          title="UTILIZATION VELOCITY"
          value="31,420"
          subtitle="Completed Works (73.6% Rate)"
          subtext="8,760 Active • 2,500 Lagging Works"
          badgeText="73.6% Rate"
          badgeType="primary"
          icon={FileText}
        />
        <KpiCard
          title="PRIORITIZED RISK SIGNALS"
          value="1,284"
          subtitle="High / Critical (3.0% of total)"
          subtext="428 requiring forensic audit review"
          badgeText="Action Required"
          badgeType="alert"
          icon={ShieldAlert}
          trend="+3.0%"
          isPositive={false}
        />
      </div>

      {/* Forensic Risk Vector Scans */}
      <RiskVectorScans />

      {/* India Map & Federated State Ranking Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
        <div className="xl:col-span-7">
          <IndiaRiskMap onSelectState={(code) => navigate(`/state/${code}`)} />
        </div>

        <div className="xl:col-span-5 bg-slate-900 border border-slate-800 rounded-xl p-4 shadow-gov-md flex flex-col justify-between">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-3">
            <div>
              <div className="text-xs font-bold font-mono uppercase text-slate-300">
                FEDERATED LEAGUE TABLE
              </div>
              <div className="text-sm font-extrabold text-white">
                State Risk Ranking & Performance
              </div>
            </div>
            <span className="text-[10px] font-mono text-slate-400 bg-slate-800 px-2 py-1 rounded">
              Ranked 1-28 States
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left">
              <thead>
                <tr className="border-b border-slate-800 text-[10px] font-mono uppercase text-slate-400">
                  <th className="p-2">State</th>
                  <th className="p-2 text-right">Outlay</th>
                  <th className="p-2 text-center">Risk Index</th>
                  <th className="p-2 text-right">Drilldown</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80 font-mono">
                {STATES_DATA.map(st => (
                  <tr key={st.id} className="hover:bg-slate-850 transition-colors">
                    <td className="p-2">
                      <div className="font-bold text-white">{st.name}</div>
                      <div className="text-[10px] text-slate-400">{st.totalProjects.toLocaleString()} Works • {st.highRiskCount} Flagged</div>
                    </td>
                    <td className="p-2 text-right text-slate-200">₹{st.outlayCr} Cr</td>
                    <td className="p-2 text-center">
                      <span className={`px-2 py-0.5 rounded font-extrabold text-xs ${st.riskIndex >= 70 ? 'bg-rose-950 text-rose-300 border border-rose-800' : 'bg-amber-950 text-amber-300 border border-amber-800'}`}>
                        {st.riskIndex}
                      </span>
                    </td>
                    <td className="p-2 text-right">
                      <button
                        onClick={() => navigate(`/state/${st.code}`)}
                        aria-label={`Inspect ${st.name} State`}
                        className="p-1.5 bg-blue-900/60 hover:bg-blue-600 text-blue-300 hover:text-white rounded border border-blue-500/40 transition-all"
                      >
                        <ArrowUpRight className="w-3.5 h-3.5" />
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

        <div className="xl:col-span-5 bg-slate-900 border border-slate-800 rounded-xl p-4 shadow-gov-md flex flex-col justify-between">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-3">
            <div>
              <div className="text-xs font-bold font-mono text-slate-300 uppercase">
                TEMPORAL TRAJECTORY
              </div>
              <div className="text-sm font-extrabold text-white">
                National Fund Outflow Trajectory
              </div>
            </div>
            <span className="text-[10px] font-mono text-rose-400 bg-rose-950 px-2 py-0.5 rounded border border-rose-800 font-bold">
              ₹1,120 Cr Under Verification
            </span>
          </div>

          <div className="space-y-4">
            <div className="p-4 bg-slate-950 border border-slate-800 rounded-lg space-y-2 font-mono text-xs">
              <div className="flex justify-between text-slate-300">
                <span>Sanctioned Target (FY26):</span>
                <span className="text-white font-bold">₹8,420 Cr</span>
              </div>
              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                <div className="bg-blue-500 h-full w-[80%]" />
              </div>
              <div className="flex justify-between text-slate-400 text-[10px]">
                <span>Verified Field Exp: ₹5,540 Cr</span>
                <span>80% Target Rate</span>
              </div>
            </div>

            <div className="p-3 bg-amber-950/40 border border-amber-500/30 rounded-lg text-xs text-amber-200 font-mono">
              <div className="font-bold text-amber-400 uppercase text-[10px]">Outflow Velocity Acceleration:</div>
              <div>Discrepancy observed between Treasury releases and certified physical milestone entries across 4 state clusters.</div>
            </div>
          </div>
        </div>
      </div>

      {/* Critical Projects Table */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 shadow-gov-md">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
          <div>
            <div className="text-xs font-bold font-mono text-rose-400 uppercase tracking-widest flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4" />
              <span>AUTOMATED TRIAGE</span>
            </div>
            <div className="text-base font-extrabold text-white">
              Critical Projects Requiring Executive Attention
            </div>
          </div>
          <span className="text-xs font-mono text-slate-400 bg-slate-800 px-3 py-1 rounded">
            Showing 4 Flagged Incidents
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-800 text-[10px] font-mono uppercase text-slate-400">
                <th className="p-3">Project Code & Description</th>
                <th className="p-3">District / State</th>
                <th className="p-3 text-right">Outlay</th>
                <th className="p-3 text-center">Physical Progress</th>
                <th className="p-3 text-center">Risk Composite</th>
                <th className="p-3">Triggered Dimension</th>
                <th className="p-3 text-center">Operational Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 font-mono">
              {PROJECTS_LIST_DATA.map(proj => (
                <tr key={proj.id} className="hover:bg-slate-850 transition-colors">
                  <td className="p-3">
                    <div
                      onClick={() => navigate(`/project/${proj.projectCode}`)}
                      className="font-bold text-white text-xs hover:text-blue-400 cursor-pointer flex items-center gap-1.5"
                    >
                      <span>{proj.projectCode}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-blue-400" />
                    </div>
                    <div className="text-[11px] text-slate-400 line-clamp-1">{proj.title}</div>
                  </td>
                  <td className="p-3">
                    <div className="text-slate-200">{proj.district}</div>
                    <div className="text-[10px] text-slate-400">{proj.state}</div>
                  </td>
                  <td className="p-3 text-right font-bold text-emerald-400">₹{proj.sanctionedAmount}L</td>
                  <td className="p-3 text-center">
                    <div className="text-xs font-bold text-slate-200">{proj.physicalProgress}%</div>
                    <div className="text-[10px] text-rose-400">Target: {proj.expectedProgress}%</div>
                  </td>
                  <td className="p-3 text-center">
                    <RiskBadge level={proj.status} score={proj.overallRisk} size="sm" />
                  </td>
                  <td className="p-3">
                    <div className="flex flex-wrap gap-1">
                      {proj.tags.slice(0, 2).map((t, idx) => (
                        <span key={idx} className="bg-slate-800 text-amber-300 text-[9px] px-1.5 py-0.5 rounded border border-slate-700">
                          {t}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="p-3 text-center">
                    <button
                      onClick={() => navigate(`/project/${proj.projectCode}`)}
                      className="px-3 py-1 bg-rose-600 hover:bg-rose-500 text-white rounded text-xs font-bold shadow-sm transition-all"
                    >
                      Inspect Dossier
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

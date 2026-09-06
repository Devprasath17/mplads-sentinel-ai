import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FUND_FLOW_METRICS, FEATURED_PROJECT_1042 } from '../../server/mockData';
import { ReviewCaseModal } from '../components/cases/ReviewCaseModal';
import {
  FileCheck,
  TrendingUp,
  AlertTriangle,
  DollarSign,
  Building2,
  Download,
  Filter,
  Search,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  Camera,
  RefreshCw
} from 'lucide-react';

export const FundFlowPage: React.FC = () => {
  const navigate = useNavigate();
  const [desyncOnly, setDesyncOnly] = useState(false);
  const [isCaseModalOpen, setIsCaseModalOpen] = useState(false);

  const metrics = FUND_FLOW_METRICS;

  return (
    <div className="p-4 lg:p-6 space-y-6 max-w-[1700px] mx-auto font-sans">
      {/* Header Bar */}
      <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl shadow-gov-md flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest flex items-center gap-1.5">
            <FileCheck className="w-4 h-4 text-blue-400" />
            <span>MONITORING & WORKS • FUND FLOW &amp; DISBURSAL</span>
          </div>
          <h1 className="text-xl font-extrabold text-white tracking-tight font-mono mt-0.5">
            Fund Flow &amp; Financial Intelligence — Algorithmic Desync Fingerprints
          </h1>
        </div>

        <div className="flex items-center gap-3 font-mono text-xs">
          <span className="px-2.5 py-1 bg-emerald-950/80 border border-emerald-800 text-emerald-400 font-bold rounded">
            PFMS Central Treasury Sync: 99.4%
          </span>
          <button
            onClick={() => window.print()}
            className="px-3.5 py-1.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded flex items-center gap-1.5 shadow-sm"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download SNA Ledger (XLSX)</span>
          </button>
        </div>
      </div>

      {/* Filter Controls Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-900 border border-slate-800 p-3 rounded-xl font-mono text-xs">
        <div className="flex flex-wrap items-center gap-3">
          <span className="bg-blue-950 text-blue-300 border border-blue-800 px-2.5 py-1 rounded font-bold">
            FY: 2025-2026
          </span>
          <span className="bg-slate-950 text-slate-300 border border-slate-800 px-2.5 py-1 rounded">
            State: Tamil Nadu (TN-33)
          </span>
          <span className="bg-slate-950 text-slate-300 border border-slate-800 px-2.5 py-1 rounded">
            District: Chennai Focus (Metro)
          </span>

          <label className="flex items-center gap-2 cursor-pointer text-slate-300 bg-slate-950 px-2.5 py-1 rounded border border-slate-800">
            <input
              type="checkbox"
              checked={desyncOnly}
              onChange={(e) => setDesyncOnly(e.target.checked)}
              className="accent-rose-500"
            />
            <span className={desyncOnly ? 'text-rose-400 font-bold' : ''}>Financial Desync Only</span>
          </label>
        </div>

        <button
          onClick={() => {}}
          className="px-3 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold rounded flex items-center gap-1.5"
        >
          <RefreshCw className="w-3.5 h-3.5 text-blue-400" />
          <span>Run Fiscal Sync Audit</span>
        </button>
      </div>

      {/* Top Metric Cards Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-8 gap-3 font-mono">
        <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl space-y-1">
          <div className="text-slate-400 text-[10px]">MoSPI RELEASED</div>
          <div className="text-xl font-extrabold text-white">₹8,420 Cr</div>
          <div className="text-[9px] text-emerald-400">100% Allocation Tranche</div>
        </div>

        <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl space-y-1">
          <div className="text-slate-400 text-[10px]">SANCTIONED ALLOCATION</div>
          <div className="text-xl font-extrabold text-blue-400">₹8,120 Cr</div>
          <div className="text-[9px] text-slate-400">96.4% Disbursed</div>
        </div>

        <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl space-y-1">
          <div className="text-slate-400 text-[10px]">REALIZED EXPENDITURE</div>
          <div className="text-xl font-extrabold text-emerald-400">₹6,780 Cr</div>
          <div className="text-[9px] text-slate-400">83.5% vs Last Month</div>
        </div>

        <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl space-y-1">
          <div className="text-slate-400 text-[10px]">IN-POST TREASURY</div>
          <div className="text-xl font-extrabold text-white">₹1,640 Cr</div>
          <div className="text-[9px] text-slate-400">SNA Interest: ₹42.2 Cr</div>
        </div>

        <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl space-y-1">
          <div className="text-slate-400 text-[10px]">SCHEME UTILIZATION</div>
          <div className="text-xl font-extrabold text-emerald-400">80.5%</div>
          <div className="text-[9px] text-slate-400">Target: 75.0%</div>
        </div>

        <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl space-y-1">
          <div className="text-slate-400 text-[10px]">EXPENDITURE OUTLIERS</div>
          <div className="text-xl font-extrabold text-rose-400">684</div>
          <div className="text-[9px] text-rose-400 font-bold">18 Critical Thresholds</div>
        </div>

        <div className="p-3 bg-rose-950/50 border border-rose-500/40 rounded-xl space-y-1">
          <div className="text-rose-300 text-[10px]">FINANCIAL-PHYSICAL DESYNC</div>
          <div className="text-xl font-extrabold text-rose-300">412</div>
          <div className="text-[9px] text-rose-300">Advance vs Physical Gap</div>
        </div>

        <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl space-y-1">
          <div className="text-slate-400 text-[10px]">VELOCITY BURSTS</div>
          <div className="text-xl font-extrabold text-amber-400">316</div>
          <div className="text-[9px] text-amber-300">Multi-tranche rapid bursts</div>
        </div>
      </div>

      {/* SNA Ledger Liquidity Pipeline Flow */}
      <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl space-y-3 font-mono text-xs shadow-gov-md">
        <div className="flex justify-between items-center border-b border-slate-800 pb-2">
          <div>
            <div className="font-extrabold text-white text-sm">
              SNA LEDGER LIQUIDITY PIPELINE
            </div>
            <div className="text-[11px] text-slate-400">
              End-to-end statutory fund flow breakdown from Consolidated Fund of India down to audited physical asset delivery
            </div>
          </div>
          <span className="px-2 py-0.5 rounded bg-blue-950 text-blue-300 border border-blue-800 text-[10px] font-bold">
            SNA Protocol v2.4
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-3">
          {metrics.liquidityPipeline.map((step, idx) => (
            <div
              key={idx}
              className={`p-3 rounded-lg border flex flex-col justify-between space-y-2 ${
                step.isRisk
                  ? 'bg-rose-950/60 border-rose-500/60 text-rose-200'
                  : 'bg-slate-950 border-slate-800 text-slate-300'
              }`}
            >
              <div className="text-[10px] font-bold text-slate-400 uppercase">{step.stage}</div>
              <div>
                <div className={`text-lg font-extrabold ${step.isRisk ? 'text-rose-400' : 'text-white'}`}>
                  ₹{step.amountCr} Cr
                </div>
                <div className="text-[10px] text-slate-400">{step.label}</div>
              </div>
              <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                <div
                  className={`h-full ${step.isRisk ? 'bg-rose-500' : 'bg-blue-500'}`}
                  style={{ width: `${step.percent}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="pt-2 border-t border-slate-800 flex justify-between text-[10px] text-slate-400">
          <span>Verified Physical Release: 58.1%</span>
          <span className="text-rose-400 font-bold">High-Risk Disbursal-to-Physical Gap: ₹2,490 Cr</span>
          <span>Unspent State Treasury Buffer: 29.5%</span>
        </div>
      </div>

      {/* Concordance Matrix & Velocity Bursts Charts */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 font-mono text-xs">
        {/* Scatter Concordance Chart */}
        <div className="xl:col-span-6 bg-slate-900 border border-slate-800 rounded-xl p-4 shadow-gov-md space-y-3">
          <div className="flex justify-between items-center border-b border-slate-800 pb-2">
            <div>
              <div className="font-bold text-white uppercase text-xs">
                Financial vs Physical Concordance Matrix
              </div>
              <div className="text-[10px] text-slate-400">
                Automated detection of billing advancement against ground structural completion
              </div>
            </div>
            <span className="text-[10px] text-blue-400">n = 3,482 Works</span>
          </div>

          <div className="p-4 bg-slate-950 border border-slate-800 rounded-lg space-y-3 relative h-48 flex flex-col justify-between overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] opacity-25" />

            <div className="relative z-10 flex justify-between text-[10px] text-slate-400">
              <span>Financial Execution: 100%</span>
              <span className="text-rose-400 font-bold">CRITICAL DESYNC ZONE (Expenditure &gt; Physical +30%)</span>
            </div>

            {/* Scatter dots graphic simulation */}
            <div className="relative z-10 flex-1 flex items-center justify-around">
              <div className="p-2 bg-rose-950 border border-rose-500 rounded text-rose-300 text-[10px]">
                <strong className="block text-white font-bold">PROJECT MPL-2026-1042 (87/100)</strong>
                North Channel Drainage &amp; Culvert Re-align<br />
                Disbursed: 78% • Physical: 38%<br />
                <span className="text-rose-400 font-bold">₹19.4L advance exposure buffer</span>
              </div>
            </div>

            <div className="relative z-10 flex justify-between items-center text-[10px]">
              <span className="text-slate-400">Physical Execution: 0% → 100%</span>
              <button
                onClick={() => navigate('/project/MPL-2026-1042')}
                className="text-blue-400 hover:underline font-bold"
              >
                Inspect Matrix Filter
              </button>
            </div>
          </div>
        </div>

        {/* Fund Utilization Velocity & Outflow Bursts */}
        <div className="xl:col-span-6 bg-slate-900 border border-slate-800 rounded-xl p-4 shadow-gov-md space-y-3">
          <div className="flex justify-between items-center border-b border-slate-800 pb-2">
            <div>
              <div className="font-bold text-white uppercase text-xs">
                Fund Utilization Velocity &amp; Outflow Bursts
              </div>
              <div className="text-[10px] text-slate-400">
                Financial cadence monitoring for end-of-year synthetic surges and off-cycle rounds
              </div>
            </div>
            <span className="px-2 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-800 text-[10px] font-bold">
              Surge Flagged
            </span>
          </div>

          <div className="p-3 bg-rose-950/40 border border-rose-500/40 rounded text-rose-200 text-[11px] space-y-1">
            <div className="font-bold uppercase text-rose-400 flex items-center gap-1">
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>ABNORMAL 14-DAY VELOCITY BURST DETECTED:</span>
            </div>
            <div>
              Chennai DRDA account: ₹18.4L cleared in 2 consecutive tranches within 14 days to a single vendor without corresponding signed Measurement Book (MB) uploads.
            </div>
          </div>

          <div className="p-3 bg-slate-950 border border-slate-800 rounded text-[10px] text-slate-400 flex justify-between">
            <span>March spike represents 27.5% of annual allocation, indicating fiscal dump behavior.</span>
            <span>Model: Non-Linear Exponential Growth</span>
          </div>
        </div>
      </div>

      {/* Administrative Fiscal Performance Ledger */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 shadow-gov-md space-y-4 font-mono text-xs">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div>
            <div className="text-xs font-bold text-white uppercase">
              Administrative Fiscal Performance Ledger
            </div>
            <div className="text-[11px] text-slate-400">
              Real-time breakdown of releases, sanctions, burn velocities, and desync count per administrative division
            </div>
          </div>

          <button
            onClick={() => navigate('/state/TN')}
            className="px-3 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold rounded"
          >
            Filter District / ULB...
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-800 text-[10px] uppercase text-slate-400">
                <th className="p-3">Administrative Unit</th>
                <th className="p-3 text-right">Released</th>
                <th className="p-3 text-right">Sanctioned</th>
                <th className="p-3 text-right">Expended</th>
                <th className="p-3 text-center">Fund Burn %</th>
                <th className="p-3 text-center">Desync Projects</th>
                <th className="p-3 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {metrics.administrativeLedger.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-850 transition-colors">
                  <td className="p-3 font-bold text-white">
                    {row.name}
                    <div className="text-[10px] text-slate-400 font-normal">{row.status}</div>
                  </td>
                  <td className="p-3 text-right text-slate-300">₹{row.releasedCr} Cr</td>
                  <td className="p-3 text-right text-slate-300">₹{row.sanctionedCr} Cr</td>
                  <td className="p-3 text-right text-emerald-400 font-bold">₹{row.expendedCr} Cr</td>
                  <td className="p-3 text-center font-bold text-blue-400">{row.burnRate}%</td>
                  <td className="p-3 text-center">
                    <span className="px-2 py-0.5 bg-rose-950 text-rose-300 border border-rose-800 rounded font-bold text-[10px]">
                      {row.flaggedWorks} Works
                    </span>
                  </td>
                  <td className="p-3 text-right">
                    <button
                      onClick={() => navigate(`/district/${row.code}`)}
                      className="px-3 py-1 bg-rose-600 hover:bg-rose-500 text-white font-bold rounded text-xs"
                    >
                      Investigate
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Unusual Financial Anomaly Alerts Queue */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 shadow-gov-md space-y-4 font-mono text-xs">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="text-xs font-bold text-rose-400 uppercase tracking-wider flex items-center gap-1.5">
            <AlertTriangle className="w-4 h-4" />
            <span>Unusual Financial Anomaly Alerts Queue</span>
          </div>
          <button onClick={() => navigate('/alerts')} className="text-blue-400 hover:underline text-xs">
            View All 316 Alerts &gt;
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-slate-950 border border-rose-500/60 rounded-lg space-y-2">
            <div className="flex justify-between items-center text-[10px]">
              <span className="bg-rose-950 text-rose-300 border border-rose-800 px-2 py-0.5 rounded font-bold">CRITICAL DESYNC</span>
              <span className="text-slate-400">Triggered 14m ago</span>
            </div>

            <div className="font-bold text-white text-sm">
              Project MPL-2026-1042
            </div>
            <div className="text-[11px] text-slate-400">
              North Channel Drainage Augmentation &amp; Culvert Reconstruction
            </div>

            <div className="space-y-1 pt-2 border-t border-slate-800 text-[11px]">
              <div className="flex justify-between">
                <span>Expended:</span>
                <strong className="text-white">₹37.8 Lakhs (78%)</strong>
              </div>
              <div className="flex justify-between">
                <span>Verified Physical:</span>
                <strong className="text-rose-400">38% Complete</strong>
              </div>
              <div className="flex justify-between">
                <span>Advanced Gap:</span>
                <strong className="text-rose-400">₹19.4 Lakhs Excess</strong>
              </div>
            </div>

            <button
              onClick={() => setIsCaseModalOpen(true)}
              className="w-full py-1.5 bg-rose-600 hover:bg-rose-500 text-white font-bold rounded mt-2 shadow"
            >
              Freeze Disbursement
            </button>
          </div>

          <div className="p-4 bg-slate-950 border border-amber-500/60 rounded-lg space-y-2">
            <div className="flex justify-between items-center text-[10px]">
              <span className="bg-amber-950 text-amber-300 border border-amber-800 px-2 py-0.5 rounded font-bold">VELOCITY BURST</span>
              <span className="text-slate-400">Triggered 33m ago</span>
            </div>

            <div className="font-bold text-white text-sm">
              Rapid Sequential Disbursal
            </div>
            <div className="text-[11px] text-slate-400">
              Ward 142 Community Hall Modernization &amp; Solar Rooftop
            </div>

            <div className="space-y-1 pt-2 border-t border-slate-800 text-[11px]">
              <div className="flex justify-between">
                <span>Burst Cadence:</span>
                <strong className="text-white">2 Payments in 96 Hours</strong>
              </div>
              <div className="flex justify-between">
                <span>Cumulative Sum:</span>
                <strong className="text-amber-400">₹18.40 Lakhs</strong>
              </div>
              <div className="flex justify-between">
                <span>MB Sign-off:</span>
                <strong className="text-rose-400">Missing / Uncertified</strong>
              </div>
            </div>

            <button
              onClick={() => navigate('/project/MPL-2026-1042')}
              className="w-full py-1.5 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded mt-2"
            >
              Audit Tranche
            </button>
          </div>

          <div className="p-4 bg-slate-950 border border-slate-800 rounded-lg space-y-2">
            <div className="flex justify-between items-center text-[10px]">
              <span className="bg-blue-950 text-blue-300 border border-blue-800 px-2 py-0.5 rounded font-bold">STATUTORY DELINQUENCY</span>
              <span className="text-slate-400">Triggered 1h ago</span>
            </div>

            <div className="font-bold text-white text-sm">
              UC Pending &gt; 180 Days
            </div>
            <div className="text-[11px] text-slate-400">
              54 Rural Connectivity &amp; Feeder Road Works in Peri-Urban Belt
            </div>

            <div className="space-y-1 pt-2 border-t border-slate-800 text-[11px]">
              <div className="flex justify-between">
                <span>Affected Projects:</span>
                <strong className="text-white">14 Schemes</strong>
              </div>
              <div className="flex justify-between">
                <span>Locked Capital:</span>
                <strong className="text-amber-400">₹122.4 Lakhs</strong>
              </div>
              <div className="flex justify-between">
                <span>Non-Submission:</span>
                <strong className="text-rose-400">194 Days Overdue</strong>
              </div>
            </div>

            <button
              onClick={() => navigate('/cases')}
              className="w-full py-1.5 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded mt-2"
            >
              Issue Notice
            </button>
          </div>
        </div>
      </div>

      <ReviewCaseModal
        isOpen={isCaseModalOpen}
        onClose={() => setIsCaseModalOpen(false)}
        projectCode="MPL-2026-1042"
      />
    </div>
  );
};

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
      <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-sm flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="text-xs font-mono font-bold text-blue-700 uppercase tracking-widest flex items-center gap-1.5">
            <FileCheck className="w-4 h-4 text-blue-700" />
            <span>MONITORING & WORKS • FUND FLOW &amp; DISBURSAL</span>
          </div>
          <h1 className="text-2xl font-extrabold text-[#0F172A] tracking-tight font-sans mt-0.5">
            Fund Flow &amp; Financial Intelligence — Algorithmic Desync Fingerprints
          </h1>
        </div>

        <div className="flex items-center gap-3 font-mono text-xs">
          <span className="px-3 py-1.5 bg-emerald-50 border border-emerald-200 text-emerald-800 font-bold rounded-lg">
            PFMS Central Treasury Sync: 99.4%
          </span>
          <button
            onClick={() => window.print()}
            className="px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white font-bold rounded-lg flex items-center gap-1.5 shadow-sm transition-colors"
          >
            <Download className="w-4 h-4" />
            <span>Download SNA Ledger (XLSX)</span>
          </button>
        </div>
      </div>

      {/* Filter Controls Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-white border border-slate-200 p-3.5 rounded-xl font-mono text-xs shadow-sm">
        <div className="flex flex-wrap items-center gap-3">
          <span className="bg-blue-50 text-blue-800 border border-blue-200 px-3 py-1 rounded-md font-bold">
            FY: 2025-2026
          </span>
          <span className="bg-slate-50 text-slate-700 border border-slate-200 px-3 py-1 rounded-md font-medium">
            State: Tamil Nadu (TN-33)
          </span>
          <span className="bg-slate-50 text-slate-700 border border-slate-200 px-3 py-1 rounded-md font-medium">
            District: Chennai Focus (Metro)
          </span>

          <label className="flex items-center gap-2 cursor-pointer text-slate-700 bg-slate-50 px-3 py-1 rounded-md border border-slate-200">
            <input
              type="checkbox"
              checked={desyncOnly}
              onChange={(e) => setDesyncOnly(e.target.checked)}
              className="accent-red-600"
            />
            <span className={desyncOnly ? 'text-red-700 font-bold' : ''}>Financial Desync Only</span>
          </label>
        </div>

        <button
          onClick={() => {}}
          className="px-3.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-md flex items-center gap-1.5 transition-colors"
        >
          <RefreshCw className="w-3.5 h-3.5 text-blue-700" />
          <span>Run Fiscal Sync Audit</span>
        </button>
      </div>

      {/* Top Metric Cards Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-8 gap-3 font-mono">
        <div className="p-3.5 bg-white border border-slate-200 rounded-xl space-y-1 shadow-sm">
          <div className="text-slate-500 text-[10px] font-bold">MoSPI RELEASED</div>
          <div className="text-xl font-extrabold text-[#0F172A]">₹8,420 Cr</div>
          <div className="text-[9px] text-emerald-700 font-bold">100% Allocation Tranche</div>
        </div>

        <div className="p-3.5 bg-white border border-slate-200 rounded-xl space-y-1 shadow-sm">
          <div className="text-slate-500 text-[10px] font-bold">SANCTIONED ALLOCATION</div>
          <div className="text-xl font-extrabold text-blue-700">₹8,120 Cr</div>
          <div className="text-[9px] text-slate-500">96.4% Disbursed</div>
        </div>

        <div className="p-3.5 bg-white border border-slate-200 rounded-xl space-y-1 shadow-sm">
          <div className="text-slate-500 text-[10px] font-bold">REALIZED EXPENDITURE</div>
          <div className="text-xl font-extrabold text-emerald-700">₹6,780 Cr</div>
          <div className="text-[9px] text-slate-500">83.5% vs Last Month</div>
        </div>

        <div className="p-3.5 bg-white border border-slate-200 rounded-xl space-y-1 shadow-sm">
          <div className="text-slate-500 text-[10px] font-bold">IN-POST TREASURY</div>
          <div className="text-xl font-extrabold text-[#0F172A]">₹1,640 Cr</div>
          <div className="text-[9px] text-slate-500">SNA Interest: ₹42.2 Cr</div>
        </div>

        <div className="p-3.5 bg-white border border-slate-200 rounded-xl space-y-1 shadow-sm">
          <div className="text-slate-500 text-[10px] font-bold">SCHEME UTILIZATION</div>
          <div className="text-xl font-extrabold text-emerald-700">80.5%</div>
          <div className="text-[9px] text-slate-500">Target: 75.0%</div>
        </div>

        <div className="p-3.5 bg-white border border-slate-200 rounded-xl space-y-1 shadow-sm">
          <div className="text-slate-500 text-[10px] font-bold">EXPENDITURE OUTLIERS</div>
          <div className="text-xl font-extrabold text-red-700">684</div>
          <div className="text-[9px] text-red-700 font-bold">18 Critical Thresholds</div>
        </div>

        <div className="p-3.5 bg-red-50 border border-red-200 rounded-xl space-y-1 shadow-sm">
          <div className="text-red-900 text-[10px] font-bold">FINANCIAL-PHYSICAL DESYNC</div>
          <div className="text-xl font-extrabold text-red-800">412</div>
          <div className="text-[9px] text-red-700 font-medium">Advance vs Physical Gap</div>
        </div>

        <div className="p-3.5 bg-white border border-slate-200 rounded-xl space-y-1 shadow-sm">
          <div className="text-slate-500 text-[10px] font-bold">VELOCITY BURSTS</div>
          <div className="text-xl font-extrabold text-amber-700">316</div>
          <div className="text-[9px] text-amber-800 font-medium">Multi-tranche rapid bursts</div>
        </div>
      </div>

      {/* SNA Ledger Liquidity Pipeline Flow */}
      <div className="bg-white border border-slate-200 p-5 rounded-xl space-y-4 font-mono text-xs shadow-sm">
        <div className="flex justify-between items-center border-b border-slate-100 pb-3">
          <div>
            <div className="font-extrabold text-[#0F172A] text-base font-sans">
              SNA LEDGER LIQUIDITY PIPELINE
            </div>
            <div className="text-[11px] text-slate-500 font-sans mt-0.5">
              End-to-end statutory fund flow breakdown from Consolidated Fund of India down to audited physical asset delivery
            </div>
          </div>
          <span className="px-2.5 py-1 rounded bg-blue-50 text-blue-800 border border-blue-200 text-[10px] font-bold">
            SNA Protocol v2.4
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-3">
          {metrics.liquidityPipeline.map((step, idx) => (
            <div
              key={idx}
              className={`p-3.5 rounded-lg border flex flex-col justify-between space-y-2 ${
                step.isRisk
                  ? 'bg-red-50 border-red-200 text-red-900'
                  : 'bg-slate-50 border-slate-200 text-slate-700'
              }`}
            >
              <div className="text-[10px] font-bold text-slate-500 uppercase">{step.stage}</div>
              <div>
                <div className={`text-lg font-extrabold ${step.isRisk ? 'text-red-700' : 'text-[#0F172A]'}`}>
                  ₹{step.amountCr} Cr
                </div>
                <div className="text-[10px] text-slate-500">{step.label}</div>
              </div>
              <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                <div
                  className={`h-full ${step.isRisk ? 'bg-red-600' : 'bg-blue-600'}`}
                  style={{ width: `${step.percent}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="pt-2 border-t border-slate-100 flex flex-wrap justify-between text-[11px] text-slate-600 font-sans">
          <span>Verified Physical Release: <strong>58.1%</strong></span>
          <span className="text-red-700 font-bold">High-Risk Disbursal-to-Physical Gap: ₹2,490 Cr</span>
          <span>Unspent State Treasury Buffer: <strong>29.5%</strong></span>
        </div>
      </div>

      {/* Concordance Matrix & Velocity Bursts Charts */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 font-mono text-xs">
        {/* Scatter Concordance Chart */}
        <div className="xl:col-span-6 bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-4">
          <div className="flex justify-between items-center border-b border-slate-100 pb-3 font-sans">
            <div>
              <div className="font-bold text-slate-900 uppercase text-xs font-mono">
                Financial vs Physical Concordance Matrix
              </div>
              <div className="text-[11px] text-slate-500 mt-0.5">
                Automated detection of billing advancement against ground structural completion
              </div>
            </div>
            <span className="text-[11px] font-mono text-blue-700 font-bold">n = 3,482 Works</span>
          </div>

          <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg space-y-3 relative h-48 flex flex-col justify-between overflow-hidden">
            <div className="relative z-10 flex justify-between text-[10px] text-slate-500">
              <span>Financial Execution: 100%</span>
              <span className="text-red-700 font-bold">CRITICAL DESYNC ZONE (Expenditure &gt; Physical +30%)</span>
            </div>

            {/* Scatter dots graphic simulation */}
            <div className="relative z-10 flex-1 flex items-center justify-around">
              <div className="p-3 bg-red-50 border border-red-200 rounded text-red-900 text-[11px] shadow-sm">
                <strong className="block text-slate-900 font-bold">PROJECT MPL-2026-1042 (87/100)</strong>
                North Channel Drainage &amp; Culvert Re-align<br />
                Disbursed: 78% • Physical: 38%<br />
                <span className="text-red-700 font-bold">₹19.4L advance exposure buffer</span>
              </div>
            </div>

            <div className="relative z-10 flex justify-between items-center text-[10px]">
              <span className="text-slate-500">Physical Execution: 0% → 100%</span>
              <button
                onClick={() => navigate('/project/MPL-2026-1042')}
                className="text-blue-700 hover:text-blue-900 font-bold"
              >
                Inspect Matrix Filter
              </button>
            </div>
          </div>
        </div>

        {/* Fund Utilization Velocity & Outflow Bursts */}
        <div className="xl:col-span-6 bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-4">
          <div className="flex justify-between items-center border-b border-slate-100 pb-3 font-sans">
            <div>
              <div className="font-bold text-slate-900 uppercase text-xs font-mono">
                Fund Utilization Velocity &amp; Outflow Bursts
              </div>
              <div className="text-[11px] text-slate-500 mt-0.5">
                Financial cadence monitoring for end-of-year synthetic surges and off-cycle rounds
              </div>
            </div>
            <span className="px-2.5 py-1 rounded bg-amber-50 text-amber-800 border border-amber-200 text-[10px] font-bold font-mono">
              Surge Flagged
            </span>
          </div>

          <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-900 text-[11px] space-y-1 font-sans">
            <div className="font-bold uppercase text-red-800 flex items-center gap-1.5 font-mono text-xs">
              <AlertTriangle className="w-4 h-4 text-red-600" />
              <span>ABNORMAL 14-DAY VELOCITY BURST DETECTED:</span>
            </div>
            <div className="leading-relaxed text-slate-800">
              Chennai DRDA account: ₹18.4L cleared in 2 consecutive tranches within 14 days to a single vendor without corresponding signed Measurement Book (MB) uploads.
            </div>
          </div>

          <div className="p-3 bg-slate-50 border border-slate-200 rounded text-[11px] text-slate-600 flex justify-between font-sans">
            <span>March spike represents 27.5% of annual allocation, indicating fiscal dump behavior.</span>
            <span className="font-mono text-slate-500">Model: Non-Linear Exponential</span>
          </div>
        </div>
      </div>

      {/* Administrative Fiscal Performance Ledger */}
      <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-4 font-mono text-xs">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3 font-sans">
          <div>
            <div className="text-xs font-bold text-slate-900 uppercase font-mono">
              Administrative Fiscal Performance Ledger
            </div>
            <div className="text-[11px] text-slate-500 mt-0.5">
              Real-time breakdown of releases, sanctions, burn velocities, and desync count per administrative division
            </div>
          </div>

          <button
            onClick={() => navigate('/state/TN')}
            className="px-3.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-lg font-mono transition-colors"
          >
            Filter District / ULB...
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 text-[10px] uppercase text-slate-500 font-bold">
                <th className="p-3.5">Administrative Unit</th>
                <th className="p-3.5 text-right">Released</th>
                <th className="p-3.5 text-right">Sanctioned</th>
                <th className="p-3.5 text-right">Expended</th>
                <th className="p-3.5 text-center">Fund Burn %</th>
                <th className="p-3.5 text-center">Desync Projects</th>
                <th className="p-3.5 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {metrics.administrativeLedger.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50 transition-colors">
                  <td className="p-3.5 font-bold text-slate-900 font-sans">
                    {row.name}
                    <div className="text-[10px] text-slate-500 font-normal font-mono">{row.status}</div>
                  </td>
                  <td className="p-3.5 text-right text-slate-700">₹{row.releasedCr} Cr</td>
                  <td className="p-3.5 text-right text-slate-700">₹{row.sanctionedCr} Cr</td>
                  <td className="p-3.5 text-right text-emerald-700 font-bold">₹{row.expendedCr} Cr</td>
                  <td className="p-3.5 text-center font-bold text-blue-700">{row.burnRate}%</td>
                  <td className="p-3.5 text-center">
                    <span className="px-2.5 py-0.5 bg-red-50 text-red-800 border border-red-200 rounded font-bold text-[10px]">
                      {row.flaggedWorks} Works
                    </span>
                  </td>
                  <td className="p-3.5 text-right">
                    <button
                      onClick={() => navigate(`/district/${row.code}`)}
                      className="px-3.5 py-1.5 bg-red-700 hover:bg-red-800 text-white font-bold rounded-md text-xs transition-colors"
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
      <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-4 font-sans">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3 font-mono">
          <div className="text-xs font-bold text-red-700 uppercase tracking-wider flex items-center gap-1.5">
            <AlertTriangle className="w-4 h-4" />
            <span>Unusual Financial Anomaly Alerts Queue</span>
          </div>
          <button onClick={() => navigate('/alerts')} className="text-blue-700 hover:text-blue-900 text-xs font-semibold">
            View All 316 Alerts &gt;
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs">
          <div className="p-4 bg-slate-50 border border-red-200 rounded-lg space-y-2.5">
            <div className="flex justify-between items-center text-[10px]">
              <span className="bg-red-100 text-red-800 border border-red-200 px-2 py-0.5 rounded font-bold">CRITICAL DESYNC</span>
              <span className="text-slate-500">Triggered 14m ago</span>
            </div>

            <div className="font-bold text-slate-900 text-sm font-sans">
              Project MPL-2026-1042
            </div>
            <div className="text-[11px] text-slate-600 font-sans">
              North Channel Drainage Augmentation &amp; Culvert Reconstruction
            </div>

            <div className="space-y-1.5 pt-2 border-t border-slate-200 text-[11px]">
              <div className="flex justify-between">
                <span className="text-slate-500">Expended:</span>
                <strong className="text-slate-900">₹37.8 Lakhs (78%)</strong>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Verified Physical:</span>
                <strong className="text-red-700">38% Complete</strong>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Advanced Gap:</span>
                <strong className="text-red-700">₹19.4 Lakhs Excess</strong>
              </div>
            </div>

            <button
              onClick={() => setIsCaseModalOpen(true)}
              className="w-full py-2 bg-red-700 hover:bg-red-800 text-white font-bold rounded-lg mt-2 shadow transition-colors"
            >
              Freeze Disbursement
            </button>
          </div>

          <div className="p-4 bg-slate-50 border border-amber-200 rounded-lg space-y-2.5">
            <div className="flex justify-between items-center text-[10px]">
              <span className="bg-amber-100 text-amber-800 border border-amber-200 px-2 py-0.5 rounded font-bold">VELOCITY BURST</span>
              <span className="text-slate-500">Triggered 33m ago</span>
            </div>

            <div className="font-bold text-slate-900 text-sm font-sans">
              Rapid Sequential Disbursal
            </div>
            <div className="text-[11px] text-slate-600 font-sans">
              Ward 142 Community Hall Modernization &amp; Solar Rooftop
            </div>

            <div className="space-y-1.5 pt-2 border-t border-slate-200 text-[11px]">
              <div className="flex justify-between">
                <span className="text-slate-500">Burst Cadence:</span>
                <strong className="text-slate-900">2 Payments in 96 Hours</strong>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Cumulative Sum:</span>
                <strong className="text-amber-700">₹18.40 Lakhs</strong>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">MB Sign-off:</span>
                <strong className="text-red-700">Missing / Uncertified</strong>
              </div>
            </div>

            <button
              onClick={() => navigate('/project/MPL-2026-1042')}
              className="w-full py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold rounded-lg mt-2 transition-colors"
            >
              Audit Tranche
            </button>
          </div>

          <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg space-y-2.5">
            <div className="flex justify-between items-center text-[10px]">
              <span className="bg-blue-50 text-blue-800 border border-blue-200 px-2 py-0.5 rounded font-bold">STATUTORY DELINQUENCY</span>
              <span className="text-slate-500">Triggered 1h ago</span>
            </div>

            <div className="font-bold text-slate-900 text-sm font-sans">
              UC Pending &gt; 180 Days
            </div>
            <div className="text-[11px] text-slate-600 font-sans">
              54 Rural Connectivity &amp; Feeder Road Works in Peri-Urban Belt
            </div>

            <div className="space-y-1.5 pt-2 border-t border-slate-200 text-[11px]">
              <div className="flex justify-between">
                <span className="text-slate-500">Affected Projects:</span>
                <strong className="text-slate-900">14 Schemes</strong>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Locked Capital:</span>
                <strong className="text-amber-700">₹122.4 Lakhs</strong>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Non-Submission:</span>
                <strong className="text-red-700">194 Days Overdue</strong>
              </div>
            </div>

            <button
              onClick={() => navigate('/cases')}
              className="w-full py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold rounded-lg mt-2 transition-colors"
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

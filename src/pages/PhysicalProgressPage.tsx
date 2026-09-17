import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { KpiCard } from '../components/common/KpiCard';
import { RiskBadge } from '../components/common/RiskBadge';
import { PHYSICAL_PROGRESS_METRICS, PROJECTS_LIST_DATA, FEATURED_PROJECT_1042 } from '../../server/mockData';
import { ReviewCaseModal } from '../components/cases/ReviewCaseModal';
import {
  Layers,
  TrendingUp,
  AlertTriangle,
  Clock,
  CheckCircle2,
  FileText,
  Camera,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  Search,
  Filter
} from 'lucide-react';

export const PhysicalProgressPage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedSector, setSelectedSector] = useState('ALL');
  const [isCaseModalOpen, setIsCaseModalOpen] = useState(false);

  const metrics = PHYSICAL_PROGRESS_METRICS;

  return (
    <div className="p-4 lg:p-6 space-y-6 max-w-[1700px] mx-auto font-sans">
      {/* Header Bar */}
      <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-sm flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="text-xs font-mono font-bold text-blue-700 uppercase tracking-widest flex items-center gap-1.5">
            <Layers className="w-4 h-4 text-blue-700" />
            <span>MONITORING & WORKS • PHYSICAL PROGRESS INTELLIGENCE</span>
          </div>
          <h1 className="text-2xl font-extrabold text-[#0F172A] tracking-tight font-sans mt-0.5">
            National Physical Milestone Execution & Delay Monitoring
          </h1>
        </div>

        <div className="flex items-center gap-3 font-mono text-xs">
          <span className="px-3 py-1.5 bg-slate-100 border border-slate-200 text-slate-700 rounded-lg font-medium">
            REC EM-PORTAL v4.10 • HASH #0C162402-MBK
          </span>
          <button
            onClick={() => window.print()}
            className="px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white font-bold rounded-lg flex items-center gap-1.5 shadow-sm transition-colors"
          >
            <FileText className="w-4 h-4" />
            <span>Export Dossier (XLSX/PDF)</span>
          </button>
        </div>
      </div>

      {/* Filter Controls Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-white border border-slate-200 p-3.5 rounded-xl font-mono text-xs shadow-sm">
        <div className="flex flex-wrap items-center gap-3">
          <span className="bg-blue-50 text-blue-800 border border-blue-200 px-3 py-1 rounded-md font-bold">
            State: Tamil Nadu (Active)
          </span>
          <span className="bg-slate-50 text-slate-700 border border-slate-200 px-3 py-1 rounded-md font-medium">
            District: Chennai (Focus Ward 142)
          </span>
          <div className="flex items-center gap-1.5">
            <span className="text-slate-500 font-bold">Sector:</span>
            <select
              value={selectedSector}
              onChange={(e) => setSelectedSector(e.target.value)}
              aria-label="Sector Filter"
              className="bg-slate-50 text-slate-900 border border-slate-300 rounded px-2.5 py-1 focus:outline-none focus:border-blue-600 font-sans"
            >
              <option value="ALL">All Categories (14)</option>
              <option value="INFRA">Community Infrastructure</option>
              <option value="WATER">Water Resources & RO</option>
              <option value="HEALTH">Healthcare Centers</option>
              <option value="EDU">Educational Infrastructure</option>
            </select>
          </div>
          <span className="text-slate-500">Period: FY 2025-26 (Live Feed)</span>
        </div>

        <div className="text-[11px] text-slate-500 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-600 animate-ping" />
          <span>Auto-refresh: 60s Interval</span>
        </div>
      </div>

      {/* Statutory Disclaimer Notice */}
      <div className="p-3.5 bg-amber-50 border border-amber-200 rounded-lg text-xs text-amber-900 flex items-start gap-2.5 font-sans">
        <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
        <div>
          <strong className="text-amber-950 uppercase font-mono text-[11px]">Statutory Oversight Notice: </strong>
          All progress indicators are automated decision-support signals. Final determination of milestone completion requires field measurement book (MB) physical verification by authorized engineers.
        </div>
      </div>

      {/* Top Metrics Cards Row */}
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4 font-mono">
        <div className="p-3.5 bg-white border border-slate-200 rounded-xl space-y-1 shadow-sm">
          <div className="text-slate-500 text-[10px] font-bold">TOTAL ACTIVE WORKS</div>
          <div className="text-2xl font-extrabold text-[#0F172A]">12,486</div>
          <div className="text-[10px] text-slate-500">₹9,420 Cr Outlay • <span className="text-emerald-700 font-bold">+5.2% YoY</span></div>
        </div>

        <div className="p-3.5 bg-white border border-slate-200 rounded-xl space-y-1 shadow-sm">
          <div className="text-slate-500 text-[10px] font-bold">AVG PHYSICAL PROGRESS</div>
          <div className="text-2xl font-extrabold text-blue-700">68.4%</div>
          <div className="text-[10px] text-slate-500">Target: 82.5% • <span className="text-red-700 font-bold">-14.1% Gap</span></div>
        </div>

        <div className="p-3.5 bg-white border border-slate-200 rounded-xl space-y-1 shadow-sm">
          <div className="text-slate-500 text-[10px] font-bold">ON-TRACK WORKS</div>
          <div className="text-2xl font-extrabold text-emerald-700">7,842</div>
          <div className="text-[10px] text-slate-500">62.8% of portfolio</div>
        </div>

        <div className="p-3.5 bg-white border border-slate-200 rounded-xl space-y-1 shadow-sm">
          <div className="text-slate-500 text-[10px] font-bold">DELAYED WORKS (30d-60d)</div>
          <div className="text-2xl font-extrabold text-amber-700">2,931</div>
          <div className="text-[10px] text-slate-500">23.5% of active portfolio</div>
        </div>

        <div className="p-3.5 bg-red-50 border border-red-200 rounded-xl space-y-1 shadow-sm">
          <div className="text-red-900 text-[10px] font-bold">CRITICAL DELAYS (&gt;90d)</div>
          <div className="text-2xl font-extrabold text-red-800">684</div>
          <div className="text-[10px] text-red-700 font-medium">5.5% portfolio fraction</div>
        </div>

        <div className="p-3.5 bg-white border border-slate-200 rounded-xl space-y-1 shadow-sm">
          <div className="text-slate-500 text-[10px] font-bold">AGGREGATE S-CURVE GAP</div>
          <div className="text-2xl font-extrabold text-red-700">-14.7%</div>
          <div className="text-[10px] text-slate-500">Widening by 1.4%/mo</div>
        </div>
      </div>

      {/* Health Stratification Stack Bar */}
      <div className="bg-white border border-slate-200 p-5 rounded-xl space-y-3 font-mono text-xs shadow-sm font-sans">
        <div className="flex justify-between text-slate-700 font-mono">
          <span className="font-bold text-slate-900 font-sans">Macro Project Progress Health Stratification</span>
          <span className="text-slate-500 text-[11px]">Classification Model: OPT-PORT-2026-v2.1</span>
        </div>
        <div className="w-full bg-slate-100 h-4 rounded-full overflow-hidden flex border border-slate-200">
          <div className="bg-emerald-500 h-full w-[45%]" title="Completed (31,420)" />
          <div className="bg-blue-600 h-full w-[25%]" title="On-Track (7,842)" />
          <div className="bg-amber-500 h-full w-[12%]" title="Minor Delay (1,789)" />
          <div className="bg-orange-500 h-full w-[8%]" title="Moderate (1,163)" />
          <div className="bg-red-600 h-full w-[5%]" title="Critical >90d (684)" />
          <div className="bg-slate-400 h-full w-[5%]" title="Uncommenced (2,021)" />
        </div>
        <div className="flex flex-wrap items-center justify-between text-[11px] text-slate-600 pt-1 font-mono">
          <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded bg-emerald-500" /> Completed: 31,420</span>
          <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded bg-blue-600" /> On-Track: 7,842</span>
          <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded bg-amber-500" /> Minor Delay: 1,789</span>
          <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded bg-orange-500" /> Moderate: 1,163</span>
          <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded bg-red-600" /> Critical &gt;90d: 684</span>
          <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded bg-slate-400" /> Uncommenced: 2,021</span>
        </div>
      </div>

      {/* S-Curve Trajectory vs Progress Velocity Dynamics */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
        {/* S-Curve Trajectory */}
        <div className="xl:col-span-7 bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div>
              <div className="text-xs font-bold font-mono text-slate-900 uppercase">
                EXPECTED VS ACTUAL S-CURVE TRAJECTORY
              </div>
              <div className="text-xs text-slate-500 mt-0.5">
                Cumulative portfolio expenditure vs certified physical progress by month
              </div>
            </div>
            <span className="text-xs font-mono text-red-700 bg-red-50 px-3 py-1 rounded-md border border-red-200 font-bold">
              Execution Deficit Peak: -24.5%
            </span>
          </div>

          <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg space-y-3 font-mono text-xs">
            <div className="h-44 flex items-end justify-between gap-2 pt-6 pb-2 px-2 border-b border-slate-200">
              {metrics.scurveData.map((d, idx) => (
                <div key={idx} className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
                  <div className="w-full flex items-end justify-center gap-1 h-full">
                    {/* Target Bar */}
                    <div className="w-2 bg-blue-300 rounded-t" style={{ height: `${d.target}%` }} title={`Target: ${d.target}%`} />
                    {/* Actual Bar */}
                    <div className="w-2 bg-emerald-600 rounded-t" style={{ height: `${d.actual}%` }} title={`Actual: ${d.actual}%`} />
                  </div>
                  <span className="text-[10px] text-slate-500 mt-1">{d.month}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between text-[11px] font-sans">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5 text-blue-900 font-medium">
                  <span className="w-3 h-1 bg-blue-400 rounded" /> Baseline Target Curve
                </span>
                <span className="flex items-center gap-1.5 text-emerald-800 font-bold">
                  <span className="w-3 h-1 bg-emerald-600 rounded" /> Certified Actuals
                </span>
              </div>
              <button
                onClick={() => navigate('/project/MPL-2026-1042')}
                className="text-blue-700 hover:text-blue-900 font-bold flex items-center gap-1"
              >
                <span>Inspect S-Curve Deviations</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Progress Velocity Dynamics */}
        <div className="xl:col-span-5 bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div>
              <div className="text-xs font-bold font-mono text-slate-900 uppercase">
                PROGRESS VELOCITY DYNAMICS
              </div>
              <div className="text-xs text-slate-500 mt-0.5">30d Rolling Velocity Rate</div>
            </div>
          </div>

          <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg space-y-3 font-mono text-xs">
            <div className="flex justify-between items-baseline">
              <span className="text-slate-500 font-bold">OBSERVED PORTFOLIO VELOCITY:</span>
              <span className="text-xl font-extrabold text-emerald-700">+7.8% / month</span>
            </div>

            <div className="flex justify-between items-baseline pt-2 border-t border-slate-200">
              <span className="text-slate-500 font-bold">REQUIRED RECOVERY VELOCITY:</span>
              <span className="text-xl font-extrabold text-red-700">12.4% / month <span className="text-xs text-slate-500 font-normal">(+4.6% Delta)</span></span>
            </div>

            <div className="space-y-2 pt-2 border-t border-slate-200 text-[11px] font-sans">
              <div className="flex justify-between text-slate-700">
                <span>Accelerating Works:</span>
                <span className="text-emerald-700 font-bold font-mono">6,920</span>
              </div>
              <div className="flex justify-between text-slate-700">
                <span>Decelerating / Stalling:</span>
                <span className="text-amber-700 font-bold font-mono">5,140</span>
              </div>
              <div className="flex justify-between text-slate-700">
                <span>Stagnant (0% Progress 90d):</span>
                <span className="text-red-700 font-bold font-mono">427</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* State Jurisdiction & Sector Breakdowns */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
        {/* Jurisdiction Table */}
        <div className="xl:col-span-7 bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-3">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3 font-mono">
            <div className="text-xs font-bold text-slate-900 uppercase">
              PHYSICAL PROGRESS BY STATE JURISDICTION
            </div>
            <span className="text-[11px] text-blue-700 font-bold">View All 36 Jurisdictions</span>
          </div>

          <div className="overflow-x-auto font-mono text-xs">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-[10px] uppercase text-slate-500 font-bold">
                  <th className="p-2.5">State / UT</th>
                  <th className="p-2.5 text-center">Active Works</th>
                  <th className="p-2.5 text-center">Actual %</th>
                  <th className="p-2.5 text-center">Target %</th>
                  <th className="p-2.5 text-center">Progress Gap</th>
                  <th className="p-2.5 text-right">Delayed</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {metrics.byState.map((st, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="p-2.5 font-bold text-slate-900 font-sans">{st.name}</td>
                    <td className="p-2.5 text-center text-slate-700">{st.active.toLocaleString()}</td>
                    <td className="p-2.5 text-center text-emerald-700 font-bold">{st.actual}%</td>
                    <td className="p-2.5 text-center text-slate-500">{st.target}%</td>
                    <td className="p-2.5 text-center text-red-700 font-bold">{st.gap}%</td>
                    <td className="p-2.5 text-right text-amber-800 font-bold">{st.delayed} Works</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Sector Breakdown */}
        <div className="xl:col-span-5 bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-3 font-sans">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3 font-mono">
            <div className="text-xs font-bold text-slate-900 uppercase">
              PHYSICAL PROGRESS BY SECTOR
            </div>
            <span className="text-[11px] text-slate-500">5 Key Sectors</span>
          </div>

          <div className="space-y-3 font-mono text-xs">
            {metrics.bySector.map((sec, idx) => (
              <div key={idx} className="p-3 bg-slate-50 border border-slate-200 rounded-lg space-y-1.5">
                <div className="flex justify-between items-center text-slate-800 font-sans">
                  <span className={`font-bold ${sec.isHighRisk ? 'text-red-700' : 'text-slate-900'}`}>
                    {sec.sector}
                  </span>
                  <span className="text-emerald-700 font-bold font-mono">{sec.progress}% Avg ({sec.delayDays}d Delay)</span>
                </div>
                <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                  <div className={`h-full ${sec.isHighRisk ? 'bg-red-600' : 'bg-blue-600'}`} style={{ width: `${sec.progress}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Requiring Attention & Intervention */}
      <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-4 font-sans">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3 font-mono">
          <div>
            <div className="text-xs font-bold text-red-700 uppercase tracking-widest flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4 text-red-600" />
              <span>PROJECTS REQUIRING ATTENTION &amp; INTERVENTION</span>
            </div>
            <div className="text-xs text-slate-500 mt-0.5 font-sans">
              Automated algorithm triangulation of milestone lag, financial disbursement velocity, and measurement book gaps
            </div>
          </div>
          <span className="text-xs font-mono text-slate-700 bg-slate-100 px-3 py-1 rounded-md font-semibold">
            24 High-Priority Flags
          </span>
        </div>

        <div className="overflow-x-auto font-mono text-xs">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 text-[10px] uppercase text-slate-500 font-bold">
                <th className="p-3.5">Risk Score</th>
                <th className="p-3.5">Project ID &amp; Description</th>
                <th className="p-3.5">Location</th>
                <th className="p-3.5">Category</th>
                <th className="p-3.5 text-center">Execution Trajectory</th>
                <th className="p-3.5 text-center">Delay / Deficit</th>
                <th className="p-3.5">Anomaly Signal</th>
                <th className="p-3.5 text-right">Intervention</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {PROJECTS_LIST_DATA.map(proj => (
                <tr key={proj.id} className="hover:bg-slate-50 transition-colors">
                  <td className="p-3.5">
                    <RiskBadge level={proj.status} score={proj.overallRisk} size="sm" />
                  </td>
                  <td className="p-3.5">
                    <div
                      onClick={() => navigate(`/project/${proj.projectCode}`)}
                      className="font-bold text-slate-900 text-xs hover:text-blue-700 cursor-pointer flex items-center gap-1"
                    >
                      <span>{proj.projectCode}</span>
                      <ChevronRight className="w-3.5 h-3.5 text-blue-700" />
                    </div>
                    <div className="text-[10px] text-slate-500 line-clamp-1 font-sans">{proj.title}</div>
                  </td>
                  <td className="p-3.5 text-slate-700 font-sans">{proj.district}</td>
                  <td className="p-3.5 text-blue-800 font-semibold">{proj.workType}</td>
                  <td className="p-3.5 text-center">
                    <div className="text-emerald-700 font-bold">Act: {proj.physicalProgress}%</div>
                    <div className="text-slate-500 text-[10px]">Exp: {proj.expectedProgress}%</div>
                  </td>
                  <td className="p-3.5 text-center text-red-700 font-bold">
                    -{proj.expectedProgress - proj.physicalProgress}% ({proj.daysOverdue}d Overdue)
                  </td>
                  <td className="p-3.5">
                    <span className="bg-red-50 text-red-800 border border-red-200 text-[10px] px-2.5 py-1 rounded font-bold">
                      {proj.tags[0] || 'Milestone Stagnation'}
                    </span>
                  </td>
                  <td className="p-3.5 text-right">
                    <button
                      onClick={() => navigate(`/project/${proj.projectCode}`)}
                      className="px-3.5 py-1.5 bg-red-700 hover:bg-red-800 text-white rounded-md text-xs font-bold transition-colors shadow-sm"
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

      {/* Deep Dossier Spotlight: MPL-2026-1042 */}
      <div className="bg-white border-2 border-red-200 rounded-xl p-5 shadow-sm space-y-4 font-sans">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-3 font-mono">
          <div>
            <div className="text-xs font-mono font-bold text-red-700 uppercase tracking-widest flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse" />
              <span>DEEP DOSSIER SPOTLIGHT • MPL-2026-1042</span>
            </div>
            <h3 className="font-extrabold text-[#0F172A] text-base font-sans mt-0.5">
              Construction of Community Infrastructure Centre at Kovalam Reach
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsCaseModalOpen(true)}
              className="px-4 py-2 bg-red-700 hover:bg-red-800 text-white font-mono font-bold text-xs rounded-lg shadow flex items-center gap-1.5 transition-colors"
            >
              <AlertTriangle className="w-4 h-4" />
              <span>Dispatch Field Squad</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 font-mono text-xs">
          {/* Milestone Timeline */}
          <div className="xl:col-span-7 space-y-3 font-sans">
            <div className="font-bold text-slate-900 uppercase text-[11px] font-mono">Milestone Verification Timeline:</div>

            <div className="space-y-2.5 font-mono">
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg flex items-center justify-between">
                <div>
                  <div className="font-bold text-slate-900">1. Administrative Sanction Issued</div>
                  <div className="text-[10px] text-slate-500">Sanction No: TN-CHN-2025-4401 • ₹48.50 Lakhs Approved</div>
                </div>
                <span className="text-slate-500 text-[10px]">18-Aug-2025</span>
              </div>

              <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg flex items-center justify-between">
                <div>
                  <div className="font-bold text-slate-900">2. Site Handover &amp; Work Order</div>
                  <div className="text-[10px] text-slate-500">Contractor mobilized with 6-month completion schedule</div>
                </div>
                <span className="text-slate-500 text-[10px]">01-Sep-2025</span>
              </div>

              <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg flex items-center justify-between">
                <div>
                  <div className="font-bold text-slate-900">3. Excavation &amp; Foundation Complete</div>
                  <div className="text-[10px] text-slate-500">Certified by Assistant Engineer MB-501 • 91.4% Disbursed</div>
                </div>
                <span className="text-slate-500 text-[10px]">04-Nov-2025</span>
              </div>

              <div className="p-3 bg-red-50 border border-red-200 rounded-lg flex items-center justify-between">
                <div>
                  <div className="font-bold text-red-900">4. Plinth &amp; Superstructure Frame (Current)</div>
                  <div className="text-[10px] text-red-800 leading-relaxed mt-0.5">Expected Completion: March 2026 • Actual Status: Stalled (+90 days lag) • Zero field measurement book records logged since 12-Mar-2026.</div>
                </div>
                <span className="px-2.5 py-1 bg-red-100 text-red-800 border border-red-200 text-[10px] font-bold rounded">
                  Stalled (+90d)
                </span>
              </div>
            </div>

            <div className="p-3.5 bg-red-50 border border-red-200 rounded-lg text-red-900 text-xs leading-relaxed font-sans mt-3">
              <strong className="text-red-800 uppercase font-mono text-[11px]">Algorithmic Anomaly Diagnosis: </strong>
              Disbursement Divergence: 78% in actual physical progress is frozen at 38%, while ₹37.83 Lakhs (78% of total sanction) has been drawn from district node account. No corresponding entries exist in Measurement Book (MB) #44, Pages 12-20 for the last 94 calendar days, creating an uncollateralized advance exposure.
            </div>
          </div>

          {/* Ground Telemetry Photo Gallery */}
          <div className="xl:col-span-5 space-y-3 font-sans">
            <div className="font-bold text-slate-900 uppercase text-[11px] font-mono">Ground Telemetry Verification:</div>

            <div className="bg-slate-50 border border-slate-200 rounded-lg p-3.5 space-y-3 text-center">
              <div className="bg-slate-200 border border-slate-300 h-36 rounded-lg flex items-center justify-center text-slate-600 relative overflow-hidden">
                <Camera className="w-8 h-8 text-blue-700" />
                <div className="absolute bottom-2 left-2 bg-white/90 px-2 py-0.5 rounded text-[10px] text-slate-700 font-mono border border-slate-200">
                  12.7912° N, 80.2489° E • Azimuth 142°
                </div>
                <span className="absolute top-2 right-2 bg-emerald-100 text-emerald-800 border border-emerald-300 text-[9px] px-2 py-0.5 rounded font-bold font-mono">
                  NIC Geo-tagged
                </span>
              </div>

              <div className="text-left space-y-1.5 text-[11px] font-mono">
                <div className="flex justify-between text-slate-500">
                  <span>Last Inspected:</span>
                  <span className="text-slate-900 font-bold">12 May 2026 (94d ago)</span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>Reporting Officer:</span>
                  <span className="text-slate-900 font-semibold">V. Kalyanaraman (AE-12)</span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>Drone Survey Node:</span>
                  <span className="text-blue-700 font-bold">DRN-CHN-DRIVE-CHN-14</span>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-200 flex items-center justify-between gap-2 font-mono">
                <button
                  onClick={() => navigate('/project/MPL-2026-1042')}
                  className="px-3.5 py-1.5 bg-slate-200 hover:bg-slate-300 text-slate-800 rounded-md text-[11px] font-bold transition-colors"
                >
                  All 8 Photos
                </button>
                <button
                  onClick={() => setIsCaseModalOpen(true)}
                  className="px-3.5 py-1.5 bg-red-700 hover:bg-red-800 text-white rounded-md text-[11px] font-bold transition-colors shadow-sm"
                >
                  Issue Show Cause
                </button>
              </div>
            </div>
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

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ANOMALY_DETECTION_METRICS, PROJECTS_LIST_DATA, FEATURED_PROJECT_1042 } from '../../server/mockData';
import { RiskBadge } from '../components/common/RiskBadge';
import { ReviewCaseModal } from '../components/cases/ReviewCaseModal';
import {
  ShieldAlert,
  Cpu,
  MapPin,
  AlertTriangle,
  FileCheck,
  Search,
  Filter,
  Download,
  ExternalLink,
  ChevronRight,
  Sparkles,
  BarChart2
} from 'lucide-react';

export const AnomalyDetectionPage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedSeverity, setSelectedSeverity] = useState('ALL');
  const [isCaseModalOpen, setIsCaseModalOpen] = useState(false);

  const metrics = ANOMALY_DETECTION_METRICS;

  return (
    <div className="p-4 lg:p-6 space-y-6 max-w-[1700px] mx-auto font-sans">
      {/* Header Bar */}
      <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl shadow-gov-md flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="text-xs font-mono font-bold text-rose-400 uppercase tracking-widest flex items-center gap-1.5">
            <Cpu className="w-4 h-4 text-rose-400" />
            <span>AI INTELLIGENCE • ANOMALY DETECTION (PROD v4.2.1)</span>
          </div>
          <h1 className="text-xl font-extrabold text-white tracking-tight font-mono mt-0.5">
            AI Anomaly Detection Center
          </h1>
          <div className="text-xs text-slate-400 font-mono mt-1">
            Multi-signal anomaly triage, automated risk fusion, and explainable prioritization engine for sovereign fund vigilance.
          </div>
        </div>

        <div className="flex items-center gap-3 font-mono text-xs">
          <button
            onClick={() => setIsCaseModalOpen(true)}
            className="px-3.5 py-1.5 bg-rose-600 hover:bg-rose-500 text-white font-bold rounded flex items-center gap-1.5 shadow-sm"
          >
            <ShieldAlert className="w-4 h-4" />
            <span>Bulk Triage to Field</span>
          </button>

          <button
            onClick={() => window.print()}
            className="px-3.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded flex items-center gap-1.5"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export Dossier (CSV)</span>
          </button>
        </div>
      </div>

      {/* Filter Controls Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-900 border border-slate-800 p-3 rounded-xl font-mono text-xs">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="text-slate-400">Severity:</span>
            <select
              value={selectedSeverity}
              onChange={(e) => setSelectedSeverity(e.target.value)}
              aria-label="Severity Filter"
              className="bg-slate-950 text-white border border-slate-700 rounded px-2 py-1 focus:outline-none"
            >
              <option value="ALL">All Severities (2,418)</option>
              <option value="CRITICAL">Critical 91+ &amp; High 78-90</option>
              <option value="MODERATE">Moderate 48-69</option>
            </select>
          </div>

          <span className="bg-slate-950 text-slate-300 border border-slate-800 px-2.5 py-1 rounded">
            Category: All 6 Vectors
          </span>
          <span className="bg-slate-950 text-slate-300 border border-slate-800 px-2.5 py-1 rounded">
            Model: v4.2.1-pred
          </span>
          <span className="bg-slate-950 text-slate-300 border border-slate-800 px-2.5 py-1 rounded">
            State: Tamil Nadu (TN-31...56)
          </span>
        </div>

        <span className="text-slate-400 text-[10px]">Active Vector Weights: Bayesian Multi-Modal Fusion</span>
      </div>

      {/* Top Metrics Cards Row */}
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4 font-mono">
        <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl space-y-1">
          <div className="text-slate-400 text-[10px]">TOTAL DETECTED</div>
          <div className="text-2xl font-extrabold text-white">2,418</div>
          <div className="text-[10px] text-slate-400">Across 36 Districts</div>
        </div>

        <div className="p-3 bg-rose-950/60 border border-rose-500/60 rounded-xl space-y-1">
          <div className="text-rose-300 text-[10px]">CRITICAL SEVERITY</div>
          <div className="text-2xl font-extrabold text-rose-300">184</div>
          <div className="text-[10px] text-rose-300 font-bold">Priority 1 Review</div>
        </div>

        <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl space-y-1">
          <div className="text-slate-400 text-[10px]">HIGH SEVERITY</div>
          <div className="text-2xl font-extrabold text-amber-400">624</div>
          <div className="text-[10px] text-slate-400">Score 78 – 90</div>
        </div>

        <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl space-y-1">
          <div className="text-slate-400 text-[10px]">MODERATE SEVERITY</div>
          <div className="text-2xl font-extrabold text-blue-400">1,102</div>
          <div className="text-[10px] text-slate-400">Score 48 – 69</div>
        </div>

        <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl space-y-1">
          <div className="text-slate-400 text-[10px]">UNRESOLVED / PENDING</div>
          <div className="text-2xl font-extrabold text-white">508</div>
          <div className="text-[10px] text-slate-400">96.4% Audit Signoff</div>
        </div>

        <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl space-y-1">
          <div className="text-slate-400 text-[10px]">NEW TODAY</div>
          <div className="text-2xl font-extrabold text-emerald-400">142</div>
          <div className="text-[10px] text-slate-400">+18% vs 7d Moving Avg</div>
        </div>
      </div>

      {/* Six Anomaly Classification Vectors Grid */}
      <div className="space-y-3 font-mono">
        <div className="flex items-center justify-between text-xs text-slate-300 font-bold uppercase border-b border-slate-800 pb-2">
          <span>Six Anomaly Classification Vectors</span>
          <span className="text-[10px] text-slate-400">Normalized Against MoSPI CPWD Schedule of Rates (Cell 2024-26)</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {metrics.classificationVectors.map((vec, idx) => (
            <div key={idx} className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-2 hover:border-slate-700 transition-all shadow-gov-md">
              <div className="flex justify-between items-center text-xs">
                <span className="font-bold text-white uppercase text-[11px]">{vec.category}</span>
                <span className="px-2 py-0.5 bg-rose-950 text-rose-300 border border-rose-800 rounded text-[10px] font-bold">
                  {vec.risk}
                </span>
              </div>
              <div className="text-xl font-extrabold text-white">
                {vec.activeCases} <span className="text-xs text-slate-400 font-normal">Active Cases</span>
              </div>
              <div className="text-[11px] text-slate-400 pt-1 border-t border-slate-800">
                Primary Driver: <span className="text-slate-200">{vec.driver}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Geographic Anomaly Concentration & Ingestion Velocity */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 font-mono text-xs">
        {/* Map Cluster */}
        <div className="xl:col-span-6 bg-slate-900 border border-slate-800 rounded-xl p-4 shadow-gov-md space-y-3">
          <div className="flex justify-between items-center border-b border-slate-800 pb-2">
            <div className="font-bold text-white uppercase">
              Geographic Anomaly Concentration
            </div>
            <span className="text-[10px] text-blue-400 font-bold">Tamil Nadu Cluster</span>
          </div>

          <div className="bg-slate-950 border border-slate-800 rounded-lg p-3 h-44 relative flex flex-col justify-between overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] opacity-25" />
            <div className="relative z-10 text-rose-300 font-bold text-[11px]">
              ● ZONE IV HOTSPOT (T. NAGAR): 42 Anomaly flags clustered within 1.8km radius
            </div>
            <div className="relative z-10 text-center font-bold text-white text-xs bg-slate-900/80 p-2 rounded border border-slate-800">
              High density geospatial correlation on coastal &amp; urban drain corridors
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
            <div className="p-2 bg-slate-950 rounded border border-slate-800">
              <div className="font-bold text-white">Zone IV (T. Nagar)</div>
              <div className="text-rose-400 font-bold">65 Anomalies</div>
            </div>
            <div className="p-2 bg-slate-950 rounded border border-slate-800">
              <div className="font-bold text-white">Zone X (Kodambakkam)</div>
              <div className="text-amber-400 font-bold">49 Anomalies</div>
            </div>
            <div className="p-2 bg-slate-950 rounded border border-slate-800">
              <div className="font-bold text-white">Kovalam Coastal Belt</div>
              <div className="text-rose-400 font-bold">52 Anomalies</div>
            </div>
          </div>
        </div>

        {/* 12-Month Ingestion Velocity */}
        <div className="xl:col-span-6 bg-slate-900 border border-slate-800 rounded-xl p-4 shadow-gov-md space-y-3">
          <div className="flex justify-between items-center border-b border-slate-800 pb-2">
            <div className="font-bold text-white uppercase">
              12-Month Anomaly Ingestion &amp; Triage Velocity
            </div>
            <span className="text-[10px] text-slate-400">FY 2025-26</span>
          </div>

          <div className="bg-slate-950 border border-slate-800 rounded-lg p-4 space-y-3 text-center">
            <div className="h-32 flex items-end justify-between gap-2 border-b border-slate-800 pb-2">
              {['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'].map((m, idx) => (
                <div key={idx} className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
                  <div className="w-full bg-rose-500 rounded-t" style={{ height: `${30 + (idx % 5) * 12}%` }} />
                  <span className="text-[9px] text-slate-400">{m}</span>
                </div>
              ))}
            </div>

            <div className="flex justify-between text-[10px] text-slate-400">
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded bg-rose-500" /> Cost Outliers</span>
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded bg-blue-500" /> Schedule Lags</span>
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded bg-amber-500" /> Geo/NLP Overlap</span>
            </div>
          </div>
        </div>
      </div>

      {/* Priority AI Anomaly Queue Table */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 shadow-gov-md space-y-4 font-mono text-xs">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div>
            <div className="text-xs font-bold text-white uppercase">
              Priority AI Anomaly Queue
            </div>
            <div className="text-[11px] text-slate-400">
              Risk-ranked by Bayesian multi-word fusion score across physical, financial, and text vectors
            </div>
          </div>
          <span className="text-slate-400 text-[11px]">Showing 3 of 184 Critical</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-800 text-[10px] uppercase text-slate-400">
                <th className="p-3">Risk Score</th>
                <th className="p-3">Project ID &amp; Location</th>
                <th className="p-3">Anomaly Classification</th>
                <th className="p-3">Multi-Signal Evidence</th>
                <th className="p-3 text-center">Confidence</th>
                <th className="p-3 text-center">Triage Status</th>
                <th className="p-3 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {PROJECTS_LIST_DATA.map(proj => (
                <tr key={proj.id} className="hover:bg-slate-850 transition-colors">
                  <td className="p-3">
                    <RiskBadge level={proj.status} score={proj.overallRisk} size="sm" />
                  </td>
                  <td className="p-3 font-bold text-white">
                    {proj.projectCode}
                    <div className="text-[10px] text-slate-400 font-normal">{proj.district}</div>
                  </td>
                  <td className="p-3 text-rose-300 font-bold">{proj.tags[0] || 'Cost Outlier (+172%)'}</td>
                  <td className="p-3 text-slate-300">5 Signals Converging (Geospatial + BoQ overlap)</td>
                  <td className="p-3 text-center text-emerald-400 font-bold">89% High Precision</td>
                  <td className="p-3 text-center text-amber-300 font-bold">Unassigned / Review Req.</td>
                  <td className="p-3 text-right">
                    <button
                      onClick={() => navigate(`/project/${proj.projectCode}`)}
                      className="px-3 py-1 bg-rose-600 hover:bg-rose-500 text-white font-bold rounded text-xs"
                    >
                      Investigate Dossier
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* SHAP Feature Attribution Drawer Card */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-gov-lg space-y-4 font-mono text-xs">
        <div className="flex justify-between items-center border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <div className="font-bold text-white text-sm uppercase">
              Explainable AI Feature Attribution Drawer: Dossier MPL-2026-1042
            </div>
          </div>
          <span className="text-emerald-400 font-bold text-[11px]">Model Confidence: 98%</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-slate-300">
          <div className="p-3 bg-slate-950 border border-slate-800 rounded space-y-1">
            <div className="text-[10px] text-slate-400">FINANCIAL BENCHMARK VARIANCE</div>
            <div className="text-lg font-extrabold text-rose-400">₹48.5 L <span className="text-xs text-slate-400 font-normal">Project Outlay</span></div>
            <div className="text-[10px] text-rose-300">+172.4% Deviation (+₹30.7L above benchmark ceiling)</div>
          </div>

          <div className="p-3 bg-slate-950 border border-slate-800 rounded space-y-1">
            <div className="text-[10px] text-slate-400">PHYSICAL EXECUTION GAP</div>
            <div className="text-lg font-extrabold text-amber-400">38% <span className="text-xs text-slate-400 font-normal">Actual Site Progress</span></div>
            <div className="text-[10px] text-amber-300">-47 percentage point execution deficit</div>
          </div>

          <div className="p-3 bg-slate-950 border border-slate-800 rounded space-y-1">
            <div className="text-[10px] text-slate-400">CADASTRAL / HISTORICAL DUPLICATE</div>
            <div className="text-lg font-extrabold text-rose-400">380m <span className="text-xs text-slate-400 font-normal">Proximity Distance</span></div>
            <div className="text-[10px] text-rose-300">92% BoQ itemwise overlap with MPL-2024-6511</div>
          </div>
        </div>

        {/* SHAP Feature Importance Attribution Bar */}
        <div className="space-y-2 pt-2 border-t border-slate-800 text-[11px]">
          <div className="font-bold text-white uppercase text-[10px]">SHAP Feature Importance Attribution:</div>
          <div className="space-y-1.5">
            <div className="flex justify-between items-center">
              <span>Schedule Stagnation Past Milestones (Lag &gt; 120d)</span>
              <span className="text-rose-400 font-bold">+36.4% Impact</span>
            </div>
            <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden border border-slate-800">
              <div className="bg-rose-500 h-full w-[36.4%]" />
            </div>

            <div className="flex justify-between items-center pt-1">
              <span>Unit Cost Variance Against State Schedule of Rates</span>
              <span className="text-amber-400 font-bold">+29.1% Impact</span>
            </div>
            <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden border border-slate-800">
              <div className="bg-amber-500 h-full w-[29.1%]" />
            </div>

            <div className="flex justify-between items-center pt-1">
              <span>Semantic Text &amp; Item Specification Match (&gt;90%)</span>
              <span className="text-blue-400 font-bold">+19.5% Impact</span>
            </div>
            <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden border border-slate-800">
              <div className="bg-blue-500 h-full w-[19.5%]" />
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

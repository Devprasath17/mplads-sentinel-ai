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
      <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-sm flex flex-wrap items-center justify-between gap-4 font-sans">
        <div>
          <div className="text-xs font-mono font-bold text-red-700 uppercase tracking-widest flex items-center gap-1.5">
            <Cpu className="w-4 h-4 text-red-700" />
            <span>AI INTELLIGENCE • ANOMALY DETECTION (PROD v4.2.1)</span>
          </div>
          <h1 className="text-2xl font-extrabold text-[#0F172A] tracking-tight font-sans mt-0.5">
            AI Anomaly Detection Center
          </h1>
          <div className="text-xs text-slate-500 font-sans mt-1">
            Multi-signal anomaly triage, automated risk fusion, and explainable prioritization engine for sovereign fund vigilance.
          </div>
        </div>

        <div className="flex items-center gap-3 font-mono text-xs">
          <button
            onClick={() => setIsCaseModalOpen(true)}
            className="px-4 py-2 bg-red-700 hover:bg-red-800 text-white font-bold rounded-lg flex items-center gap-1.5 shadow-sm transition-colors"
          >
            <ShieldAlert className="w-4 h-4" />
            <span>Bulk Triage to Field</span>
          </button>

          <button
            onClick={() => window.print()}
            className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-lg flex items-center gap-1.5 transition-colors"
          >
            <Download className="w-4 h-4" />
            <span>Export Dossier (CSV)</span>
          </button>
        </div>
      </div>

      {/* Filter Controls Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-white border border-slate-200 p-3.5 rounded-xl font-mono text-xs shadow-sm">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="text-slate-500 font-bold">Severity:</span>
            <select
              value={selectedSeverity}
              onChange={(e) => setSelectedSeverity(e.target.value)}
              aria-label="Severity Filter"
              className="bg-slate-50 text-slate-900 border border-slate-300 rounded px-2.5 py-1 focus:outline-none focus:border-blue-600 font-sans"
            >
              <option value="ALL">All Severities (2,418)</option>
              <option value="CRITICAL">Critical 91+ &amp; High 78-90</option>
              <option value="MODERATE">Moderate 48-69</option>
            </select>
          </div>

          <span className="bg-slate-50 text-slate-700 border border-slate-200 px-3 py-1 rounded-md font-medium">
            Category: All 6 Vectors
          </span>
          <span className="bg-slate-50 text-slate-700 border border-slate-200 px-3 py-1 rounded-md font-medium">
            Model: v4.2.1-pred
          </span>
          <span className="bg-slate-50 text-slate-700 border border-slate-200 px-3 py-1 rounded-md font-medium">
            State: Tamil Nadu (TN-31...56)
          </span>
        </div>

        <span className="text-slate-500 text-[11px]">Active Vector Weights: Bayesian Multi-Modal Fusion</span>
      </div>

      {/* Top Metrics Cards Row */}
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4 font-mono">
        <div className="p-3.5 bg-white border border-slate-200 rounded-xl space-y-1 shadow-sm">
          <div className="text-slate-500 text-[10px] font-bold">TOTAL DETECTED</div>
          <div className="text-2xl font-extrabold text-[#0F172A]">2,418</div>
          <div className="text-[10px] text-slate-500">Across 36 Districts</div>
        </div>

        <div className="p-3.5 bg-red-50 border border-red-200 rounded-xl space-y-1 shadow-sm">
          <div className="text-red-900 text-[10px] font-bold">CRITICAL SEVERITY</div>
          <div className="text-2xl font-extrabold text-red-800">184</div>
          <div className="text-[10px] text-red-700 font-bold">Priority 1 Review</div>
        </div>

        <div className="p-3.5 bg-white border border-slate-200 rounded-xl space-y-1 shadow-sm">
          <div className="text-slate-500 text-[10px] font-bold">HIGH SEVERITY</div>
          <div className="text-2xl font-extrabold text-amber-700">624</div>
          <div className="text-[10px] text-slate-500">Score 78 – 90</div>
        </div>

        <div className="p-3.5 bg-white border border-slate-200 rounded-xl space-y-1 shadow-sm">
          <div className="text-slate-500 text-[10px] font-bold">MODERATE SEVERITY</div>
          <div className="text-2xl font-extrabold text-blue-700">1,102</div>
          <div className="text-[10px] text-slate-500">Score 48 – 69</div>
        </div>

        <div className="p-3.5 bg-white border border-slate-200 rounded-xl space-y-1 shadow-sm">
          <div className="text-slate-500 text-[10px] font-bold">UNRESOLVED / PENDING</div>
          <div className="text-2xl font-extrabold text-[#0F172A]">508</div>
          <div className="text-[10px] text-slate-500">96.4% Audit Signoff</div>
        </div>

        <div className="p-3.5 bg-white border border-slate-200 rounded-xl space-y-1 shadow-sm">
          <div className="text-slate-500 text-[10px] font-bold">NEW TODAY</div>
          <div className="text-2xl font-extrabold text-emerald-700">142</div>
          <div className="text-[10px] text-slate-500">+18% vs 7d Moving Avg</div>
        </div>
      </div>

      {/* Six Anomaly Classification Vectors Grid */}
      <div className="space-y-3 font-mono">
        <div className="flex items-center justify-between text-xs text-slate-700 font-bold uppercase border-b border-slate-200 pb-2 font-sans">
          <span>Six Anomaly Classification Vectors</span>
          <span className="text-[10px] text-slate-500 font-mono">Normalized Against MoSPI CPWD Schedule of Rates (Cell 2024-26)</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {metrics.classificationVectors.map((vec, idx) => (
            <div key={idx} className="p-4 bg-white border border-slate-200 rounded-xl space-y-2 hover:border-slate-300 transition-all shadow-sm">
              <div className="flex justify-between items-center text-xs font-sans">
                <span className="font-bold text-slate-900 uppercase text-[11px] font-mono">{vec.category}</span>
                <span className="px-2.5 py-0.5 bg-red-50 text-red-800 border border-red-200 rounded font-bold text-[10px] font-mono">
                  {vec.risk}
                </span>
              </div>
              <div className="text-xl font-extrabold text-[#0F172A]">
                {vec.activeCases} <span className="text-xs text-slate-500 font-normal">Active Cases</span>
              </div>
              <div className="text-[11px] text-slate-500 pt-2 border-t border-slate-100 font-sans">
                Primary Driver: <span className="text-slate-800 font-medium">{vec.driver}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Geographic Anomaly Concentration & Ingestion Velocity */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 font-mono text-xs font-sans">
        {/* Map Cluster */}
        <div className="xl:col-span-6 bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-3 font-sans">
          <div className="flex justify-between items-center border-b border-slate-100 pb-3 font-mono">
            <div className="font-bold text-slate-900 uppercase text-xs font-mono">
              Geographic Anomaly Concentration
            </div>
            <span className="text-[11px] text-blue-700 font-bold font-mono">Tamil Nadu Cluster</span>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-lg p-3.5 h-44 relative flex flex-col justify-between overflow-hidden">
            <div className="relative z-10 text-red-800 font-bold text-[11px] font-mono">
              ● ZONE IV HOTSPOT (T. NAGAR): 42 Anomaly flags clustered within 1.8km radius
            </div>
            <div className="relative z-10 text-center font-bold text-slate-900 text-xs bg-white/90 p-2.5 rounded-md border border-slate-200 font-sans shadow-sm">
              High density geospatial correlation on coastal &amp; urban drain corridors
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-mono">
            <div className="p-2 bg-slate-50 rounded-lg border border-slate-200">
              <div className="font-bold text-slate-900 font-sans">Zone IV (T. Nagar)</div>
              <div className="text-red-700 font-bold">65 Anomalies</div>
            </div>
            <div className="p-2 bg-slate-50 rounded-lg border border-slate-200">
              <div className="font-bold text-slate-900 font-sans">Zone X (Kodambakkam)</div>
              <div className="text-amber-700 font-bold">49 Anomalies</div>
            </div>
            <div className="p-2 bg-slate-50 rounded-lg border border-slate-200">
              <div className="font-bold text-slate-900 font-sans">Kovalam Coastal Belt</div>
              <div className="text-red-700 font-bold">52 Anomalies</div>
            </div>
          </div>
        </div>

        {/* 12-Month Ingestion Velocity */}
        <div className="xl:col-span-6 bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-3 font-sans">
          <div className="flex justify-between items-center border-b border-slate-100 pb-3 font-mono">
            <div className="font-bold text-slate-900 uppercase text-xs font-mono">
              12-Month Anomaly Ingestion &amp; Triage Velocity
            </div>
            <span className="text-[11px] text-slate-500 font-mono">FY 2025-26</span>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 space-y-3 text-center font-mono">
            <div className="h-32 flex items-end justify-between gap-2 border-b border-slate-200 pb-2">
              {['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'].map((m, idx) => (
                <div key={idx} className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
                  <div className="w-full bg-red-600 rounded-t" style={{ height: `${30 + (idx % 5) * 12}%` }} />
                  <span className="text-[9px] text-slate-500">{m}</span>
                </div>
              ))}
            </div>

            <div className="flex justify-between text-[10px] text-slate-600 font-sans">
              <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded bg-red-600" /> Cost Outliers</span>
              <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded bg-blue-600" /> Schedule Lags</span>
              <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded bg-amber-500" /> Geo/NLP Overlap</span>
            </div>
          </div>
        </div>
      </div>

      {/* Priority AI Anomaly Queue Table */}
      <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-4 font-mono text-xs">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3 font-sans">
          <div>
            <div className="text-xs font-bold text-slate-900 uppercase font-mono">
              Priority AI Anomaly Queue
            </div>
            <div className="text-[11px] text-slate-500">
              Risk-ranked by Bayesian multi-word fusion score across physical, financial, and text vectors
            </div>
          </div>
          <span className="text-slate-500 text-[11px]">Showing 3 of 184 Critical</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 text-[10px] uppercase text-slate-500 font-bold">
                <th className="p-3.5">Risk Score</th>
                <th className="p-3.5">Project ID &amp; Location</th>
                <th className="p-3.5">Anomaly Classification</th>
                <th className="p-3.5">Multi-Signal Evidence</th>
                <th className="p-3.5 text-center">Confidence</th>
                <th className="p-3.5 text-center">Triage Status</th>
                <th className="p-3.5 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {PROJECTS_LIST_DATA.map(proj => (
                <tr key={proj.id} className="hover:bg-slate-50 transition-colors">
                  <td className="p-3.5">
                    <RiskBadge level={proj.status} score={proj.overallRisk} size="sm" />
                  </td>
                  <td className="p-3.5 font-bold text-slate-900 font-sans">
                    {proj.projectCode}
                    <div className="text-[10px] text-slate-500 font-normal font-mono">{proj.district}</div>
                  </td>
                  <td className="p-3.5 text-red-800 font-bold font-sans">{proj.tags[0] || 'Cost Outlier (+172%)'}</td>
                  <td className="p-3.5 text-slate-700 font-sans">5 Signals Converging (Geospatial + BoQ overlap)</td>
                  <td className="p-3.5 text-center text-emerald-700 font-bold">89% High Precision</td>
                  <td className="p-3.5 text-center text-amber-800 font-bold">Unassigned / Review Req.</td>
                  <td className="p-3.5 text-right">
                    <button
                      onClick={() => navigate(`/project/${proj.projectCode}`)}
                      className="px-3.5 py-1.5 bg-red-700 hover:bg-red-800 text-white font-bold rounded-md text-xs transition-colors shadow-sm"
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
      <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-4 font-sans text-xs">
        <div className="flex justify-between items-center border-b border-slate-100 pb-3 font-mono">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-blue-700" />
            <div className="font-bold text-slate-900 text-sm uppercase font-mono">
              Explainable AI Feature Attribution Drawer: Dossier MPL-2026-1042
            </div>
          </div>
          <span className="text-emerald-700 font-bold text-[11px]">Model Confidence: 98%</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-slate-700">
          <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg space-y-1">
            <div className="text-[10px] text-slate-500 font-bold">FINANCIAL BENCHMARK VARIANCE</div>
            <div className="text-lg font-extrabold text-red-700">₹48.5 L <span className="text-xs text-slate-500 font-normal">Project Outlay</span></div>
            <div className="text-[10px] text-red-800 font-sans font-medium">+172.4% Deviation (+₹30.7L above benchmark ceiling)</div>
          </div>

          <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg space-y-1">
            <div className="text-[10px] text-slate-500 font-bold">PHYSICAL EXECUTION GAP</div>
            <div className="text-lg font-extrabold text-amber-700">38% <span className="text-xs text-slate-500 font-normal">Actual Site Progress</span></div>
            <div className="text-[10px] text-amber-900 font-sans font-medium">-47 percentage point execution deficit</div>
          </div>

          <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg space-y-1">
            <div className="text-[10px] text-slate-500 font-bold">CADASTRAL / HISTORICAL DUPLICATE</div>
            <div className="text-lg font-extrabold text-red-700">380m <span className="text-xs text-slate-500 font-normal">Proximity Distance</span></div>
            <div className="text-[10px] text-red-800 font-sans font-medium">92% BoQ itemwise overlap with MPL-2024-6511</div>
          </div>
        </div>

        {/* SHAP Feature Importance Attribution Bar */}
        <div className="space-y-2 pt-2 border-t border-slate-100 text-[11px] font-mono">
          <div className="font-bold text-slate-900 uppercase text-[10px] font-sans">SHAP Feature Importance Attribution:</div>
          <div className="space-y-2">
            <div className="flex justify-between items-center text-slate-700">
              <span>Schedule Stagnation Past Milestones (Lag &gt; 120d)</span>
              <span className="text-red-700 font-bold">+36.4% Impact</span>
            </div>
            <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden border border-slate-200">
              <div className="bg-red-600 h-full w-[36.4%]" />
            </div>

            <div className="flex justify-between items-center pt-1 text-slate-700">
              <span>Unit Cost Variance Against State Schedule of Rates</span>
              <span className="text-amber-700 font-bold">+29.1% Impact</span>
            </div>
            <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden border border-slate-200">
              <div className="bg-amber-500 h-full w-[29.1%]" />
            </div>

            <div className="flex justify-between items-center pt-1 text-slate-700">
              <span>Semantic Text &amp; Item Specification Match (&gt;90%)</span>
              <span className="text-blue-700 font-bold">+19.5% Impact</span>
            </div>
            <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden border border-slate-200">
              <div className="bg-blue-600 h-full w-[19.5%]" />
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

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DUPLICATE_DETECTION_METRICS, DUPLICATE_COMPARISON_DATA, FEATURED_PROJECT_1042 } from '../../server/mockData';
import { ReviewCaseModal } from '../components/cases/ReviewCaseModal';
import {
  Search,
  Layers,
  MapPin,
  ShieldAlert,
  ArrowRightLeft,
  FileCheck,
  Download,
  Filter,
  CheckCircle2,
  AlertTriangle,
  ExternalLink,
  ChevronRight,
  Sparkles
} from 'lucide-react';

export const DuplicateDetectionPage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedRadius, setSelectedRadius] = useState('5.0');
  const [selectedMatch, setSelectedMatch] = useState('80');
  const [isCaseModalOpen, setIsCaseModalOpen] = useState(false);
  const [surveyDispatched, setSurveyDispatched] = useState(false);

  const metrics = DUPLICATE_DETECTION_METRICS;
  const comparison = DUPLICATE_COMPARISON_DATA;

  return (
    <div className="p-4 lg:p-6 space-y-6 max-w-[1700px] mx-auto font-sans">
      {/* Header Bar */}
      <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-sm flex flex-wrap items-center justify-between gap-4 font-sans">
        <div>
          <div className="text-xs font-mono font-bold text-blue-700 uppercase tracking-widest flex items-center gap-1.5">
            <Search className="w-4 h-4 text-blue-700" />
            <span>AI INTELLIGENCE • ALGORITHMIC FORENSIC HUB • DUPLICATE DETECTION MODULE</span>
          </div>
          <h1 className="text-2xl font-extrabold text-[#0F172A] tracking-tight font-sans mt-0.5">
            Duplicate &amp; Similar Work Detection Engine
          </h1>
          <div className="text-xs text-slate-500 font-sans mt-1">
            Identify potentially duplicated or highly similar public works using NLP semantic embeddings and geospatial cadastral intelligence across parallel fiscal allocations.
          </div>
        </div>

        <div className="flex items-center gap-3 font-mono text-xs">
          <span className="px-3 py-1.5 bg-emerald-50 border border-emerald-200 text-emerald-800 font-bold rounded-lg">
            BERT BERT-Gov-In Core v2.1
          </span>
          <button
            onClick={() => window.print()}
            className="px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white font-bold rounded-lg flex items-center gap-1.5 shadow-sm transition-colors"
          >
            <Download className="w-4 h-4" />
            <span>Forensic Ledger Export</span>
          </button>
        </div>
      </div>

      {/* Pipeline Matrix Filters Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-white border border-slate-200 p-3.5 rounded-xl font-mono text-xs shadow-sm">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="text-slate-500 font-bold">Radius:</span>
            <select
              value={selectedRadius}
              onChange={(e) => setSelectedRadius(e.target.value)}
              aria-label="Proximity Radius Filter"
              className="bg-slate-50 text-slate-900 border border-slate-300 rounded px-2.5 py-1 focus:outline-none focus:border-blue-600 font-sans"
            >
              <option value="5.0">Within 5.0 km</option>
              <option value="2.0">Within 2.0 km</option>
              <option value="1.0">Within 1.0 km</option>
              <option value="0.5">Within 500 m</option>
            </select>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="text-slate-500 font-bold">Semantic Vector:</span>
            <select
              value={selectedMatch}
              onChange={(e) => setSelectedMatch(e.target.value)}
              aria-label="Semantic Match Threshold"
              className="bg-slate-50 text-slate-900 border border-slate-300 rounded px-2.5 py-1 focus:outline-none focus:border-blue-600 font-sans"
            >
              <option value="80">&gt; 80% Cosine Match</option>
              <option value="90">&gt; 90% Critical Match</option>
              <option value="70">&gt; 70% Moderate Match</option>
            </select>
          </div>

          <span className="bg-slate-50 text-slate-700 border border-slate-200 px-3 py-1 rounded-md font-medium">
            Sector: All Infrastructure &amp; Community
          </span>
          <span className="bg-slate-50 text-slate-700 border border-slate-200 px-3 py-1 rounded-md font-medium">
            Jurisdiction: Tamil Nadu / Chennai Metro (Zone 11-15)
          </span>
        </div>

        <button
          onClick={() => {
            setSelectedRadius('5.0');
            setSelectedMatch('80');
          }}
          className="text-blue-700 hover:text-blue-900 font-bold underline text-xs"
        >
          Reset Filters
        </button>
      </div>

      {/* Top Metrics Cards Row */}
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4 font-mono">
        <div className="p-3.5 bg-white border border-slate-200 rounded-xl space-y-1 shadow-sm">
          <div className="text-slate-500 text-[10px] font-bold">WORKS SCANNED</div>
          <div className="text-2xl font-extrabold text-[#0F172A]">42,680</div>
          <div className="text-[10px] text-slate-500">100% Core Base FY 2025-26</div>
        </div>

        <div className="p-3.5 bg-white border border-slate-200 rounded-xl space-y-1 shadow-sm">
          <div className="text-slate-500 text-[10px] font-bold">CANDIDATE PAIRS</div>
          <div className="text-2xl font-extrabold text-blue-700">184</div>
          <div className="text-[10px] text-slate-500">0.43% Vector Flagged</div>
        </div>

        <div className="p-3.5 bg-white border border-slate-200 rounded-xl space-y-1 shadow-sm">
          <div className="text-slate-500 text-[10px] font-bold">HIGH SIM (50-80%)</div>
          <div className="text-2xl font-extrabold text-amber-700">72</div>
          <div className="text-[10px] text-slate-500">BoQ structural match</div>
        </div>

        <div className="p-3.5 bg-red-50 border border-red-200 rounded-xl space-y-1 shadow-sm">
          <div className="text-red-900 text-[10px] font-bold">VERY HIGH (&gt;80%)</div>
          <div className="text-2xl font-extrabold text-red-800">31</div>
          <div className="text-[10px] text-red-700 font-bold">Critical Attention</div>
        </div>

        <div className="p-3.5 bg-white border border-slate-200 rounded-xl space-y-1 shadow-sm">
          <div className="text-slate-500 text-[10px] font-bold">&lt;500m CO-LOCATION</div>
          <div className="text-2xl font-extrabold text-amber-700">46</div>
          <div className="text-[10px] text-slate-500">Cadastral parcel overlap</div>
        </div>

        <div className="p-3.5 bg-white border border-slate-200 rounded-xl space-y-1 shadow-sm">
          <div className="text-slate-500 text-[10px] font-bold">PRIORITY VERIFICATION</div>
          <div className="text-2xl font-extrabold text-emerald-700">58</div>
          <div className="text-[10px] text-slate-500">Pending Human Triage</div>
        </div>
      </div>

      {/* Multimodal Architecture Diagram */}
      <div className="bg-white border border-slate-200 p-5 rounded-xl space-y-3 font-mono text-xs shadow-sm font-sans">
        <div className="flex justify-between items-center border-b border-slate-100 pb-3">
          <div className="font-bold text-slate-900 uppercase font-mono">
            End-to-End Multimodal Similarity Architecture
          </div>
          <span className="text-[11px] text-slate-500">MoSPI BERT-Gov-In v2.1 Engine</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-7 gap-2 text-center text-[10px]">
          <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
            <div className="text-slate-500 text-[9px] font-bold">INPUT STAGE</div>
            <div className="font-bold text-slate-900 mt-1">Work Description &amp; BoQ</div>
          </div>
          <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
            <div className="text-slate-500 text-[9px] font-bold">NLP VECTORIZER</div>
            <div className="font-bold text-blue-700 mt-1">BERT-Gov-In Embedding</div>
          </div>
          <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
            <div className="text-slate-500 text-[9px] font-bold">CATEGORY MATCH</div>
            <div className="font-bold text-slate-900 mt-1">Work Categorization</div>
          </div>
          <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
            <div className="text-slate-500 text-[9px] font-bold">CADASTRAL GIS</div>
            <div className="font-bold text-emerald-700 mt-1">RTK-GPS Haversine</div>
          </div>
          <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
            <div className="text-slate-500 text-[9px] font-bold">BOQ LINE MATCH</div>
            <div className="font-bold text-amber-700 mt-1">Soft Unit Variance</div>
          </div>
          <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
            <div className="text-slate-500 text-[9px] font-bold">SYNTHESIZED INDEX</div>
            <div className="font-bold text-red-700 mt-1">Composite Risk Score</div>
          </div>
          <div className="p-2.5 bg-red-50 border border-red-200 rounded-lg">
            <div className="text-red-900 text-[9px] font-bold">DECISION STEP</div>
            <div className="font-bold text-red-800 mt-1">Statutory Triage</div>
          </div>
        </div>
      </div>

      {/* Critical Pair Under Investigation: Dual-Project Concordance Analysis */}
      <div className="bg-white border-2 border-red-200 rounded-xl p-5 shadow-sm space-y-4 font-sans">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3 font-mono">
          <div>
            <div className="text-xs font-bold text-red-700 uppercase tracking-widest flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse" />
              <span>CRITICAL PAIR UNDER INVESTIGATION • Pair Reference: PAIR-2026-CH-0402</span>
            </div>
            <h3 className="font-extrabold text-[#0F172A] text-base font-sans mt-0.5">
              Dual-Project Forensic Concordance Analysis
            </h3>
          </div>

          <div className="p-2.5 bg-red-50 border border-red-200 rounded-lg text-center">
            <div className="text-[10px] text-slate-500 font-bold">OVERALL DUPLICATE RISK</div>
            <div className="text-2xl font-extrabold text-red-800">88 <span className="text-xs text-slate-500 font-normal">/ 100</span></div>
          </div>
        </div>

        {/* Side-by-side Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs">
          {/* Candidate Work */}
          <div className="p-4 bg-slate-50 border border-blue-200 rounded-lg space-y-3 font-sans">
            <div className="flex justify-between items-center text-[10px] font-mono">
              <span className="bg-blue-100 text-blue-800 border border-blue-200 px-2 py-0.5 rounded font-bold">CANDIDATE WORK (UNDER REVIEW)</span>
              <span className="font-bold text-slate-900">{comparison.currentProject.projectCode}</span>
            </div>

            <div className="font-bold text-slate-900 text-sm">
              {comparison.currentProject.title}
            </div>

            <div className="space-y-1 text-[11px] text-slate-700 pt-2 border-t border-slate-200 font-mono">
              <div className="flex justify-between">
                <span>Location:</span>
                <span className="text-slate-900 font-semibold">Kovalam, Chennai (12.7912° N, 80.2514° E)</span>
              </div>
              <div className="flex justify-between">
                <span>Sanction:</span>
                <span className="text-emerald-700 font-bold">₹48.50 Lakh (2025-26)</span>
              </div>
              <div className="flex justify-between">
                <span>Agency:</span>
                <span className="text-slate-800">DRDA Chennai Div-II</span>
              </div>
              <div className="flex justify-between">
                <span>Contractor:</span>
                <span className="text-slate-800">Apex Bay Infratech Pvt Ltd</span>
              </div>
            </div>

            <div className="p-2.5 bg-amber-50 border border-amber-200 rounded text-[10px] text-amber-900 font-mono">
              Physical Execution: 38% • Disbursed: ₹37.80 L (78%)<br />
              <span className="text-red-700 font-bold">Anomaly Signal: 40% Fiscal Disbursal Lead ahead of Physical Ground Verification</span>
            </div>
          </div>

          {/* Historical Benchmark Work */}
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg space-y-3 font-sans">
            <div className="flex justify-between items-center text-[10px] font-mono">
              <span className="bg-slate-200 text-slate-800 border border-slate-300 px-2 py-0.5 rounded font-bold">HISTORICAL BENCHMARK WORK (COMPLETED)</span>
              <span className="font-bold text-slate-900">{comparison.historicalWork.projectCode}</span>
            </div>

            <div className="font-bold text-slate-900 text-sm">
              {comparison.historicalWork.title}
            </div>

            <div className="space-y-1 text-[11px] text-slate-700 pt-2 border-t border-slate-200 font-mono">
              <div className="flex justify-between">
                <span>Location:</span>
                <span className="text-slate-900 font-semibold">Kovalam, Chennai (12.7909° N, 80.2526° E)</span>
              </div>
              <div className="flex justify-between">
                <span>Sanction:</span>
                <span className="text-emerald-700 font-bold">₹22.30 Lakh (Completed 2024)</span>
              </div>
              <div className="flex justify-between">
                <span>Agency:</span>
                <span className="text-slate-800">DRDA Chennai Div-II</span>
              </div>
              <div className="flex justify-between">
                <span>Contractor:</span>
                <span className="text-slate-800">Sri Balaji Coastal Infra</span>
              </div>
            </div>

            <div className="p-2.5 bg-emerald-50 border border-emerald-200 rounded text-[10px] text-emerald-800 font-mono">
              Physical Execution: 100% • Disbursed: ₹22.30 L (100%)<br />
              Archived in MoSPI Asset Register • UC Submitted &amp; Audited
            </div>
          </div>
        </div>

        {/* Concordance Factor Decomposition */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 font-mono text-xs">
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg space-y-2">
            <div className="font-bold text-slate-900 text-xs uppercase border-b border-slate-200 pb-2 font-sans">
              Concordance Factor Decomposition
            </div>

            <div className="space-y-2 text-[11px]">
              <div className="flex justify-between text-slate-700">
                <span>Semantic BoQ Concordance:</span>
                <strong className="text-red-700 font-extrabold">92% Match</strong>
              </div>
              <div className="text-[10px] text-slate-500 font-sans">
                41 out of 44 structural specification clauses and masonry line items are identical word-for-word.
              </div>

              <div className="flex justify-between text-slate-700 pt-1 border-t border-slate-200">
                <span>Geospatial Proximity Offset:</span>
                <strong className="text-red-700 font-extrabold">380 meters</strong>
              </div>
              <div className="text-[10px] text-slate-500 font-sans">
                Direct spatial co-location risk within identical revenue village and cadastral survey block.
              </div>

              <div className="flex justify-between text-slate-700 pt-1 border-t border-slate-200">
                <span>Beneficiary &amp; Purpose Category:</span>
                <strong className="text-red-700 font-extrabold">96% Overlap</strong>
              </div>
            </div>
          </div>

          <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg space-y-2">
            <div className="font-bold text-slate-900 text-xs uppercase border-b border-slate-200 pb-2 font-sans">
              Cadastral Satellite Overlay (Co-Location Verification)
            </div>

            <div className="bg-slate-100 border border-slate-200 rounded p-3 h-28 flex flex-col justify-between text-[10px] text-slate-600 relative overflow-hidden font-mono">
              <div className="relative z-10 text-slate-900 font-bold">Survey Block 442/10 • Radial Offset: 380m</div>
              <div className="relative z-10 flex justify-between">
                <span>Candidate Pin A (2026)</span>
                <span className="text-red-700 font-bold">Linear Vector Match</span>
                <span>Historical Pin B (2024)</span>
              </div>
            </div>

            <div className="pt-1 flex justify-between text-[10px] font-mono">
              <span className="text-slate-500">Cadastral Registry Token: TN-CO-KMV-2026-0902</span>
              <button onClick={() => navigate('/gis-map')} className="text-blue-700 hover:underline font-bold">
                Open GIS Full Spatial Sandbox &gt;
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Forensic Queue: Potential Cross-Scheme Duplicates Table */}
      <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-4 font-mono text-xs">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3 font-sans">
          <div>
            <div className="text-xs font-bold text-slate-900 uppercase font-mono">
              Forensic Queue: Potential Cross-Scheme Duplicates
            </div>
            <div className="text-[11px] text-slate-500">
              System ranked by multimodal similarity coefficient descending
            </div>
          </div>
          <span className="text-slate-500 text-[11px]">Showing 4 of 184 Critical</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 text-[10px] uppercase text-slate-500 font-bold">
                <th className="p-3.5">Flagged Pair (Candidate vs Benchmark)</th>
                <th className="p-3.5">Sectors &amp; Location</th>
                <th className="p-3.5 text-center">Semantic Sim</th>
                <th className="p-3.5 text-center">Radial Offset</th>
                <th className="p-3.5 text-center">Risk Score</th>
                <th className="p-3.5 text-right">Forensic Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {metrics.candidateList.map((item, idx) => (
                <tr key={idx} className="hover:bg-slate-50 transition-colors">
                  <td className="p-3.5 font-bold text-slate-900 font-sans">
                    {item.flaggedPair}
                    <div className="text-[10px] text-slate-500 font-normal font-mono">{item.title}</div>
                  </td>
                  <td className="p-3.5 text-slate-700 font-sans">
                    {item.sectors}
                    <div className="text-[10px] text-slate-500 font-mono">{item.location}</div>
                  </td>
                  <td className="p-3.5 text-center text-red-700 font-bold">{item.semanticSim}</td>
                  <td className="p-3.5 text-center text-slate-700 font-bold">{item.radialOffset}</td>
                  <td className="p-3.5 text-center">
                    <span className="px-2.5 py-0.5 bg-red-50 text-red-800 border border-red-200 rounded font-bold text-[10px]">
                      {item.riskScore}
                    </span>
                  </td>
                  <td className="p-3.5 text-right">
                    <button
                      onClick={() => navigate(`/project/${item.projectCodeA}`)}
                      className="px-3.5 py-1.5 bg-red-700 hover:bg-red-800 text-white font-bold rounded-md text-xs transition-colors"
                    >
                      Inspect Pair
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Statutory Triage Action Desk Bar */}
      <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-sm flex flex-wrap items-center justify-between gap-4 font-sans text-xs">
        <div>
          <div className="text-xs font-bold text-[#0F172A] flex items-center gap-1.5 uppercase font-mono">
            <ShieldAlert className="w-4 h-4 text-red-600" />
            <span>STATUTORY TRIAGE ACTION DESK • ENFORCEMENT DISPOSITION</span>
          </div>
          <div className="text-[11px] text-slate-500 mt-0.5">
            High similarity scores indicate semantic or radial proximity and do not confirm fraudulent double-billing. Mandatory field cadastral geo-verification and structural ledger review are required prior to any fund clawback or executive stop-order.
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 font-mono">
          <button
            onClick={() => setSurveyDispatched(true)}
            className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-lg transition-all"
          >
            {surveyDispatched ? '✓ Cadastral Survey Dispatched' : 'Dispatch Field Cadastral Survey'}
          </button>

          <button
            onClick={() => setIsCaseModalOpen(true)}
            className="px-5 py-2 bg-red-700 hover:bg-red-800 text-white font-bold rounded-lg shadow-sm flex items-center gap-1.5 transition-colors"
          >
            <FileCheck className="w-4 h-4" />
            <span>Create Formal Review Case (RN-2026)</span>
          </button>
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

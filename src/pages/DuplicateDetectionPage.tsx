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
      <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl shadow-gov-md flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest flex items-center gap-1.5">
            <Search className="w-4 h-4 text-blue-400" />
            <span>AI INTELLIGENCE • ALGORITHMIC FORENSIC HUB • DUPLICATE DETECTION MODULE</span>
          </div>
          <h1 className="text-xl font-extrabold text-white tracking-tight font-mono mt-0.5">
            Duplicate &amp; Similar Work Detection Engine
          </h1>
          <div className="text-xs text-slate-400 font-mono mt-1">
            Identify potentially duplicated or highly similar public works using NLP semantic embeddings and geospatial cadastral intelligence across parallel fiscal allocations.
          </div>
        </div>

        <div className="flex items-center gap-3 font-mono text-xs">
          <span className="px-2.5 py-1 bg-emerald-950/80 border border-emerald-800 text-emerald-400 font-bold rounded">
            BERT BERT-Gov-In Core v2.1
          </span>
          <button
            onClick={() => window.print()}
            className="px-3.5 py-1.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded flex items-center gap-1.5 shadow-sm"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Forensic Ledger Export</span>
          </button>
        </div>
      </div>

      {/* Pipeline Matrix Filters Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-900 border border-slate-800 p-3 rounded-xl font-mono text-xs">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="text-slate-400">Radius:</span>
            <select
              value={selectedRadius}
              onChange={(e) => setSelectedRadius(e.target.value)}
              aria-label="Proximity Radius Filter"
              className="bg-slate-950 text-white border border-slate-700 rounded px-2 py-1 focus:outline-none"
            >
              <option value="5.0">Within 5.0 km</option>
              <option value="2.0">Within 2.0 km</option>
              <option value="1.0">Within 1.0 km</option>
              <option value="0.5">Within 500 m</option>
            </select>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="text-slate-400">Semantic Vector:</span>
            <select
              value={selectedMatch}
              onChange={(e) => setSelectedMatch(e.target.value)}
              aria-label="Semantic Match Threshold"
              className="bg-slate-950 text-white border border-slate-700 rounded px-2 py-1 focus:outline-none"
            >
              <option value="80">&gt; 80% Cosine Match</option>
              <option value="90">&gt; 90% Critical Match</option>
              <option value="70">&gt; 70% Moderate Match</option>
            </select>
          </div>

          <span className="bg-slate-950 text-slate-300 border border-slate-800 px-2.5 py-1 rounded">
            Sector: All Infrastructure &amp; Community
          </span>
          <span className="bg-slate-950 text-slate-300 border border-slate-800 px-2.5 py-1 rounded">
            Jurisdiction: Tamil Nadu / Chennai Metro (Zone 11-15)
          </span>
        </div>

        <button
          onClick={() => {
            setSelectedRadius('5.0');
            setSelectedMatch('80');
          }}
          className="text-slate-400 hover:text-white underline text-xs"
        >
          Reset Filters
        </button>
      </div>

      {/* Top Metrics Cards Row */}
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4 font-mono">
        <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl space-y-1">
          <div className="text-slate-400 text-[10px]">WORKS SCANNED</div>
          <div className="text-2xl font-extrabold text-white">42,680</div>
          <div className="text-[10px] text-slate-400">100% Core Base FY 2025-26</div>
        </div>

        <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl space-y-1">
          <div className="text-slate-400 text-[10px]">CANDIDATE PAIRS</div>
          <div className="text-2xl font-extrabold text-blue-400">184</div>
          <div className="text-[10px] text-slate-400">0.43% Vector Flagged</div>
        </div>

        <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl space-y-1">
          <div className="text-slate-400 text-[10px]">HIGH SIM (50-80%)</div>
          <div className="text-2xl font-extrabold text-amber-400">72</div>
          <div className="text-[10px] text-slate-400">BoQ structural match</div>
        </div>

        <div className="p-3 bg-rose-950/50 border border-rose-500/40 rounded-xl space-y-1">
          <div className="text-rose-300 text-[10px]">VERY HIGH (&gt;80%)</div>
          <div className="text-2xl font-extrabold text-rose-300">31</div>
          <div className="text-[10px] text-rose-300 font-bold">Critical Attention</div>
        </div>

        <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl space-y-1">
          <div className="text-slate-400 text-[10px]">&lt;500m CO-LOCATION</div>
          <div className="text-2xl font-extrabold text-amber-400">46</div>
          <div className="text-[10px] text-slate-400">Cadastral parcel overlap</div>
        </div>

        <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl space-y-1">
          <div className="text-slate-400 text-[10px]">PRIORITY VERIFICATION</div>
          <div className="text-2xl font-extrabold text-emerald-400">58</div>
          <div className="text-[10px] text-slate-400">Pending Human Triage</div>
        </div>
      </div>

      {/* Multimodal Architecture Diagram */}
      <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl space-y-3 font-mono text-xs shadow-gov-md">
        <div className="flex justify-between items-center border-b border-slate-800 pb-2">
          <div className="font-bold text-white uppercase">
            End-to-End Multimodal Similarity Architecture
          </div>
          <span className="text-[10px] text-slate-400">MoSPI BERT-Gov-In v2.1 Engine</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-7 gap-2 text-center text-[10px]">
          <div className="p-2 bg-slate-950 border border-slate-800 rounded">
            <div className="text-slate-400 text-[9px]">INPUT STAGE</div>
            <div className="font-bold text-white mt-1">Work Description &amp; BoQ</div>
          </div>
          <div className="p-2 bg-slate-950 border border-slate-800 rounded">
            <div className="text-slate-400 text-[9px]">NLP VECTORIZER</div>
            <div className="font-bold text-blue-400 mt-1">BERT-Gov-In Embedding</div>
          </div>
          <div className="p-2 bg-slate-950 border border-slate-800 rounded">
            <div className="text-slate-400 text-[9px]">CATEGORY MATCH</div>
            <div className="font-bold text-white mt-1">Work Categorization</div>
          </div>
          <div className="p-2 bg-slate-950 border border-slate-800 rounded">
            <div className="text-slate-400 text-[9px]">CADASTRAL GIS</div>
            <div className="font-bold text-emerald-400 mt-1">RTK-GPS Haversine</div>
          </div>
          <div className="p-2 bg-slate-950 border border-slate-800 rounded">
            <div className="text-slate-400 text-[9px]">BOQ LINE MATCH</div>
            <div className="font-bold text-amber-400 mt-1">Soft Unit Variance</div>
          </div>
          <div className="p-2 bg-slate-950 border border-slate-800 rounded">
            <div className="text-slate-400 text-[9px]">SYNTHESIZED INDEX</div>
            <div className="font-bold text-rose-400 mt-1">Composite Risk Score</div>
          </div>
          <div className="p-2 bg-rose-950 border border-rose-500/60 rounded">
            <div className="text-rose-300 text-[9px]">DECISION STEP</div>
            <div className="font-bold text-rose-200 mt-1">Statutory Triage</div>
          </div>
        </div>
      </div>

      {/* Critical Pair Under Investigation: Dual-Project Concordance Analysis */}
      <div className="bg-slate-900 border border-rose-500/60 rounded-xl p-5 shadow-gov-lg space-y-4 font-mono text-xs">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div>
            <div className="text-xs font-bold text-rose-400 uppercase tracking-widest flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse" />
              <span>CRITICAL PAIR UNDER INVESTIGATION • Pair Reference: PAIR-2026-CH-0402</span>
            </div>
            <h3 className="font-extrabold text-white text-base mt-0.5">
              Dual-Project Forensic Concordance Analysis
            </h3>
          </div>

          <div className="p-2.5 bg-rose-950 border border-rose-500 rounded text-center">
            <div className="text-[10px] text-slate-400">OVERALL DUPLICATE RISK</div>
            <div className="text-2xl font-extrabold text-rose-300">88 <span className="text-xs text-slate-400 font-normal">/ 100</span></div>
          </div>
        </div>

        {/* Side-by-side Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Candidate Work */}
          <div className="p-4 bg-slate-950 border border-blue-500/40 rounded-lg space-y-3">
            <div className="flex justify-between items-center text-[10px]">
              <span className="bg-blue-950 text-blue-300 border border-blue-800 px-2 py-0.5 rounded font-bold">CANDIDATE WORK (UNDER REVIEW)</span>
              <span className="font-bold text-white">{comparison.currentProject.projectCode}</span>
            </div>

            <div className="font-bold text-white text-sm">
              {comparison.currentProject.title}
            </div>

            <div className="space-y-1 text-[11px] text-slate-300 pt-2 border-t border-slate-800">
              <div className="flex justify-between">
                <span>Location:</span>
                <span className="text-white">Kovalam, Chennai (12.7912° N, 80.2514° E)</span>
              </div>
              <div className="flex justify-between">
                <span>Sanction:</span>
                <span className="text-emerald-400 font-bold">₹48.50 Lakh (2025-26)</span>
              </div>
              <div className="flex justify-between">
                <span>Agency:</span>
                <span className="text-slate-200">DRDA Chennai Div-II</span>
              </div>
              <div className="flex justify-between">
                <span>Contractor:</span>
                <span className="text-slate-200">Apex Bay Infratech Pvt Ltd</span>
              </div>
            </div>

            <div className="p-2 bg-slate-900 border border-slate-800 rounded text-[10px] text-amber-300">
              Physical Execution: 38% • Disbursed: ₹37.80 L (78%)<br />
              <span className="text-rose-400 font-bold">Anomaly Signal: 40% Fiscal Disbursal Lead ahead of Physical Ground Verification</span>
            </div>
          </div>

          {/* Historical Benchmark Work */}
          <div className="p-4 bg-slate-950 border border-amber-500/40 rounded-lg space-y-3">
            <div className="flex justify-between items-center text-[10px]">
              <span className="bg-amber-950 text-amber-300 border border-amber-800 px-2 py-0.5 rounded font-bold">HISTORICAL BENCHMARK WORK (COMPLETED)</span>
              <span className="font-bold text-white">{comparison.historicalWork.projectCode}</span>
            </div>

            <div className="font-bold text-white text-sm">
              {comparison.historicalWork.title}
            </div>

            <div className="space-y-1 text-[11px] text-slate-300 pt-2 border-t border-slate-800">
              <div className="flex justify-between">
                <span>Location:</span>
                <span className="text-white">Kovalam, Chennai (12.7909° N, 80.2526° E)</span>
              </div>
              <div className="flex justify-between">
                <span>Sanction:</span>
                <span className="text-emerald-400 font-bold">₹22.30 Lakh (Completed 2024)</span>
              </div>
              <div className="flex justify-between">
                <span>Agency:</span>
                <span className="text-slate-200">DRDA Chennai Div-II</span>
              </div>
              <div className="flex justify-between">
                <span>Contractor:</span>
                <span className="text-slate-200">Sri Balaji Coastal Infra</span>
              </div>
            </div>

            <div className="p-2 bg-slate-900 border border-slate-800 rounded text-[10px] text-emerald-400">
              Physical Execution: 100% • Disbursed: ₹22.30 L (100%)<br />
              Archived in MoSPI Asset Register • UC Submitted &amp; Audited
            </div>
          </div>
        </div>

        {/* Concordance Factor Decomposition */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div className="p-4 bg-slate-950 border border-slate-800 rounded-lg space-y-2">
            <div className="font-bold text-white text-xs uppercase border-b border-slate-800 pb-2">
              Concordance Factor Decomposition
            </div>

            <div className="space-y-2 text-[11px]">
              <div className="flex justify-between text-slate-300">
                <span>Semantic BoQ Concordance:</span>
                <strong className="text-rose-400">92% Match</strong>
              </div>
              <div className="text-[10px] text-slate-400">
                41 out of 44 structural specification clauses and masonry line items are identical word-for-word.
              </div>

              <div className="flex justify-between text-slate-300 pt-1 border-t border-slate-800/80">
                <span>Geospatial Proximity Offset:</span>
                <strong className="text-rose-400">380 meters</strong>
              </div>
              <div className="text-[10px] text-slate-400">
                Direct spatial co-location risk within identical revenue village and cadastral survey block.
              </div>

              <div className="flex justify-between text-slate-300 pt-1 border-t border-slate-800/80">
                <span>Beneficiary &amp; Purpose Category:</span>
                <strong className="text-rose-400">96% Overlap</strong>
              </div>
            </div>
          </div>

          <div className="p-4 bg-slate-950 border border-slate-800 rounded-lg space-y-2">
            <div className="font-bold text-white text-xs uppercase border-b border-slate-800 pb-2">
              Cadastral Satellite Overlay (Co-Location Verification)
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded p-3 h-28 flex flex-col justify-between text-[10px] text-slate-400 relative overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:1rem_1rem] opacity-30" />
              <div className="relative z-10 text-white font-bold">Survey Block 442/10 • Radial Offset: 380m</div>
              <div className="relative z-10 flex justify-between">
                <span>Candidate Pin A (2026)</span>
                <span className="text-rose-400 font-bold">Linear Vector Match</span>
                <span>Historical Pin B (2024)</span>
              </div>
            </div>

            <div className="pt-1 flex justify-between text-[10px]">
              <span className="text-slate-400">Cadastral Registry Token: TN-CO-KMV-2026-0902</span>
              <button onClick={() => navigate('/gis-map')} className="text-blue-400 hover:underline">
                Open GIS Full Spatial Sandbox &gt;
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Forensic Queue: Potential Cross-Scheme Duplicates Table */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 shadow-gov-md space-y-4 font-mono text-xs">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div>
            <div className="text-xs font-bold text-white uppercase">
              Forensic Queue: Potential Cross-Scheme Duplicates
            </div>
            <div className="text-[11px] text-slate-400">
              System ranked by multimodal similarity coefficient descending
            </div>
          </div>
          <span className="text-slate-400 text-[11px]">Showing 4 of 184 Critical</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-800 text-[10px] uppercase text-slate-400">
                <th className="p-3">Flagged Pair (Candidate vs Benchmark)</th>
                <th className="p-3">Sectors &amp; Location</th>
                <th className="p-3 text-center">Semantic Sim</th>
                <th className="p-3 text-center">Radial Offset</th>
                <th className="p-3 text-center">Risk Score</th>
                <th className="p-3 text-right">Forensic Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {metrics.candidateList.map((item, idx) => (
                <tr key={idx} className="hover:bg-slate-850 transition-colors">
                  <td className="p-3 font-bold text-white">
                    {item.flaggedPair}
                    <div className="text-[10px] text-slate-400 font-normal">{item.title}</div>
                  </td>
                  <td className="p-3 text-slate-300">
                    {item.sectors}
                    <div className="text-[10px] text-slate-400">{item.location}</div>
                  </td>
                  <td className="p-3 text-center text-rose-400 font-bold">{item.semanticSim}</td>
                  <td className="p-3 text-center text-slate-300 font-bold">{item.radialOffset}</td>
                  <td className="p-3 text-center">
                    <span className="px-2 py-0.5 bg-rose-950 text-rose-300 border border-rose-800 rounded font-bold text-[10px]">
                      {item.riskScore}
                    </span>
                  </td>
                  <td className="p-3 text-right">
                    <button
                      onClick={() => navigate(`/project/${item.projectCodeA}`)}
                      className="px-3 py-1 bg-rose-600 hover:bg-rose-500 text-white font-bold rounded text-xs"
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
      <div className="bg-slate-900 border border-slate-700 p-4 rounded-xl shadow-gov-lg flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
        <div>
          <div className="text-xs font-bold text-white flex items-center gap-1.5 uppercase">
            <ShieldAlert className="w-4 h-4 text-rose-400" />
            <span>STATUTORY TRIAGE ACTION DESK • ENFORCEMENT DISPOSITION</span>
          </div>
          <div className="text-[11px] text-slate-400">
            High similarity scores indicate semantic or radial proximity and do not confirm fraudulent double-billing. Mandatory field cadastral geo-verification and structural ledger review are required prior to any fund clawback or executive stop-order.
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => setSurveyDispatched(true)}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded shadow transition-all"
          >
            {surveyDispatched ? '✓ Cadastral Survey Dispatched' : 'Dispatch Field Cadastral Survey'}
          </button>

          <button
            onClick={() => setIsCaseModalOpen(true)}
            className="px-5 py-2 bg-rose-600 hover:bg-rose-500 text-white font-extrabold rounded shadow-md flex items-center gap-1.5"
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

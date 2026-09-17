import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FEATURED_PROJECT_1042 } from '../../server/mockData';
import { ExplainRiskDrawer } from '../components/forensics/ExplainRiskDrawer';
import { ReviewCaseModal } from '../components/cases/ReviewCaseModal';
import {
  Sparkles,
  Search,
  Send,
  FileCheck,
  ExternalLink,
  ShieldCheck,
  AlertTriangle,
  FileText,
  MapPin,
  Clock,
  ArrowRight,
  ThumbsUp,
  ThumbsDown,
  Copy,
  Layers,
  ChevronRight,
  Database,
  Building2
} from 'lucide-react';

export const AiAnalystPage: React.FC = () => {
  const navigate = useNavigate();
  const [promptQuery, setPromptQuery] = useState('');
  const [isCaseModalOpen, setIsCaseModalOpen] = useState(false);
  const [isExplainOpen, setIsExplainOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const suggestedInquiries = [
    { text: 'Why is Project MPL-2026-1042 flagged?', active: true },
    { text: 'Show high-risk works in Chennai coastal belt', active: false },
    { text: 'Which agencies have consecutive milestone delays?', active: false },
    { text: 'Find duplicate work patterns in Tiruvallur', active: false }
  ];

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!promptQuery.trim()) return;
    setIsExplainOpen(true);
    setPromptQuery('');
  };

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="p-4 lg:p-6 space-y-6 max-w-[1700px] mx-auto font-sans">
      {/* Header Bar */}
      <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-sm flex flex-wrap items-center justify-between gap-4 font-sans">
        <div>
          <div className="text-xs font-mono font-bold text-blue-700 uppercase tracking-widest flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-blue-700" />
            <span>AI INTELLIGENCE • MPLADS AI ANALYST COPILOT</span>
          </div>
          <h1 className="text-2xl font-extrabold text-[#0F172A] tracking-tight font-sans mt-0.5">
            MPLADS AI Analyst — Natural Language Decision-Support Copilot
          </h1>
          <div className="text-xs text-slate-500 font-sans mt-1">
            Active Jurisdiction: <strong className="text-slate-800">Tamil Nadu Works (Chennai District Focus)</strong> • Session <span className="text-blue-700 font-bold">#TN-COGNITIVE-8819</span>
          </div>
        </div>

        <div className="flex items-center gap-3 font-mono text-xs">
          <span className="px-3 py-1.5 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-lg font-bold">
            eSAKSHI v2.4 Linked
          </span>
          <span className="px-3 py-1.5 bg-blue-50 border border-blue-200 text-blue-800 rounded-lg font-bold">
            PFMS Core Disbursal Feed
          </span>
          <button
            onClick={() => window.print()}
            className="px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-lg font-bold flex items-center gap-1.5 shadow-sm transition-colors"
          >
            <FileText className="w-4 h-4" />
            <span>Export Audit Transcript</span>
          </button>
        </div>
      </div>

      {/* Statutory Compliance Note */}
      <div className="p-3.5 bg-blue-50 border border-blue-200 rounded-lg text-xs text-blue-900 flex items-start gap-2.5 font-sans">
        <ShieldCheck className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
        <div>
          <strong className="text-blue-950 uppercase font-mono text-[11px]">Statutory Compliance Note: </strong>
          AI inferences serve statutory decision-support workflows. Answers are synthesized strictly from authorized structured databases (eSAKSHI, PFMS, Bhuvan GIS).
        </div>
      </div>

      {/* Suggested Inquiries Chips */}
      <div className="space-y-2 font-sans">
        <div className="text-[10px] font-bold font-mono text-slate-500 uppercase tracking-widest flex items-center gap-2">
          <span>RECOMMENDED FORENSIC INQUIRIES • CHENNAI JURISDICTION</span>
          <span className="text-blue-700">Model Confidence Threshold: &gt;95%</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {suggestedInquiries.map((chip, idx) => (
            <button
              key={idx}
              onClick={() => {
                if (chip.text.includes('MPL-2026-1042')) setIsExplainOpen(true);
              }}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 ${
                chip.active
                  ? 'bg-red-50 text-red-800 border border-red-200 font-bold shadow-sm'
                  : 'bg-white hover:bg-slate-50 text-slate-700 border border-slate-200'
              }`}
            >
              <span>{chip.text}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Grid: Chat Stream vs Target Dossier Panel */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 font-sans">
        {/* Left Column: Conversational Stream */}
        <div className="xl:col-span-8 space-y-6">
          {/* User Message Box */}
          <div className="p-4 bg-white border border-slate-200 rounded-xl space-y-2 shadow-sm font-sans">
            <div className="flex items-center justify-between text-xs font-mono text-slate-500 border-b border-slate-100 pb-2">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded bg-blue-700 text-white font-bold flex items-center justify-center text-[10px]">
                  DM
                </div>
                <span className="font-bold text-slate-900 font-sans">Monitoring Officer (TNDIST-44 / S. Selvam, IAS)</span>
                <span className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded text-[10px] font-bold">DISTRICT MAGISTRATE</span>
              </div>
              <span>11:42:08 IST • Ledger Signature #V982</span>
            </div>

            <div className="text-sm font-semibold text-slate-900 font-sans">
              Why is Project MPL-2026-1042 flagged as High Risk, and what should the monitoring officer inspect on site?
            </div>
          </div>

          {/* AI Forensic Synthesis Card */}
          <div className="p-5 bg-white border-2 border-red-200 rounded-xl space-y-5 shadow-sm">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-3 font-mono">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-red-50 text-red-700 border border-red-200">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-extrabold text-[#0F172A] text-sm font-mono">
                    Sentinel AI Forensic Synthesis
                  </h3>
                  <div className="text-[10px] text-slate-500 font-mono">
                    MODEL v4.2.1-PROD • Cross-referencing 14 Geospatial &amp; Fiscal Ledger Indicators
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 font-mono text-xs">
                <span className="px-2.5 py-1 bg-red-50 text-red-800 border border-red-200 font-bold rounded">
                  RISK: 87/100 (CRITICAL DEVIATION)
                </span>
                <span className="px-2.5 py-1 bg-blue-50 text-blue-800 border border-blue-200 font-bold rounded">
                  CONFIDENCE: 96.4%
                </span>
              </div>
            </div>

            {/* Synthesis Narrative */}
            <div className="space-y-2 text-xs text-slate-700 leading-relaxed font-sans">
              <div className="font-bold text-slate-900 font-mono uppercase text-[11px]">
                EXECUTIVE FORENSIC SYNTHESIS:
              </div>
              <p>
                <strong>Project MPL-2026-1042</strong> (<em>Community Infrastructure Centre at Kovalam Coastal Reach</em>) exhibits high statistical probability of <strong className="text-red-700">financial-physical desynchronization</strong> and severe co-location redundancy with existing public assets sanctioned under State Special Area Development schemes.
              </p>
            </div>

            {/* Statistical Evidence Matrix */}
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg space-y-3 font-sans">
              <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 uppercase">
                <span>STATISTICAL EVIDENCE MATRIX (WEIGHTED FORENSIC FACTORS)</span>
                <span>P-Value &lt; 0.001 • Baseline: 412 Coastal Projects</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 font-mono">
                <div className="p-3 bg-white border border-red-200 rounded-lg space-y-1 shadow-sm">
                  <div className="text-[10px] text-slate-500 flex justify-between">
                    <span>UNIT COST OUTLAY</span>
                    <span className="text-red-700 font-bold">+2.84x</span>
                  </div>
                  <div className="text-xl font-extrabold text-[#0F172A]">₹48.50 L</div>
                  <div className="text-[10px] text-slate-500">Sanctioned Budget</div>
                  <div className="text-[10px] text-red-700 pt-1 border-t border-slate-100 font-sans">
                    District Peer Median: ₹17.80L (+172.4% above benchmark)
                  </div>
                </div>

                <div className="p-3 bg-white border border-amber-200 rounded-lg space-y-1 shadow-sm">
                  <div className="text-[10px] text-slate-500 flex justify-between">
                    <span>DISBURSEMENT LAG</span>
                    <span className="text-amber-700 font-bold">40.0% Gap</span>
                  </div>
                  <div className="text-xl font-extrabold text-[#0F172A]">₹37.83 L</div>
                  <div className="text-[10px] text-slate-500">Disbursed (78.0% of Sanction)</div>
                  <div className="text-[10px] text-amber-800 pt-1 border-t border-slate-100 font-sans">
                    Physical: 38.0% Completed (Stage: Plinth stalled 94 days)
                  </div>
                </div>

                <div className="p-3 bg-white border border-amber-200 rounded-lg space-y-1 shadow-sm">
                  <div className="text-[10px] text-slate-500 flex justify-between">
                    <span>REDUNDANCY VECTOR</span>
                    <span className="text-red-700 font-bold">92% Match</span>
                  </div>
                  <div className="text-xl font-extrabold text-[#0F172A]">380m</div>
                  <div className="text-[10px] text-slate-500">Spatial Offset from Prior Asset</div>
                  <div className="text-[10px] text-amber-800 pt-1 border-t border-slate-100 font-sans">
                    Existing Work: TN-SAD-2024-09 (Identical scope &amp; beneficiary group)
                  </div>
                </div>
              </div>
            </div>

            {/* Explainable AI Anomaly Vector Weights */}
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg space-y-2 font-sans">
              <div className="flex items-center justify-between text-[10px] font-mono text-slate-500">
                <span>EXPLAINABLE AI ANOMALY VECTOR WEIGHTS</span>
                <span>SHAP Value Decomposition</span>
              </div>

              <div className="grid grid-cols-4 gap-2 text-center font-mono text-[11px]">
                <div className="p-2 bg-white rounded border border-slate-200">
                  <div className="text-slate-500 text-[9px]">Timeline Stagnation</div>
                  <div className="font-bold text-red-700">+38%</div>
                </div>
                <div className="p-2 bg-white rounded border border-slate-200">
                  <div className="text-slate-500 text-[9px]">Contractor Load Factor</div>
                  <div className="font-bold text-amber-700">+29%</div>
                </div>
                <div className="p-2 bg-white rounded border border-slate-200">
                  <div className="text-slate-500 text-[9px]">Cost Outlay Delta</div>
                  <div className="font-bold text-blue-700">+21%</div>
                </div>
                <div className="p-2 bg-white rounded border border-slate-200">
                  <div className="text-slate-500 text-[9px]">Geographic Redundancy</div>
                  <div className="font-bold text-red-700">+12%</div>
                </div>
              </div>
            </div>

            {/* Mandatory Field Inspection Protocol */}
            <div className="space-y-2 font-sans">
              <div className="text-xs font-bold font-mono text-red-700 flex items-center gap-1.5 uppercase">
                <AlertTriangle className="w-4 h-4 text-red-600" />
                <span>Mandatory Field Inspection Protocol for Monitoring Officer</span>
              </div>

              <div className="space-y-2 text-xs font-sans">
                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-100 text-red-800 font-mono font-bold flex items-center justify-center shrink-0 text-xs border border-red-200">
                    01
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Substructure &amp; Column Reinforcement Verification</div>
                    <div className="text-slate-600 text-[11px] mt-0.5 leading-relaxed">
                      PFMS disbursals cite completed plinth slab casting with 100% material procurement billed. Field agent must execute core compressive strength checks and confirm footing depth against approved CPWD schedule.
                    </div>
                  </div>
                </div>

                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-amber-100 text-amber-800 font-mono font-bold flex items-center justify-center shrink-0 text-xs border border-amber-200">
                    02
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Measurement Book #44 Voucher Cross-Audit</div>
                    <div className="text-slate-600 text-[11px] mt-0.5 leading-relaxed">
                      Examine physical entry pages 31-39 in MB #44 signed by Assistant Engineer on 16-Jan-2026. Verify whether vendor invoice batch #VK-4912 corresponds to delivered TMT tonnage stored on site.
                    </div>
                  </div>
                </div>

                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-800 font-mono font-bold flex items-center justify-center shrink-0 text-xs border border-blue-200">
                    03
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Independent Cadastral Boundary Survey</div>
                    <div className="text-slate-600 text-[11px] mt-0.5 leading-relaxed">
                      Deploy handheld RTK-GPS at corner pegs (12.7912° N, 80.2489° E). Confirm if current construction footprint encroaches or duplicates the plot earmarked for Tamil Nadu Rural Development hall (TN-SAD-2024).
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 font-sans">
              <div className="flex items-center gap-2 font-mono">
                <button
                  onClick={() => navigate('/project/MPL-2026-1042')}
                  className="px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-lg text-xs font-mono font-bold flex items-center gap-1.5 shadow-sm transition-colors"
                >
                  <FileText className="w-4 h-4" />
                  <span>Open Full Project Dossier</span>
                </button>

                <button
                  onClick={() => setIsCaseModalOpen(true)}
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-lg text-xs font-mono font-semibold flex items-center gap-1.5 border border-slate-200 transition-colors"
                >
                  <FileCheck className="w-4 h-4 text-blue-700" />
                  <span>Initiate Review Case</span>
                </button>
              </div>

              <div className="flex items-center gap-2 text-slate-500">
                <button onClick={handleCopy} aria-label="Copy Inferences" className="p-1.5 hover:text-slate-900 rounded hover:bg-slate-100 transition-colors">
                  <Copy className="w-4 h-4" />
                </button>
                {copied && <span className="text-[10px] font-mono text-emerald-700 font-bold">Copied!</span>}
                <button aria-label="Thumbs Up" className="p-1.5 hover:text-emerald-700 rounded hover:bg-slate-100 transition-colors">
                  <ThumbsUp className="w-4 h-4" />
                </button>
                <button aria-label="Thumbs Down" className="p-1.5 hover:text-red-700 rounded hover:bg-slate-100 transition-colors">
                  <ThumbsDown className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Interactive Query Input Bar */}
          <form onSubmit={handleSend} className="bg-white border border-slate-200 rounded-xl p-3.5 space-y-2 shadow-sm font-sans">
            <div className="flex items-center gap-2 bg-slate-50 border border-slate-300 rounded-lg p-2 focus-within:border-blue-600 transition-all">
              <Search className="w-4 h-4 text-blue-700 shrink-0" />
              <input
                type="text"
                value={promptQuery}
                onChange={(e) => setPromptQuery(e.target.value)}
                placeholder="Compare contractor velocity across Kovalam belt..."
                className="w-full bg-transparent text-slate-900 placeholder-slate-400 text-xs focus:outline-none font-sans"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-lg text-xs font-mono font-bold flex items-center gap-1.5 shadow-sm shrink-0 transition-colors"
              >
                <span>Execute Analysis</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 px-1">
              <div>Ledger Block Hash: <span className="text-slate-700 font-bold">#7104-0x98AF...21E</span></div>
              <div>Realtime Query Latency: <span className="text-emerald-700 font-bold">240ms</span> • Press <kbd className="bg-slate-100 border border-slate-300 px-1.5 py-0.5 rounded text-slate-700 font-bold">Ctrl+Enter</kbd></div>
            </div>
          </form>
        </div>

        {/* Right Column: Active Target Dossier & Institutional Feeds */}
        <div className="xl:col-span-4 space-y-6 font-sans">
          {/* Active Target Dossier Widget */}
          <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-4 shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3 font-mono">
              <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900">
                <FileText className="w-4 h-4 text-blue-700" />
                <span>Active Target Dossier</span>
              </div>
              <span className="px-2.5 py-0.5 rounded bg-red-50 text-red-800 border border-red-200 text-[10px] font-mono font-bold">
                HIGH ANOMALY
              </span>
            </div>

            <div>
              <h3 className="font-extrabold text-[#0F172A] text-sm font-sans">
                MPL-2026-1042: Kovalam Coastal Community Infrastructure Hub
              </h3>
              <div className="text-[10px] text-slate-500 font-mono mt-1">
                Nodal District: <strong>Chennai South (Reach 4)</strong> • Block: St. Thomas Mount
              </div>
            </div>

            {/* Satellite Map Thumbnail */}
            <div className="bg-slate-100 border border-slate-200 rounded-lg p-3 h-32 relative flex flex-col justify-between font-mono text-xs overflow-hidden">
              <div className="relative z-10 text-[10px] text-slate-600 flex justify-between font-bold">
                <span>12.7912° N, 80.2489° E</span>
                <span className="text-emerald-700 font-bold">Satellite Sync: 48h ago</span>
              </div>
              <div className="relative z-10 text-center font-bold text-slate-900 text-xs bg-white/90 p-1.5 rounded-md border border-slate-200 shadow-sm font-sans">
                DRDA Division-I Coastal Zone
              </div>
            </div>

            <div className="space-y-1.5 font-mono text-xs text-slate-700 pt-1">
              <div className="flex justify-between">
                <span className="text-slate-500">Implementing Agency:</span>
                <span className="text-slate-900 font-semibold font-sans">TN Maritime Dev Agency</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Sanction Date:</span>
                <span className="text-slate-900">14-Aug-2025</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Stipulated Completion:</span>
                <span className="text-red-700 font-bold">28-Feb-2026 (Overdue)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Contractor Entity:</span>
                <span className="text-slate-900 font-sans">Apex Bay Infratech LLP</span>
              </div>
            </div>
          </div>

          {/* Verifiable Institutional Feeds */}
          <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-3 shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3 font-mono">
              <div className="text-xs font-bold text-slate-900 uppercase">
                VERIFIABLE INSTITUTIONAL FEEDS
              </div>
              <span className="text-[10px] font-mono text-emerald-700 font-bold">3 Verified</span>
            </div>

            <div className="space-y-2 font-mono text-xs">
              <a
                href="#esakshi"
                onClick={(e) => e.preventDefault()}
                className="p-3 bg-slate-50 border border-slate-200 hover:border-blue-400 rounded-lg flex items-center justify-between text-slate-800 transition-all group"
              >
                <div>
                  <div className="font-bold text-slate-900 text-xs font-sans">eSAKSHI Portal Entry</div>
                  <div className="text-[10px] text-slate-500">WRK-TN-2025-804128</div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-700" />
              </a>

              <a
                href="#pfms"
                onClick={(e) => e.preventDefault()}
                className="p-3 bg-slate-50 border border-slate-200 hover:border-blue-400 rounded-lg flex items-center justify-between text-slate-800 transition-all group"
              >
                <div>
                  <div className="font-bold text-slate-900 text-xs font-sans">PFMS Sanction Voucher</div>
                  <div className="text-[10px] text-slate-500">VCH-2026-CH-89419</div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-700" />
              </a>

              <a
                href="#bhuvan"
                onClick={(e) => e.preventDefault()}
                className="p-3 bg-slate-50 border border-slate-200 hover:border-blue-400 rounded-lg flex items-center justify-between text-slate-800 transition-all group"
              >
                <div>
                  <div className="font-bold text-slate-900 text-xs font-sans">Bhuvan / ISRO Geospatial Token</div>
                  <div className="text-[10px] text-slate-500">GEO-CAD-TN-KOV-88</div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-700" />
              </a>
            </div>
          </div>

          {/* Session Investigation Thread */}
          <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-3 shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3 font-mono">
              <div className="text-xs font-bold text-slate-900 uppercase font-mono">
                SESSION INVESTIGATION THREAD
              </div>
              <button onClick={() => {}} className="text-[10px] font-mono text-slate-500 hover:text-slate-900">
                Clear Thread
              </button>
            </div>

            <div className="space-y-2 font-mono text-xs text-slate-700">
              <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200">
                <div className="font-bold text-slate-900 font-sans">1. Summary of Coastal Works in Chennai...</div>
                <div className="text-[10px] text-slate-500">11:15 AM • 8 Works Evaluated</div>
              </div>
              <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200">
                <div className="font-bold text-slate-900 font-sans">2. Discrepancy scan between MB #44 &amp;...</div>
                <div className="text-[10px] text-slate-500">11:28 AM • 3 Anomalies Detected</div>
              </div>
              <div className="p-2.5 bg-red-50 border border-red-200 rounded-lg">
                <div className="font-bold text-red-800 font-sans">3. Flagged analysis for MPL-2026-1042...</div>
                <div className="text-[10px] text-slate-500">11:42 AM • High Risk Verification</div>
              </div>
            </div>

            <button
              onClick={() => window.print()}
              className="w-full py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-mono font-bold text-xs rounded-lg shadow-sm transition-all flex items-center justify-center gap-1.5 mt-2"
            >
              <FileText className="w-4 h-4 text-blue-700" />
              <span>Compile Formal PDF Briefing</span>
            </button>
          </div>
        </div>
      </div>

      {/* Drawers & Modals */}
      <ExplainRiskDrawer
        isOpen={isExplainOpen}
        onClose={() => setIsExplainOpen(false)}
        projectCode="MPL-2026-1042"
      />

      <ReviewCaseModal
        isOpen={isCaseModalOpen}
        onClose={() => setIsCaseModalOpen(false)}
        projectCode="MPL-2026-1042"
      />
    </div>
  );
};

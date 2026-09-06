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
      <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl shadow-gov-md flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span>AI INTELLIGENCE • MPLADS AI ANALYST COPILOT</span>
          </div>
          <h1 className="text-xl font-extrabold text-white tracking-tight font-mono mt-0.5">
            MPLADS AI Analyst — Natural Language Decision-Support Copilot
          </h1>
          <div className="text-xs text-slate-400 font-mono mt-1">
            Active Jurisdiction: <strong className="text-slate-200">Tamil Nadu Works (Chennai District Focus)</strong> • Session <span className="text-blue-400">#TN-COGNITIVE-8819</span>
          </div>
        </div>

        <div className="flex items-center gap-3 font-mono text-xs">
          <span className="px-2.5 py-1 bg-emerald-950/80 border border-emerald-800 text-emerald-400 rounded font-bold">
            eSAKSHI v2.4 Linked
          </span>
          <span className="px-2.5 py-1 bg-blue-950/80 border border-blue-800 text-blue-300 rounded font-bold">
            PFMS Core Disbursal Feed
          </span>
          <button
            onClick={() => window.print()}
            className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded font-bold flex items-center gap-1.5"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Export Audit Transcript</span>
          </button>
        </div>
      </div>

      {/* Statutory Compliance Note */}
      <div className="p-3 bg-blue-950/40 border border-blue-500/30 rounded-lg text-xs text-blue-200 flex items-start gap-2.5">
        <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
        <div>
          <strong className="text-blue-300 uppercase font-mono text-[11px]">Statutory Compliance Note: </strong>
          AI inferences serve statutory decision-support workflows. Answers are synthesized strictly from authorized structured databases (eSAKSHI, PFMS, Bhuvan GIS).
        </div>
      </div>

      {/* Suggested Inquiries Chips */}
      <div className="space-y-2">
        <div className="text-[10px] font-bold font-mono text-slate-400 uppercase tracking-widest flex items-center gap-2">
          <span>RECOMMENDED FORENSIC INQUIRIES • CHENNAI JURISDICTION</span>
          <span className="text-blue-400">Model Confidence Threshold: &gt;95%</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {suggestedInquiries.map((chip, idx) => (
            <button
              key={idx}
              onClick={() => {
                if (chip.text.includes('MPL-2026-1042')) setIsExplainOpen(true);
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 ${
                chip.active
                  ? 'bg-rose-950 text-rose-300 border border-rose-600/60 font-bold shadow-sm'
                  : 'bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800'
              }`}
            >
              <span>{chip.text}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Grid: Chat Stream vs Target Dossier Panel */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
        {/* Left Column: Conversational Stream */}
        <div className="xl:col-span-8 space-y-6">
          {/* User Message Box */}
          <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-2">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400 border-b border-slate-800 pb-2">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded bg-blue-900 text-white font-bold flex items-center justify-center text-[10px]">
                  DM
                </div>
                <span className="font-bold text-white">Monitoring Officer (TNDIST-44 / S. Selvam, IAS)</span>
                <span className="bg-slate-800 px-1.5 py-0.5 rounded text-[10px]">DISTRICT MAGISTRATE</span>
              </div>
              <span>11:42:08 IST • Ledger Signature #V982</span>
            </div>

            <div className="text-sm font-semibold text-slate-100 font-sans">
              Why is Project MPL-2026-1042 flagged as High Risk, and what should the monitoring officer inspect on site?
            </div>
          </div>

          {/* AI Forensic Synthesis Card */}
          <div className="p-5 bg-slate-900 border border-rose-500/50 rounded-xl space-y-5 shadow-gov-lg">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded bg-rose-950 text-rose-400 border border-rose-800">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-extrabold text-white text-sm font-mono">
                    Sentinel AI Forensic Synthesis
                  </h3>
                  <div className="text-[10px] text-slate-400 font-mono">
                    MODEL v4.2.1-PROD • Cross-referencing 14 Geospatial & Fiscal Ledger Indicators
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 font-mono text-xs">
                <span className="px-2.5 py-1 bg-rose-950 text-rose-300 border border-rose-800 font-bold rounded">
                  RISK: 87/100 (CRITICAL DEVIATION)
                </span>
                <span className="px-2.5 py-1 bg-blue-950 text-blue-300 border border-blue-800 font-bold rounded">
                  CONFIDENCE: 96.4%
                </span>
              </div>
            </div>

            {/* Synthesis Narrative */}
            <div className="space-y-2 text-xs text-slate-200 leading-relaxed">
              <div className="font-bold text-white font-mono uppercase text-[11px]">
                EXECUTIVE FORENSIC SYNTHESIS:
              </div>
              <p>
                <strong>Project MPL-2026-1042</strong> (<em>Community Infrastructure Centre at Kovalam Coastal Reach</em>) exhibits high statistical probability of <strong className="text-rose-400">financial-physical desynchronization</strong> and severe co-location redundancy with existing public assets sanctioned under State Special Area Development schemes.
              </p>
            </div>

            {/* Statistical Evidence Matrix */}
            <div className="p-3 bg-slate-950 border border-slate-800 rounded-lg space-y-2">
              <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 uppercase">
                <span>STATISTICAL EVIDENCE MATRIX (WEIGHTED FORENSIC FACTORS)</span>
                <span>P-Value &lt; 0.001 • Baseline: 412 Coastal Projects</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 font-mono">
                <div className="p-3 bg-slate-900 border border-rose-500/40 rounded space-y-1">
                  <div className="text-[10px] text-slate-400 flex justify-between">
                    <span>UNIT COST OUTLAY</span>
                    <span className="text-rose-400 font-bold">+2.84x</span>
                  </div>
                  <div className="text-xl font-extrabold text-white">₹48.50 L</div>
                  <div className="text-[10px] text-slate-400">Sanctioned Budget</div>
                  <div className="text-[10px] text-rose-400 pt-1 border-t border-slate-800">
                    District Peer Median: ₹17.80L (+172.4% above benchmark)
                  </div>
                </div>

                <div className="p-3 bg-slate-900 border border-amber-500/40 rounded space-y-1">
                  <div className="text-[10px] text-slate-400 flex justify-between">
                    <span>DISBURSEMENT LAG</span>
                    <span className="text-amber-400 font-bold">40.0% Gap</span>
                  </div>
                  <div className="text-xl font-extrabold text-white">₹37.83 L</div>
                  <div className="text-[10px] text-slate-400">Disbursed (78.0% of Sanction)</div>
                  <div className="text-[10px] text-amber-300 pt-1 border-t border-slate-800">
                    Physical: 38.0% Completed (Stage: Plinth stalled 94 days)
                  </div>
                </div>

                <div className="p-3 bg-slate-900 border border-amber-500/40 rounded space-y-1">
                  <div className="text-[10px] text-slate-400 flex justify-between">
                    <span>REDUNDANCY VECTOR</span>
                    <span className="text-rose-400 font-bold">92% Match</span>
                  </div>
                  <div className="text-xl font-extrabold text-white">380m</div>
                  <div className="text-[10px] text-slate-400">Spatial Offset from Prior Asset</div>
                  <div className="text-[10px] text-amber-300 pt-1 border-t border-slate-800">
                    Existing Work: TN-SAD-2024-09 (Identical scope & beneficiary group)
                  </div>
                </div>
              </div>
            </div>

            {/* Explainable AI Anomaly Vector Weights */}
            <div className="p-3 bg-slate-950 border border-slate-800 rounded-lg space-y-2">
              <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
                <span>EXPLAINABLE AI ANOMALY VECTOR WEIGHTS</span>
                <span>SHAP Value Decomposition</span>
              </div>

              <div className="grid grid-cols-4 gap-2 text-center font-mono text-[11px]">
                <div className="p-2 bg-slate-900 rounded">
                  <div className="text-slate-400 text-[9px]">Timeline Stagnation</div>
                  <div className="font-bold text-rose-400">+38%</div>
                </div>
                <div className="p-2 bg-slate-900 rounded">
                  <div className="text-slate-400 text-[9px]">Contractor Load Factor</div>
                  <div className="font-bold text-amber-400">+29%</div>
                </div>
                <div className="p-2 bg-slate-900 rounded">
                  <div className="text-slate-400 text-[9px]">Cost Outlay Delta</div>
                  <div className="font-bold text-blue-400">+21%</div>
                </div>
                <div className="p-2 bg-slate-900 rounded">
                  <div className="text-slate-400 text-[9px]">Geographic Redundancy</div>
                  <div className="font-bold text-rose-400">+12%</div>
                </div>
              </div>
            </div>

            {/* Mandatory Field Inspection Protocol */}
            <div className="space-y-2">
              <div className="text-xs font-bold font-mono text-rose-400 flex items-center gap-1.5 uppercase">
                <AlertTriangle className="w-4 h-4" />
                <span>Mandatory Field Inspection Protocol for Monitoring Officer</span>
              </div>

              <div className="space-y-2 text-xs font-mono">
                <div className="p-3 bg-slate-950 border border-slate-800 rounded-lg flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-rose-950 text-rose-300 font-bold flex items-center justify-center shrink-0 text-xs border border-rose-800">
                    01
                  </div>
                  <div>
                    <div className="font-bold text-white">Substructure & Column Reinforcement Verification</div>
                    <div className="text-slate-300 text-[11px] mt-0.5">
                      PFMS disbursals cite completed plinth slab casting with 100% material procurement billed. Field agent must execute core compressive strength checks and confirm footing depth against approved CPWD schedule.
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-slate-950 border border-slate-800 rounded-lg flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-amber-950 text-amber-300 font-bold flex items-center justify-center shrink-0 text-xs border border-amber-800">
                    02
                  </div>
                  <div>
                    <div className="font-bold text-white">Measurement Book #44 Voucher Cross-Audit</div>
                    <div className="text-slate-300 text-[11px] mt-0.5">
                      Examine physical entry pages 31-39 in MB #44 signed by Assistant Engineer on 16-Jan-2026. Verify whether vendor invoice batch #VK-4912 corresponds to delivered TMT tonnage stored on site.
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-slate-950 border border-slate-800 rounded-lg flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-950 text-blue-300 font-bold flex items-center justify-center shrink-0 text-xs border border-blue-800">
                    03
                  </div>
                  <div>
                    <div className="font-bold text-white">Independent Cadastral Boundary Survey</div>
                    <div className="text-slate-300 text-[11px] mt-0.5">
                      Deploy handheld RTK-GPS at corner pegs (12.7912° N, 80.2489° E). Confirm if current construction footprint encroaches or duplicates the plot earmarked for Tamil Nadu Rural Development hall (TN-SAD-2024).
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-3 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => navigate('/project/MPL-2026-1042')}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded text-xs font-mono font-bold flex items-center gap-1.5 shadow-sm"
                >
                  <FileText className="w-4 h-4" />
                  <span>Open Full Project Dossier</span>
                </button>

                <button
                  onClick={() => setIsCaseModalOpen(true)}
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded text-xs font-mono font-semibold flex items-center gap-1.5 border border-slate-700"
                >
                  <FileCheck className="w-4 h-4 text-blue-400" />
                  <span>Initiate Review Case</span>
                </button>
              </div>

              <div className="flex items-center gap-2 text-slate-400">
                <button onClick={handleCopy} aria-label="Copy Inferences" className="p-1.5 hover:text-white rounded hover:bg-slate-800">
                  <Copy className="w-4 h-4" />
                </button>
                {copied && <span className="text-[10px] font-mono text-emerald-400">Copied!</span>}
                <button aria-label="Thumbs Up" className="p-1.5 hover:text-emerald-400 rounded hover:bg-slate-800">
                  <ThumbsUp className="w-4 h-4" />
                </button>
                <button aria-label="Thumbs Down" className="p-1.5 hover:text-rose-400 rounded hover:bg-slate-800">
                  <ThumbsDown className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Interactive Query Input Bar */}
          <form onSubmit={handleSend} className="bg-slate-900 border border-slate-800 rounded-xl p-3 space-y-2 shadow-gov-md">
            <div className="flex items-center gap-2 bg-slate-950 border border-slate-700 rounded-lg p-2">
              <Search className="w-4 h-4 text-blue-400 shrink-0" />
              <input
                type="text"
                value={promptQuery}
                onChange={(e) => setPromptQuery(e.target.value)}
                placeholder="Compare contractor velocity across Kovalam belt..."
                className="w-full bg-transparent text-white placeholder-slate-500 text-xs focus:outline-none font-mono"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded text-xs font-mono font-bold flex items-center gap-1.5 shadow-sm shrink-0"
              >
                <span>Execute Analysis</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 px-1">
              <div>Ledger Block Hash: <span className="text-slate-300">#7104-0x98AF...21E</span></div>
              <div>Realtime Query Latency: <span className="text-emerald-400">240ms</span> • Press <kbd className="bg-slate-800 px-1 py-0.5 rounded text-white">Ctrl+Enter</kbd></div>
            </div>
          </form>
        </div>

        {/* Right Column: Active Target Dossier & Institutional Feeds */}
        <div className="xl:col-span-4 space-y-6">
          {/* Active Target Dossier Widget */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-4 shadow-gov-md">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-white">
                <FileText className="w-4 h-4 text-blue-400" />
                <span>Active Target Dossier</span>
              </div>
              <span className="px-2 py-0.5 rounded bg-rose-950 text-rose-300 border border-rose-800 text-[10px] font-mono font-bold">
                HIGH ANOMALY
              </span>
            </div>

            <div>
              <h3 className="font-extrabold text-white text-sm font-mono">
                MPL-2026-1042: Kovalam Coastal Community Infrastructure Hub
              </h3>
              <div className="text-[10px] text-slate-400 font-mono mt-0.5">
                Nodal District: <strong>Chennai South (Reach 4)</strong> • Block: St. Thomas Mount
              </div>
            </div>

            {/* Satellite Map Thumbnail */}
            <div className="bg-slate-950 border border-slate-800 rounded-lg p-3 h-32 relative flex flex-col justify-between font-mono text-xs overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:1rem_1rem] opacity-30" />
              <div className="relative z-10 text-[10px] text-slate-300 flex justify-between">
                <span>12.7912° N, 80.2489° E</span>
                <span className="text-emerald-400 font-bold">Satellite Sync: 48h ago</span>
              </div>
              <div className="relative z-10 text-center font-bold text-white text-xs bg-slate-900/80 p-1 rounded border border-slate-800">
                DRDA Division-I Coastal Zone
              </div>
            </div>

            <div className="space-y-1.5 font-mono text-xs text-slate-300 pt-1">
              <div className="flex justify-between">
                <span className="text-slate-400">Implementing Agency:</span>
                <span className="text-white font-semibold">TN Maritime Dev Agency</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Sanction Date:</span>
                <span className="text-white">14-Aug-2025</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Stipulated Completion:</span>
                <span className="text-rose-400 font-bold">28-Feb-2026 (Overdue)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Contractor Entity:</span>
                <span className="text-white">Apex Bay Infratech LLP</span>
              </div>
            </div>
          </div>

          {/* Verifiable Institutional Feeds */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-3 shadow-gov-md">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <div className="text-xs font-bold font-mono text-white uppercase">
                VERIFIABLE INSTITUTIONAL FEEDS
              </div>
              <span className="text-[10px] font-mono text-emerald-400 font-bold">3 Verified</span>
            </div>

            <div className="space-y-2 font-mono text-xs">
              <a
                href="#esakshi"
                onClick={(e) => e.preventDefault()}
                className="p-2.5 bg-slate-950 border border-slate-800 hover:border-blue-500 rounded-lg flex items-center justify-between text-slate-200 transition-all group"
              >
                <div>
                  <div className="font-bold text-white text-xs">eSAKSHI Portal Entry</div>
                  <div className="text-[10px] text-slate-400">WRK-TN-2025-804128</div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-blue-400" />
              </a>

              <a
                href="#pfms"
                onClick={(e) => e.preventDefault()}
                className="p-2.5 bg-slate-950 border border-slate-800 hover:border-blue-500 rounded-lg flex items-center justify-between text-slate-200 transition-all group"
              >
                <div>
                  <div className="font-bold text-white text-xs">PFMS Sanction Voucher</div>
                  <div className="text-[10px] text-slate-400">VCH-2026-CH-89419</div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-blue-400" />
              </a>

              <a
                href="#bhuvan"
                onClick={(e) => e.preventDefault()}
                className="p-2.5 bg-slate-950 border border-slate-800 hover:border-blue-500 rounded-lg flex items-center justify-between text-slate-200 transition-all group"
              >
                <div>
                  <div className="font-bold text-white text-xs">Bhuvan / ISRO Geospatial Token</div>
                  <div className="text-[10px] text-slate-400">GEO-CAD-TN-KOV-88</div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-blue-400" />
              </a>
            </div>
          </div>

          {/* Session Investigation Thread */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-3 shadow-gov-md">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <div className="text-xs font-bold font-mono text-white uppercase">
                SESSION INVESTIGATION THREAD
              </div>
              <button onClick={() => {}} className="text-[10px] font-mono text-slate-400 hover:text-white">
                Clear Thread
              </button>
            </div>

            <div className="space-y-2 font-mono text-xs text-slate-300">
              <div className="p-2 bg-slate-950 rounded border border-slate-800">
                <div className="font-bold text-white">1. Summary of Coastal Works in Chennai...</div>
                <div className="text-[10px] text-slate-400">11:15 AM • 8 Works Evaluated</div>
              </div>
              <div className="p-2 bg-slate-950 rounded border border-slate-800">
                <div className="font-bold text-white">2. Discrepancy scan between MB #44 &amp;...</div>
                <div className="text-[10px] text-slate-400">11:28 AM • 3 Anomalies Detected</div>
              </div>
              <div className="p-2 bg-slate-950 border border-rose-500/40 rounded">
                <div className="font-bold text-rose-300">3. Flagged analysis for MPL-2026-1042...</div>
                <div className="text-[10px] text-slate-400">11:42 AM • High Risk Verification</div>
              </div>
            </div>

            <button
              onClick={() => window.print()}
              className="w-full py-2 bg-slate-800 hover:bg-slate-700 text-white font-mono font-bold text-xs rounded-lg shadow transition-all flex items-center justify-center gap-1.5"
            >
              <FileText className="w-4 h-4 text-blue-400" />
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

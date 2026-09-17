import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { DETAILED_REVIEW_CASE, FEATURED_PROJECT_1042 } from '../../server/mockData';
import { RiskBadge } from '../components/common/RiskBadge';
import {
  FileCheck,
  CheckCircle2,
  AlertTriangle,
  Clock,
  UserCheck,
  ShieldAlert,
  Plus,
  Send,
  Lock,
  ArrowRight,
  ExternalLink,
  ChevronRight,
  FileText,
  Save,
  Layers,
  Camera,
  MapPin
} from 'lucide-react';

export const ReviewCaseDetailPage: React.FC = () => {
  const { caseId } = useParams<{ caseId: string }>();
  const navigate = useNavigate();

  const caseData = DETAILED_REVIEW_CASE;

  const [newNote, setNewNote] = useState('');
  const [notesList, setNotesList] = useState(caseData.reviewerNotes);
  const [findingText, setFindingText] = useState(
    'Pursuant to Section 4(2) of MoSPI Guidelines, inspection reveals 47 percentage point variance between fund disbursal (78%) and physical execution (38%). Executing Agency (Coastal Engineering Works Ltd) has failed to log mandatory stage II photos...'
  );
  const [checkedDispositions, setCheckedDispositions] = useState<string[]>(['freeze_disbursal']);

  const handleAddNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newNote.trim()) return;
    const added = {
      author: 'Dr. Rajeshwar V., IAS',
      role: 'Joint Secy, MoSPI',
      date: new Date().toLocaleString(),
      text: newNote
    };
    setNotesList([added, ...notesList]);
    setNewNote('');
  };

  const toggleDisposition = (id: string) => {
    if (checkedDispositions.includes(id)) {
      setCheckedDispositions(checkedDispositions.filter(item => item !== id));
    } else {
      setCheckedDispositions([...checkedDispositions, id]);
    }
  };

  return (
    <div className="p-4 lg:p-6 space-y-5 max-w-[1700px] mx-auto font-sans">
      {/* Top Banner Notice */}
      <div className="bg-slate-100 border border-slate-200 px-4 py-2.5 rounded-lg text-xs font-mono text-slate-700 flex flex-wrap items-center justify-between gap-2 shadow-sm">
        <div className="flex items-center gap-2">
          <span className="bg-red-100 text-red-800 border border-red-200 px-2 py-0.5 rounded font-bold text-[10px]">
            SYNTHETIC DEMO DATA — DATABASE AUDIT LOG
          </span>
          <span className="text-slate-600 font-medium">
            STATUTORY DIRECTIVE REPORT: GOVERNMENT / CLASSIFICATION: OFFICIAL USE ONLY
          </span>
        </div>

        <div className="flex items-center gap-2 text-emerald-700 text-[11px] font-bold">
          <Lock className="w-3.5 h-3.5" />
          <span>SHA-256 Registered to MoSPI Infrastructure Vault</span>
        </div>
      </div>

      {/* Case Header */}
      <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-sm space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-4">
          <div>
            <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest flex items-center gap-1.5">
              <FileCheck className="w-4 h-4 text-blue-700" />
              <span>Review Case: {caseData.caseCode} • Focus: TN-CHN-Metropolitan</span>
            </div>
            <h1 className="text-2xl font-extrabold text-[#0F172A] tracking-tight font-sans mt-1">
              Physical Progress Deviation Review
            </h1>
          </div>

          <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
            <button className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded font-bold transition-colors">
              Request Evidence
            </button>
            <button className="px-3 py-1.5 bg-red-50 hover:bg-red-100 text-red-700 border border-red-200 rounded font-bold transition-colors">
              Escalate to DM
            </button>
            <button className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded font-bold transition-colors">
              Delegate Officer
            </button>
            <button
              onClick={() => alert('Review Findings Saved')}
              className="px-4 py-1.5 bg-blue-700 hover:bg-blue-800 text-white font-bold rounded shadow flex items-center gap-1.5 transition-colors"
            >
              <Save className="w-4 h-4 text-white" />
              <span>Save Review &amp; Findings</span>
            </button>
          </div>
        </div>

        {/* Metadata Bar */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4 font-mono text-xs pt-1">
          <div className="bg-slate-50 p-2.5 rounded border border-slate-100">
            <div className="text-slate-500 text-[10px] font-bold">PRIORITY SCORE</div>
            <div className="text-red-700 font-extrabold text-sm">{caseData.priorityScore} / 100 - Critical</div>
          </div>
          <div className="bg-slate-50 p-2.5 rounded border border-slate-100">
            <div className="text-slate-500 text-[10px] font-bold">ASSIGNED OFFICER</div>
            <div className="text-slate-900 font-bold truncate">{caseData.assignedOfficer}</div>
          </div>
          <div className="bg-slate-50 p-2.5 rounded border border-slate-100">
            <div className="text-slate-500 text-[10px] font-bold">CREATED AT</div>
            <div className="text-slate-700 text-[11px] font-medium">{caseData.createdDate}</div>
          </div>
          <div className="bg-slate-50 p-2.5 rounded border border-slate-100">
            <div className="text-slate-500 text-[10px] font-bold">DATE UPDATED</div>
            <div className="text-slate-700 text-[11px] font-medium">{caseData.lastUpdated}</div>
          </div>
          <div className="bg-slate-50 p-2.5 rounded border border-slate-100">
            <div className="text-slate-500 text-[10px] font-bold">AUDIT LOG VALIDATION</div>
            <div className="text-emerald-700 text-[11px] font-bold">74*451-1798-501</div>
          </div>
          <div className="bg-slate-50 p-2.5 rounded border border-slate-100">
            <div className="text-slate-500 text-[10px] font-bold">JURISDICTION / CELL</div>
            <div className="text-slate-900 font-semibold text-[11px]">Chennai Metro Zone 44</div>
          </div>
        </div>
      </div>

      {/* 7-Stage Workflow Step Indicator */}
      <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-sm space-y-3 font-mono text-xs">
        <div className="flex justify-between items-center text-[11px] text-slate-500 border-b border-slate-100 pb-2">
          <span className="font-bold text-slate-900 uppercase tracking-wide">HUMAN-IN-THE-LOOP CASE PROGRESS WORKFLOW</span>
          <span className="font-semibold text-blue-700">Stage 4 of 7 Active</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-7 gap-2.5 text-[10px]">
          <div className="p-2.5 bg-emerald-50 border border-emerald-200 rounded flex items-center justify-between">
            <div>
              <div className="font-bold text-emerald-800">1. Alert Created</div>
              <div className="text-emerald-600 text-[9px]">15 Aug 2025</div>
            </div>
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          </div>

          <div className="p-2.5 bg-emerald-50 border border-emerald-200 rounded flex items-center justify-between">
            <div>
              <div className="font-bold text-emerald-800">2. Team Assigned</div>
              <div className="text-emerald-600 text-[9px]">28 Aug 2025</div>
            </div>
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          </div>

          <div className="p-2.5 bg-emerald-50 border border-emerald-200 rounded flex items-center justify-between">
            <div>
              <div className="font-bold text-emerald-800">3. Review Started</div>
              <div className="text-emerald-600 text-[9px]">01 Sep 2025</div>
            </div>
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          </div>

          <div className="p-2.5 bg-blue-50 border border-blue-300 rounded flex items-center justify-between ring-2 ring-blue-500/20">
            <div>
              <div className="font-bold text-blue-900">4. Evidence Review</div>
              <div className="text-blue-700 text-[9px]">Stage 4 Active</div>
            </div>
            <div className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-ping shrink-0" />
          </div>

          <div className="p-2.5 bg-slate-50 border border-slate-200 rounded flex items-center justify-between opacity-70">
            <div>
              <div className="font-bold text-slate-700">5. Finding / Cause</div>
              <div className="text-slate-500 text-[9px]">Collector Review</div>
            </div>
          </div>

          <div className="p-2.5 bg-slate-50 border border-slate-200 rounded flex items-center justify-between opacity-70">
            <div>
              <div className="font-bold text-slate-700">6. DM Sign-off</div>
              <div className="text-slate-500 text-[9px]">Director Approval</div>
            </div>
          </div>

          <div className="p-2.5 bg-slate-50 border border-slate-200 rounded flex items-center justify-between opacity-70">
            <div>
              <div className="font-bold text-slate-700">7. Audit Closed</div>
              <div className="text-slate-500 text-[9px]">Ledger Stamp</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid: Left Detailed Cards vs Right Summary Sidebar */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
        {/* Left Column */}
        <div className="xl:col-span-8 space-y-6 font-mono text-xs">
          {/* Target Project Summary Card */}
          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-4">
            <div className="flex justify-between items-center border-b border-slate-100 pb-3">
              <div className="font-bold text-slate-900 uppercase flex items-center gap-2 text-xs">
                <span>TARGET PROJECT UNDER REVIEW</span>
                <span className="text-blue-700 font-extrabold">{caseData.targetProject.code}</span>
              </div>

              <button
                onClick={() => navigate(`/project/${caseData.projectCode}`)}
                className="text-blue-700 hover:text-blue-900 font-bold flex items-center gap-1 text-[11px]"
              >
                <span>View Full Dossier</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="font-extrabold text-[#0F172A] text-base font-sans">
              {caseData.targetProject.title}
            </div>

            <div className="text-[11px] text-slate-600 font-sans">
              {caseData.targetProject.executingAgency} • Executing Contractor: <strong className="text-slate-900">{caseData.targetProject.contractor}</strong>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-1">
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                <div className="text-slate-500 text-[10px] font-bold">FINANCIAL DISBURSED</div>
                <div className="text-lg font-extrabold text-blue-700 mt-0.5">
                  ₹{caseData.targetProject.disbursedLakhs} L / ₹{caseData.targetProject.sanctionLakhs} L ({caseData.targetProject.disbursedPercent}%)
                </div>
              </div>

              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                <div className="text-slate-500 text-[10px] font-bold">PHYSICAL PROGRESS</div>
                <div className="text-lg font-extrabold text-red-700 mt-0.5">
                  {caseData.targetProject.physicalProgressPercent}% (Exp: {caseData.targetProject.expectedProgressPercent}%, Gap: -47.0%)
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <span className="px-2.5 py-1 bg-red-50 text-red-800 border border-red-200 text-[10px] font-bold rounded">
                {caseData.targetProject.sanctionVsCeiling}
              </span>
              <span className="px-2.5 py-1 bg-amber-50 text-amber-800 border border-amber-200 text-[10px] font-bold rounded">
                {caseData.targetProject.disbursedVsGround}
              </span>
              <span className="px-2.5 py-1 bg-red-50 text-red-800 border border-red-200 text-[10px] font-bold rounded">
                +{caseData.targetProject.overdueDays} Days Overdue
              </span>
            </div>

            <div className="p-3.5 bg-amber-50 border border-amber-200 rounded-lg text-amber-900 text-xs flex items-start gap-2.5 font-sans">
              <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <div>{caseData.targetProject.alertWarning}</div>
            </div>
          </div>

          {/* Algorithmic Trigger Induction Card */}
          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-3 font-sans">
            <div className="flex justify-between items-center border-b border-slate-100 pb-3 font-mono">
              <div className="font-bold text-slate-900 uppercase text-xs">
                Case Origin • Alert ALT-10482
              </div>
              <span className="px-2.5 py-1 bg-red-50 text-red-800 border border-red-200 text-[10px] font-bold rounded">
                PRIORITY CRITICAL RISK 87/100
              </span>
            </div>

            <p className="text-xs text-slate-700 leading-relaxed">
              This case docket was automatically generated by Sentinel AI Model v4.2 under Para 4.2 of MoSPI Guidelines. Physical progress is certified at only 38.0% while 78% of funds have been drawn.
            </p>

            <div className="p-3 bg-slate-50 border border-slate-200 rounded text-xs text-slate-600">
              <strong className="text-slate-900 font-semibold uppercase">Statutory Administrative Disclaimer: </strong>
              AI indicators represent prioritized statistical anomalies designed strictly to assist statutory human inspection officers. No determination of wrongdoing is made automatically.
            </div>
          </div>

          {/* Multi-Vector Anomaly Signals Grid */}
          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-4">
            <div className="font-bold text-slate-900 uppercase text-xs border-b border-slate-100 pb-3 font-mono">
              Multi-Vector Anomaly Signals
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 font-mono">
              <div className="p-3 bg-slate-50 border border-red-200 rounded-lg space-y-1">
                <div className="text-[10px] text-slate-500 font-bold">Progress Trajectory</div>
                <div className="text-lg font-extrabold text-red-700">81 / 100</div>
                <div className="text-[9px] text-slate-600">Physical execution 38% vs 85% expected</div>
              </div>

              <div className="p-3 bg-slate-50 border border-red-200 rounded-lg space-y-1">
                <div className="text-[10px] text-slate-500 font-bold">Milestone Velocity</div>
                <div className="text-lg font-extrabold text-red-700">91 / 100</div>
                <div className="text-[9px] text-slate-600">Velocity +0.8%/mo insufficient</div>
              </div>

              <div className="p-3 bg-slate-50 border border-amber-200 rounded-lg space-y-1">
                <div className="text-[10px] text-slate-500 font-bold">BoQ Tender Overlap</div>
                <div className="text-lg font-extrabold text-amber-700">88 / 100</div>
                <div className="text-[9px] text-slate-600">92% BoQ specification overlap</div>
              </div>

              <div className="p-3 bg-slate-50 border border-amber-200 rounded-lg space-y-1">
                <div className="text-[10px] text-slate-500 font-bold">Disbursal Returns</div>
                <div className="text-lg font-extrabold text-amber-700">72 / 100</div>
                <div className="text-[9px] text-slate-600">Disbursed 78% while physical 38%</div>
              </div>

              <div className="p-3 bg-slate-50 border border-amber-200 rounded-lg space-y-1">
                <div className="text-[10px] text-slate-500 font-bold">Voucher Audit</div>
                <div className="text-lg font-extrabold text-amber-700">78 / 100</div>
                <div className="text-[9px] text-slate-600">MB entries unverified</div>
              </div>

              <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg space-y-1">
                <div className="text-[10px] text-slate-500 font-bold">Telemetry Compliance</div>
                <div className="text-lg font-extrabold text-blue-700">61 / 100</div>
                <div className="text-[9px] text-slate-600">Missing geo-photos</div>
              </div>
            </div>
          </div>

          {/* Evidentiary Docket */}
          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-4 font-sans">
            <div className="flex justify-between items-center border-b border-slate-100 pb-3 font-mono">
              <div className="font-bold text-slate-900 uppercase text-xs flex items-center gap-2">
                <FileText className="w-4 h-4 text-blue-700" />
                <span>Evidentiary Docket (4 Items Logged)</span>
              </div>

              <div className="flex items-center gap-2">
                <button className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded font-bold text-[11px] flex items-center gap-1 transition-colors">
                  <Plus className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Attach Evidence</span>
                </button>
                <button className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded font-bold text-[11px] transition-colors">
                  Request Statutory Action
                </button>
              </div>
            </div>

            <div className="space-y-3 font-mono text-xs">
              {caseData.evidentiaryDocket.map((ev: any) => (
                <div key={ev.id} className="p-4 bg-slate-50 border border-slate-200 rounded-lg space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-slate-900 text-xs">{ev.id} • {ev.title}</span>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                      ev.status === 'Certified' || ev.status === 'Verified'
                        ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                        : 'bg-red-100 text-red-800 border border-red-200'
                    }`}>
                      {ev.status}
                    </span>
                  </div>

                  <div className="text-[10px] text-slate-500 font-semibold">{ev.source}</div>

                  <div className="text-xs text-slate-700 pt-1.5 border-t border-slate-200 font-sans">
                    {ev.notes}
                  </div>

                  <div className="pt-2 flex items-center justify-between text-[10px]">
                    <span className="text-emerald-700 font-bold">VERIFIED BY REVIEWER</span>
                    <div className="flex items-center gap-2">
                      <button className="px-2.5 py-1 bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 rounded font-semibold">Inspect Document</button>
                      <button className="px-2.5 py-1 bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 rounded font-semibold">Verify Token</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Reviewer Working Notes & Memos */}
          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-4">
            <div className="font-bold text-slate-900 uppercase text-xs border-b border-slate-100 pb-3 font-mono">
              Reviewer Working Notes &amp; Memos
            </div>

            <form onSubmit={handleAddNote} className="space-y-3">
              <textarea
                value={newNote}
                onChange={(e) => setNewNote(e.target.value)}
                placeholder="Record observations, verification findings, and relevant findings..."
                rows={3}
                className="w-full p-3 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:border-blue-600 font-mono text-xs"
              />
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white font-bold rounded shadow flex items-center gap-1.5 transition-colors"
                >
                  <Send className="w-3 h-3" />
                  <span>Save Official Note</span>
                </button>
              </div>
            </form>

            <div className="space-y-3 pt-2 border-t border-slate-100 font-mono text-xs">
              {notesList.map((note: any, idx: number) => (
                <div key={idx} className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg space-y-1">
                  <div className="flex justify-between items-center text-[10px]">
                    <strong className="text-slate-900 font-bold">{note.author} ({note.role})</strong>
                    <span className="text-slate-500">{note.date}</span>
                  </div>
                  <div className="text-xs text-slate-700 leading-relaxed font-sans mt-1">{note.text}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Human Review Findings & Statutory Disposition Form */}
          <div className="bg-white border-2 border-red-200 rounded-xl p-5 shadow-sm space-y-4 font-sans">
            <div className="flex justify-between items-center border-b border-slate-100 pb-3 font-mono">
              <div className="font-bold text-slate-900 uppercase text-xs flex items-center gap-2">
                <FileCheck className="w-4 h-4 text-red-600" />
                <span>Human Review Findings &amp; Statutory Disposition</span>
              </div>
              <span className="text-red-700 font-bold text-[10px]">STATUTORY FORM 04 STATEMENT</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <label className="p-3 bg-slate-50 border border-slate-200 rounded-lg flex items-start gap-2.5 cursor-pointer hover:bg-slate-100 transition-colors">
                <input type="checkbox" className="accent-blue-600 mt-0.5" />
                <span className="text-slate-700">Administrative Delay: Standard approval delay.</span>
              </label>

              <label className="p-3 bg-slate-50 border border-slate-200 rounded-lg flex items-start gap-2.5 cursor-pointer hover:bg-slate-100 transition-colors">
                <input type="checkbox" className="accent-blue-600 mt-0.5" />
                <span className="text-slate-700">Schedule Concern: Pace stalled without extension.</span>
              </label>

              <label className="p-3 bg-red-50 border border-red-200 rounded-lg flex items-start gap-2.5 cursor-pointer text-red-900 font-semibold">
                <input type="checkbox" checked readOnly className="accent-red-600 mt-0.5" />
                <span>Financial &amp; Measurement Target: Expenditure lead ahead of physical work.</span>
              </label>

              <label className="p-3 bg-slate-50 border border-slate-200 rounded-lg flex items-start gap-2.5 cursor-pointer hover:bg-slate-100 transition-colors">
                <input type="checkbox" className="accent-blue-600 mt-0.5" />
                <span className="text-slate-700">Geospatial &amp; Site Inquiry: Joint survey required.</span>
              </label>
            </div>

            <div className="space-y-1.5 font-mono">
              <div className="text-[10px] text-slate-600 uppercase font-bold">Form-04 Statutory Finding Statement (Official Case Record):</div>
              <textarea
                value={findingText}
                onChange={(e) => setFindingText(e.target.value)}
                rows={4}
                className="w-full p-3 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:border-red-500 font-mono text-xs leading-relaxed"
              />
            </div>

            <div className="space-y-2 pt-2 border-t border-slate-100 text-xs font-mono">
              <div className="font-bold text-slate-900 uppercase text-[10px]">Mandatory Executive Dispositions Checklist:</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <label className="flex items-center gap-2 text-red-800 font-bold p-2 bg-red-50 rounded border border-red-100">
                  <input
                    type="checkbox"
                    checked={checkedDispositions.includes('freeze_disbursal')}
                    onChange={() => toggleDisposition('freeze_disbursal')}
                    className="accent-red-600"
                  />
                  <span>Freeze Remaining Disbursal on PFMS Portal</span>
                </label>

                <label className="flex items-center gap-2 text-slate-700 p-2 bg-slate-50 rounded border border-slate-200">
                  <input
                    type="checkbox"
                    checked={checkedDispositions.includes('issue_notice')}
                    onChange={() => toggleDisposition('issue_notice')}
                    className="accent-blue-600"
                  />
                  <span>Issue Formal Notice to Executing Agency</span>
                </label>

                <label className="flex items-center gap-2 text-slate-700 p-2 bg-slate-50 rounded border border-slate-200">
                  <input
                    type="checkbox"
                    checked={checkedDispositions.includes('quality_squad')}
                    onChange={() => toggleDisposition('quality_squad')}
                    className="accent-blue-600"
                  />
                  <span>Direct Central Quality Inspection Squad</span>
                </label>

                <label className="flex items-center gap-2 text-slate-700 p-2 bg-slate-50 rounded border border-slate-200">
                  <input
                    type="checkbox"
                    checked={checkedDispositions.includes('cadastral_survey')}
                    onChange={() => toggleDisposition('cadastral_survey')}
                    className="accent-blue-600"
                  />
                  <span>Order Sub-Collector Site Joint Cadastral Survey</span>
                </label>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 font-mono">
              <div className="flex items-center gap-2">
                <button className="px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded">
                  Draft Form 4A Notice
                </button>
                <button className="px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded">
                  Dismiss Case
                </button>
              </div>

              <button
                onClick={() => {
                  alert('Finding Submitted for DM Approval!');
                  navigate('/cases');
                }}
                className="px-5 py-2 bg-emerald-700 hover:bg-emerald-800 text-white font-extrabold rounded shadow flex items-center gap-2 transition-colors"
              >
                <CheckCircle2 className="w-4 h-4 text-white" />
                <span>Submit Finding for DM Approval</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Column Sidebar */}
        <div className="xl:col-span-4 space-y-6 font-mono text-xs">
          {/* Composite Risk Box */}
          <div className="bg-white border-2 border-red-200 rounded-xl p-5 shadow-sm space-y-3">
            <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">COMPOSITE RISK ASSESSMENT</div>
            <div className="text-4xl font-extrabold text-[#0F172A]">
              87 <span className="text-xs text-slate-500 font-normal">/ 100 COMPOSITE RISK</span>
            </div>
            <div className="text-[11px] text-red-700 font-bold">
              Top 1.5% State Risk • Bayesian Signal Fusion Model
            </div>

            <div className="space-y-3 pt-3 border-t border-slate-100 text-[11px]">
              <div>
                <div className="flex justify-between text-slate-700">
                  <span>Physical Progress Lag</span>
                  <strong className="text-red-700">91 / 100</strong>
                </div>
                <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden mt-1">
                  <div className="bg-red-600 h-full w-[91%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-slate-700">
                  <span>Duplicate BoQ Similarity</span>
                  <strong className="text-red-700">88 / 100</strong>
                </div>
                <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden mt-1">
                  <div className="bg-red-600 h-full w-[88%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-slate-700">
                  <span>Milestone Delay</span>
                  <strong className="text-red-700">84 / 100</strong>
                </div>
                <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden mt-1">
                  <div className="bg-red-600 h-full w-[84%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-slate-700">
                  <span>Fund Disbursal Divergence</span>
                  <strong className="text-amber-700">72 / 100</strong>
                </div>
                <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden mt-1">
                  <div className="bg-amber-500 h-full w-[72%]" />
                </div>
              </div>
            </div>
          </div>

          {/* Ground Vitals & Telemetry */}
          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-3">
            <div className="font-bold text-slate-900 uppercase text-xs border-b border-slate-100 pb-2">
              Ground Vitals &amp; Telemetry
            </div>

            <div className="space-y-2.5 text-[11px]">
              <div className="flex justify-between">
                <span className="text-slate-500">Sanctioned Outlay:</span>
                <span className="text-slate-900 font-bold">₹48.50 Lakh</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">PFMS Disbursed:</span>
                <span className="text-blue-700 font-bold">₹37.80 Lakh (78%)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Physical % Complete:</span>
                <span className="text-red-700 font-bold">38% (-47% Deficit)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Stagnation Window:</span>
                <span className="text-amber-700 font-bold">+96 Days</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Contractor Entity:</span>
                <span className="text-slate-900 font-semibold">Coastal Engineering Works Ltd</span>
              </div>
            </div>
          </div>

          {/* Investigative Commands */}
          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2.5">
            <div className="font-bold text-slate-900 uppercase text-xs border-b border-slate-100 pb-2">
              Investigative Commands
            </div>

            <button className="w-full py-2 bg-slate-50 hover:bg-slate-100 text-slate-700 rounded border border-slate-200 text-left px-3 text-[11px] flex justify-between items-center transition-colors">
              <span className="font-semibold">Order Satellite Rescan (Bhuvan)</span>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            </button>

            <button className="w-full py-2 bg-slate-50 hover:bg-slate-100 text-slate-700 rounded border border-slate-200 text-left px-3 text-[11px] flex justify-between items-center transition-colors">
              <span className="font-semibold">Coordinate Field Inspection</span>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            </button>

            <button className="w-full py-2 bg-slate-50 hover:bg-slate-100 text-slate-700 rounded border border-slate-200 text-left px-3 text-[11px] flex justify-between items-center transition-colors">
              <span className="font-semibold">Launch Cadastral GIS Engine</span>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            </button>

            <button className="w-full py-2 bg-slate-50 hover:bg-slate-100 text-slate-700 rounded border border-slate-200 text-left px-3 text-[11px] flex justify-between items-center transition-colors">
              <span className="font-semibold">Open Multi-Project BoQ Diff Tool</span>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            </button>
          </div>

          {/* Immutable Audit Trail */}
          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-3">
            <div className="font-bold text-slate-900 uppercase text-xs border-b border-slate-100 pb-2">
              Immutable Audit Trail
            </div>

            <div className="space-y-2 text-[10px]">
              {caseData.auditTrail.map((log: any, idx: number) => (
                <div key={idx} className="p-2.5 bg-slate-50 rounded border border-slate-200 space-y-0.5">
                  <div className="text-slate-500">{log.timestamp}</div>
                  <div className="font-bold text-slate-900">{log.action}</div>
                  <div className="text-blue-700 font-semibold">Actor: {log.actor}</div>
                </div>
              ))}
            </div>

            <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 text-[10px] text-slate-600 font-mono">
              SHA256 Cryptographic Stamp:<br />
              <strong className="text-emerald-700 font-bold">8f9b7c2a4j8b27e8d642...91d0e6</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

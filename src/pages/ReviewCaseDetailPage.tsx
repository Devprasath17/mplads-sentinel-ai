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
      <div className="bg-slate-950 border border-slate-800 px-4 py-2 rounded-lg text-xs font-mono text-slate-300 flex flex-wrap items-center justify-between gap-2 shadow-sm">
        <div className="flex items-center gap-2">
          <span className="bg-rose-950 text-rose-300 border border-rose-800 px-2 py-0.5 rounded font-bold text-[10px]">
            SYNTHETIC DEMO DATA — DATABASE AUDIT LOG
          </span>
          <span className="text-slate-400">
            STATUTORY DIRECTIVE REPORT: GOVERNMENT / CLASSIFICATION: OFFICIAL USE ONLY
          </span>
        </div>

        <div className="flex items-center gap-2 text-emerald-400 text-[11px]">
          <Lock className="w-3.5 h-3.5" />
          <span>SHA-256 Registered to MoSPI Infrastructure Vault</span>
        </div>
      </div>

      {/* Case Header */}
      <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl shadow-gov-md space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-3">
          <div>
            <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
              <FileCheck className="w-4 h-4 text-blue-400" />
              <span>Review Case: {caseData.caseCode} • Focus: TN-CHN-Metropolitan</span>
            </div>
            <h1 className="text-xl font-extrabold text-white tracking-tight font-mono mt-1">
              Physical Progress Deviation Review
            </h1>
          </div>

          <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
            <button className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded font-bold">
              Request Evidence
            </button>
            <button className="px-3 py-1.5 bg-rose-950 hover:bg-rose-900 text-rose-300 border border-rose-800 rounded font-bold">
              Escalate to DM
            </button>
            <button className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded font-bold">
              Delegate Officer
            </button>
            <button
              onClick={() => alert('Review Findings Saved')}
              className="px-4 py-1.5 bg-slate-950 hover:bg-black text-white font-extrabold rounded border border-slate-700 shadow flex items-center gap-1.5"
            >
              <Save className="w-4 h-4 text-emerald-400" />
              <span>Save Review &amp; Findings</span>
            </button>
          </div>
        </div>

        {/* Metadata Bar */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-3 font-mono text-xs pt-1">
          <div>
            <div className="text-slate-400 text-[10px]">PRIORITY SCORE</div>
            <div className="text-rose-400 font-extrabold">{caseData.priorityScore} / 100 - Critical</div>
          </div>
          <div>
            <div className="text-slate-400 text-[10px]">ASSIGNED OFFICER</div>
            <div className="text-white font-bold truncate">{caseData.assignedOfficer}</div>
          </div>
          <div>
            <div className="text-slate-400 text-[10px]">CREATED AT</div>
            <div className="text-slate-300 text-[11px]">{caseData.createdDate}</div>
          </div>
          <div>
            <div className="text-slate-400 text-[10px]">DATE UPDATED</div>
            <div className="text-slate-300 text-[11px]">{caseData.lastUpdated}</div>
          </div>
          <div>
            <div className="text-slate-400 text-[10px]">AUDIT LOG VALIDATION</div>
            <div className="text-emerald-400 text-[11px] font-bold">74*451-1798-501</div>
          </div>
          <div>
            <div className="text-slate-400 text-[10px]">JURISDICTION / CELL</div>
            <div className="text-white text-[11px]">Chennai Metro Zone 44</div>
          </div>
        </div>
      </div>

      {/* 7-Stage Workflow Step Indicator */}
      <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl shadow-gov-md space-y-2 font-mono text-xs">
        <div className="flex justify-between items-center text-[10px] text-slate-400 border-b border-slate-800 pb-2">
          <span className="font-bold text-white uppercase">HUMAN-IN-THE-LOOP CASE PROGRESS WORKFLOW</span>
          <span>Stage 4 of 7 Active</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-7 gap-2 text-[10px]">
          <div className="p-2 bg-slate-950 border border-slate-800 rounded flex items-center justify-between">
            <div>
              <div className="font-bold text-emerald-400">1. Alert Created</div>
              <div className="text-slate-400 text-[9px]">15 Aug 2025</div>
            </div>
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
          </div>

          <div className="p-2 bg-slate-950 border border-slate-800 rounded flex items-center justify-between">
            <div>
              <div className="font-bold text-emerald-400">2. Team Assigned</div>
              <div className="text-slate-400 text-[9px]">28 Aug 2025</div>
            </div>
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
          </div>

          <div className="p-2 bg-slate-950 border border-slate-800 rounded flex items-center justify-between">
            <div>
              <div className="font-bold text-emerald-400">3. Review Started</div>
              <div className="text-slate-400 text-[9px]">01 Sep 2025</div>
            </div>
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
          </div>

          <div className="p-2 bg-blue-950 border border-blue-500/60 rounded flex items-center justify-between ring-1 ring-blue-500/50">
            <div>
              <div className="font-bold text-blue-300">4. Evidence Review</div>
              <div className="text-blue-200 text-[9px]">Stage 4 Active</div>
            </div>
            <div className="w-2.5 h-2.5 rounded-full bg-blue-400 animate-ping shrink-0" />
          </div>

          <div className="p-2 bg-slate-950 border border-slate-800 rounded flex items-center justify-between opacity-60">
            <div>
              <div className="font-bold text-slate-300">5. Finding / Cause</div>
              <div className="text-slate-500 text-[9px]">Collector Review</div>
            </div>
          </div>

          <div className="p-2 bg-slate-950 border border-slate-800 rounded flex items-center justify-between opacity-60">
            <div>
              <div className="font-bold text-slate-300">6. DM Sign-off</div>
              <div className="text-slate-500 text-[9px]">Director Approval</div>
            </div>
          </div>

          <div className="p-2 bg-slate-950 border border-slate-800 rounded flex items-center justify-between opacity-60">
            <div>
              <div className="font-bold text-slate-300">7. Audit Closed</div>
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
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 shadow-gov-md space-y-3">
            <div className="flex justify-between items-center border-b border-slate-800 pb-2">
              <div className="font-bold text-white uppercase flex items-center gap-2">
                <span>TARGET PROJECT UNDER REVIEW</span>
                <span className="text-blue-400 font-bold">{caseData.targetProject.code}</span>
              </div>

              <button
                onClick={() => navigate(`/project/${caseData.projectCode}`)}
                className="text-blue-400 hover:underline flex items-center gap-1 text-[11px]"
              >
                <span>View Full Dossier</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="font-extrabold text-white text-sm">
              {caseData.targetProject.title}
            </div>

            <div className="text-[11px] text-slate-400">
              {caseData.targetProject.executingAgency} • Executing Contractor: <strong className="text-slate-200">{caseData.targetProject.contractor}</strong>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2 border-t border-slate-800">
              <div className="p-2.5 bg-slate-950 rounded border border-slate-800">
                <div className="text-slate-400 text-[10px]">FINANCIAL DISBURSED</div>
                <div className="text-base font-extrabold text-blue-400">
                  ₹{caseData.targetProject.disbursedLakhs} L / ₹{caseData.targetProject.sanctionLakhs} L ({caseData.targetProject.disbursedPercent}%)
                </div>
              </div>

              <div className="p-2.5 bg-slate-950 rounded border border-slate-800">
                <div className="text-slate-400 text-[10px]">PHYSICAL PROGRESS</div>
                <div className="text-base font-extrabold text-rose-400">
                  {caseData.targetProject.physicalProgressPercent}% (Exp: {caseData.targetProject.expectedProgressPercent}%, Gap: -47.0%)
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-1">
              <span className="px-2 py-0.5 bg-rose-950 text-rose-300 border border-rose-800 text-[10px] font-bold rounded">
                {caseData.targetProject.sanctionVsCeiling}
              </span>
              <span className="px-2 py-0.5 bg-amber-950 text-amber-300 border border-amber-800 text-[10px] font-bold rounded">
                {caseData.targetProject.disbursedVsGround}
              </span>
              <span className="px-2 py-0.5 bg-rose-950 text-rose-300 border border-rose-800 text-[10px] font-bold rounded">
                +{caseData.targetProject.overdueDays} Days Overdue
              </span>
            </div>

            <div className="p-3 bg-amber-950/40 border border-amber-500/30 rounded text-amber-200 text-[11px] flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>{caseData.targetProject.alertWarning}</div>
            </div>
          </div>

          {/* Algorithmic Trigger Induction Card */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 shadow-gov-md space-y-3">
            <div className="flex justify-between items-center border-b border-slate-800 pb-2">
              <div className="font-bold text-white uppercase text-xs">
                Case Origin • Alert ALT-10482
              </div>
              <span className="px-2 py-0.5 bg-rose-950 text-rose-300 border border-rose-800 text-[10px] font-bold rounded">
                PRIORITY CRITICAL RISK 87/100
              </span>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              This case docket was automatically generated by Sentinel AI Model v4.2 under Para 4.2 of MoSPI Guidelines. Physical progress is certified at only 38.0% while 78% of funds have been drawn.
            </p>

            <div className="p-3 bg-slate-950 border border-slate-800 rounded text-[11px] text-slate-400">
              <strong className="text-slate-200 uppercase">Statutory Administrative Disclaimer: </strong>
              AI indicators represent prioritized statistical anomalies designed strictly to assist statutory human inspection officers. No determination of wrongdoing is made automatically.
            </div>
          </div>

          {/* Multi-Vector Anomaly Signals Grid */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 shadow-gov-md space-y-3">
            <div className="font-bold text-white uppercase text-xs border-b border-slate-800 pb-2">
              Multi-Vector Anomaly Signals
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              <div className="p-3 bg-slate-950 border border-rose-500/40 rounded space-y-1">
                <div className="text-[10px] text-slate-400">Progress Trajectory</div>
                <div className="text-lg font-extrabold text-rose-400">81 / 100</div>
                <div className="text-[9px] text-slate-400">Physical execution 38% vs 85% expected</div>
              </div>

              <div className="p-3 bg-slate-950 border border-rose-500/40 rounded space-y-1">
                <div className="text-[10px] text-slate-400">Milestone Velocity</div>
                <div className="text-lg font-extrabold text-rose-400">91 / 100</div>
                <div className="text-[9px] text-slate-400">Velocity +0.8%/mo insufficient</div>
              </div>

              <div className="p-3 bg-slate-950 border border-amber-500/40 rounded space-y-1">
                <div className="text-[10px] text-slate-400">BoQ Tender Overlap</div>
                <div className="text-lg font-extrabold text-amber-400">88 / 100</div>
                <div className="text-[9px] text-slate-400">92% BoQ specification overlap</div>
              </div>

              <div className="p-3 bg-slate-950 border border-amber-500/40 rounded space-y-1">
                <div className="text-[10px] text-slate-400">Disbursal Returns</div>
                <div className="text-lg font-extrabold text-amber-400">72 / 100</div>
                <div className="text-[9px] text-slate-400">Disbursed 78% while physical 38%</div>
              </div>

              <div className="p-3 bg-slate-950 border border-amber-500/40 rounded space-y-1">
                <div className="text-[10px] text-slate-400">Voucher Audit</div>
                <div className="text-lg font-extrabold text-amber-400">78 / 100</div>
                <div className="text-[9px] text-slate-400">MB entries unverified</div>
              </div>

              <div className="p-3 bg-slate-950 border border-slate-800 rounded space-y-1">
                <div className="text-[10px] text-slate-400">Telemetry Compliance</div>
                <div className="text-lg font-extrabold text-blue-400">61 / 100</div>
                <div className="text-[9px] text-slate-400">Missing geo-photos</div>
              </div>
            </div>
          </div>

          {/* Evidentiary Docket (4 Items Logged) */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 shadow-gov-md space-y-4">
            <div className="flex justify-between items-center border-b border-slate-800 pb-2">
              <div className="font-bold text-white uppercase text-xs flex items-center gap-2">
                <FileText className="w-4 h-4 text-blue-400" />
                <span>Evidentiary Docket (4 Items Logged)</span>
              </div>

              <div className="flex items-center gap-2">
                <button className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded font-bold text-[11px] flex items-center gap-1">
                  <Plus className="w-3 h-3 text-emerald-400" />
                  <span>Attach Evidence</span>
                </button>
                <button className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded font-bold text-[11px]">
                  Request Statutory Action
                </button>
              </div>
            </div>

            <div className="space-y-3">
              {caseData.evidentiaryDocket.map((ev: any) => (
                <div key={ev.id} className="p-3.5 bg-slate-950 border border-slate-800 rounded-lg space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-white text-xs">{ev.id} • {ev.title}</span>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                      ev.status === 'Certified' || ev.status === 'Verified'
                        ? 'bg-emerald-950 text-emerald-300 border border-emerald-800'
                        : 'bg-rose-950 text-rose-300 border border-rose-800'
                    }`}>
                      {ev.status}
                    </span>
                  </div>

                  <div className="text-[10px] text-slate-400">{ev.source}</div>

                  <div className="text-xs text-slate-300 pt-1 border-t border-slate-800/80">
                    {ev.notes}
                  </div>

                  <div className="pt-2 flex items-center justify-between text-[10px]">
                    <span className="text-emerald-400 font-bold">VERIFIED BY REVIEWER</span>
                    <div className="flex items-center gap-2">
                      <button className="px-2 py-0.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded">Inspect Document</button>
                      <button className="px-2 py-0.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded">Verify Token</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Reviewer Working Notes & Memos */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 shadow-gov-md space-y-4">
            <div className="font-bold text-white uppercase text-xs border-b border-slate-800 pb-2">
              Reviewer Working Notes &amp; Memos
            </div>

            <form onSubmit={handleAddNote} className="space-y-2">
              <textarea
                value={newNote}
                onChange={(e) => setNewNote(e.target.value)}
                placeholder="Record observations, verification findings, and relevant findings..."
                rows={3}
                className="w-full p-3 bg-slate-950 border border-slate-700 rounded text-white focus:outline-none focus:border-blue-500 font-mono text-xs"
              />
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-4 py-1.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded shadow flex items-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Save Official Note</span>
                </button>
              </div>
            </form>

            <div className="space-y-3 pt-2 border-t border-slate-800">
              {notesList.map((note: any, idx: number) => (
                <div key={idx} className="p-3 bg-slate-950 border border-slate-800 rounded-lg space-y-1">
                  <div className="flex justify-between items-center text-[10px]">
                    <strong className="text-white">{note.author} ({note.role})</strong>
                    <span className="text-slate-400">{note.date}</span>
                  </div>
                  <div className="text-xs text-slate-300 leading-relaxed">{note.text}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Human Review Findings & Statutory Disposition Form */}
          <div className="bg-slate-900 border border-rose-500/60 rounded-xl p-5 shadow-gov-lg space-y-4">
            <div className="flex justify-between items-center border-b border-slate-800 pb-2">
              <div className="font-bold text-white uppercase text-xs flex items-center gap-2">
                <FileCheck className="w-4 h-4 text-rose-400" />
                <span>Human Review Findings &amp; Statutory Disposition</span>
              </div>
              <span className="text-rose-400 font-bold text-[10px]">STATUTORY FORM 04 STATEMENT</span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-[11px]">
              <label className="p-2.5 bg-slate-950 border border-slate-800 rounded flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="accent-blue-500" />
                <span>Administrative Delay: Standard approval delay.</span>
              </label>

              <label className="p-2.5 bg-slate-950 border border-slate-800 rounded flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="accent-blue-500" />
                <span>Schedule Concern: Pace stalled without extension.</span>
              </label>

              <label className="p-2.5 bg-slate-950 border border-rose-500/60 rounded flex items-center gap-2 cursor-pointer text-rose-300 font-bold">
                <input type="checkbox" checked readOnly className="accent-rose-500" />
                <span>Financial &amp; Measurement Target: Expenditure lead ahead of physical work.</span>
              </label>

              <label className="p-2.5 bg-slate-950 border border-slate-800 rounded flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="accent-blue-500" />
                <span>Geospatial &amp; Site Inquiry: Joint survey required.</span>
              </label>
            </div>

            <div className="space-y-1">
              <div className="text-[10px] text-slate-400 uppercase font-bold">Form-04 Statutory Finding Statement (Official Case Record):</div>
              <textarea
                value={findingText}
                onChange={(e) => setFindingText(e.target.value)}
                rows={4}
                className="w-full p-3 bg-slate-950 border border-slate-700 rounded text-white focus:outline-none focus:border-rose-500 font-mono text-xs leading-relaxed"
              />
            </div>

            <div className="space-y-2 pt-2 border-t border-slate-800 text-[11px]">
              <div className="font-bold text-white uppercase text-[10px]">Mandatory Executive Dispositions Checklist:</div>
              <div className="grid grid-cols-2 gap-2">
                <label className="flex items-center gap-2 text-rose-300 font-bold">
                  <input
                    type="checkbox"
                    checked={checkedDispositions.includes('freeze_disbursal')}
                    onChange={() => toggleDisposition('freeze_disbursal')}
                    className="accent-rose-500"
                  />
                  <span>Freeze Remaining Disbursal on PFMS Portal</span>
                </label>

                <label className="flex items-center gap-2 text-slate-300">
                  <input
                    type="checkbox"
                    checked={checkedDispositions.includes('issue_notice')}
                    onChange={() => toggleDisposition('issue_notice')}
                    className="accent-blue-500"
                  />
                  <span>Issue Formal Notice to Executing Agency</span>
                </label>

                <label className="flex items-center gap-2 text-slate-300">
                  <input
                    type="checkbox"
                    checked={checkedDispositions.includes('quality_squad')}
                    onChange={() => toggleDisposition('quality_squad')}
                    className="accent-blue-500"
                  />
                  <span>Direct Central Quality Inspection Squad</span>
                </label>

                <label className="flex items-center gap-2 text-slate-300">
                  <input
                    type="checkbox"
                    checked={checkedDispositions.includes('cadastral_survey')}
                    onChange={() => toggleDisposition('cadastral_survey')}
                    className="accent-blue-500"
                  />
                  <span>Order Sub-Collector Site Joint Cadastral Survey</span>
                </label>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <button className="px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold rounded">
                  Draft Form 4A Notice
                </button>
                <button className="px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold rounded">
                  Dismiss Case
                </button>
              </div>

              <button
                onClick={() => {
                  alert('Finding Submitted for DM Approval!');
                  navigate('/cases');
                }}
                className="px-5 py-2 bg-slate-950 hover:bg-black text-white font-extrabold rounded border border-slate-700 shadow-md flex items-center gap-2"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Submit Finding for DM Approval</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Column Sidebar */}
        <div className="xl:col-span-4 space-y-6 font-mono text-xs">
          {/* Composite Risk Box */}
          <div className="bg-slate-900 border border-rose-500/60 rounded-xl p-5 shadow-gov-md space-y-3">
            <div className="text-[10px] text-slate-400 font-bold uppercase">COMPOSITE RISK ASSESSMENT</div>
            <div className="text-3xl font-extrabold text-white">
              87 <span className="text-xs text-slate-400 font-normal">/ 100 COMPOSITE RISK</span>
            </div>
            <div className="text-[11px] text-rose-400 font-bold">
              Top 1.5% State Risk • Bayesian Signal Fusion Model
            </div>

            <div className="space-y-2 pt-3 border-t border-slate-800 text-[11px]">
              <div>
                <div className="flex justify-between text-slate-300">
                  <span>Physical Progress Lag</span>
                  <strong className="text-rose-400">91 / 100</strong>
                </div>
                <div className="w-full bg-slate-950 h-1 rounded-full overflow-hidden mt-1">
                  <div className="bg-rose-500 h-full w-[91%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-slate-300">
                  <span>Duplicate BoQ Similarity</span>
                  <strong className="text-rose-400">88 / 100</strong>
                </div>
                <div className="w-full bg-slate-950 h-1 rounded-full overflow-hidden mt-1">
                  <div className="bg-rose-500 h-full w-[88%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-slate-300">
                  <span>Milestone Delay</span>
                  <strong className="text-rose-400">84 / 100</strong>
                </div>
                <div className="w-full bg-slate-950 h-1 rounded-full overflow-hidden mt-1">
                  <div className="bg-rose-500 h-full w-[84%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-slate-300">
                  <span>Fund Disbursal Divergence</span>
                  <strong className="text-amber-400">72 / 100</strong>
                </div>
                <div className="w-full bg-slate-950 h-1 rounded-full overflow-hidden mt-1">
                  <div className="bg-amber-500 h-full w-[72%]" />
                </div>
              </div>
            </div>
          </div>

          {/* Ground Vitals & Telemetry */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 shadow-gov-md space-y-3">
            <div className="font-bold text-white uppercase text-xs border-b border-slate-800 pb-2">
              Ground Vitals &amp; Telemetry
            </div>

            <div className="space-y-2 text-[11px]">
              <div className="flex justify-between">
                <span className="text-slate-400">Sanctioned Outlay:</span>
                <span className="text-white font-bold">₹48.50 Lakh</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">PFMS Disbursed:</span>
                <span className="text-blue-400 font-bold">₹37.80 Lakh (78%)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Physical % Complete:</span>
                <span className="text-rose-400 font-bold">38% (-47% Deficit)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Stagnation Window:</span>
                <span className="text-amber-400 font-bold">+96 Days</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Contractor Entity:</span>
                <span className="text-white">Coastal Engineering Works Ltd</span>
              </div>
            </div>
          </div>

          {/* Investigative Commands */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 shadow-gov-md space-y-2">
            <div className="font-bold text-white uppercase text-xs border-b border-slate-800 pb-2">
              Investigative Commands
            </div>

            <button className="w-full py-1.5 bg-slate-950 hover:bg-slate-800 text-slate-200 rounded border border-slate-800 text-left px-3 text-[11px] flex justify-between items-center">
              <span>Order Satellite Rescan (Bhuvan)</span>
              <ChevronRight className="w-3 h-3 text-slate-500" />
            </button>

            <button className="w-full py-1.5 bg-slate-950 hover:bg-slate-800 text-slate-200 rounded border border-slate-800 text-left px-3 text-[11px] flex justify-between items-center">
              <span>Coordinate Field Inspection</span>
              <ChevronRight className="w-3 h-3 text-slate-500" />
            </button>

            <button className="w-full py-1.5 bg-slate-950 hover:bg-slate-800 text-slate-200 rounded border border-slate-800 text-left px-3 text-[11px] flex justify-between items-center">
              <span>Launch Cadastral GIS Engine</span>
              <ChevronRight className="w-3 h-3 text-slate-500" />
            </button>

            <button className="w-full py-1.5 bg-slate-950 hover:bg-slate-800 text-slate-200 rounded border border-slate-800 text-left px-3 text-[11px] flex justify-between items-center">
              <span>Open Multi-Project BoQ Diff Tool</span>
              <ChevronRight className="w-3 h-3 text-slate-500" />
            </button>
          </div>

          {/* Immutable Audit Trail */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 shadow-gov-md space-y-3">
            <div className="font-bold text-white uppercase text-xs border-b border-slate-800 pb-2">
              Immutable Audit Trail
            </div>

            <div className="space-y-2 text-[10px]">
              {caseData.auditTrail.map((log: any, idx: number) => (
                <div key={idx} className="p-2 bg-slate-950 rounded border border-slate-800 space-y-0.5">
                  <div className="text-slate-400">{log.timestamp}</div>
                  <div className="font-bold text-white">{log.action}</div>
                  <div className="text-blue-400">Actor: {log.actor}</div>
                </div>
              ))}
            </div>

            <div className="p-2.5 bg-slate-950 rounded border border-slate-800 text-[10px] text-slate-400 font-mono">
              SHA256 Cryptographic Stamp:<br />
              <strong className="text-emerald-400">8f9b7c2a4j8b27e8d642...91d0e6</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

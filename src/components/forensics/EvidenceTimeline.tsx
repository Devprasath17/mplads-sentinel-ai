import React from 'react';
import { Calendar, CheckCircle2, Clock, AlertTriangle, FileText } from 'lucide-react';

export const EvidenceTimeline: React.FC = () => {
  const events = [
    {
      date: 'Jan 12, 2025',
      title: 'Project Recommended by Hon. MP',
      source: 'MPLADS Portal',
      status: 'VERIFIED',
      icon: CheckCircle2,
      color: 'text-emerald-400 border-emerald-500/40 bg-emerald-950/40',
      description: 'Proposal received for Community Infrastructure Centre at Kovalam Coast.'
    },
    {
      date: 'Feb 03, 2025',
      title: 'Administrative Sanction Granted (₹48.50L)',
      source: 'District Collectorate Chennai',
      status: 'SANCTIONED',
      icon: CheckCircle2,
      color: 'text-blue-400 border-blue-500/40 bg-blue-950/40',
      description: 'Administrative approval issued under Para 4.2 MoSPI Guidelines.'
    },
    {
      date: 'Mar 10, 2025',
      title: 'Work Order Issued to Sri Balaji Coastal Infra',
      source: 'DRDA Division-I',
      status: 'STARTED',
      icon: CheckCircle2,
      color: 'text-blue-400 border-blue-500/40 bg-blue-950/40',
      description: 'Contractor mobilized site equipment. Initial site clearance completed.'
    },
    {
      date: 'Apr 21, 2025',
      title: 'First Tranche Release (₹18.43L Disbursed)',
      source: 'Treasury PFMS Gateway',
      status: 'DISBURSED',
      icon: Clock,
      color: 'text-amber-400 border-amber-500/40 bg-amber-950/40',
      description: 'First stage payment released. Cumulative financial outlay at 38%.'
    },
    {
      date: 'Aug 01, 2025',
      title: 'AI Sentinel Risk Signal Triggered (87/100 Composite)',
      source: 'Sentinel AI Forensics Engine v4.2',
      status: 'CRITICAL ALERT',
      icon: AlertTriangle,
      color: 'text-rose-400 border-rose-500/60 bg-rose-950/60',
      description: 'Multi-vector anomaly detected: +172% cost variance, 145-day milestone stall, and 92% NLP duplicate similarity with asset MPL-2024-6511.'
    }
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 shadow-gov-md">
      <div className="flex items-center justify-between gap-2 mb-4">
        <div>
          <div className="text-xs font-bold font-mono uppercase tracking-wider text-slate-300 flex items-center gap-2">
            <Calendar className="w-4 h-4 text-blue-400" />
            <span>FORENSIC EVIDENCE & TELEMETRY TIMELINE</span>
          </div>
          <div className="text-[11px] text-slate-400">
            Chronological audit trail of project milestones, disbursements, and AI risk triggers
          </div>
        </div>
      </div>

      <div className="relative pl-6 space-y-4 border-l border-slate-800">
        {events.map((evt, idx) => {
          const Icon = evt.icon;
          return (
            <div key={idx} className="relative group">
              {/* Point marker */}
              <div className="absolute -left-[31px] top-0 p-1.5 rounded-full bg-slate-900 border border-slate-700">
                <Icon className={`w-3.5 h-3.5 ${evt.color.split(' ')[0]}`} />
              </div>

              <div className={`p-3 rounded-lg border text-xs space-y-1 ${evt.color}`}>
                <div className="flex items-center justify-between font-mono">
                  <span className="font-bold text-white text-xs">{evt.title}</span>
                  <span className="text-[10px] text-slate-400 font-semibold">{evt.date}</span>
                </div>
                <div className="text-[11px] text-slate-300 leading-relaxed">
                  {evt.description}
                </div>
                <div className="pt-1.5 flex items-center justify-between text-[10px] font-mono text-slate-400">
                  <span>Source: {evt.source}</span>
                  <span className="font-bold uppercase tracking-wider">{evt.status}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

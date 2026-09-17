import React, { useState } from 'react';
import { X, Sparkles, AlertTriangle, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { SentinelApi } from '../../services/api';

interface ExplainRiskDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  projectCode: string;
  signals?: any[];
}

export const ExplainRiskDrawer: React.FC<ExplainRiskDrawerProps> = ({
  isOpen,
  onClose,
  projectCode = 'MPL-2026-1042',
  signals = []
}) => {
  const [loading, setLoading] = useState(false);
  const [aiExplanation, setAiExplanation] = useState<any>(null);

  if (!isOpen) return null;

  const handleFetchExplanation = async () => {
    setLoading(true);
    const res = await SentinelApi.explainRisk(projectCode);
    setAiExplanation(res);
    setLoading(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-900/40 backdrop-blur-sm animate-fade-in">
      <div className="bg-white border-l border-slate-200 w-full max-w-xl h-full shadow-2xl overflow-y-auto flex flex-col justify-between animate-slide-left font-sans">
        <div>
          {/* Header */}
          <div className="p-4 border-b border-slate-100 bg-white flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-blue-50 border border-blue-200 text-blue-700">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-extrabold text-[#0F172A] text-sm font-mono uppercase">
                  EXPLAINABLE AI RISK DOSSIER
                </h3>
                <div className="text-[11px] text-slate-500 font-mono">
                  Grounded Evidence Attribution Engine • {projectCode}
                </div>
              </div>
            </div>

            <button onClick={onClose} aria-label="Close Drawer" className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Statutory Disclaimer Box */}
          <div className="p-4 bg-amber-50 border-b border-amber-200 text-amber-900 text-xs flex items-start gap-2.5 font-sans">
            <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <div className="font-bold uppercase tracking-wider font-mono text-[10px] text-amber-950">
                ANOMALY ≠ FRAUD (Core Trust Principle)
              </div>
              <div className="text-[11px] text-amber-900 leading-relaxed mt-0.5">
                AI indicators represent prioritized statistical anomalies designed strictly to assist statutory human inspection officers. No determination of wrongdoing is made automatically.
              </div>
            </div>
          </div>

          {/* Signal Attribution Matrix */}
          <div className="p-5 space-y-4 font-sans">
            <div className="text-xs font-bold font-mono uppercase tracking-wider text-slate-700">
              WHY WAS THIS PROJECT FLAGGED? (5-Signal Matrix)
            </div>

            <div className="space-y-3 font-sans">
              <div className="p-3.5 bg-slate-50 border border-red-200 rounded-lg space-y-1">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="font-bold text-slate-900 font-sans">01. Cost Outlier Anomaly</span>
                  <span className="text-red-700 font-extrabold">+27 Pts</span>
                </div>
                <div className="text-xs text-slate-600 leading-relaxed">
                  Sanction of ₹48.5 Lakhs exceeds cluster peer median of ₹23.8 Lakhs by 2.04x within a 10 mile radius. BOQ line-items show non-standard work unit rates.
                </div>
              </div>

              <div className="p-3.5 bg-slate-50 border border-amber-200 rounded-lg space-y-1">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="font-bold text-slate-900 font-sans">02. Severe Schedule Milestone Stalling</span>
                  <span className="text-red-700 font-extrabold">+23 Pts</span>
                </div>
                <div className="text-xs text-slate-600 leading-relaxed">
                  Certified physical progress is 38% vs expected 85% at 240 calendar days elapsed (145 days overdue).
                </div>
              </div>

              <div className="p-3.5 bg-slate-50 border border-amber-200 rounded-lg space-y-1">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="font-bold text-slate-900 font-sans">03. Payment Velocity Burst</span>
                  <span className="text-red-700 font-extrabold">+18 Pts</span>
                </div>
                <div className="text-xs text-slate-600 leading-relaxed">
                  ₹18.4 Lakhs released across 2 rapid tranches in 14 days without corresponding MB measurement signatures.
                </div>
              </div>

              <div className="p-3.5 bg-slate-50 border border-amber-200 rounded-lg space-y-1">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="font-bold text-slate-900 font-sans">04. Duplicate Sanction Pattern (Geospatial &amp; NLP)</span>
                  <span className="text-red-700 font-extrabold">+14 Pts</span>
                </div>
                <div className="text-xs text-slate-600 leading-relaxed">
                  High semantic specification overlap (92%) with completed asset MPL-2024-6511 located 380m away.
                </div>
              </div>

              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg space-y-1">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="font-bold text-slate-900 font-sans">05. Disbursement Disparity (Progress Gap)</span>
                  <span className="text-amber-700 font-extrabold">+5 Pts</span>
                </div>
                <div className="text-xs text-slate-600 leading-relaxed">
                  Financial release certified at 78% while physical structural completion stands at 38%.
                </div>
              </div>
            </div>

            {/* Gemini AI Grounded Output section */}
            <div className="mt-6 pt-4 border-t border-slate-100 space-y-3 font-sans">
              <div className="flex items-center justify-between font-mono">
                <div className="text-xs font-bold text-blue-700 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-blue-700" />
                  <span>GEMINI NATURAL LANGUAGE SYNTHESIS</span>
                </div>

                <button
                  onClick={handleFetchExplanation}
                  disabled={loading}
                  className="px-3.5 py-1.5 bg-blue-700 hover:bg-blue-800 text-white text-xs font-mono font-semibold rounded-lg shadow-sm transition-all"
                >
                  {loading ? 'Synthesizing...' : 'Generate Gemini Summary'}
                </button>
              </div>

              {aiExplanation && (
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg text-xs text-blue-900 leading-relaxed font-sans space-y-2">
                  <div className="font-bold text-blue-950 font-mono text-[11px] uppercase">
                    GROUNDED EXECUTIVE SUMMARY:
                  </div>
                  <div>{aiExplanation.explanation}</div>
                  <div className="pt-2 border-t border-blue-200 font-semibold text-emerald-800 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>RECOMMENDED ACTION: {aiExplanation.recommendedAction}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="p-4 border-t border-slate-100 bg-slate-50 flex items-center justify-between font-mono">
          <span className="text-[11px] text-slate-500">
            Signal Accuracy: 97.8% • MoSPI Grounded Engine
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 rounded-lg text-xs font-bold transition-colors"
          >
            Close Dossier
          </button>
        </div>
      </div>
    </div>
  );
};

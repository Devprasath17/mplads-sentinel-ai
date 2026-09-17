import React from 'react';

interface RiskScoreGaugeProps {
  score: number;
  size?: number;
  label?: string;
  sublabel?: string;
  revision?: string;
  robustness?: string;
}

export const RiskScoreGauge: React.FC<RiskScoreGaugeProps> = ({
  score,
  size = 140,
  label = "Composite Risk Index",
  sublabel = "High Attention Priority",
  revision = "4.2a",
  robustness = "98%"
}) => {
  const strokeWidth = 10;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = Math.min(100, Math.max(0, score));
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  let strokeColor = "#15803D"; // Low
  if (score >= 80) strokeColor = "#DC2626"; // Critical
  else if (score >= 70) strokeColor = "#EA580C"; // High
  else if (score >= 50) strokeColor = "#D97706"; // Moderate

  return (
    <div className="flex flex-col items-center justify-center p-3">
      <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="transform -rotate-90">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#E2E8F0"
            strokeWidth={strokeWidth}
            fill="transparent"
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out"
          />
        </svg>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <span className="text-4xl font-extrabold font-mono tracking-tight text-slate-900">
            {score}
          </span>
          <span className="text-xs font-mono text-slate-500 font-medium -mt-1">
            / 100
          </span>
        </div>
      </div>

      <div className="mt-3 text-center">
        <div className="text-xs font-bold uppercase tracking-wider text-slate-800 font-mono">{label}</div>
        <div className="text-[11px] text-red-700 font-semibold mt-0.5">{sublabel}</div>
        <div className="mt-1 flex items-center justify-center gap-2 text-[10px] text-slate-500 font-mono">
          <span>Rev: {revision}</span>
          <span>•</span>
          <span>Robustness: {robustness}</span>
        </div>
      </div>
    </div>
  );
};


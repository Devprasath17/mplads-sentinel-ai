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

  let strokeColor = "#10B981"; // Low
  if (score >= 80) strokeColor = "#EF4444"; // Critical
  else if (score >= 70) strokeColor = "#F97316"; // High
  else if (score >= 50) strokeColor = "#F59E0B"; // Moderate

  return (
    <div className="flex flex-col items-center justify-center p-3">
      <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="transform -rotate-90">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#1E293B"
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
          <span className="text-3xl font-extrabold font-mono tracking-tight text-white drop-shadow-sm">
            {score}
          </span>
          <span className="text-[11px] font-mono text-slate-400 font-semibold -mt-0.5">
            / 100
          </span>
        </div>
      </div>

      <div className="mt-2 text-center">
        <div className="text-xs font-bold uppercase tracking-wider text-slate-200">{label}</div>
        <div className="text-[11px] text-rose-400 font-medium">{sublabel}</div>
        <div className="mt-1 flex items-center justify-center gap-2 text-[10px] text-slate-400 font-mono">
          <span>Rev: {revision}</span>
          <span>•</span>
          <span>Robustness: {robustness}</span>
        </div>
      </div>
    </div>
  );
};

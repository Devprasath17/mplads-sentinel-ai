import React from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import {
  Search,
  ChevronRight,
  RefreshCw,
  Bell,
  SlidersHorizontal,
  UserCheck,
  Calendar,
  Globe
} from 'lucide-react';

interface TopHeaderProps {
  onOpenSearch: () => void;
  selectedFy: string;
  setSelectedFy: (fy: string) => void;
  selectedState: string;
  setSelectedState: (st: string) => void;
}

export const TopHeader: React.FC<TopHeaderProps> = ({
  onOpenSearch,
  selectedFy,
  setSelectedFy,
  selectedState,
  setSelectedState
}) => {
  const location = useLocation();
  const navigate = useNavigate();

  // Dynamic breadcrumbs generation based on current pathname
  const renderBreadcrumbs = () => {
    const path = location.pathname;
    
    if (path === '/') {
      return <span className="font-bold text-white">National Oversight</span>;
    }
    
    if (path.startsWith('/state')) {
      return (
        <div className="flex items-center gap-1.5 text-xs font-medium">
          <Link to="/" className="hover:text-blue-400 text-slate-400">National Oversight</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="font-bold text-white">Tamil Nadu (TN)</span>
        </div>
      );
    }

    if (path.startsWith('/district')) {
      return (
        <div className="flex items-center gap-1.5 text-xs font-medium">
          <Link to="/" className="hover:text-blue-400 text-slate-400">National Oversight</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <Link to="/state/TN" className="hover:text-blue-400 text-slate-400">Tamil Nadu</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="font-bold text-white">Chennai Metropolitan District (TN-CHN)</span>
        </div>
      );
    }

    if (path.startsWith('/project/')) {
      const code = path.split('/')[2] || 'MPL-2026-1042';
      return (
        <div className="flex items-center gap-1.5 text-xs font-medium">
          <Link to="/" className="hover:text-blue-400 text-slate-400">National Oversight</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <Link to="/district/TN-CHN" className="hover:text-blue-400 text-slate-400">Chennai</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="font-bold text-white font-mono">{code}</span>
        </div>
      );
    }

    if (path === '/risk-center') {
      return (
        <div className="flex items-center gap-1.5 text-xs font-medium">
          <Link to="/" className="hover:text-blue-400 text-slate-400">National Oversight</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="font-bold text-white">AI Risk Center & Operational Alerts Queue</span>
        </div>
      );
    }

    return <span className="font-bold text-white">Sentinel Oversight Cockpit</span>;
  };

  return (
    <header className="bg-gov-header border-b border-slate-800 px-4 py-2.5 flex items-center justify-between gap-4 sticky top-0 z-20 shadow-gov-sm">
      {/* Left breadcrumb area */}
      <div className="flex items-center gap-3">
        <div className="hidden sm:flex items-center gap-2 px-2.5 py-1 bg-slate-900 border border-slate-700/80 rounded-md text-xs font-mono text-slate-300">
          <Globe className="w-3.5 h-3.5 text-blue-400" />
          <span className="font-semibold text-white">MoSPI Cockpit</span>
        </div>
        <div className="h-4 w-px bg-slate-700 hidden sm:block" />
        <div className="text-xs">{renderBreadcrumbs()}</div>
      </div>

      {/* Right controls */}
      <div className="flex items-center gap-3">
        {/* Global search button */}
        <button
          onClick={onOpenSearch}
          className="flex items-center gap-2 px-3 py-1.5 bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-lg text-xs text-slate-300 font-mono transition-all shadow-sm group"
        >
          <Search className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-400" />
          <span className="hidden md:inline">Quick Search...</span>
          <kbd className="hidden lg:inline bg-slate-800 px-1.5 py-0.5 rounded text-[10px] text-slate-400 border border-slate-700">
            Ctrl+K
          </kbd>
        </button>

        {/* FY Selector */}
        <div className="hidden lg:flex items-center gap-1.5 bg-slate-900 border border-slate-700 px-2.5 py-1 rounded-lg text-xs font-mono text-slate-300">
          <Calendar className="w-3.5 h-3.5 text-slate-400" />
          <select
            value={selectedFy}
            onChange={(e) => setSelectedFy(e.target.value)}
            aria-label="Financial Year Filter"
            className="bg-transparent text-white font-bold focus:outline-none cursor-pointer text-xs"
          >
            <option value="2025-2026" className="bg-slate-900 text-white">FY 2025-2026</option>
            <option value="2024-2025" className="bg-slate-900 text-white">FY 2024-2025</option>
            <option value="2023-2024" className="bg-slate-900 text-white">FY 2023-2024</option>
          </select>
        </div>

        {/* Jurisdiction Selector */}
        <div className="hidden xl:flex items-center gap-1.5 bg-slate-900 border border-slate-700 px-2.5 py-1 rounded-lg text-xs font-mono text-slate-300">
          <select
            value={selectedState}
            onChange={(e) => {
              setSelectedState(e.target.value);
              if (e.target.value === 'ALL') navigate('/');
              else navigate(`/state/${e.target.value}`);
            }}
            aria-label="Jurisdiction State Filter"
            className="bg-transparent text-white font-semibold focus:outline-none cursor-pointer text-xs"
          >
            <option value="ALL" className="bg-slate-900 text-white">Jurisdiction: All 28 States, 8 UTs</option>
            <option value="TN" className="bg-slate-900 text-white">Tamil Nadu (TN)</option>
            <option value="UP" className="bg-slate-900 text-white">Uttar Pradesh (UP)</option>
            <option value="MH" className="bg-slate-900 text-white">Maharashtra (MH)</option>
            <option value="WB" className="bg-slate-900 text-white">West Bengal (WB)</option>
            <option value="KA" className="bg-slate-900 text-white">Karnataka (KA)</option>
            <option value="BR" className="bg-slate-900 text-white">Bihar (BR)</option>
          </select>
        </div>

        {/* NIC Sync Live badge */}
        <div className="hidden sm:flex items-center gap-1.5 bg-blue-950/80 border border-blue-600/40 px-2 py-1 rounded text-[11px] font-mono text-blue-300">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="font-bold">NIC LIVE SYNC ACTIVE</span>
        </div>

        {/* Notifications & Profile */}
        <div className="flex items-center gap-2 border-l border-slate-700 pl-3">
          <button 
            aria-label="Notifications"
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 relative"
          >
            <Bell className="w-4 h-4" />
            <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-rose-500" />
          </button>

          <div className="flex items-center gap-2 pl-1">
            <div className="w-8 h-8 rounded-full bg-blue-900 border border-blue-400 flex items-center justify-center font-bold text-white text-xs">
              RV
            </div>
            <div className="hidden md:block text-left text-xs leading-tight">
              <div className="font-bold text-white">Dr. Rajeshwar V.</div>
              <div className="text-[10px] text-slate-400 font-mono">JOINT SECY (MoSPI)</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

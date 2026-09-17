import React from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import {
  Search,
  ChevronRight,
  Bell,
  Calendar,
  Globe,
  HelpCircle,
  User,
  ShieldAlert
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
      return (
        <span className="font-semibold text-slate-800">
          National Dashboard
        </span>
      );
    }

    if (path.startsWith('/state')) {
      return (
        <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500">
          <Link to="/" className="hover:text-blue-700 transition-colors">National</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="font-semibold text-slate-800">State Dashboard (Tamil Nadu)</span>
        </div>
      );
    }

    if (path.startsWith('/district')) {
      return (
        <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500">
          <Link to="/" className="hover:text-blue-700 transition-colors">National</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link to="/state/TN" className="hover:text-blue-700 transition-colors">Tamil Nadu</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="font-semibold text-slate-800">District Dashboard (Chennai)</span>
        </div>
      );
    }

    if (path.startsWith('/project/')) {
      const code = path.split('/')[2] || 'MPL-2026-1042';
      return (
        <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500">
          <Link to="/" className="hover:text-blue-700 transition-colors">National</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link to="/state/TN" className="hover:text-blue-700 transition-colors">Tamil Nadu</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link to="/district/TN-CHN" className="hover:text-blue-700 transition-colors">Chennai</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="font-semibold text-slate-800 font-mono">{code}</span>
        </div>
      );
    }

    if (path === '/risk-center') {
      return (
        <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500">
          <Link to="/" className="hover:text-blue-700 transition-colors">National</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="font-semibold text-slate-800">AI Risk Center</span>
        </div>
      );
    }

    return (
      <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500">
        <Link to="/" className="hover:text-blue-700 transition-colors">National</Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <span className="font-semibold text-slate-800">Programme Oversight</span>
      </div>
    );
  };

  return (
    <header className="bg-white border-b border-slate-200 px-5 py-2.5 flex items-center justify-between gap-4 sticky top-0 z-20 shadow-gov-sm">
      {/* Left branding title & breadcrumbs */}
      <div className="flex items-center gap-4">
        <div className="hidden sm:block border-r border-slate-200 pr-4">
          <div className="font-extrabold text-slate-900 text-base leading-snug tracking-tight font-sans">
            MPLADS Sentinel AI
          </div>
          <div className="text-[11px] text-slate-500 font-medium">
            Government Programme Intelligence & Risk Monitoring
          </div>
        </div>
        <div className="text-xs">{renderBreadcrumbs()}</div>
      </div>

      {/* Right controls */}
      <div className="flex items-center gap-3">
        {/* Global search button */}
        <button
          onClick={onOpenSearch}
          className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg text-xs text-slate-600 font-sans transition-all shadow-sm group"
        >
          <Search className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-700" />
          <span className="hidden md:inline font-medium">Search works, IDs, districts...</span>
          <kbd className="hidden lg:inline bg-white px-1.5 py-0.5 rounded text-[10px] text-slate-400 border border-slate-200 font-mono shadow-2xs">
            Ctrl+K
          </kbd>
        </button>

        {/* FY Selector */}
        <div className="hidden lg:flex items-center gap-1.5 bg-slate-50 border border-slate-200 px-2.5 py-1.5 rounded-lg text-xs font-mono text-slate-600">
          <Calendar className="w-3.5 h-3.5 text-slate-400" />
          <select
            value={selectedFy}
            onChange={(e) => setSelectedFy(e.target.value)}
            aria-label="Financial Year Filter"
            className="bg-transparent text-slate-800 font-semibold focus:outline-none cursor-pointer text-xs"
          >
            <option value="2025-2026" className="bg-white text-slate-800">FY 2025-2026</option>
            <option value="2024-2025" className="bg-white text-slate-800">FY 2024-2025</option>
            <option value="2023-2024" className="bg-white text-slate-800">FY 2023-2024</option>
          </select>
        </div>

        {/* Jurisdiction Selector */}
        <div className="hidden xl:flex items-center gap-1.5 bg-slate-50 border border-slate-200 px-2.5 py-1.5 rounded-lg text-xs font-mono text-slate-600">
          <select
            value={selectedState}
            onChange={(e) => {
              setSelectedState(e.target.value);
              if (e.target.value === 'ALL') navigate('/');
              else navigate(`/state/${e.target.value}`);
            }}
            aria-label="Jurisdiction State Filter"
            className="bg-transparent text-slate-800 font-semibold focus:outline-none cursor-pointer text-xs"
          >
            <option value="ALL" className="bg-white text-slate-800">Jurisdiction: All States & UTs</option>
            <option value="TN" className="bg-white text-slate-800">Tamil Nadu (TN)</option>
            <option value="UP" className="bg-white text-slate-800">Uttar Pradesh (UP)</option>
            <option value="MH" className="bg-white text-slate-800">Maharashtra (MH)</option>
            <option value="WB" className="bg-white text-slate-800">West Bengal (WB)</option>
            <option value="KA" className="bg-white text-slate-800">Karnataka (KA)</option>
            <option value="BR" className="bg-white text-slate-800">Bihar (BR)</option>
          </select>
        </div>

        {/* Action icons */}
        <div className="flex items-center gap-1.5 border-l border-slate-200 pl-3">
          <button
            onClick={onOpenSearch}
            title="System Help & Documentation"
            className="p-1.5 rounded-lg text-slate-500 hover:text-blue-700 hover:bg-slate-100 transition-colors"
          >
            <HelpCircle className="w-4 h-4" />
          </button>

          <button
            aria-label="Notifications"
            className="p-1.5 rounded-lg text-slate-500 hover:text-blue-700 hover:bg-slate-100 relative transition-colors"
          >
            <Bell className="w-4 h-4" />
            <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-red-600" />
          </button>

          {/* User Profile */}
          <div className="flex items-center gap-2 pl-2">
            <div className="w-8 h-8 rounded-full bg-blue-700 text-white font-bold text-xs flex items-center justify-center shadow-sm">
              RV
            </div>
            <div className="hidden md:block text-left text-xs leading-tight">
              <div className="font-bold text-slate-900">Dr. Rajeshwar V.</div>
              <div className="text-[10px] text-slate-500 font-medium">Joint Secy (MoSPI)</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};


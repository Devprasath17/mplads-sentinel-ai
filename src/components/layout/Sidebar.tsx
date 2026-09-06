import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  Globe,
  Building2,
  MapPin,
  ShieldAlert,
  Search,
  FileCheck,
  Map,
  Bell,
  Cpu,
  Briefcase,
  Layers,
  History,
  Lock,
  Sparkles,
  ChevronRight,
  DollarSign
} from 'lucide-react';

export const Sidebar: React.FC = () => {
  const location = useLocation();

  const navigationSections = [
    {
      title: 'EXECUTIVE OVERVIEW',
      items: [
        { label: 'National Oversight', path: '/', icon: Globe },
        { label: 'State Dashboard', path: '/state/TN', icon: Building2 },
        { label: 'District Dashboard', path: '/district/TN-CHN', icon: MapPin },
      ]
    },
    {
      title: 'MONITORING & WORKS',
      items: [
        { label: 'Projects & Works', path: '/projects', icon: Briefcase },
        { label: 'Physical Progress', path: '/progress', icon: Layers },
        { label: 'Fund Flow & Disbursal', path: '/fund-flow', icon: DollarSign },
      ]
    },
    {
      title: 'AI INTELLIGENCE',
      items: [
        { label: 'AI Risk Center', path: '/risk-center', icon: ShieldAlert },
        { label: 'Anomaly Detection', path: '/anomalies', icon: Cpu },
        { label: 'Duplicate Detection', path: '/duplicates', icon: Search },
        { label: 'AI Analyst Copilot', path: '/ai-analyst', icon: Sparkles },
      ]
    },
    {
      title: 'SPATIAL & ENFORCEMENT',
      items: [
        { label: 'GIS Spatial Map', path: '/gis-map', icon: Map },
        { label: 'Alerts Queue', path: '/alerts', icon: Bell },
        { label: 'Review Cases', path: '/cases', icon: FileCheck },
        { label: 'AI Forensic Analyst', path: '/project/MPL-2026-1042', icon: Search },
        { label: 'Audit Trail', path: '/audit-trail', icon: History },
      ]
    }
  ];

  return (
    <aside className="w-64 bg-gov-sidebar border-r border-slate-800 flex flex-col justify-between shrink-0 h-screen sticky top-0 z-30 select-none hidden lg:flex">
      <div>
        {/* Header branding */}
        <div className="p-4 border-b border-slate-800 flex items-center gap-3 bg-gov-navy/50">
          <div className="w-9 h-9 rounded-lg bg-blue-700/80 border border-blue-500/50 flex items-center justify-center text-white shadow-md font-extrabold text-sm tracking-wide font-mono">
            MS
          </div>
          <div>
            <div className="font-extrabold text-white text-sm tracking-tight font-mono">
              MPLADS SENTINEL
            </div>
            <div className="text-[10px] text-slate-400 font-medium tracking-wider uppercase flex items-center gap-1">
              <span>GOVT. OF INDIA</span>
              <span>•</span>
              <span className="text-blue-400 font-bold">SIH26102</span>
            </div>
          </div>
        </div>

        {/* Audit Mode Tag */}
        <div className="px-4 py-2 bg-slate-950/60 border-b border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
          <span className="flex items-center gap-1">
            <Lock className="w-3 h-3 text-emerald-400" />
            <span>AUDIT MODE</span>
          </span>
          <span className="font-bold text-slate-200 bg-slate-800 px-1.5 py-0.5 rounded text-[10px]">
            SEC-IN-NDLS-01
          </span>
        </div>

        {/* Navigation links */}
        <div className="p-3 space-y-5 overflow-y-auto max-h-[calc(100vh-180px)]">
          {navigationSections.map((section, idx) => (
            <div key={idx} className="space-y-1">
              <div className="px-3 text-[10px] font-bold font-mono text-slate-400 uppercase tracking-widest">
                {section.title}
              </div>
              {section.items.map(item => {
                const Icon = item.icon;
                const isActive = item.path === '/'
                  ? location.pathname === '/'
                  : location.pathname === item.path || location.pathname.startsWith(item.path + '/');

                return (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={`flex items-center justify-between px-3 py-2 rounded-lg text-xs transition-all duration-150 ease-out group ${
                      isActive
                        ? 'bg-blue-600/90 text-white font-bold shadow-sm border-l-4 border-l-blue-400 pl-2.5'
                        : 'text-slate-300 font-medium hover:bg-slate-800/80 hover:text-white hover:border-l-2 hover:border-l-slate-500 hover:pl-2.5'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <Icon className={`w-4 h-4 transition-colors ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-blue-400'}`} />
                      <span>{item.label}</span>
                    </div>
                    {isActive && <ChevronRight className="w-3.5 h-3.5 text-blue-200" />}
                  </NavLink>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* Footer Info */}
      <div className="p-3 border-t border-slate-800 bg-slate-950/80 text-[10px] font-mono text-slate-400 flex items-center justify-between">
        <div>
          <div>MODEL VER. <span className="text-slate-200">v4.2.1-prod</span></div>
          <div>LEDGER SYNC <span className="text-emerald-400">#9824-A</span></div>
        </div>
        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" title="System Online" />
      </div>
    </aside>
  );
};

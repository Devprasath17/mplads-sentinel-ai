import React, { useState } from 'react';
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
  ChevronDown,
  DollarSign,
  PanelLeftClose,
  PanelLeftOpen,
  Settings,
  AlertTriangle
} from 'lucide-react';

export const Sidebar: React.FC = () => {
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    'OVERVIEW': true,
    'GEOGRAPHIC MONITORING': true,
    'AI RISK INTELLIGENCE': true,
    'PROJECT MONITORING': true,
    'FINANCIAL INTELLIGENCE': true,
    'REVIEW & GOVERNANCE': true,
    'SYSTEM': true,
  });

  const toggleSection = (title: string) => {
    setOpenSections(prev => ({ ...prev, [title]: !prev[title] }));
  };

  const navigationSections = [
    {
      title: 'OVERVIEW',
      items: [
        { label: 'National Dashboard', path: '/', icon: Globe },
      ]
    },
    {
      title: 'GEOGRAPHIC MONITORING',
      items: [
        { label: 'State Dashboard', path: '/state/TN', icon: Building2 },
        { label: 'District Dashboard', path: '/district/TN-CHN', icon: MapPin },
      ]
    },
    {
      title: 'AI RISK INTELLIGENCE',
      items: [
        { label: 'AI Risk Center', path: '/risk-center', icon: ShieldAlert },
        { label: 'Risk Alerts', path: '/alerts', icon: AlertTriangle },
        { label: 'Duplicate & Similar Works', path: '/duplicates', icon: Search },
        { label: 'Anomaly Detection', path: '/anomalies', icon: Cpu },
        { label: 'AI Copilot', path: '/ai-analyst', icon: Sparkles },
      ]
    },
    {
      title: 'PROJECT MONITORING',
      items: [
        { label: 'Projects', path: '/projects', icon: Briefcase },
        { label: 'Project Audit', path: '/project/MPL-2026-1042', icon: Search },
        { label: 'Physical Progress', path: '/progress', icon: Layers },
      ]
    },
    {
      title: 'FINANCIAL INTELLIGENCE',
      items: [
        { label: 'Fund Flow & Finance', path: '/fund-flow', icon: DollarSign },
      ]
    },
    {
      title: 'REVIEW & GOVERNANCE',
      items: [
        { label: 'Review Cases', path: '/cases', icon: FileCheck },
        { label: 'Audit Trail', path: '/audit-trail', icon: History },
      ]
    },
    {
      title: 'SYSTEM',
      items: [
        { label: 'Notifications', path: '/alerts', icon: Bell },
        { label: 'System Settings', path: '/audit-trail', icon: Settings },
      ]
    }
  ];

  return (
    <aside
      className={`bg-white border-r border-slate-200 flex flex-col justify-between shrink-0 h-screen sticky top-0 z-30 select-none transition-all duration-200 ${
        isCollapsed ? 'w-16' : 'w-64'
      } hidden lg:flex shadow-gov-sm`}
    >
      <div>
        {/* Header Branding */}
        <div className="p-3.5 border-b border-slate-200 flex items-center justify-between bg-slate-50/80">
          <div className="flex items-center gap-2.5 overflow-hidden">
            <div className="w-9 h-9 rounded-lg bg-blue-700 flex items-center justify-center text-white font-bold text-xs shadow-sm shrink-0 font-mono tracking-wider">
              MS
            </div>
            {!isCollapsed && (
              <div className="truncate">
                <div className="font-extrabold text-slate-900 text-sm tracking-tight leading-none font-sans">
                  MPLADS SENTINEL
                </div>
                <div className="text-[10px] text-slate-500 font-medium tracking-wider uppercase mt-1 flex items-center gap-1">
                  <span className="font-semibold text-blue-700">MoSPI OVERSIGHT</span>
                  <span>•</span>
                  <span>v4.2</span>
                </div>
              </div>
            )}
          </div>

          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            title={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 rounded-md transition-colors shrink-0"
          >
            {isCollapsed ? <PanelLeftOpen className="w-4 h-4" /> : <PanelLeftClose className="w-4 h-4" />}
          </button>
        </div>

        {/* Audit Mode Status Pill */}
        {!isCollapsed && (
          <div className="px-3.5 py-1.5 bg-slate-100/80 border-b border-slate-200 flex items-center justify-between text-[11px] font-mono text-slate-600">
            <span className="flex items-center gap-1.5">
              <Lock className="w-3 h-3 text-emerald-600" />
              <span className="font-medium text-slate-700">AUDIT MODE</span>
            </span>
            <span className="font-bold text-blue-700 bg-blue-50 border border-blue-200 px-1.5 py-0.5 rounded text-[10px]">
              SEC-IN-NDLS
            </span>
          </div>
        )}

        {/* Navigation Sections */}
        <div className="p-2 space-y-4 overflow-y-auto max-h-[calc(100vh-175px)]">
          {navigationSections.map((section) => {
            const isOpen = openSections[section.title] ?? true;

            return (
              <div key={section.title} className="space-y-0.5">
                {!isCollapsed ? (
                  <button
                    onClick={() => toggleSection(section.title)}
                    className="w-full px-2.5 py-1 flex items-center justify-between text-[10px] font-bold font-mono text-slate-400 uppercase tracking-wider hover:text-slate-600 transition-colors"
                  >
                    <span>{section.title}</span>
                    {isOpen ? <ChevronDown className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
                  </button>
                ) : (
                  <div className="h-2" />
                )}

                {(isOpen || isCollapsed) &&
                  section.items.map((item) => {
                    const Icon = item.icon;
                    const isActive =
                      item.path === '/'
                        ? location.pathname === '/'
                        : location.pathname === item.path ||
                          (item.path !== '/' && location.pathname.startsWith(item.path + '/'));

                    return (
                      <NavLink
                        key={item.path + item.label}
                        to={item.path}
                        title={isCollapsed ? item.label : undefined}
                        className={`flex items-center justify-between px-2.5 py-2 rounded-lg text-xs font-medium transition-all duration-150 group ${
                          isActive
                            ? 'bg-blue-50 text-blue-700 font-semibold border-l-4 border-l-blue-700 pl-2 shadow-sm'
                            : 'text-slate-600 hover:bg-slate-100/80 hover:text-slate-900'
                        }`}
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <Icon
                            className={`w-4 h-4 shrink-0 transition-colors ${
                              isActive ? 'text-blue-700' : 'text-slate-400 group-hover:text-slate-600'
                            }`}
                          />
                          {!isCollapsed && <span className="truncate">{item.label}</span>}
                        </div>
                        {!isCollapsed && isActive && (
                          <ChevronRight className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                        )}
                      </NavLink>
                    );
                  })}
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer System Status */}
      <div className="p-3 border-t border-slate-200 bg-slate-50/80 text-[11px] font-mono text-slate-500 flex items-center justify-between">
        {!isCollapsed ? (
          <div>
            <div className="text-[10px]">NIC LIVE SYNC <span className="text-emerald-700 font-bold">ONLINE</span></div>
            <div className="text-[10px] text-slate-400">Ver: 4.2.1-prod</div>
          </div>
        ) : null}
        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse mx-auto" title="NIC Sync Online" />
      </div>
    </aside>
  );
};


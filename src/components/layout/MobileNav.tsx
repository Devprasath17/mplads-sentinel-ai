import React from 'react';
import { NavLink } from 'react-router-dom';
import { Globe, Building2, MapPin, ShieldAlert, FileText } from 'lucide-react';

export const MobileNav: React.FC = () => {
  const items = [
    { label: 'National', path: '/', icon: Globe },
    { label: 'State', path: '/state/TN', icon: Building2 },
    { label: 'District', path: '/district/TN-CHN', icon: MapPin },
    { label: 'AI Risk', path: '/risk-center', icon: ShieldAlert },
    { label: 'Audit', path: '/project/MPL-2026-1042', icon: FileText },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-gov-sidebar border-t border-slate-800 p-2 flex items-center justify-around lg:hidden">
      {items.map(item => {
        const Icon = item.icon;
        return (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex flex-col items-center gap-1 text-[10px] font-mono font-medium p-1.5 rounded-lg transition-all ${
                isActive ? 'text-blue-400 font-bold bg-slate-800/80' : 'text-slate-400 hover:text-white'
              }`
            }
          >
            <Icon className="w-5 h-5" />
            <span>{item.label}</span>
          </NavLink>
        );
      })}
    </nav>
  );
};

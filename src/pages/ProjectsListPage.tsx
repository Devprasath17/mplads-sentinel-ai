import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PROJECTS_LIST_DATA } from '../../server/mockData';
import { RiskBadge } from '../components/common/RiskBadge';
import { Briefcase, Search, Filter, ExternalLink } from 'lucide-react';

export const ProjectsListPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [riskFilter, setRiskFilter] = useState('ALL');

  const filtered = PROJECTS_LIST_DATA.filter(p => {
    const matchesSearch = p.projectCode.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          p.district.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRisk = riskFilter === 'ALL' || p.status === riskFilter;
    return matchesSearch && matchesRisk;
  });

  return (
    <div className="p-4 lg:p-6 space-y-6 max-w-[1700px] mx-auto">
      <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl shadow-gov-md flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest flex items-center gap-1.5">
            <Briefcase className="w-4 h-4" />
            <span>PROJECTS & WORKS REGISTRY</span>
          </div>
          <h1 className="text-xl font-extrabold text-white tracking-tight font-mono mt-0.5">
            National MPLADS Project Database
          </h1>
        </div>
      </div>

      {/* Filter controls */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-900 border border-slate-800 p-3 rounded-xl">
        <div className="flex items-center gap-2 bg-slate-950 border border-slate-700 px-3 py-1.5 rounded-lg w-full max-w-md">
          <Search className="w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Filter by Project Code, Name, or District..."
            className="bg-transparent text-white placeholder-slate-500 text-xs focus:outline-none w-full font-mono"
          />
        </div>

        <div className="flex items-center gap-2 font-mono text-xs">
          <span className="text-slate-400">Risk Filter:</span>
          <select
            value={riskFilter}
            onChange={(e) => setRiskFilter(e.target.value)}
            aria-label="Risk Level Filter"
            className="bg-slate-950 text-white border border-slate-700 rounded px-2.5 py-1 focus:outline-none"
          >
            <option value="ALL">All Risk Levels</option>
            <option value="CRITICAL">Critical Only</option>
            <option value="HIGH">High Risk</option>
            <option value="MODERATE">Moderate Risk</option>
          </select>
        </div>
      </div>

      {/* Projects Table */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-gov-md">
        <table className="w-full text-xs text-left border-collapse font-mono">
          <thead>
            <tr className="border-b border-slate-800 bg-slate-950 text-[10px] uppercase text-slate-400">
              <th className="p-3">Project Code</th>
              <th className="p-3">Description & Location</th>
              <th className="p-3 text-right">Sanctioned Cost</th>
              <th className="p-3 text-center">Progress (Physical vs Financial)</th>
              <th className="p-3 text-center">Risk Score</th>
              <th className="p-3 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            {filtered.map(proj => (
              <tr key={proj.id} className="hover:bg-slate-850 transition-colors">
                <td className="p-3 font-bold text-blue-400">{proj.projectCode}</td>
                <td className="p-3">
                  <div className="font-bold text-white text-xs">{proj.title}</div>
                  <div className="text-[10px] text-slate-400">{proj.district}, {proj.state}</div>
                </td>
                <td className="p-3 text-right font-bold text-emerald-400">₹{proj.sanctionedAmount}L</td>
                <td className="p-3 text-center">
                  <div className="text-white font-bold">{proj.physicalProgress}% Physical</div>
                  <div className="text-[10px] text-blue-400">₹{proj.expenditure}L Released</div>
                </td>
                <td className="p-3 text-center">
                  <RiskBadge level={proj.status} score={proj.overallRisk} size="sm" />
                </td>
                <td className="p-3 text-right">
                  <button
                    onClick={() => navigate(`/project/${proj.projectCode}`)}
                    className="px-3 py-1 bg-blue-600 hover:bg-blue-500 text-white rounded text-xs font-bold font-mono"
                  >
                    Inspect
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

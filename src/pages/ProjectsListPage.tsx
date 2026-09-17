import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PROJECTS_LIST_DATA } from '../../server/mockData';
import { RiskBadge } from '../components/common/RiskBadge';
import { Briefcase, Search, Filter, ArrowUpRight } from 'lucide-react';

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
    <div className="p-6 lg:p-8 space-y-6 max-w-[1700px] mx-auto font-sans">
      <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-gov-sm flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="text-xs font-semibold font-mono text-blue-700 uppercase tracking-wider flex items-center gap-1.5">
            <Briefcase className="w-4 h-4 text-blue-700" />
            <span>PROJECTS REGISTRY</span>
          </div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight mt-1">
            Projects & Works Database
          </h1>
          <p className="text-sm text-slate-600 font-normal mt-0.5">
            Comprehensive national directory of MPLADS sanctioned civil works and implementation status.
          </p>
        </div>
      </div>

      {/* Filter controls */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-white border border-slate-200 p-4 rounded-xl shadow-gov-sm">
        <div className="flex items-center gap-2 bg-slate-50 border border-slate-300 px-3 py-2 rounded-lg w-full max-w-md focus-within:ring-2 focus-within:ring-blue-600">
          <Search className="w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search Project Code, Title, or District..."
            className="bg-transparent text-slate-900 placeholder-slate-500 text-xs focus:outline-none w-full font-sans"
          />
        </div>

        <div className="flex items-center gap-2 font-sans text-xs">
          <span className="text-slate-600 font-medium">Risk Filter:</span>
          <select
            value={riskFilter}
            onChange={(e) => setRiskFilter(e.target.value)}
            aria-label="Risk Level Filter"
            className="bg-slate-50 text-slate-900 border border-slate-300 rounded-lg px-3 py-1.5 focus:outline-none font-medium text-xs"
          >
            <option value="ALL">All Risk Levels</option>
            <option value="CRITICAL">Critical Only</option>
            <option value="HIGH">High Risk</option>
            <option value="MODERATE">Moderate Risk</option>
          </select>
        </div>
      </div>

      {/* Projects Table */}
      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-gov-sm">
        <table className="w-full text-sm text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50 text-xs font-semibold uppercase text-slate-500 font-mono">
              <th className="p-3.5">Project Code</th>
              <th className="p-3.5">Description & Location</th>
              <th className="p-3.5 text-right">Sanctioned Outlay</th>
              <th className="p-3.5 text-center">Progress</th>
              <th className="p-3.5 text-center">Risk Score</th>
              <th className="p-3.5 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 font-sans">
            {filtered.map(proj => (
              <tr key={proj.id} className="hover:bg-slate-50 transition-colors">
                <td className="p-3.5 font-bold font-mono text-blue-700 text-xs">{proj.projectCode}</td>
                <td className="p-3.5">
                  <div className="font-semibold text-slate-900 text-sm">{proj.title}</div>
                  <div className="text-xs text-slate-500">{proj.district}, {proj.state}</div>
                </td>
                <td className="p-3.5 text-right font-bold font-mono text-emerald-700">₹{proj.sanctionedAmount}L</td>
                <td className="p-3.5 text-center">
                  <div className="text-slate-900 font-semibold">{proj.physicalProgress}% Physical</div>
                  <div className="text-xs text-slate-500 font-mono">₹{proj.expenditure}L Expended</div>
                </td>
                <td className="p-3.5 text-center">
                  <RiskBadge level={proj.status} score={proj.overallRisk} size="sm" />
                </td>
                <td className="p-3.5 text-right">
                  <button
                    onClick={() => navigate(`/project/${proj.projectCode}`)}
                    className="px-3.5 py-1.5 bg-blue-700 hover:bg-blue-800 text-white rounded-lg text-xs font-semibold shadow-sm transition-all"
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


import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, ShieldAlert, ArrowRight, MapPin, Building2, Briefcase, FileText } from 'lucide-react';
import { PROJECTS_LIST_DATA, STATES_DATA } from '../../../server/mockData';

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GlobalSearchModal: React.FC<GlobalSearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Open search logic handled upstream
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredProjects = PROJECTS_LIST_DATA.filter(
    p => p.projectCode.toLowerCase().includes(query.toLowerCase()) ||
         p.title.toLowerCase().includes(query.toLowerCase()) ||
         p.district.toLowerCase().includes(query.toLowerCase())
  );

  const filteredStates = STATES_DATA.filter(
    s => s.name.toLowerCase().includes(query.toLowerCase()) ||
         s.code.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelectProject = (projectCode: string) => {
    navigate(`/project/${projectCode}`);
    onClose();
  };

  const handleSelectState = (stateCode: string) => {
    navigate(`/state/${stateCode}`);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-900/40 backdrop-blur-sm animate-fade-in font-sans">
      <div className="bg-white border border-slate-200 rounded-xl w-full max-w-2xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]">
        {/* Search Input Bar */}
        <div className="p-4 border-b border-slate-100 flex items-center gap-3">
          <Search className="w-5 h-5 text-blue-700 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by Project ID (e.g. MPL-2026-1042), State, District, or Review Case..."
            className="w-full bg-transparent text-slate-900 placeholder-slate-400 focus:outline-none text-sm font-sans"
            autoFocus
          />
          <button onClick={onClose} aria-label="Close Modal" className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Body */}
        <div className="p-5 overflow-y-auto space-y-5">
          {/* Quick jump to featured project */}
          <div>
            <div className="text-[10px] font-bold font-mono text-slate-500 uppercase tracking-widest mb-2">
              FEATURED FORENSIC DOSSIER
            </div>
            <div
              onClick={() => handleSelectProject('MPL-2026-1042')}
              className="p-3.5 bg-red-50 border border-red-200 hover:border-red-300 rounded-lg flex items-center justify-between cursor-pointer transition-all group shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-red-100 text-red-800 font-mono font-bold text-xs">
                  87
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-xs font-sans group-hover:text-blue-700 transition-colors">
                    MPL-2026-1042 • Community Infrastructure Centre
                  </div>
                  <div className="text-[11px] text-slate-600 font-sans">
                    Chennai, Tamil Nadu • Outlay: ₹48.5L • Risk: Critical
                  </div>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-700 group-hover:translate-x-1 transition-all" />
            </div>
          </div>

          {/* Projects results */}
          {filteredProjects.length > 0 && (
            <div>
              <div className="text-[10px] font-bold font-mono text-slate-500 uppercase tracking-widest mb-2">
                MATCHING PROJECTS ({filteredProjects.length})
              </div>
              <div className="space-y-1">
                {filteredProjects.map(proj => (
                  <div
                    key={proj.id}
                    onClick={() => handleSelectProject(proj.projectCode)}
                    className="p-3 hover:bg-slate-50 rounded-lg flex items-center justify-between cursor-pointer transition-all text-xs border border-transparent hover:border-slate-200"
                  >
                    <div className="flex items-center gap-2.5">
                      <Briefcase className="w-4 h-4 text-blue-700" />
                      <div>
                        <span className="font-bold text-slate-900 font-mono">{proj.projectCode}</span>
                        <span className="text-slate-600 ml-2 font-sans">{proj.title}</span>
                      </div>
                    </div>
                    <span className="text-[11px] font-mono text-slate-500">{proj.district}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* States results */}
          {filteredStates.length > 0 && (
            <div>
              <div className="text-[10px] font-bold font-mono text-slate-500 uppercase tracking-widest mb-2">
                STATES &amp; JURISDICTIONS
              </div>
              <div className="grid grid-cols-2 gap-2">
                {filteredStates.map(st => (
                  <div
                    key={st.id}
                    onClick={() => handleSelectState(st.code)}
                    className="p-3 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg flex items-center justify-between cursor-pointer transition-all text-xs"
                  >
                    <div className="flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-emerald-700" />
                      <span className="font-semibold text-slate-900">{st.name}</span>
                    </div>
                    <span className="font-mono text-red-700 font-bold">{st.riskIndex} Risk</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="p-3 border-t border-slate-100 bg-slate-50 text-right text-[11px] font-mono text-slate-500">
          Press <kbd className="bg-white border border-slate-200 px-1.5 py-0.5 rounded text-slate-700 font-bold">ESC</kbd> to exit
        </div>
      </div>
    </div>
  );
};

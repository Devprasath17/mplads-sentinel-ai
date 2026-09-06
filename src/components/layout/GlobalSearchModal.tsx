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
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-slate-900 border border-slate-700 rounded-xl w-full max-w-2xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]">
        {/* Search Input Bar */}
        <div className="p-4 border-b border-slate-800 flex items-center gap-3">
          <Search className="w-5 h-5 text-blue-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by Project ID (e.g. MPL-2026-1042), State, District, or Review Case..."
            className="w-full bg-transparent text-white placeholder-slate-500 focus:outline-none text-sm font-mono"
            autoFocus
          />
          <button onClick={onClose} aria-label="Close Modal" className="p-1 text-slate-400 hover:text-white rounded-lg">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Body */}
        <div className="p-4 overflow-y-auto space-y-4">
          {/* Quick jump to featured project */}
          <div>
            <div className="text-[10px] font-bold font-mono text-slate-400 uppercase tracking-widest mb-2">
              FEATURED FORENSIC DOSSIER
            </div>
            <div
              onClick={() => handleSelectProject('MPL-2026-1042')}
              className="p-3 bg-rose-950/40 border border-rose-600/40 hover:border-rose-500 rounded-lg flex items-center justify-between cursor-pointer transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded bg-rose-900/60 text-rose-300 font-mono font-bold text-xs">
                  87
                </div>
                <div>
                  <div className="font-bold text-white text-xs font-mono group-hover:text-blue-300">
                    MPL-2026-1042 • Community Infrastructure Centre
                  </div>
                  <div className="text-[11px] text-slate-400">
                    Chennai, Tamil Nadu • Outlay: ₹48.5L • Risk: Critical
                  </div>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
            </div>
          </div>

          {/* Projects results */}
          {filteredProjects.length > 0 && (
            <div>
              <div className="text-[10px] font-bold font-mono text-slate-400 uppercase tracking-widest mb-2">
                MATCHING PROJECTS ({filteredProjects.length})
              </div>
              <div className="space-y-1">
                {filteredProjects.map(proj => (
                  <div
                    key={proj.id}
                    onClick={() => handleSelectProject(proj.projectCode)}
                    className="p-2.5 hover:bg-slate-800 rounded-lg flex items-center justify-between cursor-pointer transition-all text-xs border border-transparent hover:border-slate-700"
                  >
                    <div className="flex items-center gap-2.5">
                      <Briefcase className="w-4 h-4 text-blue-400" />
                      <div>
                        <span className="font-bold text-white font-mono">{proj.projectCode}</span>
                        <span className="text-slate-400 ml-2">{proj.title}</span>
                      </div>
                    </div>
                    <span className="text-[11px] font-mono text-slate-400">{proj.district}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* States results */}
          {filteredStates.length > 0 && (
            <div>
              <div className="text-[10px] font-bold font-mono text-slate-400 uppercase tracking-widest mb-2">
                STATES & JURISDICTIONS
              </div>
              <div className="grid grid-cols-2 gap-2">
                {filteredStates.map(st => (
                  <div
                    key={st.id}
                    onClick={() => handleSelectState(st.code)}
                    className="p-2.5 bg-slate-950/60 hover:bg-slate-800 border border-slate-800 rounded-lg flex items-center justify-between cursor-pointer transition-all text-xs"
                  >
                    <div className="flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-emerald-400" />
                      <span className="font-semibold text-white">{st.name}</span>
                    </div>
                    <span className="font-mono text-rose-400 font-bold">{st.riskIndex} Risk</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="p-3 border-t border-slate-800 bg-slate-950 text-right text-[11px] font-mono text-slate-400">
          Press <kbd className="bg-slate-800 px-1 py-0.5 rounded text-white">ESC</kbd> to exit
        </div>
      </div>
    </div>
  );
};

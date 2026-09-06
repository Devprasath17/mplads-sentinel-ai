import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Sidebar } from './components/layout/Sidebar';
import { TopHeader } from './components/layout/TopHeader';
import { GlobalSearchModal } from './components/layout/GlobalSearchModal';
import { MobileNav } from './components/layout/MobileNav';
import { DemoBanner } from './components/common/DemoBanner';
import { ScrollToTop } from './components/common/ScrollToTop';

import { NationalOversightPage } from './pages/NationalOversightPage';
import { StateDashboardPage } from './pages/StateDashboardPage';
import { DistrictDashboardPage } from './pages/DistrictDashboardPage';
import { ProjectForensicAuditPage } from './pages/ProjectForensicAuditPage';
import { AiRiskCenterPage } from './pages/AiRiskCenterPage';
import { AnomalyDetectionPage } from './pages/AnomalyDetectionPage';
import { DuplicateDetectionPage } from './pages/DuplicateDetectionPage';
import { PhysicalProgressPage } from './pages/PhysicalProgressPage';
import { FundFlowPage } from './pages/FundFlowPage';
import { AiAnalystPage } from './pages/AiAnalystPage';
import { ProjectsListPage } from './pages/ProjectsListPage';
import { ReviewCasesPage } from './pages/ReviewCasesPage';
import { ReviewCaseDetailPage } from './pages/ReviewCaseDetailPage';
import { AuditTrailPage } from './pages/AuditTrailPage';

const MainLayout: React.FC = () => {
  const location = useLocation();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedFy, setSelectedFy] = useState('2025-2026');
  const [selectedState, setSelectedState] = useState('ALL');

  return (
    <div className="min-h-screen bg-gov-bg flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Global Scroll Restoration Hook */}
      <ScrollToTop />

      {/* Top Statutory Banner */}
      <DemoBanner />

      <div className="flex flex-1 relative">
        {/* Executive Left Sidebar */}
        <Sidebar />

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col min-w-0 pb-16 lg:pb-0">
          {/* Header with Search & Jurisdiction filters */}
          <TopHeader
            onOpenSearch={() => setIsSearchOpen(true)}
            selectedFy={selectedFy}
            setSelectedFy={setSelectedFy}
            selectedState={selectedState}
            setSelectedState={setSelectedState}
          />

          {/* Application Views Routing with Smooth Page Transition */}
          <main key={location.pathname} className="flex-1 overflow-y-auto animate-page-enter">
            <Routes>
              <Route path="/" element={<NationalOversightPage />} />
              <Route path="/state/:stateId" element={<StateDashboardPage />} />
              <Route path="/district/:districtId" element={<DistrictDashboardPage />} />
              <Route path="/project/:projectId" element={<ProjectForensicAuditPage />} />
              <Route path="/risk-center" element={<AiRiskCenterPage />} />
              <Route path="/anomalies" element={<AnomalyDetectionPage />} />
              <Route path="/duplicates" element={<DuplicateDetectionPage />} />
              <Route path="/progress" element={<PhysicalProgressPage />} />
              <Route path="/fund-flow" element={<FundFlowPage />} />
              <Route path="/ai-analyst" element={<AiAnalystPage />} />
              <Route path="/ai-copilot" element={<AiAnalystPage />} />
              <Route path="/projects" element={<ProjectsListPage />} />
              <Route path="/gis-map" element={<NationalOversightPage />} />
              <Route path="/alerts" element={<AiRiskCenterPage />} />
              <Route path="/cases" element={<ReviewCasesPage />} />
              <Route path="/case/:caseId" element={<ReviewCaseDetailPage />} />
              <Route path="/review-case/:caseId" element={<ReviewCaseDetailPage />} />
              <Route path="/audit-trail" element={<AuditTrailPage />} />
            </Routes>
          </main>
        </div>
      </div>

      {/* Global Search Command Palette */}
      <GlobalSearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      {/* Mobile Navigation Bar */}
      <MobileNav />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
};

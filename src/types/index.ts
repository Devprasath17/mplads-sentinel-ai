export type RiskLevel = 'CRITICAL' | 'HIGH' | 'MODERATE' | 'LOW';

export interface FilterState {
  financialYear: string;
  state: string;
  district: string;
  constituency: string;
  agency: string;
  workType: string;
  riskLevel: string;
  searchQuery: string;
}

export interface Project {
  id: string;
  projectCode: string;
  title: string;
  description: string;
  state: string;
  stateCode: string;
  district: string;
  districtCode: string;
  constituency: string;
  agency: string;
  agencyType: string;
  workType: string;
  sanctionedAmount: number; // in Lakhs
  estimatedCost: number;
  expenditure: number;
  physicalProgress: number; // %
  expectedProgress: number; // %
  daysOverdue: number;
  latitude: number;
  longitude: number;
  startDate: string;
  expectedCompletion: string;
  overallRisk: number;
  costRisk: number;
  delayRisk: number;
  paymentRisk: number;
  duplicateRisk: number;
  utilizationRisk: number;
  complianceRisk: number;
  status: RiskLevel;
  recommendedAction: string;
  tags: string[];
}

export interface AlertItem {
  id: string; // e.g. ALT-10482
  alertCode: string;
  projectCode: string;
  title: string;
  location: string;
  outlay: string;
  severity: RiskLevel;
  score: number;
  time: string;
  status: string; // 'Unassigned' | 'In Review' | 'Escalated'
  assignedOfficer: string | null;
  type: string; // 'Progress Lag' | 'Potential Dup' | 'Cost Anomaly' | 'Pay Velocity' | 'Multi-Signal'
  keyAnomaly: string;
  riskDecomposition?: Record<string, string>;
  expectedTrajectory?: string;
  actualPhysicalStage?: string;
  netProgressGap?: string;
  executionStagnation?: string;
  vectorBreakdown?: {
    progressTrajectoryRisk: number;
    milestoneDelayVelocity: number;
    advanceDisbursementVelocity: number;
    duplicateGeoSemanticSimilarity: number;
  };
}

export interface EvidentiaryItem {
  id: string;
  title: string;
  source: string;
  date: string;
  status: 'Certified' | 'Flagged For Verification' | 'Verified' | 'Review Requested';
  verifiedByReviewer: boolean;
  notes: string;
}

export interface ReviewCaseItem {
  id: string;
  caseCode: string; // e.g. RC-2026-0428
  projectCode: string;
  projectTitle: string;
  location: string;
  district: string;
  state: string;
  severity: RiskLevel;
  status: 'NEW' | 'ASSIGNED' | 'UNDER_REVIEW' | 'EVIDENCE_REQUESTED' | 'RESOLVED' | 'CLOSED';
  currentStage: number; // 1 to 7
  assignedOfficer: string;
  createdDate: string;
  lastUpdated: string;
  priorityScore: number;
  reason: string;
  findingsStatement?: string;
  evidentiaryDocket: EvidentiaryItem[];
  notes: { author: string; role: string; text: string; date: string }[];
  auditLogs: { timestamp: string; action: string; actor: string }[];
}

export interface AuditLogItem {
  id: string;
  timestamp: string;
  user: string;
  action: string;
  details: string;
  blockHash: string;
}

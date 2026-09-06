import {
  NATIONAL_OVERVIEW_DATA,
  STATES_DATA,
  DISTRICT_CHENNAI_DATA,
  PROJECTS_LIST_DATA,
  FEATURED_PROJECT_1042,
  DUPLICATE_COMPARISON_DATA,
  ALERTS_QUEUE_DATA,
  REVIEW_CASES_DATA,
  AUDIT_TRAIL_LOGS
} from '../../server/mockData';
import { Project, AlertItem, ReviewCaseItem, AuditLogItem } from '../types';

const API_BASE = '/api';

async function fetchJson<T>(url: string, fallback: T): Promise<T> {
  try {
    const res = await fetch(`${API_BASE}${url}`);
    if (!res.ok) throw new Error(`HTTP error ${res.status}`);
    const json = await res.json();
    return json.data || json;
  } catch (err) {
    console.warn(`[API Client] Endpoint ${url} using fallback client data`, err);
    return fallback;
  }
}

export const SentinelApi = {
  async getNationalOverview() {
    return fetchJson('/dashboard/national', {
      overview: NATIONAL_OVERVIEW_DATA,
      states: STATES_DATA,
      featuredProjects: PROJECTS_LIST_DATA,
      alerts: ALERTS_QUEUE_DATA
    });
  },

  async getStateDashboard(stateId: string = 'TN') {
    return fetchJson(`/dashboard/state/${stateId}`, {
      state: STATES_DATA.find(s => s.id === stateId) || STATES_DATA[0],
      districtSummary: DISTRICT_CHENNAI_DATA,
      highRiskProjects: PROJECTS_LIST_DATA,
      allStates: STATES_DATA
    });
  },

  async getDistrictDashboard(districtId: string = 'TN-CHN') {
    return fetchJson(`/dashboard/district/${districtId}`, {
      district: DISTRICT_CHENNAI_DATA,
      projects: PROJECTS_LIST_DATA,
      highRiskCount: 42,
      criticalDuplicationFlags: 3
    });
  },

  async getProjects(filters?: { state?: string; risk?: string }): Promise<Project[]> {
    return fetchJson('/projects', PROJECTS_LIST_DATA);
  },

  async getProject(projectId: string = 'MPL-2026-1042') {
    return fetchJson(`/projects/${projectId}`, {
      project: FEATURED_PROJECT_1042,
      duplicateComparison: DUPLICATE_COMPARISON_DATA,
      milestones: [
        { phase: 'M1: Site Clearing & Foundation', targetDays: '30 Days', status: '100% Complete', disbursement: '₹9.70L (20%)', auditStatus: 'Verified - Geo-tagged' },
        { phase: 'M2: Plinth & Reinforced Columns', targetDays: '60 Days', status: '95% Complete', disbursement: '₹9.70L (20%)', auditStatus: 'Verified - MB Checked' },
        { phase: 'M3: Roof Slab & Superstructure', targetDays: '120 Days', status: '12% OVERDUE', disbursement: '₹18.43L (38%)', auditStatus: 'ALERT: MB Missing' },
        { phase: 'M4: Electrical & Finishing', targetDays: '180 Days', status: '0% Not Started', disbursement: '₹0.00L (0%)', auditStatus: 'Unreleased' }
      ]
    });
  },

  async getProjectRisk(projectId: string = 'MPL-2026-1042') {
    return fetchJson(`/projects/${projectId}/risk`, {
      projectCode: 'MPL-2026-1042',
      compositeRiskScore: 87,
      status: 'CRITICAL',
      revision: '4.2a',
      signalRobustness: '98%',
      confidence: 'High Confidence',
      signals: [
        {
          id: 'sig-01',
          category: 'COST',
          points: 27,
          title: 'Cost Outlier Anomaly',
          description: 'Sanction of ₹48.5 Lakhs exceeds the cluster peer median of ₹23.8 Lakhs by 2.04x within a 10 mile radius. Sub-station BOQ line-items breaches section 4.2 of MoSPI schedule.'
        },
        {
          id: 'sig-02',
          category: 'DELAY',
          points: 23,
          title: 'Severe Schedule Deviation (Milestone Stalling)',
          description: 'Actual certified physical completion is 38% versus expected target of 85% at 240 elapsed calendar days. Total schedule slippage stands at 145 days overdue without formal extension orders.'
        },
        {
          id: 'sig-03',
          category: 'PAYMENT',
          points: 18,
          title: 'Payment Velocity Burst',
          description: 'Algorithmic velocity alert: ₹18.4 Lakhs disbursed across 2 rapid tranches within an abbreviated 14-day window. Corresponding field verification signatures in Measurement Book MB-2026-CHN-42 are unrecorded.'
        },
        {
          id: 'sig-04',
          category: 'DUPLICATE',
          points: 14,
          title: 'Duplicate Sanction Pattern (Geospatial & NLP Overlap)',
          description: 'High semantic and spatial overlap (92% specification match) with legacy asset MPL-2024-6511 located within a 380m proximity zone. Same vendor executing both projects.'
        },
        {
          id: 'sig-05',
          category: 'UTILIZATION',
          points: 5,
          title: 'Disbursement Disparity (Progress Gap)',
          description: 'Cumulative financial release stands at 78% while physical structural work is certified at only 38%, creating an uncollateralized advance exposure of 40% (₹19.4 Lakhs).'
        }
      ]
    });
  },

  async getRiskCenter() {
    return fetchJson('/risk-center', {
      metrics: {
        totalActiveAlerts: 142,
        unassignedQueue: 18,
        underActiveReview: 34,
        escalatedToDM: 8
      },
      alerts: ALERTS_QUEUE_DATA
    });
  },

  async getReviewCases(): Promise<ReviewCaseItem[]> {
    return fetchJson('/review-cases', REVIEW_CASES_DATA as any);
  },

  async createReviewCase(data: any): Promise<ReviewCaseItem> {
    try {
      const res = await fetch(`${API_BASE}/review-cases`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      const json = await res.json();
      return json.data;
    } catch {
      const newCase: ReviewCaseItem = {
        id: `RC-2026-${Math.floor(10000 + Math.random() * 90000)}`,
        caseCode: `RC-2026-${Math.floor(10000 + Math.random() * 90000)}`,
        projectCode: data.projectCode || 'MPL-2026-1042',
        projectTitle: data.projectTitle || 'Community Infrastructure Centre',
        location: data.location || 'Chennai, Tamil Nadu',
        district: data.district || 'Chennai',
        state: data.state || 'Tamil Nadu',
        severity: data.severity || 'CRITICAL',
        status: 'NEW',
        currentStage: 1,
        assignedOfficer: data.assignedOfficer || 'Shri K. Ranganathan, IAS',
        createdDate: new Date().toISOString().split('T')[0],
        lastUpdated: new Date().toLocaleTimeString(),
        priorityScore: 87,
        reason: data.reason || 'Requested statutory review',
        notes: [{ author: 'System', role: 'Audit Log', text: 'Case logged into registry.', date: new Date().toLocaleTimeString() }],
        evidentiaryDocket: [],
        auditLogs: [{ timestamp: new Date().toLocaleTimeString(), action: 'Case Created', actor: 'System' }]
      };
      REVIEW_CASES_DATA.unshift(newCase as any);
      return newCase;
    }
  },

  async getAuditTrail(projectId: string = 'MPL-2026-1042'): Promise<AuditLogItem[]> {
    return fetchJson(`/audit/${projectId}`, AUDIT_TRAIL_LOGS);
  },

  async explainRisk(projectCode: string) {
    try {
      const res = await fetch(`${API_BASE}/ai/explain`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ projectCode })
      });
      const json = await res.json();
      return json.data;
    } catch {
      return {
        projectCode: projectCode || 'MPL-2026-1042',
        disclaimer: 'ANOMALY ≠ FRAUD. AI prioritizes cases for statutory human verification.',
        explanation: `Project ${projectCode || 'MPL-2026-1042'} was flagged due to cost outlier deviation (+172% above cluster peer median), severe schedule milestone slippage (145 days overdue), and high NLP semantic overlap (92%) with completed asset MPL-2024-6511.`,
        recommendedAction: 'Order field verification of MB measurements and compare BOQ specifications with historical project MPL-2024-6511.',
        confidence: '98% Signal Accuracy'
      };
    }
  }
};

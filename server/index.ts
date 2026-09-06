import express from 'express';
import cors from 'cors';
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
} from './mockData.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// 1. National Oversight Endpoint
app.get('/api/dashboard/national', (req, res) => {
  res.json({
    success: true,
    data: {
      overview: NATIONAL_OVERVIEW_DATA,
      states: STATES_DATA,
      featuredProjects: PROJECTS_LIST_DATA,
      alerts: ALERTS_QUEUE_DATA
    }
  });
});

// 2. State Dashboard Endpoint
app.get('/api/dashboard/state/:stateId', (req, res) => {
  const { stateId } = req.params;
  const state = STATES_DATA.find(s => s.id.toLowerCase() === stateId.toLowerCase() || s.code.toLowerCase() === stateId.toLowerCase()) || STATES_DATA[0];
  
  res.json({
    success: true,
    data: {
      state,
      districtSummary: DISTRICT_CHENNAI_DATA,
      highRiskProjects: PROJECTS_LIST_DATA.filter(p => p.stateCode === state.code || p.state === state.name),
      allStates: STATES_DATA
    }
  });
});

// 3. District Dashboard Endpoint
app.get('/api/dashboard/district/:districtId', (req, res) => {
  const { districtId } = req.params;
  
  res.json({
    success: true,
    data: {
      district: DISTRICT_CHENNAI_DATA,
      projects: PROJECTS_LIST_DATA,
      highRiskCount: 42,
      criticalDuplicationFlags: 3,
      modelDiagnosticBreakdown: [
        { name: 'Cost Outliers & Estimates Deviation', count: 14, percentage: 33 },
        { name: 'Schedule & Milestone Slippage', count: 18, percentage: 43 },
        { name: 'Unusual Payment Frequency Spike', count: 6, percentage: 14 },
        { name: 'Duplicate Work NLP Proximity Alert', count: 4, percentage: 10 }
      ]
    }
  });
});

// 4. Projects List Endpoint
app.get('/api/projects', (req, res) => {
  const { state, district, risk } = req.query;
  let filtered = [...PROJECTS_LIST_DATA];

  if (state) {
    filtered = filtered.filter(p => p.stateCode.toLowerCase() === (state as string).toLowerCase());
  }
  if (risk) {
    filtered = filtered.filter(p => p.status.toLowerCase() === (risk as string).toLowerCase());
  }

  res.json({
    success: true,
    count: filtered.length,
    data: filtered
  });
});

// 5. Single Project Detail Endpoint
app.get('/api/projects/:projectId', (req, res) => {
  const { projectId } = req.params;
  const project = PROJECTS_LIST_DATA.find(p => p.id === projectId || p.projectCode.toLowerCase() === projectId.toLowerCase()) || FEATURED_PROJECT_1042;
  
  res.json({
    success: true,
    data: {
      project,
      duplicateComparison: DUPLICATE_COMPARISON_DATA,
      milestones: [
        { phase: 'M1: Site Clearing & Foundation', targetDays: '30 Days', status: '100% Complete', disbursement: '₹9.70L (20%)', auditStatus: 'Verified - Geo-tagged' },
        { phase: 'M2: Plinth & Reinforced Columns', targetDays: '60 Days', status: '95% Complete', disbursement: '₹9.70L (20%)', auditStatus: 'Verified - MB Checked' },
        { phase: 'M3: Roof Slab & Superstructure', targetDays: '120 Days', status: '12% OVERDUE', disbursement: '₹18.43L (38%)', auditStatus: 'ALERT: MB Missing' },
        { phase: 'M4: Electrical & Finishing', targetDays: '180 Days', status: '0% Not Started', disbursement: '₹0.00L (0%)', auditStatus: 'Unreleased' }
      ]
    }
  });
});

// 6. Project Risk Assessment Endpoint
app.get('/api/projects/:projectId/risk', (req, res) => {
  res.json({
    success: true,
    data: {
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
    }
  });
});

// 7. AI Risk Center Endpoint
app.get('/api/risk-center', (req, res) => {
  res.json({
    success: true,
    data: {
      metrics: {
        totalActiveAlerts: 142,
        unassignedQueue: 18,
        underActiveReview: 34,
        escalatedToDM: 8
      },
      alerts: ALERTS_QUEUE_DATA,
      spotlight: ALERTS_QUEUE_DATA[0]
    }
  });
});

// 8. Review Cases Endpoints
app.get('/api/review-cases', (req, res) => {
  res.json({
    success: true,
    data: REVIEW_CASES_DATA
  });
});

app.post('/api/review-cases', (req, res) => {
  const newCase = {
    id: `RC-2026-${Math.floor(10000 + Math.random() * 90000)}`,
    caseCode: `RC-2026-${Math.floor(10000 + Math.random() * 90000)}`,
    projectCode: req.body.projectCode || 'MPL-2026-1042',
    projectTitle: req.body.projectTitle || 'Infrastructure Project',
    location: req.body.location || 'Chennai, Tamil Nadu',
    district: req.body.district || 'Chennai',
    state: req.body.state || 'Tamil Nadu',
    severity: req.body.severity || 'CRITICAL',
    status: 'NEW',
    assignedOfficer: req.body.assignedOfficer || 'Shri K. Ranganathan, IAS',
    createdDate: new Date().toISOString().split('T')[0],
    reason: req.body.reason || 'User generated review request',
    notes: [
      { author: 'Officer Action', text: req.body.notes || 'Case initiated via Sentinel Platform', date: new Date().toLocaleString() }
    ]
  };

  REVIEW_CASES_DATA.unshift(newCase as any);

  // Add entry to audit trail
  AUDIT_TRAIL_LOGS.unshift({
    id: `log-${Date.now()}`,
    timestamp: `${new Date().toISOString().split('T')[0]} ${new Date().toLocaleTimeString()} IST`,
    user: req.body.assignedOfficer || 'Shri K. Ranganathan, IAS',
    action: 'CREATE_STATUTORY_REVIEW_CASE',
    details: `Created review case ${newCase.caseCode} for ${newCase.projectCode}. Reason: ${newCase.reason}`,
    blockHash: `hash-${Math.random().toString(36).substr(2, 9)}`
  });

  res.json({
    success: true,
    data: newCase
  });
});

// 9. Audit Trail Endpoint
app.get('/api/audit/:projectId', (req, res) => {
  res.json({
    success: true,
    data: AUDIT_TRAIL_LOGS
  });
});

// 10. AI Grounded Explanation Endpoint
app.post('/api/ai/explain', (req, res) => {
  const { projectCode } = req.body;
  res.json({
    success: true,
    data: {
      projectCode: projectCode || 'MPL-2026-1042',
      disclaimer: 'ANOMALY ≠ FRAUD. AI prioritizes cases for statutory human verification.',
      explanation: `Project ${projectCode || 'MPL-2026-1042'} was flagged with a composite risk score of 87/100 primarily driven by cost deviation (+172% above cluster median), a 47-percentage-point physical vs financial progress gap, and 92% semantic overlap with nearby asset MPL-2024-6511.`,
      recommendedAction: 'Order physical sampling measurement by District Vigilance Squad and freeze remaining ₹10.67L disbursal tranche.',
      confidence: '98% Signal Accuracy'
    }
  });
});

app.listen(PORT, () => {
  console.log(`[MPLADS SENTINEL AI] Node.js Express REST API server running on port ${PORT}`);
});

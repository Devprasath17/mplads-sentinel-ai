export interface ProjectData {
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
  physicalProgress: number; // percentage
  expectedProgress: number; // percentage
  daysOverdue: number;
  latitude: number;
  longitude: number;
  startDate: string;
  expectedCompletion: string;
  overallRisk: number; // 0 - 100
  costRisk: number;
  delayRisk: number;
  paymentRisk: number;
  duplicateRisk: number;
  utilizationRisk: number;
  complianceRisk: number;
  status: 'CRITICAL' | 'HIGH' | 'MODERATE' | 'LOW';
  recommendedAction: string;
  tags: string[];
}

export interface StateSummary {
  id: string;
  name: string;
  code: string;
  outlayCr: number;
  expenditureCr: number;
  totalProjects: number;
  highRiskCount: number;
  riskIndex: number;
  utilizationRate: number;
  reviewCases: number;
  vectors: {
    cost: number;
    delay: number;
    velocity: number;
    geoDup: number;
    disparity: number;
    compliance: number;
  };
}

export interface DistrictSummary {
  id: string;
  name: string;
  code: string;
  stateName: string;
  collectorName: string;
  activeSanctionedWorks: number;
  totalOutlayCr: number;
  highRiskCount: number;
  criticalDuplicationFlags: number;
  disbursalBurnRate: number;
  expendedCr: number;
  disbursedCr: number;
  criticalLaggingWorks: number;
  showCauseNotices: number;
  compositeRiskIndex: number;
  signalAccuracy: number;
}

export const NATIONAL_OVERVIEW_DATA = {
  totalProjects: 42680,
  administrativeDistricts: 785,
  yoyGrowth: 5.4,
  sanctionedOutlayCr: 8420,
  cumulativeReleasedCr: 6730,
  treasuryDisbursedCr: 5540,
  completedWorks: 31420,
  completedRate: 73.6,
  activeWorks: 8760,
  laggingWorks: 2500,
  prioritizedRiskSignals: 1284,
  riskPercentage: 3.0,
  forensicReviewRequired: 428,
  vectors: [
    { name: 'Cost Anomaly', count: 647, score: 78, trend: '+4.2%' },
    { name: 'Schedule Delay', count: 1180, score: 82, trend: '+6.1%' },
    { name: 'Payment Velocity', count: 352, score: 64, trend: '-1.8%' },
    { name: 'Geospatial Anomaly', count: 184, score: 83, trend: '+0.5%' },
    { name: 'Fund Disparity', count: 1024, score: 74, trend: '+3.1%' },
    { name: 'Statutory Compliance', count: 432, score: 58, trend: '-2.4%' }
  ]
};

export const STATES_DATA: StateSummary[] = [
  {
    id: 'TN',
    name: 'Tamil Nadu',
    code: 'TN',
    outlayCr: 564.2,
    expenditureCr: 465.0,
    totalProjects: 3482,
    highRiskCount: 126,
    riskIndex: 71,
    utilizationRate: 82.4,
    reviewCases: 34,
    vectors: { cost: 78, delay: 84, velocity: 65, geoDup: 92, disparity: 72, compliance: 44 }
  },
  {
    id: 'UP',
    name: 'Uttar Pradesh',
    code: 'UP',
    outlayCr: 1150.0,
    expenditureCr: 890.0,
    totalProjects: 6540,
    highRiskCount: 220,
    riskIndex: 74,
    utilizationRate: 77.4,
    reviewCases: 58,
    vectors: { cost: 74, delay: 88, velocity: 70, geoDup: 78, disparity: 76, compliance: 48 }
  },
  {
    id: 'MH',
    name: 'Maharashtra',
    code: 'MH',
    outlayCr: 890.0,
    expenditureCr: 750.0,
    totalProjects: 4890,
    highRiskCount: 145,
    riskIndex: 61,
    utilizationRate: 84.3,
    reviewCases: 28,
    vectors: { cost: 62, delay: 68, velocity: 59, geoDup: 52, disparity: 59, compliance: 38 }
  },
  {
    id: 'WB',
    name: 'West Bengal',
    code: 'WB',
    outlayCr: 710.0,
    expenditureCr: 527.0,
    totalProjects: 3950,
    highRiskCount: 168,
    riskIndex: 65,
    utilizationRate: 74.2,
    reviewCases: 42,
    vectors: { cost: 69, delay: 78, velocity: 62, geoDup: 71, disparity: 68, compliance: 44 }
  },
  {
    id: 'KA',
    name: 'Karnataka',
    code: 'KA',
    outlayCr: 620.0,
    expenditureCr: 504.0,
    totalProjects: 3280,
    highRiskCount: 94,
    riskIndex: 58,
    utilizationRate: 81.3,
    reviewCases: 19,
    vectors: { cost: 55, delay: 62, velocity: 50, geoDup: 58, disparity: 52, compliance: 32 }
  },
  {
    id: 'BR',
    name: 'Bihar',
    code: 'BR',
    outlayCr: 680.0,
    expenditureCr: 450.0,
    totalProjects: 4120,
    highRiskCount: 184,
    riskIndex: 78,
    utilizationRate: 66.2,
    reviewCases: 82,
    vectors: { cost: 82, delay: 86, velocity: 68, geoDup: 85, disparity: 78, compliance: 62 }
  }
];

export const DISTRICT_CHENNAI_DATA: DistrictSummary = {
  id: 'TN-CHN',
  name: 'Chennai Metropolitan District',
  code: 'TN-CHN',
  stateName: 'Tamil Nadu',
  collectorName: 'Shri K. Ranganathan, IAS',
  activeSanctionedWorks: 1428,
  totalOutlayCr: 94.20,
  highRiskCount: 42,
  criticalDuplicationFlags: 3,
  disbursalBurnRate: 71.4,
  expendedCr: 67.38,
  disbursedCr: 78.60,
  criticalLaggingWorks: 118,
  showCauseNotices: 19,
  compositeRiskIndex: 64,
  signalAccuracy: 97.8
};

export const FEATURED_PROJECT_1042: ProjectData = {
  id: 'proj-1042',
  projectCode: 'MPL-2026-1042',
  title: 'Construction of Multi-purpose Community Infrastructure Centre',
  description: 'Construction of Community Infrastructure Centre at Kovalam Coastal Reach (DRDA Chennai) + Smart-benched: SAN. DL • Expended: ₹37.8L (78%) • Physical Progress: 38% • Status: Delayed (145d Overdue)',
  state: 'Tamil Nadu',
  stateCode: 'TN',
  district: 'Chennai Metropolitan District',
  districtCode: 'TN-CHN',
  constituency: 'T. Nagar AC',
  agency: 'Greater Chennai Corporation (Executing: DRDA Chennai Div-I)',
  agencyType: 'DRDA',
  workType: 'Community Infrastructure',
  sanctionedAmount: 48.50, // Lakhs
  estimatedCost: 29.20,
  expenditure: 37.83,
  physicalProgress: 38.0,
  expectedProgress: 85.0,
  daysOverdue: 145,
  latitude: 13.0827,
  longitude: 80.2707,
  startDate: '2025-04-10',
  expectedCompletion: '2025-11-15',
  overallRisk: 87,
  costRisk: 91,
  delayRisk: 84,
  paymentRisk: 72,
  duplicateRisk: 88,
  utilizationRisk: 76,
  complianceRisk: 61,
  status: 'CRITICAL',
  recommendedAction: 'Freeze remaining ₹10.67L tranche, dispatch field vigilance squad for MB measurement book re-audit, and verify distance to asset MPL-2024-6511.',
  tags: ['+172% Cost Variance Spike', '47% Milestone Progress Gap', 'Outflow Velocity Acceleration', 'Geospatial NLP Duplication (380m)']
};

export const PROJECTS_LIST_DATA: ProjectData[] = [
  FEATURED_PROJECT_1042,
  {
    id: 'proj-1188',
    projectCode: 'MPL-2026-1188',
    title: 'Urban Primary Health Center Upgrade',
    description: 'Chennai Dist. Ward 142 • Agency: Dept of Public Health • Outlay ₹72.60L • Potential Duplicate 92% BoQ Match',
    state: 'Tamil Nadu',
    stateCode: 'TN',
    district: 'Chennai Metropolitan District',
    districtCode: 'TN-CHN',
    constituency: 'Royapuram AC',
    agency: 'Dept of Public Health & Preventive Medicine',
    agencyType: 'Health Dept',
    workType: 'Healthcare Infrastructure',
    sanctionedAmount: 72.60,
    estimatedCost: 65.00,
    expenditure: 58.00,
    physicalProgress: 42.0,
    expectedProgress: 80.0,
    daysOverdue: 62,
    latitude: 13.1142,
    longitude: 80.2974,
    startDate: '2025-05-10',
    expectedCompletion: '2026-01-10',
    overallRisk: 84,
    costRisk: 65,
    delayRisk: 78,
    paymentRisk: 60,
    duplicateRisk: 92,
    utilizationRisk: 70,
    complianceRisk: 55,
    status: 'CRITICAL',
    recommendedAction: 'Verify 380m proximity overlap with existing health asset.',
    tags: ['92% Semantic BoQ Match', '380m Proximity Overlap']
  },
  {
    id: 'proj-8921',
    projectCode: 'MPL-2026-8921',
    title: 'Smart Classroom Wing B & STEM Lab',
    description: 'Chennai Dist. Ward 142 • Educational Infra • Outlay ₹34.20L • +172% Cost Deviation vs PWD SoR',
    state: 'Tamil Nadu',
    stateCode: 'TN',
    district: 'Chennai Metropolitan District',
    districtCode: 'TN-CHN',
    constituency: 'T. Nagar AC',
    agency: 'Public Works Department',
    agencyType: 'PWD',
    workType: 'Educational Infrastructure',
    sanctionedAmount: 34.20,
    estimatedCost: 20.00,
    expenditure: 28.50,
    physicalProgress: 50.0,
    expectedProgress: 75.0,
    daysOverdue: 45,
    latitude: 13.0418,
    longitude: 80.2341,
    startDate: '2025-06-01',
    expectedCompletion: '2026-02-01',
    overallRisk: 81,
    costRisk: 94,
    delayRisk: 58,
    paymentRisk: 75,
    duplicateRisk: 30,
    utilizationRisk: 65,
    complianceRisk: 40,
    status: 'CRITICAL',
    recommendedAction: 'Audit PWD schedule of rates markup.',
    tags: ['+172% Cost Deviation vs PWD SoR']
  },
  {
    id: 'proj-8744',
    projectCode: 'MPL-2025-8744',
    title: 'Solar Microgrid Installation',
    description: 'Chennai Metro • Energy Infra • Outlay ₹89.00L • 3 Tranches in 7 Days without MB e-sign',
    state: 'Tamil Nadu',
    stateCode: 'TN',
    district: 'Chennai Metropolitan District',
    districtCode: 'TN-CHN',
    constituency: 'Velachery AC',
    agency: 'TANGEDCO Energy Div',
    agencyType: 'Energy Dept',
    workType: 'Energy & Solar',
    sanctionedAmount: 89.00,
    estimatedCost: 80.00,
    expenditure: 72.00,
    physicalProgress: 60.0,
    expectedProgress: 70.0,
    daysOverdue: 20,
    latitude: 12.9789,
    longitude: 80.2184,
    startDate: '2025-07-15',
    expectedCompletion: '2026-03-15',
    overallRisk: 78,
    costRisk: 60,
    delayRisk: 40,
    paymentRisk: 92,
    duplicateRisk: 25,
    utilizationRisk: 78,
    complianceRisk: 80,
    status: 'HIGH',
    recommendedAction: 'Audit 3 rapid payment tranches on PFMS.',
    tags: ['3 Tranches in 7 Days without MB e-sign']
  },
  {
    id: 'proj-8512',
    projectCode: 'MPL-2025-8512',
    title: 'Road Concreting & Storm Drain Block 4',
    description: 'Chennai Metro • Outlay ₹55.10L • Contractor Density Flag (4 active tenders)',
    state: 'Tamil Nadu',
    stateCode: 'TN',
    district: 'Chennai Metropolitan District',
    districtCode: 'TN-CHN',
    constituency: 'Harbour AC',
    agency: 'Greater Chennai Corporation',
    agencyType: 'GCC',
    workType: 'Roads & Sanitation',
    sanctionedAmount: 55.10,
    estimatedCost: 50.00,
    expenditure: 40.00,
    physicalProgress: 65.0,
    expectedProgress: 70.0,
    daysOverdue: 15,
    latitude: 13.0878,
    longitude: 80.2885,
    startDate: '2025-08-01',
    expectedCompletion: '2026-04-01',
    overallRisk: 75,
    costRisk: 55,
    delayRisk: 45,
    paymentRisk: 65,
    duplicateRisk: 40,
    utilizationRisk: 60,
    complianceRisk: 50,
    status: 'HIGH',
    recommendedAction: 'Verify contractor cross-agency capacity.',
    tags: ['Contractor Density Flag (4 active tenders)']
  }
];

export const PHYSICAL_PROGRESS_METRICS = {
  totalActiveWorks: 12486,
  totalOutlayCr: 9420,
  yoyGrowth: '+5.2%',
  avgPhysicalProgress: 68.4,
  targetProgress: 82.5,
  progressVariance: '-14.1%',
  onTrackWorks: 7842,
  onTrackPercentage: 62.8,
  delayedWorks: 2931,
  delayedPercentage: 23.5,
  criticalDelays: 684,
  criticalPercentage: 5.5,
  aggregateGap: '-14.7%',
  stratification: [
    { label: 'Completed', count: 31420, color: '#10B981' },
    { label: 'On-Track', count: 7842, color: '#3B82F6' },
    { label: 'Minor Delay', count: 1789, color: '#F59E0B' },
    { label: 'Moderate Delay', count: 1163, color: '#F97316' },
    { label: 'Critical >90d', count: 684, color: '#EF4444' },
    { label: 'Uncommenced', count: 2021, color: '#64748B' }
  ],
  scurveData: [
    { month: 'Apr', target: 10, actual: 8 },
    { month: 'May', target: 22, actual: 18 },
    { month: 'Jun', target: 35, actual: 27 },
    { month: 'Jul', target: 48, actual: 36 },
    { month: 'Aug', target: 62, actual: 44 },
    { month: 'Sep', target: 75, actual: 52 },
    { month: 'Oct', target: 85, actual: 61 },
    { month: 'Nov', target: 92, actual: 68 },
    { month: 'Dec', target: 100, actual: 74 }
  ],
  byState: [
    { name: 'Tamil Nadu', active: 3542, actual: 68, target: 85, gap: -17, delayed: 428 },
    { name: 'Karnataka', active: 3280, actual: 74, target: 81, gap: -7, delayed: 218 },
    { name: 'Maharashtra', active: 4890, actual: 69, target: 79, gap: -10, delayed: 381 },
    { name: 'Uttar Pradesh', active: 6540, actual: 64, target: 80, gap: -16, delayed: 623 }
  ],
  bySector: [
    { sector: 'Roads, Bridges & Culverts', progress: 78, delayDays: 128, isHighRisk: false },
    { sector: 'Drinking Water / RO Treatment', progress: 72, delayDays: 155, isHighRisk: false },
    { sector: 'Community Halls & Hubs', progress: 58, delayDays: 245, isHighRisk: true },
    { sector: 'Healthcare Centers / Sub-PHCs', progress: 64, delayDays: 210, isHighRisk: false },
    { sector: 'Education & Smart Classrooms', progress: 81, delayDays: 35, isHighRisk: false }
  ]
};

export const FUND_FLOW_METRICS = {
  mospiReleasedCr: 8420,
  snaAllocationCr: 8120,
  realizedExpenditureCr: 6780,
  inPostTreasuryCr: 1640,
  snaInterestCr: 42.2,
  schemeUtilization: 80.5,
  expenditureOutliersCount: 684,
  criticalOutliers: 18,
  financialPhysicalDesyncCount: 412,
  advanceExposureCr: 120,
  velocityBurstsCount: 316,
  liquidityPipeline: [
    { stage: '01. Central MoSPI Release', amountCr: 8420, label: 'Demarcated Fund of India', percent: 100, isRisk: false },
    { stage: '02. State SNA Allocation', amountCr: 8120, label: 'Single Nodal Accounts', percent: 96.4, isRisk: false },
    { stage: '03. District Sanctions', amountCr: 7450, label: 'Administrative Approvals', percent: 88.5, isRisk: false },
    { stage: '04. Vendor Disbursals', amountCr: 6780, label: 'Direct Treasury Offtake', percent: 80.5, isRisk: false },
    { stage: '05. Verified Asset Value', amountCr: 4890, label: 'Geo-tagged Stage II', percent: 58.1, isRisk: false },
    { stage: '06. Unaccounted Exposure', amountCr: 1890, label: 'Under Verification', percent: 22.4, isRisk: true }
  ],
  administrativeLedger: [
    { name: 'Tamil Nadu (State Aggregate)', status: 'STATE-WIDE', releasedCr: 564.2, sanctionedCr: 564.2, expendedCr: 465.0, burnRate: 82.4, flaggedWorks: 42, code: 'TN' },
    { name: 'Chennai Metropolitan (District Focus)', status: 'HIGH ASSET PRIORITY', releasedCr: 94.2, sanctionedCr: 94.2, expendedCr: 67.38, burnRate: 71.4, flaggedWorks: 4, code: 'TN-CHN' },
    { name: 'Coimbatore DRDA', status: 'STANDARD', releasedCr: 48.5, sanctionedCr: 48.5, expendedCr: 37.2, burnRate: 76.7, flaggedWorks: 3, code: 'TN-CBE' },
    { name: 'Madurai Collectorate Division', status: 'MONITORING', releasedCr: 44.0, sanctionedCr: 44.0, expendedCr: 34.1, burnRate: 77.5, flaggedWorks: 2, code: 'TN-MDU' },
    { name: 'Tiruchirappalli City Works', status: 'STANDARD', releasedCr: 39.0, sanctionedCr: 39.0, expendedCr: 31.5, burnRate: 80.7, flaggedWorks: 2, code: 'TN-TRY' }
  ]
};

export const DUPLICATE_DETECTION_METRICS = {
  worksScanned: 42680,
  candidatePairs: 184,
  vectorFlaggedRate: '0.43%',
  highSimilarityCount: 72, // 50-80%
  veryHighSimilarityCount: 31, // >80%
  coLocationCount: 46, // <500m
  priorityVerificationCount: 58,
  candidateList: [
    {
      flaggedPair: 'MPL-2026-1042 ↔ MPL-2024-6511',
      title: 'Community Centre Ward 142 vs Coastal Community Hall',
      sectors: 'Community Halls & Infra',
      location: 'Chennai Metro • Kovalam',
      semanticSim: '92.4%',
      radialOffset: '380 m',
      riskScore: 88,
      severity: 'CRITICAL',
      projectCodeA: 'MPL-2026-1042',
      projectCodeB: 'MPL-2024-6511'
    },
    {
      flaggedPair: 'MPL-2026-0866 ↔ RMSA-2024-8812',
      title: 'Smart Classroom Wing Block B vs Samagra Shiksha Wing',
      sectors: 'Education Infrastructure',
      location: 'Coimbatore • Pollachi North',
      semanticSim: '91.3%',
      radialOffset: '12.4 m',
      riskScore: 78,
      severity: 'HIGH',
      projectCodeA: 'MPL-2026-0866',
      projectCodeB: 'RMSA-2024-8812'
    },
    {
      flaggedPair: 'MPL-2026-0540 ↔ NHM-2025-1154',
      title: 'Primary Health Sub-Centre Annex vs National Health Mission Dispensary',
      sectors: 'Public Health (PHC)',
      location: 'Salem • Attur Taluk',
      semanticSim: '84.2%',
      radialOffset: '1.1 km',
      riskScore: 72,
      severity: 'HIGH',
      projectCodeA: 'MPL-2026-0540',
      projectCodeB: 'NHM-2025-1154'
    },
    {
      flaggedPair: 'MPL-2026-0419 ↔ PMGSY-2023-4001',
      title: 'Paver Block Link Road to Fishermen Colony vs PMGSY Rural Reach',
      sectors: 'Rural Road Networks',
      location: 'Cuddalore • Parangipettai',
      semanticSim: '81.8%',
      radialOffset: '220 m',
      riskScore: 69,
      severity: 'MODERATE',
      projectCodeA: 'MPL-2026-0419',
      projectCodeB: 'PMGSY-2023-4001'
    }
  ]
};

export const ANOMALY_DETECTION_METRICS = {
  totalDetected: 2418,
  criticalSeverity: 184,
  highSeverity: 624,
  moderateSeverity: 1102,
  unresolved: 508,
  newToday: 142,
  classificationVectors: [
    { category: 'COST ANOMALY', risk: 'Score 82/100', activeCases: 842, driver: 'Material Markup +172% unit cost spikes' },
    { category: 'PROGRESS & SCHEDULE LAG', risk: 'Score 84/100', activeCases: 1120, driver: 'Contractor Inactivity (142d avg delay)' },
    { category: 'PAYMENT VELOCITY SPIKES', risk: 'Score 64/100', activeCases: 216, driver: 'Expedited Tranches without MB signoff' },
    { category: 'NLP BOQ & SPEC OVERLAP', risk: 'Score 88/100', activeCases: 184, driver: 'Double-Sanction Risk within 2.4km' },
    { category: 'PHYSICAL / FUND DIVERGENCE', risk: 'Score 76/100', activeCases: 507, driver: 'Premature Disbursal ahead of milestone' },
    { category: 'MISSING GEO-MB COMPLIANCE', risk: 'Score 58/100', activeCases: 263, driver: 'Missing Proof Tokens (Geo-photos)' }
  ]
};

export const DUPLICATE_COMPARISON_DATA = {
  currentProject: {
    projectCode: 'MPL-2026-1042',
    title: 'Community Infrastructure Centre, Kovalam Reach',
    sanctionYear: 'FY 2025-26',
    sanctionedCost: '₹48,50,000',
    executingAgency: 'DRDA Chennai Div-I',
    primaryContractor: 'Sri Balaji Coastal Infra Ltd',
    latLng: '12.7905° N, 80.2496° E'
  },
  historicalWork: {
    projectCode: 'MPL-2024-6511',
    title: 'Multi-Purpose Coastal Community Hall, Kovalam',
    sanctionYear: 'FY 2023-24 (Closed Aug 2024)',
    sanctionedCost: '₹34,90,000',
    executingAgency: 'DRDA Chennai Div-I',
    primaryContractor: 'Sri Balaji Coastal Infra Ltd',
    latLng: '12.7909° N, 80.2461° E (380m proximity)'
  },
  metrics: {
    geoProximity: '380m Vector',
    nlpOverlapScore: '92% Cosine',
    agencyVendorMatch: '100% Identity'
  },
  analysisRemark: 'The Bill of Quantities (BoQ) for MPL-2026-1042 shares 41 identical item descriptions and specifications directly from the completed 2024 work, while expanding the square-footage specification without structural dimension adjustments.'
};

export const ALERTS_QUEUE_DATA = [
  {
    id: 'ALT-2026-8802',
    projectCode: 'MPL-2026-1042',
    title: 'Cost Variance (+172%) & NLP Semantic Overlap (92%)',
    location: 'Chennai, Tamil Nadu',
    outlay: '₹48.50 L',
    severity: 'CRITICAL' as const,
    score: 91,
    time: 'Detected 2 hours ago via Sentinel-Core v4.2',
    status: 'Unassigned',
    assignedOfficer: null,
    riskDecomposition: {
      tenderEscalation: '+58%',
      semanticDuplication: '+34%',
      contractorNexus: '+8%'
    }
  },
  {
    id: 'ALT-2026-8794',
    projectCode: 'MPL-2026-0819',
    title: 'Major Execution Desynchronization: 94 Days Past Target',
    location: 'Madurai, Tamil Nadu',
    outlay: '₹24.00 L',
    severity: 'HIGH' as const,
    score: 84,
    time: 'Detected 5 hours ago',
    status: 'Under Investigation',
    assignedOfficer: 'A. Ramanan (JE, Madurai Circle)',
    riskDecomposition: {
      scheduleDelta: '-62%',
      physicalCompleted: '23%',
      expectedTarget: '85%'
    }
  },
  {
    id: 'ALT-2026-8761',
    projectCode: 'MPL-2026-0955',
    title: 'Geospatial Duplication Signal with Completed 2024 Asset (12.4m radius)',
    location: 'Coimbatore, Tamil Nadu',
    outlay: '₹18.20 L',
    severity: 'HIGH' as const,
    score: 78,
    time: 'Detected 1 day ago',
    status: 'Monitoring Mode',
    assignedOfficer: 'BHOOMI Spatial Layer Match',
    riskDecomposition: {
      proximityVector: '12.4m',
      overlapConfidence: '91.3%'
    }
  }
];

export const ALERTS_INGESTION_FEED = [
  {
    id: 'ALT-10482',
    alertCode: 'ALT-10482',
    projectCode: 'MPL-2026-1042',
    title: 'Construction of Community Infrastructure Centre',
    location: 'Chennai Dist. Ward 142',
    outlay: '₹48.50 L',
    severity: 'CRITICAL' as const,
    score: 87,
    time: 'Live Monitoring (NIC-PFMS Active Sync)',
    status: 'In Review',
    assignedOfficer: 'Dr. K. Ranganathan, IAS',
    type: 'Progress Lag',
    keyAnomaly: '-47% Progress Gap (96d stalled at plinth)',
    expectedTrajectory: '85.0%',
    actualPhysicalStage: '38.0% (Plinth level only)',
    netProgressGap: '-47.0 pp (Critical deficit)',
    executionStagnation: '+96 Days (Zero e-MB update)',
    vectorBreakdown: {
      progressTrajectoryRisk: 91,
      milestoneDelayVelocity: 84,
      advanceDisbursementVelocity: 72,
      duplicateGeoSemanticSimilarity: 88
    }
  },
  {
    id: 'ALT-10471',
    alertCode: 'ALT-10471',
    projectCode: 'MPL-2026-1188',
    title: 'Urban Primary Health Center Upgrade',
    location: 'Chennai Dist. Ward 142',
    outlay: '₹72.60 L',
    severity: 'CRITICAL' as const,
    score: 84,
    time: '2 hours ago',
    status: 'New',
    assignedOfficer: null,
    type: 'Potential Dup',
    keyAnomaly: '92% Semantic BoQ Match (380m proximity overlap)',
    expectedTrajectory: '80.0%',
    actualPhysicalStage: '42.0%',
    netProgressGap: '-38.0 pp',
    executionStagnation: '+62 Days',
    vectorBreakdown: {
      progressTrajectoryRisk: 78,
      milestoneDelayVelocity: 70,
      advanceDisbursementVelocity: 65,
      duplicateGeoSemanticSimilarity: 92
    }
  },
  {
    id: 'ALT-10455',
    alertCode: 'ALT-10455',
    projectCode: 'MPL-2026-8921',
    title: 'Smart Classroom Wing B & STEM Lab',
    location: 'Chennai Dist. Ward 142',
    outlay: '₹34.20 L',
    severity: 'CRITICAL' as const,
    score: 81,
    time: '4 hours ago',
    status: 'New',
    assignedOfficer: null,
    type: 'Cost Anomaly',
    keyAnomaly: '+172% Cost Deviation vs PWD SoR',
    expectedTrajectory: '75.0%',
    actualPhysicalStage: '50.0%',
    netProgressGap: '-25.0 pp',
    executionStagnation: '+45 Days',
    vectorBreakdown: {
      progressTrajectoryRisk: 65,
      milestoneDelayVelocity: 58,
      advanceDisbursementVelocity: 75,
      duplicateGeoSemanticSimilarity: 30
    }
  },
  {
    id: 'ALT-10440',
    alertCode: 'ALT-10440',
    projectCode: 'MPL-2025-8744',
    title: 'Solar Microgrid Installation',
    location: 'Chennai Metro',
    outlay: '₹89.00 L',
    severity: 'HIGH' as const,
    score: 78,
    time: '6 hours ago',
    status: 'In Review',
    assignedOfficer: 'A. Ramanan (JE)',
    type: 'Pay Velocity',
    keyAnomaly: '3 Tranches in 7 Days without MB e-sign',
    expectedTrajectory: '70.0%',
    actualPhysicalStage: '60.0%',
    netProgressGap: '-10.0 pp',
    executionStagnation: '+20 Days',
    vectorBreakdown: {
      progressTrajectoryRisk: 50,
      milestoneDelayVelocity: 40,
      advanceDisbursementVelocity: 92,
      duplicateGeoSemanticSimilarity: 25
    }
  },
  {
    id: 'ALT-10429',
    alertCode: 'ALT-10429',
    projectCode: 'MPL-2025-8512',
    title: 'Road Concreting & Storm Drain Block 4',
    location: 'Chennai Metro',
    outlay: '₹55.10 L',
    severity: 'HIGH' as const,
    score: 75,
    time: '12 hours ago',
    status: 'New',
    assignedOfficer: null,
    type: 'Multi-Signal',
    keyAnomaly: 'Contractor Density Flag (4 active tenders)',
    expectedTrajectory: '70.0%',
    actualPhysicalStage: '65.0%',
    netProgressGap: '-5.0 pp',
    executionStagnation: '+15 Days',
    vectorBreakdown: {
      progressTrajectoryRisk: 55,
      milestoneDelayVelocity: 45,
      advanceDisbursementVelocity: 65,
      duplicateGeoSemanticSimilarity: 40
    }
  }
];

export const DETAILED_REVIEW_CASE: any = {
  id: 'RC-2026-0428',
  caseCode: 'RC-2026-0428',
  projectCode: 'MPL-2026-1042',
  projectTitle: 'Construction of Community Infrastructure Centre at Kovalam Reach',
  location: 'Ward 142 (Zone 1111), Chennai, Metro',
  district: 'Chennai',
  state: 'Tamil Nadu',
  severity: 'CRITICAL',
  status: 'UNDER_REVIEW',
  currentStage: 4, // 1: Alert Created, 2: Team Assigned, 3: Review Started, 4: Evidence Review (Active), 5: Finding, 6: DM Sign-off, 7: Audit Logged
  priorityScore: 87,
  assignedOfficer: 'Dr. K. Ranganathan, IAS (Dist. Collector / Chairman)',
  createdDate: '15 Aug 2025 09:30 IST • Automated Trigger',
  lastUpdated: '06 Sep 2025, 11:42 IST',
  auditValidation: '74*451-1798-501 (18 MB entries verified, 28 MB MB-44 checks)',
  jurisdiction: 'Chennai Metropolitan Zone 44 (AC Ward 142)',
  targetProject: {
    code: 'HPL-2026-1042',
    title: 'Construction of Community Infrastructure Centre at Kovalam Reach',
    executingAgency: 'DRDA Division-I (GCC)',
    contractor: 'Apex Bay Infratech Pvt Ltd',
    ward: 'Ward 142 (Zone 1111), Chennai, Metro',
    schemeYear: '2025-2026',
    disbursedLakhs: 37.80,
    sanctionLakhs: 48.50,
    disbursedPercent: 78.0,
    physicalProgressPercent: 38.0,
    expectedProgressPercent: 85.0,
    sanctionVsCeiling: '+172.4% vs Benchmark Ceiling',
    disbursedVsGround: '+40.0% vs Physical Ground',
    overdueDays: 96,
    alertWarning: 'Current Physical Milestone Stagnation: Site photos and Measurement Book (MB) entries unverified for 96 consecutive calendar days (Last site return: 12 May 2026).'
  },
  multiVectorSignals: {
    progressTrajectory: 81,
    milestoneVelocity: 91,
    boqTenderOverlap: 88,
    disbursalReturns: 72,
    voucherAudit: 78,
    telemetryCompliance: 61
  },
  evidentiaryDocket: [
    {
      id: 'EV-2025-MC',
      title: 'Stage 2 Foundation Physical Inspection Report',
      source: 'Bill/Invoice Geo-Telemetry Compare • Filed: 12 May 2026',
      status: 'Certified',
      verifiedByReviewer: true,
      notes: 'Certified foundation RCC footing width 1.2 meters is inline as 80.0% physical executed. Signed by Er. C. Kumar (AE-ZONE).'
    },
    {
      id: 'EV-2025-02',
      title: 'PFMS Financial Disbursal Voucher #7912 (₹18.4L)',
      source: 'State-Treasury Ingestion • Disbursed: 14 Aug 2025',
      status: 'Flagged For Verification',
      verifiedByReviewer: false,
      notes: '78% disbursed under Tranche 2 without corresponding Measurement Book (MB-44) MB-44-12 signed voucher.'
    },
    {
      id: 'EV-2025-03',
      title: 'Bhuvan GIS Drone Inspection Imagery & RTK-GPS-CHN',
      source: 'ISRO Geo-Spatial Registry Drone Pass • Capture: 24 Aug 2025',
      status: 'Verified',
      verifiedByReviewer: true,
      notes: 'Physical scan confirmation. Zero progress on superstructure frame since 12 May 2026 (96 days delay).'
    },
    {
      id: 'EV-2025-04',
      title: 'Overlapping Work Sanction Record (MPL-2024-0311)',
      source: 'District Asset Register • Overlap: FY23-24 • Distance 380m',
      status: 'Review Requested',
      verifiedByReviewer: false,
      notes: 'Identical BoQ specification on masonry and substructure. Same contractor (Apex Bay Infratech Pvt Ltd).'
    }
  ],
  reviewerNotes: [
    {
      author: 'Dr. Rajeshwar V., IAS',
      role: 'Joint Secy, MoSPI',
      date: '04 Sep 2025 • 11:42 IST',
      text: 'Technical Audit Team (Chennai Division) must re-examine the foundation concrete depth and MB-44 entries. Direct contractor to explain 96-day progress stagnation before releasing remaining tranche.'
    },
    {
      author: 'K. Ranganathan',
      role: 'Field Inspector, DRDA Div-1',
      date: '02 Sep 2025 • 10:30 IST',
      text: 'Site visit conducted. Foundation columns and MB #44 entries inspected under Section 4(2) of MoSPI framework. Heavy rainfall season cited for delay. Vendor invoice batch #VK-4912 corresponds to delivered TMT tonnage stored on site.'
    }
  ],
  auditTrail: [
    { timestamp: '06 Sep 2025, 11:42 IST', action: 'Case Stage updated to Stage 4 Evidence Review', actor: 'Dr. Rajeshwar V., IAS' },
    { timestamp: '04 Sep 2025, 17:45 IST', action: 'Technical Audit Report uploaded #EV-2025-03', actor: 'System' },
    { timestamp: '02 Sep 2025, 10:30 IST', action: 'Field Inspector assigned: K. Ranganathan', actor: 'Dist. Collector' },
    { timestamp: '01 Sep 2025, 14:20 IST', action: 'Case RC-2026-0428 generated upon Alert ALT-10482', actor: 'System Alert Engine' }
  ]
};

export const REVIEW_CASES_DATA = [
  DETAILED_REVIEW_CASE,
  {
    id: 'RC-2026-00429',
    caseCode: 'RC-2026-00429',
    projectCode: 'MPL-2026-1188',
    projectTitle: 'Urban Primary Health Center Upgrade',
    location: 'Royapuram AC, Chennai',
    district: 'Chennai',
    state: 'Tamil Nadu',
    severity: 'CRITICAL' as const,
    status: 'NEW' as const,
    currentStage: 1,
    priorityScore: 84,
    assignedOfficer: 'Dr. K. Ranganathan, IAS',
    createdDate: '18 Aug 2025',
    lastUpdated: '05 Sep 2025',
    reason: '92% Semantic BoQ Match (380m proximity overlap with existing health asset).'
  }
];

export const AUDIT_TRAIL_LOGS = [
  {
    id: 'log-001',
    timestamp: '2026-09-06 11:42:08 IST',
    user: 'System (NIC Live Sync)',
    action: 'RISK_SCORE_CALCULATED',
    details: 'Composite Risk 87 computed for MPL-2026-1042. Model v4.2.1-prod.',
    blockHash: 'e8f9cb72a10d8831c2'
  },
  {
    id: 'log-002',
    timestamp: '2026-09-06 11:45:12 IST',
    user: 'Dr. Rajeshwar V. (Joint Secy MoSPI)',
    action: 'VIEW_DOSSIER',
    details: 'Accessed Forensic Audit Dossier for MPL-2026-1042.',
    blockHash: 'a71b3e94002c9184df'
  },
  {
    id: 'log-003',
    timestamp: '2026-09-06 12:01:40 IST',
    user: 'Shri K. Ranganathan, IAS (District Collector)',
    action: 'CREATE_STATUTORY_REVIEW_CASE',
    details: 'Initiated Review Case RC-2026-0428. Requested field squad measurement book re-audit.',
    blockHash: 'f49281c79018e24c00'
  }
];

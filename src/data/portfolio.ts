export const personalInfo = {
  name: "SPANDANA DEVARASETTY",
  title: "Clinical Research Coordinator",
  location: "Dayton, OH",
  phone: "+1 (848) 308-9969",
  email: "devarasettyspandana7@gmail.com",
  linkedin: "https://www.linkedin.com/in/spandana-d-1a6484b2/",
  tagline: "Managing Complex Clinical Trials with Precision and Compliance",
  rotatingKeywords: ["Clinical Research", "ICH-GCP", "FDA Compliance", "Trial Management", "Patient Safety"],
  summary: "Clinical Research Coordinator with 3+ years of experience managing Phase II-IV sponsor-led and investigator-initiated multicenter clinical trials across academic and independent research settings, supporting 5+ concurrent studies and 100+ patient visits annually. Experienced in IRB start-up, screening and enrollment log management, informed consent administration, AE/SAE reporting, investigational product accountability, and monitoring visit coordination in alignment with ICH-GCP, FDA regulations, 21 CFR Part 11, and HIPAA.",
};

export const stats = [
  { label: "Years Experience", value: "3+", suffix: "" },
  { label: "Patient Visits", value: "120", suffix: "+" },
  { label: "Studies Managed", value: "5", suffix: "+" },
  { label: "Queries Resolved", value: "150", suffix: "+" },
];

export const experience = [
  {
    id: 1,
    company: "American Clinical Research Institute, LLC",
    position: "Clinical Research Coordinator",
    location: "Dayton, OH",
    duration: "Jan 2023 - Present",
    description: "Coordinating 5+ concurrent Phase II-IV multicenter sponsor-led and investigator-initiated trials through structured OnCore CTMS tracking and Epic EMR screening workflows.",
    highlights: [
      "Led informed consent and enrollment activities for 80+ participants resulting in zero consent-related audit findings",
      "Managed IRB submissions, amendments, and continuing reviews, achieving first-cycle approval on majority submissions",
      "Entered and validated clinical data in Medidata Rave and REDCap, closing 150+ data queries and reducing discrepancies by 30%",
      "Maintained audit-ready eTMF and regulatory binders supporting multiple monitoring visits with zero critical observations",
      "Oversaw investigational product accountability, temperature monitoring, and reconciliation with zero discrepancies"
    ],
    technologies: ["Medidata Rave", "REDCap", "OnCore CTMS", "Epic EMR", "ICH-GCP", "21 CFR Part 11"]
  },
  {
    id: 2,
    company: "Wright State Physicians",
    position: "Clinical Research Intern",
    location: "Dayton, OH",
    duration: "Jan 2024 - Mar 2024",
    description: "Screened and pre-qualified potential participants in Epic EMR while validating clinical trial data through source data verification in REDCap.",
    highlights: [
      "Improved visit adherence by 15% and enhanced enrollment accuracy through rigorous EMR screening",
      "Reconciled medical records with CRFs in REDCap, resulting in zero unresolved discrepancies during monitoring",
      "Processed and prepared biospecimens for shipment using IATA-compliant packaging and centrifugation",
      "Updated regulatory binders and delegation logs following protocol amendments to reduce documentation gaps"
    ],
    technologies: ["Epic EMR", "REDCap", "IATA Shipping", "Biospecimen Processing", "Source Data Verification"]
  },
  {
    id: 3,
    company: "Episource Pvt. Ltd",
    position: "Medical Coder",
    location: "India",
    duration: "May 2018 - Oct 2021",
    description: "Delivered accurate ICD-10-CM, CPT, and HCC coding across inpatient and outpatient charts while sustaining 98% quality scores.",
    highlights: [
      "Strengthened Medicare Part C and Part D risk adjustment accuracy, driving a 15% improvement in reimbursement precision",
      "Decreased repeat compliance findings by 25% through structured internal chart reviews aligned with CMS guidelines",
      "Increased HCC capture rates by 25% by initiating physician queries for incomplete diagnoses",
      "Reduced recurring claim rejections by 18% after analyzing denial patterns in Excel dashboards"
    ],
    technologies: ["ICD-10-CM", "CPT", "HCC Coding", "Medicare Risk Adjustment", "CMS Guidelines", "Excel"]
  }
];

export const projects = [
  {
    id: 1,
    title: "Decentralized Clinical Trial (DCT) Implementation Model",
    description: "Designed a hybrid clinical trial workflow integrating telehealth, remote eConsent, and ePRO data flow mapping to improve retention by 35%.",
    longDescription: "A comprehensive model for executing trials outside traditional site settings, focusing on patient centricity and remote data integrity.",
    technologies: ["REDCap", "Telehealth", "eConsent", "ePRO", "21 CFR Part 11", "Excel"],
    category: "Clinical Operations",
    featured: true,
    metrics: {
      "Projected Retention": "35% Increase",
      "Monitoring Costs": "20% Reduction",
      "Data Integrity": "100% Compliant"
    }
  },
  {
    id: 2,
    title: "Risk-Based Monitoring Optimization",
    description: "Developed a risk stratification framework categorizing study activities by data criticality and safety impact per ICH E6(R2).",
    longDescription: "A strategic approach to monitoring that prioritizes resources based on the risk profile of study sites and data points.",
    technologies: ["ICH E6(R2)", "Risk Analysis", "Trend Analysis", "Excel", "KPI Dashboard"],
    category: "Quality Management",
    featured: true,
    metrics: {
      "Oversight Efficiency": "Improved",
      "Early Signal Detection": "Enhanced",
      "Protocol Deviations": "Reduced"
    }
  }
];

export const skills = {
  "Clinical Operations": [
    { name: "Trial Coordination", level: 95, category: "Core" },
    { name: "Informed Consent", level: 98, category: "Core" },
    { name: "Patient Screening", level: 95, category: "Core" },
    { name: "Protocol Implementation", level: 90, category: "Core" },
    { name: "IRB Submissions", level: 85, category: "Regulatory" },
    { name: "Audit Readiness", level: 90, category: "Regulatory" }
  ],
  "Regulatory & Compliance": [
    { name: "ICH-GCP (E6 R2)", level: 98, category: "Compliance" },
    { name: "FDA Regulations", level: 95, category: "Compliance" },
    { name: "21 CFR Part 11", level: 90, category: "Compliance" },
    { name: "HIPAA", level: 95, category: "Compliance" },
    { name: "eTMF Management", level: 90, category: "Systems" },
    { name: "ISF Maintenance", level: 90, category: "Systems" }
  ],
  "Clinical Data Systems": [
    { name: "Medidata Rave", level: 90, category: "EDC" },
    { name: "REDCap", level: 95, category: "EDC/Research" },
    { name: "OnCore CTMS", level: 85, category: "Management" },
    { name: "Epic EMR", level: 92, category: "Systems" },
    { name: "Source Data Verification", level: 95, category: "Monitoring" },
    { name: "Query Resolution", level: 95, category: "Monitoring" }
  ],
  "Safety & Specialized": [
    { name: "AE/SAE Reporting", level: 95, category: "Safety" },
    { name: "IP Accountability", level: 92, category: "Investigational Product" },
    { name: "IATA Laboratory Shipping", level: 90, category: "Specimen" },
    { name: "Temperature Monitoring", level: 95, category: "Logistics" },
    { name: "C-SSRS", level: 90, category: "Assessment" },
    { name: "Biospecimen Processing", level: 88, category: "Laboratory" }
  ]
};

export const certifications = [
  {
    id: 1,
    name: "CITI Program - Human Subjects Research (Biomedical Research)",
    issuer: "CITI Program",
    date: "2024",
    icon: "🔬"
  },
  {
    id: 2,
    name: "Good Clinical Practice (ICH-GCP)",
    issuer: "NIDA/CITI",
    date: "2024",
    icon: "✅"
  },
  {
    id: 3,
    name: "ACRP - Ethics & Human Subject Protection",
    issuer: "ACRP",
    date: "2023",
    icon: "🤝"
  },
  {
    id: 4,
    name: "Basic Life Support (BLS)",
    issuer: "AHA",
    date: "2024",
    icon: "❤️"
  },
  {
    id: 5,
    name: "Columbia Suicide Severity Rating Scale (C-SSRS)",
    issuer: "Columbia University",
    date: "2023",
    icon: "🧠"
  },
  {
    id: 6,
    name: "IATA Laboratory Shipping Certification",
    issuer: "IATA",
    date: "2024",
    icon: "✈️"
  },
  {
    id: 7,
    name: "OSHA Bloodborne Pathogens",
    issuer: "OSHA",
    date: "2023",
    icon: "🩸"
  }
];

export const education = [
  {
    id: 1,
    degree: "Master of Science in Pharmacology & Toxicology",
    school: "Wright State University",
    location: "Dayton, OH",
    year: "2024",
    gpa: "3.9/4.0",
    coursework: ["Advanced Pharmacology", "Toxicology Principles", "Clinical Trials Methodology", "Regulatory Affairs"]
  },
  {
    id: 2,
    degree: "Bachelor of Pharmacy",
    school: "Acharya Nagarjuna University",
    location: "India",
    year: "2018",
    gpa: "8.5/10",
    coursework: ["Pharmaceutics", "Pharmacology", "Medicinal Chemistry", "Pharmaceutical Analysis"]
  }
];
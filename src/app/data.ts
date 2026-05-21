export interface Service {
  id: number;
  title: string;
  description: string;
  details: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  credentials: string[];
  image: string;
}

export interface ValueCard {
  title: string;
  icon: string;
  description: string;
}

export interface ProjectItem {
  id: number;
  title: string;
  category: "textile" | "education";
  image: string;
  location: string;
  scope: string;
}

export const SERVICES_DATA: Service[] = [
  {
    id: 1,
    title: "Eligibility of the property for loan issuance",
    description: "Assessing the real estate assets to verify suitability and risk profiling for financial institutions prior to loan approval.",
    details: [
      "Title verification support & technical inspection",
      "Structural compliance checks and safety ratings",
      "Guideline value comparisons vs current market rates",
      "Comprehensive bank format reporting"
    ]
  },
  {
    id: 2,
    title: "Stage value of the construction, total cost on completion.",
    description: "Monitoring physical progress and financial outlays of construction projects to release funding stages accurately.",
    details: [
      "Periodic site inspections and verification audits",
      "Detailed material quality and quantity evaluations",
      "Cost variance analysis and forecasting of pending works",
      "Stage completion certificate issuance for banking approvals"
    ]
  },
  {
    id: 3,
    title: "Advise the bank on any adverse matters like violation, etc",
    description: "Critical risk analysis uncovering building violations, setback deviancies, or legal encroachments on the subject property.",
    details: [
      "Review of approved local body drawings vs actual built structure",
      "Quantifying building deviations and zoning violations",
      "Assessing risk levels and regularisation possibilities",
      "Protective guidance reports for risk mitigation"
    ]
  },
  {
    id: 4,
    title: "Classify the land based on guidelines provided",
    description: "Categorizing land assets correctly (agricultural, residential, commercial, industrial) under governmental masterplans.",
    details: [
      "Zoning verification from official town planning authorities",
      "Analysis of sub-registrar guideline records",
      "Verification of conversion approvals and land patta",
      "Detailed boundaries and topography reporting"
    ]
  },
  {
    id: 5,
    title: "Certify the genuineness of the estimate",
    description: "Reviewing civil engineering estimates for fairness, standard schedule of rates (SOR), and realistic material sourcing costs.",
    details: [
      "Detailed quantity takeoff (QTO) auditing",
      "Comparison with local PWD Schedule of Rates (SOR)",
      "Market feasibility checking for high-end materials",
      "Official certificate of engineering estimation genuineness"
    ]
  },
  {
    id: 6,
    title: "Debt & Equity Raising",
    description: "Strategic capital advisory services, preparing asset valuation portfolios for corporate debt syndication and equity funding rounds.",
    details: [
      "Corporate asset valuation portfolios for PE/VC and lenders",
      "Fair value assessment under Ind-AS and global accounting standards",
      "Intangible assets and machinery valuation",
      "Financial profiling and presentation support"
    ]
  },
  {
    id: 7,
    title: "Financing & Insolvency",
    description: "Expert insolvency asset valuation backing corporate resolution processes under the Insolvency and Bankruptcy Code (IBC).",
    details: [
      "Liquidation value and fair value calculation under IBBI regulations",
      "Resolution plan valuation and commercial asset inventory mapping",
      "Independent valuer representations for financial creditors",
      "Fast-track auditing under tight statutory timelines"
    ]
  },
  {
    id: 8,
    title: "Statutory & Land Value Objections",
    description: "Formal representations before government revenue departments and tax councils to challenge unfair property guidelines.",
    details: [
      "Preparation of comparative market analysis (CMA) reports",
      "Formal objection draft preparation for sub-registrars",
      "Technical representation during judicial property hearings",
      "Minimizing tax exposures and excessive stamp duties"
    ]
  },
  {
    id: 9,
    title: "Internal Reference",
    description: "Discreet and highly detailed personal asset reports for inheritance sharing, partition deeds, and internal corporate accounting.",
    details: [
      "Family estate settlement valuations",
      "Corporate internal book value adjustments",
      "Asset restructuring and division modeling",
      "High-confidentiality physical and digital reporting"
    ]
  },
  {
    id: 10,
    title: "Litigation & Expert Witness Testimony",
    description: "Providing legally sound court-admissible valuations and expert testimony during land acquisitions and corporate litigations.",
    details: [
      "Court-appointed valuer reports and dispute resolutions",
      "Detailed cross-examination preparedness and documentation",
      "Land acquisition compensations auditing under Act requirements",
      "Sound professional witness backing"
    ]
  },
  {
    id: 11,
    title: "Mortgage Security",
    description: "Accurate physical and technical value assessment to create legal mortgage charges over commercial properties.",
    details: [
      "Technical assessment of high-value industrial/commercial units",
      "Machinery and structural stability valuations",
      "Forced sale value (FSV) and realisable value calculations",
      "Title flowcharting and security coverage ratios"
    ]
  },
  {
    id: 12,
    title: "Regulatory",
    description: "Valuations for statutory compliances, wealth tax declarations, income tax computations, capital gains tax, and RICS guidelines.",
    details: [
      "Capital gains tax assessments under Sec 50C of Income Tax Act",
      "Wealth tax valuation filings for private estates",
      "Foreign direct investment (FDI) pricing certificates under FEMA regulations",
      "Global compliance mapping via RICS valuation standards"
    ]
  }
];

export const TEAM_DATA: TeamMember[] = [
  {
    name: "S. Sanjay",
    role: "Government Registered Valuer & Quality Auditor",
    credentials: [
      "B.E., M.Sc., (Valuation) M.I.E., A.I.V.",
      "Govt. Registered Quality Auditor: QA 01 / 2021",
      "Income Tax and Wealth Tax Valuer: 01 / RV / 19-20",
      "Govt. Registered Valuer IBBI: IBBI / RV / 02 / 2019 / 12354"
    ],
    image: "/team/sanjay.png"
  },
  {
    name: "Chiranjeevi JS",
    role: "Chartered Engineer & Structural Consultant",
    credentials: [
      "B.E (CIVIL), M.B.A, A.M.I.E, C.ENG, LIV",
      "Chartered Engineer (India) Registration",
      "Member of the Institution of Valuers (LIV)",
      "Structural Engineering Specialist & Asset Consultant"
    ],
    image: "/team/chiranjeevi.png"
  }
];

export const VALUES_DATA: ValueCard[] = [
  {
    title: "Professionalism",
    icon: "scale",
    description: "Dedicated to using top qualified professionals, who demonstrate leadership in the market, and sound valuations expertise."
  },
  {
    title: "Integrity",
    icon: "helmet",
    description: "Committed to ethical conduct, accurate and objective valuations, best practice corporate governance and trusted service."
  },
  {
    title: "Excellence",
    icon: "tie",
    description: "Striving to supply best client service, top expertise and leading market knowledge."
  },
  {
    title: "Reliability",
    icon: "connection",
    description: "Promising to meet client expectations within budget, on time, at all times."
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 1,
    title: "Sri Lakshmi Textile Mega Showroom",
    category: "textile",
    image: "/projects/textile_1.jpg",
    location: "Chennai City Retail Zone",
    scope: "Full commercial building structural stability and market valuation."
  },
  {
    id: 2,
    title: "RMKV Grand Showroom Interior",
    category: "textile",
    image: "/projects/textile_2.jpg",
    location: "Madurai Commercial Center",
    scope: "Valuation of interior fit-outs, inventory racking system, and fixtures."
  },
  {
    id: 3,
    title: "Pothys Lifestyle Showroom Wing",
    category: "textile",
    image: "/projects/textile_3.jpg",
    location: "Coimbatore Shopping District",
    scope: "Mortgage security valuation for bank financing expansion."
  },
  {
    id: 4,
    title: "True Waves International Academy",
    category: "education",
    image: "/projects/edu_1.jpg",
    location: "Kanchipuram District Campus",
    scope: "Stage valuation of under-construction academic blocks."
  },
  {
    id: 5,
    title: "Modern STEM Lab & Lecture Hall",
    category: "education",
    image: "/projects/edu_2.jpg",
    location: "Madurai University Outskirts",
    scope: "Equipment audit, asset valuation, and physical stability certification."
  },
  {
    id: 6,
    title: "Tagore Memorial Educational Block",
    category: "education",
    image: "/projects/edu_3.jpg",
    location: "Chennai Suburbs Campus",
    scope: "Complete structural safety certification and land valuation audit."
  }
];

export const OFFICE_CONTACTS = {
  chennai: {
    city: "Chennai",
    address: "27/5, Easwaran Koil Street, Vellai Thottam, West Mambalam, Chennai-600 033",
    phone: "044-45837877",
    email: "truevaluators@gmail.com"
  },
  madurai: {
    city: "Madurai",
    address: "No.5, North Street, Singarayar Colony, Narimedu, Madurai - 625 002",
    phone: "0452-4506226",
    email: "valuersanjay620@gmail.com"
  }
};

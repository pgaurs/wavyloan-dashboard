import { Q as reactExports, I as jsxRuntimeExports } from "./server-BXPxHsE7.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();
const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const toCamelCase = (string) => string.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase()
);
const toPascalCase = (string) => {
  const camelCase = toCamelCase(string);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const hasA11yProp = (props) => {
  for (const prop in props) {
    if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
      return true;
    }
  }
  return false;
};
const Icon = reactExports.forwardRef(
  ({
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    absoluteStrokeWidth,
    className = "",
    children,
    iconNode,
    ...rest
  }, ref) => reactExports.createElement(
    "svg",
    {
      ref,
      ...defaultAttributes,
      width: size,
      height: size,
      stroke: color,
      strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
      className: mergeClasses("lucide", className),
      ...!children && !hasA11yProp(rest) && { "aria-hidden": "true" },
      ...rest
    },
    [
      ...iconNode.map(([tag, attrs]) => reactExports.createElement(tag, attrs)),
      ...Array.isArray(children) ? children : [children]
    ]
  )
);
const createLucideIcon = (iconName, iconNode) => {
  const Component = reactExports.forwardRef(
    ({ className, ...props }, ref) => reactExports.createElement(Icon, {
      ref,
      iconNode,
      className: mergeClasses(
        `lucide-${toKebabCase(toPascalCase(iconName))}`,
        `lucide-${iconName}`,
        className
      ),
      ...props
    })
  );
  Component.displayName = toPascalCase(iconName);
  return Component;
};
const __iconNode$n = [
  ["path", { d: "M10.268 21a2 2 0 0 0 3.464 0", key: "vwvbt9" }],
  [
    "path",
    {
      d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",
      key: "11g9vi"
    }
  ]
];
const Bell = createLucideIcon("bell", __iconNode$n);
const __iconNode$m = [
  ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }],
  ["path", { d: "M18 17V9", key: "2bz60n" }],
  ["path", { d: "M13 17V5", key: "1frdt8" }],
  ["path", { d: "M8 17v-3", key: "17ska0" }]
];
const ChartColumn = createLucideIcon("chart-column", __iconNode$m);
const __iconNode$l = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
const ChevronDown = createLucideIcon("chevron-down", __iconNode$l);
const __iconNode$k = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
];
const CircleCheck = createLucideIcon("circle-check", __iconNode$k);
const __iconNode$j = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }]
];
const CircleX = createLucideIcon("circle-x", __iconNode$j);
const __iconNode$i = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }]
];
const Clock = createLucideIcon("clock", __iconNode$i);
const __iconNode$h = [
  ["path", { d: "M12 15V3", key: "m9g1x1" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }]
];
const Download = createLucideIcon("download", __iconNode$h);
const __iconNode$g = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
      key: "1oefj6"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
];
const FileText = createLucideIcon("file-text", __iconNode$g);
const __iconNode$f = [
  ["path", { d: "M10 18v-7", key: "wt116b" }],
  [
    "path",
    {
      d: "M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949z",
      key: "1m329m"
    }
  ],
  ["path", { d: "M14 18v-7", key: "vav6t3" }],
  ["path", { d: "M18 18v-7", key: "aexdmj" }],
  ["path", { d: "M3 22h18", key: "8prr45" }],
  ["path", { d: "M6 18v-7", key: "1ivflk" }]
];
const Landmark = createLucideIcon("landmark", __iconNode$f);
const __iconNode$e = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]];
const LoaderCircle = createLucideIcon("loader-circle", __iconNode$e);
const __iconNode$d = [
  ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
  ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }]
];
const Mail = createLucideIcon("mail", __iconNode$d);
const __iconNode$c = [
  [
    "path",
    {
      d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
      key: "18887p"
    }
  ]
];
const MessageSquare = createLucideIcon("message-square", __iconNode$c);
const __iconNode$b = [
  ["path", { d: "M12 19v3", key: "npa21l" }],
  ["path", { d: "M19 10v2a7 7 0 0 1-14 0v-2", key: "1vc78b" }],
  ["rect", { x: "9", y: "2", width: "6", height: "13", rx: "3", key: "s6n7sd" }]
];
const Mic = createLucideIcon("mic", __iconNode$b);
const __iconNode$a = [["path", { d: "M5 12h14", key: "1ays0h" }]];
const Minus = createLucideIcon("minus", __iconNode$a);
const __iconNode$9 = [
  [
    "path",
    {
      d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
      key: "10ikf1"
    }
  ]
];
const Play = createLucideIcon("play", __iconNode$9);
const __iconNode$8 = [
  ["path", { d: "M12 3v18", key: "108xh3" }],
  ["path", { d: "m19 8 3 8a5 5 0 0 1-6 0zV7", key: "zcdpyk" }],
  ["path", { d: "M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1", key: "1yorad" }],
  ["path", { d: "m5 8 3 8a5 5 0 0 1-6 0zV7", key: "eua70x" }],
  ["path", { d: "M7 21h10", key: "1b0cd5" }]
];
const Scale = createLucideIcon("scale", __iconNode$8);
const __iconNode$7 = [
  ["path", { d: "M15 12h-5", key: "r7krc0" }],
  ["path", { d: "M15 8h-5", key: "1khuty" }],
  ["path", { d: "M19 17V5a2 2 0 0 0-2-2H4", key: "zz82l3" }],
  [
    "path",
    {
      d: "M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3",
      key: "1ph1d7"
    }
  ]
];
const ScrollText = createLucideIcon("scroll-text", __iconNode$7);
const __iconNode$6 = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ],
  ["path", { d: "M12 8v4", key: "1got3b" }],
  ["path", { d: "M12 16h.01", key: "1drbdi" }]
];
const ShieldAlert = createLucideIcon("shield-alert", __iconNode$6);
const __iconNode$5 = [
  ["rect", { width: "14", height: "20", x: "5", y: "2", rx: "2", ry: "2", key: "1yt0o3" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }]
];
const Smartphone = createLucideIcon("smartphone", __iconNode$5);
const __iconNode$4 = [
  [
    "path",
    {
      d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
      key: "1s2grr"
    }
  ],
  ["path", { d: "M20 2v4", key: "1rf3ol" }],
  ["path", { d: "M22 4h-4", key: "gwowj6" }],
  ["circle", { cx: "4", cy: "20", r: "2", key: "6kqj1y" }]
];
const Sparkles = createLucideIcon("sparkles", __iconNode$4);
const __iconNode$3 = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
];
const Square = createLucideIcon("square", __iconNode$3);
const __iconNode$2 = [
  ["path", { d: "M16 17h6v-6", key: "t6n2it" }],
  ["path", { d: "m22 17-8.5-8.5-5 5L2 7", key: "x473p" }]
];
const TrendingDown = createLucideIcon("trending-down", __iconNode$2);
const __iconNode$1 = [
  ["path", { d: "M16 7h6v6", key: "box55l" }],
  ["path", { d: "m22 7-8.5 8.5-5-5L2 17", key: "1t1m79" }]
];
const TrendingUp = createLucideIcon("trending-up", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
];
const TriangleAlert = createLucideIcon("triangle-alert", __iconNode);
const API_BASE = "http://localhost:8000";
const APPLICANTS = [
  { id: "WL-2024-001", name: "Alex Chen", risk: "Medium-Low Risk" },
  { id: "WL-2024-002", name: "Jordan Blake", risk: "High Risk" },
  { id: "WL-2024-003", name: "Sam Patel", risk: "Low Risk" }
];
const MOCK_RESULTS = {
  "WL-2024-001": {
    profile: {
      applicant_id: "WL-2024-001",
      full_name: "Alex Chen",
      employer: "Pacific Tech Industries",
      gross_annual_income: 142e3,
      loan_amount_requested: 525e3,
      property_value: 68e4,
      property_address: "248 Marina Blvd, San Francisco, CA 94123",
      monthly_debt_payments: 1850,
      down_payment: 155e3,
      loan_purpose: "Primary Residence Purchase",
      extraction_confidence: 0.96
    },
    assessment: {
      risk_score: 78,
      risk_tier: "Medium-Low",
      fico: 742,
      dti: 0.31,
      ltv: 0.77,
      drivers: [
        { factor: "Strong employment tenure (6.2 yrs)", impact: "Positive", detail: "Stable W-2 income with consistent raises." },
        { factor: "Down payment 23% of property value", impact: "Positive", detail: "Healthy equity cushion reduces lender exposure." },
        { factor: "DTI of 31%", impact: "Neutral", detail: "Within conforming guidelines but not exceptional." },
        { factor: "Credit utilization 38%", impact: "Negative", detail: "Above recommended 30% threshold." }
      ],
      reasoning: "Applicant presents a solid borrower profile with strong income stability and meaningful equity. Credit utilization is the primary watch-item but does not materially affect approval probability."
    },
    compliance_report: {
      overall_status: "PASS",
      fair_lending_flag: false,
      summary: { total: 5, pass: 4, fail: 0, advisory: 1 },
      checks: [
        { rule: "TILA Disclosure Timing", regulation: "12 CFR § 1026.19(e)", status: "Pass", citation: "Reg Z §1026.19(e)(1)(iii)", finding: "Loan Estimate delivered within 3 business days." },
        { rule: "RESPA Affiliated Business", regulation: "12 CFR § 1024.15", status: "Pass", citation: "Reg X §1024.15(b)(1)", finding: "No affiliated business arrangements detected." },
        { rule: "ECOA Adverse Action", regulation: "12 CFR § 1002.9", status: "Pass", citation: "Reg B §1002.9", finding: "Not applicable — approval recommendation." },
        { rule: "ATR/QM Standards", regulation: "12 CFR § 1026.43", status: "Pass", citation: "Reg Z §1026.43(c)", finding: "Borrower meets ability-to-repay; DTI under 43%." },
        { rule: "HMDA Data Completeness", regulation: "12 CFR § 1003.4", status: "Advisory", citation: "Reg C §1003.4(a)", finding: "Ethnicity field collected via observation — confirm at closing." }
      ]
    },
    decision: {
      outcome: "CONDITIONAL_APPROVE",
      confidence: 0.89,
      human_review_required: false,
      conditions: [
        "Verify employment within 10 business days of closing.",
        "Provide updated bank statement covering most recent 30 days.",
        "Confirm homeowner's insurance binder with $680,000 coverage."
      ],
      rationale: "Borrower meets all primary underwriting criteria with margin. Risk score and compliance posture support a conditional approval pending standard pre-closing verifications."
    },
    comms: {
      email: {
        subject: "Wavyloan: Your mortgage application has been conditionally approved",
        body: "Dear Alex,\n\nGreat news — your mortgage application (WL-2024-001) has been conditionally approved for $525,000 at our current published rate. A few standard verifications remain before we can issue final clear-to-close.\n\nYour loan officer will reach out within one business day to walk through the conditions and next steps.\n\nThank you for choosing Wavyloan.\n\nThe Wavyloan Team"
      },
      sms: "Wavyloan: Your loan application WL-2024-001 has been conditionally approved! Check your email for details and next steps.",
      voice_script: "Hi Alex, this is your Wavyloan update. Your mortgage application has been conditionally approved. Please review the email we just sent for the remaining verification steps. We're excited to help you close on your new home.",
      push: "Wavyloan: Conditional approval issued for your mortgage. Tap to view conditions."
    },
    audit_log: [
      { timestamp: "2026-05-24T14:02:11Z", agent: "Intake", action: "Extracted 5 documents via GPT-4o Vision (confidence 0.96)" },
      { timestamp: "2026-05-24T14:02:18Z", agent: "Risk", action: "Computed risk score 78 (Medium-Low) via o4-mini" },
      { timestamp: "2026-05-24T14:02:24Z", agent: "Compliance", action: "Ran 5 regulatory checks via File Search RAG — 4 pass, 1 advisory" },
      { timestamp: "2026-05-24T14:02:31Z", agent: "Underwriting", action: "Issued CONDITIONAL_APPROVE with 3 conditions (confidence 0.89)" },
      { timestamp: "2026-05-24T14:02:37Z", agent: "Communications", action: "Generated email/SMS/voice/push messages and TTS audio" }
    ]
  },
  "WL-2024-002": {
    profile: {
      applicant_id: "WL-2024-002",
      full_name: "Jordan Blake",
      employer: "Independent Contractor",
      gross_annual_income: 78e3,
      loan_amount_requested: 48e4,
      property_value: 51e4,
      property_address: "12 Elm Street, Austin, TX 78701",
      monthly_debt_payments: 2950,
      down_payment: 3e4,
      loan_purpose: "Primary Residence Purchase",
      extraction_confidence: 0.82
    },
    assessment: {
      risk_score: 28,
      risk_tier: "High",
      fico: 612,
      dti: 0.52,
      ltv: 0.94,
      drivers: [
        { factor: "DTI ratio of 52%", impact: "Negative", detail: "Exceeds 43% QM threshold." },
        { factor: "LTV of 94%", impact: "Negative", detail: "Minimal equity cushion; PMI required." },
        { factor: "1099 contractor income", impact: "Negative", detail: "Variable income with <2 years documented." },
        { factor: "No prior mortgage delinquencies", impact: "Positive", detail: "Clean housing payment history." }
      ],
      reasoning: "Multiple high-risk indicators including elevated DTI, thin equity, and non-W-2 income. Standard underwriting would not support approval without significant compensating factors."
    },
    compliance_report: {
      overall_status: "ADVISORY",
      fair_lending_flag: false,
      summary: { total: 5, pass: 3, fail: 0, advisory: 2 },
      checks: [
        { rule: "TILA Disclosure Timing", regulation: "12 CFR § 1026.19(e)", status: "Pass", citation: "Reg Z §1026.19(e)(1)(iii)", finding: "Disclosures timely." },
        { rule: "ATR/QM Standards", regulation: "12 CFR § 1026.43", status: "Advisory", citation: "Reg Z §1026.43(c)", finding: "DTI exceeds QM safe harbor — non-QM loan or denial recommended." },
        { rule: "RESPA Section 8", regulation: "12 CFR § 1024.14", status: "Pass", citation: "Reg X §1024.14", finding: "No kickback risk identified." },
        { rule: "ECOA Adverse Action", regulation: "12 CFR § 1002.9", status: "Advisory", citation: "Reg B §1002.9", finding: "Adverse action notice template required if denied." },
        { rule: "HMDA Data Completeness", regulation: "12 CFR § 1003.4", status: "Pass", citation: "Reg C §1003.4(a)", finding: "All required fields captured." }
      ]
    },
    decision: {
      outcome: "DENY",
      confidence: 0.91,
      human_review_required: false,
      conditions: [],
      rationale: "Application does not meet ability-to-repay standards. DTI of 52% materially exceeds 43% QM threshold and combined with 94% LTV produces unacceptable default probability under current credit policy."
    },
    comms: {
      email: {
        subject: "Wavyloan: Update on your mortgage application",
        body: "Dear Jordan,\n\nThank you for applying with Wavyloan. After careful review, we are unable to approve your application at this time. A formal adverse action notice with specific reasons will arrive within 30 days as required by the Equal Credit Opportunity Act.\n\nWe encourage you to reach out to a Wavyloan advisor to discuss options that may strengthen a future application.\n\nThe Wavyloan Team"
      },
      sms: "Wavyloan: We're unable to approve application WL-2024-002 at this time. Your formal notice will arrive within 30 days.",
      voice_script: "Hi Jordan, this is your Wavyloan update. We were unable to approve your mortgage application at this time. You'll receive a written notice within 30 days. We encourage you to contact a Wavyloan advisor to discuss next steps.",
      push: "Wavyloan: Application status updated. Tap to view details."
    },
    audit_log: [
      { timestamp: "2026-05-24T14:05:02Z", agent: "Intake", action: "Extracted 5 documents via GPT-4o Vision (confidence 0.82)" },
      { timestamp: "2026-05-24T14:05:09Z", agent: "Risk", action: "Computed risk score 28 (High) via o4-mini" },
      { timestamp: "2026-05-24T14:05:15Z", agent: "Compliance", action: "Ran 5 regulatory checks — 3 pass, 2 advisory" },
      { timestamp: "2026-05-24T14:05:22Z", agent: "Underwriting", action: "Issued DENY (confidence 0.91)" },
      { timestamp: "2026-05-24T14:05:28Z", agent: "Communications", action: "Generated adverse-action-compliant messaging" }
    ]
  },
  "WL-2024-003": {
    profile: {
      applicant_id: "WL-2024-003",
      full_name: "Sam Patel",
      employer: "Northwind Capital Partners",
      gross_annual_income: 285e3,
      loan_amount_requested: 72e4,
      property_value: 115e4,
      property_address: "501 Highland Ave, Seattle, WA 98109",
      monthly_debt_payments: 1200,
      down_payment: 43e4,
      loan_purpose: "Primary Residence Purchase",
      extraction_confidence: 0.98
    },
    assessment: {
      risk_score: 92,
      risk_tier: "Low",
      fico: 805,
      dti: 0.18,
      ltv: 0.63,
      drivers: [
        { factor: "FICO 805", impact: "Positive", detail: "Top-decile credit profile." },
        { factor: "DTI 18%", impact: "Positive", detail: "Significant headroom under guidelines." },
        { factor: "37% down payment", impact: "Positive", detail: "Substantial equity reduces lender exposure." },
        { factor: "Liquid reserves > 24 months PITI", impact: "Positive", detail: "Strong post-close liquidity." }
      ],
      reasoning: "Exemplary borrower profile across every dimension. Recommend best-tier pricing."
    },
    compliance_report: {
      overall_status: "PASS",
      fair_lending_flag: false,
      summary: { total: 5, pass: 5, fail: 0, advisory: 0 },
      checks: [
        { rule: "TILA Disclosure Timing", regulation: "12 CFR § 1026.19(e)", status: "Pass", citation: "Reg Z §1026.19(e)(1)(iii)", finding: "Disclosures delivered on time." },
        { rule: "RESPA Affiliated Business", regulation: "12 CFR § 1024.15", status: "Pass", citation: "Reg X §1024.15(b)(1)", finding: "Compliant." },
        { rule: "ECOA Adverse Action", regulation: "12 CFR § 1002.9", status: "Pass", citation: "Reg B §1002.9", finding: "N/A — approval." },
        { rule: "ATR/QM Standards", regulation: "12 CFR § 1026.43", status: "Pass", citation: "Reg Z §1026.43(c)", finding: "Meets safe harbor QM." },
        { rule: "HMDA Data Completeness", regulation: "12 CFR § 1003.4", status: "Pass", citation: "Reg C §1003.4(a)", finding: "All fields complete." }
      ]
    },
    decision: {
      outcome: "CONDITIONAL_APPROVE",
      confidence: 0.97,
      human_review_required: false,
      conditions: [
        "Standard pre-closing employment re-verification.",
        "Confirm homeowner's insurance binder."
      ],
      rationale: "Best-tier borrower with overwhelming compensating factors. Recommend prime pricing tier."
    },
    comms: {
      email: {
        subject: "Wavyloan: Your mortgage is approved at our prime tier",
        body: "Dear Sam,\n\nCongratulations — your mortgage application (WL-2024-003) has been conditionally approved at our prime pricing tier for $720,000. Final clear-to-close is pending only standard pre-closing verifications.\n\nYour loan officer will be in touch within one business day.\n\nThe Wavyloan Team"
      },
      sms: "Wavyloan: Application WL-2024-003 approved at prime tier! Loan officer will contact you within 1 business day.",
      voice_script: "Hi Sam, fantastic news from Wavyloan. Your mortgage application has been approved at our prime pricing tier. Your loan officer will reach out within one business day. Congratulations on your new home.",
      push: "Wavyloan: Prime-tier approval issued. Tap to view."
    },
    audit_log: [
      { timestamp: "2026-05-24T14:08:44Z", agent: "Intake", action: "Extracted 5 documents via GPT-4o Vision (confidence 0.98)" },
      { timestamp: "2026-05-24T14:08:51Z", agent: "Risk", action: "Computed risk score 92 (Low) via o4-mini" },
      { timestamp: "2026-05-24T14:08:57Z", agent: "Compliance", action: "Ran 5 regulatory checks — all pass" },
      { timestamp: "2026-05-24T14:09:04Z", agent: "Underwriting", action: "Issued CONDITIONAL_APPROVE at prime tier (confidence 0.97)" },
      { timestamp: "2026-05-24T14:09:10Z", agent: "Communications", action: "Generated approval messaging and TTS audio" }
    ]
  }
};
async function processApplication(applicantId) {
  const res = await fetch(`${API_BASE}/api/process-application`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ applicant_id: applicantId })
  });
  if (!res.ok) throw new Error(`Backend returned ${res.status}`);
  return await res.json();
}
function getMockResult(applicantId) {
  const r = MOCK_RESULTS[applicantId];
  if (!r) throw new Error(`No mock data for ${applicantId}`);
  return r;
}
function voiceUrl(applicantId) {
  return `${API_BASE}/api/voice/${applicantId}`;
}
const currency = (n) => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);
const percent = (n, digits = 0) => `${(n * 100).toFixed(digits)}%`;
const datetime = (iso) => new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
  hour: "numeric",
  minute: "2-digit",
  second: "2-digit"
}).format(new Date(iso));
const STEPS = [{
  key: "intake",
  label: "Document Intake",
  model: "GPT-4o Vision",
  Icon: FileText
}, {
  key: "risk",
  label: "Risk Assessment",
  model: "o4-mini",
  Icon: ChartColumn
}, {
  key: "compliance",
  label: "Compliance Check",
  model: "RAG + Web Search",
  Icon: Scale
}, {
  key: "underwriting",
  label: "Underwriting Decision",
  model: "o4-mini",
  Icon: Landmark
}, {
  key: "comms",
  label: "Communications",
  model: "GPT-4o + TTS",
  Icon: Mail
}];
const TABS = [{
  id: "intake",
  label: "Intake & Documents",
  Icon: FileText
}, {
  id: "risk",
  label: "Risk Assessment",
  Icon: ChartColumn
}, {
  id: "compliance",
  label: "Compliance",
  Icon: Scale
}, {
  id: "decision",
  label: "Underwriting Decision",
  Icon: Landmark
}, {
  id: "comms",
  label: "Communications",
  Icon: Mail
}, {
  id: "audit",
  label: "Audit Log",
  Icon: ScrollText
}];
const RUN_MESSAGES = {
  intake: "GPT-4o Vision is reading your documents...",
  risk: "o4-mini is calculating the risk score...",
  compliance: "Searching regulatory corpus via File Search RAG...",
  underwriting: "o4-mini is reasoning over the underwriting decision...",
  comms: "Generating multi-channel communications with TTS..."
};
function WavyloanApp() {
  const [applicantId, setApplicantId] = reactExports.useState(APPLICANTS[0].id);
  const [tab, setTab] = reactExports.useState("intake");
  const [result, setResult] = reactExports.useState(null);
  const [running, setRunning] = reactExports.useState(false);
  const [error, setError] = reactExports.useState(null);
  const [stepStatus, setStepStatus] = reactExports.useState({});
  const reset = () => {
    setResult(null);
    setError(null);
    setStepStatus({});
  };
  reactExports.useEffect(() => {
    reset();
  }, [applicantId]);
  const run = reactExports.useCallback(async (useMock = false) => {
    setRunning(true);
    setError(null);
    setResult(null);
    const init = {};
    STEPS.forEach((s) => {
      init[s.key] = "idle";
    });
    setStepStatus(init);
    const stepDelay = 850;
    const animate = async () => {
      for (const s of STEPS) {
        setStepStatus((prev) => ({
          ...prev,
          [s.key]: "running"
        }));
        await new Promise((r) => setTimeout(r, stepDelay));
        setStepStatus((prev) => ({
          ...prev,
          [s.key]: "complete"
        }));
      }
    };
    try {
      const [data] = await Promise.all([useMock ? new Promise((r) => setTimeout(() => r(getMockResult(applicantId)), 100)) : processApplication(applicantId).catch(() => getMockResult(applicantId)), animate()]);
      setResult(data);
      setRunning(false);
    } catch (e) {
      const msg = e instanceof Error ? e.message : "Pipeline failed";
      setError(msg);
      setStepStatus((prev) => {
        const next = {
          ...prev
        };
        Object.keys(next).forEach((k) => {
          if (next[k] === "running") next[k] = "error";
        });
        return next;
      });
      setRunning(false);
    }
  }, [applicantId]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(TopNav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex pt-[60px]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Sidebar, { applicantId, setApplicantId, onRun: () => run(), running, stepStatus }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "flex-1 ml-[260px] p-8 max-w-[1400px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabBar, { tab, setTab }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "wl-fade-in", children: [
          error && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl border border-destructive/30 bg-danger-soft p-6 mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldAlert, { className: "text-destructive shrink-0 mt-0.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-danger-soft-foreground", children: "Pipeline error" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-danger-soft-foreground/80 mt-1", children: error }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => run(), className: "rounded-md bg-destructive text-destructive-foreground px-3 py-1.5 text-sm font-medium", children: "Retry" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => run(true), className: "rounded-md border border-border bg-card px-3 py-1.5 text-sm font-medium", children: "Load demo data" })
              ] })
            ] })
          ] }) }),
          tab === "intake" && /* @__PURE__ */ jsxRuntimeExports.jsx(IntakeTab, { result }),
          tab === "risk" && /* @__PURE__ */ jsxRuntimeExports.jsx(RiskTab, { result }),
          tab === "compliance" && /* @__PURE__ */ jsxRuntimeExports.jsx(ComplianceTab, { result }),
          tab === "decision" && /* @__PURE__ */ jsxRuntimeExports.jsx(DecisionTab, { result }),
          tab === "comms" && /* @__PURE__ */ jsxRuntimeExports.jsx(CommsTab, { result, applicantId }),
          tab === "audit" && /* @__PURE__ */ jsxRuntimeExports.jsx(AuditTab, { result })
        ] }, tab + (result ? "r" : "e"))
      ] })
    ] }),
    running && /* @__PURE__ */ jsxRuntimeExports.jsx(RunOverlay, { stepStatus })
  ] });
}
function TopNav() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "fixed top-0 inset-x-0 z-40 h-[60px] bg-sidebar text-sidebar-foreground border-b border-sidebar-border overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-20 pointer-events-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "wl-wave h-full w-[200%]", style: {
      background: "linear-gradient(90deg, transparent, oklch(0.55 0.18 142 / 0.4) 25%, transparent 50%, oklch(0.49 0.08 220 / 0.4) 75%, transparent)"
    } }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative flex items-center justify-between h-full px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "🌊" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-lg tracking-tight", children: "Wavyloan" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-sidebar-foreground/60 -mt-0.5", children: "Reimagining Loan Processing" })
      ] })
    ] }) })
  ] });
}
function Sidebar({
  applicantId,
  setApplicantId,
  onRun,
  running,
  stepStatus
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "fixed left-0 top-[60px] bottom-0 w-[260px] bg-sidebar text-sidebar-foreground border-r border-sidebar-border flex flex-col p-4 gap-4 overflow-y-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[10px] uppercase tracking-wider text-sidebar-foreground/50 font-semibold", children: "Applicant" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("select", { value: applicantId, onChange: (e) => setApplicantId(e.target.value), disabled: running, className: "mt-1.5 w-full rounded-md bg-sidebar-accent text-sidebar-accent-foreground border border-sidebar-border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sidebar-ring", children: APPLICANTS.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: a.id, children: [
        a.name,
        " — ",
        a.id,
        " (",
        a.risk,
        ")"
      ] }, a.id)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onRun, disabled: running, onKeyDown: (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        onRun();
      }
    }, className: "w-full rounded-md bg-sidebar-primary text-sidebar-primary-foreground font-semibold py-3 text-sm shadow-lg shadow-sidebar-primary/20 hover:brightness-110 transition disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2", children: running ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-4 h-4 animate-spin" }),
      " Processing..."
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-4 h-4" }),
      " Process Application"
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wider text-sidebar-foreground/50 font-semibold mb-2", children: "Pipeline" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "space-y-1.5", children: STEPS.map((s, i) => {
        const status = stepStatus[s.key] ?? "idle";
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2.5 rounded-md px-2 py-2 bg-sidebar-accent/40 border border-sidebar-border/50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-0.5 flex items-center justify-center w-5 h-5 rounded-full text-[10px] font-semibold shrink-0", style: {
            background: status === "complete" ? "oklch(0.55 0.18 142)" : status === "error" ? "oklch(0.55 0.22 27)" : status === "running" ? "oklch(0.55 0.18 142)" : "oklch(0.3 0.03 200)",
            color: "white"
          }, children: status === "complete" ? "✓" : status === "error" ? "!" : status === "running" ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block w-2 h-2 rounded-full bg-white wl-pulse-dot" }) : i + 1 }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(s.Icon, { className: "w-3 h-3 text-sidebar-foreground/60 shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[12px] font-medium truncate", children: s.label })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-sidebar-foreground/50 font-mono", children: s.model })
          ] })
        ] }, s.key);
      }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-auto pt-3 border-t border-sidebar-border flex items-center gap-2 text-[11px] text-sidebar-foreground/60", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-sidebar-primary wl-pulse-dot" }),
      "Powered by OpenAI"
    ] })
  ] });
}
function TabBar({
  tab,
  setTab
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1 border-b border-border mb-6 overflow-x-auto", children: TABS.map((t) => {
    const active = tab === t.id;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setTab(t.id), className: `relative flex items-center gap-2 px-4 py-3 text-sm font-medium whitespace-nowrap transition ${active ? "text-primary" : "text-muted-foreground hover:text-foreground"}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(t.Icon, { className: "w-4 h-4" }),
      t.label,
      active && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute bottom-0 inset-x-2 h-0.5 bg-primary rounded-full" })
    ] }, t.id);
  }) });
}
function RunOverlay({
  stepStatus
}) {
  const current = STEPS.find((s) => stepStatus[s.key] === "running");
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-2xl shadow-2xl p-8 max-w-md w-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-6 h-6 animate-spin text-primary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-lg", children: "Processing application" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: current ? RUN_MESSAGES[current.key] : "Initializing agents..." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "space-y-3", children: STEPS.map((s) => {
      const status = stepStatus[s.key] ?? "idle";
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: `flex items-center gap-3 p-3 rounded-lg border transition ${status === "complete" ? "bg-success-soft border-success-soft-foreground/20" : status === "running" ? "bg-accent border-primary/40" : status === "error" ? "bg-danger-soft border-destructive/30" : "bg-muted border-border opacity-60"}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(s.Icon, { className: "w-5 h-5 shrink-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium", children: s.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-mono text-muted-foreground", children: s.model })
        ] }),
        status === "complete" && /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-5 h-5 text-primary" }),
        status === "running" && /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-5 h-5 animate-spin text-primary" }),
        status === "error" && /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "w-5 h-5 text-destructive" })
      ] }, s.key);
    }) })
  ] }) });
}
function EmptyState({
  Icon: Icon2,
  title
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-dashed border-border bg-muted/40 p-16 text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Icon2, { className: "w-12 h-12 mx-auto text-muted-foreground/60 mb-4" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-foreground", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Run the pipeline to see results." })
  ] });
}
function IntakeTab({
  result
}) {
  const [showJson, setShowJson] = reactExports.useState(false);
  const docs = ["Loan Application", "Pay Stub", "Tax Return", "Bank Statement", "Property Appraisal"];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { title: "Document Checklist", subtitle: "Synthetic documents pre-loaded for demo", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "grid grid-cols-2 md:grid-cols-3 gap-2", children: docs.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2 rounded-md border border-border bg-card px-3 py-2 text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4 text-primary" }),
      " ",
      d
    ] }, d)) }) }),
    !result ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { Icon: FileText, title: "Document Intake" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { title: "Extracted Applicant Profile", subtitle: `Applicant ${result.profile.applicant_id}`, right: /* @__PURE__ */ jsxRuntimeExports.jsx(ConfidenceBadge, { value: result.profile.extraction_confidence }), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-x-8 gap-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DataField, { label: "Full Name", value: result.profile.full_name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(DataField, { label: "Employer", value: result.profile.employer }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(DataField, { label: "Annual Income", value: currency(result.profile.gross_annual_income) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(DataField, { label: "Loan Amount", value: currency(result.profile.loan_amount_requested) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(DataField, { label: "Property Value", value: currency(result.profile.property_value) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(DataField, { label: "Monthly Debt", value: currency(result.profile.monthly_debt_payments) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(DataField, { label: "Down Payment", value: currency(result.profile.down_payment) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(DataField, { label: "Loan Purpose", value: result.profile.loan_purpose }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(DataField, { label: "Property Address", value: result.profile.property_address, className: "col-span-2" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground mb-1.5 flex justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Extraction Confidence" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono", children: percent(result.profile.extraction_confidence, 1) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 rounded-full bg-muted overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full bg-primary transition-all", style: {
            width: `${result.profile.extraction_confidence * 100}%`
          } }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setShowJson((s) => !s), className: "flex items-center gap-1.5 text-sm text-secondary font-medium hover:underline", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: `w-4 h-4 transition ${showJson ? "rotate-180" : ""}` }),
          showJson ? "Hide" : "View",
          " Raw JSON"
        ] }),
        showJson && /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { className: "mt-3 rounded-lg bg-sidebar text-sidebar-foreground p-4 text-xs font-mono overflow-x-auto border border-sidebar-border", children: JSON.stringify(result.profile, null, 2) })
      ] })
    ] })
  ] });
}
function DataField({
  label,
  value,
  className = ""
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-wider text-muted-foreground font-semibold", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-base font-medium text-foreground mt-0.5", children: value })
  ] });
}
function ConfidenceBadge({
  value
}) {
  const tier = value > 0.9 ? "high" : value > 0.7 ? "med" : "low";
  const cls = tier === "high" ? "bg-success-soft text-success-soft-foreground" : tier === "med" ? "bg-warning-soft text-warning-soft-foreground" : "bg-danger-soft text-danger-soft-foreground";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `text-xs font-semibold px-2.5 py-1 rounded-full ${cls}`, children: [
    percent(value, 0),
    " confidence"
  ] });
}
function RiskTab({
  result
}) {
  if (!result) return /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { Icon: ChartColumn, title: "Risk Assessment" });
  const a = result.assessment;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { title: "Risk Score", subtitle: `Computed by o4-mini reasoning`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col lg:flex-row items-center gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(RiskGauge, { score: a.risk_score }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 space-y-4 w-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(RiskTierBadge, { tier: a.risk_tier, score: a.risk_score }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Metric, { label: "FICO Score", value: a.fico.toString() }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Metric, { label: "DTI Ratio", value: percent(a.dti, 0) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Metric, { label: "LTV Ratio", value: percent(a.ltv, 0) })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { title: "Key Risk Drivers", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-3", children: a.drivers.map((d, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(DriverCard, { driver: d }, i)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { title: "Reasoning Summary", children: /* @__PURE__ */ jsxRuntimeExports.jsx("blockquote", { className: "border-l-4 border-secondary bg-muted/50 p-4 rounded-r-md text-sm text-foreground/90 italic", children: a.reasoning }) })
  ] });
}
function RiskGauge({
  score
}) {
  const [animated, setAnimated] = reactExports.useState(0);
  reactExports.useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const dur = 1200;
    const step = (now) => {
      const t = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - t, 3);
      setAnimated(Math.round(score * eased));
      if (t < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [score]);
  const r = 78;
  const c = 2 * Math.PI * r;
  const dash = animated / 100 * c;
  const color = score >= 65 ? "oklch(0.55 0.18 142)" : score >= 35 ? "oklch(0.65 0.18 80)" : "oklch(0.55 0.22 27)";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-48 h-48 shrink-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 200 200", className: "-rotate-90", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "100", cy: "100", r, fill: "none", stroke: "oklch(0.92 0.01 200)", strokeWidth: "14" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "100", cy: "100", r, fill: "none", stroke: color, strokeWidth: "14", strokeDasharray: `${dash} ${c}`, strokeLinecap: "round", style: {
        transition: "stroke 0.4s"
      } })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 flex flex-col items-center justify-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl font-bold tabular-nums", style: {
        color
      }, children: animated }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-wider text-muted-foreground font-semibold mt-1", children: "Risk Score" })
    ] })
  ] });
}
function RiskTierBadge({
  tier,
  score
}) {
  const cls = score >= 65 ? "bg-success-soft text-success-soft-foreground border-success-soft-foreground/30" : score >= 35 ? "bg-warning-soft text-warning-soft-foreground border-warning-soft-foreground/30" : "bg-danger-soft text-danger-soft-foreground border-danger-soft-foreground/30";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `inline-flex items-center gap-2 px-4 py-2 rounded-full border font-semibold ${cls}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 rounded-full bg-current" }),
    "Risk Tier: ",
    tier
  ] });
}
function Metric({
  label,
  value
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-wider text-muted-foreground font-semibold", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold mt-1 tabular-nums", children: value })
  ] });
}
function DriverCard({
  driver
}) {
  const map = {
    Positive: {
      Icon: TrendingUp,
      color: "text-success-soft-foreground",
      bg: "bg-success-soft"
    },
    Negative: {
      Icon: TrendingDown,
      color: "text-danger-soft-foreground",
      bg: "bg-danger-soft"
    },
    Neutral: {
      Icon: Minus,
      color: "text-muted-foreground",
      bg: "bg-muted"
    }
  }[driver.impact];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-border bg-card p-4 flex gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-8 h-8 rounded-md ${map.bg} ${map.color} flex items-center justify-center shrink-0`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(map.Icon, { className: "w-4 h-4" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium text-sm", children: driver.factor }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-1", children: driver.detail })
    ] })
  ] });
}
function ComplianceTab({
  result
}) {
  const [open, setOpen] = reactExports.useState(0);
  if (!result) return /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { Icon: Scale, title: "Compliance Check" });
  const r = result.compliance_report;
  const banner = r.overall_status === "PASS" ? {
    cls: "bg-success-soft text-success-soft-foreground",
    Icon: CircleCheck,
    label: "PASS"
  } : r.overall_status === "FAIL" ? {
    cls: "bg-danger-soft text-danger-soft-foreground",
    Icon: CircleX,
    label: "FAIL"
  } : {
    cls: "bg-warning-soft text-warning-soft-foreground",
    Icon: TriangleAlert,
    label: "ADVISORY"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `rounded-2xl p-6 ${banner.cls} flex items-center gap-4`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(banner.Icon, { className: "w-10 h-10" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-wider font-semibold opacity-70", children: "Overall Compliance Status" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-bold", children: banner.label })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ml-auto text-sm font-medium opacity-80", children: [
        r.summary.total,
        " checks · ",
        r.summary.pass,
        " Pass · ",
        r.summary.fail,
        " Fail · ",
        r.summary.advisory,
        " Advisory"
      ] })
    ] }),
    r.fair_lending_flag && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border-2 border-destructive bg-danger-soft p-4 flex items-start gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldAlert, { className: "text-destructive w-6 h-6 shrink-0" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-danger-soft-foreground", children: "Fair Lending Flag Raised" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-danger-soft-foreground/80", children: "This application requires immediate review by the Fair Lending Compliance Officer." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: r.checks.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(ComplianceItem, { check: c, open: open === i, onToggle: () => setOpen(open === i ? null : i) }, i)) })
  ] });
}
function ComplianceItem({
  check,
  open,
  onToggle
}) {
  const cls = check.status === "Pass" ? "bg-success-soft text-success-soft-foreground" : check.status === "Fail" ? "bg-danger-soft text-danger-soft-foreground" : check.status === "Advisory" ? "bg-warning-soft text-warning-soft-foreground" : "bg-muted text-muted-foreground";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: onToggle, className: "w-full flex items-center gap-4 p-4 text-left hover:bg-muted/30", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-xs font-semibold px-2.5 py-1 rounded-full ${cls} shrink-0 w-24 text-center`, children: check.status }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium text-sm", children: check.rule }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground font-mono mt-0.5", children: check.regulation })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: `w-4 h-4 text-muted-foreground transition ${open ? "rotate-180" : ""}` })
    ] }),
    open && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border p-4 bg-muted/20 space-y-2 wl-fade-in", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground uppercase tracking-wider font-semibold", children: "Citation:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "font-mono bg-card border border-border px-2 py-0.5 rounded text-foreground", children: check.citation })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground/90", children: check.finding })
    ] })
  ] });
}
function DecisionTab({
  result
}) {
  if (!result) return /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { Icon: Landmark, title: "Underwriting Decision" });
  const d = result.decision;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DecisionBanner, { outcome: d.outcome }),
    d.conditions.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { title: "Conditions of Approval", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "space-y-2", children: d.conditions.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3 p-3 rounded-lg border border-border bg-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-6 h-6 rounded-full bg-primary text-primary-foreground font-semibold text-xs flex items-center justify-center shrink-0 mt-0.5", children: i + 1 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: c })
    ] }, i)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { title: "Decision Rationale", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm leading-relaxed text-foreground/90", children: d.rationale }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { title: "Confidence", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-bold tabular-nums", children: percent(d.confidence, 0) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 mt-3 rounded-full bg-muted overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full bg-primary", style: {
          width: `${d.confidence * 100}%`
        } }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { title: "Human Review Required", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-3", children: d.human_review_required ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-7 h-7 text-warning-soft-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl font-bold", children: "Yes" })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-7 h-7 text-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl font-bold", children: "No" })
      ] }) }) })
    ] }),
    d.human_review_required && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-warning-soft-foreground/30 bg-warning-soft p-4 flex items-start gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-5 h-5 text-warning-soft-foreground shrink-0 mt-0.5" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-warning-soft-foreground", children: "⏳ This application has been escalated to a loan officer for manual review. Borrower will not be notified until review is complete." })
    ] })
  ] });
}
function DecisionBanner({
  outcome
}) {
  const map = {
    CONDITIONAL_APPROVE: {
      Icon: CircleCheck,
      label: "Conditional Approve",
      cls: "bg-gradient-to-br from-primary to-primary/80 text-primary-foreground"
    },
    DENY: {
      Icon: CircleX,
      label: "Deny",
      cls: "bg-gradient-to-br from-destructive to-red-700 text-destructive-foreground"
    },
    REFER: {
      Icon: Clock,
      label: "Refer to Human Reviewer",
      cls: "bg-gradient-to-br from-amber-500 to-amber-600 text-white"
    }
  }[outcome];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `rounded-2xl ${map.cls} p-10 shadow-xl flex items-center gap-6 wl-fade-in`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(map.Icon, { className: "w-20 h-20 shrink-0", strokeWidth: 1.5 }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm uppercase tracking-widest opacity-80 font-semibold", children: "Underwriting Decision" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl font-bold mt-1 tracking-tight", children: map.label })
    ] })
  ] });
}
function CommsTab({
  result,
  applicantId
}) {
  const audioRef = reactExports.useRef(null);
  const [playing, setPlaying] = reactExports.useState(false);
  const togglePlay = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio(voiceUrl(applicantId));
      audioRef.current.addEventListener("ended", () => setPlaying(false));
      audioRef.current.addEventListener("error", () => {
        setPlaying(false);
        audioRef.current = null;
      });
    }
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play().catch(() => setPlaying(false));
      setPlaying(true);
    }
  };
  reactExports.useEffect(() => {
    audioRef.current?.pause();
    audioRef.current = null;
    setPlaying(false);
  }, [applicantId]);
  if (!result) return /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { Icon: Mail, title: "Communications" });
  const c = result.comms;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-3 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { title: "Email", right: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "w-4 h-4 text-muted-foreground" }), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md border border-border bg-card overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted/50 border-b border-border px-3 py-2 text-xs space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "To:" }),
            " applicant@example.com"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Subject:" }),
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: c.email.subject })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 text-sm whitespace-pre-wrap leading-relaxed", children: c.email.body })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { title: "SMS", right: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "w-4 h-4 text-muted-foreground" }), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted/50 rounded-2xl p-4 min-h-[180px] flex flex-col justify-end", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-secondary text-secondary-foreground rounded-2xl rounded-bl-sm px-4 py-3 text-sm max-w-[90%] shadow-sm", children: c.sms }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground mt-2 ml-2", children: "Wavyloan · just now" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { title: "Voice", right: /* @__PURE__ */ jsxRuntimeExports.jsx(Mic, { className: "w-4 h-4 text-muted-foreground" }), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm italic text-foreground/80 mb-4", children: [
          '"',
          c.voice_script,
          '"'
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: togglePlay, className: "w-full rounded-lg bg-primary text-primary-foreground font-semibold py-3 flex items-center justify-center gap-2 hover:brightness-110 transition", children: playing ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Square, { className: "w-4 h-4" }),
          " Stop"
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "w-4 h-4" }),
          " Play Voice Update"
        ] }) }),
        playing && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 flex items-center justify-center gap-1 h-10", children: [0, 1, 2, 3, 4, 5, 6].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1.5 h-full bg-primary rounded-full wl-bar", style: {
          animationDelay: `${i * 0.08}s`
        } }, i)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { title: "In-App Push Notification", right: /* @__PURE__ */ jsxRuntimeExports.jsx(Smartphone, { className: "w-4 h-4 text-muted-foreground" }), children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-md mx-auto rounded-2xl bg-sidebar text-sidebar-foreground p-4 shadow-2xl border border-sidebar-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-lg bg-sidebar-primary flex items-center justify-center text-lg shrink-0", children: "🌊" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-sm", children: "Wavyloan" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-sidebar-foreground/50", children: "now" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm mt-0.5", children: c.push })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "w-4 h-4 text-sidebar-foreground/40" })
    ] }) }) })
  ] });
}
const AGENT_COLORS = {
  Intake: "bg-secondary text-secondary-foreground",
  Risk: "bg-primary text-primary-foreground",
  Compliance: "bg-amber-600 text-white",
  Underwriting: "bg-purple-600 text-white",
  Communications: "bg-cyan-600 text-white"
};
function AuditTab({
  result
}) {
  const download = () => {
    if (!result) return;
    const blob = new Blob([JSON.stringify(result.audit_log, null, 2)], {
      type: "application/json"
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `wavyloan-audit-${result.profile.applicant_id}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };
  if (!result) return /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { Icon: ScrollText, title: "Audit Log" });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold", children: "Pipeline Audit Log" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Immutable record of all agent actions for this run." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: download, className: "rounded-md bg-secondary text-secondary-foreground px-4 py-2 text-sm font-medium flex items-center gap-2 hover:brightness-110", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-4 h-4" }),
        " Download Audit Log"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "relative border-l-2 border-border ml-3 space-y-4", children: result.audit_log.map((e, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "ml-6 relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -left-[34px] top-2 w-4 h-4 rounded-full bg-primary border-4 border-background" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-border bg-card p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[10px] font-semibold px-2 py-0.5 rounded-full ${AGENT_COLORS[e.agent] ?? "bg-muted text-muted-foreground"}`, children: e.agent }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground font-mono", children: datetime(e.timestamp) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm", children: e.action })
      ] })
    ] }, i)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground italic border-t border-border pt-4", children: "All agent inputs are stored as SHA-256 hashes. Raw PII is never written to logs." })
  ] });
}
function Card({
  title,
  subtitle,
  right,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded-2xl border border-border bg-card p-6 shadow-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "flex items-start justify-between mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-base", children: title }),
        subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: subtitle })
      ] }),
      right
    ] }),
    children
  ] });
}
export {
  WavyloanApp as component
};

export const API_BASE = "http://localhost:8000";

export type ApplicantOption = {
  id: string;
  name: string;
  risk: string;
};

export const APPLICANTS: ApplicantOption[] = [
  { id: "WL-2024-001", name: "Alex Chen", risk: "Medium-Low Risk" },
  { id: "WL-2024-002", name: "Jordan Blake", risk: "High Risk" },
  { id: "WL-2024-003", name: "Sam Patel", risk: "Low Risk" },
];

import type { PipelineResult } from "./lib/api";

export const MOCK_RESULTS: Record<string, PipelineResult> = {
  "WL-2024-001": {
    profile: {
      applicant_id: "WL-2024-001",
      full_name: "Alex Chen",
      employer: "Pacific Tech Industries",
      annual_income: 142000,
      loan_amount: 525000,
      property_value: 680000,
      property_address: "248 Marina Blvd, San Francisco, CA 94123",
      monthly_debt: 1850,
      down_payment: 155000,
      loan_purpose: "Primary Residence Purchase",
      extraction_confidence: 0.96,
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
        { factor: "Credit utilization 38%", impact: "Negative", detail: "Above recommended 30% threshold." },
      ],
      reasoning: "Applicant presents a solid borrower profile with strong income stability and meaningful equity. Credit utilization is the primary watch-item but does not materially affect approval probability.",
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
        { rule: "HMDA Data Completeness", regulation: "12 CFR § 1003.4", status: "Advisory", citation: "Reg C §1003.4(a)", finding: "Ethnicity field collected via observation — confirm at closing." },
      ],
    },
    decision: {
      outcome: "CONDITIONAL_APPROVE",
      confidence: 0.89,
      human_review_required: false,
      conditions: [
        "Verify employment within 10 business days of closing.",
        "Provide updated bank statement covering most recent 30 days.",
        "Confirm homeowner's insurance binder with $680,000 coverage.",
      ],
      rationale: "Borrower meets all primary underwriting criteria with margin. Risk score and compliance posture support a conditional approval pending standard pre-closing verifications.",
    },
    comms: {
      email: {
        subject: "Wavyloan: Your mortgage application has been conditionally approved",
        body: "Dear Alex,\n\nGreat news — your mortgage application (WL-2024-001) has been conditionally approved for $525,000 at our current published rate. A few standard verifications remain before we can issue final clear-to-close.\n\nYour loan officer will reach out within one business day to walk through the conditions and next steps.\n\nThank you for choosing Wavyloan.\n\nThe Wavyloan Team",
      },
      sms: "Wavyloan: Your loan application WL-2024-001 has been conditionally approved! Check your email for details and next steps.",
      voice_script: "Hi Alex, this is your Wavyloan update. Your mortgage application has been conditionally approved. Please review the email we just sent for the remaining verification steps. We're excited to help you close on your new home.",
      push: "Wavyloan: Conditional approval issued for your mortgage. Tap to view conditions.",
    },
    audit_log: [
      { timestamp: "2026-05-24T14:02:11Z", agent: "Intake", action: "Extracted 5 documents via GPT-4o Vision (confidence 0.96)" },
      { timestamp: "2026-05-24T14:02:18Z", agent: "Risk", action: "Computed risk score 78 (Medium-Low) via o4-mini" },
      { timestamp: "2026-05-24T14:02:24Z", agent: "Compliance", action: "Ran 5 regulatory checks via File Search RAG — 4 pass, 1 advisory" },
      { timestamp: "2026-05-24T14:02:31Z", agent: "Underwriting", action: "Issued CONDITIONAL_APPROVE with 3 conditions (confidence 0.89)" },
      { timestamp: "2026-05-24T14:02:37Z", agent: "Communications", action: "Generated email/SMS/voice/push messages and TTS audio" },
    ],
  },
  "WL-2024-002": {
    profile: {
      applicant_id: "WL-2024-002",
      full_name: "Jordan Blake",
      employer: "Independent Contractor",
      annual_income: 78000,
      loan_amount: 480000,
      property_value: 510000,
      property_address: "12 Elm Street, Austin, TX 78701",
      monthly_debt: 2950,
      down_payment: 30000,
      loan_purpose: "Primary Residence Purchase",
      extraction_confidence: 0.82,
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
        { factor: "No prior mortgage delinquencies", impact: "Positive", detail: "Clean housing payment history." },
      ],
      reasoning: "Multiple high-risk indicators including elevated DTI, thin equity, and non-W-2 income. Standard underwriting would not support approval without significant compensating factors.",
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
        { rule: "HMDA Data Completeness", regulation: "12 CFR § 1003.4", status: "Pass", citation: "Reg C §1003.4(a)", finding: "All required fields captured." },
      ],
    },
    decision: {
      outcome: "DENY",
      confidence: 0.91,
      human_review_required: false,
      conditions: [],
      rationale: "Application does not meet ability-to-repay standards. DTI of 52% materially exceeds 43% QM threshold and combined with 94% LTV produces unacceptable default probability under current credit policy.",
    },
    comms: {
      email: {
        subject: "Wavyloan: Update on your mortgage application",
        body: "Dear Jordan,\n\nThank you for applying with Wavyloan. After careful review, we are unable to approve your application at this time. A formal adverse action notice with specific reasons will arrive within 30 days as required by the Equal Credit Opportunity Act.\n\nWe encourage you to reach out to a Wavyloan advisor to discuss options that may strengthen a future application.\n\nThe Wavyloan Team",
      },
      sms: "Wavyloan: We're unable to approve application WL-2024-002 at this time. Your formal notice will arrive within 30 days.",
      voice_script: "Hi Jordan, this is your Wavyloan update. We were unable to approve your mortgage application at this time. You'll receive a written notice within 30 days. We encourage you to contact a Wavyloan advisor to discuss next steps.",
      push: "Wavyloan: Application status updated. Tap to view details.",
    },
    audit_log: [
      { timestamp: "2026-05-24T14:05:02Z", agent: "Intake", action: "Extracted 5 documents via GPT-4o Vision (confidence 0.82)" },
      { timestamp: "2026-05-24T14:05:09Z", agent: "Risk", action: "Computed risk score 28 (High) via o4-mini" },
      { timestamp: "2026-05-24T14:05:15Z", agent: "Compliance", action: "Ran 5 regulatory checks — 3 pass, 2 advisory" },
      { timestamp: "2026-05-24T14:05:22Z", agent: "Underwriting", action: "Issued DENY (confidence 0.91)" },
      { timestamp: "2026-05-24T14:05:28Z", agent: "Communications", action: "Generated adverse-action-compliant messaging" },
    ],
  },
  "WL-2024-003": {
    profile: {
      applicant_id: "WL-2024-003",
      full_name: "Sam Patel",
      employer: "Northwind Capital Partners",
      annual_income: 285000,
      loan_amount: 720000,
      property_value: 1150000,
      property_address: "501 Highland Ave, Seattle, WA 98109",
      monthly_debt: 1200,
      down_payment: 430000,
      loan_purpose: "Primary Residence Purchase",
      extraction_confidence: 0.98,
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
        { factor: "Liquid reserves > 24 months PITI", impact: "Positive", detail: "Strong post-close liquidity." },
      ],
      reasoning: "Exemplary borrower profile across every dimension. Recommend best-tier pricing.",
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
        { rule: "HMDA Data Completeness", regulation: "12 CFR § 1003.4", status: "Pass", citation: "Reg C §1003.4(a)", finding: "All fields complete." },
      ],
    },
    decision: {
      outcome: "CONDITIONAL_APPROVE",
      confidence: 0.97,
      human_review_required: false,
      conditions: [
        "Standard pre-closing employment re-verification.",
        "Confirm homeowner's insurance binder.",
      ],
      rationale: "Best-tier borrower with overwhelming compensating factors. Recommend prime pricing tier.",
    },
    comms: {
      email: {
        subject: "Wavyloan: Your mortgage is approved at our prime tier",
        body: "Dear Sam,\n\nCongratulations — your mortgage application (WL-2024-003) has been conditionally approved at our prime pricing tier for $720,000. Final clear-to-close is pending only standard pre-closing verifications.\n\nYour loan officer will be in touch within one business day.\n\nThe Wavyloan Team",
      },
      sms: "Wavyloan: Application WL-2024-003 approved at prime tier! Loan officer will contact you within 1 business day.",
      voice_script: "Hi Sam, fantastic news from Wavyloan. Your mortgage application has been approved at our prime pricing tier. Your loan officer will reach out within one business day. Congratulations on your new home.",
      push: "Wavyloan: Prime-tier approval issued. Tap to view.",
    },
    audit_log: [
      { timestamp: "2026-05-24T14:08:44Z", agent: "Intake", action: "Extracted 5 documents via GPT-4o Vision (confidence 0.98)" },
      { timestamp: "2026-05-24T14:08:51Z", agent: "Risk", action: "Computed risk score 92 (Low) via o4-mini" },
      { timestamp: "2026-05-24T14:08:57Z", agent: "Compliance", action: "Ran 5 regulatory checks — all pass" },
      { timestamp: "2026-05-24T14:09:04Z", agent: "Underwriting", action: "Issued CONDITIONAL_APPROVE at prime tier (confidence 0.97)" },
      { timestamp: "2026-05-24T14:09:10Z", agent: "Communications", action: "Generated approval messaging and TTS audio" },
    ],
  },
};

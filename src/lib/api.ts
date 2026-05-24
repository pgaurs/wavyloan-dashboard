import { API_BASE, MOCK_RESULTS } from "@/config";

export type Impact = "Positive" | "Negative" | "Neutral";
export type ComplianceStatus = "Pass" | "Fail" | "Advisory" | "N/A";
export type OverallStatus = "PASS" | "FAIL" | "ADVISORY";
export type Outcome = "CONDITIONAL_APPROVE" | "DENY" | "REFER";

export interface Profile {
  applicant_id: string;
  full_name: string;
  employer: string;
  gross_annual_income: number;
  loan_amount_requested: number;
  property_value: number;
  property_address: string;
  monthly_debt_payments: number;
  down_payment: number;
  loan_purpose: string;
  extraction_confidence: number;
}

export interface RiskDriver {
  factor: string;
  impact: Impact;
  detail: string;
}

export interface Assessment {
  risk_score: number;
  risk_tier: string;
  fico: number;
  dti: number;
  ltv: number;
  drivers: RiskDriver[];
  reasoning: string;
}

export interface ComplianceCheck {
  rule: string;
  regulation: string;
  status: ComplianceStatus;
  citation: string;
  finding: string;
}

export interface ComplianceReport {
  overall_status: OverallStatus;
  fair_lending_flag: boolean;
  summary: { total: number; pass: number; fail: number; advisory: number };
  checks: ComplianceCheck[];
}

export interface Decision {
  outcome: Outcome;
  confidence: number;
  human_review_required: boolean;
  conditions: string[];
  rationale: string;
}

export interface Comms {
  email: { subject: string; body: string };
  sms: string;
  voice_script: string;
  push: string;
}

export interface AuditEvent {
  timestamp: string;
  agent: string;
  action: string;
}

export interface PipelineResult {
  profile: Profile;
  assessment: Assessment;
  compliance_report: ComplianceReport;
  decision: Decision;
  comms: Comms;
  audit_log: AuditEvent[];
}

export async function processApplication(applicantId: string): Promise<PipelineResult> {
  const res = await fetch(`${API_BASE}/api/process-application`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ applicant_id: applicantId }),
  });
  if (!res.ok) throw new Error(`Backend returned ${res.status}`);
  const json = await res.json();
  // Tolerate common wrappers: { data: {...} }, { result: {...} }, { pipeline: {...} }
  const payload = (json?.profile ? json : json?.data ?? json?.result ?? json?.pipeline ?? json) as PipelineResult;
  // eslint-disable-next-line no-console
  console.log("[processApplication] response keys:", Object.keys(json ?? {}), "→ payload keys:", Object.keys(payload ?? {}));
  return payload;
}

export function getMockResult(applicantId: string): PipelineResult {
  const r = MOCK_RESULTS[applicantId];
  if (!r) throw new Error(`No mock data for ${applicantId}`);
  return r;
}

export function voiceUrl(applicantId: string): string {
  return `${API_BASE}/api/voice/${applicantId}`;
}

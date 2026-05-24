import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  FileText, BarChart3, Scale, Landmark, Mail, ScrollText,
  CheckCircle2, XCircle, Clock, AlertTriangle, Loader2, Play, Square,
  TrendingUp, TrendingDown, Minus, Download, ChevronDown, MessageSquare,
  Mic, Smartphone, Bell, ShieldAlert, Sparkles,
} from "lucide-react";
import { APPLICANTS, API_BASE } from "@/config";
import {
  processApplication, getMockResult, voiceUrl,
  type PipelineResult, type Impact, type ComplianceStatus, type Outcome,
} from "@/lib/api";
import { currency, datetime, percent } from "@/lib/format";

export const Route = createFileRoute("/")({ component: WavyloanApp });

type StepStatus = "idle" | "running" | "complete" | "error";
const STEPS = [
  { key: "intake", label: "Document Intake", model: "GPT-4o Vision", Icon: FileText },
  { key: "risk", label: "Risk Assessment", model: "o4-mini", Icon: BarChart3 },
  { key: "compliance", label: "Compliance Check", model: "RAG + Web Search", Icon: Scale },
  { key: "underwriting", label: "Underwriting Decision", model: "o4-mini", Icon: Landmark },
  { key: "comms", label: "Communications", model: "GPT-4o + TTS", Icon: Mail },
] as const;

const TABS = [
  { id: "intake", label: "Intake & Documents", Icon: FileText },
  { id: "risk", label: "Risk Assessment", Icon: BarChart3 },
  { id: "compliance", label: "Compliance", Icon: Scale },
  { id: "decision", label: "Underwriting Decision", Icon: Landmark },
  { id: "comms", label: "Communications", Icon: Mail },
  { id: "audit", label: "Audit Log", Icon: ScrollText },
] as const;
type TabId = (typeof TABS)[number]["id"];

const RUN_MESSAGES: Record<string, string> = {
  intake: "GPT-4o Vision is reading your documents...",
  risk: "o4-mini is calculating the risk score...",
  compliance: "Searching regulatory corpus via File Search RAG...",
  underwriting: "o4-mini is reasoning over the underwriting decision...",
  comms: "Generating multi-channel communications with TTS...",
};

function WavyloanApp() {
  const [applicantId, setApplicantId] = useState(APPLICANTS[0].id);
  const [tab, setTab] = useState<TabId>("intake");
  const [result, setResult] = useState<PipelineResult | null>(null);
  const [running, setRunning] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [stepStatus, setStepStatus] = useState<Record<string, StepStatus>>({});

  const reset = () => {
    setResult(null);
    setError(null);
    setStepStatus({});
  };

  useEffect(() => { reset(); }, [applicantId]);

  const run = useCallback(async (useMock = false) => {
    setRunning(true);
    setError(null);
    setResult(null);
    const init: Record<string, StepStatus> = {};
    STEPS.forEach(s => { init[s.key] = "idle"; });
    setStepStatus(init);

    // staged visual animation
    const stepDelay = 850;
    const animate = async () => {
      for (const s of STEPS) {
        setStepStatus(prev => ({ ...prev, [s.key]: "running" }));
        await new Promise(r => setTimeout(r, stepDelay));
        setStepStatus(prev => ({ ...prev, [s.key]: "complete" }));
      }
    };

    try {
      const [data] = await Promise.all([
        useMock
          ? new Promise<PipelineResult>(r => setTimeout(() => r(getMockResult(applicantId)), 100))
          : processApplication(applicantId).catch(() => getMockResult(applicantId)),
        animate(),
      ]);
      setResult(data);
      setRunning(false);
    } catch (e) {
      const msg = e instanceof Error ? e.message : "Pipeline failed";
      setError(msg);
      setStepStatus(prev => {
        const next = { ...prev };
        Object.keys(next).forEach(k => { if (next[k] === "running") next[k] = "error"; });
        return next;
      });
      setRunning(false);
    }
  }, [applicantId]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <TopNav />
      <div className="flex pt-[60px]">
        <Sidebar
          applicantId={applicantId}
          setApplicantId={setApplicantId}
          onRun={() => run()}
          running={running}
          stepStatus={stepStatus}
        />
        <main className="flex-1 ml-[260px] p-8 max-w-[1400px]">
          <TabBar tab={tab} setTab={setTab} />
          <div className="wl-fade-in" key={tab + (result ? "r" : "e")}>
            {error && (
              <div className="rounded-xl border border-destructive/30 bg-danger-soft p-6 mb-6">
                <div className="flex items-start gap-3">
                  <ShieldAlert className="text-destructive shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <h3 className="font-semibold text-danger-soft-foreground">Pipeline error</h3>
                    <p className="text-sm text-danger-soft-foreground/80 mt-1">{error}</p>
                    <div className="mt-3 flex gap-2">
                      <button onClick={() => run()} className="rounded-md bg-destructive text-destructive-foreground px-3 py-1.5 text-sm font-medium">Retry</button>
                      <button onClick={() => run(true)} className="rounded-md border border-border bg-card px-3 py-1.5 text-sm font-medium">Load demo data</button>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {tab === "intake" && <IntakeTab result={result} />}
            {tab === "risk" && <RiskTab result={result} />}
            {tab === "compliance" && <ComplianceTab result={result} />}
            {tab === "decision" && <DecisionTab result={result} />}
            {tab === "comms" && <CommsTab result={result} applicantId={applicantId} />}
            {tab === "audit" && <AuditTab result={result} />}
          </div>
        </main>
      </div>
      {running && <RunOverlay stepStatus={stepStatus} />}
    </div>
  );
}

/* ============ TOP-LEVEL CHROME ============ */

function DisclaimerBanner() {
  return (
    <div className="fixed top-0 inset-x-0 z-50 bg-gradient-to-r from-destructive via-red-600 to-destructive text-destructive-foreground text-center text-xs font-semibold tracking-wide py-1.5 shadow-md">
      <AlertTriangle className="inline-block w-3.5 h-3.5 -mt-0.5 mr-1.5" />
      DEMO SYSTEM — SYNTHETIC DATA ONLY — NO REAL PII — NOT FOR PRODUCTION USE
    </div>
  );
}

function TopNav() {
  return (
    <header className="fixed top-0 inset-x-0 z-40 h-[60px] bg-sidebar text-sidebar-foreground border-b border-sidebar-border overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="wl-wave h-full w-[200%]" style={{
          background: "linear-gradient(90deg, transparent, oklch(0.55 0.18 142 / 0.4) 25%, transparent 50%, oklch(0.49 0.08 220 / 0.4) 75%, transparent)",
        }} />
      </div>
      <div className="relative flex items-center justify-between h-full px-6">
        <div className="flex items-center gap-3">
          <span className="text-2xl">🌊</span>
          <div>
            <div className="font-bold text-lg tracking-tight">Wavyloan</div>
            <div className="text-[11px] text-sidebar-foreground/60 -mt-0.5">Deloitte OpenAI Technology Practice</div>
          </div>
        </div>
        <div className="flex items-center gap-2 text-[11px] text-sidebar-foreground/60">
          <Sparkles className="w-3.5 h-3.5" />
          <span>API: <code className="font-mono text-sidebar-foreground/80">{API_BASE}</code></span>
        </div>
      </div>
    </header>
  );
}

function Sidebar({ applicantId, setApplicantId, onRun, running, stepStatus }: {
  applicantId: string;
  setApplicantId: (id: string) => void;
  onRun: () => void;
  running: boolean;
  stepStatus: Record<string, StepStatus>;
}) {
  return (
    <aside className="fixed left-0 top-[88px] bottom-0 w-[260px] bg-sidebar text-sidebar-foreground border-r border-sidebar-border flex flex-col p-4 gap-4 overflow-y-auto">
      <div>
        <label className="text-[10px] uppercase tracking-wider text-sidebar-foreground/50 font-semibold">Applicant</label>
        <select
          value={applicantId}
          onChange={e => setApplicantId(e.target.value)}
          disabled={running}
          className="mt-1.5 w-full rounded-md bg-sidebar-accent text-sidebar-accent-foreground border border-sidebar-border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sidebar-ring"
        >
          {APPLICANTS.map(a => (
            <option key={a.id} value={a.id}>{a.name} — {a.id} ({a.risk})</option>
          ))}
        </select>
      </div>

      <button
        onClick={onRun}
        disabled={running}
        onKeyDown={e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onRun(); } }}
        className="w-full rounded-md bg-sidebar-primary text-sidebar-primary-foreground font-semibold py-3 text-sm shadow-lg shadow-sidebar-primary/20 hover:brightness-110 transition disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {running ? <><Loader2 className="w-4 h-4 animate-spin" /> Processing...</> : <><Sparkles className="w-4 h-4" /> Process Application</>}
      </button>

      <div className="mt-2">
        <div className="text-[10px] uppercase tracking-wider text-sidebar-foreground/50 font-semibold mb-2">Pipeline</div>
        <ol className="space-y-1.5">
          {STEPS.map((s, i) => {
            const status = stepStatus[s.key] ?? "idle";
            return (
              <li key={s.key} className="flex items-start gap-2.5 rounded-md px-2 py-2 bg-sidebar-accent/40 border border-sidebar-border/50">
                <div className="mt-0.5 flex items-center justify-center w-5 h-5 rounded-full text-[10px] font-semibold shrink-0"
                  style={{
                    background: status === "complete" ? "oklch(0.55 0.18 142)" :
                      status === "error" ? "oklch(0.55 0.22 27)" :
                      status === "running" ? "oklch(0.55 0.18 142)" : "oklch(0.3 0.03 200)",
                    color: "white",
                  }}>
                  {status === "complete" ? "✓" : status === "error" ? "!" : status === "running" ? <span className="block w-2 h-2 rounded-full bg-white wl-pulse-dot" /> : i + 1}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    <s.Icon className="w-3 h-3 text-sidebar-foreground/60 shrink-0" />
                    <div className="text-[12px] font-medium truncate">{s.label}</div>
                  </div>
                  <div className="text-[10px] text-sidebar-foreground/50 font-mono">{s.model}</div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>

      <div className="mt-auto">
        <div className="text-[10px] uppercase tracking-wider text-sidebar-foreground/50 font-semibold mb-2">OpenAI Stack</div>
        <div className="flex flex-wrap gap-1">
          {["GPT-4o Vision", "o4-mini", "File Search RAG", "TTS", "Moderation"].map(p => (
            <span key={p} className="text-[10px] rounded-full px-2 py-0.5 bg-sidebar-accent text-sidebar-foreground/80 border border-sidebar-border">{p}</span>
          ))}
        </div>
        <div className="mt-3 pt-3 border-t border-sidebar-border flex items-center gap-2 text-[11px] text-sidebar-foreground/60">
          <div className="w-1.5 h-1.5 rounded-full bg-sidebar-primary wl-pulse-dot" />
          Powered by OpenAI
        </div>
      </div>
    </aside>
  );
}

function TabBar({ tab, setTab }: { tab: TabId; setTab: (t: TabId) => void }) {
  return (
    <div className="flex gap-1 border-b border-border mb-6 overflow-x-auto">
      {TABS.map(t => {
        const active = tab === t.id;
        return (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`relative flex items-center gap-2 px-4 py-3 text-sm font-medium whitespace-nowrap transition ${active ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}
          >
            <t.Icon className="w-4 h-4" />
            {t.label}
            {active && <span className="absolute bottom-0 inset-x-2 h-0.5 bg-primary rounded-full" />}
          </button>
        );
      })}
    </div>
  );
}

function RunOverlay({ stepStatus }: { stepStatus: Record<string, StepStatus> }) {
  const current = STEPS.find(s => stepStatus[s.key] === "running");
  return (
    <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-card border border-border rounded-2xl shadow-2xl p-8 max-w-md w-full">
        <div className="flex items-center gap-3 mb-6">
          <Loader2 className="w-6 h-6 animate-spin text-primary" />
          <div>
            <h3 className="font-semibold text-lg">Processing application</h3>
            <p className="text-sm text-muted-foreground">{current ? RUN_MESSAGES[current.key] : "Initializing agents..."}</p>
          </div>
        </div>
        <ol className="space-y-3">
          {STEPS.map(s => {
            const status = stepStatus[s.key] ?? "idle";
            return (
              <li key={s.key} className={`flex items-center gap-3 p-3 rounded-lg border transition ${
                status === "complete" ? "bg-success-soft border-success-soft-foreground/20" :
                status === "running" ? "bg-accent border-primary/40" :
                status === "error" ? "bg-danger-soft border-destructive/30" :
                "bg-muted border-border opacity-60"
              }`}>
                <s.Icon className="w-5 h-5 shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium">{s.label}</div>
                  <div className="text-[11px] font-mono text-muted-foreground">{s.model}</div>
                </div>
                {status === "complete" && <CheckCircle2 className="w-5 h-5 text-primary" />}
                {status === "running" && <Loader2 className="w-5 h-5 animate-spin text-primary" />}
                {status === "error" && <XCircle className="w-5 h-5 text-destructive" />}
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}

/* ============ EMPTY STATE ============ */

function EmptyState({ Icon, title }: { Icon: React.ComponentType<{ className?: string }>; title: string }) {
  return (
    <div className="rounded-2xl border border-dashed border-border bg-muted/40 p-16 text-center">
      <Icon className="w-12 h-12 mx-auto text-muted-foreground/60 mb-4" />
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      <p className="text-sm text-muted-foreground mt-1">Run the pipeline to see results.</p>
    </div>
  );
}

/* ============ TAB: INTAKE ============ */

function IntakeTab({ result }: { result: PipelineResult | null }) {
  const [showJson, setShowJson] = useState(false);
  const docs = [
    "Loan Application", "Pay Stub", "Tax Return", "Bank Statement", "Property Appraisal",
  ];
  return (
    <div className="space-y-6">
      <Card title="Document Checklist" subtitle="Synthetic documents pre-loaded for demo">
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {docs.map(d => (
            <li key={d} className="flex items-center gap-2 rounded-md border border-border bg-card px-3 py-2 text-sm">
              <CheckCircle2 className="w-4 h-4 text-primary" /> {d}
            </li>
          ))}
        </ul>
      </Card>

      {!result ? <EmptyState Icon={FileText} title="Document Intake" /> : (
        <>
          <Card title="Extracted Applicant Profile" subtitle={`Applicant ${result.profile.applicant_id}`} right={
            <ConfidenceBadge value={result.profile.extraction_confidence} />
          }>
            <div className="grid grid-cols-2 gap-x-8 gap-y-4">
              <DataField label="Full Name" value={result.profile.full_name} />
              <DataField label="Employer" value={result.profile.employer} />
              <DataField label="Annual Income" value={currency(result.profile.annual_income)} />
              <DataField label="Loan Amount" value={currency(result.profile.loan_amount)} />
              <DataField label="Property Value" value={currency(result.profile.property_value)} />
              <DataField label="Monthly Debt" value={currency(result.profile.monthly_debt)} />
              <DataField label="Down Payment" value={currency(result.profile.down_payment)} />
              <DataField label="Loan Purpose" value={result.profile.loan_purpose} />
              <DataField label="Property Address" value={result.profile.property_address} className="col-span-2" />
            </div>
            <div className="mt-6">
              <div className="text-xs text-muted-foreground mb-1.5 flex justify-between">
                <span>Extraction Confidence</span>
                <span className="font-mono">{percent(result.profile.extraction_confidence, 1)}</span>
              </div>
              <div className="h-2 rounded-full bg-muted overflow-hidden">
                <div className="h-full bg-primary transition-all" style={{ width: `${result.profile.extraction_confidence * 100}%` }} />
              </div>
            </div>
          </Card>
          <div>
            <button onClick={() => setShowJson(s => !s)} className="flex items-center gap-1.5 text-sm text-secondary font-medium hover:underline">
              <ChevronDown className={`w-4 h-4 transition ${showJson ? "rotate-180" : ""}`} />
              {showJson ? "Hide" : "View"} Raw JSON
            </button>
            {showJson && (
              <pre className="mt-3 rounded-lg bg-sidebar text-sidebar-foreground p-4 text-xs font-mono overflow-x-auto border border-sidebar-border">
                {JSON.stringify(result.profile, null, 2)}
              </pre>
            )}
          </div>
        </>
      )}
    </div>
  );
}

function DataField({ label, value, className = "" }: { label: string; value: string; className?: string }) {
  return (
    <div className={className}>
      <div className="text-[11px] uppercase tracking-wider text-muted-foreground font-semibold">{label}</div>
      <div className="text-base font-medium text-foreground mt-0.5">{value}</div>
    </div>
  );
}

function ConfidenceBadge({ value }: { value: number }) {
  const tier = value > 0.9 ? "high" : value > 0.7 ? "med" : "low";
  const cls = tier === "high" ? "bg-success-soft text-success-soft-foreground" :
    tier === "med" ? "bg-warning-soft text-warning-soft-foreground" :
    "bg-danger-soft text-danger-soft-foreground";
  return <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${cls}`}>{percent(value, 0)} confidence</span>;
}

/* ============ TAB: RISK ============ */

function RiskTab({ result }: { result: PipelineResult | null }) {
  if (!result) return <EmptyState Icon={BarChart3} title="Risk Assessment" />;
  const a = result.assessment;
  return (
    <div className="space-y-6">
      <Card title="Risk Score" subtitle={`Computed by o4-mini reasoning`}>
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <RiskGauge score={a.risk_score} />
          <div className="flex-1 space-y-4 w-full">
            <RiskTierBadge tier={a.risk_tier} score={a.risk_score} />
            <div className="grid grid-cols-3 gap-3">
              <Metric label="FICO Score" value={a.fico.toString()} />
              <Metric label="DTI Ratio" value={percent(a.dti, 0)} />
              <Metric label="LTV Ratio" value={percent(a.ltv, 0)} />
            </div>
          </div>
        </div>
      </Card>

      <Card title="Key Risk Drivers">
        <div className="grid md:grid-cols-2 gap-3">
          {a.drivers.map((d, i) => <DriverCard key={i} driver={d} />)}
        </div>
      </Card>

      <Card title="Reasoning Summary">
        <blockquote className="border-l-4 border-secondary bg-muted/50 p-4 rounded-r-md text-sm text-foreground/90 italic">
          {a.reasoning}
        </blockquote>
      </Card>
    </div>
  );
}

function RiskGauge({ score }: { score: number }) {
  const [animated, setAnimated] = useState(0);
  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const dur = 1200;
    const step = (now: number) => {
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
  const dash = (animated / 100) * c;
  const color = score >= 65 ? "oklch(0.55 0.18 142)" : score >= 35 ? "oklch(0.65 0.18 80)" : "oklch(0.55 0.22 27)";
  return (
    <div className="relative w-48 h-48 shrink-0">
      <svg viewBox="0 0 200 200" className="-rotate-90">
        <circle cx="100" cy="100" r={r} fill="none" stroke="oklch(0.92 0.01 200)" strokeWidth="14" />
        <circle cx="100" cy="100" r={r} fill="none" stroke={color} strokeWidth="14"
          strokeDasharray={`${dash} ${c}`} strokeLinecap="round" style={{ transition: "stroke 0.4s" }} />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="text-5xl font-bold tabular-nums" style={{ color }}>{animated}</div>
        <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mt-1">Risk Score</div>
      </div>
    </div>
  );
}

function RiskTierBadge({ tier, score }: { tier: string; score: number }) {
  const cls = score >= 65 ? "bg-success-soft text-success-soft-foreground border-success-soft-foreground/30" :
    score >= 35 ? "bg-warning-soft text-warning-soft-foreground border-warning-soft-foreground/30" :
    "bg-danger-soft text-danger-soft-foreground border-danger-soft-foreground/30";
  return (
    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border font-semibold ${cls}`}>
      <span className="w-2 h-2 rounded-full bg-current" />
      Risk Tier: {tier}
    </div>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-border bg-card p-4">
      <div className="text-[11px] uppercase tracking-wider text-muted-foreground font-semibold">{label}</div>
      <div className="text-2xl font-bold mt-1 tabular-nums">{value}</div>
    </div>
  );
}

function DriverCard({ driver }: { driver: { factor: string; impact: Impact; detail: string } }) {
  const map = {
    Positive: { Icon: TrendingUp, color: "text-success-soft-foreground", bg: "bg-success-soft" },
    Negative: { Icon: TrendingDown, color: "text-danger-soft-foreground", bg: "bg-danger-soft" },
    Neutral: { Icon: Minus, color: "text-muted-foreground", bg: "bg-muted" },
  }[driver.impact];
  return (
    <div className="rounded-lg border border-border bg-card p-4 flex gap-3">
      <div className={`w-8 h-8 rounded-md ${map.bg} ${map.color} flex items-center justify-center shrink-0`}>
        <map.Icon className="w-4 h-4" />
      </div>
      <div className="min-w-0">
        <div className="font-medium text-sm">{driver.factor}</div>
        <div className="text-xs text-muted-foreground mt-1">{driver.detail}</div>
      </div>
    </div>
  );
}

/* ============ TAB: COMPLIANCE ============ */

function ComplianceTab({ result }: { result: PipelineResult | null }) {
  const [open, setOpen] = useState<number | null>(0);
  if (!result) return <EmptyState Icon={Scale} title="Compliance Check" />;
  const r = result.compliance_report;
  const banner = r.overall_status === "PASS" ? { cls: "bg-success-soft text-success-soft-foreground", Icon: CheckCircle2, label: "PASS" } :
    r.overall_status === "FAIL" ? { cls: "bg-danger-soft text-danger-soft-foreground", Icon: XCircle, label: "FAIL" } :
    { cls: "bg-warning-soft text-warning-soft-foreground", Icon: AlertTriangle, label: "ADVISORY" };
  return (
    <div className="space-y-6">
      <div className={`rounded-2xl p-6 ${banner.cls} flex items-center gap-4`}>
        <banner.Icon className="w-10 h-10" />
        <div>
          <div className="text-xs uppercase tracking-wider font-semibold opacity-70">Overall Compliance Status</div>
          <div className="text-3xl font-bold">{banner.label}</div>
        </div>
        <div className="ml-auto text-sm font-medium opacity-80">
          {r.summary.total} checks · {r.summary.pass} Pass · {r.summary.fail} Fail · {r.summary.advisory} Advisory
        </div>
      </div>

      {r.fair_lending_flag && (
        <div className="rounded-xl border-2 border-destructive bg-danger-soft p-4 flex items-start gap-3">
          <ShieldAlert className="text-destructive w-6 h-6 shrink-0" />
          <div>
            <div className="font-bold text-danger-soft-foreground">Fair Lending Flag Raised</div>
            <div className="text-sm text-danger-soft-foreground/80">This application requires immediate review by the Fair Lending Compliance Officer.</div>
          </div>
        </div>
      )}

      <div className="space-y-2">
        {r.checks.map((c, i) => <ComplianceItem key={i} check={c} open={open === i} onToggle={() => setOpen(open === i ? null : i)} />)}
      </div>
    </div>
  );
}

function ComplianceItem({ check, open, onToggle }: { check: { rule: string; regulation: string; status: ComplianceStatus; citation: string; finding: string }; open: boolean; onToggle: () => void }) {
  const cls = check.status === "Pass" ? "bg-success-soft text-success-soft-foreground" :
    check.status === "Fail" ? "bg-danger-soft text-danger-soft-foreground" :
    check.status === "Advisory" ? "bg-warning-soft text-warning-soft-foreground" :
    "bg-muted text-muted-foreground";
  return (
    <div className="rounded-xl border border-border bg-card overflow-hidden">
      <button onClick={onToggle} className="w-full flex items-center gap-4 p-4 text-left hover:bg-muted/30">
        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${cls} shrink-0 w-24 text-center`}>{check.status}</span>
        <div className="flex-1 min-w-0">
          <div className="font-medium text-sm">{check.rule}</div>
          <div className="text-xs text-muted-foreground font-mono mt-0.5">{check.regulation}</div>
        </div>
        <ChevronDown className={`w-4 h-4 text-muted-foreground transition ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="border-t border-border p-4 bg-muted/20 space-y-2 wl-fade-in">
          <div className="flex items-center gap-2 text-xs">
            <span className="text-muted-foreground uppercase tracking-wider font-semibold">Citation:</span>
            <code className="font-mono bg-card border border-border px-2 py-0.5 rounded text-foreground">{check.citation}</code>
          </div>
          <p className="text-sm text-foreground/90">{check.finding}</p>
        </div>
      )}
    </div>
  );
}

/* ============ TAB: DECISION ============ */

function DecisionTab({ result }: { result: PipelineResult | null }) {
  if (!result) return <EmptyState Icon={Landmark} title="Underwriting Decision" />;
  const d = result.decision;
  return (
    <div className="space-y-6">
      <DecisionBanner outcome={d.outcome} />
      {d.conditions.length > 0 && (
        <Card title="Conditions of Approval">
          <ol className="space-y-2">
            {d.conditions.map((c, i) => (
              <li key={i} className="flex items-start gap-3 p-3 rounded-lg border border-border bg-card">
                <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground font-semibold text-xs flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
                <span className="text-sm">{c}</span>
              </li>
            ))}
          </ol>
        </Card>
      )}
      <Card title="Decision Rationale">
        <p className="text-sm leading-relaxed text-foreground/90">{d.rationale}</p>
      </Card>
      <div className="grid md:grid-cols-2 gap-4">
        <Card title="Confidence">
          <div className="text-3xl font-bold tabular-nums">{percent(d.confidence, 0)}</div>
          <div className="h-2 mt-3 rounded-full bg-muted overflow-hidden">
            <div className="h-full bg-primary" style={{ width: `${d.confidence * 100}%` }} />
          </div>
        </Card>
        <Card title="Human Review Required">
          <div className="flex items-center gap-3">
            {d.human_review_required
              ? <><AlertTriangle className="w-7 h-7 text-warning-soft-foreground" /><span className="text-2xl font-bold">Yes</span></>
              : <><CheckCircle2 className="w-7 h-7 text-primary" /><span className="text-2xl font-bold">No</span></>
            }
          </div>
        </Card>
      </div>
      {d.human_review_required && (
        <div className="rounded-xl border border-warning-soft-foreground/30 bg-warning-soft p-4 flex items-start gap-3">
          <Clock className="w-5 h-5 text-warning-soft-foreground shrink-0 mt-0.5" />
          <div className="text-sm text-warning-soft-foreground">
            ⏳ This application has been escalated to a loan officer for manual review. Borrower will not be notified until review is complete.
          </div>
        </div>
      )}
    </div>
  );
}

function DecisionBanner({ outcome }: { outcome: Outcome }) {
  const map = {
    CONDITIONAL_APPROVE: { Icon: CheckCircle2, label: "Conditional Approve", cls: "bg-gradient-to-br from-primary to-primary/80 text-primary-foreground" },
    DENY: { Icon: XCircle, label: "Deny", cls: "bg-gradient-to-br from-destructive to-red-700 text-destructive-foreground" },
    REFER: { Icon: Clock, label: "Refer to Human Reviewer", cls: "bg-gradient-to-br from-amber-500 to-amber-600 text-white" },
  }[outcome];
  return (
    <div className={`rounded-2xl ${map.cls} p-10 shadow-xl flex items-center gap-6 wl-fade-in`}>
      <map.Icon className="w-20 h-20 shrink-0" strokeWidth={1.5} />
      <div>
        <div className="text-sm uppercase tracking-widest opacity-80 font-semibold">Underwriting Decision</div>
        <div className="text-5xl font-bold mt-1 tracking-tight">{map.label}</div>
      </div>
    </div>
  );
}

/* ============ TAB: COMMS ============ */

function CommsTab({ result, applicantId }: { result: PipelineResult | null; applicantId: string }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  const togglePlay = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio(voiceUrl(applicantId));
      audioRef.current.addEventListener("ended", () => setPlaying(false));
      audioRef.current.addEventListener("error", () => { setPlaying(false); audioRef.current = null; });
    }
    if (playing) { audioRef.current.pause(); setPlaying(false); }
    else { audioRef.current.play().catch(() => setPlaying(false)); setPlaying(true); }
  };

  useEffect(() => { audioRef.current?.pause(); audioRef.current = null; setPlaying(false); }, [applicantId]);

  if (!result) return <EmptyState Icon={Mail} title="Communications" />;
  const c = result.comms;
  return (
    <div className="space-y-6">
      <div className="grid lg:grid-cols-3 gap-4">
        {/* Email */}
        <Card title="Email" right={<Mail className="w-4 h-4 text-muted-foreground" />}>
          <div className="rounded-md border border-border bg-card overflow-hidden">
            <div className="bg-muted/50 border-b border-border px-3 py-2 text-xs space-y-1">
              <div><span className="text-muted-foreground">To:</span> applicant@example.com</div>
              <div><span className="text-muted-foreground">Subject:</span> <span className="font-medium">{c.email.subject}</span></div>
            </div>
            <div className="p-3 text-sm whitespace-pre-wrap leading-relaxed">{c.email.body}</div>
          </div>
        </Card>

        {/* SMS */}
        <Card title="SMS" right={<MessageSquare className="w-4 h-4 text-muted-foreground" />}>
          <div className="bg-muted/50 rounded-2xl p-4 min-h-[180px] flex flex-col justify-end">
            <div className="bg-secondary text-secondary-foreground rounded-2xl rounded-bl-sm px-4 py-3 text-sm max-w-[90%] shadow-sm">
              {c.sms}
            </div>
            <div className="text-[10px] text-muted-foreground mt-2 ml-2">Wavyloan · just now</div>
          </div>
        </Card>

        {/* Voice */}
        <Card title="Voice" right={<Mic className="w-4 h-4 text-muted-foreground" />}>
          <div className="text-sm italic text-foreground/80 mb-4">"{c.voice_script}"</div>
          <button
            onClick={togglePlay}
            className="w-full rounded-lg bg-primary text-primary-foreground font-semibold py-3 flex items-center justify-center gap-2 hover:brightness-110 transition"
          >
            {playing ? <><Square className="w-4 h-4" /> Stop</> : <><Play className="w-4 h-4" /> Play Voice Update</>}
          </button>
          {playing && (
            <div className="mt-4 flex items-center justify-center gap-1 h-10">
              {[0, 1, 2, 3, 4, 5, 6].map(i => (
                <div key={i} className="w-1.5 h-full bg-primary rounded-full wl-bar" style={{ animationDelay: `${i * 0.08}s` }} />
              ))}
            </div>
          )}
        </Card>
      </div>

      {/* Push notification mockup */}
      <Card title="In-App Push Notification" right={<Smartphone className="w-4 h-4 text-muted-foreground" />}>
        <div className="max-w-md mx-auto rounded-2xl bg-sidebar text-sidebar-foreground p-4 shadow-2xl border border-sidebar-border">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-sidebar-primary flex items-center justify-center text-lg shrink-0">🌊</div>
            <div className="flex-1 min-w-0">
              <div className="flex items-baseline justify-between">
                <div className="font-semibold text-sm">Wavyloan</div>
                <div className="text-[10px] text-sidebar-foreground/50">now</div>
              </div>
              <div className="text-sm mt-0.5">{c.push}</div>
            </div>
            <Bell className="w-4 h-4 text-sidebar-foreground/40" />
          </div>
        </div>
      </Card>
    </div>
  );
}

/* ============ TAB: AUDIT ============ */

const AGENT_COLORS: Record<string, string> = {
  Intake: "bg-secondary text-secondary-foreground",
  Risk: "bg-primary text-primary-foreground",
  Compliance: "bg-amber-600 text-white",
  Underwriting: "bg-purple-600 text-white",
  Communications: "bg-cyan-600 text-white",
};

function AuditTab({ result }: { result: PipelineResult | null }) {
  const download = () => {
    if (!result) return;
    const blob = new Blob([JSON.stringify(result.audit_log, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `wavyloan-audit-${result.profile.applicant_id}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  if (!result) return <EmptyState Icon={ScrollText} title="Audit Log" />;
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold">Pipeline Audit Log</h2>
          <p className="text-sm text-muted-foreground">Immutable record of all agent actions for this run.</p>
        </div>
        <button onClick={download} className="rounded-md bg-secondary text-secondary-foreground px-4 py-2 text-sm font-medium flex items-center gap-2 hover:brightness-110">
          <Download className="w-4 h-4" /> Download Audit Log
        </button>
      </div>

      <ol className="relative border-l-2 border-border ml-3 space-y-4">
        {result.audit_log.map((e, i) => (
          <li key={i} className="ml-6 relative">
            <span className="absolute -left-[34px] top-2 w-4 h-4 rounded-full bg-primary border-4 border-background" />
            <div className="rounded-lg border border-border bg-card p-4">
              <div className="flex items-center gap-2 mb-1.5">
                <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${AGENT_COLORS[e.agent] ?? "bg-muted text-muted-foreground"}`}>{e.agent}</span>
                <span className="text-xs text-muted-foreground font-mono">{datetime(e.timestamp)}</span>
              </div>
              <div className="text-sm">{e.action}</div>
            </div>
          </li>
        ))}
      </ol>

      <div className="text-xs text-muted-foreground italic border-t border-border pt-4">
        All agent inputs are stored as SHA-256 hashes. Raw PII is never written to logs.
      </div>
    </div>
  );
}

/* ============ SHARED CARD ============ */

function Card({ title, subtitle, right, children }: { title: string; subtitle?: string; right?: React.ReactNode; children: React.ReactNode }) {
  return (
    <section className="rounded-2xl border border-border bg-card p-6 shadow-sm">
      <header className="flex items-start justify-between mb-4">
        <div>
          <h3 className="font-semibold text-base">{title}</h3>
          {subtitle && <p className="text-xs text-muted-foreground mt-0.5">{subtitle}</p>}
        </div>
        {right}
      </header>
      {children}
    </section>
  );
}

// Avoid unused import warnings if memo helper unused
const _u = useMemo;
void _u;

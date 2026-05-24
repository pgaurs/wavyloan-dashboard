# Wavyloan — AI Loan Processing Dashboard

A production-quality React UI for a hackathon demo. Frontend-only — connects to a Python FastAPI backend via a single configurable base URL. All AI work happens server-side; the UI displays returned results.

## Scope

- Single-page TanStack Start app at `/` with fixed sidebar + tabbed main content
- One backend call: `POST {API_BASE}/api/process-application` + audio fetch `GET {API_BASE}/api/voice/{id}`
- `API_BASE` lives in `src/config.ts` as `export const API_BASE = "http://localhost:8000"` for easy swap
- Mock fallback data so the UI looks complete even with no backend running (graceful demo mode)

## Visual System

- Tokens added to `src/styles.css` (oklch equivalents of the brand hexes):
  - `--primary` deep forest green (#006400)
  - `--secondary` ocean teal (#1B6B8A)
  - `--success-soft` light sage (#D5E8D4)
  - `--warning-soft` warm amber (#FFF3CD)
  - `--danger-soft` soft red (#FFDDDD)
  - Plus foreground variants and a `--wave` accent gradient
- Inter via Google Fonts in root `head()`
- Bloomberg-meets-fintech density: tight grids, monospace for citations/IDs, generous data cards
- Subtle CSS-only wave animation in top header band

## Layout

- Persistent top banner (fixed, z-50): red gradient bar with the demo/synthetic-data disclaimer — always visible above everything
- Top nav: `🌊 Wavyloan` wordmark + "Deloitte OpenAI Technology Practice" subtitle, wave animation behind logo
- Left sidebar 240px fixed:
  - Applicant `<select>` with 3 demo applicants (WL-2024-001/002/003)
  - Large green "Process Application" CTA (Enter/Space activates when focused)
  - Pipeline tracker: 5 steps with icon + status dot (idle/running/complete/error); running step gets pulsing green dot
  - Tech-stack pill badges (GPT-4o Vision, o4-mini, File Search RAG, TTS, Moderation)
  - "Powered by OpenAI" footer badge
- Main content: tab bar + tab panels with smooth fade transitions

## Tabs

1. **Intake & Documents** — 5-item document checklist (all ✅), two-column applicant profile data-card grid, extraction-confidence progress bar + colored badge, "View Raw JSON" toggle with syntax-highlighted code block
2. **Risk Assessment** — Large animated SVG donut gauge (0→score count-up via `requestAnimationFrame`), FICO/DTI/LTV metric cards, risk-tier pill, "Key Risk Drivers" cards with directional impact icons, reasoning blockquote
3. **Compliance** — Top status banner (PASS/FAIL/ADVISORY) + summary counts, fair-lending warning card when flagged, shadcn `Accordion` of check cards with colored status badges and monospace citation tags
4. **Underwriting Decision** — Full-width dramatic decision banner (green approve / red deny / amber refer with matching icon), numbered conditions checklist, rationale block, Confidence + Human-Review metric cards, escalation callout when review required
5. **Communications** — Three side-by-side cards: Email (client-style header + body), SMS (iMessage-style bubble mock), Voice (script + Play button that streams `/api/voice/{id}` via `new Audio()` with a CSS pulsing bar visualizer while playing); mobile push-notification mockup at bottom
6. **Audit Log** — Vertical timeline of events (timestamp + colored agent badge + action), "Download Audit Log" button (Blob → JSON download), SHA-256 privacy note

## States

- Pre-run: each tab shows agent-specific empty state (icon + name + "Run the pipeline to see results")
- Running: semi-transparent full-screen overlay; the 5 agent steps light up sequentially with rotating per-agent status copy. Driven by a staged timer that resolves alongside the real fetch so the animation always plays cleanly even if the API returns instantly
- Error: red error card with message + Retry button; if API unreachable, offer "Load demo data" fallback

## API Integration

- `src/lib/api.ts` exports `processApplication(applicantId)` and `voiceUrl(applicantId)`
- All results stored in a single `useState` object; changing applicant clears results back to empty state
- Currency formatted with `Intl.NumberFormat`, dates with `Intl.DateTimeFormat`

## File Plan

- `src/config.ts` — `API_BASE`, applicant list, mock fallback payload
- `src/styles.css` — add brand tokens + wave keyframes
- `src/routes/__root.tsx` — add Inter font link + meta
- `src/routes/index.tsx` — page shell (banner + nav + sidebar + tabs)
- `src/components/wavyloan/` — `DisclaimerBanner`, `TopNav`, `Sidebar`, `PipelineTracker`, `RunOverlay`, `RiskGauge`, `DecisionBanner`, `EmptyState`, plus one file per tab (`IntakeTab`, `RiskTab`, `ComplianceTab`, `DecisionTab`, `CommsTab`, `AuditTab`)
- `src/lib/api.ts` — fetch helpers + TypeScript types for the response shape
- `src/lib/format.ts` — currency/date/percent helpers

## Technical Notes

- Pure CSS animations (wave, pulse, fade) — no extra animation libs
- Donut gauge hand-rolled with SVG `stroke-dasharray` (no Recharts needed, keeps bundle small)
- Syntax highlighting via lightweight `<pre>` with token-colored spans (no Prism dependency)
- All colors via semantic Tailwind tokens; no raw hex in components
- Strict TS, no `any` in the response types

## Out of Scope

- Backend / FastAPI / OpenAI calls (user is writing those after UI approval)
- Auth, persistence, multi-user
- Real PII handling (synthetic data only)

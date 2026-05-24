## Hide the persistent disclaimer banner

Remove the red top banner ("DEMO SYSTEM — SYNTHETIC DATA ONLY...") from view.

### Changes
- In `src/routes/index.tsx`:
  - Remove the `<DisclaimerBanner />` render from `WavyloanApp`.
  - Adjust the top offsets that were compensating for the 28px banner:
    - Main content wrapper: `pt-[88px]` → `pt-[60px]`
    - Top nav: `top-7` → `top-0`
    - Sidebar: `top-[88px]` → `top-[60px]`
  - Leave the `DisclaimerBanner` component definition in place (unused) so it's trivial to re-enable later. (Optional: delete it — let me know if you'd prefer that.)

No other files affected.

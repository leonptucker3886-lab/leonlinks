# Linkline Upgrade: Tap Stats Lite (BETA)
Branch: `bert/linkline-upgrade-tap-stats` — not merged to main.

## What it does
- `tapstats.js` is loaded on every public Linkline page (`p/index.html`). Each tap on a link is counted.
- `stats.html` (open `/stats.html`) shows taps per link, ranked, with bars, last-tap time, CSV export and reset.
- Privacy-first: data lives only in the visitor's own browser (localStorage). No server, no cookies, no third parties.

## Limits (honest)
- "Lite" = per-device counts. It shows taps made on *this* browser, not all visitors worldwide. A server-backed version is the next step.

## Pitch
Creators want to know which link works. Tap Stats Lite answers that in one page, with zero setup, zero accounts and zero tracking — then exports to CSV.

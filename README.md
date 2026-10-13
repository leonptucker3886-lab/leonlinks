# Linkline

Free, open-source link-in-bio page maker for business. Live at https://linkline.leonlink.net (Leonlink.net).

## Features (Stage 1)
- 15 designer themes, each with its own typeface, palette, background pattern and motion
- Custom accent colour (auto-adjusted for WCAG contrast), font and button shape/style
- Editor at `/edit` with a live phone preview, drag-and-drop reordering, undo/redo
- Blocks: links (icon, subtitle, thumbnail, featured), section headers, YouTube/Spotify embeds, image galleries, maps
- Scheduled links (show from / hide after dates)
- QR code download and NFC-ready link copy
- Share links that carry the whole page; public viewer at `/p`
- Export a single self-contained HTML file to host anywhere
- Save Contact (vCard), no trackers, no ads, reduced-motion support

## Structure
- `index.html` landing page
- `edit/index.html` editor
- `p/index.html` public page viewer

## Roadmap
- Stage 2: Supabase sign-in, user accounts, short URLs (linkline.leonlink.net/name), server-rendered pages, private analytics, Linktree import
- Stage 3: custom domains, Stripe tips and sales with no cut, contact form / email signup / booking blocks, performance and SEO pass

MIT licensed.

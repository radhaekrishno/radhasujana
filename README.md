# RadhaSujana.com — Neo 2.1

Neo 2.0 is the consolidated wedding-invitation build for Sujana & Radha Krishna.
It replaces the incremental v34–v44 patch history with one stable release line.

## Core experience

- Modern 3D envelope intro with SR seal, shown on every fresh page load or return to the website.
- Intro completion always opens the website from the top; the manual replay controls remain available.
- English, Telugu, Hindi, Tamil, Chinese and Nepali routes, pre-translated in HTML.
- Sticky mobile header with direct YouTube and Instagram brand shortcuts.
- Wedding-week schedule, countdown, event directions and mobile quick bar.
- Persistent vertical 01–06 event rail; right-side on mobile, left-side on desktop.
- Six ritual-inspired event reveals:
  - Mehendi — trace a five-petal flower.
  - Pellikoduku/Pellikoothuru — tap ॐ to shower blessings.
  - Haldi — rub away turmeric.
  - Wedding Ceremony — draw apart the curtains.
  - Satyanarayana Swamy Vratham — touch and hold the diya.
  - Reception — raise the sparkler.
- Ritual interactions reset on every visit. Reveal-card and Reveal-all fallbacks remain available.
- Mobile haptics where supported; no ritual completion sounds.

## Neo 2.1 changes

- Removed the permanent “invitation already opened” bypass.
- Returning guests must interact with the envelope again on every load or refresh.
- Back/forward-cache restoration is handled so Safari cannot silently restore an already-open intro.
- Legacy opened-state data is cleared automatically.
- Ritual event reveals remain per-visit and unchanged.
- Service-worker cache namespace updated to `radhasujana-neo-2.1`.

## Wedding details

- Mehendi — 01 Sep 2026 · Bride's House.
- Pellikoduku / Pellikoothuru — 02 Sep 2026.
- Haldi — 03 Sep 2026 · 09:00 AM · Parinaya Function Hall Front Lawn.
- Wedding celebrations — 03 Sep evening into 04 Sep early hours.
  - Dinner — 03 Sep · 7:00 PM onwards.
  - Muhurtham — 04 Sep · 2:58 AM.
- Satyanarayana Swamy Vratham — Saturday, 05 Sep 2026 · morning · Sri Veera Venkata Satyanarayana Swamy Vari Devasthanam, Annavaram. It is displayed ceremonially and is not part of RSVP.
- Reception — 06 Sep 2026 · 6:30 PM onwards · RAMCOSA FUNCTION HALL, D.no 2-817/5, Venkat Nagar, Beside RMC Men's Hostel, Kakinada, Andhra Pradesh 533002.

## RSVP

- WhatsApp RSVP with attendance, side, guest count, message and selected celebrations.
- Vratham is intentionally excluded from RSVP.
- Selecting Regretfully No clears and disables celebration choices.
- Button-style selections use a subtle check mark rather than visible radio/checkbox controls.

## Media & sharing

- Engagement gallery with protected web-resolution images and lightbox.
- Engagement film: https://www.youtube.com/watch?v=2CMnmL-LB4U
- Wedding Instagram: https://www.instagram.com/radhasujana26/
- Native share text includes Wedding at Jaggampeta and Reception at Kakinada.
- Social/Open Graph preview assets included.

## Privacy & safety

- Search-engine noindex/noimageindex directives.
- Reduced-resolution gallery copies with EXIF stripped.
- Casual image-save deterrence and gallery watermark.
- Post-wedding privacy/sunset logic.
- Content Security Policy and supporting Cloudflare recommendations.

## Neo 2.0 mobile interaction architecture

Neo 2.0 resets the accumulated browser hit-testing layers from previous revisions:

- Runtime CSS/JS/config files have new names (`neo2.css`, `neo2.js`, `neo2-config.js`) so Safari cannot reuse an old mixed asset set.
- The service worker uses a fresh `radhasujana-neo-2.0` cache and network-first loading for HTML/CSS/JS.
- Old caches are deleted after Neo 2.0 activates.
- Decorative/sticky containers do not capture pointer events; only their actual buttons do.
- Finished/hidden reveal overlays release hit-testing immediately.
- Mobile RSVP/team/event controls explicitly own their touch targets.
- Unnecessary 3D compositing is flattened on touch devices to avoid Safari hit-testing glitches.

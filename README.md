# Radha & Sujana Wedding Website — Version 34

## Major additions
- Wedding Week live mode (1–6 September) showing the current/next event and relevant directions.
- Sticky mobile quick bar: Schedule · Directions · RSVP.
- Native Share Invitation button with clipboard fallback.
- Open Graph / social sharing metadata and social preview image.
- Returning guests skip the envelope after their first opening; footer has “View invitation again”.
- Protected gallery: EXIF-stripped web copies, WebP alternatives, lazy loading, drag/right-click/long-press deterrents and subtle on-screen watermark.
- YouTube is now a lite embed: no iframe is loaded until Play is pressed.
- Travel accordion and automatic/manual “Latest update” banner.
- Frosted navigation, Indian line-art separators, event-progress timeline and restrained micro-interactions.
- PWA manifest + service worker for install/offline core pages.
- Automatic visible Privacy Sunset mode from 7 September 2026.
- Search/privacy meta tags: noindex + noimageindex.
- Fixed hero spacing/range: Reception spacing and Wedding Ceremony 03→04 summary.
- Fixed the Vratham location bug in the existing calendar export.

## Intentionally NOT added
Per-event Add-to-Calendar buttons (item 5). The existing single overall “Add wedding to calendar” button remains.

## Last-minute update
Edit `site-config.js` and set `latestUpdate` to one sentence. Leave it blank to let Wedding Week mode generate the banner automatically.

## Optional music
Music is wired but hidden unless you supply your own audio. Put an MP3 in `assets/music/` and set `musicSrc` in `site-config.js`. It never autoplays.

## Important privacy note
The automatic post-wedding privacy mode hides private logistics from normal visitors, but because this is a static site, client-side hiding cannot erase those strings from old deployed source files. For strong post-wedding privacy, replace the live build after the wedding with the separate sanitized post-wedding package supplied alongside Version 34.

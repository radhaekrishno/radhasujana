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

## Version 37 polish
- Balanced spacing below Sujana's name so the parentage line no longer appears crowded by the descender of the “j”.
- Added 2026 below the Celebrations date range for consistency with Wedding Ceremony and Reception.
- Reworked the Instagram logo cue into subtle borderless handwritten text that stays within the mobile viewport.
- Kept Team Bride and Team Groom side-by-side on mobile, both in the rivalry picker and RSVP form.
- Restyled RSVP radio and event selections as clear tappable chips/cards instead of raw browser controls.
- Made the bottom Quick Bar quieter and changed Directions into a two-option popover for the Marriage Venue and Reception Venue.
- Added `PREVIEW-WEBSITE.bat` and `LOCAL-PREVIEW.md` so the site can be tested locally before GitHub upload.


## Version 38 detail polish
- Repositioned the Instagram hint with a leading arrow pointing back to the logo.
- Removed the accidental inner borders around the RSVP bride/groom names and enlarged the names.
- Shortened the English RSVP ceremony option to “Pellikoduku / Pellikoothuru”.
- Added a subtle `radhasujana · v38` build watermark below the invitation view counter.
- Replaced event-card concentric circles with a transparent SR monogram watermark (wine on light cards, pale gold on dark cards).


## Version 39 update
- Replaced the generic countdown rings with a faint gold SR monogram watermark.
- Balanced the space below the Wedding Ceremony Schedule box before “See all celebrations”.
- Enlarged Sujana and Radha Krishna in the RSVP side selector and optically centered all option text inside the cards.


## Version 40 update
- RSVP celebration choices now show event names only; dates/times were removed from this form.
- RSVP event labels are vertically centred with their checkbox and the rows are more compact.
- The footer Instagram prompt is substantially smaller and visually secondary.
- Normalized oversized vertical gaps across section headings, RSVP groups, footer utilities, and section padding without changing the overall design language.


## Version 40.1 — spacing rhythm refinement
- Equalized footer utility/credit/view-count/version spacing into a consistent vertical rhythm.
- Removed the negative version-watermark offset that made the final two footer lines look crowded.
- Made small spacing corrections to RSVP intro, film heading, ceremony schedule cells, quick actions, and compact Instagram footer stack.
- No layout redesign or content changes.


## Version 40.4 — WhatsApp RSVP message
- WhatsApp RSVP header now begins with the lotus emoji 🪷.
- When attending, all six celebrations are listed on separate lines with ✔️ for selected and ❌ for unselected.
- RSVP WhatsApp labels are bolded for faster scanning.
- If attendance is declined, the six-event list is omitted to avoid a long block of six crosses.
- Only the selected Bride/Groom side is included.


## Version 40.4 — unified RSVP selection cards
- Removed visible checkbox-square artwork from RSVP celebration choices.
- Attendance, team, and celebration selections now use the same subtle gold check mark when selected.
- Celebration labels are centred in their button cards; underlying inputs remain intact for accessibility and WhatsApp generation.


## Version 40.6 — cache correction
- Marriage venue card: Thursday, 3 September 2026 · 7:00 PM onwards.
- Reception venue card unchanged: Sunday, 6 September 2026 · 6:30 PM onwards.
- All route HTML files, CSS/JS/config/manifest cache-busters, footer watermark, and service-worker cache updated to v40.6 so browsers do not serve older v40.4 assets.
- Countdown SR watermark visibility retained from the prior polish.


## Version 40.7 correction
- Sathyanarayana Swamy Vratham corrected to Friday, 04 September 2026 (morning) across all language pages.
- Calendar export and Wedding Week Mode corrected to the same date.


## v40.8
- Raised and opacified the frosted sticky header so cards and RSVP selected states cannot paint above it.
- Added direct mobile header shortcuts: Engagement Video (opens YouTube directly) and Insta.
- Made event-card gold edging permanent and selection styling stable.
- Normalized service-worker/cache asset versions to v40.8.


## Version 40.9
- Opaque sticky header prevents content/timeline bleed-through.
- Mobile RSVP compressed with two-column event choices and reduced spacing while retaining touch-friendly targets.


## Version 41.0
- Selecting Regretfully no clears and disables all celebration choices (including event-card Add to RSVP controls); choosing Joyfully yes enables them again.
- The bottom Directions popover now gives Marriage and Reception directions identical neutral styling.
- Mobile sticky header shortcuts are labelled Our engagement video and Our Instagram account.
- Share Invitation now sends concise Wedding (Jaggampeta) and Reception (Kakinada) details plus the invitation URL. Clipboard fallback copies the full message.
- Cache references, footer build marker and service worker updated to v41.2.


## v41.2
- Vratham moved to Saturday, 05 September 2026 across cards, translations, calendar export and Wedding Week Mode.
- Mobile sticky social links standardized to two-line “Our / …” layout with equal sizing.


## v41.2
- Fixed mobile sticky-header social shortcut overlap by allocating the remaining header width to a true two-column shortcut grid.
- Preserves two-line labels: OUR / ENGAGEMENT VIDEO and OUR / INSTAGRAM ACCOUNT.

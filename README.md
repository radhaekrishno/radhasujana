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


## V41.3
- Reception venue updated to RAMCOSA FUNCTION HALL, D.no 2-817/5, Venkat Nagar, Beside RMC Men's Hostel, Kakinada, Andhra Pradesh, India, PIN 533002.
- Existing reception Google Maps link retained because no replacement map URL was supplied.


## V41.6
- Vratham location changed to Sri Veera Venkata Satyanarayana Swamy Vari Devasthanam, Annavaram.
- Removed the old Bride's Apartment address and Vratham directions link from the public card.
- Added ceremonial temple wording without presenting it as a general directions/invitation block.


## V41.6
- Vratham remains listed in the wedding schedule but is no longer an RSVP-selectable event.
- Removed the Add to RSVP button from the Vratham card.
- Removed Vratham from the RSVP form and WhatsApp RSVP celebration checklist.


## V41.6 opening fix
- Fixed a startup JavaScript error caused by the informational-only Vratham card having no RSVP button.
- Event-card RSVP logic now safely ignores cards without RSVP controls.
- The envelope, “Tap to open” instruction, and open-cover area are forgiving touch targets on mobile.


## V41.8 — Sticky vertical event rail
- Replaced the horizontal timeline with a sticky vertical six-event navigation rail beside the festivities cards.
- The rail remains visible while scrolling the festivities section.
- Active number follows the currently viewed card; progress works in both scroll directions.
- Tapping any number smoothly jumps to and briefly lifts the linked card in 3D.
- Event cards use a single editorial column so the rail has a clear sequential relationship.
- Corrected runtime/service-worker cache references to V41.8.


## V41.9 — Compact event-card consistency
- Preserved the sticky vertical 01–06 event rail.
- Restored compact editorial card proportions instead of letting cards stretch across the full desktop width.
- Standardized card width, padding, minimum height, and inter-card gaps across desktop/tablet breakpoints.
- Kept mobile cards naturally sized to content while using consistent padding and spacing.
- Updated runtime and service-worker cache references to V41.9.


## V42.2
- Mobile event rail moved to the right for thumb reach; desktop remains left.
- Timeline jumps leave extra space beneath the sticky header.
- Mobile sticky social text shortcuts replaced with accessible YouTube and Instagram icon buttons.


## Version 42.2
- Event rail now stays around the vertical center of the viewport while scrolling festivities, instead of climbing beneath the sticky header.
- YouTube, Instagram, and language-toggle spacing is visually equalized on mobile.


## Version 42.5 · Ritual reveal prototype
- Added Mehendi dotted-vine tracing reveal.
- Added Haldi turmeric rubbing reveal.
- Added Wedding curtain-draw reveal.
- Added Reveal all celebrations escape hatch and remembered unlock state.
- Wedding-week logic auto-reveals current/next interactive logistics cards.
- Event rail marks revealed interactive cards with a subtle gold dot.
- Corrected all runtime/service-worker cache references to v42.5.


## V42.5 — ritual reveals reset every visit
- Mehendi, Haldi and Wedding reveal covers now reset on every page load/refresh; unlocks are no longer stored in localStorage.
- Removed wedding-week auto-unlocking for these ritual cards so the interaction is required on each visit.
- Fixed the Reveal card fallback with reliable click/touch handling and a fully interactive overlay.


## V42.6 — floral Mehendi trace + natural wedding curtains
- Replaced the abstract Mehendi vine with an eight-petal floral outline and ornamental centre.
- Guests trace the flower perimeter to reveal the Mehendi card.
- Redesigned Wedding curtains with layered fabric folds, gold trim, top valance, tie-backs, irregular inner edges, and subtle 3D perspective while opening.
- Updated all cache/build references to v42.6.


## V42.7
- Mehendi trace simplified from eight petals to a five-petal flower.
- Wedding curtain styling and opening motion restored to the cleaner V42.5 design.


## V42.9
Completed ritual reveal interactions for all six festivities. Added blessing-shower gesture for Pellikoduku/Pellikoothuru, press-and-hold diya lighting for Vratham, and upward sparkler reveal for Reception. All reveals reset each visit and retain Reveal card / Reveal all fallbacks.


## V43.0
- Restored a single short instruction sentence for every ritual reveal with a subtle cue.
- Removed visible action-title labels such as PelliRevealAction and ReceptionRevealAction.
- Updated the Pelli instruction to match the current five-tap blessing interaction.


## V43.1 — ritual instructions + completion sounds
- Fixed Pelli/Vratham/Reception instruction keys rendering as literal translation-key names.
- Added polished instruction copy in all six languages before initial language rendering.
- Added short, low-volume browser-generated completion sounds for all six ritual interactions.
- Reveal Card / Reveal All fallbacks remain silent; no audio autoplays.


## V44.0 — mobile haptics + code audit
- Removed all synthesized ritual-completion sounds.
- Added short, low-intensity vibration patterns after successful ritual completion on supported touch/mobile browsers via `navigator.vibrate()`.
- Haptics do not run for Reveal card / Reveal all fallback actions.
- Vibration is feature-detected and safely no-ops on browsers that do not expose the Vibration API (including current iOS Safari).
- Ritual reveals remain per-visit and reset on each fresh page load.


## V44.5
- Prevents text/image selection and long-press callouts inside ritual reveal interactions.
- Adds defensive selection/drag/context-menu suppression for reveal overlays.


## V44.5 — cinematic 3D intro
- Rebuilt the envelope opening with perspective, depth-separated layers, a physical flap rotation, seal-release motion, invitation-card lift, ambient shadows, and desktop pointer parallax.
- Opening duration remains brief (~1.5 s; reduced-motion users get a fast simplified transition).
- Opening state is now saved from the central open function, so tapping any valid area of the cover consistently counts as an opened invitation.


## V44.7 — rebuilt modern envelope intro
- Replaced the previous envelope/card animation with a new intro structure rather than layering more fixes onto the legacy envelope.
- Fully closed ivory envelope with SR wax seal.
- Smooth seal release, flap opening, continuous physical card extraction, gradual scale toward the viewer, and direct cross-fade into the website.
- Same invitation wording and seal logo preserved across all language routes.


## V44.7 intro extraction fix
- Replaced the stepped invitation-card keyframe extraction with one continuous CSS transform transition.
- The card now begins fully within the envelope bounds, so it cannot flash underneath the envelope while opening.
- The lower part of the card remains behind the front pocket throughout the extraction for a physical paper-in-envelope effect.
- Site transition remains a direct cross-fade with no blur phase.


## V44.9
- Replaying the invitation now always returns the website to the top after the intro closes, including Safari scroll-restoration cases.
- Added a subtle View invitation again control near the top of the hero in addition to the footer control.

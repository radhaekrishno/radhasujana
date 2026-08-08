# Optional Cloudflare hardening for radhasujana.com

The website files already include `noindex`, `noimageindex`, a restrictive Content Security Policy meta tag, referrer policy, protected web-resolution gallery copies, and a robots rule for the engagement-image directory.

For protections that require HTTP response headers / edge controls, configure these in Cloudflare after GitHub Pages HTTPS is stable:

1. Keep HTTPS enforced.
2. Enable Hotlink Protection (Scrape Shield) if you want to discourage other websites embedding your image URLs.
3. Enable Bot Fight Mode if available on your plan.
4. Add response headers with a Transform Rule:
   - `X-Content-Type-Options: nosniff`
   - `Referrer-Policy: strict-origin-when-cross-origin`
   - `Permissions-Policy: camera=(), microphone=(), geolocation=()`
   - `X-Frame-Options: DENY`
   - `X-Robots-Tag: noindex, nofollow, noimageindex, noarchive`
5. Once HTTPS is confirmed stable, consider HSTS. Do not enable a long HSTS policy until you are certain the domain will remain HTTPS-only.

Important: blocking right-click/long-press is only a deterrent. Any image that a browser can display can still be captured by screenshots or advanced tools. The strongest practical protection in this build is that public gallery files are web-resolution copies with EXIF removed.

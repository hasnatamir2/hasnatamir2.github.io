# Avatar branding and SEO/GEO review

Reviewed 10 October 2026. Changes are local and are not deployed.

## Installed assets

- `src/components/logo.tsx` keeps the approved avatar as a 256px transparent WebP for the loading screen. Desktop sidebar and mobile navigation use the original terminal-window `> HA_` logo, restored at the user's request. Explicit dimensions reserve layout space.
- `src/app/favicon.ico` contains 16, 32, 48, 64, 128 and 256px frames. Root metadata also links 32px and 96px PNG favicons. The previous `icon.svg` was removed to prevent competing branding.
- `src/app/apple-icon.png` is an opaque 180px Apple touch icon, explicitly linked in metadata.
- `public/site.webmanifest` links separate regular and maskable icons at 192px and 512px. It uses browser display mode; it does not imply offline support.
- The default Open Graph and X card uses `public/brand/social/hasnat-amir-1200x630.jpg`. A configured Sanity SEO image still takes precedence. The existing `/api/og` route remains available.
- ProfilePage/Person structured data references the 512px avatar at a stable absolute production URL. Existing canonical, profile links, indexing controls, robots and sitemap behavior remain intact.
- Light and dark logo lockups are available in `public/brand/`. `public/logo.svg` contains the light-background lockup. The site UI uses the smaller avatar with its existing text.
- Section headings now follow H1/H2/H3 hierarchy. Project thumbnails declare their 128px/192px display sizes, and the project detail image declares its responsive size.

The complete export package remains in `output/hasnat-avatar-seo-package/` and its ZIP. Only the website subset is installed. The SVG lockups contain embedded raster artwork; they are not infinitely scalable vectors. Preserve the approved source when creating future sizes.

## Verification

- `yarn tsc --noEmit` and `git diff --check` passed.
- Local HTTP checks passed for the homepage, robots, sitemap, favicon, Apple icon, manifest and every referenced branding asset. Image dimensions and all six ICO frames were checked.
- Rendered metadata includes canonical, index/follow, Open Graph, X card, manifest and Apple icon. JSON-LD parses correctly. The homepage contains one H1 and four section H2s.
- Raw server HTML contains project and experience content, including with Googlebot and OAI-SearchBot user-agent headers. This does not prove access from real crawler IPs.
- Desktop at 1440×900 and mobile at 390×844 were checked in light and dark themes. Mobile menu and theme switching work.
- Local Sanity Live reports that `http://127.0.0.1:3000` is not an allowed CORS origin. Published server content renders successfully; live preview subscriptions are not verified. No Sanity project settings were changed.
- Production homepage, robots and sitemap returned HTTP 200. Production still references the old favicon and dynamic social card, as expected before deployment.
- No production build, deployment, field Core Web Vitals, external rich-result validation or Search Console indexing verification was performed.

## Remaining GEO priorities

GEO means generative engine optimization: making useful, attributable content accessible to AI search systems. These are content and discovery gaps, not missing favicon sizes.

1. **Give substantial project details stable URLs.** The public sitemap currently contains only the homepage. Project summaries are in server-rendered HTML, but expanded project details are interaction-driven modals without individual URLs. Add a small number of substantive case studies with titles, canonical URLs, internal links and sitemap entries. Prioritize Morta and the strongest completed projects rather than producing thin pages for every keyword.
2. **Support claims with first-hand evidence.** The portfolio includes claims such as 100k+ users and LCP improvements from 4.2s to under 2s. Add dates, your precise role, measurement conditions, public artifacts and attributable references where available. Existing project links are useful, but do not by themselves substantiate every metric. Do not invent statistics or disclose private client information.
3. **Publish useful technical explanations.** The site currently has project summaries, employment history and a large skill list, but no dedicated technical article routes. Explain real decisions, constraints, alternatives and measured outcomes from selected work. This gives readers and search engines more useful material to cite than a technology inventory.
4. **Verify discovery after deployment.** Check the canonical URL and sitemap in Search Console, available AI-search inclusion settings, real crawler access in server/CDN logs, and search/referral performance. Current wildcard robots rules allow the public site, but robots permission alone does not establish indexing or AI citations. Actual WAF behavior and Search Console status remain unverified.
5. **Measure production experience.** Responsive image sizing is now corrected, but production Core Web Vitals have not been measured. Use field data before claiming a performance or ranking improvement.

No special AI schema or `llms.txt` file is required for Google AI visibility. The existing Person/ProfilePage data supports identity; it cannot replace original content or guarantee citations. Search crawling and model-training policies are separate choices. No training policy was changed.

## Image SEO follow-up

- Project images previously requested unrestricted source dimensions at quality 100. Thumbnail sources now request at most 384 pixels, and detail sources 1280 pixels, using quality 85, automatic format selection, and `fit=max` to avoid upscaling. Next.js still provides responsive image delivery.
- Project image queries retain Sanity crop and hotspot data instead of flattening the image into a URL. An editable alternative-text field is now available in the project schema, with a publishing warning when omitted. Both thumbnail and detail views use that text, falling back to the project name followed by "project preview" for existing records. The hero also has a nonempty fallback.
- The sitemap now includes 12 distinct content images: the hero avatar and 11 project images. It uses stable original asset URLs; the decorative footer and utility icons are omitted. The existing no-index check remains in place.
- Sanity social-image overrides have explicit JPEG output at 1200 × 630, and sharing metadata includes dimensions and alternative text. The default static social image remains the fallback.
- Regenerated the local Sanity schema and TypeScript definitions. No published CMS records were changed. More specific screenshot descriptions can be entered through the new field; current records use the fallback.
- Verification: sitemap parses as XML; all 12 image URLs return HTTP 200; server HTML contains project alternative text and social-image metadata; the project detail image loads in the browser; typecheck and whitespace checks pass. Evidence is in `output/image-seo-verification.json` and `output/image-seo-sitemap.xml`.

The deployment and production discovery checks above remain outstanding. These changes do not establish indexing, ranking improvements, or field performance gains.

## Official references

- [Google: optimizing for generative AI features](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)
- [Google: favicon requirements](https://developers.google.com/search/docs/appearance/favicon-in-search)
- [Google: ProfilePage structured data](https://developers.google.com/search/docs/appearance/structured-data/profile-page)
- [OpenAI: crawler purposes and controls](https://developers.openai.com/api/docs/bots)
- [Google: image SEO guidance](https://developers.google.com/search/docs/appearance/google-images)
- [Sanity: image transformations](https://www.sanity.io/docs/content-lake/image-urls)

Local evidence: `output/avatar-site-verification.json`, `output/avatar-site.html`, and `output/avatar-site-{desktop,mobile}-{light,dark}.png`.

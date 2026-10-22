# Noor Evelyn Russell — Hospitality & Travel Photography

An editorial portfolio built with Next.js App Router, TypeScript, Tailwind CSS 4, and Motion. All projects and journal pieces are clearly marked illustrative content. No hotels are represented as clients.

## Development

Use Node.js 22 or newer.

```sh
npm ci
npm run dev
```

Open http://localhost:3000. Production: `npm run build && npm start`. `npm run typecheck` checks TypeScript.

## Customize content

Edit `lib/content.ts` to add/reorder projects, destinations, services, or journal cards. Projects have a unique slug, title, destination, category, image, and description. Their pages are automatically generated. Add photos to `public/images/your-project/`, then reference `/images/your-project/filename.jpg`. For a distinct project collection, add an `images` array to its entry in `lib/content.ts` (each item has a `src` and `caption`). Without this optional array, the shared sample gallery is used. This starter intentionally shares illustrative images; they do not document one property.

Journal entries are driven by `articles` in `lib/content.ts`; article text lives in `lib/journal-copy.ts`. Replace sample copy before publishing firsthand stories. Review the draft About biography and replace the atmospheric image with Noor’s portrait.

## Photography

All seven bundled images are AI-generated architectural and travel concepts, not photographs by Noor, not real hotel clients, and not documentary images of actual destinations. Every image placement identifies concept imagery, and every example project is labeled a visual study. These placeholders are provided solely to demonstrate the editorial design. The site works without an external image provider.

To replace them, add Noor’s original photographs in `public/images/your-project/`, then update the photo references and project image arrays in `lib/content.ts`. Local images automatically use Next.js responsive optimization, lazy loading, and modern format negotiation. Each gallery item supports `src` and `caption`; captions become accessible image descriptions. Do not remove the sample notices until all associated photographs, descriptions, and project claims have been replaced with verified original work. The optional Unsplash loader remains available if you choose to use temporary Unsplash URLs later; in that case follow https://unsplash.com/license and allow `images.unsplash.com` in your hosting environment.

## Inquiry delivery

Copy `.env.example` to `.env.local`. The supplied email and phone number are the defaults; environment variables can override them.

- `NEXT_PUBLIC_SITE_URL`: production canonical URL, used for SEO/sitemap.
- `NEXT_PUBLIC_CONTACT_EMAIL`: your real contact address, optionally shown in the footer/contact page.
- `NEXT_PUBLIC_CONTACT_PHONE`: phone number shown as a tap-to-call link.
- `NEXT_PUBLIC_INSTAGRAM_URL`: your verified profile URL, optional.
- `INQUIRY_WEBHOOK_URL`: trusted HTTPS form automation or backend endpoint accepting JSON. Configure that endpoint to deliver email to your address. It receives name, email, brand, location, type, timeline, and details. It must return a 2xx response only when it has accepted the inquiry for delivery.
- `INQUIRY_WEBHOOK_TOKEN`: optional server-side bearer authorization token.

The form validates required inputs, includes a honeypot, rejects cross-origin requests, limits field lengths, and times out after 10 seconds. No success is shown without backend acceptance. Without a backend it explicitly reports that nothing was sent. Before a public launch, enable provider/platform rate limiting and verify actual email delivery, spam settings, and retention practices. The honeypot is basic spam protection, not a substitute for production rate limiting.

## Vercel deployment

Import this GitHub repository in Vercel, select Next.js, and add the environment variables above. The root directory is the repository root. Deploy using the default `npm run build` command. Redeploy after changing public variables. Check the real domain’s sitemap, imagery, contact delivery, and mobile layout. A successful webhook HTTP response confirms acceptance, not receipt in an inbox.

## Launch checklist

Replace all sample photos, project claims, and draft articles; approve the About copy; add a real portrait and contact links; configure the inquiry endpoint and test a real message; set the production URL; add any jurisdiction-appropriate privacy policy and consent handling. The website is complete as a customizable starter, with email delivery requiring your provider configuration.

## Verification

With the server running, `npm run smoke` checks all page types, metadata routes, 404 behavior, and invalid/spam/cross-origin inquiry handling. Pass another URL with `npm run smoke -- https://your-preview.example`. It deliberately does not submit a valid inquiry to avoid sending test messages to a configured provider. Production build and TypeScript checks are `npm run build` and `npm run typecheck`.

`npm test` exercises the inquiry handler with a mocked HTTPS delivery provider, including acceptance and delivery failures; it sends no real messages. Local AI-generated placeholder assets are in `public/images/*-concept.png` and remain visibly labeled in the interface. Add a project-specific `images` array in `lib/content.ts` to replace the shared sample collection. The `destinations` array in the same file controls the home-page destination index.

## Free hosting with GitHub Pages

`npm run build:pages` creates a self-contained `out/` folder for https://nortyyyq.github.io/norty-learns-to-code-/ . It builds in a temporary copy, preserving the full application's API route and normal Next.js build. The static version uses your visitor's email app to prepare inquiries, with a clear instruction to press Send there; it never claims server delivery.

The published files belong on the `gh-pages` branch. In GitHub → repository Settings → Pages, select **Deploy from a branch**, **gh-pages**, **/ (root)**, then Save. GitHub hosts the site free for public repositories. When updating, rebuild and update the existing `gh-pages` branch without deleting or force-pushing unrelated history. The full source on `main` remains suitable for Vercel if server-side form delivery is desired later.

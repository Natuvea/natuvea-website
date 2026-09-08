# Natuvea

Source for [natuvea.com](https://natuvea.com/), the website for Natuvea Ltd, a design and development studio working across physical and digital products.

## Structure

| Path | Description |
| --- | --- |
| [`web/`](web/) | The website, an [Astro](https://astro.build/) project that builds to static HTML: the landing page, product, studio, privacy, and contact pages, and the journal. Journal posts are Markdown files in `web/src/content/journal/`; the sitemap is generated at build time. |
| [`infr/`](infr/) | AWS CDK infrastructure (TypeScript) that hosts the site on S3 + CloudFront with a Route 53 domain and ACM certificate. |

## Website

The site is built with Astro and ships as plain static files: no client-side framework, no JavaScript beyond the footer year.

```bash
cd web
npm install
npm run dev        # local preview at http://localhost:4321
npm run build      # static output in web/dist
npm run preview    # serve web/dist locally
```

Layout:

| Path | Description |
| --- | --- |
| `src/pages/` | One `.astro` file per page. Output URLs mirror the source tree (`product.astro` becomes `/product.html`, `journal/index.astro` becomes `/journal/`), so existing links keep working. |
| `src/pages/journal/[slug].astro` | Renders each journal post; `sitemap.xml.ts` generates the sitemap from the pages and posts. |
| `src/content/journal/` | Journal posts as Markdown with `title`, `date`, `description`, and optional `ogDescription` front matter. The journal index and sitemap pick new posts up automatically. |
| `src/layouts/` | `BaseLayout` carries the shared `<head>` (metadata, favicons, fonts, Open Graph); `ProseLayout` is the two-column title-and-copy page. |
| `src/components/` | Site header and footer. Navigation is defined once in `src/nav.ts`. |
| `src/styles/global.css` | The site stylesheet, bundled and content-hashed by the build. |
| `public/` | Files copied verbatim: logos, icons, Open Graph image, `robots.txt`. |

## Infrastructure

The `infr/` package provisions hosting for `natuvea.com` (and `www.natuvea.com`):

```bash
cd infr
npm install
npm run build      # compile TypeScript
npm test           # run CDK assertion tests
npx cdk synth      # synthesize the CloudFormation template
npx cdk deploy     # deploy (requires AWS credentials and a Route 53 hosted zone)
```

The CDK stack uploads `web/dist`, so build the site first. Pushes to `main` build the site and deploy automatically through the GitHub Actions workflow in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

## License

© Natuvea Ltd. All rights reserved.

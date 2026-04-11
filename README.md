# Portofolio Tech Zidan

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Project Data Workflow (Admin -> Source Code)

1. Open `/admin` in browser.
2. Click `Download JSON` to export latest project data.
3. Save the file as `projects-export.json` in project root.
4. Sync it into source file:

```bash
npm run sync:projects -- --input projects-export.json
```

5. Rebuild and verify:

```bash
npm run build
```

Notes:
- `/admin` data is stored in browser localStorage.
- `sync:projects` writes to `src/data/projects.js` so changes become permanent in git/deploy.

## Admin Protection

- In development (`npm run dev`), `/admin` is open.
- In production, set `VITE_ADMIN_KEY` to enable unlock form.
- Without `VITE_ADMIN_KEY`, admin route shows disabled notice.

## Vercel Deployment Checklist

1. Set environment variables in Vercel Project Settings:
	- `VITE_SITE_URL`
	- `VITE_ADMIN_KEY`
	- `CONTACT_WEBHOOK_URL` (optional)
	- `CONTACT_ALLOWED_ORIGINS` (recommended)
2. Update `public/robots.txt` and `public/sitemap.xml` to your real domain.
3. Ensure admin data is synced to source before deploy:

```bash
npm run sync:projects -- --input projects-export.json
npm run build
```

4. Deploy to Vercel (the included `vercel.json` handles SPA rewrites and security headers).

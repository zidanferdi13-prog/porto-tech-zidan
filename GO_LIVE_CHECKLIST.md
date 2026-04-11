# Go-Live Checklist (Isi Konten Anda)

## 1) Profile Utama

Edit file: `src/data/site.js`

- `siteProfile.name`
- `siteProfile.email`
- `siteProfile.linkedin`
- `siteProfile.github`
- `siteProfile.resumeUrl`
- `siteProfile.experienceYears.id` dan `siteProfile.experienceYears.en`
- `siteProfile.summary.id` dan `siteProfile.summary.en`
- `experienceTimeline`:
  - `period.id` dan `period.en`
  - `role.id` dan `role.en`
  - `highlights` (3-4 poin dengan hasil nyata)
- `skillRadar.level` sesuai kemampuan real

## 2) Project Portfolio

Gunakan salah satu cara:

- Cara A: Edit via `/admin`, export JSON, lalu sync ke source
- Cara B: Edit langsung `src/data/projects.js`

Setiap project wajib isi:

- `links.demo` (jangan `#`)
- `links.repo` (jangan `#` jika boleh publik)
- `outcomes` wajib angka impact (mis. 20%, 99.9%, <1s)

## 3) Domain & SEO

Edit:

- `public/robots.txt` -> ganti `https://example.com`
- `public/sitemap.xml` -> ganti semua `https://example.com`

Set env Vercel:

- `VITE_SITE_URL`
- `VITE_ADMIN_KEY`
- `CONTACT_ALLOWED_ORIGINS`
- `CONTACT_WEBHOOK_URL` (optional)

## 4) Verifikasi Akhir

Jalankan:

```bash
npm run build
```

Cek manual:

- `/` home
- `/about`
- `/projects`
- `/projects/:slug`
- `/case-study`
- `/contact`
- `/admin` (pastikan lock/unlock sesuai environment)
- Ganti bahasa ID/EN, cek semua teks tetap rapi

## 5) Jika Pakai Admin Workflow

```bash
npm run sync:projects -- --input projects-export.json
npm run build
```

Lalu commit file hasil sync dan deploy ke Vercel.

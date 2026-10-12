# Setaraworks Company Profile Template

Template project company profile berbasis **Next.js 16 + React 19 (App Router, TypeScript)**.
Strukturnya meniru pola project Setaraworks: route group `(public)` untuk halaman marketing
dan `admin` untuk area backend. Saat ini seluruh halaman masih berupa dummy/placeholder.

## Menjalankan

```bash
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

## Struktur

```
src/
├── app/
│   ├── (public)/     # halaman publik (home, tentang, layanan, kontak)
│   └── admin/        # area admin (login + dashboard)
├── components/       # komponen UI reusable
├── lib/              # helper / data layer (placeholder)
├── features/         # modul domain (placeholder)
└── types/            # tipe bersama
```

Ganti isi dummy pada tiap `page.tsx` dengan konten sesungguhnya saat mulai mengembangkan.
# demo-mandala-525

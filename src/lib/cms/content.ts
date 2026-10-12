// Placeholder data layer. Ganti dengan implementasi sesungguhnya
// (mis. koneksi ke database/CMS) saat pengembangan dimulai.

export type SiteSettings = {
  site_name: string;
  site_url: string;
};

export async function getSiteSettings(): Promise<SiteSettings> {
  return {
    site_name: process.env.NEXT_PUBLIC_SITE_NAME ?? "Setaraworks",
    site_url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  };
}

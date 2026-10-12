import type { ReactNode } from "react";
export const instagram = "https://www.instagram.com/mandala525islamictour/";
export function whatsapp(message = "Assalamu’alaikum, saya ingin konsultasi program umroh Mandala 525.") { return `https://wa.me/6285793403395?text=${encodeURIComponent(message)}`; }
export function Icon({ name = "arrow" }: { name?: string }) {
  const paths: Record<string, ReactNode> = {
    arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
    diagonal: <path d="M6 18 18 6M6 6h12v12" />,
    check: <path d="m5 12 4 4L19 6" />,
    shield: <><path d="m12 3 8 3v6c0 5-8 9-8 9s-8-4-8-9V6l8-3Z" /><path d="m8 12 3 3 5-6" /></>,
    plane: <path d="m22 2-7 20-4-9-9-4 20-7ZM11 13 22 2" />,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M7 2v6m10-6v6M3 11h18" /></>,
    search: <><circle cx="10.5" cy="10.5" r="6.5" /><path d="m16 16 5 5" /></>,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
    hotel: <path d="M5 21V3h14v18M2 21h20M9 7h1m4 0h1m-6 4h1m4 0h1m-5 10v-6h4v6" />,
    heart: <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z" />,
    chat: <><path d="M21 11.5a8.5 8.5 0 0 1-12.3 7.6L3 21l1.9-5.7A8.5 8.5 0 1 1 21 11.5Z" /><path d="M8 9c0 4 3 6 6 6l2-2-2-1-1 1-3-3 1-1-1-2-2 2Z" /></>,
    pin: <><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
    instagram: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><path d="M17.5 6.5h.01" /></>,
    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
    close: <path d="m6 6 12 12M6 18 18 6" />,
  };
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name] ?? paths.arrow}</svg>;
}
export function Brand() { return <a className="brand" href="/#beranda" aria-label="Mandala 525 — Beranda"><span className="brand-mark" aria-hidden="true" /><span className="brand-wordmark">MANDALA<sup>525</sup><small>ISLAMIC TOUR</small></span></a>; }

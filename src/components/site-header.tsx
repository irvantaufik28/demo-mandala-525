"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Brand, Icon, whatsapp } from "./mandala-ui";

const homeLinks = [
  ["Beranda", "beranda"],
  ["Paket Umroh", "paket-umroh"],
  ["Haji Plus", "haji-plus"],
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <div className="topline">
        <div className="container topline-inner">
          <span><Icon name="shield" /> PPIU No. 1030 Tahun 2019</span>
          <span>Untuk setiap hati yang rindu Tanah Suci <i>✦</i></span>
        </div>
      </div>
      <header className="site-header">
        <div className="container header-inner">
          <Brand />
          <nav
            id="main-navigation"
            className={open ? "main-nav is-open" : "main-nav"}
            aria-label="Navigasi utama"
          >
            {homeLinks.map(([label, id]) => {
              const isPage = id === "paket-umroh" || id === "haji-plus";
              const active = isPage
                ? pathname === `/${id}`
                : pathname === "/" && id === "beranda";
              return (
                <Link
                  key={id}
                  className={active ? "active" : undefined}
                  aria-current={active ? "page" : undefined}
                  href={isPage ? `/${id}` : `/#${id}`}
                  onClick={() => setOpen(false)}
                >
                  {label}
                </Link>
              );
            })}
            <Link
              className={pathname === "/tabungan-umroh" ? "active" : undefined}
              aria-current={pathname === "/tabungan-umroh" ? "page" : undefined}
              href="/tabungan-umroh"
              onClick={() => setOpen(false)}
            >
              Nabung Umroh
            </Link>
            <Link
              className={pathname === "/visit-our-office" ? "active" : undefined}
              aria-current={pathname === "/visit-our-office" ? "page" : undefined}
              href="/visit-our-office"
              onClick={() => setOpen(false)}
            >
              Visit Our Office
            </Link>
            <Link
              className={pathname === "/tentang" ? "active" : undefined}
              aria-current={pathname === "/tentang" ? "page" : undefined}
              href="/tentang"
              onClick={() => setOpen(false)}
            >
              Tentang Kami
            </Link>
          </nav>
          <a className="button button-gold header-cta" href={whatsapp()} target="_blank" rel="noreferrer">
            <Icon name="chat" /> Konsultasi Umroh <Icon name="diagonal" />
          </a>
          <button
            className="menu-toggle"
            aria-label={open ? "Tutup menu" : "Buka menu"}
            aria-expanded={open}
            aria-controls="main-navigation"
            onClick={() => setOpen(!open)}
          >
            <Icon name={open ? "close" : "menu"} />
            <span>{open ? "Tutup" : "Menu"}</span>
          </button>
        </div>
      </header>
    </>
  );
}

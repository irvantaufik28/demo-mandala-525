"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./paket.module.css";

const slides = [
  {
    src: "/images/mandala/paket-banner-fasilitas.png",
    mobileSrc: "/images/mandala/paket-hero-fasilitas.png",
    alt: "Fasilitas jamaah Mandala, termasuk pendampingan ibadah, penerbangan, hotel, dan perlengkapan",
  },
  {
    src: "/images/mandala/paket-banner-hotel.png",
    mobileSrc: "/images/mandala/paket-hero-hotel.png",
    alt: "Pilihan hotel Mirage Salam di Madinah dan Azka Safa di Makkah",
  },
  {
    src: "/images/mandala/paket-banner-mandala.png",
    mobileSrc: "/images/mandala/paket-hero-mandala.png",
    alt: "Identitas Umroh Mandala dengan gambar Ka'bah, Masjid Nabawi, dan menara Makkah",
  },
  {
    src: "/images/mandala/paket-banner-bekal.png",
    mobileSrc: "/images/mandala/paket-hero-bekal.png",
    alt: "Perlengkapan perjalanan umroh Mandala dengan busana, tas, dan koper",
  },
] as const;

export default function HeroCarousel() {
  const [active, setActive] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReducedMotion(preference.matches);
    updatePreference();
    preference.addEventListener("change", updatePreference);
    return () => preference.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 5500);
    return () => window.clearInterval(timer);
  }, [reducedMotion]);

  return (
    <section className={styles.heroCarousel} aria-label="Informasi paket umroh Mandala">
      <div className={styles.heroFrame} aria-live="off">
        {slides.map((slide, index) => (
          <div
            key={slide.src}
            className={index === active ? `${styles.heroSlide} ${styles.heroSlideActive}` : styles.heroSlide}
            aria-hidden={index !== active}
          >
            <picture>
              <source media="(max-width: 700px)" srcSet={slide.mobileSrc} />
              <Image
                src={slide.src}
                alt={slide.alt}
                width={1920}
                height={600}
                sizes="100vw"
                priority={index === 0}
              />
            </picture>
          </div>
        ))}
      </div>
    </section>
  );
}

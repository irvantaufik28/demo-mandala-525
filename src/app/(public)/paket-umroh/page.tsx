import type { Metadata } from "next";
import Image from "next/image";
import { Icon } from "@/components/mandala-ui";
import HeroCarousel from "./hero-carousel";
import { packages } from "./packages";
import styles from "./paket.module.css";

export const metadata: Metadata = {
  title: "Paket Umroh | Mandala 525 Islamic Tour",
  description: "Bandingkan paket umroh Mandala 525 untuk keberangkatan November 2026 hingga Januari 2027.",
};

export default function PaketUmrohPage() {
  return (
    <main className={styles.page}>
      <a className="skip-link" href="#daftar-paket">Langsung ke daftar paket</a>
      <HeroCarousel />

      <div className={styles.searchWrap}>
        <div className="container">
          <div className={styles.searchPanel} role="group" aria-label="Pratinjau pencarian paket">
            <div className={styles.searchField}>
              <Icon name="calendar" />
              <span><small>Keberangkatan</small><strong>Semua Bulan</strong></span>
              <span className={styles.chevron} aria-hidden="true" />
            </div>
            <div className={styles.searchField}>
              <Icon name="pin" />
              <span><small>Program</small><strong>Semua Program</strong></span>
              <span className={styles.chevron} aria-hidden="true" />
            </div>
            <div className={styles.searchField}>
              <Icon name="plane" />
              <span><small>Maskapai</small><strong>Semua Maskapai</strong></span>
              <span className={styles.chevron} aria-hidden="true" />
            </div>
            <span className={styles.searchAction}>
              <Icon name="search" /> Temukan Sekarang
            </span>
          </div>
          <p className={styles.searchNote}>Pratinjau tampilan. Pencarian belum aktif pada demo ini.</p>
        </div>
      </div>

      <section className={styles.catalogue} id="daftar-paket" aria-labelledby="catalogue-title">
        <div className="container">
          <div className={styles.sectionHeading}>
            <div>
              <p className={styles.kicker}>Paket keberangkatan</p>
              <h1 id="catalogue-title">Temukan tanggal yang sesuai.</h1>
            </div>
            <p>Empat pilihan perjalanan dari November hingga Januari.</p>
          </div>

          <div className={styles.ticketList}>
            {packages.map((item) => (
              <article className={styles.ticket} key={item.id} aria-labelledby={`${item.id}-title`}>
                <div className={styles.ticketImage}>
                  <Image
                    src={item.image}
                    alt={`Materi asli ${item.name}, keberangkatan ${item.date}`}
                    width={item.width}
                    height={item.height}
                    sizes="(max-width: 700px) 100vw, (max-width: 1050px) 38vw, 20vw"
                  />
                </div>
                <div className={styles.ticketInfo}>
                  <span className={styles.dateBlock}>
                    <strong>{item.day}</strong>
                    <span>{item.month}<small>{item.year}</small></span>
                  </span>
                  <h3 id={`${item.id}-title`}>{item.name}</h3>
                  <p>{item.duration} · Saudia tanpa transit</p>
                  <div className={styles.ticketBottom}>
                    <div className={styles.price}>
                      <span>Mulai dari / jamaah</span>
                      <strong>Rp {item.price} <small>juta</small></strong>
                    </div>
                    <a className={styles.detailLink} href={`/paket-umroh/${item.id}`}>
                      Lihat detail <Icon name="arrow" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className={styles.disclaimer}>
            Harga dan jadwal mengikuti materi Mandala untuk demo. Konfirmasi
            informasi terbaru kepada admin sebelum mendaftar.
          </p>
        </div>
      </section>
    </main>
  );
}

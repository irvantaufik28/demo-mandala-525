import type { Metadata } from "next";
import Image from "next/image";
import { Icon, whatsapp } from "@/components/mandala-ui";
import styles from "./office.module.css";

export const metadata: Metadata = {
  title: "Visit Our Office | Mandala 525 Islamic Tour",
  description:
    "Lihat foto dan alamat kantor Mandala 525 di Garut. Hubungi tim kami untuk mengonfirmasi waktu kunjungan.",
};

const askOffice = whatsapp(
  "Assalamu’alaikum, saya ingin berkunjung ke kantor Mandala 525 di Garut. Mohon konfirmasi alamat dan waktu kunjungan.",
);

export default function VisitOurOfficePage() {
  return (
    <main className={styles.page}>
      <a className="skip-link" href="#lokasi-kantor">
        Langsung ke lokasi kantor
      </a>

      <section className={styles.hero} aria-labelledby="office-title">
        <div className={`container ${styles.heroLayout}`}>
          <div className={styles.heroCopy}>
            <p className={styles.kicker}>Mandala 525 Islamic Tour</p>
            <h1 id="office-title">
              Temui kami <em>sebelum berangkat.</em>
            </h1>
            <p className={styles.heroIntro}>
              Kenali kantor Mandala 525 dan bicarakan rencana ibadah Anda
              langsung dengan tim kami. Lihat ruangnya, lalu tanyakan waktu
              kunjungan yang sesuai.
            </p>
            <div className={styles.heroActions}>
              <a className={styles.primaryAction} href="#lokasi-kantor">
                Lihat titik kantor <Icon name="arrow" />
              </a>
              <a className={styles.secondaryAction} href={askOffice} target="_blank" rel="noreferrer">
                Tanya waktu kunjungan
              </a>
            </div>
          </div>
          <figure className={styles.heroFigure}>
            <Image
              src="/images/mandala/office-exterior.png"
              alt="Tampak depan gedung Mandala 525 Islamic Tour dengan fasad hitam dan papan nama emas"
              width={1692}
              height={929}
              priority
              sizes="(max-width: 760px) 100vw, 54vw"
            />
            <figcaption>Gedung Mandala 525 Islamic Tour</figcaption>
          </figure>
        </div>
      </section>

      <section className={styles.spaces} aria-labelledby="spaces-title">
        <div className="container">
          <div className={styles.sectionIntro}>
            <div>
              <p className={styles.sectionLabel}>Suasana kantor</p>
              <h2 id="spaces-title">Lihat ruang Mandala 525.</h2>
            </div>
            <p>
              Foto-foto ini memperlihatkan ruang penerimaan dan ruang pertemuan
              di kantor Mandala 525.
            </p>
          </div>
          <div className={styles.spaceGrid}>
            <figure className={styles.loungeFigure}>
              <Image
                src="/images/mandala/office-lounge.png"
                alt="Ruang penerimaan Mandala 525 dengan sofa cokelat dan ornamen kaligrafi emas"
                width={1659}
                height={948}
                sizes="(max-width: 760px) 100vw, 52vw"
              />
              <figcaption>Ruang penerimaan</figcaption>
            </figure>
            <figure className={styles.meetingFigure}>
              <Image
                src="/images/mandala/office-meeting.png"
                alt="Ruang pertemuan Mandala 525 dengan meja dan panggung presentasi"
                width={1676}
                height={939}
                sizes="(max-width: 760px) 100vw, 38vw"
              />
              <figcaption>Ruang pertemuan</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className={styles.location} id="lokasi-kantor" aria-labelledby="location-title">
        <div className={`container ${styles.locationLayout}`}>
          <div className={styles.locationCopy}>
            <p className={styles.sectionLabel}>Lokasi kantor</p>
            <h2 id="location-title">
              Mandala 525 <em>di Garut.</em>
            </h2>
            <p>
              Temui kami di Jl. Sudirman No. 30, Copong, Garut, Jawa Barat.
              Hubungi admin sebelum datang untuk memastikan lokasi dan waktu
              kunjungan.
            </p>
            <a className={styles.contactAction} href={askOffice} target="_blank" rel="noreferrer">
              <Icon name="chat" /> Atur waktu kunjungan
            </a>
            <small>Gambar peta digunakan sebagai cuplikan statis untuk demo.</small>
          </div>
          <figure className={styles.mapFigure}>
            <Image
              src="/images/mandala/office-map-garut.png"
              alt="Cuplikan peta statis dengan penanda Mandala 525 Islamic Tour di Garut"
              width={1238}
              height={1156}
              sizes="(max-width: 760px) 100vw, 48vw"
            />
            <figcaption>
              <span>Lokasi Mandala 525 Islamic Tour</span>
              <a
                className={styles.mapLink}
                href="https://www.google.com/maps/search/?api=1&query=Mandala+525+Islamic+Tour+Garut"
                target="_blank"
                rel="noreferrer"
              >
                Cari di Google Maps <Icon name="diagonal" />
              </a>
            </figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}

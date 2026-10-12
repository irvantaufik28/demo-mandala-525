import type { Metadata } from "next";
import Image from "next/image";
import { Icon, whatsapp } from "@/components/mandala-ui";
import styles from "./tabungan.module.css";

export const metadata: Metadata = {
  title: "Nabung Umroh | Mandala 525 Islamic Tour",
  description:
    "Program Nabung Umroh Mandala 525 Islamic Tour dengan setoran awal Rp150.000. Tanyakan cara pendaftaran dan ketentuannya langsung kepada tim Mandala.",
};

const consultation = whatsapp(
  "Assalamu’alaikum, saya ingin bertanya tentang Program Nabung Umroh Mandala 525 dengan setoran awal Rp150.000. Mohon informasi syarat, cara setoran, dan pendaftarannya.",
);

const instagram = "https://www.instagram.com/mandala525islamictour/";
const office =
  "https://www.google.com/maps/search/?api=1&query=Mandala+525+Islamic+Tour+Garut";

const confirmItems = [
  {
    number: "01",
    title: "Syarat membuka tabungan",
    text: "Dokumen dan tahapan pendaftaran dijelaskan langsung oleh tim Mandala.",
  },
  {
    number: "02",
    title: "Cara melakukan setoran",
    text: "Tanyakan metode, jadwal, dan ketentuan setoran sebelum memulai.",
  },
  {
    number: "03",
    title: "Rencana keberangkatan",
    text: "Diskusikan pilihan paket dan waktu berangkat yang sesuai dengan rencana Anda.",
  },
];

export default function TabunganUmrohPage() {
  return (
    <main className={styles.page}>
      <a className="skip-link" href="#program-detail">
        Langsung ke informasi program
      </a>

      <section className={styles.hero} aria-labelledby="tabungan-title">
        <div className={`container ${styles.heroLayout}`}>
          <div className={styles.heroCopy}>
            <p className={styles.kicker}>Mandala 525 Islamic Tour</p>
            <h1 id="tabungan-title">
              Nabung Umroh.
              <em> Niat baik bisa dimulai hari ini.</em>
            </h1>
            <p className={styles.heroIntro}>
              Kini Anda bisa membuka tabungan khusus Umroh dengan setoran awal
              Rp150.000. Rencanakan perjalanan ke Tanah Suci bersama tim
              Mandala, sesuai langkah yang Anda siapkan.
            </p>

            <div className={styles.heroAmount}>
              <span>Setoran awal</span>
              <strong>Rp150.000</strong>
              <small>Bukan harga paket umroh</small>
            </div>

            <div className={styles.heroActions}>
              <a
                className={styles.primaryAction}
                href={consultation}
                target="_blank"
                rel="noreferrer"
              >
                <Icon name="chat" /> Tanya cara daftar
              </a>
              <a className={styles.textAction} href="#program-detail">
                Kenali program <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>

          <figure className={styles.heroFigure}>
            <div className={styles.heroImageFrame}>
              <Image
                src="/images/mandala/nabung-umroh-peluncuran.png"
                alt="Dua perwakilan menunjukkan poster peluncuran Program Tabungan Umroh Mandala 525"
                width={1167}
                height={1347}
                priority
                sizes="(max-width: 840px) 100vw, 43vw"
              />
            </div>
            <figcaption>Dokumentasi peluncuran program</figcaption>
          </figure>
        </div>
      </section>

      <section
        className={styles.program}
        id="program-detail"
        aria-labelledby="program-title"
      >
        <div className={`container ${styles.programLayout}`}>
          <div className={styles.programLead}>
            <p className={styles.sectionLabel}>Tentang program</p>
            <h2 id="program-title">
              Menabung untuk <em>perjalanan yang direncanakan.</em>
            </h2>
            <p>
              Mandala 525 memperkenalkan Program Nabung Umroh agar persiapan
              ibadah dapat dimulai sejak sekarang. Dalam pengumumannya, Mandala
              menyebut program ini aman, resmi, dan terencana.
            </p>
            <p>
              Setoran awal Rp150.000 membuka tabungan khusus Umroh. Rincian
              pengelolaan, setoran berikutnya, dan ketentuan pendaftaran perlu
              Anda konfirmasi langsung kepada admin sebelum mendaftar.
            </p>
          </div>

          <div className={styles.programAside}>
            <div className={styles.checkList}>
              <h3>Yang perlu Anda tanyakan</h3>
              {confirmItems.map((item) => (
                <div className={styles.checkItem} key={item.number}>
                  <span>{item.number}</span>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.story} aria-labelledby="story-title">
        <div className={`container ${styles.storyLayout}`}>
          <figure className={styles.storyFigure}>
            <Image
              src="/images/mandala/nabung-umroh-dokumentasi.png"
              alt="Dokumentasi kegiatan pengenalan Tabungan Umroh Mandala 525 bersama peserta"
              width={1103}
              height={1426}
              sizes="(max-width: 840px) 100vw, 47vw"
            />
            <figcaption>Dokumentasi Program Nabung Umroh Mandala 525</figcaption>
          </figure>
          <div className={styles.storyCopy}>
            <p className={styles.sectionLabel}>Dari Mandala 525</p>
            <h2 id="story-title">
              Jangan tunda <em>niat suci Anda.</em>
            </h2>
            <p>
              Foto di samping merekam kegiatan pengenalan Program Nabung Umroh
              Mandala 525. Anda juga dapat melihat kabar Mandala melalui akun
              Instagram resminya.
            </p>
            <a href={instagram} target="_blank" rel="noreferrer">
              <Icon name="instagram" /> Lihat Instagram Mandala 525
            </a>
          </div>
        </div>
      </section>

      <section className={styles.contact} aria-labelledby="contact-title">
        <div className={`container ${styles.contactLayout}`}>
          <div>
            <p className={styles.sectionLabel}>Konsultasi dan pendaftaran</p>
            <h2 id="contact-title">
              Mari bicarakan <em>rencana umroh Anda.</em>
            </h2>
            <p>
              Tanyakan syarat dan mekanisme tabungan sebelum mendaftar. Anda
              dapat menghubungi admin atau datang langsung ke kantor Mandala.
            </p>
          </div>
          <div className={styles.contactChoices}>
            <a href={consultation} target="_blank" rel="noreferrer">
              <span><Icon name="chat" /> Hubungi melalui WhatsApp</span>
              <strong>0857 9340 3395</strong>
            </a>
            <a href={office} target="_blank" rel="noreferrer">
              <span><Icon name="pin" /> Datang ke kantor</span>
              <strong>Jl. Sudirman No. 30, Copong, Garut</strong>
            </a>
          </div>
        </div>
        <p className={`container ${styles.disclaimer}`}>
          Informasi program pada halaman demo ini bersifat statis. Konfirmasi
          ketentuan terbaru dan cara setoran langsung kepada Mandala 525.
        </p>
      </section>
    </main>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { whatsapp } from "@/components/mandala-ui";
import styles from "./tentang.module.css";

export const metadata: Metadata = {
  title: "Tentang Kami | Mandala 525 Islamic Tour",
  description:
    "Kenali Mandala 525 Islamic Tour, Haris Kalicman selaku Owner & CEO, kantor di Garut, serta pendekatan pendampingan jamaah.",
};

const consultUrl = whatsapp(
  "Assalamu’alaikum, saya ingin mengenal layanan dan berkonsultasi tentang perjalanan umroh bersama Mandala 525.",
);

const fiveCertainties = [
  ["Travelnya", "Legalitas, identitas penyelenggara, dan alamat kantor bisa ditanyakan sebelum mendaftar."],
  ["Jadwalnya", "Tanggal keberangkatan dan kepulangan perlu dinyatakan jelas untuk program yang dipilih."],
  ["Terbangnya", "Maskapai dan rute penerbangan disampaikan dalam rincian perjalanan."],
  ["Hotelnya", "Nama atau kelas hotel, lokasi, dan ketentuan penggantinya perlu dipahami sejak awal."],
  ["Visanya", "Proses dan status pengurusan visa diinformasikan kepada jamaah."],
] as const;

export default function TentangPage() {
  return (
    <main className={styles.page}>
      <a className="skip-link" href="#cerita-mandala">Langsung ke cerita Mandala</a>

      <section className={styles.hero} aria-labelledby="about-title">
        <div className={styles.heroCopy}>
          <p className={styles.kicker}>Mandala 525 Islamic Tour</p>
          <h1 id="about-title">Bersama jamaah, <em>dari rencana pertama hingga kembali pulang.</em></h1>
          <p className={styles.heroLead}>
            Perjalanan ibadah membawa harapan besar. Mandala 525 hadir untuk
            membantu jamaah memahami pilihannya, menyiapkan keberangkatan,
            dan mendapat pendampingan selama perjalanan.
          </p>
          <a className={styles.heroLink} href="#cerita-mandala">Kenali Mandala 525 <span aria-hidden="true">↓</span></a>
        </div>
        <figure className={styles.heroPhoto}>
          <Image
            src="/images/mandala/haris-wawancara.png"
            alt="Suasana wawancara yang memperlihatkan dua orang berbincang"
            fill
            priority
            sizes="(max-width: 800px) 100vw, 55vw"
          />
          <figcaption>Dokumentasi wawancara</figcaption>
        </figure>
      </section>

      <section className={styles.story} id="cerita-mandala" aria-labelledby="story-title">
        <div className={styles.shell}>
          <div className={styles.storyMark} aria-label="13 tahun mendampingi jamaah menurut publikasi Mandala">
            <strong>13</strong>
            <span>tahun mendampingi perjalanan ibadah</span>
          </div>
          <div className={styles.storyCopy}>
            <p className={styles.kicker}>Cerita kami</p>
            <h2 id="story-title">Kepercayaan jamaah adalah amanah yang dijaga.</h2>
            <p>
              Dalam publikasi miladnya, Mandala 525 menyampaikan telah 13 tahun
              mendampingi perjalanan umroh dan haji. Kami berterima kasih kepada
              Bapak dan Ibu jamaah yang mempercayakan persiapannya kepada tim Mandala.
            </p>
            <p>
              Sebelum berangkat, jamaah perlu mendapat penjelasan mengenai program,
              fasilitas, dokumen, dan tahapan perjalanan. Manasik menjadi salah satu
              ruang untuk mempersiapkan ibadah bersama pembimbing dan tim kami.
            </p>
            <small>Angka 13 tahun berasal dari caption milad Mandala yang diberikan untuk demo ini.</small>
          </div>
        </div>
      </section>

      <section className={styles.leadership} aria-labelledby="leader-title">
        <div className={styles.shell}>
          <figure className={styles.leaderPhoto}>
            <Image
              src="/images/mandala/haris-kalicman.png"
              alt="Potret Haris Kalicman"
              width={1122}
              height={1402}
              sizes="(max-width: 720px) 100vw, 42vw"
            />
            <figcaption>Haris Kalicman</figcaption>
          </figure>
          <div className={styles.leaderCopy}>
            <p className={styles.kicker}>Pimpinan Mandala 525</p>
            <h2 id="leader-title">Haris <em>Kalicman.</em></h2>
            <p className={styles.role}>Owner &amp; CEO</p>
            <p>
              Mandala 525 mempertemukan persiapan perjalanan dengan pendampingan
              ibadah. Di bawah kepemimpinan Haris Kalicman, perhatian itu hadir
              sejak jamaah memilih program, mengikuti manasik, hingga pulang
              dari Tanah Suci.
            </p>
            <p>
              Bagi kami, konsultasi yang baik dimulai dari jawaban yang jelas:
              apa yang termasuk dalam paket, siapa yang mendampingi, dan bagaimana
              tim membantu saat rencana perjalanan berubah.
            </p>
            <a href={consultUrl} target="_blank" rel="noreferrer" className={styles.textLink}>
              Bicarakan rencana ibadah Anda
            </a>
          </div>
        </div>
      </section>

      <section className={styles.certainties} aria-labelledby="certainty-title">
        <div className={styles.shell}>
          <div className={styles.certaintyIntro}>
            <p className={styles.kicker}>Prinsip dari publikasi Mandala</p>
            <h2 id="certainty-title">Kenali “5 Pasti Umrah” sebelum memilih program.</h2>
            <p>
              Lima hal ini membantu jamaah mengajukan pertanyaan yang tepat.
              Mintalah rincian tertulis untuk keberangkatan yang Anda pilih.
            </p>
          </div>
          <ol className={styles.certaintyList}>
            {fiveCertainties.map(([title, detail], index) => (
              <li key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>Pasti {title}</h3>
                <p>{detail}</p>
              </li>
            ))}
          </ol>
          <p className={styles.licenseNote}>
            Materi Mandala menyebut izin PPIU dan PIHK. Status izin serta rincian
            program sebaiknya dikonfirmasi melalui tim Mandala dan kanal resmi yang berlaku.
          </p>
        </div>
      </section>

      <section className={styles.officeGallery} aria-labelledby="office-gallery-title">
        <div className={styles.shell}>
          <div className={styles.officeGalleryHeading}>
            <div>
              <p className={styles.kicker}>Kantor Mandala 525</p>
              <h2 id="office-gallery-title">Ruang untuk bertemu <em>dan bertanya.</em></h2>
            </div>
            <p>Lihat suasana kantor Mandala di Garut. Anda dapat mengonfirmasi waktu kunjungan sebelum datang.</p>
          </div>
          <div className={styles.officePhotos}>
            <figure>
              <Image
                src="/images/mandala/office-exterior.png"
                alt="Tampak depan kantor Mandala 525 Islamic Tour di Garut"
                width={1692}
                height={929}
                sizes="(max-width: 760px) 100vw, 55vw"
              />
              <figcaption>Tampak depan kantor</figcaption>
            </figure>
            <figure>
              <Image
                src="/images/mandala/office-lounge.png"
                alt="Ruang penerimaan Mandala 525 dengan sofa dan ornamen dinding"
                width={1659}
                height={948}
                sizes="(max-width: 760px) 100vw, 45vw"
              />
              <figcaption>Ruang penerimaan</figcaption>
            </figure>
          </div>
          <Link className={styles.officeLink} href="/visit-our-office">Lihat lokasi dan foto kantor lainnya</Link>
        </div>
      </section>

      <section className={styles.care} aria-labelledby="care-title">
        <div className={styles.shell}>
          <div className={styles.careCopy}>
            <p className={styles.kicker}>Pendampingan selama perjalanan</p>
            <h2 id="care-title">Saat jamaah membutuhkan bantuan, <em>tim tetap mendampingi.</em></h2>
            <p>
              Pertanyaan tentang sakit atau keterlambatan pulang perlu dijawab
              sebelum berangkat. Dalam publikasinya, Mandala menyebut persiapan
              asuransi kesehatan bagi jamaah dan tim di Makkah serta Madinah
              untuk membantu penanganan langsung.
            </p>
            <p>
              Cakupan asuransi, prosedur medis, dan bantuan jika jamaah belum
              bisa pulang bersama rombongan perlu dijelaskan sesuai polis dan
              ketentuan paket yang dipilih.
            </p>
            <a className={styles.textLink} href={consultUrl} target="_blank" rel="noreferrer">
              Tanyakan prosedur pendampingan
            </a>
          </div>
        </div>
      </section>

      <section className={styles.closing} aria-labelledby="closing-title">
        <div className={styles.shell}>
          <div>
            <p className={styles.kicker}>Temui kami di Garut</p>
            <h2 id="closing-title">Kenali timnya. Tanyakan setiap detailnya.</h2>
            <p>Konsultasi lewat WhatsApp atau datang ke kantor setelah mengonfirmasi waktu kunjungan.</p>
          </div>
          <div className={styles.closingActions}>
            <Link href="/visit-our-office">Lihat kantor Mandala</Link>
            <a href={consultUrl} target="_blank" rel="noreferrer">Konsultasi via WhatsApp</a>
          </div>
        </div>
      </section>
    </main>
  );
}

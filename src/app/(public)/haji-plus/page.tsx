import type { Metadata } from "next";
import Image from "next/image";
import styles from "./haji-plus.module.css";

export const metadata: Metadata = {
  title: "Haji Plus | Mandala 525 Islamic Tour",
  description:
    "Informasi program Haji Plus Mandala 525: perkiraan masa tunggu, fasilitas, rencana perjalanan, syarat pendaftaran, dan konsultasi.",
};

const consultationUrl =
  "https://wa.me/6281111119525?text=Assalamu%27alaikum%2C%20saya%20ingin%20konsultasi%20program%20Haji%20Plus%20Mandala%20525.";

const phases = [
  {
    number: "01",
    title: "Tiba dan persiapan di Makkah",
    period: "2–7 Dzulhijjah",
    steps: [
      ["2", "Jakarta → Jeddah", "Penerbangan menuju Tanah Suci."],
      ["3", "Jeddah → Makkah", "Tiba di apartemen dan melaksanakan umrah."],
      ["4", "Makkah", "Istirahat penuh."],
      ["5", "Makkah", "Ceramah dan pengajian."],
      ["6", "Makkah", "Ceramah dan pengajian sesuai rangkaian program."],
      ["7", "Makkah", "Pengarahan untuk persiapan ibadah Haji."],
    ],
  },
  {
    number: "02",
    title: "Puncak ibadah Haji",
    period: "8–13 Dzulhijjah",
    steps: [
      ["8", "Makkah → Mina", "Persiapan pelaksanaan Haji."],
      ["9", "Mina → Arafah → Muzdalifah", "Wukuf dan mabit di Muzdalifah."],
      ["10", "Mina", "Jumrah Aqabah dan tawaf ifadah."],
      ["11", "Mina", "Mabit dan jumrah Ula, Wustha, Aqabah."],
      ["12", "Mina", "Mabit dan jumrah Ula, Wustha, Aqabah."],
      ["13", "Mina → Makkah", "Kembali ke apartemen dan beristirahat."],
    ],
  },
  {
    number: "03",
    title: "Hari-hari di Madinah",
    period: "14–21 Dzulhijjah",
    steps: [
      ["14", "Makkah → Madinah", "Salat lima waktu di Masjid Nabawi."],
      ["15", "Madinah", "Salat lima waktu di Masjid Nabawi."],
      ["16", "Madinah", "Salat di Masjid Nabawi, ziarah makam Rasulullah dan Raudhah."],
      ["17", "Madinah", "Salat lima waktu di Masjid Nabawi."],
      ["18", "Madinah", "Ziarah ke tempat bersejarah di Madinah."],
      ["19–21", "Madinah", "Salat lima waktu di Masjid Nabawi."],
    ],
  },
  {
    number: "04",
    title: "Kembali ke Makkah dan pulang",
    period: "22–28 Dzulhijjah",
    steps: [
      ["22", "Madinah → Makkah", "Perjalanan dengan bus AC."],
      ["23", "Makkah", "Salat lima waktu di Masjidil Haram."],
      ["24", "Makkah", "Ziarah ke tempat bersejarah di Makkah."],
      ["25–26", "Makkah", "Salat lima waktu di Masjidil Haram."],
      ["27", "Makkah → Jeddah", "Tawaf wada dan perjalanan menuju Jeddah."],
      ["28", "Jeddah → Jakarta", "Penerbangan kembali ke Tanah Air."],
    ],
  },
] as const;

const requirements = [
  "Mengisi formulir pendaftaran yang disediakan PIHK.",
  "Menyetorkan DP sesuai paket yang dipilih untuk proses porsi Haji.",
  "Menyerahkan fotokopi KTP, Kartu Keluarga, surat nikah, dan akta lahir.",
  "Menyerahkan foto berwarna terbaru berlatar putih, wajah tampak 80%, tanpa kacamata. Untuk wanita mengenakan kerudung; tidak menggunakan pakaian dinas. Ukuran 3×4 sebanyak 45 lembar dan 4×6 sebanyak 15 lembar.",
  "Mengisi surat pernyataan daftar tunggu Haji.",
  "Membuat surat kuasa pengurusan Haji ke Kementerian Agama untuk MDL525.",
];

const cancellation = [
  ["25%", "Jika pembatalan dilakukan setelah setoran awal ke Kementerian Agama RI."],
  ["50%", "Jika pembatalan dilakukan setelah setoran kedua ke Kementerian Agama RI."],
  ["90%", "Jika pembatalan dilakukan setelah persiapan keberangkatan selesai."],
  ["US$500", "Per jamaah jika berpindah ke travel lain."],
];

export default function HajiPlusPage() {
  return (
    <main className={styles.page}>
      <a className="skip-link" href="#ringkasan-haji">Langsung ke informasi Haji Plus</a>

      <section className={styles.hero} aria-labelledby="haji-title">
        <div className={styles.heroPhoto}>
          <Image
            src="/images/mandala/kaaba-cover.jpg"
            alt="Ka’bah di Masjidil Haram"
            fill
            priority
            sizes="(max-width: 800px) 100vw, 54vw"
          />
        </div>
        <div className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <p className={styles.kicker}>Program Haji Plus Mandala 525</p>
            <h1 id="haji-title">Niat Haji tak harus <em>menunggu tanpa rencana.</em></h1>
            <p className={styles.heroLead}>
              Kenali program, fasilitas, dan tahapan pendaftaran Haji Plus dalam satu halaman.
              Tim Mandala siap membantu Anda menyiapkan langkahnya.
            </p>
            <div className={styles.heroActions}>
              <a className={styles.primaryButton} href={consultationUrl} target="_blank" rel="noreferrer">
                Konsultasi porsi Haji
              </a>
              <a className={styles.heroTextLink} href="#ringkasan-haji">Lihat rincian program</a>
            </div>
          </div>
        </div>
        <p className={styles.heroCaption}>Haji Plus · Mandala 525 Islamic Tour</p>
      </section>

      <section className={styles.summary} id="ringkasan-haji" aria-labelledby="summary-title">
        <div className={styles.shell}>
          <div className={styles.summaryHeading}>
            <div>
              <p className={styles.kicker}>Gambaran program</p>
              <h2 id="summary-title">Rencanakan porsi,<br /><em>persiapkan ibadah.</em></h2>
            </div>
            <p>Angka berikut berasal dari materi promosi Mandala. Masa tunggu dan biaya akhir perlu dikonfirmasi saat konsultasi.</p>
          </div>
          <div className={styles.keyFacts}>
            <div className={styles.waitFact}>
              <span>Perkiraan masa tunggu</span>
              <strong>7–9 <small>tahun</small></strong>
              <p>Estimasi pada publikasi Mandala, bukan jaminan tanggal keberangkatan.</p>
            </div>
            <div className={styles.depositFact}>
              <span>DP porsi Haji Plus mulai</span>
              <strong>US$4.500</strong>
              <p>Nilai rupiah dan total biaya mengikuti ketentuan saat pendaftaran.</p>
            </div>
            <div className={styles.stayFact}>
              <span>Selama di Tanah Suci</span>
              <strong>Hotel setaraf bintang 5</strong>
              <p>Di Makkah dan Madinah, dengan hotel transit VIP Maktab 110–115 sesuai materi program.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.facilities} aria-labelledby="facilities-title">
        <div className={styles.shell}>
          <div className={styles.facilityIntro}>
            <p className={styles.kicker}>Yang tercakup dalam materi program</p>
            <h2 id="facilities-title">Persiapan lengkap, <em>perjalanan lebih tenang.</em></h2>
            <p>Rangkaian perjalanan direncanakan 24–28 hari. Fasilitas aktual dan rincian paket disampaikan tim Mandala sebelum pendaftaran.</p>
          </div>
          <div className={styles.facilityColumns}>
            <div>
              <h3>Perjalanan & akomodasi</h3>
              <ul>
                <li>Tiket pesawat pulang-pergi.</li>
                <li>Akomodasi atau hotel selama program.</li>
                <li>Transportasi dengan driver dan bus AC 47 kursi.</li>
                <li>Hotel transit VIP Maktab 110–115.</li>
              </ul>
            </div>
            <div>
              <h3>Ibadah & pendampingan</h3>
              <ul>
                <li>Konsumsi fullboard dengan menu Indonesia.</li>
                <li>Muthawwif dan pembimbing ibadah berbahasa Indonesia.</li>
                <li>Manasik dan perlengkapan Haji.</li>
                <li>Visa Haji, asuransi perjalanan, serta air Zamzam 5 liter per jamaah.</li>
              </ul>
            </div>
          </div>
          <p className={styles.license}>Nomor izin PIHK yang tercantum pada materi Mandala: <strong>91203016521180003</strong>. Silakan verifikasi status dan cakupan izin kepada tim Mandala atau kanal resmi Kementerian Agama.</p>
        </div>
      </section>

      <section className={styles.itinerary} id="rencana-perjalanan" aria-labelledby="itinerary-title">
        <div className={styles.shell}>
          <div className={styles.itineraryHeading}>
            <div>
              <p className={styles.kicker}>Rencana perjalanan</p>
              <h2 id="itinerary-title">Dari keberangkatan <em>hingga kembali.</em></h2>
            </div>
            <p>Rangkaian 2–28 Dzulhijjah dari materi Mandala. Urutan kegiatan dan tanggal dapat berubah mengikuti operasional serta ketentuan penyelenggaraan Haji.</p>
          </div>
          <div className={styles.phaseList}>
            {phases.map((phase) => (
              <section className={styles.phase} key={phase.number} aria-labelledby={`phase-${phase.number}`}>
                <div className={styles.phaseTitle}>
                  <span>{phase.number}</span>
                  <div>
                    <h3 id={`phase-${phase.number}`}>{phase.title}</h3>
                    <p>{phase.period}</p>
                  </div>
                </div>
                <ol className={styles.stepList}>
                  {phase.steps.map(([date, route, activity]) => (
                    <li key={`${phase.number}-${date}`}>
                      <span className={styles.stepDate}>{date} <small>Dzulhijjah</small></span>
                      <span className={styles.stepRoute}>{route}</span>
                      <span className={styles.stepActivity}>{activity}</span>
                    </li>
                  ))}
                </ol>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.terms} aria-labelledby="terms-title">
        <div className={styles.shell}>
          <div className={styles.termsHeading}>
            <p className={styles.kicker}>Sebelum mendaftar</p>
            <h2 id="terms-title">Siapkan dokumen, <em>pahami ketentuannya.</em></h2>
          </div>
          <div className={styles.termsGrid}>
            <div className={styles.requirements}>
              <h3>Syarat pendaftaran</h3>
              <ol>{requirements.map((item) => <li key={item}>{item}</li>)}</ol>
            </div>
            <div className={styles.cancellation}>
              <h3>Ketentuan pembatalan pada materi</h3>
              <div className={styles.penaltyList}>
                {cancellation.map(([value, description]) => (
                  <div key={value}><strong>{value}</strong><p>{description}</p></div>
                ))}
              </div>
              <p className={styles.termsNote}>Minta dokumen perjanjian dan rincian tertulis terbaru sebelum menyetor dana. Ketentuan yang berlaku mengikuti perjanjian resmi saat pendaftaran.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.finalCta} aria-labelledby="cta-title">
        <div className={styles.shell}>
          <div>
            <p className={styles.kicker}>Mulai dari percakapan</p>
            <h2 id="cta-title">Tanyakan porsi dan langkah pendaftarannya.</h2>
            <p>Tim Mandala dapat menjelaskan estimasi tunggu, biaya, persyaratan, dan fasilitas yang berlaku untuk rencana Haji Anda.</p>
          </div>
          <a className={styles.primaryButton} href={consultationUrl} target="_blank" rel="noreferrer">Hubungi Mandala via WhatsApp</a>
        </div>
      </section>
    </main>
  );
}

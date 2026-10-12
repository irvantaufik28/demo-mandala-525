import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Icon, whatsapp } from "@/components/mandala-ui";
import { packages } from "../packages";
import styles from "../paket.module.css";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return packages.map((item) => ({ slug: item.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = packages.find((entry) => entry.id === slug);
  if (!item) return { title: "Paket tidak ditemukan | Mandala 525" };
  return {
    title: `${item.name} | Mandala 525 Islamic Tour`,
    description: `Detail ${item.name}, berangkat ${item.date}, ${item.duration}, harga mulai Rp ${item.price} juta per jamaah.`,
  };
}

export default async function DetailPaketPage({ params }: Props) {
  const { slug } = await params;
  const item = packages.find((entry) => entry.id === slug);
  if (!item) notFound();

  return (
    <main className={styles.detailPage}>
      <div className="container">
        <a className={styles.backLink} href="/paket-umroh">← Kembali ke pilihan paket</a>
        <div className={styles.detailGrid}>
          <div className={styles.detailImage}>
            <Image
              src={item.image}
              alt={`Materi asli ${item.name}, keberangkatan ${item.date}`}
              width={item.width}
              height={item.height}
              sizes="(max-width: 700px) 100vw, 42vw"
              priority
            />
          </div>
          <div className={styles.detailCopy}>
            <p className={styles.kicker}>Paket umroh Mandala 525</p>
            <h1>{item.name}</h1>
            <p className={styles.detailLead}>
              Keberangkatan {item.date} bersama Saudia tanpa transit.
              Lihat rincian perjalanan dan tanyakan ketersediaan terbaru kepada tim Mandala.
            </p>
            <dl className={styles.detailFacts}>
              <div><dt>Keberangkatan</dt><dd>{item.date}</dd></div>
              <div><dt>Durasi</dt><dd>{item.duration}</dd></div>
              <div><dt>Kapasitas tercantum</dt><dd>{item.seats}</dd></div>
              <div><dt>Hotel</dt><dd>{item.hotels}</dd></div>
              <div><dt>Harga acuan</dt><dd>Per jamaah, kamar quad (4 orang)</dd></div>
            </dl>
            <div className={styles.detailPrice}>
              <span>Harga mulai</span>
              <strong>Rp {item.price} <small>juta</small></strong>
            </div>
            <div className={styles.detailActions}>
              <a
                href={whatsapp(`Assalamu’alaikum, saya ingin bertanya tentang ${item.name}, keberangkatan ${item.date}. Mohon rincian dan ketersediaan terbaru.`)}
                target="_blank"
                rel="noreferrer"
              >
                <Icon name="chat" /> Tanya paket ini
              </a>
              <a href={item.image} target="_blank" rel="noreferrer">
                Buka gambar penuh <Icon name="diagonal" />
              </a>
            </div>
            <p className={styles.detailNote}>
              Harga, tanggal, hotel, dan ketersediaan dapat berubah. Pastikan rincian akhir kepada admin.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

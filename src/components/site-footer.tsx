import Link from "next/link";
import { Brand, Icon, instagram, whatsapp } from "./mandala-ui";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Brand />
            <p>Menemani langkah suci Anda dengan<br />kenyamanan dan sepenuh hati.</p>
            <a href={instagram} target="_blank" rel="noreferrer"><Icon name="instagram" /> @mandala525islamictour</a>
          </div>
          <div>
            <h3>Jelajahi Mandala</h3>
            <Link href="/tentang">Tentang kami</Link>
            <Link href="/paket-umroh">Paket umroh</Link>
            <Link href="/haji-plus">Haji Plus</Link>
            <Link href="/tabungan-umroh">Nabung Umroh</Link>
            <Link href="/visit-our-office">Visit Our Office</Link>
            <Link href="/#cerita">Cerita perjalanan</Link>
          </div>
          <div>
            <h3>Temui Kami</h3>
            <p>Jl. Sudirman No. 30, Copong<br />Garut, Jawa Barat</p>
            <a href="https://www.google.com/maps/search/?api=1&query=Mandala+525+Islamic+Tour+Garut" target="_blank" rel="noreferrer">Petunjuk arah <Icon name="diagonal" /></a>
            <Link href="/visit-our-office">Lihat kantor Garut <Icon name="arrow" /></Link>
            <p>Hadir juga di Bandung & Pameungpeuk.</p>
          </div>
          <div>
            <h3>Mari Terhubung</h3>
            <a href={whatsapp()} target="_blank" rel="noreferrer">0857 9340 3395 <Icon name="diagonal" /></a>
            <p>Konsultasi program umroh</p>
            <a href="https://wa.me/6281111119525" target="_blank" rel="noreferrer">0811 1111 9525 <Icon name="diagonal" /></a>
            <p>Konsultasi Haji Plus</p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Mandala 525 Islamic Tour.</span>
          <span>Demo desain · Informasi paket perlu konfirmasi kembali.</span>
          <Link href="/#beranda">Kembali ke atas ↑</Link>
        </div>
      </div>
    </footer>
  );
}

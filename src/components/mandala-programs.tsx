"use client";

import { useState } from "react";
import Image from "next/image";
import { Icon, whatsapp } from "./mandala-ui";

const programs = [
  { name: "Umroh Akhir Tahun", category: "Umroh Reguler", date: "2 Desember 2026", days: "9 hari", price: "33,5", image: "kaaba-cover.jpg", label: "PERJALANAN PILIHAN", benefit: "Kesempatan umroh 2 kali", source: "Dd3b_MyE5h1", fullSeat: true },
  { name: "Umroh Awal Tahun", category: "Umroh Reguler", date: "5 Januari 2027", days: "12 hari", price: "38", image: "kaaba.jpg", label: "TERMASUK ZIARAH THAIF", benefit: "Lebih lama di Tanah Suci", source: "DeOfxNqG3oN", fullSeat: true },
  { name: "Umroh Suci Ramadhan", category: "Umroh Ramadhan", date: "4 Februari 2027", days: "12 hari", price: "43", image: "kaaba-cover.jpg", label: "MOMEN PENUH BERKAH", benefit: "Ibadah di bulan yang dirindukan", source: "Dd3ZNQ1EdBv", fullSeat: false },
];

export default function MandalaPrograms() {
  const [filter, setFilter] = useState("Semua Program");

  return (
    <>
      <div className="program-tabs" aria-label="Filter program">
        {["Semua Program", "Umroh Reguler", "Umroh Ramadhan"].map((item) => (
          <button key={item} onClick={() => setFilter(item)} aria-pressed={filter === item} className={filter === item ? "active" : ""}>
            {item}
          </button>
        ))}
      </div>
      <div className="program-grid">
        {programs.filter((p) => filter === "Semua Program" || p.category === filter).map((p, i) => (
          <article className="program-card" key={p.name}>
            <div className={`program-image program-image-${i}`}>
              <Image src={`/images/mandala/${p.image}`} alt="Suasana Masjidil Haram dan Ka’bah di Makkah" fill sizes="(max-width: 700px) 100vw, 33vw" />
              <span className="program-badge">{p.label}</span>
              {p.fullSeat && <span className="program-full-badge">FULL SEAT</span>}
              <span className="image-location"><Icon name="pin" /> Makkah · Madinah</span>
            </div>
            <div className="program-content">
              <span className="program-category">{p.category}</span>
              <h3>{p.name}</h3>
              <div className="program-meta">
                <span><Icon name="calendar" />{p.date}</span>
                <span><Icon name="clock" />{p.days}</span>
              </div>
              <div className="program-includes">
                <span><Icon name="plane" /> Saudia · Tanpa transit</span>
                <span><Icon name="hotel" /> Azka Safa & Mirage Salam / setaraf</span>
                <span><Icon name="check" />{p.benefit}</span>
              </div>
              <div className="program-price">
                <div>
                  <small>{p.price ? "Mulai dari / jamaah" : "Rencanakan perjalanan Anda"}</small>
                  <strong>{p.price ? <><span>Rp</span> {p.price} <em>juta</em></> : <em>Hubungi kami</em>}</strong>
                </div>
                <a
                  className="round-link program-seat-link"
                  href={whatsapp(p.fullSeat
                    ? `Assalamu’alaikum, saya ingin bertanya tentang daftar tunggu ${p.name}, keberangkatan ${p.date}.`
                    : `Assalamu’alaikum, saya ingin bertanya ketersediaan seat ${p.name}, keberangkatan ${p.date}.`)}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={p.fullSeat ? `Tanya seat dan daftar tunggu ${p.name}` : `Tanya seat ${p.name}`}
                >
                  <Icon name="chat" /> Tanya seat
                </a>
              </div>
              <a className="brochure-link" href={`https://www.instagram.com/p/${p.source}/`} target="_blank" rel="noreferrer">
                Lihat brosur di Instagram <Icon name="diagonal" />
              </a>
            </div>
          </article>
        ))}
      </div>
      <p className="package-note">Referensi dari publikasi Mandala. Harga mulai, jadwal, hotel, dan ketersediaan mengikuti konfirmasi tim kami.</p>
    </>
  );
}

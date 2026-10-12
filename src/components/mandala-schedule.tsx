"use client";

import { useState } from "react";
import { Icon, whatsapp } from "./mandala-ui";

type Departure = {
  day: string;
  month: string;
  year: string;
  date: string;
  duration: string;
  name: string;
  type: "Reguler" | "Ramadhan";
  price: string;
  source: string;
  benefit: string;
  fullSeat: boolean;
};

// Referensi statis dari publikasi Mandala; seat, harga final, dan tanggal wajib dikonfirmasi.
const departures: Departure[] = [
  { day: "11", month: "NOV", year: "2026", date: "11 November 2026", duration: "9 hari", name: "Umroh November", type: "Reguler", price: "33,5", source: "DeTX4D7kXbJ", benefit: "Penerbangan Saudia langsung", fullSeat: true },
  { day: "02", month: "DES", year: "2026", date: "2 Desember 2026", duration: "9 hari", name: "Umroh Akhir Tahun", type: "Reguler", price: "33,5", source: "Dd3b_MyE5h1", benefit: "Kesempatan umroh 2 kali", fullSeat: true },
  { day: "05", month: "JAN", year: "2027", date: "5 Januari 2027", duration: "12 hari", name: "Umroh Awal Tahun", type: "Reguler", price: "38", source: "DeOfxNqG3oN", benefit: "Termasuk ziarah Thaif", fullSeat: true },
  { day: "04", month: "FEB", year: "2027", date: "4 Februari 2027", duration: "12 hari", name: "Umroh Suci Ramadhan", type: "Ramadhan", price: "43", source: "Dd3ZNQ1EdBv", benefit: "Program Ramadhan 12 hari", fullSeat: false },
  { day: "18", month: "FEB", year: "2027", date: "18 Februari 2027", duration: "9 hari", name: "Umroh Suci Ramadhan", type: "Ramadhan", price: "40", source: "Dd3ZNQ1EdBv", benefit: "Program Ramadhan 9 hari", fullSeat: false },
];

const months = [
  { key: "semua", label: "Semua jadwal" },
  { key: "NOV 2026", label: "November 2026" },
  { key: "DES 2026", label: "Desember 2026" },
  { key: "JAN 2027", label: "Januari 2027" },
  { key: "FEB 2027", label: "Februari 2027" },
];

export default function MandalaSchedule() {
  const [month, setMonth] = useState("semua");
  const [type, setType] = useState("Semua program");
  const visible = departures.filter((departure) =>
    (month === "semua" || month === `${departure.month} ${departure.year}`) &&
    (type === "Semua program" || type === departure.type)
  );

  return <section className="schedule-section" id="jadwal" aria-labelledby="schedule-title">
    <div className="schedule-heading">
      <div><div className="eyebrow">JADWAL KEBERANGKATAN MANDALA</div><h2 id="schedule-title">Pilih tanggalnya.<br /><em>Kami temani langkahnya.</em></h2></div>
      <p>Bandingkan waktu, durasi, dan harga awal dalam satu tempat. Pilih jadwal yang paling sesuai dengan rencana ibadah Anda.</p>
    </div>

    <div className="schedule-app">
      <div className="schedule-toolbar">
        <div className="schedule-months" role="group" aria-label="Pilih bulan keberangkatan">{months.map((item) => <button key={item.key} type="button" className={month === item.key ? "selected" : ""} aria-pressed={month === item.key} onClick={() => setMonth(item.key)}>{item.label}{item.key !== "semua" && <span>{departures.filter((departure) => item.key === `${departure.month} ${departure.year}`).length} jadwal</span>}</button>)}</div>
        <div className="schedule-categories" role="group" aria-label="Pilih jenis program">{["Semua program", "Reguler", "Ramadhan"].map((item) => <button key={item} type="button" className={type === item ? "selected" : ""} aria-pressed={type === item} onClick={() => setType(item)}>{item}</button>)}</div>
        <div className="schedule-legend"><span><i /> Harga dan jadwal dari publikasi Mandala</span><span><i /> Status Full Seat November–Januari</span><strong>{visible.length} keberangkatan ditampilkan</strong></div>
      </div>

      <div className="departure-list">{visible.length ? visible.map((departure) => <article className={departure.fullSeat ? "departure-row departure-row-detailed is-full" : "departure-row departure-row-detailed"} key={departure.date}>
        <div className="departure-date"><div className="departure-date-main"><strong>{departure.day}</strong><span>{departure.month}<small>{departure.year}</small></span></div><em>{departure.duration} perjalanan</em><span className="departure-date-badge">JADWAL REFERENSI</span><span className={departure.fullSeat ? "departure-seat-badge is-full" : "departure-seat-badge"}>{departure.fullSeat ? "FULL SEAT" : "CEK SEAT"}</span></div>
        <div className="departure-program"><span className={departure.type === "Ramadhan" ? "departure-type ramadhan" : "departure-type"}>{departure.type}</span><h3>{departure.name}</h3><p><Icon name="plane" /> Saudia · Tanpa transit</p></div>
        <div className="departure-options">
          <div className="departure-option"><span className="room-pill">QUAD · 4 ORANG</span><div className="room-hotels"><strong>Azka Safa <span>Makkah</span></strong><strong>Mirage Salam <span>Madinah</span></strong></div><div className="room-price"><strong>Rp {departure.price} <small>juta</small></strong><span>PER JAMAAH · MULAI</span></div></div>
          <div className="departure-option"><span className="room-pill room-pill-featured">TRIPLE / DOUBLE</span><div className="room-hotels"><strong>Pilihan kamar lainnya</strong><small>Harga dan fasilitas sesuai penawaran</small></div><div className="room-price"><strong className="room-price-request">Tanya admin</strong><span>HARGA TERBARU</span></div></div>
          <a className="departure-source" href={`https://www.instagram.com/p/${departure.source}/`} target="_blank" rel="noreferrer">Lihat sumber jadwal dan harga <Icon name="diagonal" /></a>
        </div>
        <a className={departure.fullSeat ? "departure-action departure-action-waitlist" : "departure-action departure-action-premium"} href={whatsapp(departure.fullSeat ? `Assalamu’alaikum, saya ingin masuk daftar tunggu ${departure.name}, keberangkatan ${departure.date}.` : `Assalamu’alaikum, saya ingin cek harga dan ketersediaan seat ${departure.name}, keberangkatan ${departure.date}.`)} target="_blank" rel="noreferrer"><Icon name="chat" /> {departure.fullSeat ? "Daftar tunggu" : "Tanya seat"} <Icon name="arrow" /></a>
      </article>) : <div className="schedule-empty"><Icon name="calendar" /><strong>Belum ada jadwal pada pilihan ini.</strong><p>Pilih bulan atau jenis program lain untuk melihat keberangkatan Mandala.</p><button type="button" onClick={() => { setMonth("semua"); setType("Semua program"); }}>Lihat semua jadwal</button></div>}</div>
    </div>
    <p className="schedule-disclaimer">Tampilan demo dengan referensi publikasi Mandala per Oktober 2026. Harga, tanggal, fasilitas, dan ketersediaan dapat berubah; konfirmasi akhir melalui admin.</p>
  </section>;
}

import Link from "next/link";

export default function AdminShell({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <aside style={{ width: 200, padding: "1rem", borderRight: "1px solid #eee", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <strong>Admin</strong>
        <Link href="/admin">Dashboard</Link>
        <Link href="/admin/pengaturan">Pengaturan</Link>
      </aside>
      <div style={{ flex: 1 }}>{children}</div>
    </div>
  );
}

import type { Metadata } from "next";
import "../index.css";

export const metadata: Metadata = {
  title: "Pemerintah Daerah Sumbawa - Website Resmi",
  description:
    "Portal resmi pemerintah daerah Kabupaten Sumbawa. Layanan publik, informasi berita, artikel, agenda kegiatan, harga pasar, dan potensi daerah.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className="antialiased min-h-screen bg-white"
        suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

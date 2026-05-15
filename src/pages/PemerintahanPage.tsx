import { useParams, Link } from "react-router";
import { useEffect } from "react";
import { ArrowLeft, Calendar, Clock, User, ChevronRight } from "lucide-react";
import { Button } from "../components/ui/button";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import {
  pemerintahanData,
  getPemerintahanById,
} from "../data/pemerintahanData";

export function PemerintahanPage() {
  const { slug } = useParams<{ slug: string }>();
  const activeSlug = slug || "bupati";
  const data = getPemerintahanById(activeSlug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const navItems = [
    { id: "bupati", label: "Bupati", icon: "👨‍💼" },
    { id: "wakil-bupati", label: "Wakil Bupati", icon: "👔" },
    { id: "visi-misi", label: "Visi dan Misi", icon: "🎯" },
    { id: "lembaga-eksekutif", label: "Lembaga Eksekutif", icon: "🏛️" },
  ];

  if (!data) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <main className="pt-24 pb-20">
          <div className="max-w-7xl mx-auto px-4 text-center py-20">
            <h1 className="text-3xl font-bold mb-4">Halaman Tidak Ditemukan</h1>
            <Link to="/">
              <Button className="bg-[#84CC16] hover:bg-[#84CC16]/90 text-white shadow-md shadow-[#84CC16]/30">
                Kembali ke Beranda
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <div className="mb-8">
            <Link to="/">
              <Button
                variant="outline"
                className="border-gray-300 hover:border-[#84CC16] hover:text-[#84CC16]">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Kembali ke Beranda
              </Button>
            </Link>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* SIDEBAR - Kartu Informasi Halaman sudah dihapus dari sini */}
            <aside className="lg:col-span-3 order-2 lg:order-1">
              <div className="sticky top-24">
                {/* Menu Navigasi Vertikal */}
                <div className="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden">
                  <div className="p-5 bg-gray-50 border-b border-gray-200">
                    <h3 className="text-sm font-extrabold text-gray-700 uppercase tracking-widest">
                      Menu Pemerintahan
                    </h3>
                  </div>
                  <div className="flex flex-col py-2">
                    {navItems.map((item) => (
                      <Link
                        key={item.id}
                        to={`/profil/pemerintahan/${item.id}`}
                        className={`flex items-center gap-4 px-6 py-4 text-base font-bold border-l-4 transition-all ${
                          activeSlug === item.id
                            ? "border-[#84CC16] bg-[#84CC16]/5 text-[#84CC16]"
                            : "border-transparent text-gray-600 hover:text-[#84CC16] hover:bg-gray-50"
                        }`}>
                        <span className="text-xl filter drop-shadow-sm">
                          {item.icon}
                        </span>
                        <span>{item.label}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            {/* MAIN CONTENT */}
            <article className="lg:col-span-9 order-1 lg:order-2">
              <div className="bg-white rounded-xl border border-gray-200 shadow-lg overflow-hidden">
                {/* Breadcrumb */}
                <div className="px-8 pt-8">
                  <div className="flex items-center gap-2 text-sm text-gray-500 flex-wrap">
                    <Link
                      to="/"
                      className="hover:text-[#84CC16] transition-colors">
                      Beranda
                    </Link>
                    <ChevronRight className="w-3.5 h-3.5" />
                    <span>Profil Daerah</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                    <span>Pemerintahan</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                    <span className="text-[#84CC16] font-medium">
                      {data.title}
                    </span>
                  </div>
                </div>

                {/* Judul Utama Halaman */}
                <h1 className="text-3xl md:text-4xl text-black px-8 mt-4 mb-4 leading-tight font-bold">
                  {data.title}
                </h1>

                {/* INFORMASI HALAMAN BARU - Dipindah ke bawah judul dalam bentuk baris horizontal yang rapi */}
                {/* INFORMASI HALAMAN - Disusun ke bawah (vertikal) dengan rapi */}
                <div className="px-8 pb-4 flex flex-col space-y-2.5 text-sm text-gray-600 border-l-2 border-[#84CC16] ml-8 mb-6">
                  {/* Item Penerbit */}
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-[#84CC16]" />
                    <span>{data.author}</span>
                  </div>

                  {/* Item Pembaruan */}
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#84CC16]" />
                    <span>{data.lastUpdated}</span>
                  </div>

                  {/* Item Waktu Baca */}
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#84CC16]" />
                    <span>{data.readTime}</span>
                  </div>
                </div>
                {/* Banner Gambar Utama */}
                <div className="px-8 pb-6">
                  <img
                    src={data.heroImage}
                    alt={data.title}
                    className="w-full h-64 md:h-96 object-cover rounded-xl"
                  />
                </div>

                {/* Konten Utama */}
                <div className="px-8 pb-8">
                  {/* Excerpt / Ringkasan */}
                  <p className="text-xl text-gray-700 leading-relaxed mb-8 font-medium border-l-4 border-[#84CC16] pl-6 italic">
                    {data.excerpt}
                  </p>

                  {/* 1. Tipe Biodata */}
                  {data.type === "biodata" && data.biodata && (
                    <div className="space-y-8 mt-6">
                      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-md">
                        <div className="bg-linear-to-r from-[#84CC16] to-[#84CC16]/90 px-6 py-4">
                          <h2 className="text-xl font-bold text-white">
                            Keterangan Perorangan
                          </h2>
                        </div>
                        <div className="p-6">
                          <div className="space-y-4">
                            {data.biodata.map((item, idx) => (
                              <div
                                key={idx}
                                className="grid grid-cols-1 md:grid-cols-3 gap-2 py-3 border-b border-gray-100 last:border-0">
                                <div className="font-semibold text-gray-700">
                                  {item.label}
                                </div>
                                <div className="md:col-span-2 text-gray-800">
                                  {typeof item.value === "string" ? (
                                    item.value
                                  ) : (
                                    <div className="space-y-1">
                                      {item.value.jalan && (
                                        <div>Jalan: {item.value.jalan}</div>
                                      )}
                                      {item.value.kelDesa && (
                                        <div>
                                          Kel/Desa: {item.value.kelDesa}
                                        </div>
                                      )}
                                      {item.value.kecamatan && (
                                        <div>
                                          Kecamatan: {item.value.kecamatan}
                                        </div>
                                      )}
                                      {item.value.kabKota && (
                                        <div>
                                          Kab/Kota: {item.value.kabKota}
                                        </div>
                                      )}
                                      {item.value.provinsi && (
                                        <div>
                                          Provinsi: {item.value.provinsi}
                                        </div>
                                      )}
                                    </div>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Pendidikan */}
                      {data.pendidikan && data.pendidikan.length > 0 && (
                        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-md">
                          <div className="bg-linear-to-r from-[#84CC16] to-[#84CC16]/90 px-6 py-4">
                            <h2 className="text-xl font-bold text-white">
                              Riwayat Pendidikan
                            </h2>
                          </div>
                          <div className="p-6">
                            <div className="space-y-4">
                              {data.pendidikan.map((item, idx) => (
                                <div
                                  key={idx}
                                  className="grid grid-cols-1 md:grid-cols-3 gap-2 py-3 border-b border-gray-100 last:border-0">
                                  <div className="font-semibold text-gray-700">
                                    {item.jenjang}
                                  </div>
                                  <div className="md:col-span-2 text-gray-800 space-y-1">
                                    {item.nama && (
                                      <div>Nama Institusi: {item.nama}</div>
                                    )}
                                    {item.tahun && (
                                      <div>Tahun Kelulusan: {item.tahun}</div>
                                    )}
                                    {item.tempat && (
                                      <div>Tempat: {item.tempat}</div>
                                    )}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* 2. Tipe Visi Misi */}
                  {data.type === "visi-misi" && data.visiMisi && (
                    <div className="space-y-12 mt-6">
                      {/* Visi */}
                      <section>
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-8 h-8 rounded-full bg-[#84CC16] flex items-center justify-center text-white font-bold text-sm">
                            1
                          </div>
                          <h2 className="text-xl md:text-2xl font-bold text-black">
                            Visi Pemerintah Kabupaten Sumbawa
                          </h2>
                        </div>
                        <div className="bg-linear-to-br from-[#84CC16]/10 to-[#84CC16]/5 border border-[#84CC16]/30 rounded-2xl p-8 text-center shadow-sm">
                          <p className="text-xl md:text-2xl font-black text-gray-800 leading-relaxed">
                            "{data.visiMisi.visi}"
                          </p>
                        </div>

                        <div className="mt-6 space-y-4">
                          {data.visiMisi.visiPenjelasan.map((item, idx) => (
                            <div
                              key={idx}
                              className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
                              <h3 className="text-lg font-bold text-[#84CC16] mb-2">
                                {item.title}
                              </h3>
                              <p className="text-gray-700 text-sm leading-relaxed">
                                {item.description}
                              </p>
                            </div>
                          ))}
                        </div>
                      </section>

                      {/* Misi */}
                      <section>
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-8 h-8 rounded-full bg-[#84CC16] flex items-center justify-center text-white font-bold text-sm">
                            2
                          </div>
                          <h2 className="text-xl md:text-2xl font-bold text-black">
                            Misi Pemerintah Kabupaten Sumbawa
                          </h2>
                        </div>
                        <div className="space-y-4">
                          {data.visiMisi.misi.map((item, idx) => (
                            <div
                              key={idx}
                              className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                              <div className="bg-[#84CC16]/10 px-5 py-2.5 border-b border-[#84CC16]/20">
                                <div className="flex items-center gap-2">
                                  <div className="w-6 h-6 rounded-full bg-[#84CC16] flex items-center justify-center text-white font-bold text-xs">
                                    {idx + 1}
                                  </div>
                                  <h3 className="font-bold text-gray-800">
                                    {item.title}
                                  </h3>
                                </div>
                              </div>
                              <div className="px-5 py-3">
                                <p className="text-gray-700 text-sm leading-relaxed">
                                  {item.description}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </section>

                      {/* Program Utama */}
                      <section>
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-8 h-8 rounded-full bg-[#84CC16] flex items-center justify-center text-white font-bold text-sm">
                            3
                          </div>
                          <h2 className="text-xl md:text-2xl font-bold text-black">
                            12 Program Unggulan
                          </h2>
                        </div>
                        <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                          <p className="text-sm text-gray-500 mb-4 font-medium">
                            Pemerintahan Bupati dan Wakil Bupati Sumbawa Periode
                            2025-2030 (Jarot-Ansori)
                          </p>
                          <ol className="space-y-2.5">
                            {data.visiMisi.programUnggulan.map(
                              (program, idx) => (
                                <li
                                  key={idx}
                                  className="flex gap-3 items-start text-sm">
                                  <span className="shrink-0 w-6 h-6 rounded-full bg-[#84CC16] text-white flex items-center justify-center font-bold text-xs">
                                    {idx + 1}
                                  </span>
                                  <span className="text-gray-700 leading-relaxed pt-0.5">
                                    {program}
                                  </span>
                                </li>
                              ),
                            )}
                          </ol>
                        </div>
                      </section>
                    </div>
                  )}

                  {/* 3. Tipe Tabel */}
                  {data.type === "table" && data.tableData && (
                    <div className="space-y-6 mt-6">
                      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-md">
                        <div className="bg-linear-to-r from-[#84CC16] to-[#84CC16]/90 px-6 py-4">
                          <h2 className="text-lg font-bold text-white">
                            Daftar Nama-Nama Pejabat Sekabupaten Sumbawa Tahun
                            2025
                          </h2>
                        </div>
                        <div className="overflow-x-auto">
                          <table className="w-full">
                            <thead>
                              <tr className="bg-gray-50 border-b border-gray-200">
                                {data.tableData.headers.map((header, idx) => (
                                  <th
                                    key={idx}
                                    className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                                    {header}
                                  </th>
                                ))}
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100 text-sm">
                              {data.tableData.rows.map((row, idx) => (
                                <tr
                                  key={idx}
                                  className="hover:bg-gray-50 transition-colors">
                                  <td className="px-6 py-4 text-gray-600 whitespace-nowrap">
                                    {row.no}
                                  </td>
                                  <td className="px-6 py-4 text-gray-800 font-medium">
                                    {row.nama}
                                  </td>
                                  <td className="px-6 py-4 text-gray-700">
                                    {row.jabatan}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Share Buttons */}
                  <div className="mt-12 pt-8 border-t border-gray-200">
                    <p className="text-gray-600 mb-4 text-sm">
                      Bagikan halaman ini:
                    </p>
                    <div className="flex gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-gray-300 hover:border-[#84CC16] hover:text-[#84CC16]">
                        Facebook
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-gray-300 hover:border-[#84CC16] hover:text-[#84CC16]">
                        Twitter / X
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-gray-300 hover:border-[#84CC16] hover:text-[#84CC16]">
                        WhatsApp
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigasi Halaman Sebelum / Selanjutnya */}
              <div className="mt-8 grid md:grid-cols-2 gap-4">
                {(() => {
                  const currentIdx = pemerintahanData.findIndex(
                    (d) => d.id === data.id,
                  );
                  const prev =
                    currentIdx > 0 ? pemerintahanData[currentIdx - 1] : null;
                  const next =
                    currentIdx < pemerintahanData.length - 1
                      ? pemerintahanData[currentIdx + 1]
                      : null;
                  return (
                    <>
                      {prev && (
                        <Link to={`/profil/pemerintahan/${prev.id}`}>
                          <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow group">
                            <p className="text-sm text-gray-600 mb-2">
                              ← Halaman Sebelumnya
                            </p>
                            <h4 className="font-bold text-black group-hover:text-[#84CC16] transition-colors">
                              {prev.title}
                            </h4>
                          </div>
                        </Link>
                      )}
                      {next && (
                        <Link to={`/profil/pemerintahan/${next.id}`}>
                          <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow group text-right">
                            <p className="text-sm text-gray-600 mb-2">
                              Halaman Selanjutnya →
                            </p>
                            <h4 className="font-bold text-black group-hover:text-[#84CC16] transition-colors">
                              {next.title}
                            </h4>
                          </div>
                        </Link>
                      )}
                    </>
                  );
                })()}
              </div>
            </article>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

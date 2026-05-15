import { useParams, Link } from "react-router";
import { useEffect } from "react";
import { ArrowLeft, Calendar, Clock, User, ChevronRight } from "lucide-react";
import { Button } from "../components/ui/button";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { informasiUmumData, getInformasiById } from "../data/informasiUmumData";

export function InformasiUmumPage() {
  const { slug } = useParams<{ slug: string }>();
  const activeSlug = slug || "sejarah";
  const data = getInformasiById(activeSlug);

  // Scroll ke atas saat komponen dimuat atau slug berubah
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const navItems = [
    { id: "sejarah", label: "Sejarah", icon: "📜" },
    { id: "geografi", label: "Geografi", icon: "🗺️" },
    { id: "demografi", label: "Demografi", icon: "👥" },
    { id: "kondisi-sosial", label: "Kondisi Sosial", icon: "🏘️" },
  ];

  if (!data) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <main className="pt-24 pb-20">
          <div className="max-w-7xl mx-auto px-4 text-center py-20">
            <h1 className="text-3xl font-bold mb-4">Halaman Tidak Ditemukan</h1>
            <Link to="/">
              <Button className="bg-[#84CC16] hover:bg-[#84CC16]/90 text-white">
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

          {/* Grid Layout */}
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* SIDEBAR - Navigasi Diperbesar Jaraknya */}
            <aside className="lg:col-span-3 order-2 lg:order-1">
              <div className="sticky top-24">
                <div className="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden">
                  <div className="p-5 bg-gray-50 border-b border-gray-200">
                    <h3 className="text-sm font-extrabold text-gray-700 uppercase tracking-widest">
                      Menu Navigasi
                    </h3>
                  </div>
                  <div className="flex flex-col py-2">
                    {navItems.map((item) => (
                      <Link
                        key={item.id}
                        to={`/profil/gambaran-umum/${item.id}`}
                        className={`flex items-center gap-4 px-6 py-4 text-base font-bold border-l-4 transition-all ${
                          // gap-4: Jarak ikon ke teks lebih longgar
                          // px-6 py-4: Padding item lebih besar dan lega
                          // text-base: Ukuran teks dinaikkan agar lebih jelas
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
                {/* Breadcrumb & Kategori Badges */}
                <div className="px-8 pt-8">
                  <div className="flex items-center gap-2 mb-4 text-sm text-gray-500 flex-wrap">
                    <Link
                      to="/"
                      className="hover:text-[#84CC16] transition-colors">
                      Beranda
                    </Link>
                    <ChevronRight className="w-3.5 h-3.5" />
                    <span>Profil Daerah</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                    <span>Gambaran Umum</span>
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

                {/* INFORMASI ARTIKEL - Dipindah ke bawah judul dengan susunan vertikal (enter) ke bawah */}
                <div className="px-8 pb-4 flex flex-col space-y-2.5 text-sm text-gray-600 border-l-2 border-[#84CC16] ml-8 mb-6">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-[#84CC16]" />
                    <span>{data.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#84CC16]" />
                    <span>{data.lastUpdated}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#84CC16]" />
                    <span> {data.readTime}</span>
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

                {/* Konten Teks Artikel */}
                <div className="px-8 pb-8">
                  {/* Excerpt / Ringkasan */}
                  <p className="text-xl text-gray-700 leading-relaxed mb-8 font-medium border-l-4 border-[#84CC16] pl-6 italic">
                    {data.excerpt}
                  </p>

                  {/* Perulangan Sub-sections isi konten */}
                  <div className="space-y-12 mt-8">
                    {data.subSections.map((section, idx) => (
                      <section
                        key={section.id}
                        id={section.id}
                        className="scroll-mt-28">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-8 h-8 rounded-full bg-[#84CC16] flex items-center justify-center text-white font-bold text-sm">
                            {idx + 1}
                          </div>
                          <h2 className="text-xl md:text-2xl font-bold text-black">
                            {section.title}
                          </h2>
                        </div>

                        {/* Statistik opsional jika ada */}
                        {section.stats && (
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                            {section.stats.map((stat, sIdx) => (
                              <div
                                key={sIdx}
                                className="bg-linear-to-br from-[#84CC16]/10 to-[#84CC16]/5 border border-[#84CC16]/20 rounded-xl p-4 text-center">
                                <div className="text-xl font-black text-[#84CC16] leading-tight">
                                  {stat.value}
                                </div>
                                <div className="text-xs text-gray-600 mt-1 font-medium">
                                  {stat.label}
                                </div>
                              </div>
                            ))}
                          </div>
                        )}

                        <div className="space-y-4 text-gray-700 leading-relaxed">
                          {section.content.map((paragraph, pIdx) => (
                            <p key={pIdx} className="text-lg">
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </section>
                    ))}
                  </div>

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

              {/* Navigasi Topik Sebelum / Selanjutnya */}
              <div className="mt-8 grid md:grid-cols-2 gap-4">
                {(() => {
                  const currentIdx = informasiUmumData.findIndex(
                    (d) => d.id === data.id,
                  );
                  const prev =
                    currentIdx > 0 ? informasiUmumData[currentIdx - 1] : null;
                  const next =
                    currentIdx < informasiUmumData.length - 1
                      ? informasiUmumData[currentIdx + 1]
                      : null;
                  return (
                    <>
                      {prev && (
                        <Link to={`/profil/gambaran-umum/${prev.id}`}>
                          <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow group">
                            <p className="text-sm text-gray-600 mb-2">
                              ← Topik Sebelumnya
                            </p>
                            <h4 className="font-bold text-black group-hover:text-[#84CC16] transition-colors">
                              {prev.title}
                            </h4>
                          </div>
                        </Link>
                      )}
                      {next && (
                        <Link to={`/profil/gambaran-umum/${next.id}`}>
                          <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow group text-right">
                            <p className="text-sm text-gray-600 mb-2">
                              Topik Selanjutnya →
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

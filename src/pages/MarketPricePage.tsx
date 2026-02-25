import { useState, useEffect } from "react";
import { ChevronDown, ArrowLeft, Search } from "lucide-react";
import { Button } from "../components/ui/button";
import { Link } from "react-router";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { allMarketItems } from "../components/MarketPrice";

export function MarketPricePage() {
  const [expandedRow, setExpandedRow] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleStats = (id: number) => {
    setExpandedRow(expandedRow === id ? null : id);
  };

  // Filter items based on search query
  const filteredItems = allMarketItems.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link 
              to="/" 
              className="inline-flex items-center text-white hover:text-gray-300 mb-6 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Kembali ke Beranda
            </Link>
            <h1 className="text-white mb-4">Data Harga Pasar Lengkap</h1>
            <p className="text-gray-300 text-lg">
              Informasi harga pasar untuk semua kebutuhan pokok dan bahan bangunan
            </p>
          </div>
        </div>

        {/* Content Section */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Search Bar */}
            <div className="mb-6">
              <div className="relative max-w-md">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Cari nama barang..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#14B8A6] focus:border-transparent transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600"
                  >
                    <span className="text-sm">Clear</span>
                  </button>
                )}
              </div>
            </div>

            {/* Stats */}
            <div className="mb-8">
              <p className="text-gray-600">
                Menampilkan <span className="text-black">{filteredItems.length}</span> dari <span className="text-black">{allMarketItems.length}</span> item harga pasar
              </p>
            </div>

            {/* Table */}
            <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-6 py-4 text-left text-black">No</th>
                      <th className="px-6 py-4 text-left text-black">Nama Barang</th>
                      <th className="px-6 py-4 text-left text-black">Harga</th>
                      <th className="px-6 py-4 text-right text-black">
                        Statistik
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {filteredItems.length > 0 ? (
                      filteredItems.flatMap((item, index) => {
                        const rows = [
                          <tr key={`row-${item.id}`} className="hover:bg-gray-50 transition-colors">
                            <td className="px-6 py-4">
                              <div className="text-gray-600">{index + 1}</div>
                            </td>
                            <td className="px-6 py-4">
                              <div className="text-black">{item.name}</div>
                            </td>
                            <td className="px-6 py-4">
                              <div className="text-black">{item.price}</div>
                            </td>
                            <td className="px-6 py-4 text-right">
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => toggleStats(item.id)}
                                className="border-gray-300 hover:border-[#14B8A6] hover:text-[#14B8A6]"
                              >
                                {expandedRow === item.id ? "Sembunyikan" : "Lihat"} Statistik
                                <ChevronDown
                                  className={`w-4 h-4 ml-2 transition-transform duration-200 ${
                                    expandedRow === item.id ? "rotate-180" : ""
                                  }`}
                                />
                              </Button>
                            </td>
                          </tr>
                        ];

                        if (expandedRow === item.id) {
                          rows.push(
                            <tr key={`stats-${item.id}`} className="bg-gradient-to-br from-gray-50 to-white">
                              <td className="px-6 py-0"></td>
                              <td className="px-6 py-4" colSpan={3}>
                                <div className="grid md:grid-cols-4 gap-4">
                                  <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                                    <div className="text-gray-600 mb-1 text-sm">
                                      Harga Rata-rata
                                    </div>
                                    <div className="text-black">
                                      {item.stats.avgPrice}
                                    </div>
                                  </div>
                                  <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                                    <div className="text-gray-600 mb-1 text-sm">
                                      Harga Tertinggi
                                    </div>
                                    <div className="text-green-600">
                                      {item.stats.highPrice}
                                    </div>
                                  </div>
                                  <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                                    <div className="text-gray-600 mb-1 text-sm">
                                      Harga Terendah
                                    </div>
                                    <div className="text-red-600">
                                      {item.stats.lowPrice}
                                    </div>
                                  </div>
                                  <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                                    <div className="text-gray-600 mb-1 text-sm">
                                      Terakhir Diperbarui
                                    </div>
                                    <div className="text-gray-800 text-sm">
                                      {item.stats.lastUpdated}
                                    </div>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          );
                        }

                        return rows;
                      })
                    ) : (
                      <tr>
                        <td colSpan={4} className="px-6 py-12 text-center">
                          <div className="text-gray-500">
                            <Search className="w-12 h-12 mx-auto mb-3 text-gray-400" />
                            <p className="text-lg mb-1">Tidak ada hasil ditemukan</p>
                            <p className="text-sm">Coba ubah kata kunci pencarian Anda</p>
                          </div>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Footer Note */}
            <div className="mt-8 text-center text-gray-500">
              <p className="text-sm">
                Harga diperbarui setiap hari dan dapat bervariasi berdasarkan lokasi. 
                Untuk informasi lebih lanjut, hubungi otoritas pasar setempat.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
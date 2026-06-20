import { useState, useEffect } from "react";
import { Link } from "react-router";
import {
  Calendar,
  Clock,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

// 1. IMPORT DATA TERPUSAT DARI FILE NEWS DATA ANDA
import { newsData } from "../data/newsData";

type TabType = "daerah" | "nasional";

export function AllNewsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeCategory, setActiveCategory] = useState<TabType>("daerah");
  const itemsPerPage = 10;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory]);

  // 2. GUNAKAN DATA TERPUSAT (newsData) UNTUK PROSES FILTER & SORTING
  const sortedNews = [...newsData]
    .filter((item) => item.newsCategory === activeCategory)
    .sort((a, b) => {
      const dateA = new Date(a.date.split(" ").reverse().join(" "));
      const dateB = new Date(b.date.split(" ").reverse().join(" "));
      return dateB.getTime() - dateA.getTime();
    });

  // Logika Pagination tetap sama
  const totalPages = Math.ceil(sortedNews.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentNews = sortedNews.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const tabs = [
    { id: "daerah" as TabType, label: "Berita Daerah" },
    { id: "nasional" as TabType, label: "Berita Nasional" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12">
            <div className="text-center max-w-2xl mx-auto">
              <p className="uppercase tracking-wider text-[#84CC16] mb-3">
                Semua Berita Terkini
              </p>
              <h1 className="text-black mb-3">Berita & Pengumuman</h1>
              <p className="text-gray-600 text-lg">
                Informasi terbaru dan terlengkap dari pemerintah daerah dan
                nasional
              </p>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex justify-center mb-8 border-b border-gray-200">
            <div className="flex gap-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`px-8 py-4 transition-all ${
                    activeCategory === tab.id
                      ? "text-[#84CC16] border-b-2 border-[#84CC16]"
                      : "text-gray-600 hover:text-gray-900"
                  }`}>
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* News Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {currentNews.map((item) => (
              <Link key={item.id} to={`/berita/${item.id}`}>
                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-gray-200 group">
                  <div className="relative overflow-hidden h-64">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#84CC16] text-white px-3 py-1 rounded-full text-sm">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-gray-500 mb-3 text-sm">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{item.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{item.readTime}</span>
                      </div>
                    </div>
                    <h3 className="text-black mb-3 group-hover:text-[#84CC16] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed line-clamp-2">
                      {item.excerpt}
                    </p>
                    <span className="text-[#84CC16] hover:underline flex items-center gap-2 text-sm">
                      Baca Selengkapnya
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2">
              <Button
                variant="outline"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="border-gray-300 hover:border-[#84CC16] hover:text-[#84CC16] disabled:opacity-50">
                <ChevronLeft className="w-4 h-4 mr-1" />
                Sebelumnya
              </Button>

              <div className="flex gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <Button
                      key={page}
                      variant={currentPage === page ? "default" : "outline"}
                      onClick={() => handlePageChange(page)}
                      className={
                        currentPage === page
                          ? "bg-[#84CC16] hover:bg-[#84CC16]/90 text-white"
                          : "border-gray-300 hover:border-[#84CC16] hover:text-[#84CC16]"
                      }>
                      {page}
                    </Button>
                  ),
                )}
              </div>

              <Button
                variant="outline"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="border-gray-300 hover:border-[#84CC16] hover:text-[#84CC16] disabled:opacity-50">
                Selanjutnya
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

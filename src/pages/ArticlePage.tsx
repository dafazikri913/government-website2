import { useState, useEffect } from "react";
import { Link } from "react-router";
import { Calendar, User, Eye, FileText, Megaphone } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { articlesData } from "../data/articlesData";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

type TabType = "artikel" | "pengumuman";

export function ArticlePage() {
  const [activeTab, setActiveTab] = useState<TabType>("artikel");

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Fungsi untuk parse tanggal Indonesia ke Date object
  const parseIndonesianDate = (dateStr: string) => {
    const months: { [key: string]: number } = {
      'Januari': 0, 'Februari': 1, 'Maret': 2, 'April': 3,
      'Mei': 4, 'Juni': 5, 'Juli': 6, 'Agustus': 7,
      'September': 8, 'Oktober': 9, 'November': 10, 'Desember': 11
    };
    const parts = dateStr.split(' ');
    const day = parseInt(parts[0]);
    const month = months[parts[1]];
    const year = parseInt(parts[2]);
    return new Date(year, month, day);
  };

  // Sort artikel dari yang terbaru
  const sortedArticles = [...articlesData].sort((a, b) => {
    const dateA = parseIndonesianDate(a.date);
    const dateB = parseIndonesianDate(b.date);
    return dateB.getTime() - dateA.getTime();
  });

  // Filter berdasarkan activeTab
  const currentItems = activeTab === "artikel" 
    ? sortedArticles.filter(item => item.articleType === "artikel")
    : sortedArticles.filter(item => item.articleType === "pengumuman");

  const Icon = activeTab === "artikel" ? FileText : Megaphone;

  const tabs = [
    { id: "artikel" as TabType, label: "Artikel", icon: FileText },
    { id: "pengumuman" as TabType, label: "Pengumuman", icon: Megaphone },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-24">
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="mb-12">
              <div className="text-center max-w-2xl mx-auto">
                <p className="uppercase tracking-wider text-[#EE0000] mb-3">
                  Informasi & Publikasi
                </p>
                <h1 className="text-black mb-3">Artikel & Pengumuman</h1>
                <p className="text-gray-600 text-lg">
                  Artikel Dari Pemerintah Daerah Sumbawa
                </p>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex justify-center mb-8 border-b border-gray-200">
              <div className="flex gap-1">
                {tabs.map((tab) => {
                  const TabIcon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center gap-2 px-8 py-4 transition-all ${
                        activeTab === tab.id
                          ? "text-[#EE0000] border-b-2 border-[#EE0000]"
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      <TabIcon className="w-5 h-5" />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Articles/Announcements List */}
            <div className="space-y-6">
              {currentItems.map((item) => (
                <Link to={`/artikel/${item.id}`} key={item.id} className="block">
                  <div
                    className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer"
                  >
                    <div className="md:flex">
                      {/* Image */}
                      <div className="md:w-80 h-64 md:h-auto overflow-hidden flex-shrink-0">
                        <ImageWithFallback
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>

                      {/* Content */}
                      <div className="p-6 flex-1">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center gap-2">
                            <Icon className="w-5 h-5 text-[#EE0000]" />
                            <span className="text-xs uppercase tracking-wider text-[#EE0000]">
                              {activeTab === "artikel" ? "Artikel" : "Pengumuman"}
                            </span>
                          </div>
                        </div>

                        <h3 className="text-black mb-3 group-hover:text-[#EE0000] transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 mb-4">
                          {item.excerpt}
                        </p>

                        {/* Meta Info */}
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>{item.date}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <User className="w-4 h-4" />
                            <span>{item.author}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Eye className="w-4 h-4" />
                            <span>{item.views.toLocaleString()} views</span>
                          </div>
                        </div>

                        <span className="mt-4 text-[#EE0000] group-hover:underline text-sm inline-block">
                          Baca Selengkapnya &rarr;
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-12 flex justify-center">
              <div className="flex items-center gap-2">
                <button className="px-4 py-2 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors">
                  Previous
                </button>
                <button className="px-4 py-2 bg-[#EE0000] text-white rounded-lg">
                  1
                </button>
                <button className="px-4 py-2 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors">
                  2
                </button>
                <button className="px-4 py-2 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors">
                  3
                </button>
                <button className="px-4 py-2 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors">
                  Next
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
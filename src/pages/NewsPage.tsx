import { useState, useEffect } from "react";
import { Calendar, MapPin, Eye } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

type TabType = "nasional" | "daerah";

interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  location: string;
  views: number;
  image: string;
}

export function NewsPage() {
  const [activeTab, setActiveTab] = useState<TabType>("nasional");

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const nasionalNews: NewsItem[] = [
    {
      id: 1,
      title: "Presiden Resmikan Proyek Infrastruktur Nasional di NTB",
      excerpt: "Presiden RI meresmikan proyek infrastruktur strategis yang akan meningkatkan konektivitas antar pulau di Nusa Tenggara Barat.",
      date: "5 Desember 2025",
      category: "Infrastruktur",
      location: "Jakarta",
      views: 1234,
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop"
    },
    {
      id: 2,
      title: "Kementerian Pertanian Luncurkan Program Ketahanan Pangan 2025",
      excerpt: "Program baru untuk meningkatkan produktivitas pertanian dan ketahanan pangan nasional dengan fokus pada daerah-daerah potensial.",
      date: "3 Desember 2025",
      category: "Pertanian",
      location: "Jakarta",
      views: 987,
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=600&fit=crop"
    },
    {
      id: 3,
      title: "Pemerintah Tingkatkan Anggaran Pendidikan di Daerah Terpencil",
      excerpt: "Kebijakan baru alokasi anggaran pendidikan untuk meningkatkan kualitas pendidikan di daerah terpencil dan perbatasan.",
      date: "1 Desember 2025",
      category: "Pendidikan",
      location: "Jakarta",
      views: 876,
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop"
    },
    {
      id: 4,
      title: "Menteri Kesehatan Canangkan Gerakan Indonesia Sehat 2025",
      excerpt: "Gerakan nasional untuk meningkatkan kesadaran masyarakat tentang pentingnya hidup sehat dan pencegahan penyakit.",
      date: "28 November 2025",
      category: "Kesehatan",
      location: "Jakarta",
      views: 1456,
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop"
    },
    {
      id: 5,
      title: "Program Digitalisasi Pemerintahan Diperluas ke Seluruh Indonesia",
      excerpt: "Pemerintah mempercepat transformasi digital layanan publik untuk meningkatkan efisiensi dan transparansi.",
      date: "25 November 2025",
      category: "Teknologi",
      location: "Jakarta",
      views: 2341,
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop"
    },
    {
      id: 6,
      title: "Kementerian ESDM Targetkan Energi Terbarukan 30% di 2025",
      excerpt: "Target ambisius penggunaan energi terbarukan untuk mengurangi emisi karbon dan ketergantungan energi fosil.",
      date: "22 November 2025",
      category: "Energi",
      location: "Jakarta",
      views: 1567,
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop"
    },
  ];

  const daerahNews: NewsItem[] = [
    {
      id: 1,
      title: "Bupati Sumbawa Launching Program Sumbawa Maju Bersama",
      excerpt: "Program pemberdayaan masyarakat yang fokus pada peningkatan ekonomi lokal dan kesejahteraan masyarakat Sumbawa.",
      date: "6 Desember 2025",
      category: "Pembangunan",
      location: "Sumbawa",
      views: 2456,
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop"
    },
    {
      id: 2,
      title: "Festival Budaya Sumbawa 2025 Siap Digelar",
      excerpt: "Festival tahunan yang menampilkan kekayaan budaya dan tradisi Sumbawa akan diselenggarakan selama 5 hari.",
      date: "4 Desember 2025",
      category: "Budaya",
      location: "Sumbawa",
      views: 1876,
      image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&h=600&fit=crop"
    },
    {
      id: 3,
      title: "Pemkab Sumbawa Resmikan Pasar Rakyat Modern",
      excerpt: "Pasar rakyat dengan fasilitas modern diresmikan untuk meningkatkan kenyamanan pedagang dan pembeli.",
      date: "2 Desember 2025",
      category: "Ekonomi",
      location: "Sumbawa",
      views: 1234,
      image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=800&h=600&fit=crop"
    },
    {
      id: 4,
      title: "Produksi Madu Sumbawa Tembus Pasar Ekspor",
      excerpt: "Madu berkualitas tinggi dari Sumbawa berhasil menembus pasar ekspor ke beberapa negara Asia dan Eropa.",
      date: "30 November 2025",
      category: "Ekonomi",
      location: "Sumbawa",
      views: 3421,
      image: "https://images.unsplash.com/photo-1587049352846-4a222e784e38?w=800&h=600&fit=crop"
    },
    {
      id: 5,
      title: "Rumah Sakit Daerah Sumbawa Tambah Layanan Unggulan",
      excerpt: "Fasilitas kesehatan baru dan layanan spesialis ditambahkan untuk meningkatkan kualitas pelayanan kesehatan.",
      date: "27 November 2025",
      category: "Kesehatan",
      location: "Sumbawa",
      views: 987,
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop"
    },
    {
      id: 6,
      title: "Sumbawa Raih Penghargaan Kabupaten Inovatif 2025",
      excerpt: "Penghargaan dari pemerintah pusat atas inovasi dalam pelayanan publik dan pembangunan daerah.",
      date: "24 November 2025",
      category: "Prestasi",
      location: "Sumbawa",
      views: 2134,
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
    },
    {
      id: 7,
      title: "Destinasi Wisata Moyo Masuk Nominasi Wisata Terbaik Indonesia",
      excerpt: "Pulau Moyo dinominasikan sebagai salah satu destinasi wisata terbaik di Indonesia tahun 2025.",
      date: "20 November 2025",
      category: "Pariwisata",
      location: "Sumbawa",
      views: 4567,
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop"
    },
    {
      id: 8,
      title: "Petani Sumbawa Adopsi Teknologi Pertanian Modern",
      excerpt: "Program pemerintah daerah membantu petani mengadopsi teknologi modern untuk meningkatkan produktivitas.",
      date: "18 November 2025",
      category: "Pertanian",
      location: "Sumbawa",
      views: 1543,
      image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&h=600&fit=crop"
    },
  ];

  const currentNews = activeTab === "nasional" ? nasionalNews : daerahNews;

  const tabs = [
    { id: "nasional" as TabType, label: "Berita Nasional" },
    { id: "daerah" as TabType, label: "Berita Daerah" },
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
                  Informasi Terkini
                </p>
                <h1 className="text-black mb-3">Berita</h1>
                <p className="text-gray-600 text-lg">
                  Berita terbaru dari nasional dan daerah
                </p>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex justify-center mb-8 border-b border-gray-200">
              <div className="flex gap-1">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-8 py-4 transition-all ${
                      activeTab === tab.id
                        ? "text-[#EE0000] border-b-2 border-[#EE0000]"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* News Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentNews.map((news) => (
                <div
                  key={news.id}
                  className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={news.image}
                      alt={news.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-[#EE0000] text-white px-3 py-1 rounded-full text-xs">
                        {news.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-black mb-3 line-clamp-2 group-hover:text-[#EE0000] transition-colors">
                      {news.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {news.excerpt}
                    </p>

                    {/* Meta Info */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <Calendar className="w-4 h-4" />
                        <span>{news.date}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <MapPin className="w-4 h-4" />
                          <span>{news.location}</span>
                        </div>
                        <div className="flex items-center gap-1 text-xs text-gray-500">
                          <Eye className="w-4 h-4" />
                          <span>{news.views.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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

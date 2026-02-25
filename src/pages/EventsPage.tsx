import { useState, useEffect } from "react";
import { Calendar, MapPin, Clock, Users } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";

type TabType = "mendatang" | "berlangsung" | "selesai";

interface EventItem {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  attendees: string;
  image: string;
  type: string;
  status: "mendatang" | "berlangsung" | "selesai";
}

export function EventsPage() {
  const [activeTab, setActiveTab] = useState<TabType>("mendatang");

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const allEvents: EventItem[] = [
    {
      id: 1,
      title: "Konferensi Tahunan Pembangunan Daerah 2025",
      description:
        "Forum diskusi dan presentasi program pembangunan daerah dengan menghadirkan para ahli dan stakeholder terkait untuk membahas strategi pembangunan berkelanjutan.",
      date: "15 Januari 2026",
      time: "09:00 - 17:00 WIB",
      location: "Pusat Konvensi, Aula Utama",
      attendees: "500+ Peserta",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
      type: "Konferensi",
      status: "mendatang",
    },
    {
      id: 2,
      title: "Workshop Layanan Digital Pemerintah",
      description:
        "Pelatihan komprehensif penggunaan layanan digital pemerintah untuk memudahkan masyarakat dalam mengakses berbagai layanan publik secara online.",
      date: "20 Januari 2026",
      time: "14:00 - 16:00 WIB",
      location: "Pusat Teknologi, Ruang 101",
      attendees: "100+ Peserta",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop",
      type: "Workshop",
      status: "mendatang",
    },
    {
      id: 3,
      title: "Pertemuan Dialog dengan Masyarakat",
      description:
        "Forum terbuka untuk mendengar aspirasi, keluhan, dan saran masyarakat terkait pelayanan pemerintah serta pembangunan daerah.",
      date: "25 Januari 2026",
      time: "18:00 - 20:00 WIB",
      location: "Balai Kota, Auditorium",
      attendees: "300+ Peserta",
      image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&h=600&fit=crop",
      type: "Dialog Publik",
      status: "mendatang",
    },
    {
      id: 4,
      title: "Seminar Investasi dan UMKM Sumbawa",
      description:
        "Seminar untuk mendorong investasi dan pengembangan UMKM di Kabupaten Sumbawa dengan menghadirkan praktisi dan pelaku usaha sukses.",
      date: "28 Januari 2026",
      time: "13:00 - 17:00 WIB",
      location: "Hotel Grand Sumbawa, Ballroom",
      attendees: "250+ Peserta",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop",
      type: "Seminar",
      status: "mendatang",
    },
    {
      id: 5,
      title: "Festival Budaya Sumbawa 2026",
      description:
        "Festival tahunan yang menampilkan kekayaan budaya dan tradisi Sumbawa dengan berbagai pertunjukan seni, pameran, dan kuliner khas.",
      date: "26 Desember 2025",
      time: "08:00 - 22:00 WIB",
      location: "Lapangan Kota Sumbawa",
      attendees: "5000+ Peserta",
      image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&h=600&fit=crop",
      type: "Festival",
      status: "berlangsung",
    },
    {
      id: 6,
      title: "Rapat Koordinasi SKPD Akhir Tahun",
      description:
        "Rapat koordinasi seluruh Satuan Kerja Perangkat Daerah untuk evaluasi kinerja tahun 2025 dan perencanaan program tahun 2026.",
      date: "25 Desember 2025",
      time: "08:00 - 15:00 WIB",
      location: "Kantor Bupati, Ruang Rapat Besar",
      attendees: "200+ Peserta",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
      type: "Rapat",
      status: "berlangsung",
    },
    {
      id: 7,
      title: "Forum Kebijakan Publik 2025",
      description:
        "Forum diskusi kebijakan publik dengan menghadirkan akademisi, praktisi, dan pemangku kepentingan untuk membahas isu-isu strategis daerah.",
      date: "10 November 2025",
      time: "09:00 - 17:00 WIB",
      location: "Hotel Sumbawa Plaza, Ballroom",
      attendees: "450 Peserta",
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&h=600&fit=crop",
      type: "Forum",
      status: "selesai",
    },
    {
      id: 8,
      title: "Summit Inovasi Teknologi Daerah",
      description:
        "Summit untuk berbagi praktik terbaik dan inovasi teknologi dalam pelayanan publik serta transformasi digital pemerintahan.",
      date: "22 Oktober 2025",
      time: "08:00 - 16:00 WIB",
      location: "Gedung Serbaguna, Lantai 3",
      attendees: "320 Peserta",
      image: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=800&h=600&fit=crop",
      type: "Summit",
      status: "selesai",
    },
    {
      id: 9,
      title: "Workshop Partisipasi Masyarakat dalam Pembangunan",
      description:
        "Pelatihan untuk meningkatkan partisipasi aktif masyarakat dalam proses perencanaan dan pengawasan pembangunan daerah.",
      date: "15 September 2025",
      time: "13:00 - 17:00 WIB",
      location: "Balai Desa Sumbawa Besar",
      attendees: "180 Peserta",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop",
      type: "Workshop",
      status: "selesai",
    },
    {
      id: 10,
      title: "Expo UMKM dan Produk Lokal Sumbawa",
      description:
        "Pameran produk unggulan UMKM dan produk lokal Sumbawa untuk mempromosikan ekonomi kreatif dan potensi daerah.",
      date: "5 September 2025",
      time: "09:00 - 21:00 WIB",
      location: "Pusat Pameran Sumbawa",
      attendees: "3000 Peserta",
      image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=800&h=600&fit=crop",
      type: "Expo",
      status: "selesai",
    },
  ];

  const filteredEvents = allEvents.filter(
    (event) => event.status === activeTab
  );

  const tabs = [
    { id: "mendatang" as TabType, label: "Acara Mendatang" },
    { id: "berlangsung" as TabType, label: "Sedang Berlangsung" },
    { id: "selesai" as TabType, label: "Acara Selesai" },
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
                  Kalender Acara
                </p>
                <h1 className="text-black mb-3">Acara Pemerintah</h1>
                <p className="text-gray-600 text-lg">
                  Bergabunglah dengan kami dalam berbagai acara dan kegiatan
                  masyarakat
                </p>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex justify-center mb-8 border-b border-gray-200">
              <div className="flex gap-1 overflow-x-auto">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-6 py-4 transition-all whitespace-nowrap ${
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

            {/* Events Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {filteredEvents.map((event) => (
                <div
                  key={event.id}
                  className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow group"
                >
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-[#EE0000] text-white px-3 py-1 rounded-full text-xs">
                        {event.type}
                      </span>
                    </div>
                    {event.status === "berlangsung" && (
                      <div className="absolute top-3 right-3">
                        <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs animate-pulse">
                          Sedang Berlangsung
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-black mb-3 group-hover:text-[#EE0000] transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {event.description}
                    </p>

                    {/* Meta Info */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-xs text-gray-600">
                        <Calendar className="w-4 h-4 text-[#EE0000]" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-600">
                        <Clock className="w-4 h-4 text-[#EE0000]" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-600">
                        <MapPin className="w-4 h-4 text-[#EE0000]" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-600">
                        <Users className="w-4 h-4 text-[#EE0000]" />
                        <span>{event.attendees}</span>
                      </div>
                    </div>

                    {/* Action Button */}
                    {event.status === "mendatang" && (
                      <Button className="w-full bg-[#EE0000] hover:bg-[#CC0000] text-white">
                        Daftar Sekarang
                      </Button>
                    )}
                    {event.status === "berlangsung" && (
                      <Button
                        variant="outline"
                        className="w-full border-[#EE0000] text-[#EE0000] hover:bg-[#EE0000] hover:text-white"
                      >
                        Lihat Detail Acara
                      </Button>
                    )}
                    {event.status === "selesai" && (
                      <Button
                        variant="outline"
                        className="w-full border-gray-300 text-gray-600 hover:bg-gray-50"
                      >
                        Lihat Dokumentasi
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Empty State */}
            {filteredEvents.length === 0 && (
              <div className="text-center py-20">
                <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-gray-600 mb-2">
                  Tidak ada acara {activeTab === "mendatang" ? "mendatang" : activeTab === "berlangsung" ? "yang sedang berlangsung" : "yang telah selesai"}
                </h3>
                <p className="text-gray-500 text-sm">
                  Silakan cek kembali nanti untuk informasi acara terbaru
                </p>
              </div>
            )}

            {/* Pagination */}
            {filteredEvents.length > 0 && (
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
                    Next
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

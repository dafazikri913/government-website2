import { Calendar, MapPin, Clock, Users, ArrowRight, Building2, Palmtree, Briefcase } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

export function Events() {
  const [activeCategory, setActiveCategory] = useState<string>("pemerintah");

  const eventCategories = {
    pemerintah: [
      {
        id: 1,
        title: "Konferensi Tahunan Pembangunan Daerah 2025",
        description: "Forum diskusi dan presentasi program pembangunan daerah dengan menghadirkan para ahli dan stakeholder terkait.",
        date: "15 November 2025",
        time: "09:00 - 17:00 WIB",
        location: "Pusat Konvensi, Aula Utama",
        attendees: "500+ Peserta",
      },
      {
        id: 2,
        title: "Rapat Koordinasi SKPD",
        description: "Rapat koordinasi antar Satuan Kerja Perangkat Daerah untuk sinkronisasi program dan kegiatan.",
        date: "18 November 2025",
        time: "10:00 - 15:00 WIB",
        location: "Balai Kota, Ruang Rapat Utama",
        attendees: "150+ Peserta",
      },
      {
        id: 3,
        title: "Forum Dialog Kebijakan Publik",
        description: "Forum terbuka untuk mendengar aspirasi masyarakat terkait kebijakan publik yang sedang dirancang.",
        date: "22 November 2025",
        time: "14:00 - 17:00 WIB",
        location: "Balai Pertemuan, Aula Barat",
        attendees: "300+ Peserta",
      },
      {
        id: 4,
        title: "Pelantikan Pejabat Daerah",
        description: "Upacara pelantikan pejabat eselon III dan IV di lingkungan pemerintah daerah.",
        date: "25 November 2025",
        time: "08:00 - 12:00 WIB",
        location: "Gedung Serbaguna, Aula Utama",
        attendees: "250+ Peserta",
      },
      {
        id: 5,
        title: "Evaluasi Kinerja Triwulan IV",
        description: "Rapat evaluasi kinerja SKPD triwulan IV tahun anggaran 2025.",
        date: "28 November 2025",
        time: "09:00 - 16:00 WIB",
        location: "Kantor Bupati, Ruang Rapat Pimpinan",
        attendees: "100+ Peserta",
      },
      {
        id: 6,
        title: "Sosialisasi Peraturan Daerah",
        description: "Sosialisasi peraturan daerah terbaru kepada masyarakat dan pelaku usaha.",
        date: "30 November 2025",
        time: "13:00 - 16:00 WIB",
        location: "Aula Dinas Hukum",
        attendees: "200+ Peserta",
      },
    ],
    wisata: [
      {
        id: 7,
        title: "Festival Budaya Sumbawa 2025",
        description: "Perayaan budaya tahunan yang menampilkan seni, musik, tarian tradisional, dan kuliner khas Sumbawa.",
        date: "5 Desember 2025",
        time: "08:00 - 22:00 WIB",
        location: "Alun-alun Kota, Area Terbuka",
        attendees: "5000+ Peserta",
      },
      {
        id: 8,
        title: "Barapan Kebo Championship",
        description: "Kompetisi balapan kerbau tradisional yang menjadi daya tarik wisata utama Sumbawa.",
        date: "8 Desember 2025",
        time: "10:00 - 17:00 WIB",
        location: "Arena Barapan Kebo, Lapangan Utama",
        attendees: "3000+ Peserta",
      },
      {
        id: 9,
        title: "Pameran Kerajinan Daerah",
        description: "Pameran dan expo kerajinan tangan khas Sumbawa untuk promosi produk UMKM lokal.",
        date: "12 Desember 2025",
        time: "09:00 - 18:00 WIB",
        location: "Pusat Kerajinan, Hall Pameran",
        attendees: "2000+ Peserta",
      },
      {
        id: 10,
        title: "Festival Kuliner Nusantara",
        description: "Festival kuliner yang menampilkan berbagai makanan khas dari seluruh Indonesia, khususnya Sumbawa.",
        date: "15 Desember 2025",
        time: "11:00 - 21:00 WIB",
        location: "Taman Kota, Area Food Court",
        attendees: "4000+ Peserta",
      },
      {
        id: 11,
        title: "Paket Wisata Pantai Gratis",
        description: "Program wisata gratis untuk masyarakat mengunjungi destinasi pantai unggulan Sumbawa.",
        date: "18 Desember 2025",
        time: "06:00 - 18:00 WIB",
        location: "Pantai Lakey, Pantai Maluk",
        attendees: "500+ Peserta",
      },
      {
        id: 12,
        title: "Konser Musik Daerah",
        description: "Konser musik yang menampilkan musisi lokal dan regional untuk mempromosikan seni musik Sumbawa.",
        date: "20 Desember 2025",
        time: "18:00 - 23:00 WIB",
        location: "Stadion Utama, Lapangan Tengah",
        attendees: "6000+ Peserta",
      },
    ],
    dinas: [
      {
        id: 13,
        title: "Workshop Layanan Digital",
        description: "Pelatihan penggunaan layanan digital pemerintah untuk memudahkan masyarakat dalam mengakses layanan publik.",
        date: "2 Desember 2025",
        time: "14:00 - 16:00 WIB",
        location: "Pusat Teknologi, Ruang 101",
        attendees: "100+ Peserta",
      },
      {
        id: 14,
        title: "Pelatihan UMKM Digital Marketing",
        description: "Pelatihan digital marketing untuk pelaku UMKM agar dapat memasarkan produk secara online.",
        date: "4 Desember 2025",
        time: "09:00 - 15:00 WIB",
        location: "Dinas Koperasi dan UMKM, Aula",
        attendees: "150+ Peserta",
      },
      {
        id: 15,
        title: "Sosialisasi Kesehatan Masyarakat",
        description: "Sosialisasi program kesehatan masyarakat dan vaksinasi gratis untuk seluruh warga.",
        date: "6 Desember 2025",
        time: "08:00 - 14:00 WIB",
        location: "Puskesmas Pusat, Hall Utama",
        attendees: "400+ Peserta",
      },
      {
        id: 16,
        title: "Pelatihan Pertanian Modern",
        description: "Pelatihan teknik pertanian modern dan penggunaan teknologi untuk meningkatkan produktivitas.",
        date: "10 Desember 2025",
        time: "08:00 - 16:00 WIB",
        location: "Dinas Pertanian, Area Percontohan",
        attendees: "200+ Peserta",
      },
      {
        id: 17,
        title: "Bimbingan Teknis Pengelolaan Keuangan",
        description: "Bimbingan teknis pengelolaan keuangan bagi bendahara desa dan kelurahan.",
        date: "13 Desember 2025",
        time: "09:00 - 15:00 WIB",
        location: "Dinas Pemberdayaan Masyarakat, Ruang Pelatihan",
        attendees: "80+ Peserta",
      },
      {
        id: 18,
        title: "Pembekalan Guru dan Tenaga Pendidik",
        description: "Pembekalan dan pelatihan untuk guru dan tenaga pendidik dalam meningkatkan kualitas pembelajaran.",
        date: "17 Desember 2025",
        time: "08:00 - 16:00 WIB",
        location: "Dinas Pendidikan, Aula Besar",
        attendees: "300+ Peserta",
      },
    ],
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "pemerintah":
        return <Building2 className="w-5 h-5" />;
      case "wisata":
        return <Palmtree className="w-5 h-5" />;
      case "dinas":
        return <Briefcase className="w-5 h-5" />;
      default:
        return null;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "pemerintah":
        return "bg-[#10B981] text-white";
      case "wisata":
        return "bg-[#F59E0B] text-white";
      case "dinas":
        return "bg-[#3B82F6] text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  return (
    <section id="events" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <div className="text-center max-w-2xl mx-auto">
            <p className="uppercase tracking-wider text-[#10B981] mb-3">
              Kalender Acara
            </p>
            <h2 className="text-black mb-3">Acara Mendatang</h2>
            <p className="text-gray-600 text-lg">
              Bergabunglah dengan kami dalam berbagai acara dan kegiatan masyarakat
            </p>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center bg-white rounded-lg shadow-md border border-gray-200 p-1 overflow-hidden">
            <button
              onClick={() => setActiveCategory("pemerintah")}
              className={`flex items-center gap-2 px-6 py-3 rounded-md transition-all text-sm font-medium ${
                activeCategory === "pemerintah"
                  ? "bg-[#10B981] text-white shadow-md"
                  : "text-gray-700 hover:text-[#10B981] hover:bg-gray-50"
              }`}
            >
              <Building2 className="w-4 h-4" />
              Pemerintah
            </button>
            <button
              onClick={() => setActiveCategory("wisata")}
              className={`flex items-center gap-2 px-6 py-3 rounded-md transition-all text-sm font-medium ${
                activeCategory === "wisata"
                  ? "bg-[#10B981] text-white shadow-md"
                  : "text-gray-700 hover:text-[#10B981] hover:bg-gray-50"
              }`}
            >
              <Palmtree className="w-4 h-4" />
              Wisata
            </button>
            <button
              onClick={() => setActiveCategory("dinas")}
              className={`flex items-center gap-2 px-6 py-3 rounded-md transition-all text-sm font-medium ${
                activeCategory === "dinas"
                  ? "bg-[#10B981] text-white shadow-md"
                  : "text-gray-700 hover:text-[#10B981] hover:bg-gray-50"
              }`}
            >
              <Briefcase className="w-4 h-4" />
              Dinas
            </button>
          </div>
        </div>

        {/* Events Grid */}
        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-black">
              Acara Kategori {activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)}
            </h3>
            <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm ${getCategoryColor(activeCategory)}`}>
              {getCategoryIcon(activeCategory)}
              {eventCategories[activeCategory as keyof typeof eventCategories].length} Acara
            </span>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {eventCategories[activeCategory as keyof typeof eventCategories].slice(0, 3).map((event) => (
              <div
                key={event.id}
                className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition-all hover:border-[#10B981] group h-full flex flex-col"
              >
                <div className="flex items-center gap-2 text-gray-500 mb-3 text-sm">
                  <Calendar className="w-4 h-4" />
                  <span>{event.date}</span>
                </div>
                <h4 className="text-black mb-2 group-hover:text-[#10B981] transition-colors line-clamp-2 min-h-[3.5rem]">{event.title}</h4>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-1">
                  {event.description}
                </p>
                <div className="space-y-2 mb-4 pt-2 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <Clock className="w-4 h-4 text-[#10B981]" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <MapPin className="w-4 h-4 text-[#10B981]" />
                    <span className="line-clamp-1">{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <Users className="w-4 h-4 text-[#10B981]" />
                    <span>{event.attendees}</span>
                  </div>
                </div>
                <button className="w-full text-[#10B981] hover:bg-[#10B981] hover:text-white border border-[#10B981] px-4 py-2 rounded-lg flex items-center justify-center gap-2 text-sm transition-all group-hover:shadow-md shadow-sm mt-auto">
                  Daftar Sekarang
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
          
          {/* Show More Button */}
          {eventCategories[activeCategory as keyof typeof eventCategories].length > 3 && (
            <div className="text-center mt-8">
              <Button
                variant="outline"
                className="border-gray-300 hover:border-[#10B981] hover:text-[#10B981] shadow-md hover:shadow-lg"
              >
                Lihat Semua Acara {activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
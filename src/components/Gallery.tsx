import { useState } from "react";
import { Camera, Video, Calendar, ArrowRight, Play, X } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface GalleryItem {
  id: number;
  title: string;
  category: "foto" | "video";
  date: string;
  description: string;
  thumbnail?: string;
  youtubeId?: string;
}

// Data galeri lengkap
export const allGalleryItems: GalleryItem[] = [
  // Foto
  {
    id: 1,
    title: "Wonderful Sail to Indonesia ",
    category: "foto",
    date: "17 Agustus 2024",
    description: "Wonderful Sail to Indonesia 2019",
    thumbnail:
      "https://images.unsplash.com/photo-1601652411497-70aa36e04fb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&h=600&fit=crop",
  },
  {
    id: 2,
    title: "Kunjungan Kerja Gubernur ke Kabupaten Sumbawa",
    category: "foto",
    date: "15 Agustus 2024",
    description: "Wonderful Sail to Indonesia 2019",
    thumbnail:
      "https://images.unsplash.com/photo-1660745796794-69126967e5f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&h=600&fit=crop",
  },
  {
    id: 3,
    title: "Festival Budaya Sumbawa 2024",
    category: "foto",
    date: "10 Agustus 2024",
    description: "Wonderful Sail to Indonesia 2019",
    thumbnail:
      "https://images.unsplash.com/photo-1771432528393-0320cc169762?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&h=600&fit=crop",
  },
  {
    id: 4,
    title: "Pembukaan Jembatan Penghubung Antar Desa",
    category: "foto",
    date: "5 Agustus 2024",
    description:
      "Peresmian jembatan baru yang menghubungkan desa-desa di wilayah timur",
    thumbnail:
      "https://images.unsplash.com/photo-1771905602962-3bb738314c43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&h=600&fit=crop",
  },
  {
    id: 5,
    title: "Vaksinasi Massal COVID-19",
    category: "foto",
    date: "1 Agustus 2024",
    description: "Kegiatan vaksinasi massal untuk masyarakat Kabupaten Sumbawa",
    thumbnail:
      "https://images.unsplash.com/photo-1620821620529-9da72072847c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&h=600&fit=crop",
  },
  {
    id: 6,
    title: "Pasar Rakyat Murah Ramadan",
    category: "foto",
    date: "25 Juli 2024",
    description:
      "Pasar murah yang diselenggarakan menjelang bulan Ramadan untuk meringankan beban masyarakat",
    thumbnail:
      "https://images.unsplash.com/photo-1562988330-1dbb410b4bfa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&h=600&fit=crop",
  },
  {
    id: 13,
    title: "Pelatihan UMKM Digital Marketing",
    category: "foto",
    date: "22 Juli 2024",
    description:
      "Program pelatihan untuk meningkatkan kemampuan digital marketing pelaku UMKM lokal",
    thumbnail:
      "https://images.unsplash.com/photo-1758272421243-3213b95006e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&h=600&fit=crop",
  },
  {
    id: 14,
    title: "Penyerahan Bantuan Sosial untuk Warga Terdampak Bencana",
    category: "foto",
    date: "20 Juli 2024",
    description:
      "Distribusi bantuan sosial kepada masyarakat yang terdampak bencana alam",
    thumbnail:
      "https://images.unsplash.com/photo-1761666507437-9fb5a6ef7b0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&h=600&fit=crop",
  },
  {
    id: 15,
    title: "Musyawarah Perencanaan Pembangunan Daerah",
    category: "foto",
    date: "18 Juli 2024",
    description:
      "Forum musyawarah untuk merumuskan rencana pembangunan daerah tahun depan",
    thumbnail:
      "https://images.unsplash.com/photo-1640200330428-9fe2ab926de1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&h=600&fit=crop",
  },
  {
    id: 16,
    title: "Lomba Kreativitas Pemuda Sumbawa",
    category: "foto",
    date: "15 Juli 2024",
    description:
      "Kompetisi kreativitas untuk mengembangkan potensi generasi muda Kabupaten Sumbawa",
    thumbnail:
      "https://images.unsplash.com/photo-1760228142186-971a12718dbf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&h=600&fit=crop",
  },
  {
    id: 17,
    title: "Peresmian Pusat Kesehatan Masyarakat Baru",
    category: "foto",
    date: "12 Juli 2024",
    description:
      "Pembukaan fasilitas kesehatan modern untuk meningkatkan layanan kepada masyarakat",
    thumbnail:
      "https://images.unsplash.com/photo-1720180244267-67c2eb52f3a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&h=600&fit=crop",
  },
  {
    id: 18,
    title: "Rapat Koordinasi Penanganan Stunting",
    category: "foto",
    date: "10 Juli 2024",
    description:
      "Rapat koordinasi lintas sektor untuk program pencegahan dan penanganan stunting",
    thumbnail:
      "https://images.unsplash.com/photo-1616992510024-f1293eb00e41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&h=600&fit=crop",
  },
  {
    id: 19,
    title: "Festival Kuliner Nusantara",
    category: "foto",
    date: "8 Juli 2024",
    description:
      "Festival kuliner yang menampilkan berbagai makanan khas dari seluruh Indonesia",
    thumbnail:
      "https://images.unsplash.com/photo-1748248078354-5b085351714f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&h=600&fit=crop",
  },
  {
    id: 20,
    title: "Penanaman Pohon Mangrove",
    category: "foto",
    date: "5 Juli 2024",
    description:
      "Kegiatan penanaman pohon mangrove untuk pelestarian lingkungan pesisir",
    thumbnail:
      "https://images.unsplash.com/photo-1719214970646-71a827f691b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&h=600&fit=crop",
  },
  {
    id: 21,
    title: "Pencanangan Gerakan Literasi Daerah",
    category: "foto",
    date: "3 Juli 2024",
    description:
      "Peluncuran program gerakan literasi untuk meningkatkan minat baca masyarakat",
    thumbnail:
      "https://images.unsplash.com/photo-1534580235139-e2ef095e1972?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&h=600&fit=crop",
  },
  {
    id: 22,
    title: "Senam Sehat Bersama ASN",
    category: "foto",
    date: "1 Juli 2024",
    description:
      "Kegiatan senam pagi bersama untuk meningkatkan kesehatan pegawai negeri sipil",
    thumbnail:
      "https://images.unsplash.com/photo-1746966708731-004e79308357?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&h=600&fit=crop",
  },
  {
    id: 23,
    title: "Pameran Hasil Pertanian dan Perkebunan",
    category: "foto",
    date: "28 Juni 2024",
    description:
      "Pameran produk pertanian dan perkebunan unggulan dari petani lokal",
    thumbnail:
      "https://images.unsplash.com/photo-1638030113612-49da9d59a4f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&h=600&fit=crop",
  },
  {
    id: 24,
    title: "Workshop Tata Kelola Pemerintahan",
    category: "foto",
    date: "25 Juni 2024",
    description:
      "Workshop untuk meningkatkan kapasitas aparatur dalam tata kelola pemerintahan",
    thumbnail:
      "https://images.unsplash.com/photo-1768796370577-c6e8b708b980?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&h=600&fit=crop",
  },
  // Video
  {
    id: 7,
    title: "Profil Kabupaten Sumbawa 2024",
    category: "video",
    date: "20 Agustus 2024",
    description:
      "Video profil lengkap tentang potensi dan perkembangan Kabupaten Sumbawa",
    youtubeId: "2JD8m0ITmRc",
  },
  {
    id: 8,
    title: "Sosialisasi Program Digitalisasi Pelayanan Publik",
    category: "video",
    date: "18 Agustus 2024",
    description:
      "Dokumentasi kegiatan sosialisasi program digitalisasi untuk meningkatkan kualitas layanan",
    youtubeId: "aYVn9uWipuU",
  },
  {
    id: 9,
    title: "Launching Aplikasi Layanan Masyarakat",
    category: "video",
    date: "12 Agustus 2024",
    description:
      "Peluncuran aplikasi mobile untuk memudahkan akses layanan pemerintahan",
    youtubeId: "IcUDlyDEoNo",
  },
  {
    id: 10,
    title: "Dokumenter Wisata Sumbawa",
    category: "video",
    date: "8 Agustus 2024",
    description:
      "Film dokumenter tentang keindahan destinasi wisata di Kabupaten Sumbawa",
    youtubeId: "2JD8m0ITmRc",
  },
  {
    id: 11,
    title: "Wawancara Bupati: Visi Pembangunan 2024",
    category: "video",
    date: "3 Agustus 2024",
    description:
      "Wawancara eksklusif dengan Bupati tentang rencana pembangunan tahun ini",
    youtubeId: "aYVn9uWipuU",
  },
  {
    id: 12,
    title: "Highlight Kegiatan Dinas Bulan Juli 2024",
    category: "video",
    date: "30 Juli 2024",
    description:
      "Kompilasi kegiatan-kegiatan pemerintah daerah selama bulan Juli",
    youtubeId: "IcUDlyDEoNo",
  },
  {
    id: 25,
    title: "Tutorial Penggunaan Aplikasi E-Government",
    category: "video",
    date: "28 Juli 2024",
    description:
      "Panduan lengkap menggunakan aplikasi layanan pemerintahan elektronik",
    youtubeId: "2JD8m0ITmRc",
  },
  {
    id: 26,
    title: "Testimoni Masyarakat Program Bantuan Sosial",
    category: "video",
    date: "25 Juli 2024",
    description:
      "Cerita dan testimoni masyarakat penerima program bantuan sosial",
    youtubeId: "aYVn9uWipuU",
  },
  {
    id: 27,
    title: "Talkshow Pembangunan Infrastruktur Daerah",
    category: "video",
    date: "22 Juli 2024",
    description:
      "Diskusi mengenai rencana dan progres pembangunan infrastruktur di Kabupaten Sumbawa",
    youtubeId: "IcUDlyDEoNo",
  },
  {
    id: 28,
    title: "Kampanye Hidup Sehat Tanpa Narkoba",
    category: "video",
    date: "20 Juli 2024",
    description:
      "Video kampanye pencegahan penyalahgunaan narkoba di kalangan generasi muda",
    youtubeId: "2JD8m0ITmRc",
  },
  {
    id: 29,
    title: "Pelestarian Seni dan Budaya Lokal",
    category: "video",
    date: "18 Juli 2024",
    description:
      "Dokumentasi upaya pelestarian seni dan budaya tradisional Sumbawa",
    youtubeId: "aYVn9uWipuU",
  },
  {
    id: 30,
    title: "Inovasi Smart City Kabupaten Sumbawa",
    category: "video",
    date: "15 Juli 2024",
    description:
      "Presentasi berbagai inovasi teknologi untuk mewujudkan smart city",
    youtubeId: "IcUDlyDEoNo",
  },
  {
    id: 31,
    title: "Perjalanan Wisata Religi di Sumbawa",
    category: "video",
    date: "12 Juli 2024",
    description:
      "Video perjalanan mengunjungi berbagai situs dan tempat wisata religi",
    youtubeId: "2JD8m0ITmRc",
  },
  {
    id: 32,
    title: "Program Peningkatan Ekonomi Masyarakat",
    category: "video",
    date: "10 Juli 2024",
    description:
      "Dokumentasi program-program pemberdayaan ekonomi untuk kesejahteraan masyarakat",
    youtubeId: "aYVn9uWipuU",
  },
  {
    id: 33,
    title: "Sumbawa Green and Clean",
    category: "video",
    date: "8 Juli 2024",
    description:
      "Gerakan menjaga kebersihan dan kelestarian lingkungan di Kabupaten Sumbawa",
    youtubeId: "IcUDlyDEoNo",
  },
  {
    id: 34,
    title: "Festival Musik Daerah 2024",
    category: "video",
    date: "5 Juli 2024",
    description:
      "Highlight penampilan dari festival musik daerah yang menampilkan talenta lokal",
    youtubeId: "2JD8m0ITmRc",
  },
  {
    id: 35,
    title: "Seminar Kewirausahaan untuk Generasi Milenial",
    category: "video",
    date: "3 Juli 2024",
    description:
      "Seminar motivasi dan pelatihan kewirausahaan untuk mendorong startup lokal",
    youtubeId: "aYVn9uWipuU",
  },
  {
    id: 36,
    title: "Parade Kendaraan Hias HUT Kabupaten",
    category: "video",
    date: "1 Juli 2024",
    description:
      "Kemeriahan parade kendaraan hias dalam rangka HUT Kabupaten Sumbawa",
    youtubeId: "IcUDlyDEoNo",
  },
];

export function Gallery() {
  const [activeTab, setActiveTab] = useState<"foto" | "video">("foto");
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const [photoModalOpen, setPhotoModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<{
    src: string;
    title: string;
  } | null>(null);

  const openPhotoModal = (src: string, title: string) => {
    setSelectedPhoto({ src, title });
    setPhotoModalOpen(true);
  };

  const closePhotoModal = () => {
    setPhotoModalOpen(false);
    setSelectedPhoto(null);
  };

  // Filter berdasarkan kategori dan ambil 3 pertama
  const displayedItems = allGalleryItems
    .filter((item) => item.category === activeTab)
    .slice(0, 3);

  const openVideoModal = (youtubeId: string) => {
    setSelectedVideo(youtubeId);
    setVideoModalOpen(true);
  };

  const closeVideoModal = () => {
    setVideoModalOpen(false);
    setSelectedVideo(null);
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <p className="uppercase tracking-wider text-[#84CC16] mb-3">
                Dokumentasi
              </p>
              <h2 className="text-black mb-3">Galeri Foto & Video</h2>
              <p className="text-gray-600 text-lg max-w-2xl">
                Dokumentasi kegiatan dan program pemerintah Kabupaten Sumbawa
              </p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-8">
          <div className="flex gap-4 border-b border-gray-200">
            <button
              onClick={() => setActiveTab("foto")}
              className={`flex items-center gap-2 px-6 py-3 border-b-2 transition-colors ${
                activeTab === "foto"
                  ? "border-[#84CC16] text-[#84CC16]"
                  : "border-transparent text-gray-600 hover:text-[#84CC16]"
              }`}>
              <Camera className="w-5 h-5" />
              <span className="font-medium">Foto</span>
            </button>
            <button
              onClick={() => setActiveTab("video")}
              className={`flex items-center gap-2 px-6 py-3 border-b-2 transition-colors ${
                activeTab === "video"
                  ? "border-[#84CC16] text-[#84CC16]"
                  : "border-transparent text-gray-600 hover:text-[#84CC16]"
              }`}>
              <Video className="w-5 h-5" />
              <span className="font-medium">Video</span>
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {displayedItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-gray-200 group flex flex-col">
              {/* Thumbnail */}
              <div className="relative h-48 overflow-hidden">
                {item.category === "foto" && item.thumbnail ? (
                  <ImageWithFallback
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                ) : item.category === "video" && item.youtubeId ? (
                  <>
                    <img
                      src={`https://img.youtube.com/vi/${item.youtubeId}/maxresdefault.jpg`}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-40 transition-all flex items-center justify-center">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Play className="w-8 h-8 text-[#84CC16] ml-1" />
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="bg-gradient-to-br from-[#84CC16]/20 to-[#65A30D]/20 h-48 flex items-center justify-center">
                    {item.category === "foto" ? (
                      <Camera className="w-16 h-16 text-[#84CC16]/40" />
                    ) : (
                      <Video className="w-16 h-16 text-[#84CC16]/40" />
                    )}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-gray-500 mb-3 text-sm">
                  <Calendar className="w-4 h-4" />
                  <span>{item.date}</span>
                </div>
                <h4 className="text-black mb-4 group-hover:text-[#84CC16] transition-colors line-clamp-2">
                  {item.title}
                </h4>
                {item.category === "video" && (
                  <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                    {item.description}
                  </p>
                )}
                <button
                  className="w-full text-[#84CC16] hover:bg-[#84CC16] hover:text-white border border-[#84CC16] px-4 py-2 rounded-lg flex items-center justify-center gap-2 text-sm transition-all shadow-sm hover:shadow-md mt-auto"
                  onClick={() => {
                    if (item.category === "video" && item.youtubeId) {
                      openVideoModal(item.youtubeId);
                    } else if (item.category === "foto" && item.thumbnail) {
                      openPhotoModal(item.thumbnail, item.title);
                    }
                  }}>
                  {item.category === "foto" ? "Lihat Foto" : "Putar Video"}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button - Center aligned */}
        <div className="text-center">
          <Link to="/galeri">
            <Button
              variant="outline"
              className="border-gray-300 hover:border-[#84CC16] hover:text-[#84CC16] shadow-md hover:shadow-lg">
              Selengkapnya
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Video Modal */}
      {videoModalOpen && selectedVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4"
          onClick={closeVideoModal}>
          <div
            className="relative w-full max-w-5xl aspect-video"
            onClick={(e) => e.stopPropagation()}>
            <button
              className="absolute -top-12 right-0 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
              onClick={closeVideoModal}>
              <X className="w-5 h-5 text-gray-500" />
            </button>
            <iframe
              className="w-full h-full rounded-lg shadow-2xl"
              src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen></iframe>
          </div>
        </div>
      )}

      {photoModalOpen && selectedPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4"
          onClick={closePhotoModal}>
          <div
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}>
            <button
              className="absolute -top-12 right-0 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
              onClick={closePhotoModal}>
              <X className="w-5 h-5 text-gray-500" />
            </button>
            <img
              src={selectedPhoto.src}
              alt={selectedPhoto.title}
              className="max-w-[70%] max-h-[65vh] object-contain rounded-lg shadow-2xl mx-auto block"
            />
            <p className="text-white text-center mt-4 text-sm">
              {selectedPhoto.title}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

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

interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  newsCategory: "nasional" | "daerah";
  image: string;
}

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

  const newsItems: NewsItem[] = [
    {
      id: 1,
      title: "Peluncuran Program Digitalisasi Layanan Publik",
      excerpt:
        "Pemerintah meluncurkan program digitalisasi untuk meningkatkan efisiensi dan kemudahan akses layanan publik bagi seluruh masyarakat.",
      date: "12 Oktober 2025",
      readTime: "3 menit",
      category: "Pembaruan Kebijakan",
      newsCategory: "daerah",
      image:
        "https://images.unsplash.com/photo-1606836591695-4d58a73eba1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmd8ZW58MXx8fHwxNzYwNDUxOTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 2,
      title: "Peningkatan Infrastruktur Teknologi di Seluruh Wilayah",
      excerpt:
        "Pembangunan infrastruktur teknologi dilakukan untuk mendukung transformasi digital dan meningkatkan konektivitas di seluruh wilayah.",
      date: "10 Oktober 2025",
      readTime: "5 menit",
      category: "Pengumuman",
      newsCategory: "daerah",
      image:
        "https://images.unsplash.com/photo-1606836591695-4d58a73eba1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmd8ZW58MXx8fHwxNzYwNDUxOTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 3,
      title: "Transparansi Anggaran Daerah Tahun 2025",
      excerpt:
        "Publikasi laporan anggaran daerah untuk meningkatkan transparansi dan akuntabilitas pengelolaan keuangan pemerintah.",
      date: "8 Oktober 2025",
      readTime: "4 menit",
      category: "Siaran Pers",
      newsCategory: "daerah",
      image:
        "https://images.unsplash.com/photo-1606836591695-4d58a73eba1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmd8ZW58MXx8fHwxNzYwNDUxOTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 4,
      title: "Kerja Sama dengan Sektor Swasta untuk Pembangunan",
      excerpt:
        "Pemerintah menjalin kemitraan strategis dengan sektor swasta untuk mempercepat program pembangunan berkelanjutan.",
      date: "5 Oktober 2025",
      readTime: "6 menit",
      category: "Berita Terkini",
      newsCategory: "daerah",
      image:
        "https://images.unsplash.com/photo-1606836591695-4d58a73eba1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmd8ZW58MXx8fHwxNzYwNDUxOTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 9,
      title: "Pembukaan Festival Budaya Sumbawa 2025",
      excerpt:
        "Festival budaya tahunan dibuka dengan menampilkan berbagai kesenian tradisional dan produk UMKM lokal yang menarik wisatawan.",
      date: "3 Oktober 2025",
      readTime: "4 menit",
      category: "Budaya & Pariwisata",
      newsCategory: "daerah",
      image:
        "https://images.unsplash.com/photo-1606836591695-4d58a73eba1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmd8ZW58MXx8fHwxNzYwNDUxOTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 10,
      title: "Program Beasiswa Pendidikan untuk Pelajar Berprestasi",
      excerpt:
        "Pemerintah daerah mengalokasikan dana beasiswa untuk mendukung pendidikan pelajar berprestasi dari keluarga kurang mampu.",
      date: "1 Oktober 2025",
      readTime: "3 menit",
      category: "Pendidikan",
      newsCategory: "daerah",
      image:
        "https://images.unsplash.com/photo-1606836591695-4d58a73eba1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmd8ZW58MXx8fHwxNzYwNDUxOTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 11,
      title: "Renovasi Fasilitas Kesehatan di 15 Puskesmas",
      excerpt:
        "Proyek renovasi dan modernisasi fasilitas kesehatan untuk meningkatkan kualitas pelayanan medis kepada masyarakat.",
      date: "29 September 2025",
      readTime: "5 menit",
      category: "Kesehatan",
      newsCategory: "daerah",
      image:
        "https://images.unsplash.com/photo-1606836591695-4d58a73eba1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmd8ZW58MXx8fHwxNzYwNDUxOTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 12,
      title: "Pelatihan Keterampilan Digital untuk Pelaku UMKM",
      excerpt:
        "Program pelatihan intensif untuk meningkatkan kemampuan digital marketing dan e-commerce bagi pelaku usaha mikro.",
      date: "27 September 2025",
      readTime: "4 menit",
      category: "Ekonomi & UMKM",
      newsCategory: "daerah",
      image:
        "https://images.unsplash.com/photo-1606836591695-4d58a73eba1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmd8ZW58MXx8fHwxNzYwNDUxOTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 13,
      title: "Pembangunan Jalan Penghubung Antar Kecamatan",
      excerpt:
        "Proyek infrastruktur jalan sepanjang 25 kilometer untuk meningkatkan konektivitas dan mobilitas masyarakat antar wilayah.",
      date: "25 September 2025",
      readTime: "6 menit",
      category: "Infrastruktur",
      newsCategory: "daerah",
      image:
        "https://images.unsplash.com/photo-1606836591695-4d58a73eba1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmd8ZW58MXx8fHwxNzYwNDUxOTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 14,
      title: "Sosialisasi Program Bantuan Sosial Tahun 2025",
      excerpt:
        "Pemerintah mensosialisasikan berbagai program bantuan sosial dan cara pendaftaran kepada masyarakat yang membutuhkan.",
      date: "23 September 2025",
      readTime: "3 menit",
      category: "Kesejahteraan Sosial",
      newsCategory: "daerah",
      image:
        "https://images.unsplash.com/photo-1606836591695-4d58a73eba1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmd8ZW58MXx8fHwxNzYwNDUxOTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 15,
      title: "Peluncuran Sistem Perizinan Online Terpadu",
      excerpt:
        "Sistem baru memudahkan masyarakat mengurus berbagai jenis izin secara online tanpa harus datang ke kantor.",
      date: "20 September 2025",
      readTime: "4 menit",
      category: "Pelayanan Publik",
      newsCategory: "daerah",
      image:
        "https://images.unsplash.com/photo-1606836591695-4d58a73eba1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmd8ZW58MXx8fHwxNzYwNDUxOTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 16,
      title: "Kampanye Gerakan Hidup Bersih dan Sehat",
      excerpt:
        "Program kampanye massal untuk meningkatkan kesadaran masyarakat tentang pentingnya pola hidup bersih dan sehat.",
      date: "18 September 2025",
      readTime: "3 menit",
      category: "Kesehatan Masyarakat",
      newsCategory: "daerah",
      image:
        "https://images.unsplash.com/photo-1606836591695-4d58a73eba1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmd8ZW58MXx8fHwxNzYwNDUxOTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 17,
      title: "Pemberdayaan Kelompok Tani melalui Teknologi Pertanian",
      excerpt:
        "Introduksi teknologi modern dan sistem irigasi tetes untuk meningkatkan produktivitas hasil pertanian.",
      date: "15 September 2025",
      readTime: "5 menit",
      category: "Pertanian",
      newsCategory: "daerah",
      image:
        "https://images.unsplash.com/photo-1606836591695-4d58a73eba1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmd8ZW58MXx8fHwxNzYwNDUxOTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 18,
      title: "Pengembangan Destinasi Wisata Pantai dan Laut",
      excerpt:
        "Proyek pengembangan fasilitas wisata pantai dengan konsep ramah lingkungan untuk menarik wisatawan domestik dan mancanegara.",
      date: "12 September 2025",
      readTime: "6 menit",
      category: "Pariwisata",
      newsCategory: "daerah",
      image:
        "https://images.unsplash.com/photo-1606836591695-4d58a73eba1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmd8ZW58MXx8fHwxNzYwNDUxOTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 19,
      title: "Program Penghijauan dan Reboisasi di 50 Lokasi",
      excerpt:
        "Gerakan menanam 10.000 pohon untuk menjaga kelestarian lingkungan dan mengurangi dampak perubahan iklim.",
      date: "10 September 2025",
      readTime: "4 menit",
      category: "Lingkungan Hidup",
      newsCategory: "daerah",
      image:
        "https://images.unsplash.com/photo-1606836591695-4d58a73eba1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmd8ZW58MXx8fHwxNzYwNDUxOTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 20,
      title: "Peningkatan Kualitas Guru melalui Pelatihan Berkala",
      excerpt:
        "Program pelatihan dan sertifikasi guru untuk meningkatkan kompetensi pedagogik dan profesional dalam mengajar.",
      date: "7 September 2025",
      readTime: "5 menit",
      category: "Pendidikan",
      newsCategory: "daerah",
      image:
        "https://images.unsplash.com/photo-1606836591695-4d58a73eba1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmd8ZW58MXx8fHwxNzYwNDUxOTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 5,
      title: "Presiden Resmikan Ibu Kota Negara Nusantara",
      excerpt:
        "Presiden meresmikan Ibu Kota Negara (IKN) Nusantara sebagai pusat pemerintahan baru dengan infrastruktur modern dan berkelanjutan.",
      date: "15 Oktober 2025",
      readTime: "7 menit",
      category: "Berita Utama",
      newsCategory: "nasional",
      image:
        "https://images.unsplash.com/photo-1606836591695-4d58a73eba1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmd8ZW58MXx8fHwxNzYwNDUxOTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 6,
      title: "Pemerintah Luncurkan Program Kartu Sakti Kesehatan",
      excerpt:
        "Program kartu kesehatan digital yang memberikan akses gratis ke seluruh fasilitas kesehatan pemerintah untuk seluruh rakyat Indonesia.",
      date: "14 Oktober 2025",
      readTime: "5 menit",
      category: "Kebijakan Nasional",
      newsCategory: "nasional",
      image:
        "https://images.unsplash.com/photo-1606836591695-4d58a73eba1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmd8ZW58MXx8fHwxNzYwNDUxOTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 7,
      title: "Menteri Pendidikan Umumkan Kurikulum Merdeka Versi 2.0",
      excerpt:
        "Pembaruan kurikulum merdeka dengan fokus pada pengembangan keterampilan digital dan karakter siswa untuk menghadapi era global.",
      date: "13 Oktober 2025",
      readTime: "4 menit",
      category: "Pendidikan",
      newsCategory: "nasional",
      image:
        "https://images.unsplash.com/photo-1606836591695-4d58a73eba1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmd8ZW58MXx8fHwxNzYwNDUxOTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 8,
      title: "Indonesia Perkuat Kemitraan dengan ASEAN dalam Ekonomi Digital",
      excerpt:
        "Pemerintah Indonesia memimpin inisiatif kerja sama regional ASEAN untuk pengembangan ekosistem ekonomi digital yang inklusif.",
      date: "11 Oktober 2025",
      readTime: "6 menit",
      category: "Hubungan Internasional",
      newsCategory: "nasional",
      image:
        "https://images.unsplash.com/photo-1606836591695-4d58a73eba1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmd8ZW58MXx8fHwxNzYwNDUxOTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 21,
      title: "Pemerintah Tingkatkan Anggaran Subsidi BBM dan Listrik",
      excerpt:
        "Peningkatan anggaran subsidi untuk menjaga daya beli masyarakat di tengah fluktuasi harga energi global.",
      date: "9 Oktober 2025",
      readTime: "5 menit",
      category: "Ekonomi",
      newsCategory: "nasional",
      image:
        "https://images.unsplash.com/photo-1606836591695-4d58a73eba1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmd8ZW58MXx8fHwxNzYwNDUxOTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 22,
      title: "Peluncuran Satelit Nusantara Satu untuk Internet Merata",
      excerpt:
        "Satelit komunikasi terbaru Indonesia diluncurkan untuk menyediakan akses internet ke seluruh pelosok negeri.",
      date: "6 Oktober 2025",
      readTime: "6 menit",
      category: "Teknologi",
      newsCategory: "nasional",
      image:
        "https://images.unsplash.com/photo-1606836591695-4d58a73eba1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmd8ZW58MXx8fHwxNzYwNDUxOTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 23,
      title: "Indonesia Tuan Rumah KTT G20 Tahun 2026",
      excerpt:
        "Persiapan penyelenggaraan KTT G20 dengan tema pembangunan berkelanjutan dan ekonomi inklusif.",
      date: "4 Oktober 2025",
      readTime: "7 menit",
      category: "Politik Internasional",
      newsCategory: "nasional",
      image:
        "https://images.unsplash.com/photo-1606836591695-4d58a73eba1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmd8ZW58MXx8fHwxNzYwNDUxOTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 24,
      title: "Program Makan Siang Gratis untuk 10 Juta Pelajar",
      excerpt:
        "Program nutrisi nasional memberikan makanan bergizi gratis untuk pelajar SD dan SMP di seluruh Indonesia.",
      date: "2 Oktober 2025",
      readTime: "4 menit",
      category: "Pendidikan & Kesehatan",
      newsCategory: "nasional",
      image:
        "https://images.unsplash.com/photo-1606836591695-4d58a73eba1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmd8ZW58MXx8fHwxNzYwNDUxOTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 25,
      title: "Kementerian BUMN Luncurkan Holding BUMN Digital",
      excerpt:
        "Konsolidasi seluruh aset digital BUMN untuk mempercepat transformasi digital nasional.",
      date: "30 September 2025",
      readTime: "5 menit",
      category: "BUMN",
      newsCategory: "nasional",
      image:
        "https://images.unsplash.com/photo-1606836591695-4d58a73eba1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmd8ZW58MXx8fHwxNzYwNDUxOTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 26,
      title: "Indonesia Raih Penghargaan di Forum Perubahan Iklim PBB",
      excerpt:
        "Komitmen dan implementasi program pengurangan emisi karbon Indonesia mendapat apresiasi internasional.",
      date: "28 September 2025",
      readTime: "6 menit",
      category: "Lingkungan",
      newsCategory: "nasional",
      image:
        "https://images.unsplash.com/photo-1606836591695-4d58a73eba1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmd8ZW58MXx8fHwxNzYwNDUxOTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 27,
      title: "Pembangunan 5 Bandara Baru di Papua dan Maluku",
      excerpt:
        "Proyek infrastruktur penerbangan untuk meningkatkan konektivitas wilayah Indonesia Timur.",
      date: "26 September 2025",
      readTime: "5 menit",
      category: "Infrastruktur",
      newsCategory: "nasional",
      image:
        "https://images.unsplash.com/photo-1606836591695-4d58a73eba1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmd8ZW58MXx8fHwxNzYwNDUxOTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 28,
      title: "BI Pertahankan Suku Bunga Acuan 5,75 Persen",
      excerpt:
        "Bank Indonesia memutuskan mempertahankan tingkat suku bunga untuk menjaga stabilitas nilai tukar rupiah.",
      date: "24 September 2025",
      readTime: "4 menit",
      category: "Ekonomi & Keuangan",
      newsCategory: "nasional",
      image:
        "https://images.unsplash.com/photo-1606836591695-4d58a73eba1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmd8ZW58MXx8fHwxNzYwNDUxOTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 29,
      title: "Kominfo Luncurkan Program 1 Juta Talenta Digital",
      excerpt:
        "Program pelatihan masif untuk mencetak talenta digital Indonesia yang siap bersaing di pasar global.",
      date: "22 September 2025",
      readTime: "5 menit",
      category: "Teknologi & SDM",
      newsCategory: "nasional",
      image:
        "https://images.unsplash.com/photo-1606836591695-4d58a73eba1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmd8ZW58MXx8fHwxNzYwNDUxOTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 30,
      title: "Indonesia Ekspor Perdana Mobil Listrik ke ASEAN",
      excerpt:
        "Produk mobil listrik buatan Indonesia mulai diekspor ke negara-negara tetangga sebagai tonggak industri otomotif nasional.",
      date: "19 September 2025",
      readTime: "6 menit",
      category: "Industri & Ekspor",
      newsCategory: "nasional",
      image:
        "https://images.unsplash.com/photo-1606836591695-4d58a73eba1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmd8ZW58MXx8fHwxNzYwNDUxOTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  // Sort and filter news by category
  const sortedNews = [...newsItems]
    .filter((item) => item.newsCategory === activeCategory)
    .sort((a, b) => {
      const dateA = new Date(a.date.split(" ").reverse().join(" "));
      const dateB = new Date(b.date.split(" ").reverse().join(" "));
      return dateB.getTime() - dateA.getTime();
    });

  // Pagination logic
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
              {tabs.map((tab) => {
                return (
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
                );
              })}
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

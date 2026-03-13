export interface ArticleItem {
  id: number;
  title: string;
  excerpt: string;
  content: string; // Sekarang menggunakan string tunggal
  author: string;
  views: string;
  date: string;
  readTime: string;
  category: string;
  articleType: string;
  image: string;
}

export const articlesData: ArticleItem[] = [
  {
    id: 1,
    title: "BAHAYA MEROKOK BAGI KESEHATAN DAN LINGKUNGAN",
    excerpt: "Rokok merupakan Tembakau kering yang digulung...",
    content: `Meskipun telah terbukti dapat menyebabkan munculnya berbagai kondisi patologis, secara sistemik maupun lokal, tetapi kebiasaan merokok ini sangat sulit untuk dihilangkan.

Asap rokok terdiri dari 4.000 bahan kimia dan 200 di antaranya bersifat racun. Antara lain karbon monoksida dan polycyclic aromatic hydrocarbon yang mengandung zat-zat pemicu terjadinya kanker (seperti tar, benzopyrenes, vinyl chlorida, dan nicotine). Di samping itu, nikotin dapat menimbulkan ketagihan, baik pada perokok aktif maupun perokok pasif.

Nikotin merupakan alkaloid yang bersifat stimulan dan pada dosis tinggi beracun. Zat ini hanya ada dalam tembakau, sangat adiktif, dan mempengaruhi otak/susunan saraf.

Sifat nikotin yang adiktif ini dibuktikan dengan adanya jurang antara jumlah perokok yang ingin berhenti merokok dan jumlah yang berhasil berhenti. Karbon monoksida, sejenis gas yang tidak memiliki bau.

Zat ini sangat beracun, jika zat ini terbawa dalam hemoglobin, akan mengganggu kondisi oksigen dalam darah. Amoniak, merupakan gas yang tidak berwarna yang terdiri dari nitrogen dan hidrogen. Formic acid, sejenis cairan tidak berwarna yang bergerak bebas dan dapat membuat lepuh.

Perilaku merokok merupakan perilaku yang berbahaya bagi kesehatan, tetapi masih banyak orang yang melakukannya. Bahkan orang mulai merokok ketika mereka masih remaja.

Untuk berhenti merokok Penulis menyarankan beberapa cara, di mulai dari Mempunyai tekad untuk berhenti merokok, di lanjutkan dengan memuang semua rokok yang dimiliki, kemudian Menjauhlah dari tempat anda biasa merokok.

Nah jika ada diantara kalian yang seorang perokok dan ingin berhenti merokok mungkin beberapa saran yang Penulis telah sampaikan di atas dapat membantu.`,
    date: "24 Maret 2020",
    readTime: "8 menit",
    category: "",
    articleType: "artikel",
    author: "Lala Asri Juniarsih, Harmili,S.Kep.,Ns.,M.Kep",
    views: "2.4k",
    image:
      "../src/assets/article_pic/a77fb3eb15b008561d074d077f87c6810d61bd73.png",
  },
  {
    id: 2,
    title: "Pengelolaan Keuangan Daerah yang Transparan dan Akuntabel",
    excerpt:
      "Artikel ini membahas pentingnya transparansi dan akuntabilitas...",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Transparansi dan akuntabilitas dalam pengelolaan keuangan daerah merupakan pilar utama good governance yang menjadi komitmen pemerintah daerah.

Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sistem informasi keuangan daerah yang terintegrasi memungkinkan masyarakat untuk mengakses informasi anggaran secara real-time.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum. Audit internal dan eksternal dilakukan secara berkala untuk memastikan tidak ada penyimpangan dalam penggunaan anggaran.

Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia. Partisipasi publik dalam penyusunan anggaran menjadi mekanisme penting untuk memastikan anggaran benar-benar mencerminkan kebutuhan masyarakat.`,
    date: "5 Desember 2025",
    readTime: "7 menit",
    category: "",
    articleType: "artikel",
    author: "Prof. Siti Aminah, M.Si",
    views: "3.1k",
    image:
      "https://images.unsplash.com/photo-1764983253036-edd0f55af679?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGNpdHklMjB0ZWNobm9sb2d5JTIwaW5ub3ZhdGlvbnxlbnwxfHx8fDE3NzA2OTA2NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 3,
    title: "Pengumuman: Pemberlakuan Jam Malam Selama Festival Budaya 2026",
    excerpt: "Pemerintah daerah mengumumkan pemberlakuan jam malam khusus...",
    content: `Dalam rangka menjaga keamanan dan ketertiban selama Festival Budaya Tahunan 2026, Pemerintah Kabupaten Sumbawa menetapkan pemberlakuan jam malam khusus yang akan berlaku mulai 15 Januari hingga 20 Januari 2026.

Masyarakat diimbau untuk tetap berada di area festival atau kembali ke tempat penginapan setelah pukul 23.00 WITA. Petugas keamanan gabungan dari TNI, Polri, dan Satpol PP akan melakukan patroli rutin di area festival.

Pengecualian jam malam diberikan kepada penyelenggara acara, panitia festival, petugas keamanan, dan tenaga medis yang bertugas. Mereka wajib menunjukkan identitas resmi saat melewati pos pengamanan.`,
    date: "10 Desember 2025",
    readTime: "5 menit",
    category: "",
    articleType: "pengumuman",
    author: "Humas Kabupaten Sumbawa",
    views: "5.2k",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdWx0dXJhbCUyMGZlc3RpdmFsJTIwaW5kb25lc2lhfGVufDF8fHx8MTc3MDY5MDY3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 4,
    title: "Potensi Ekonomi Kreatif sebagai Penggerak Ekonomi Lokal",
    excerpt:
      "Mengeksplorasi bagaimana ekonomi kreatif dapat menjadi motor penggerak...",
    content: `Ekonomi kreatif memiliki potensi besar sebagai penggerak pertumbuhan ekonomi lokal yang inklusif dan berkelanjutan. Sektor ini tidak hanya menciptakan nilai ekonomi tetapi juga melestarikan budaya lokal.

Industri kreatif di daerah mencakup berbagai subsektor seperti kerajinan tangan, fashion, kuliner, musik, film, dan seni pertunjukan. Digitalisasi membuka peluang baru bagi pelaku ekonomi kreatif.

Pemerintah daerah memberikan dukungan melalui berbagai program seperti pelatihan kewirausahaan, akses permodalan, dan fasilitasi akses pasar. Hub kreatif dan co-working space juga disediakan sebagai tempat kolaborasi.`,
    date: "3 Desember 2025",
    readTime: "7 menit",
    category: "",
    articleType: "artikel",
    author: "Ir. Budi Santoso, M.M",
    views: "1.8k",
    image:
      "https://images.unsplash.com/photo-1555069855-e580a9adbf43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBwYXJ0aWNpcGF0aW9uJTIwbWVldGluZ3xlbnwxfHx8fDE3NzA2OTA2NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 5,
    title: "Pengumuman: Penutupan Sementara Jalan Utama untuk Perbaikan",
    excerpt:
      "Dinas Pekerjaan Umum mengumumkan penutupan sementara Jalan Utama...",
    content: `Dinas Pekerjaan Umum dan Penataan Ruang Kabupaten Sumbawa mengumumkan akan dilakukan penutupan sementara Jalan Lintas Sumbawa KM 15-20 mulai pada 25 Desember 2025 hingga 8 Januari 2026.

Penutupan jalan ini diperlukan untuk melakukan perbaikan menyeluruh pada struktur jalan yang mengalami kerusakan akibat cuaca ekstrem. Pekerjaan meliputi pengaspalan ulang dan perbaikan drainase.

Selama periode penutupan, pengguna jalan dapat menggunakan rute alternatif melalui Jalan Bypass Sumbawa atau Jalan Lama Moyo. Rambu-rambu penunjuk arah akan dipasang di beberapa titik strategis.`,
    date: "20 Desember 2025",
    readTime: "4 menit",
    category: "",
    articleType: "pengumuman",
    author: "Dinas PU Kabupaten Sumbawa",
    views: "6.8k",
    image:
      "https://images.unsplash.com/photo-1581094271901-8022df4466f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2FkJTIwY29uc3RydWN0aW9uJTIwd29ya2Vyc3xlbnwxfHx8fDE3NzA2OTA2Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 6,
    title: "Inovasi Pelayanan Publik Berbasis Teknologi",
    excerpt:
      "Studi kasus implementasi teknologi informasi dalam meningkatkan kualitas...",
    content: `Inovasi dalam pelayanan publik menjadi keharusan di era digital untuk memenuhi ekspektasi masyarakat yang semakin tinggi. Teknologi informasi memberikan solusi untuk meningkatkan kecepatan dan akurasi.

Implementasi sistem pelayanan online memungkinkan masyarakat mengurus berbagai keperluan administrasi tanpa harus datang ke kantor. Aplikasi mobile menyediakan akses 24/7.

Dashboard monitoring memungkinkan pimpinan untuk memantau kinerja pelayanan secara real-time. Inovasi ini bukan hanya tentang digitalisasi, tetapi transformasi budaya pelayanan yang responsif.`,
    date: "1 Desember 2025",
    readTime: "6 menit",
    category: "",
    articleType: "artikel",
    author: "Drs. Hendra Pratama",
    views: "2.7k",
    image:
      "https://images.unsplash.com/photo-1605152276897-4f618f831968?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdWJsaWMlMjBzZXJ2aWNlJTIwY3VzdG9tZXIlMjBzdXBwb3J0fGVufDF8fHx8MTc3MDY5MDY3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

export interface ArticleItem {
  id: number;
  title: string;
  excerpt: string;
  content: string[];
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
    title: "Strategi Pembangunan Daerah Berkelanjutan di Era Digital",
    excerpt:
      "Pembahasan mendalam tentang strategi pembangunan daerah yang berkelanjutan dengan memanfaatkan teknologi digital untuk meningkatkan pelayanan publik.",
    content: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pembangunan daerah berkelanjutan di era digital menjadi fokus utama pemerintah dalam meningkatkan kesejahteraan masyarakat. Strategi ini menggabungkan aspek teknologi informasi dengan prinsip-prinsip pembangunan berkelanjutan untuk menciptakan ekosistem yang inklusif dan efisien.",
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Implementasi teknologi digital dalam pembangunan daerah mencakup berbagai sektor strategis seperti pendidikan, kesehatan, ekonomi, dan administrasi pemerintahan. Platform digital memungkinkan transparansi yang lebih baik dan partisipasi aktif masyarakat dalam proses pembangunan.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore. Penggunaan big data dan analitik membantu pemerintah dalam membuat keputusan yang lebih tepat sasaran berdasarkan data riil dari lapangan. Hal ini memungkinkan alokasi sumber daya yang lebih efisien dan efektif sesuai dengan kebutuhan masyarakat.",
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt. Smart city menjadi salah satu implementasi nyata dari strategi pembangunan digital ini. Dengan mengintegrasikan berbagai sistem infrastruktur kota melalui teknologi IoT, pemerintah dapat memantau dan mengelola layanan publik secara real-time.",
      "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Kolaborasi antara pemerintah, sektor swasta, dan akademisi menjadi kunci keberhasilan pembangunan digital yang berkelanjutan. Melalui kerja sama ini, transfer pengetahuan dan teknologi dapat berjalan lebih cepat dan adaptasi terhadap perubahan menjadi lebih mudah.",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Peningkatan kapasitas SDM menjadi prioritas dalam mendukung transformasi digital. Program pelatihan dan sertifikasi digital diberikan kepada pegawai pemerintah dan masyarakat untuk memastikan mereka memiliki kompetensi yang dibutuhkan di era digital.",
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem. Dengan strategi yang tepat dan implementasi yang konsisten, pembangunan daerah berkelanjutan di era digital akan membawa dampak positif jangka panjang bagi kesejahteraan masyarakat dan kemajuan daerah secara keseluruhan.",
    ],
    date: "7 Desember 2025",
    readTime: "8 menit",
    category: "",
    articleType: "artikel",
    author: "Dr. Ahmad Wijaya",
    views: "2.4k",
    image:
      "https://images.unsplash.com/photo-1531321538006-82b62d9fbb1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGRldmVsb3BtZW50JTIwZ3JlZW4lMjBjaXR5fGVufDF8fHx8MTc3MDY5MDY3NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 2,
    title: "Pengelolaan Keuangan Daerah yang Transparan dan Akuntabel",
    excerpt:
      "Artikel ini membahas pentingnya transparansi dan akuntabilitas dalam pengelolaan keuangan daerah untuk meningkatkan kepercayaan publik.",
    content: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Transparansi dan akuntabilitas dalam pengelolaan keuangan daerah merupakan pilar utama good governance yang menjadi komitmen pemerintah daerah. Prinsip-prinsip ini memastikan bahwa setiap rupiah anggaran publik digunakan secara bertanggung jawab dan memberikan manfaat maksimal bagi masyarakat.",
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sistem informasi keuangan daerah yang terintegrasi memungkinkan masyarakat untuk mengakses informasi anggaran secara real-time. Portal transparansi anggaran menyajikan data lengkap mulai dari perencanaan, pelaksanaan, hingga pertanggungjawaban keuangan daerah.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum. Audit internal dan eksternal dilakukan secara berkala untuk memastikan tidak ada penyimpangan dalam penggunaan anggaran. Temuan audit ditindaklanjuti dengan tegas untuk memberikan efek jera dan menjaga integritas pengelolaan keuangan daerah.",
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia. Partisipasi publik dalam penyusunan anggaran menjadi mekanisme penting untuk memastikan anggaran benar-benar mencerminkan kebutuhan masyarakat. Forum musrenbang dan konsultasi publik diadakan secara rutin di berbagai tingkatan.",
      "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Penerapan sistem e-procurement mengurangi potensi korupsi dan meningkatkan efisiensi pengadaan barang dan jasa pemerintah. Semua proses pengadaan dapat dipantau secara online oleh publik.",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Peningkatan kapasitas aparatur pengelola keuangan daerah melalui pelatihan dan sertifikasi profesional terus dilakukan. Hal ini memastikan bahwa pengelolaan keuangan dilakukan oleh SDM yang kompeten dan berintegritas.",
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem. Dengan pengelolaan keuangan yang transparan dan akuntabel, kepercayaan publik terhadap pemerintah akan meningkat, yang pada akhirnya mendukung terciptanya pemerintahan yang bersih dan melayani.",
    ],
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
    excerpt:
      "Pemerintah daerah mengumumkan pemberlakuan jam malam khusus selama berlangsungnya Festival Budaya Tahunan untuk menjaga keamanan dan ketertiban.",
    content: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dalam rangka menjaga keamanan dan ketertiban selama Festival Budaya Tahunan 2026, Pemerintah Kabupaten Sumbawa menetapkan pemberlakuan jam malam khusus yang akan berlaku mulai 15 Januari hingga 20 Januari 2026.",
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pengaturan jam malam ini bertujuan untuk memastikan bahwa seluruh rangkaian acara festival dapat berjalan dengan lancar dan aman. Masyarakat diimbau untuk tetap berada di area festival atau kembali ke tempat penginapan setelah pukul 23.00 WITA.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum. Petugas keamanan gabungan dari TNI, Polri, dan Satpol PP akan melakukan patroli rutin di area festival dan sekitarnya. Pos pengamanan juga akan didirikan di beberapa titik strategis untuk memberikan rasa aman kepada pengunjung festival.",
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia. Pengecualian jam malam diberikan kepada penyelenggara acara, panitia festival, petugas keamanan, dan tenaga medis yang bertugas. Mereka wajib menunjukkan identitas resmi saat melewati pos pengamanan.",
      "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Masyarakat yang melanggar ketentuan jam malam akan diberikan teguran oleh petugas. Pelanggaran berulang akan ditindaklanjuti sesuai dengan peraturan daerah yang berlaku.",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Informasi lebih lanjut mengenai jadwal acara dan peraturan festival dapat diakses melalui website resmi atau menghubungi hotline Festival Budaya Tahunan 2026.",
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem. Kerja sama dan pengertian masyarakat sangat diharapkan untuk menjadikan Festival Budaya Tahunan 2026 sebagai ajang yang sukses dan berkesan bagi seluruh peserta dan pengunjung.",
    ],
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
      "Mengeksplorasi bagaimana ekonomi kreatif dapat menjadi motor penggerak pertumbuhan ekonomi lokal dan penciptaan lapangan kerja.",
    content: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ekonomi kreatif memiliki potensi besar sebagai penggerak pertumbuhan ekonomi lokal yang inklusif dan berkelanjutan. Sektor ini tidak hanya menciptakan nilai ekonomi tetapi juga melestarikan budaya lokal dan membuka peluang kerja bagi generasi muda.",
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Industri kreatif di daerah mencakup berbagai subsektor seperti kerajinan tangan, fashion, kuliner, musik, film, dan seni pertunjukan. Setiap subsektor memiliki karakteristik unik yang menjadi kekuatan ekonomi lokal.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum. Digitalisasi membuka peluang baru bagi pelaku ekonomi kreatif untuk memasarkan produknya ke pasar yang lebih luas. Platform e-commerce dan media sosial menjadi sarana promosi yang efektif dan terjangkau.",
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia. Pemerintah daerah memberikan dukungan melalui berbagai program seperti pelatihan kewirausahaan, akses permodalan, dan fasilitasi akses pasar. Hub kreatif dan co-working space juga disediakan sebagai tempat kolaborasi dan inovasi.",
      "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Kolaborasi antara pelaku ekonomi kreatif, akademisi, dan pemerintah menciptakan ekosistem yang kondusif untuk pertumbuhan sektor ini. Festival dan pameran produk kreatif diadakan secara rutin untuk memperkenalkan produk lokal kepada publik.",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Branding dan storytelling menjadi kunci sukses produk kreatif dalam memenangkan persaingan pasar. Setiap produk memiliki cerita unik yang mencerminkan identitas dan budaya lokal.",
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem. Dengan dukungan yang tepat, ekonomi kreatif dapat menjadi tulang punggung ekonomi lokal yang tangguh dan memberikan kontribusi signifikan terhadap kesejahteraan masyarakat.",
    ],
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
      "Dinas Pekerjaan Umum mengumumkan penutupan sementara Jalan Utama untuk pekerjaan perbaikan jalan selama 2 minggu ke depan.",
    content: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dinas Pekerjaan Umum dan Penataan Ruang Kabupaten Sumbawa mengumumkan akan dilakukan penutupan sementara Jalan Lintas Sumbawa KM 15-20 untuk pekerjaan perbaikan jalan yang dimulai pada 25 Desember 2025 hingga 8 Januari 2026.",
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Penutupan jalan ini diperlukan untuk melakukan perbaikan menyeluruh pada struktur jalan yang mengalami kerusakan akibat cuaca ekstrem dan volume lalu lintas yang tinggi. Pekerjaan meliputi pengaspalan ulang, perbaikan drainase, dan pemasangan marka jalan.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum. Selama periode penutupan, pengguna jalan dapat menggunakan rute alternatif melalui Jalan Bypass Sumbawa atau Jalan Lama Moyo. Rambu-rambu penunjuk arah akan dipasang di beberapa titik untuk memudahkan navigasi.",
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia. Petugas akan ditempatkan di persimpangan untuk mengatur arus lalu lintas dan memberikan informasi kepada pengendara. Hotline pengaduan juga disediakan untuk menampung keluhan atau pertanyaan masyarakat terkait penutupan jalan ini.",
      "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Masyarakat diimbau untuk merencanakan perjalanan dengan waktu tempuh yang lebih lama dan mengikuti petunjuk petugas di lapangan. Penggunaan rute alternatif mungkin menambah waktu tempuh sekitar 15-20 menit.",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Pemerintah daerah memohon maaf atas ketidaknyamanan yang ditimbulkan dan mengucapkan terima kasih atas pengertian masyarakat. Perbaikan jalan ini merupakan bagian dari komitmen untuk meningkatkan kualitas infrastruktur daerah.",
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem. Informasi terkini mengenai progres pekerjaan dapat dipantau melalui media sosial resmi Dinas Pekerjaan Umum atau website kabupaten.",
    ],
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
      "Studi kasus implementasi teknologi informasi dalam meningkatkan kualitas dan efisiensi pelayanan publik di daerah.",
    content: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Inovasi dalam pelayanan publik menjadi keharusan di era digital untuk memenuhi ekspektasi masyarakat yang semakin tinggi. Teknologi informasi memberikan solusi untuk meningkatkan kecepatan, akurasi, dan kemudahan akses layanan pemerintah.",
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Implementasi sistem pelayanan online memungkinkan masyarakat mengurus berbagai keperluan administrasi tanpa harus datang ke kantor. Aplikasi mobile dan website terintegrasi menyediakan akses 24/7 untuk berbagai layanan.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum. Antrian online dan sistem booking mengurangi waktu tunggu dan meningkatkan efisiensi pelayanan. Masyarakat dapat memilih waktu kedatangan sesuai kebutuhan dan menghindari kerumunan di loket pelayanan.",
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia. Chatbot dan virtual assistant memberikan informasi dan bantuan kepada masyarakat secara real-time. Sistem ini dapat menjawab pertanyaan umum dan membantu masyarakat dalam mengisi formulir atau melengkapi persyaratan.",
      "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Dashboard monitoring memungkinkan pimpinan untuk memantau kinerja pelayanan secara real-time dan mengidentifikasi area yang perlu perbaikan. Data analytics membantu dalam pengambilan keputusan yang lebih baik.",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Feedback dan rating dari masyarakat menjadi input penting untuk peningkatan kualitas layanan secara berkelanjutan. Survey kepuasan masyarakat dilakukan secara berkala untuk mengukur efektivitas inovasi yang diterapkan.",
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem. Inovasi pelayanan publik berbasis teknologi bukan hanya tentang digitalisasi proses, tetapi juga tentang transformasi budaya pelayanan yang lebih responsif dan berorientasi pada kepuasan masyarakat.",
    ],
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
export interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  newsCategory: "daerah" | "nasional";
  author: string;
  image: string;
  views: string;
}

export const newsData: NewsItem[] = [
  {
    id: 1,
    title: "Peluncuran Program Digitalisasi Layanan Publik",
    excerpt: "Pemerintah meluncurkan program digitalisasi...",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pemerintah Kabupaten Sumbawa resmi meluncurkan program digitalisasi layanan publik yang bertujuan untuk meningkatkan efisiensi dan kemudahan akses bagi seluruh masyarakat. Program ini merupakan bagian dari transformasi digital yang telah direncanakan sejak awal tahun 2025.

Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Program digitalisasi ini mencakup berbagai aspek pelayanan publik, mulai dari administrasi kependudukan hingga layanan kesehatan.

Masyarakat kini dapat mengakses berbagai layanan pemerintah melalui aplikasi mobile dan website resmi tanpa harus datang ke kantor. Platform digital ini dilengkapi dengan sistem keamanan berlapis untuk melindungi data pribadi masyarakat.`,
    date: "12 Oktober 2025",
    readTime: "3 menit",
    category: "Pembaruan Kebijakan",
    newsCategory: "daerah",
    author: "Admin SumbawaKab",
    image:
      "https://images.unsplash.com/photo-1649855815366-290064ca5602?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwZ292ZXJubWVudCUyMHNlcnZpY2VzJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzA2OTA2NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    views: "5.2k",
  },
  {
    id: 2,
    title: "Peningkatan Infrastruktur Teknologi di Seluruh Wilayah",
    excerpt: "Pembangunan infrastruktur teknologi dilakukan...",
    content: `Pemerintah daerah melakukan percepatan pembangunan infrastruktur teknologi informasi di seluruh wilayah Kabupaten Sumbawa. Proyek ini mencakup instalasi jaringan fiber optik, pembangunan menara telekomunikasi, dan peningkatan kapasitas data center pemerintah.

Target utama dari program ini adalah memastikan setiap kecamatan memiliki akses internet berkecepatan tinggi. Hal ini akan memudahkan masyarakat dalam mengakses informasi, pendidikan online, dan berbagai layanan digital lainnya.

Dengan infrastruktur teknologi yang memadai, diharapkan dapat meningkatkan daya saing daerah dan membuka peluang investasi baru yang akan membawa dampak positif bagi perekonomian masyarakat.`,
    date: "10 Oktober 2025",
    readTime: "5 menit",
    category: "Pengumuman",
    newsCategory: "daerah",
    author: "Admin SumbawaKab",
    image:
      "https://images.unsplash.com/photo-1604869515882-4d10fa4b0492?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXR3b3JrJTIwaW5mcmFzdHJ1Y3R1cmUlMjBmaWJlciUyMG9wdGljfGVufDF8fHx8MTc3MDY5MDY3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    views: "5.2k",
  },
  {
    id: 3,
    title: "Transparansi Anggaran Daerah Tahun 2025",
    excerpt:
      "Publikasi laporan anggaran daerah untuk meningkatkan transparansi...",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pemerintah Kabupaten Sumbawa mempublikasikan laporan lengkap anggaran pendapatan dan belanja daerah (APBD) tahun 2025. Langkah ini diambil sebagai komitmen terhadap transparansi dan akuntabilitas pengelolaan keuangan publik.

Laporan ini dapat diakses secara online melalui portal resmi pemerintah daerah. Masyarakat dapat melihat secara detail alokasi anggaran untuk setiap sektor, mulai dari pendidikan, kesehatan, infrastruktur, hingga program-program kesejahteraan sosial.

Total APBD tahun 2025 mengalami peningkatan dibanding tahun sebelumnya, dengan fokus utama pada pembangunan infrastruktur dan peningkatan kualitas sumber daya manusia. Alokasi terbesar diberikan untuk sektor pendidikan dan kesehatan.

Pemerintah juga membuka ruang bagi masyarakat untuk memberikan masukan dan saran terkait penggunaan anggaran daerah. Forum konsultasi publik akan diadakan secara berkala untuk menampung aspirasi masyarakat.`,
    date: "8 Oktober 2025",
    readTime: "4 menit",
    category: "Siaran Pers",
    newsCategory: "daerah",
    author: "Admin SumbawaKab",
    image:
      "https://images.unsplash.com/photo-1753955900083-b62ee8d97805?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidWRnZXQlMjB0cmFuc3BhcmVuY3klMjBmaW5hbmNpYWwlMjBkb2N1bWVudHxlbnwxfHx8fDE3NzA2OTA2NzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    views: "5.2k",
  },
  {
    id: 4,
    title: "Kerja Sama dengan Sektor Swasta untuk Pembangunan",
    excerpt: "Pemerintah menjalin kemitraan strategis dengan sektor swasta...",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pemerintah Kabupaten Sumbawa menjalin kemitraan strategis dengan berbagai perusahaan swasta untuk mempercepat program pembangunan daerah. Kerja sama ini mencakup berbagai sektor, termasuk infrastruktur, pariwisata, dan energi terbarukan.

Model kerja sama yang diterapkan adalah skema public-private partnership (PPP) yang telah terbukti efektif dalam mempercepat pembangunan infrastruktur. Pemerintah memberikan kemudahan regulasi dan insentif bagi investor yang berkomitmen pada pembangunan berkelanjutan.

Beberapa proyek prioritas yang akan dikerjakan melalui skema kerja sama ini antara lain pembangunan kawasan industri terpadu, pengembangan destinasi wisata, dan instalasi pembangkit listrik tenaga surya skala besar.

Pemerintah memastikan bahwa setiap proyek kerja sama dengan swasta harus memberikan manfaat langsung kepada masyarakat, baik dalam bentuk penciptaan lapangan kerja, transfer teknologi, maupun peningkatan kesejahteraan ekonomi lokal.`,
    date: "6 Oktober 2025",
    readTime: "4 menit",
    category: "Siaran Pers",
    newsCategory: "daerah",
    author: "Admin SumbawaKab",
    image:
      "https://images.unsplash.com/photo-1650978810641-6610f4b6d15a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHBhcnRuZXJzaGlwJTIwY29vcGVyYXRpb258ZW58MXx8fHwxNzcwNjkwNjczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    views: "5.2k",
  },
  {
    id: 5,
    title: "Presiden Resmikan Ibu Kota Negara Nusantara",
    excerpt:
      "Presiden meresmikan Ibu Kota Negara (IKN) Nusantara sebagai pusat pemerintahan baru...",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Presiden Republik Indonesia secara resmi meresmikan Ibu Kota Negara (IKN) Nusantara sebagai pusat pemerintahan baru Indonesia. Peresmian ini menandai babak baru dalam sejarah Indonesia dengan konsep kota yang modern, berkelanjutan, dan ramah lingkungan.

IKN Nusantara dirancang dengan konsep forest city yang mengintegrasikan ruang hijau dan infrastruktur modern. Kota ini dilengkapi dengan teknologi smart city terkini untuk memberikan pelayanan publik yang efisien dan berkualitas.

Pembangunan IKN menggunakan energi terbarukan dengan target mencapai net zero emission pada tahun 2045. Sistem transportasi massal berbasis listrik dan jalur pedestrian yang luas menjadi prioritas dalam perencanaan kota.

Perpindahan pusat pemerintahan diharapkan dapat memeratakan pembangunan ekonomi di seluruh Indonesia dan mengurangi beban Jakarta sebagai ibu kota yang sudah sangat padat.`,
    date: "15 Oktober 2025",
    readTime: "7 menit",
    category: "Berita Utama",
    newsCategory: "nasional",
    author: "Admin SumbawaKab",
    image:
      "https://images.unsplash.com/photo-1762344685696-39a3ce45fba4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjYXBpdGFsJTIwY2l0eSUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzA2OTA2NzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    views: "5.2k",
  },
  {
    id: 6,
    title: "Pemerintah Luncurkan Program Kartu Sakti Kesehatan",
    excerpt:
      "Program kartu kesehatan digital yang memberikan akses gratis ke fasilitas kesehatan...",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pemerintah meluncurkan program Kartu Sakti Kesehatan yang memberikan akses gratis ke seluruh fasilitas kesehatan pemerintah. Program ini merupakan evolusi dari sistem jaminan kesehatan nasional yang lebih terintegrasi.

Kartu digital ini dapat diakses melalui aplikasi mobile dan terintegrasi dengan rekam medis elektronik. Pasien dapat dengan mudah mengakses riwayat kesehatan, membuat janji temu, dan mendapatkan resep digital secara praktis.

Seluruh warga negara Indonesia berhak mendapatkan Kartu Sakti Kesehatan tanpa biaya pendaftaran. Cakupan layanan mencakup pemeriksaan kesehatan rutin, pengobatan, operasi, hingga perawatan intensif.

Pemerintah mengalokasikan anggaran khusus untuk memastikan kualitas layanan kesehatan tetap optimal. Fasilitas kesehatan di seluruh Indonesia telah dipersiapkan untuk mengimplementasikan sistem ini secara serentak.`,
    date: "14 Oktober 2025",
    readTime: "5 menit",
    category: "Kebijakan Nasional",
    newsCategory: "nasional",
    author: "Admin SumbawaKab",
    image:
      "https://images.unsplash.com/photo-1758887248912-03a0c34a2f41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGglMjBjYXJkJTIwbWVkaWNhbCUyMHNlcnZpY2VzfGVufDF8fHx8MTc3MDY5MDY3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    views: "5.2k",
  },
  {
    id: 7,
    title: "Menteri Pendidikan Umumkan Kurikulum Merdeka Versi 2.0",
    excerpt:
      "Pembaruan kurikulum merdeka dengan fokus pada pengembangan keterampilan digital...",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Menteri Pendidikan mengumumkan pembaruan Kurikulum Merdeka versi 2.0 yang lebih fokus pada pengembangan keterampilan digital dan pembentukan karakter siswa.

Pembaruan mencakup penambahan mata pelajaran coding, digital literacy, dan critical thinking. Metode pembelajaran lebih menekankan pada project-based learning dan kolaborasi antar siswa untuk memecahkan masalah nyata.

Guru diberikan pelatihan intensif untuk dapat mengimplementasikan kurikulum baru ini dengan efektif. Platform digital juga disediakan untuk mendukung proses belajar mengajar yang lebih interaktif dan menyenangkan.

Evaluasi pembelajaran tidak hanya fokus pada nilai akademik tetapi juga pada pengembangan soft skills seperti komunikasi, kreativitas, dan kemampuan beradaptasi di lingkungan yang cepat berubah.`,
    date: "13 Oktober 2025",
    readTime: "4 menit",
    category: "Pendidikan",
    newsCategory: "nasional",
    author: "Admin SumbawaKab",
    image:
      "https://images.unsplash.com/photo-1654153699546-19f15256855d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBzdHVkZW50cyUyMGxlYXJuaW5nfGVufDF8fHx8MTc3MDY5MDY3NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    views: "5.2k",
  },
  {
    id: 8,
    title: "Indonesia Perkuat Kemitraan dengan ASEAN dalam Ekonomi Digital",
    excerpt:
      "Pemerintah Indonesia memimpin inisiatif kerja sama regional ASEAN...",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Indonesia memimpin inisiatif penguatan kerja sama ekonomi digital di kawasan ASEAN. Kemitraan ini bertujuan untuk menciptakan ekosistem ekonomi digital yang terintegrasi.

Kerja sama mencakup harmonisasi regulasi e-commerce, perlindungan data konsumen, dan fasilitasi transaksi digital lintas negara. Platform pembayaran digital regional juga akan dikembangkan untuk memudahkan transaksi antar negara ASEAN.

Program pertukaran talenta digital dan pelatihan bersama akan diadakan untuk meningkatkan kompetensi sumber daya manusia di bidang teknologi. Indonesia berkomitmen untuk berbagi best practices dalam pengembangan startup.

Target dari kerja sama ini adalah meningkatkan kontribusi ekonomi digital terhadap GDP negara-negara ASEAN hingga 20% pada tahun 2030. Investasi bersama dalam infrastruktur digital juga akan diperkuat.`,
    date: "11 Oktober 2025",
    readTime: "6 menit",
    category: "Hubungan Internasional",
    newsCategory: "nasional",
    author: "Admin SumbawaKab",
    image:
      "https://images.unsplash.com/photo-1660795938451-118f95a34e38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBU0VBTiUyMGRpZ2l0YWwlMjBlY29ub215JTIwcGFydG5lcnNoaXB8ZW58MXx8fHwxNzcwNjkwNjc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    views: "5.2k",
  },
];

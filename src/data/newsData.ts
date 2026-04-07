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
    title: "PJS BUPATI SAMBUT KEDATANGAN WAKIL MENTERI PKP RI",
    excerpt:
      "Pjs Bupati Sumbawa Sambut Kedatangan Wakil Menteri Perumahan dan Kawasan Permukiman Republik Indonesia...",
    content: `Pjs Bupati Sumbawa Sambut Kedatangan Wakil Menteri Perumahan dan Kawasan Permukiman Republik Indonesia (PKP RI), Beserta Rombongannya. Kedatangan Wakil Menteri PKP RI ini dalam rangka Kunjungan kerja terkait Program Nasional “3 Juta Rumah Sehat dan Layak Huni” bagi masyarakat Indonesia, terutama Masyarakat Berpenghasilan Rendah (MBR). Penyambutan ini, berlangsung di Aula H. Madilaoe ADT Lantai 3 Kantor Bupati Sumbawa pada Sabtu, (16/11/2024). 
    Hadir juga Pjs Bupati Sumbawa Barat, Sekretaris Daerah Kabupaten Sumbawa, Forkopimda Kabupaten Sumbawa, Para Asisten Pemkab Sumbawa, OPD Terkait, serta Sejumlah Kepala Desa se-Kabupaten Sumbawa. Wakil Menteri PKP RI, H. Fahri Hamzah, S.E., menyampaikan kunjungan ini berkaitan dengan Program Nasional 3 Juta Rumah Sehat dan Layak Huni bagi Rakyat Indonesia, terutama Masyarakat Berpenghasilan Rendah (MBR). Kementerian PKP, memiliki tugas penting dalam menyelesaikan salah satu kebutuhan pokok manusia, yakni tempat tinggal atau rumah. Masih banyak masyarakat Indonesia terutama di Sumbawa yang masih belum punya rumah layak huni. Oleh sebab itu, penting program pembangunan 3 juta rumah ini, sebagai solusi untuk menyelesaikan persoalan perumahan bagi masyarakat. 
    Dengan target 1 juta rumah di kawasan perkotaan dan 2 juta rumah di desa. Sumbawa memiliki potensi besar untuk menjadi pilot project program ini. Antusiasme dan kesiapan pemerintah daerah serta masyarakat adalah modal penting untuk kesuksesan program nasional ini. Ujarnya. Pjs Bupati Sumbawa, Dr. Najamuddin Amy, S.Sos., M.M., menyampaikan kehadiran Wakil Menteri di Kabupaten Sumbawa ini, sebagai kunjungan perdana yang tidak boleh disia-siakan kesempatan ini untuk membangun Kabupaten Sumbawa. Pemerintah Kabupaten Sumbawa sendiri siap berkontribusi dalam menjalankan program 3 Juta Rumah bagi masyarakat miskin ataupun berpenghasilan rendah dengan aset tanah yang dimiliki pemerintah Kabupaten Sumbawa. Oleh karena itu, koordinasi antara pemerintah Pusat, Provinsi dan Kabupaten/Kota sangatlah dibutuhkan dalam menyukseskan program nasional ini. Pemerintah Kabupaten Sumbawa dan Sumbawa Barat berharap, Kementerian PKP RI dapat menjadikan Sumbawa sebagai Pilot Project dari program nasional ini. Cetusnya.`,
    date: "15 Oktober 2025",
    readTime: "7 menit",
    category: "Berita Utama",
    newsCategory: "nasional",
    author: "Admin SumbawaKab",
    image: "/News_pic/20241116064414.jpg",
    views: "5.2k",
  },
  {
    id: 6,
    title:
      "PRESIDEN JOKOWI DORONG INDUSTRIALISASI PERTANIAN DI KABUPATEN SUMBAWA",
    excerpt:
      "Presiden Republik Indonesia, Ir. H. Joko Widodo, melakukan kunjungan kerja ke Kabupaten Sumbawa, Provinsi Nusa Tenggara Barat...",
    content: `Presiden Republik Indonesia, Ir. H. Joko Widodo, melakukan kunjungan kerja ke Kabupaten Sumbawa, Provinsi Nusa Tenggara Barat, Pada Kamis, (2/5/2024). Adapun kunjungan kerja yang akan dilakukan Presiden RI yang dilakukan yaitu Blusukan ke Pasar Seketeng, Kabupaten dan Ikut serta dalam Panen Raya Jagung yang berlangsung di Samota, Kabupaten Sumbawa

Turut juga menyertai Presiden kunjungan kerja ini, Menteri Perdagangan, Menteri Pertanian, dan Menteri Pekerjaan Umum dan Perumahan Rakyat (PUPR). Hadir juga Pj. Gubernur Provinsi Nusa Tenggara Barat beserta jajarannya, Bupati dan Wakil Bupati Sumbawa beserta Jajarannya.

Presiden RI yang akrap di sapa Jokowi, menyampaikan Harga Jagung turun gara-gara over Supply. Hal ini terjadi dikarenakan Panen Besar Jagung yang baru Panen di Sumbawa, Dompu, Maupun Gorontalo Seminggu yang lalu.
 Turunnya harga ini, baik untuk Peternak namun, tidak baik untuk Petani, menjaga keseimbangan ini tidak mudah namun, yang paling penting produktivitasnya meningkatkan. Oleh karena itu, Perlu adanya industrialisasi yang dekat dengan lahan Pertanian dan Hal ini akan terus di dorong dengan tujuan harga dapat lebih stabil apabila industrinya dekat dengan Lahan Pertanian. Jelasnya.`,
    date: "02 Mei 2024",
    readTime: "5 menit",
    category: "Kebijakan Nasional",
    newsCategory: "nasional",
    author: "Admin SumbawaKab",
    image: "/News_pic/20240502021645.jpeg",
    views: "5.2k",
  },
  {
    id: 7,
    title:
      "Fasilitasi MoU antara Pemkab Sumbawa dan Investor, Badan Pangan Nasional Dorong Percepatan Pembangunan Pelabuhan Pangan Teluk Santong Sumbawa",
    excerpt:
      "Keberadaan fasilitas logistik pangan di suatu wilayah bisa mendorong peningkatan kesejahteraan petani sekaligus menjaga agar komoditas pangan tetap terjangkau...",
    content: `JAKARTA - Keberadaan fasilitas logistik pangan di suatu wilayah bisa mendorong peningkatan kesejahteraan petani sekaligus menjaga agar komoditas pangan tetap terjangkau di tingkat konsumen. Fasilitas logistik seperti pelabuhan secara signifikan berdampak langsung terhadap efisiensi proses distribusi pangan dan peningkatan nilai tambah komoditas unggulan daerah.


Hal tersebut mengemuka dalam diskusi Pembangunan Pelabuhan Teluk Santong, Sumbawa, Nusa Tenggara Barat (NTB) sekaligus Penandatanganan Memorandum of Understanding (MoU) antara PT Mitra Buana Bahari dan Pemerintah Kabupaten Sumbawa, tentang Pengembangan Fasilitas Logistik dan Distribusi Komoditas Pangan Teluk Santong Sumbawa, Jumat, (3/3/2023), di Jakarta. Hadir dalam kesempatan tersebut Kepala Badan Pangan Nasional/National Food Agency (NFA) Arief Prasetyo Adi, Tenaga Ahli Menteri Perhubungan Andre Mulpyana, Bupati Sumbawa Mahmud Abdullah, Kepala Dinas Ketahanan Pangan Provinsi NTB Abdul Azis, President Director PT Mitra Buana Bahari/FKS Multiagro Indarto Gondo, Serta jajaran Eselon 1 NFA.


Arief mengatakan, sesuai komitmen awal NFA mendukung penuh dilakukan percepatan pembangunan pelabuhan Teluk Santong. Pelabuhan tersebut akan menjadi fasilitas logistik yang sangat penting bagi sentra produksi pangan wilayah timur, khususnya untuk meningkatkan pendistribusian jagung yang merupakan komoditas unggulan di Sumbawa dan Dompu, NTB.


“Saya sering komunikasi dengan Pak Gubernur NTB, setiap musim panen jagung, petani jagung di Sumbawa dan Dompu ini bingung menjual dan mendistribusikan hasil panennya, karena hasil panennya melimpah sementara sarana pengangkutan dan pendistribusian masih terbatas,” ungkapnya.


Pihaknya lalu memberikan solusi agar dibangun pelabuhan dengan fasilitas logistik pangan yang memadai di wilayah Sumbawa, langkah ini untuk mempercepat pendistribusian komoditas pangan unggulan sehingga dapat menolong para petani jagung. Menindaklanjuti, menurut Arief, pada Januari 2023 lalu, NFA telah menginisiasi pertemuan antara Gubernur NTB, Bupati Sumbawa, dan calon investor swasta dari PT Mitra Buana Bahari (MBB)/FKS Multiagro.


“Menindaklanjuti rencana pembangunan pelabuhan, hari ini kita lakukan penandatanganan nota kesepahama oleh Bupati Sumbawa dengan President Director MBB. Ini juga merupakan bagian dari tugas NFA, yaitu menghubungkan para pihak yang punya semangat sama dalam memajukan pangan nasional, agar terjalin kolaborasi yang baik untuk percepatan ketahanan pangan,” ungkapnya.


Arief berpesan kepada Pemkab Sumbawa, MBB, serta para pihak yang berperan dalam pembangunan pelabuhan ini agar dapat mengeksekusi semua tahapan persiapan dan pembangunan dengan cepat, namun tetap sesuai dengan tata kelola pemerintahan yang baik.


“Tidak usah sungkan-sungkan apa yang menjadi hambatan segera laporkan. Kalau butuh support di sini kita sudah barsama Kemenhub, Pemprov NTB, Pemkab, termasuk NFA. Karena ini untuk memajukan pangan nasional jadi tolong benar-benar kita kawal bersama. Dalam dua minggu nanti kita akan cek dan turun langsung lagi ke Sumbawa,” ujarnya.


Adapun tahapan selanjutnya setelah MoU ini adalah Penandatangan Perjanjian Kerja Sama (PKS) antara MBB dengan Pemkab Sumbawa yang ditargetkan terlaksana di minggu ke tiga Maret 2023, lalu pengurusan perizinan baik di tingkat Pemkab Sumbawa maupun MBB, Persetujuan KSOP, Rekomendasi BPKP, serta Perizinan Konsesi. Pelaksanaan pembangunan ditargetkan mulai berjalan di April 2023.


Pelabuhan Teluk Santong sendiri akan dilengkapi fasilitas yang bisa mempercepat bongkar-muat komoditas pangan, serta fasilitas penyimpanan seperti silo dengan kapasitas sekitar 30 ribu ton untuk persiapan panen tahun berikutnya. Arief mengatakan, selain sebagai investor, MBB juga didorong agar bisa turut berperan sebagai off taker jagung petani setempat.


“Kita bangun secara terintegrasi, sehingga petani jagung bisa fokus meningkatkan produksinya dan tidak perlu khawatir, karena berapa pun yang diproduksi akan bisa terserap. Apabila kebutuhan dalam negeri sudah terpenuhi, dengan ketersediaan pelabuhan kita bisa ekspor,” terangnya.


Arief meyakini, melalui skema ini, potensi jagung sebagai volatile food atau pangan yang bergejolak bisa ditekan. “Jagung memiliki impact yang besar terutama kepada sektor peternakan unggas. Jadi satu paket, kalau jagung harganya tinggi, daging ayam, ayam hidup, dan telur ayam ikut tinggi. Sehingga dalam regulasi Harga Acuan Pembelian/Penjualan atau HAP yang kita susun dibuat satu paket aturan, jagung, ayam, dan telur,” ujarnya.


Lebih lanjut, Arief menuturkan, langkah membangun konektivitas pangan ini juga sejalan dengan arahan Presiden RI Joko Widodo, yang menekankan agar Kementerian/Lembaga dan Pemerintah Daerah, bersama pelaku usaha berkolaborasi guna meningkatkan investasi di daerah.


Sementara itu, Bupati Sumbawa Mahmud Abdullah mengatakan, Pemerintah Kabupaten Sumbawa berkomitmen untuk memastikan pelabuhan ini terealisasi dengan baik, mengingat pembangunan ini disiapkan untuk memajukan sektor pangan daerah dan nasional. Ia beserta jajarannya mengaku siap bekerja sama dengan MBB untuk menjalankan setiap tahapan pembangunan yang sudah direncanakan.


"Saat ini, untuk status lahan sudah disiapkan dan dibebaskan," ujarnya.


Selanjutnya dengan potensi pangan Sumbawa yang besar, ia berharap, sarana pelabuhan tersebut bisa dimanfaatkan tidak hanya untuk jagung saja tetapi juga untuk seluruh komoditas pangan yang ada di Sumbawa, seperti beras dan lainnya.


“Sumbawa ini memiliki potensi yang baik di sektor pangan, apa yang terjadi terkait turunnya harga karena susahnya kita keluarkan, angkutannya yang terbatas,” ungkapnya.


President Director MBB/FKS Multiagro Indarto Gondo mengatakan, MBB siap mendukung program pemerintah memperkuat ketahanan pangan, salah satunya dari sisi penguatan fasilitas logistik melalui pembangunan pelabuhan.


"Pangan bisa murah kalau pelaksanaan logistik bisa efisien dan memadai," terangnya.


Menurutnya, Sumbawa memiliki produktivitas jagung yang sangat baik maka harus didukung dengan fasilitas logistik yang baik juga. “Sumbawa saat ini jagungnya sangat melimpah, kita tahu kebutuhan jagung di Indonesia juga sangat besar, dan beberapa tahun ini banyak jagung yang mulai bisa diekpor. Jadi pertumbuhan jagung di Sumbawa sangat pesat dan hari ini saya rasa harus diimbangi dengan logistik yang lebih besar dan lebih cepat,” paparnya.


Tenaga Ahli Menteri Perhubungan Andre Mulpyana mengatakan, Kementerian Perhubungan mendukung upaya NFA dan Pemerintah Daerah NTB membangun sarana pelabuhan sebagai solusi bagi keluaran pangan yang banyak diproduksi oleh Sumbawa dan sejumlah wilayah di NTB.


Menurutnya, langkah ini merupakan improvement yang baik untuk meningkatkan pendistribusian jagung, mengingat produksi jagung NTB pertahun sebesar 1,5 juta ton namun yang bisa didistribusikan keluar sekitar 1 juta ton.


*Siaran Pers*


*Badan Pangan Nasional/National Food Agency (NFA)*


039/R-NFA/III/2023


3 Maret 2023.`,
    date: "03 Maret 2023",
    readTime: "9 menit",
    category: "Pendidikan",
    newsCategory: "nasional",
    author: "Admin SumbawaKab",
    image: "/News_pic/20230308075407.jpg",
    views: "5.2k",
  },
  {
    id: 8,
    title:
      "Badan Pangan Nasional Dorong Pemerintah Daerah, BUMN Pangan, dan Swasta Kolaborasi Tingkatkan Investasi Fasilitas Logistik Pangan",
    excerpt:
      "genda pemerintah dalam memajukan dan memperkuat pangan nasional harus didukung ketersediaan fasilitas dan sarana logistik pangan yang memadai....",
    content: `CILEGON, BANTEN - Agenda pemerintah dalam memajukan dan memperkuat pangan nasional harus didukung ketersediaan fasilitas dan sarana logistik pangan yang memadai. Untuk itu, pembangunan fasilitas logistik pangan baru serta modern harus terus didorong dan ditingkatkan melalui kolaborasi antara sektor Pemerintah, BUMN, dan swasta.


Pernyataan tersebut disampaikan Kepala Badan Pangan Nasional/National Food Agency (NFA) Arief Prasetyo Adi saat melakukan kunjungan kerja bersama meninjau sarana dan fasilitas logistik pangan milik PT FKS Multi Agro Tbk di Krakatau International Port, Cilegon, Banten, Minggu, (15/1/2023). Dalam keterangannya ia mengatakan, fasilitas logistik pangan merupakan sarana yang sangat penting dan harus dimiliki di setiap daerah karena merupakan faktor penentu dalam mendukung kelancaran distribusi pangan nasional, baik itu distribusi antara daerah maupun dari dan ke mancanegara.


“Hari ini NFA bersama Menteri Perdagangan, Satgas Pangan Polri, unsur Pemerintah Daerah yang diwakili Gubernur Banten, Gubernur NTB, Bupati Sumbawa, Perwakilan Pemprov DKI Jakarta, Pemprov Jawa Barat, serta BUMN Pangan dari Perum Bulog dan ID Food, bersama-sama melihat fasilitas logistik pangan di Krakatau International Port. serta melihat bagaimana fasilitas tersebut bekerja dalam mendukung proses distribusi pangan,” jelasnya.


Sejumlah fasilitas logistik yang dikunjungi seperti fasilitas grain pump dan integrated warehouse kapasitas 200 ribu ton, automatic modern terminal transit system yang menghubungkan dermaga dan gudang dengan kapasitas transfer konveyor hingga 1.300 MT/jam yang dikelola PT Sentral Grain Terminal. Selain itu, juga dilakukan kunjungan ke Pabrik Pengolahan Jagung PT. Tereos FKS Indonesia dan Pabrik Tepung Terigu PT Bungasari Flour Mills Indonesia.


Arief mengatakan, sudah menjadi keharusan fasilitas logistik pangan yang terstandarisasi seperti di Krakatau International Port ini terdapat secara merata di seluruh wilayah Indonesia khususnya di sentra-sentra produksi pangan. “Fasilitas logistik pangan di Krakatau International Port ini dapat menjadi benchmark. Apabila terpasang di pelabuhan-pelabuhan di Indonesia maka distribusi pangan dapat lebih masif, cepat, dan efisien,” ujarnya.


Arief mengatakan, untuk membangun fasilitas logistik pangan yang modern dan terintegrasi tentunya tidak mudah karena diperlukan kompetensi dan pengalaman. Maka dari itu, ia mendorong Pemerintah Daerah, BUMN Pangan, dan pihak swasta yang telah memiliki pengalaman dapat saling berkolaborasi. “Hal ini juga sejalan dengan arahan Presiden RI Joko Widodo terkait peningkatan investasi. Presiden sering menekankan Kementerian/Lembaga dan Pemerintah Daerah tidak ragu untuk membuka peluang investasi di berbagai sektor, mengingat investasi adalah salah satu kunci pertumbuhan ekonomi,” papar Arief.


Arief mengatakan, upaya membuka peluang investasi fasilitas logistik pangan ini telah dimulai baru-baru ini di Nusa Tenggara Barat (NTB) melalui rencana pembangunan Pelabuhan Teluk Santong, di Sumbawa, Nusa Tenggara Barat (NTB). Pelabuhan tersebut merupakan bentuk kolaborasi Pemerintah Daerah dengan swasta.


“Kita telah melakukan peletakan batu pertamanya 11 Januari lalu. Pelabuhan ini dipersiapkan sebagai pusat distribusi jagung produksi Sumbawa dan Dompu sehingga akan dilengkapi infrastruktur dermaga serta silo dengan kapasitas sekitar 30 ribu ton,” ungkapnya.


Arief berharap, daerah lain mengikuti langkah Pemerintah Provinsi NTB yang telah berhasil membuka keran investasi pembangunan fasilitas logistik pangan di wilayahnya. Pelabuhan tersebut dapat meningkatkan nilai tambah dan daya saing jagung sebagai komoditas unggulan daerah.


“Apabila setiap komoditas pangan strategis nasional yang mengalami surplus bisa kita kelola dengan baik pendistribusiannya, maka stabilisasi stok dan harga dalam negeri bisa lebih terjaga. Hal tersebut juga dapat mengurangi inflasi dan mendorong pertumbuhan ekonomi. Selain itu, kita bisa menambah devisa negara karena peluang ekspor lebih terbuka,” katanya.


Berdasarkan data Prognosa Neraca Pangan Nasional periode Januari-Desember 2023, sejumlah komoditas pangan strategis diproyeksikan mengalami surplus di akhir 2023, diantaranya jagung sekitar 3,2 juta ton, daging ayam ras sekitar 689 ribu ton, dan beras sekitar 6,3 juta ton.


Menanggapi urgensi pengembangan fasilitas logistik pangan, Gubernur NTB Zulkieflimansyah mengatakan, investasi fasilitas logistik pangan yang tepat bisa menyelesaikan berbagai persoalan mendasar di daerah, misalnya untuk NTB, terkait distribusi jagung yang stoknya melimpah saat panen. Ia mendukung penuh masuknya investasi pembangunan pelabuhan Teluk Santong dan berharap fasilitas tersebut segera beroperasi.


Sementara itu, Bupati Sumbawa Mahmud Abdullah mengaku, mendapatkan banyak insight baru dalam kunjungan kerja meninjau fasilitas logistik pangan di Krakatau International Port. Ia berharap apa yang sudah berjalan di sini dapat dilaksanakan juga di Pelabuhan Teluk Santong yang akan segera dibangun.


Terkait penyediaan fasilitas logistik pangan di Kawasan Krakatau International Port tersebut, Menteri Perdagangan Zulkifli Hasan menyampaikan apresiasi kepada pengusaha swasta yang telah melakukan investasi pengembangan fasilitas logistik pangan sehingga membuat proses distribusi dan pengolahan pangan menjadi lebih efisien.


“Pengusaha-pengusaha ini kalau bisa bikin efisien harga kita bisa jadi bagus. Kalau mereka kerjanya bagus, tambah efisien, tambah lingkungan nyaman, tenaga kerja kompak, tentu akan menguntungkan semua pihak,” ujarnya.


PJ Gubernur Banten Al Muktabar pada kesempatan yang sama mengatakan, fasilitas logistik pangan di Krakatau International Port merupakan salah satu aset penting di Provinsi Banten. Keberadaan pelabuhan ini merupakan bentuk dukungan pemerintah daerah dalam penguatan ketahanan pangan Nasional, baik dari sisi produksi maupun logistik pangan.


Country Head FKS Group Yanuar Samron mengatakan, FKS Group sebagai mitra pemerintah dalam menjaga ketahanan pangan nasional, selalu siap berkolaborasi bersama pemerintah mendukung kelancaran distribusi komoditas pangan melalui penyediaan dan pembangunan fasilitas logistik yang terintegrasi.`,
    date: "15 Januari 2023",
    readTime: "6 menit",
    category: "Hubungan Internasional",
    newsCategory: "nasional",
    author: "Admin SumbawaKab",
    image: "/public/News_pic/20230119025043.jpg",
    views: "5.2k",
  },
];

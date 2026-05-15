export interface InformasiSection {
  id: string;
  title: string;
  slug: string;
  heroImage: string;
  lastUpdated: string;
  author: string;
  readTime: string;
  excerpt: string;
  subSections: {
    id: string;
    title: string;
    content: string[];
    image?: string;
    imageCaption?: string;
    stats?: { label: string; value: string }[];
  }[];
}

export const informasiUmumData: InformasiSection[] = [
  {
    id: "sejarah",
    title: "Sejarah Kabupaten Sumbawa",
    slug: "sejarah",
    heroImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=80",
    lastUpdated: "10 Mei 2026",
    author: "Dinas Komunikasi dan Informatika Kab. Sumbawa",
    readTime: "8 menit baca",
    excerpt:
      "Kabupaten Sumbawa menyimpan kekayaan sejarah yang panjang, mulai dari masa kejayaan Kerajaan Sumbawa, era kolonialisme, hingga perjuangan kemerdekaan yang membentuk identitas daerah ini hingga saat ini.",
    subSections: [
      {
        id: "kerajaan-sumbawa",
        title: "Masa Kerajaan Sumbawa",
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=900&q=80",
        imageCaption: "Ilustrasi kawasan bersejarah Kabupaten Sumbawa",
        content: [
          "Sejarah Kabupaten Sumbawa tidak dapat dipisahkan dari keberadaan Kerajaan Sumbawa yang telah berdiri sejak abad ke-16. Kerajaan ini merupakan salah satu kerajaan Islam terbesar di Nusa Tenggara Barat yang memiliki pengaruh besar dalam kehidupan sosial, budaya, dan politik masyarakat setempat.",
          "Pada masa kejayaannya, Kerajaan Sumbawa menjalin hubungan diplomatik dan perdagangan dengan berbagai kerajaan di Nusantara, termasuk Kerajaan Makassar, Kerajaan Bima, dan beberapa kerajaan di Jawa. Hubungan ini tidak hanya berdampak pada bidang ekonomi, tetapi juga memperkaya khazanah budaya masyarakat Sumbawa.",
          "Raja-raja Sumbawa dikenal sebagai pemimpin yang bijaksana dan dicintai rakyatnya. Sistem pemerintahan yang diterapkan menggabungkan nilai-nilai adat istiadat lokal dengan ajaran Islam yang kuat, sehingga menciptakan tatanan masyarakat yang harmonis dan berkeadilan.",
        ],
      },
      {
        id: "era-kolonial",
        title: "Era Kolonialisme Belanda",
        image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=900&q=80",
        imageCaption: "Jejak sejarah masa kolonial di wilayah Sumbawa",
        content: [
          "Kedatangan Belanda ke wilayah Sumbawa pada abad ke-17 membawa perubahan besar dalam tatanan pemerintahan dan kehidupan masyarakat. Melalui politik Pax Neerlandica, Belanda berusaha menanamkan pengaruhnya dengan memanfaatkan struktur kerajaan yang telah ada.",
          "Pada tahun 1674, Belanda berhasil membuat perjanjian dengan Kerajaan Sumbawa yang secara resmi mengakui kedaulatan VOC di wilayah tersebut. Namun demikian, kerajaan tetap dipertahankan sebagai sistem pemerintahan lokal di bawah pengawasan residen Belanda.",
          "Meski berada di bawah pengaruh kolonial, semangat perlawanan rakyat Sumbawa tidak pernah padam. Berbagai bentuk perlawanan baik secara langsung maupun melalui diplomasi terus dilakukan demi mempertahankan kedaulatan dan martabat bangsa.",
          "Masa kolonial juga membawa perubahan dalam sistem ekonomi daerah, di mana produksi pertanian dan peternakan mulai diorientasikan untuk memenuhi kebutuhan pasar Belanda. Hal ini berdampak pada perubahan pola hidup dan mata pencaharian masyarakat Sumbawa.",
        ],
      },
      {
        id: "kemerdekaan",
        title: "Perjuangan Kemerdekaan dan Pembentukan Daerah",
        content: [
          "Proklamasi Kemerdekaan Indonesia pada 17 Agustus 1945 disambut dengan penuh semangat oleh rakyat Sumbawa. Para pemuda dan tokoh masyarakat bersatu padu untuk menegakkan kedaulatan Republik Indonesia di wilayah Sumbawa, meskipun berbagai rintangan dan ancaman terus menghadang.",
          "Setelah melalui perjuangan yang panjang, Kabupaten Sumbawa secara resmi dibentuk berdasarkan Undang-Undang Nomor 69 Tahun 1958 tentang Pembentukan Daerah-daerah Tingkat II dalam Wilayah Daerah-daerah Tingkat I Bali, Nusa Tenggara Barat, dan Nusa Tenggara Timur.",
          "Pembentukan Kabupaten Sumbawa menjadi tonggak sejarah penting bagi masyarakat setempat. Dengan status sebagai daerah otonom, Sumbawa memiliki kewenangan untuk mengelola pemerintahan dan pembangunan sesuai dengan kebutuhan dan potensi daerahnya sendiri.",
          "Sejak saat itu, Kabupaten Sumbawa terus berkembang dengan berbagai program pembangunan yang bertujuan meningkatkan kesejahteraan masyarakat. Generasi demi generasi para pemimpin Sumbawa telah memberikan kontribusi nyata dalam memajukan daerah ini menjadi seperti yang kita kenal sekarang.",
        ],
      },
      {
        id: "perkembangan-modern",
        title: "Perkembangan di Era Modern",
        content: [
          "Memasuki era reformasi dan otonomi daerah, Kabupaten Sumbawa mengalami transformasi yang signifikan dalam berbagai bidang kehidupan. Desentralisasi pemerintahan membuka peluang bagi Sumbawa untuk lebih mandiri dalam mengelola sumber daya dan merumuskan kebijakan pembangunan.",
          "Berbagai sektor unggulan seperti pertanian, peternakan, perikanan, dan pariwisata terus dikembangkan untuk mendorong pertumbuhan ekonomi daerah. Sumbawa kini dikenal sebagai salah satu daerah penghasil komoditas pertanian dan peternakan terbaik di Nusa Tenggara Barat.",
          "Pembangunan infrastruktur yang masif dalam beberapa dekade terakhir telah mengubah wajah Kabupaten Sumbawa menjadi lebih modern dan terhubung. Jalan-jalan baru, jembatan, pelabuhan, dan bandar udara yang terus dikembangkan membuka aksesibilitas yang lebih baik bagi masyarakat dan dunia usaha.",
        ],
      },
    ],
  },
  {
    id: "geografi",
    title: "Geografi Kabupaten Sumbawa",
    slug: "geografi",
    heroImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1400&q=80",
    lastUpdated: "10 Mei 2026",
    author: "Dinas Komunikasi dan Informatika Kab. Sumbawa",
    readTime: "6 menit baca",
    excerpt:
      "Kabupaten Sumbawa terletak di bagian barat Pulau Sumbawa dengan luas wilayah mencapai 6.643,98 km², menjadikannya salah satu kabupaten terluas di Provinsi Nusa Tenggara Barat dengan kekayaan alam yang luar biasa.",
    subSections: [
      {
        id: "letak-geografis",
        title: "Letak dan Posisi Geografis",
        image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=900&q=80",
        imageCaption: "Panorama alam Kabupaten Sumbawa yang indah",
        stats: [
          { label: "Luas Wilayah", value: "6.643,98 km²" },
          { label: "Jumlah Kecamatan", value: "24 Kecamatan" },
          { label: "Jumlah Desa/Kel.", value: "165 Desa/Kelurahan" },
          { label: "Garis Pantai", value: "± 600 km" },
        ],
        content: [
          "Kabupaten Sumbawa secara geografis terletak di bagian barat Pulau Sumbawa, Provinsi Nusa Tenggara Barat. Secara astronomis, wilayah ini berada pada posisi 116°42' hingga 118°22' Bujur Timur dan 8°8' hingga 9°07' Lintang Selatan.",
          "Batas wilayah Kabupaten Sumbawa meliputi: di sebelah utara berbatasan dengan Laut Flores, di sebelah selatan dengan Samudra Hindia dan Kabupaten Sumbawa Barat, di sebelah timur dengan Kabupaten Dompu, serta di sebelah barat dengan Kabupaten Sumbawa Barat dan Selat Alas.",
          "Kabupaten Sumbawa terdiri dari 24 kecamatan yang membawahi 165 desa dan kelurahan. Ibu kota kabupaten berkedudukan di Kota Sumbawa Besar yang merupakan pusat pemerintahan, perdagangan, dan kebudayaan daerah.",
        ],
      },
      {
        id: "topografi",
        title: "Topografi dan Kondisi Lahan",
        content: [
          "Kondisi topografi Kabupaten Sumbawa sangat bervariasi, mulai dari dataran rendah di pesisir pantai hingga pegunungan yang menjulang tinggi di bagian pedalaman. Keragaman topografi ini menciptakan berbagai ekosistem yang unik dan kaya akan keanekaragaman hayati.",
          "Wilayah pesisir Sumbawa yang membentang sepanjang kurang lebih 600 kilometer menawarkan pemandangan alam yang memukau dengan pantai-pantai berpasir putih, teluk-teluk yang tenang, dan ekosistem mangrove yang masih terjaga kelestariannya.",
          "Di bagian tengah dan pedalaman, terdapat rangkaian pegunungan dengan puncak-puncak tertinggi yang mencapai lebih dari 1.000 meter di atas permukaan laut. Kawasan pegunungan ini merupakan hulu dari berbagai sungai yang mengalir ke seluruh penjuru kabupaten, menjadi sumber air bagi kehidupan masyarakat dan pertanian.",
          "Sebagian besar wilayah Kabupaten Sumbawa masih berupa kawasan hutan, baik hutan lindung maupun hutan produksi. Kawasan hutan ini memiliki peran vital sebagai penyangga lingkungan hidup, pengatur tata air, dan penyimpan keanekaragaman hayati yang sangat berharga.",
        ],
      },
      {
        id: "iklim",
        title: "Iklim dan Curah Hujan",
        image: "https://images.unsplash.com/photo-1504608524841-42584120d693?w=900&q=80",
        imageCaption: "Kondisi iklim tropis khas wilayah Sumbawa",
        content: [
          "Kabupaten Sumbawa beriklim tropis dengan dua musim utama, yaitu musim hujan dan musim kemarau. Musim hujan berlangsung sekitar bulan November hingga April, sementara musim kemarau terjadi pada bulan Mei hingga Oktober.",
          "Curah hujan rata-rata tahunan di Kabupaten Sumbawa berkisar antara 700 hingga 1.500 mm per tahun, dengan variasi yang cukup signifikan antara wilayah pantai dan pegunungan. Wilayah pegunungan umumnya mendapatkan curah hujan yang lebih tinggi dibandingkan daerah pesisir.",
          "Suhu udara di Kabupaten Sumbawa relatif stabil sepanjang tahun, dengan rata-rata berkisar antara 26°C hingga 34°C. Suhu tertinggi biasanya terjadi pada musim kemarau, terutama di wilayah pesisir dan dataran rendah.",
          "Kondisi iklim yang ada memberikan pengaruh besar terhadap pola pertanian dan aktivitas masyarakat. Para petani telah beradaptasi dengan pola iklim lokal untuk mengoptimalkan hasil pertanian, terutama dalam penentuan waktu tanam padi dan tanaman pangan lainnya.",
        ],
      },
      {
        id: "sumber-daya-alam",
        title: "Sumber Daya Alam",
        content: [
          "Kabupaten Sumbawa dianugerahi kekayaan sumber daya alam yang melimpah, baik di daratan maupun di perairan. Potensi ini menjadi modal utama pembangunan ekonomi daerah yang berkelanjutan.",
          "Sektor pertambangan menjadi salah satu andalan perekonomian Sumbawa. Berbagai jenis mineral berharga ditemukan di wilayah ini, termasuk emas, tembaga, mangan, dan marmer. Pengelolaan yang bertanggung jawab terhadap sumber daya tambang ini diharapkan dapat memberikan manfaat maksimal bagi kesejahteraan masyarakat.",
          "Potensi kelautan dan perikanan Sumbawa sangat besar dengan perairan yang kaya akan berbagai jenis ikan, udang, lobster, dan rumput laut. Teluk Saleh, Bima Bay, dan berbagai perairan lainnya merupakan kawasan fishing ground yang produktif dan menjadi sumber penghidupan bagi ribuan nelayan.",
          "Sektor kehutanan menyimpan potensi yang tidak kalah besar dengan luasan hutan yang masih cukup signifikan. Berbagai jenis kayu bernilai tinggi, hasil hutan non-kayu, dan jasa lingkungan dari kawasan hutan memberikan kontribusi nyata bagi perekonomian dan kelestarian alam.",
        ],
      },
    ],
  },
  {
    id: "demografi",
    title: "Demografi Kabupaten Sumbawa",
    slug: "demografi",
    heroImage: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1400&q=80",
    lastUpdated: "10 Mei 2026",
    author: "Dinas Kependudukan dan Pencatatan Sipil Kab. Sumbawa",
    readTime: "7 menit baca",
    excerpt:
      "Dengan jumlah penduduk sekitar 450.000 jiwa yang tersebar di 24 kecamatan, Kabupaten Sumbawa memiliki komposisi demografis yang beragam dengan mayoritas penduduk usia produktif yang menjadi modal utama pembangunan daerah.",
    subSections: [
      {
        id: "jumlah-penduduk",
        title: "Jumlah dan Persebaran Penduduk",
        image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=900&q=80",
        imageCaption: "Kehidupan masyarakat di Kabupaten Sumbawa",
        stats: [
          { label: "Total Penduduk", value: "± 452.678 jiwa" },
          { label: "Laki-laki", value: "228.450 jiwa" },
          { label: "Perempuan", value: "224.228 jiwa" },
          { label: "Kepadatan", value: "68 jiwa/km²" },
        ],
        content: [
          "Berdasarkan data Dinas Kependudukan dan Pencatatan Sipil Kabupaten Sumbawa, jumlah penduduk kabupaten ini mencapai sekitar 452.678 jiwa yang tersebar di 24 kecamatan. Dengan luas wilayah 6.643,98 km², kepadatan penduduk rata-rata adalah sekitar 68 jiwa per kilometer persegi.",
          "Persebaran penduduk di Kabupaten Sumbawa tidak merata, dengan konsentrasi terbesar berada di wilayah perkotaan, terutama di Kecamatan Sumbawa yang merupakan ibu kota kabupaten. Kecamatan-kecamatan di pesisir dan yang memiliki aksesibilitas baik umumnya memiliki kepadatan penduduk lebih tinggi.",
          "Komposisi penduduk berdasarkan jenis kelamin menunjukkan keseimbangan yang cukup baik, dengan rasio jenis kelamin sekitar 102 laki-laki per 100 perempuan. Kondisi ini mencerminkan distribusi gender yang proporsional dalam struktur kependudukan Kabupaten Sumbawa.",
        ],
      },
      {
        id: "struktur-usia",
        title: "Struktur Usia dan Angkatan Kerja",
        content: [
          "Struktur usia penduduk Kabupaten Sumbawa didominasi oleh kelompok usia produktif (15-64 tahun) yang mencapai sekitar 65% dari total penduduk. Kondisi ini merupakan bonus demografi yang harus dimanfaatkan sebaik-baiknya untuk mendorong pertumbuhan ekonomi daerah.",
          "Penduduk usia muda (0-14 tahun) mencapai sekitar 28% dari total populasi, menunjukkan bahwa Sumbawa masih memiliki pertumbuhan penduduk yang dinamis. Investasi yang tepat di bidang pendidikan dan kesehatan untuk kelompok ini akan memberikan dampak jangka panjang yang sangat signifikan.",
          "Penduduk lansia (65 tahun ke atas) mencapai sekitar 7% dari total penduduk. Proporsi ini masih relatif kecil namun terus meningkat seiring perbaikan kualitas layanan kesehatan dan meningkatnya angka harapan hidup masyarakat Sumbawa.",
          "Angkatan kerja di Kabupaten Sumbawa berjumlah sekitar 220.000 orang dengan tingkat partisipasi angkatan kerja (TPAK) sekitar 65%. Sektor pertanian, kehutanan, dan perikanan masih menjadi penyerap tenaga kerja terbesar, diikuti oleh sektor perdagangan dan jasa.",
        ],
      },
      {
        id: "pertumbuhan-penduduk",
        title: "Pertumbuhan Penduduk dan Migrasi",
        image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=900&q=80",
        imageCaption: "Aktivitas kehidupan masyarakat Sumbawa sehari-hari",
        content: [
          "Laju pertumbuhan penduduk Kabupaten Sumbawa dalam satu dekade terakhir menunjukkan tren yang relatif stabil, dengan rata-rata pertumbuhan sekitar 1,2% per tahun. Angka ini sedikit di bawah rata-rata pertumbuhan penduduk nasional, mencerminkan keberhasilan program keluarga berencana di daerah ini.",
          "Fenomena migrasi masuk dan keluar cukup dinamis di Kabupaten Sumbawa. Arus masuk umumnya didorong oleh peluang kerja di sektor pertambangan dan industri pengolahan, sementara arus keluar lebih banyak dipengaruhi oleh kebutuhan pendidikan tinggi dan pencarian kerja di kota-kota besar.",
          "Urbanisasi internal di dalam Kabupaten Sumbawa juga berlangsung cukup intensif, ditandai dengan perpindahan penduduk dari desa ke kota kecamatan dan ibu kota kabupaten. Fenomena ini perlu diantisipasi dengan perencanaan tata ruang dan penyediaan fasilitas publik yang memadai di perkotaan.",
        ],
      },
      {
        id: "etnis-agama",
        title: "Komposisi Etnis dan Agama",
        content: [
          "Kabupaten Sumbawa memiliki komposisi etnis yang cukup beragam meski didominasi oleh Suku Samawa (Sumbawa asli) yang merupakan penduduk asli daerah ini. Selain Suku Samawa, terdapat pula komunitas Suku Bima, Sasak, Jawa, Bali, Bugis, dan Tionghoa yang telah lama bermukim dan melebur dalam kehidupan sosial masyarakat.",
          "Keberagaman etnis ini menjadikan Kabupaten Sumbawa sebagai miniatur Indonesia yang kaya akan khazanah budaya. Interaksi antar etnis berlangsung harmonis dalam kehidupan sehari-hari, perdagangan, pernikahan, dan berbagai kegiatan sosial kemasyarakatan.",
          "Dari sisi keagamaan, mayoritas penduduk Kabupaten Sumbawa memeluk agama Islam, mencapai sekitar 97% dari total penduduk. Sisanya memeluk agama Hindu, Kristen, Katolik, dan Buddha. Kerukunan antar umat beragama di Sumbawa terjaga dengan baik, menjadi salah satu aset sosial yang sangat berharga.",
          "Bahasa Sumbawa (Basa Samawa) menjadi bahasa daerah utama yang digunakan dalam komunikasi sehari-hari, disamping Bahasa Indonesia sebagai bahasa nasional. Pelestarian bahasa daerah ini terus didorong sebagai bagian dari upaya menjaga identitas dan warisan budaya lokal.",
        ],
      },
    ],
  },
  {
    id: "kondisi-sosial",
    title: "Kondisi Sosial Kabupaten Sumbawa",
    slug: "kondisi-sosial",
    heroImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1400&q=80",
    lastUpdated: "10 Mei 2026",
    author: "Dinas Sosial Kabupaten Sumbawa",
    readTime: "9 menit baca",
    excerpt:
      "Kondisi sosial Kabupaten Sumbawa terus mengalami kemajuan yang signifikan, tercermin dari peningkatan Indeks Pembangunan Manusia (IPM), perbaikan akses layanan kesehatan dan pendidikan, serta berbagai program pemberdayaan masyarakat yang terus digalakkan.",
    subSections: [
      {
        id: "pendidikan",
        title: "Pendidikan",
        image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=900&q=80",
        imageCaption: "Fasilitas pendidikan di Kabupaten Sumbawa",
        stats: [
          { label: "Angka Melek Huruf", value: "94,7%" },
          { label: "APK SD/MI", value: "109,8%" },
          { label: "APK SMP/MTs", value: "97,2%" },
          { label: "APK SMA/SMK/MA", value: "83,4%" },
        ],
        content: [
          "Sektor pendidikan Kabupaten Sumbawa telah mengalami kemajuan yang cukup berarti dalam beberapa tahun terakhir. Angka Partisipasi Kasar (APK) untuk jenjang SD/MI mencapai 109,8%, menunjukkan bahwa hampir seluruh anak usia sekolah dasar telah mengenyam pendidikan.",
          "Pemerintah Kabupaten Sumbawa terus berupaya meningkatkan kualitas pendidikan melalui berbagai program, diantaranya peningkatan kompetensi guru, perbaikan sarana dan prasarana sekolah, serta pemberian beasiswa bagi siswa berprestasi dari keluarga kurang mampu.",
          "Jumlah satuan pendidikan di Kabupaten Sumbawa cukup memadai, dengan ratusan sekolah dasar, puluhan sekolah menengah pertama, dan sekolah menengah atas yang tersebar di seluruh kecamatan. Selain sekolah negeri, terdapat pula sekolah swasta dan madrasah yang turut berkontribusi dalam penyelenggaraan pendidikan daerah.",
          "Pendidikan tinggi di Kabupaten Sumbawa ditopang oleh beberapa perguruan tinggi, termasuk Universitas Samawa dan beberapa politeknik yang mencetak sumber daya manusia berkualitas untuk memenuhi kebutuhan pembangunan daerah.",
        ],
      },
      {
        id: "kesehatan",
        title: "Kesehatan",
        image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=900&q=80",
        imageCaption: "Fasilitas kesehatan modern di Kabupaten Sumbawa",
        stats: [
          { label: "Angka Harapan Hidup", value: "67,8 tahun" },
          { label: "Puskesmas", value: "25 unit" },
          { label: "Rumah Sakit", value: "4 unit" },
          { label: "Posyandu Aktif", value: "487 unit" },
        ],
        content: [
          "Kualitas kesehatan masyarakat Kabupaten Sumbawa terus membaik, ditandai dengan meningkatnya angka harapan hidup yang kini mencapai 67,8 tahun. Berbagai program kesehatan preventif dan promotif yang dilaksanakan pemerintah daerah berkontribusi signifikan terhadap pencapaian ini.",
          "Jaringan fasilitas kesehatan di Kabupaten Sumbawa telah cukup merata dengan keberadaan 25 Puskesmas, 4 rumah sakit, dan ratusan posyandu aktif yang tersebar di seluruh pelosok kabupaten. Pemerintah daerah terus berupaya meningkatkan kualitas dan jangkauan layanan kesehatan, terutama di daerah terpencil.",
          "Program Jaminan Kesehatan Nasional (JKN) telah memberikan dampak positif bagi aksesibilitas layanan kesehatan masyarakat Sumbawa. Semakin banyak warga yang dapat menikmati layanan kesehatan berkualitas tanpa khawatir terkendala biaya.",
          "Angka kematian ibu dan bayi di Kabupaten Sumbawa telah berhasil diturunkan secara signifikan melalui program Kesehatan Ibu dan Anak (KIA) yang intensif. Keberadaan bidan desa dan kader posyandu yang aktif di setiap desa menjadi ujung tombak keberhasilan program ini.",
        ],
      },
      {
        id: "kemiskinan-kesejahteraan",
        title: "Kemiskinan dan Kesejahteraan",
        content: [
          "Angka kemiskinan di Kabupaten Sumbawa menunjukkan tren penurunan yang konsisten dalam beberapa tahun terakhir. Melalui berbagai program penanggulangan kemiskinan yang terintegrasi, pemerintah daerah berhasil menurunkan persentase penduduk miskin secara bertahap.",
          "Program pemberdayaan ekonomi masyarakat seperti pengembangan UMKM, pemberian modal usaha bergulir, dan pelatihan keterampilan vokasional terus digalakkan untuk meningkatkan kapasitas ekonomi masyarakat miskin. Berbagai program tersebut terbukti efektif dalam membuka peluang usaha dan meningkatkan pendapatan keluarga.",
          "Pemerintah Kabupaten Sumbawa juga aktif menyalurkan berbagai bantuan sosial kepada kelompok masyarakat yang rentan dan tidak mampu. Program Keluarga Harapan (PKH), Bantuan Pangan Non Tunai (BPNT), dan berbagai bantuan lainnya membantu meringankan beban pengeluaran keluarga miskin.",
          "Indeks Pembangunan Manusia (IPM) Kabupaten Sumbawa terus meningkat dari tahun ke tahun, mencerminkan kemajuan yang dicapai dalam tiga dimensi pembangunan manusia yaitu kesehatan, pendidikan, dan standar hidup layak. Peningkatan IPM ini menjadi indikator positif bahwa pembangunan daerah telah memberikan manfaat nyata bagi masyarakat.",
        ],
      },
      {
        id: "budaya-sosial",
        title: "Kehidupan Sosial dan Budaya",
        image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=900&q=80",
        imageCaption: "Keragaman budaya dan tradisi masyarakat Sumbawa",
        content: [
          "Kehidupan sosial masyarakat Kabupaten Sumbawa sangat kental dengan nilai-nilai gotong royong, kekeluargaan, dan saling menghormati. Tradisi-tradisi lokal seperti Barapan Kebo (karapan kerbau), Maen Jaran (pacuan kuda), dan berbagai upacara adat masih terus dilestarikan sebagai identitas budaya yang khas.",
          "Semangat gotong royong dalam masyarakat Sumbawa tercermin dalam berbagai kegiatan kemasyarakatan, mulai dari pembangunan fasilitas desa, penyelenggaraan pesta adat, hingga penanganan bencana alam. Tradisi saling membantu ini menjadi perekat sosial yang sangat kuat di tengah kehidupan modern yang semakin individualistis.",
          "Seni dan budaya Sumbawa sangat beragam dan kaya, meliputi seni tari tradisional, seni musik dengan berbagai alat musik khas, seni kerajinan tangan seperti tenun Samawa dan ukiran, serta berbagai tradisi lisan yang mengandung nilai-nilai kearifan lokal.",
          "Pemerintah Kabupaten Sumbawa berkomitmen untuk terus melestarikan dan mengembangkan kekayaan budaya lokal sebagai aset daerah yang tak ternilai. Berbagai festival budaya, pameran seni, dan program pendidikan budaya di sekolah menjadi wahana pelestarian warisan budaya leluhur untuk generasi mendatang.",
        ],
      },
    ],
  },
];

export function getInformasiById(id: string): InformasiSection | undefined {
  return informasiUmumData.find((item) => item.id === id);
}

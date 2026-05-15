export interface PemerintahanSection {
  id: string;
  title: string;
  slug: string;
  heroImage: string;
  lastUpdated: string;
  author: string;
  readTime: string;
  excerpt: string;
  type?: 'biodata' | 'visi-misi' | 'table';
  biodata?: {
    label: string;
    value: string | {
      jalan?: string;
      kelDesa?: string;
      kecamatan?: string;
      kabKota?: string;
      provinsi?: string;
    };
  }[];
  pendidikan?: {
    jenjang: string;
    nama?: string;
    tahun?: string;
    tempat?: string;
  }[];
  visiMisi?: {
    visi: string;
    visiPenjelasan: {
      title: string;
      description: string;
    }[];
    misi: {
      title: string;
      description: string;
    }[];
    programUnggulan: string[];
  };
  tableData?: {
    headers: string[];
    rows: {
      no: string;
      nama: string;
      jabatan: string;
    }[];
  };
}

export const pemerintahanData: PemerintahanSection[] = [
  {
    id: "bupati",
    title: "Bupati Sumbawa",
    slug: "bupati",
    heroImage: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=1400&q=80",
    lastUpdated: "15 Mei 2026",
    author: "Sekretariat Daerah Kabupaten Sumbawa",
    readTime: "3 menit baca",
    excerpt: "Profil dan biodata lengkap Bupati Kabupaten Sumbawa periode 2025-2030.",
    type: 'biodata',
    biodata: [
      { label: "Nama Lengkap", value: "Ir. H. Syarafuddin Jarot, MP." },
      { label: "Jabatan", value: "Bupati Sumbawa" },
      { label: "Tanggal Lahir", value: "8 Mei 1964" },
      { label: "Tempat Lahir", value: "Sumbawa" },
      { label: "Jenis Kelamin", value: "Laki-laki" },
      { label: "Agama", value: "Islam" },
      { label: "Status Perkawinan", value: "Menikah" },
      {
        label: "Alamat Rumah",
        value: {
          kelDesa: "Sumbawa",
          kecamatan: "Sumbawa",
          provinsi: "Nusa Tenggara Barat"
        }
      },
      {
        label: "Alamat Kantor",
        value: {
          jalan: "Jl. Garuda No. 1",
          kelDesa: "Uma Sima",
          kecamatan: "Sumbawa",
          kabKota: "Sumbawa",
          provinsi: "Nusa Tenggara Barat"
        }
      },
    ],
    pendidikan: [
      { jenjang: "SD", tempat: "Sumbawa" },
      { jenjang: "SMP", tempat: "Sumbawa" },
      { jenjang: "SMA", nama: "SMAN 1 Sumbawa", tahun: "1984", tempat: "Sumbawa" },
      { jenjang: "Sarjana (S1)", nama: "Universitas Mataram", tahun: "1989", tempat: "Mataram" },
    ]
  },
  {
    id: "wakil-bupati",
    title: "Wakil Bupati Sumbawa",
    slug: "wakil-bupati",
    heroImage: "https://images.unsplash.com/photo-1560264357-8d9202250f21?w=1400&q=80",
    lastUpdated: "15 Mei 2026",
    author: "Sekretariat Daerah Kabupaten Sumbawa",
    readTime: "3 menit baca",
    excerpt: "Profil dan biodata lengkap Wakil Bupati Kabupaten Sumbawa periode 2025-2030.",
    type: 'biodata',
    biodata: [
      { label: "Nama Lengkap", value: "Drs. H. Mohamad Ansori" },
      { label: "Jabatan", value: "Wakil Bupati Sumbawa" },
      { label: "Tanggal Lahir", value: "6 Oktober 1966" },
      { label: "Tempat Lahir", value: "Blitar" },
      { label: "Jenis Kelamin", value: "Laki-laki" },
      { label: "Agama", value: "Islam" },
      { label: "Status Perkawinan", value: "Menikah" },
      {
        label: "Alamat Rumah",
        value: {
          kelDesa: "Brang Biji",
          kecamatan: "Sumbawa",
          kabKota: "Sumbawa",
          provinsi: "Nusa Tenggara Barat"
        }
      },
      {
        label: "Alamat Kantor",
        value: {
          jalan: "Jl. Garuda No. 1",
          kelDesa: "Uma Sima",
          kecamatan: "Sumbawa",
          kabKota: "Sumbawa",
          provinsi: "Nusa Tenggara Barat"
        }
      },
    ],
    pendidikan: [
      { jenjang: "Sarjana (S1)", nama: "IAIN Sunan Ampel", tahun: "1991" },
    ]
  },
  {
    id: "visi-misi",
    title: "Visi dan Misi",
    slug: "visi-misi",
    heroImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1400&q=80",
    lastUpdated: "15 Mei 2026",
    author: "Sekretariat Daerah Kabupaten Sumbawa",
    readTime: "10 menit baca",
    excerpt: "Visi dan Misi Pemerintah Kabupaten Sumbawa Tahun 2025-2030 dalam mewujudkan Sumbawa yang Unggul, Maju, dan Sejahtera.",
    type: 'visi-misi',
    visiMisi: {
      visi: "Terwujudnya Kabupaten Sumbawa yang Unggul, Maju dan Sejahtera",
      visiPenjelasan: [
        {
          title: "Sumbawa Unggul",
          description: "Unggul Sumberdayanya (meliputi: Sumber daya manusia dan sosial budaya, sumber daya pemerintahan dan birokrasi serta sumber daya alam, lingkungan dan infrastruktur) bermakna bahwa pembangunan Kabupaten Sumbawa menggunakan sumber daya yang unggul (keunggulan komparatif atau comparative advantage) dan sekaligus menghasilkan sumber daya yang unggul atau berdaya saing (keunggulan kompetitif atau comparative advantage). Keunggulan komparatif sumberdaya tersebut menjadi potensi/kekuatan dalam pelaksanaan pembangunan, sementara keunggulan kompetitif sumber daya tersebut menjadi syarat untuk mampu bersaing dengan produk/sumberdaya dari luar."
        },
        {
          title: "Sumbawa Maju",
          description: "Maju Perekonomiannya, bermakna bahwa pembangunan Kabupaten Sumbawa diarahkan untuk menghasilkan dan/atau mengembangkan perekonomian yang maju, ditandai oleh terjadinya diversifikasi dan peningkatan produktivitas berbagai sektor ekonomi (terutama pertanian/agribisnis) tumbuhkembangnya ekonomi industri/agroindustri yang kreatif-inovatif serta perdagangan/pemasaran produk yang terjamin."
        },
        {
          title: "Sumbawa Sejahtera",
          description: "Sejahtera Masyarakatnya, bermakna bahwa pembangunan Kabupaten Sumbawa ditujukan untuk mewujudkan masyarakat yang sejahtera lahir dan batin, ditandai oleh tingkat kemiskinan, pengangguran dan ketimpangan yang rendah serta ketahanan pangan yang tinggi."
        }
      ],
      misi: [
        {
          title: "Pembangunan Sumber Daya Manusia dan Sosial Budaya Unggul",
          description: "Melalui peningkatan kuantitas dan kualitas pelayanan pendidikan dan kesehatan, serta pemberdayaan dan transformasi nilai-nilai sosial, budaya, ketenagakerjaan, kepemudaan dan perempuan sebagai pondasi dari daya saing daerah."
        },
        {
          title: "Pembangunan Sumberdaya Pemerintahan dan Birokrasi Unggul",
          description: "Mempercepat penurunan kemiskinan, meningkatkan nilai tambah sektor agribisnis, industri dan pariwisata."
        },
        {
          title: "Pembangunan Sumber Daya Alam, Lingkungan dan Infrastruktur Unggul",
          description: "Melalui pengelolaan/penggunaan sumber sumber daya alam dan lingkungan secara berkelanjutan, penguatan mitigasi bencana serta pengembangan infrastruktur untuk aksesibilitas dan konektifitas antar wilayah."
        },
        {
          title: "Pembangunan Perekonomian Maju",
          description: "Melalui pertumbuhan ekonomi inklusif yang berbasis pada pertanian/agribisnis dan industri/agroindustri dengan dukungan energi sumberdaya mineral (pertambangan dan energi) dan pariwisata bernilai tambah dan berdaya saing."
        },
        {
          title: "Pembangunan Masyarakat Sejahtera",
          description: "Melalui perlindungan dan pemberdayaan kelompok masyarakat miskin (penanggulangan kemiskinan), mengurangi pengangguran dan kesenjangan, serta memperkuat ketahanan pangan masyarakat."
        }
      ],
      programUnggulan: [
        "Membangun Penampungan Air Hujan, Cek Dam dan Sumur Bor Sebagai Sumber Irigasi Pertanian",
        "Meningkatkan Pendapatan Daerah Hingga 50 Persen",
        "Peningkatan Jaringan Jalan Mantap Hingga 80 Persen",
        "Menciptakan Tenaga Kerja Unggul dan Mandiri",
        "Industrialisasi Produk Unggulan Daerah dan Peningkatan Investasi",
        "Pembentukan Satgas Pengamanan Harga Benih, Pupuk dan Harga Gabah serta Jagung",
        "Perlindungan dan Jaminan Sosial Ketenagakerjaan bagi Pekerja Rentan",
        "Pemberian Insentif Kepada Imam Masjid, Guru Ngaji dan Pemuka Agama Lainnya Hingga Tingkat Dusun",
        "Bantuan Modal Usaha Bagi Pelaku UMKM dan Pendampingan Enterpreneur Milenial",
        "Penataan Lingkungan Tata Kota, Peningkatan Sarana dan Prasarana Olahraga dan Rekreasi",
        "Meningkatkan Tambahan Penghasilan Aparatur Sipil Negara (ASN)",
        "Siswa Sehat Bergizi dan Kartu Sumbawa Pintar (KSP)"
      ]
    }
  },
  {
    id: "lembaga-eksekutif",
    title: "Lembaga Eksekutif",
    slug: "lembaga-eksekutif",
    heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1400&q=80",
    lastUpdated: "15 Mei 2026",
    author: "Badan Kepegawaian dan Pengembangan SDM Kab. Sumbawa",
    readTime: "5 menit baca",
    excerpt: "Daftar nama-nama pejabat Sekabupaten Sumbawa Tahun 2025 yang bertugas dalam struktur pemerintahan daerah.",
    type: 'table',
    tableData: {
      headers: ["No.", "Nama", "Jabatan"],
      rows: [
        { no: "1", nama: "DR. Budi Prasetiyo, S.Sos.M.AP", jabatan: "Sekretaris Daerah" },
        { no: "2", nama: "Drs. Irawan Subekti", jabatan: "Asisten Pemerintahan dan Kesejahteraan Rakyat Sekretariat Daerah" },
        { no: "3", nama: "LALU SUHARMAJI KERTAWIJAYA, ST.MT.", jabatan: "Asisten Perekonomian dan Pembangunan Sekretariat Daerah" },
        { no: "4", nama: "Ir. Dirmawan", jabatan: "Asisten Administrasi Umum Sekretariat Daerah" },
        { no: "5", nama: "I KETUT SUMADI ARTA, SH", jabatan: "Staf Ahli Bupati Bidang Pemerintahan, Hukum dan Politik" },
        { no: "6", nama: "H. Rosihan, ST.MT", jabatan: "Staf Ahli Bupati Bidang Pembangunan, Ekonomi dan Keuangan" },
        { no: "7", nama: "Rosmin Junaidi, S.Sos.M.Si", jabatan: "Staf Ahli Bupati Bidang Sumberdaya Aparatur dan Kemasyarakatan" },
        { no: "8", nama: "Budi Sastrawan, Sip.M.Si.", jabatan: "Kabag Pemerintahan" },
        { no: "9", nama: "H. ASTO WINTIOSO, SH", jabatan: "Kabag Hukum" },
        { no: "10", nama: "ARIF ALAMSYAH, S.STP.,M.Si", jabatan: "Kabag Organisasi" },
        { no: "11", nama: "H. Yudi Prawiranegara, ST. M.Eng", jabatan: "Kabag Administrasi Pembangunan" },
        { no: "12", nama: "Ardian Pranata, S.STP.", jabatan: "Kabag Umum" },
        { no: "13", nama: "Khairuddin, SE, M,Si", jabatan: "Kabag Perekonomian dan Sumber Daya" },
        { no: "14", nama: "Syahruddin, S.Sos", jabatan: "Kabag Protokol dan Komunikasi Pimpinan" },
        { no: "15", nama: "-", jabatan: "Kabag Pertanahan" },
        { no: "16", nama: "Abdul Havid, ST.M.Ec.Dev.", jabatan: "Kabag Pengadaan Barang dan Jasa" },
        { no: "17", nama: "-", jabatan: "Inspektur" },
        { no: "18", nama: "Ir. A. Yani", jabatan: "Sekretaris Dewan Perwakilan Rakyat Daerah" },
        { no: "19", nama: "Didi Hermansyah, SE", jabatan: "Kepala Badan Keuangan dan Aset Daerah" },
        { no: "20", nama: "E.S. Adi Nusantara, S.Sos.MT", jabatan: "Kepala Badan Perencanaan, Penelitian dan Pengembangan Daerah" },
        { no: "21", nama: "Budi Santoso, S.Sos.", jabatan: "Plt. Kepala Badan Kepegawaian dan Pengembangan Sumber Daya Manusia" },
        { no: "22", nama: "Drs. Abdul Aziz, M.Si.", jabatan: "Kepala Badan Kesatuan Bangsa dan Politik" },
        { no: "23", nama: "M. NUR HIDAYAT, ST", jabatan: "Kepala Badan Penanggulangan Bencana Daerah" },
        { no: "24", nama: "Agus Mustamin, S.Sos.M.Si.", jabatan: "Kepala Badan Pendapatan Daerah" },
        { no: "25", nama: "-", jabatan: "Kepala Dinas Perpustakaan dan Kearsipan" },
        { no: "26", nama: "Ir. Irin Wahyu Indarni", jabatan: "Kepala Dinas Ketahanan Pangan" },
        { no: "27", nama: "H. Varian Bintoro, S.Sos.M.Si", jabatan: "Kepala Dinas Tenaga Kerja dan Transmigrasi" },
        { no: "28", nama: "Pipin Sakti Bitongo, ST.MT", jabatan: "Kepala Dinas Perumahan Rakyat dan Kawasan Permukiman" },
        { no: "29", nama: "Dian Sidartha, ST, MM", jabatan: "Kepala Dinas Pekerjaan Umum dan Penataan Ruang" },
        { no: "30", nama: "Drs. HASANUDDIN", jabatan: "Kepala Dinas Komunikasi Informatika Statistik dan Persandian" },
        { no: "31", nama: "Ir. Syafruddin Nur", jabatan: "Kepala Dinas Lingkungan Hidup" },
        { no: "32", nama: "-", jabatan: "Kepala Dinas Perhubungan" },
        { no: "33", nama: "Rahman Ansori", jabatan: "Kepala Dinas Pemberdayaan Masyarakat dan Desa" },
        { no: "34", nama: "JAYA KUSUMA, S.Sos", jabatan: "Kepala Dinas Pendudukan dan Pencatatan Sipil" },
        { no: "35", nama: "Rahmat Hidayat, S.Pi.M.Si.", jabatan: "Kepala Dinas Kelautan dan Perikanan" },
        { no: "36", nama: "H. JUNAIDI, S.Pt", jabatan: "Kepala Dinas Peternakan dan Kesehatan Hewan" },
        { no: "37", nama: "Ir. Ni Wayan Rusmawati", jabatan: "Kepala Dinas Pertanian" },
        { no: "38", nama: "Abu Bakar, S.Sos.M.Si.", jabatan: "Kepala Dinas Sosial" },
        { no: "39", nama: "DR. Dedi Hariwibowo", jabatan: "Kepala Dinas Kepemudaan, Olahraga dan Pariwisata" },
        { no: "40", nama: "Tata Kostara, S.Sos.", jabatan: "Kepala Dinas Koperasi, Usaha Kecil, Menengah Perindustrian dan Perdagangan" },
        { no: "41", nama: "-", jabatan: "Kepala Dinas Pendidikan dan Kebudayaan" },
        { no: "42", nama: "Junaidi, A.Pt.M.Si", jabatan: "Kepala Dinas Kesehatan" },
        { no: "43", nama: "Riki Trisnadi, SE.M.Si", jabatan: "Kepala Dinas Penanaman Modal dan Pelayanan Terpadu Satu Pintu" },
        { no: "44", nama: "-", jabatan: "Kepala Dinas Pengendalian Penduduk Keluarga Berencana Pemberdayaan Perempuan dan Perlindungan Anak" },
        { no: "45", nama: "Abdul Haris, S.Sos.", jabatan: "Kepala Satuan Polisi Pamong Praja" },
        { no: "46", nama: "dr. Mega Harta, MPH", jabatan: "Direktur Rumah Sakit Umum Daerah" },
        { no: "47", nama: "Hisbullah, S.Sos.", jabatan: "Camat Alas" },
        { no: "48", nama: "Ardiyansyah, S,Sos", jabatan: "Camat Alas Barat" },
        { no: "49", nama: "Adiman, S.STP", jabatan: "Camat Batulanteh" },
        { no: "50", nama: "Sri Sastrawati, S.Pd.M.Pd", jabatan: "Camat Buer" },
        { no: "51", nama: "-", jabatan: "Camat Empang" },
        { no: "52", nama: "Alfiansyah,S.STP", jabatan: "Camat Labangka" },
        { no: "53", nama: "Awaluddin Safari, SH", jabatan: "Camat Labuhan Badas" },
        { no: "54", nama: "Anhuyas, S.STP", jabatan: "Camat Lantung" },
        { no: "55", nama: "-", jabatan: "Camat Lape" },
        { no: "56", nama: "Andry Rahman, S.STP", jabatan: "Camat Lenangguar" },
        { no: "57", nama: "Deden Fitriadi, S.STP", jabatan: "Camat Lopok" },
        { no: "58", nama: "-", jabatan: "Camat Lunyuk" },
        { no: "59", nama: "Hendun, S.Sos.", jabatan: "Camat Maronge" },
        { no: "60", nama: "Widodo. S.TP", jabatan: "Camat Moyo Hilir" },
        { no: "61", nama: "Ir. Nawawi", jabatan: "Camat Moyo Hulu" },
        { no: "62", nama: "Sahabuddin, SH", jabatan: "Camat Moyo Utara" },
        { no: "63", nama: "Abdul Munir, S.Sos.", jabatan: "Camat Orong Telu" },
        { no: "64", nama: "Ulumuddin, SH", jabatan: "Camat Plampang" },
        { no: "65", nama: "Sartono, SE. M.Si.", jabatan: "Camat Rhee" },
        { no: "66", nama: "Ditha Firsqy, S.STP", jabatan: "Camat Ropang" },
        { no: "67", nama: "Drs. Iwan Sofyan", jabatan: "Camat Sumbawa" },
        { no: "68", nama: "-", jabatan: "Camat Unter Iwes" },
        { no: "69", nama: "-", jabatan: "Camat Utan" },
        { no: "70", nama: "Abdul Rais, SH.", jabatan: "Camat Tarano" },
        { no: "71", nama: "-", jabatan: "Lurah Brang Bara Kecamatan Sumbawa" },
        { no: "72", nama: "Deni Armansyah. S.STP", jabatan: "Lurah Lempeh Kecamatan Sumbawa" },
        { no: "73", nama: "Wendy Safitri, S.STP", jabatan: "Lurah Pekat Kecamatan Sumbawa" },
        { no: "74", nama: "Ongky", jabatan: "Lurah Samapuin Kecamatan Sumbawa" },
        { no: "75", nama: "ARI KURNIAWAN,S.AP", jabatan: "Lurah Seketeng Kecamatan Sumbawa" },
        { no: "76", nama: "Egi Maulana, S.STP", jabatan: "Lurah Uma Sima Kecamatan Sumbawa" },
        { no: "77", nama: "MUHAMMAD ALIF, S. AP", jabatan: "Lurah Brang Biji Kecamatan Sumbawa" },
        { no: "78", nama: "-", jabatan: "Lurah Bugis Kecamatan Sumbawa" },
      ]
    }
  }
];

export function getPemerintahanById(id: string): PemerintahanSection | undefined {
  return pemerintahanData.find((item) => item.id === id);
}

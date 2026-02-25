import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Search, Calendar, User, MapPin, Eye, ArrowRight, ChevronDown } from "lucide-react";
import { newsData } from "../data/newsData";
import { articlesData } from "../data/articlesData";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Button } from "../components/ui/button";

interface Business {
  id: number;
  name: string;
  image: string;
  address: string;
  website: string;
  phone: string;
  email: string;
  owner: string;
  serviceType: string;
  category: string;
}

interface MarketItem {
  item: string;
  unit: string;
  price: string;
  change: string;
  category: string;
}

interface MarketItemWithStats {
  id: number;
  name: string;
  price: string;
  stats: {
    avgPrice: string;
    highPrice: string;
    lowPrice: string;
    lastUpdated: string;
  };
}

export function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const [isSearching, setIsSearching] = useState(true);

  // Business data (inline, sama seperti di BusinessGallery.tsx)
  const businesses: Business[] = [
    {
      id: 1,
      name: "Hotel Dewi",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
      address: "Jl. Hasanuddin No. 71, Sumbawa Besar",
      website: "http://www.hoteldewisumbawa.com",
      phone: "(0371) 21555",
      email: "info@hoteldewisumbawa.com",
      owner: "PT. Dewi Hospitality",
      serviceType: "Hotel Bintang 3, Restoran, Meeting Room",
      category: "perhotelan"
    },
    {
      id: 2,
      name: "Hotel Tambora",
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&h=600&fit=crop",
      address: "Jl. Kebayan No. 2, Sumbawa Besar",
      website: "http://www.hoteltambora.co.id",
      phone: "(0371) 21234",
      email: "reservation@hoteltambora.co.id",
      owner: "CV. Tambora Jaya",
      serviceType: "Hotel Bintang 2, Restoran, Laundry",
      category: "perhotelan"
    },
    {
      id: 10,
      name: "Rumah Makan Sepoi-Sepoi",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
      address: "Jl. Garuda No. 88, Sumbawa Besar",
      website: "http://www.sepoisepoi.co.id",
      phone: "(0371) 24567",
      email: "info@sepoisepoi.co.id",
      owner: "Haji Abdul Rahman",
      serviceType: "Restoran, Masakan Sumbawa, Catering",
      category: "kuliner"
    },
    {
      id: 14,
      name: "Ayam Goreng Nelongso",
      image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=800&h=600&fit=crop",
      address: "Jl. Sultan Kaharuddin No. 99, Sumbawa Besar",
      website: "-",
      phone: "(0371) 27890",
      email: "-",
      owner: "Ibu Siti Aisyah",
      serviceType: "Warung Makan, Ayam Goreng, Nasi Goreng",
      category: "kuliner"
    },
    {
      id: 20,
      name: "Kebun Sawit Rakyat Sumbawa",
      image: "https://images.unsplash.com/photo-1531822485287-f2d7f5c7e20a?w=800&h=600&fit=crop",
      address: "Desa Moyo, Kec. Moyo Utara",
      website: "-",
      phone: "0813-5678-9012",
      email: "sawitsumbawa@gmail.com",
      owner: "Koperasi Tani Makmur",
      serviceType: "Perkebunan Kelapa Sawit, Pengolahan CPO",
      category: "pertanian"
    },
    {
      id: 30,
      name: "Peternakan Ayam Kampung Makmur",
      image: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=800&h=600&fit=crop",
      address: "Desa Batu Tering, Kec. Sumbawa",
      website: "-",
      phone: "0812-6789-0123",
      email: "ayamkampung@gmail.com",
      owner: "Bapak Haji Ruslan",
      serviceType: "Peternakan Ayam Kampung, Telur Organik",
      category: "peternakan"
    },
    {
      id: 40,
      name: "Tambak Udang Vaname Modern",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop",
      address: "Desa Labuhan Sumbawa, Kec. Labuhan Badas",
      website: "http://www.udangvaname.co.id",
      phone: "(0371) 40123",
      email: "info@udangvaname.co.id",
      owner: "PT. Sumbawa Marine",
      serviceType: "Tambak Udang Vaname, Ekspor Udang Beku",
      category: "perikanan"
    },
    {
      id: 50,
      name: "Kerajinan Anyaman Bambu Sumbawa",
      image: "https://images.unsplash.com/photo-1610701596061-2ecf227e85b2?w=800&h=600&fit=crop",
      address: "Desa Lempeh, Kec. Lunyuk",
      website: "-",
      phone: "0813-4567-8901",
      email: "anyamanbambu@gmail.com",
      owner: "Kelompok UMKM Lempeh",
      serviceType: "Kerajinan Anyaman, Souvenir, Furniture Bambu",
      category: "umkm"
    },
  ];

  // Market data (inline)
  const marketItems: MarketItem[] = [
    { item: "Beras Premium", unit: "kg", price: "15.000", change: "+5%", category: "Sembako" },
    { item: "Beras Medium", unit: "kg", price: "12.000", change: "+3%", category: "Sembako" },
    { item: "Gula Pasir", unit: "kg", price: "14.000", change: "-2%", category: "Sembako" },
    { item: "Minyak Goreng", unit: "liter", price: "18.000", change: "+8%", category: "Sembako" },
    { item: "Ayam Kampung", unit: "kg", price: "50.000", change: "+10%", category: "Protein" },
    { item: "Ayam Broiler", unit: "kg", price: "35.000", change: "+5%", category: "Protein" },
    { item: "Telur Ayam", unit: "kg", price: "28.000", change: "+7%", category: "Protein" },
    { item: "Daging Sapi", unit: "kg", price: "130.000", change: "+3%", category: "Protein" },
    { item: "Cabai Merah", unit: "kg", price: "45.000", change: "+15%", category: "Sayuran" },
    { item: "Bawang Merah", unit: "kg", price: "38.000", change: "+12%", category: "Sayuran" },
    { item: "Tomat", unit: "kg", price: "12.000", change: "-5%", category: "Sayuran" },
    { item: "Kangkung", unit: "ikat", price: "3.000", change: "0%", category: "Sayuran" },
  ];

  // Market data with stats (inline)
  const marketItemsWithStats: MarketItemWithStats[] = [
    {
      id: 1,
      name: "Beras Premium",
      price: "15.000",
      stats: {
        avgPrice: "14.500",
        highPrice: "16.000",
        lowPrice: "14.000",
        lastUpdated: "2023-10-01"
      }
    },
    {
      id: 2,
      name: "Beras Medium",
      price: "12.000",
      stats: {
        avgPrice: "11.500",
        highPrice: "13.000",
        lowPrice: "11.000",
        lastUpdated: "2023-10-01"
      }
    },
    {
      id: 3,
      name: "Gula Pasir",
      price: "14.000",
      stats: {
        avgPrice: "13.500",
        highPrice: "15.000",
        lowPrice: "13.000",
        lastUpdated: "2023-10-01"
      }
    },
    {
      id: 4,
      name: "Minyak Goreng",
      price: "18.000",
      stats: {
        avgPrice: "17.500",
        highPrice: "19.000",
        lowPrice: "17.000",
        lastUpdated: "2023-10-01"
      }
    },
    {
      id: 5,
      name: "Ayam Kampung",
      price: "50.000",
      stats: {
        avgPrice: "49.500",
        highPrice: "51.000",
        lowPrice: "49.000",
        lastUpdated: "2023-10-01"
      }
    },
    {
      id: 6,
      name: "Ayam Broiler",
      price: "35.000",
      stats: {
        avgPrice: "34.500",
        highPrice: "36.000",
        lowPrice: "34.000",
        lastUpdated: "2023-10-01"
      }
    },
    {
      id: 7,
      name: "Telur Ayam",
      price: "28.000",
      stats: {
        avgPrice: "27.500",
        highPrice: "29.000",
        lowPrice: "27.000",
        lastUpdated: "2023-10-01"
      }
    },
    {
      id: 8,
      name: "Daging Sapi",
      price: "130.000",
      stats: {
        avgPrice: "129.500",
        highPrice: "131.000",
        lowPrice: "129.000",
        lastUpdated: "2023-10-01"
      }
    },
    {
      id: 9,
      name: "Cabai Merah",
      price: "45.000",
      stats: {
        avgPrice: "44.500",
        highPrice: "46.000",
        lowPrice: "44.000",
        lastUpdated: "2023-10-01"
      }
    },
    {
      id: 10,
      name: "Bawang Merah",
      price: "38.000",
      stats: {
        avgPrice: "37.500",
        highPrice: "39.000",
        lowPrice: "37.000",
        lastUpdated: "2023-10-01"
      }
    },
    {
      id: 11,
      name: "Tomat",
      price: "12.000",
      stats: {
        avgPrice: "11.500",
        highPrice: "13.000",
        lowPrice: "11.000",
        lastUpdated: "2023-10-01"
      }
    },
    {
      id: 12,
      name: "Kangkung",
      price: "3.000",
      stats: {
        avgPrice: "2.500",
        highPrice: "3.500",
        lowPrice: "2.000",
        lastUpdated: "2023-10-01"
      }
    },
  ];

  // Scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Simulate search delay
  useEffect(() => {
    setIsSearching(true);
    const timer = setTimeout(() => {
      setIsSearching(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [query]);

  // Search function
  const searchInText = (text: string | undefined | null, query: string): boolean => {
    if (!text || typeof text !== 'string') return false;
    return text.toLowerCase().includes(query.toLowerCase());
  };

  // Filter results
  const newsResults = newsData.filter(
    (news) =>
      searchInText(news.title, query) ||
      searchInText(news.content, query) ||
      searchInText(news.category, query)
  );

  const articleResults = articlesData.filter(
    (article) =>
      searchInText(article.title, query) ||
      searchInText(article.content, query) ||
      searchInText(article.articleType, query)
  );

  const businessResults = businesses.filter(
    (business) =>
      searchInText(business.name, query) ||
      searchInText(business.serviceType, query) ||
      searchInText(business.category, query) ||
      searchInText(business.owner, query) ||
      searchInText(business.address, query)
  );

  // Filter results untuk marketItemsWithStats
  const marketResults = marketItemsWithStats.filter(
    (item) =>
      searchInText(item.name, query) ||
      searchInText(item.price, query)
  );

  const [expandedRow, setExpandedRow] = useState<number | null>(null);

  const toggleStats = (id: number) => {
    setExpandedRow(expandedRow === id ? null : id);
  };

  const totalResults =
    newsResults.length +
    articleResults.length +
    businessResults.length +
    marketResults.length;

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Search className="w-6 h-6 text-[#84CC16]" />
                <h2 className="text-black">Hasil Pencarian</h2>
              </div>
              <p className="text-gray-600">
                Menampilkan hasil untuk: <span className="font-medium text-black">"{query}"</span>
                {!isSearching && <span className="text-gray-500 ml-2">• {totalResults} hasil</span>}
              </p>
            </div>
          </div>
        </div>

        {/* Search Results */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {isSearching ? (
            <div className="text-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#84CC16] mx-auto"></div>
              <p className="text-gray-600 mt-4">Mencari...</p>
            </div>
          ) : totalResults === 0 ? (
            <div className="text-center py-20">
              <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-black mb-2">Tidak Ada Hasil</h3>
              <p className="text-gray-600">
                Tidak ditemukan hasil untuk "{query}". Coba kata kunci lain.
              </p>
            </div>
          ) : (
            <div className="space-y-12">
              {/* Berita Section */}
              <section className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-black">Berita</h3>
                  {newsResults.length > 0 && (
                    <span className="text-sm text-gray-600">
                      {newsResults.length} hasil
                    </span>
                  )}
                </div>
                {newsResults.length === 0 ? (
                  <div className="bg-gray-50 rounded-lg border border-gray-200 p-8 text-center">
                    <p className="text-gray-500">Tidak ada data berita ditemukan untuk "{query}"</p>
                  </div>
                ) : (
                  <div className="grid md:grid-cols-2 gap-6">
                    {newsResults.slice(0, 4).map((news) => (
                      <Link
                        key={news.id}
                        to={`/berita/${news.id}`}
                        className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-all group"
                      >
                        <div className="relative h-48 overflow-hidden">
                          <ImageWithFallback
                            src={news.image}
                            alt={news.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute top-3 left-3">
                            <span className="inline-block bg-[#84CC16] text-white px-3 py-1 rounded-full text-xs">
                              {news.category}
                            </span>
                          </div>
                        </div>
                        <div className="p-5">
                          <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              <span>{news.date}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <User className="w-4 h-4" />
                              <span>{news.author}</span>
                            </div>
                          </div>
                          <h3 className="text-black mb-2 line-clamp-2 group-hover:text-[#84CC16] transition-colors">
                            {news.title}
                          </h3>
                          <p className="text-gray-600 text-sm line-clamp-2 mb-3">
                            {news.content}
                          </p>
                          <div className="flex items-center gap-1 text-sm text-gray-500">
                            <Eye className="w-4 h-4" />
                            <span>{news.views}</span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
                {newsResults.length > 4 && (
                  <div className="text-center mt-6">
                    <Link to="/berita">
                      <button className="text-[#84CC16] hover:text-white hover:bg-[#84CC16] border border-[#84CC16] px-6 py-2 rounded-lg inline-flex items-center gap-2 transition-all shadow-md hover:shadow-lg">
                        Lihat Semua Berita
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </Link>
                  </div>
                )}
              </section>

              {/* Artikel Section */}
              <section className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-black">Artikel & Pengumuman</h3>
                  {articleResults.length > 0 && (
                    <span className="text-sm text-gray-600">
                      {articleResults.length} hasil
                    </span>
                  )}
                </div>
                {articleResults.length === 0 ? (
                  <div className="bg-gray-50 rounded-lg border border-gray-200 p-8 text-center">
                    <p className="text-gray-500">Tidak ada data artikel ditemukan untuk "{query}"</p>
                  </div>
                ) : (
                  <div className="grid md:grid-cols-2 gap-6">
                    {articleResults.slice(0, 4).map((article) => (
                      <Link
                        key={article.id}
                        to={`/artikel/${article.id}`}
                        className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-all group"
                      >
                        <div className="relative h-48 overflow-hidden">
                          <ImageWithFallback
                            src={article.image}
                            alt={article.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute top-3 left-3">
                            <span className="inline-block bg-[#84CC16] text-white px-3 py-1 rounded-full text-xs capitalize">
                              {article.articleType}
                            </span>
                          </div>
                        </div>
                        <div className="p-5">
                          <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              <span>{article.date}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <User className="w-4 h-4" />
                              <span>{article.author}</span>
                            </div>
                          </div>
                          <h3 className="text-black mb-2 line-clamp-2 group-hover:text-[#84CC16] transition-colors">
                            {article.title}
                          </h3>
                          <p className="text-gray-600 text-sm line-clamp-2 mb-3">
                            {article.content}
                          </p>
                          <div className="flex items-center gap-1 text-sm text-gray-500">
                            <Eye className="w-4 h-4" />
                            <span>{article.views}</span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
                {articleResults.length > 4 && (
                  <div className="text-center mt-6">
                    <Link to="/artikel">
                      <button className="text-[#84CC16] hover:text-white hover:bg-[#84CC16] border border-[#84CC16] px-6 py-2 rounded-lg inline-flex items-center gap-2 transition-all shadow-md hover:shadow-lg">
                        Lihat Semua Artikel
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </Link>
                  </div>
                )}
              </section>

              {/* Daftar Usaha Section */}
              <section className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-black">Daftar Usaha</h3>
                  {businessResults.length > 0 && (
                    <span className="text-sm text-gray-600">
                      {businessResults.length} hasil
                    </span>
                  )}
                </div>
                {businessResults.length === 0 ? (
                  <div className="bg-gray-50 rounded-lg border border-gray-200 p-8 text-center">
                    <p className="text-gray-500">Tidak ada data usaha ditemukan untuk "{query}"</p>
                  </div>
                ) : (
                  <div className="grid md:grid-cols-3 gap-6">
                    {businessResults.slice(0, 6).map((business) => (
                      <div
                        key={business.id}
                        className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-all group"
                      >
                        <div className="relative h-48 overflow-hidden">
                          <ImageWithFallback
                            src={business.image}
                            alt={business.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute top-3 left-3">
                            <span className="inline-block bg-[#84CC16] text-white px-3 py-1 rounded-full text-xs capitalize">
                              {business.category}
                            </span>
                          </div>
                        </div>
                        <div className="p-5">
                          <h4 className="text-black mb-2 group-hover:text-[#84CC16] transition-colors">
                            {business.name}
                          </h4>
                          <div className="flex items-start gap-2 text-sm text-gray-600 mb-2">
                            <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                            <span className="line-clamp-2">{business.address}</span>
                          </div>
                          <p className="text-sm text-gray-500 line-clamp-2">
                            {business.serviceType}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                {businessResults.length > 6 && (
                  <div className="text-center mt-6">
                    <Link to="/daftar-usaha">
                      <button className="text-[#84CC16] hover:text-white hover:bg-[#84CC16] border border-[#84CC16] px-6 py-2 rounded-lg inline-flex items-center gap-2 transition-all shadow-md hover:shadow-lg">
                        Lihat Semua Usaha
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </Link>
                  </div>
                )}
              </section>

              {/* Harga Pasar Section */}
              <section className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-black">Harga Pasar</h3>
                  {marketResults.length > 0 && (
                    <span className="text-sm text-gray-600">
                      {marketResults.length} hasil
                    </span>
                  )}
                </div>
                {marketResults.length === 0 ? (
                  <div className="bg-gray-50 rounded-lg border border-gray-200 p-8 text-center">
                    <p className="text-gray-500">Tidak ada data harga pasar ditemukan untuk "{query}"</p>
                  </div>
                ) : (
                  <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead className="bg-gray-50 border-b border-gray-200">
                          <tr>
                            <th className="px-6 py-4 text-left text-black">No</th>
                            <th className="px-6 py-4 text-left text-black">Nama Barang</th>
                            <th className="px-6 py-4 text-left text-black">Harga</th>
                            <th className="px-6 py-4 text-right text-black">Statistik</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          {marketResults.flatMap((item, index) => {
                            const rows = [
                              <tr key={`row-${item.id}`} className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4">
                                  <div className="text-gray-600">{index + 1}</div>
                                </td>
                                <td className="px-6 py-4">
                                  <div className="text-black">{item.name}</div>
                                </td>
                                <td className="px-6 py-4">
                                  <div className="text-black">{item.price},00/Kg</div>
                                </td>
                                <td className="px-6 py-4 text-right">
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => toggleStats(item.id)}
                                    className="border-gray-300 hover:border-[#14B8A6] hover:text-[#14B8A6] shadow-sm"
                                  >
                                    {expandedRow === item.id ? "Sembunyikan" : "Lihat"} Statistik
                                    <ChevronDown
                                      className={`w-4 h-4 ml-2 transition-transform duration-200 ${
                                        expandedRow === item.id ? "rotate-180" : ""
                                      }`}
                                    />
                                  </Button>
                                </td>
                              </tr>
                            ];

                            if (expandedRow === item.id) {
                              rows.push(
                                <tr key={`stats-${item.id}`} className="bg-gradient-to-br from-gray-50 to-white">
                                  <td className="px-6 py-0"></td>
                                  <td className="px-6 py-4" colSpan={3}>
                                    <div className="grid md:grid-cols-4 gap-4">
                                      <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                                        <div className="text-gray-600 mb-1 text-sm">
                                          Harga Rata-rata
                                        </div>
                                        <div className="text-black">
                                          Rp {item.stats.avgPrice}
                                        </div>
                                      </div>
                                      <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                                        <div className="text-gray-600 mb-1 text-sm">
                                          Harga Tertinggi
                                        </div>
                                        <div className="text-green-600">
                                          Rp {item.stats.highPrice}
                                        </div>
                                      </div>
                                      <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                                        <div className="text-gray-600 mb-1 text-sm">
                                          Harga Terendah
                                        </div>
                                        <div className="text-red-600">
                                          Rp {item.stats.lowPrice}
                                        </div>
                                      </div>
                                      <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                                        <div className="text-gray-600 mb-1 text-sm">
                                          Terakhir Diperbarui
                                        </div>
                                        <div className="text-gray-800 text-sm">
                                          {item.stats.lastUpdated}
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                              );
                            }

                            return rows;
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
                {marketResults.length > 10 && (
                  <div className="text-center mt-6">
                    <Link to="/market-price">
                      <button className="text-[#14B8A6] hover:text-white hover:bg-[#14B8A6] border border-[#14B8A6] px-6 py-2 rounded-lg inline-flex items-center gap-2 transition-all shadow-md hover:shadow-lg">
                        Lihat Semua Harga Pasar
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </Link>
                  </div>
                )}
              </section>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
import { useState, useEffect } from "react";
import { Hotel, Building2, UtensilsCrossed, X, Globe, Phone, Mail, User, Briefcase, Fish, Wheat } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

type TabType = "perhotelan" | "kuliner" | "pertanian" | "peternakan" | "perikanan" | "umkm";

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
  category: TabType;
}

export function BusinessListPage() {
  const [activeTab, setActiveTab] = useState<TabType>("perhotelan");
  const [selectedBusiness, setSelectedBusiness] = useState<Business | null>(null);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories: TabType[] = ["perhotelan", "kuliner", "pertanian", "peternakan", "perikanan", "umkm"];

  const categoryLabels: { [key in TabType]: string } = {
    perhotelan: "Perhotelan",
    kuliner: "Kuliner",
    pertanian: "Pertanian",
    peternakan: "Peternakan",
    perikanan: "Perikanan",
    umkm: "UMKM",
  };

  const galleryItems: Business[] = [
    // Perhotelan
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
      id: 3,
      name: "Samawa Rea Hotel",
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&h=600&fit=crop",
      address: "Jl. Garuda No. 5, Sumbawa Besar",
      website: "http://www.samawarea.com",
      phone: "(0371) 22888",
      email: "info@samawarea.com",
      owner: "PT. Samawa Hospitality",
      serviceType: "Hotel Bintang 3, Restoran, Spa, Kolam Renang",
      category: "perhotelan"
    },
    {
      id: 4,
      name: "Kencana Beach Hotel",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop",
      address: "Jl. Pantai Kencana, Sumbawa Besar",
      website: "http://www.kencanabeach.co.id",
      phone: "(0371) 23456",
      email: "booking@kencanabeach.co.id",
      owner: "PT. Kencana Resort",
      serviceType: "Resort Bintang 4, Restoran, Water Sport, Diving",
      category: "perhotelan"
    },
    // Kuliner
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
      id: 11,
      name: "Warung Samawa Asli",
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&h=600&fit=crop",
      address: "Jl. Diponegoro No. 15, Sumbawa Besar",
      website: "-",
      phone: "(0371) 25678",
      email: "warungsamawa@gmail.com",
      owner: "Ibu Siti Fatimah",
      serviceType: "Rumah Makan, Masakan Tradisional",
      category: "kuliner"
    },
    {
      id: 12,
      name: "Kopi Tambora",
      image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&h=600&fit=crop",
      address: "Jl. Ahmad Yani No. 32, Sumbawa Besar",
      website: "http://www.kopitambora.co.id",
      phone: "(0371) 26789",
      email: "info@kopitambora.co.id",
      owner: "CV. Kopi Nusantara",
      serviceType: "Kedai Kopi, Pastry, Meeting Space",
      category: "kuliner"
    },
    {
      id: 13,
      name: "Samawa Seafood",
      image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&h=600&fit=crop",
      address: "Jl. Pantai Lakey No. 7, Sumbawa Besar",
      website: "-",
      phone: "(0371) 27890",
      email: "samawaseafood@yahoo.com",
      owner: "Bapak Aminuddin",
      serviceType: "Restoran Seafood, Catering Event",
      category: "kuliner"
    },
    // Pertanian
    {
      id: 20,
      name: "Tani Maju Bersama",
      image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&h=600&fit=crop",
      address: "Desa Labuhan Sumbawa, Kec. Labuhan Badas",
      website: "-",
      phone: "(0371) 28901",
      email: "tanimaju@gmail.com",
      owner: "Kelompok Tani Maju",
      serviceType: "Pertanian Padi, Jagung, Kedelai",
      category: "pertanian"
    },
    {
      id: 21,
      name: "Kebun Hortikultura Sumbawa",
      image: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=800&h=600&fit=crop",
      address: "Desa Batu Dulang, Kec. Batu Lanteh",
      website: "http://www.hortisumbawa.co.id",
      phone: "(0371) 29012",
      email: "info@hortisumbawa.co.id",
      owner: "CV. Sayur Segar",
      serviceType: "Sayuran Organik, Buah-buahan",
      category: "pertanian"
    },
    {
      id: 22,
      name: "Perkebunan Kopi Tambora",
      image: "https://images.unsplash.com/photo-1447279506476-3faec8071eee?w=800&h=600&fit=crop",
      address: "Desa Calabai, Kec. Empang",
      website: "http://www.kopitamborafarm.com",
      phone: "(0371) 30123",
      email: "farm@kopitambora.co.id",
      owner: "PT. Agro Tambora",
      serviceType: "Kopi Arabika, Robusta, Wisata Kebun",
      category: "pertanian"
    },
    {
      id: 23,
      name: "Kebun Jeruk Sumbawa",
      image: "https://images.unsplash.com/photo-1580664850276-683e97ab2e0b?w=800&h=600&fit=crop",
      address: "Desa Jorok, Kec. Moyo Hilir",
      website: "-",
      phone: "(0371) 31234",
      email: "jeruksumbawa@gmail.com",
      owner: "Koperasi Tani Sejahtera",
      serviceType: "Jeruk Sumbawa, Jeruk Keprok, Agrowisata",
      category: "pertanian"
    },
    // Peternakan
    {
      id: 30,
      name: "Peternakan Sapi Samawa",
      image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800&h=600&fit=crop",
      address: "Desa Semongkat, Kec. Ropang",
      website: "-",
      phone: "(0371) 32345",
      email: "sapisamawa@gmail.com",
      owner: "Kelompok Ternak Maju",
      serviceType: "Sapi Potong, Sapi Perah",
      category: "peternakan"
    },
    {
      id: 31,
      name: "Kuda Sumbawa Stud Farm",
      image: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=800&h=600&fit=crop",
      address: "Desa Luk, Kec. Plampang",
      website: "http://www.kudasumbawa.co.id",
      phone: "(0371) 33456",
      email: "info@kudasumbawa.co.id",
      owner: "PT. Kuda Samawa Heritage",
      serviceType: "Kuda Sumbawa, Pelatihan Berkuda, Wisata",
      category: "peternakan"
    },
    {
      id: 32,
      name: "Peternakan Ayam Kampung Organik",
      image: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=800&h=600&fit=crop",
      address: "Desa Unter Iwes, Kec. Unter Iwes",
      website: "-",
      phone: "(0371) 34567",
      email: "ayamorganik@yahoo.com",
      owner: "CV. Ternak Sehat",
      serviceType: "Ayam Kampung, Telur Organik",
      category: "peternakan"
    },
    {
      id: 33,
      name: "Domba Samawa Farm",
      image: "https://images.unsplash.com/photo-1583955931089-1c3c92498874?w=800&h=600&fit=crop",
      address: "Desa Brang Bara, Kec. Sumbawa",
      website: "-",
      phone: "(0371) 35678",
      email: "dombasamawa@gmail.com",
      owner: "Kelompok Peternak Sejahtera",
      serviceType: "Domba Potong, Kambing",
      category: "peternakan"
    },
    // Perikanan
    {
      id: 40,
      name: "Tambak Udang Samawa",
      image: "https://images.unsplash.com/photo-1565479873371-8gcb10f6c23c?w=800&h=600&fit=crop",
      address: "Desa Labuhan Jambu, Kec. Labuhan Badas",
      website: "http://www.udangsamawa.co.id",
      phone: "(0371) 36789",
      email: "info@udangsamawa.co.id",
      owner: "PT. Samawa Aqua",
      serviceType: "Udang Vannamei, Udang Windu",
      category: "perikanan"
    },
    {
      id: 41,
      name: "Nelayan Teluk Saleh",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop",
      address: "Desa Ai Kangkung, Kec. Utan",
      website: "-",
      phone: "(0371) 37890",
      email: "nelayansaleh@gmail.com",
      owner: "Koperasi Nelayan Maju",
      serviceType: "Ikan Laut, Cumi-cumi, Lobster",
      category: "perikanan"
    },
    {
      id: 42,
      name: "Budidaya Rumput Laut Sumbawa",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop",
      address: "Desa Teluk Santong, Kec. Rhee",
      website: "http://www.rumputlautsumbawa.com",
      phone: "(0371) 38901",
      email: "info@rumputlautsumbawa.com",
      owner: "CV. Samawa Ocean",
      serviceType: "Rumput Laut, Carrageenan",
      category: "perikanan"
    },
    {
      id: 43,
      name: "Ikan Hias Aquatic Sumbawa",
      image: "https://images.unsplash.com/photo-1520990692110-02e0e76dee6e?w=800&h=600&fit=crop",
      address: "Jl. Veteran No. 45, Sumbawa Besar",
      website: "-",
      phone: "(0371) 39012",
      email: "aquaticsumbawa@gmail.com",
      owner: "Bapak Sudirman",
      serviceType: "Ikan Hias Air Tawar, Aquarium",
      category: "perikanan"
    },
    // UMKM
    {
      id: 50,
      name: "Kerajinan Tenun Samawa",
      image: "https://images.unsplash.com/photo-1610219441745-f10e94f2068a?w=800&h=600&fit=crop",
      address: "Desa Poto, Kec. Moyo Hulu",
      website: "-",
      phone: "(0371) 40123",
      email: "tenunsamawa@gmail.com",
      owner: "Ibu Halimah",
      serviceType: "Kain Tenun, Sarung, Selendang",
      category: "umkm"
    },
    {
      id: 51,
      name: "Samawa Souvenir & Gift",
      image: "https://images.unsplash.com/photo-1607083206968-13611e3d76db?w=800&h=600&fit=crop",
      address: "Jl. Garuda No. 99, Sumbawa Besar",
      website: "http://www.samawasouvenir.com",
      phone: "(0371) 41234",
      email: "info@samawasouvenir.com",
      owner: "CV. Kreasi Nusantara",
      serviceType: "Souvenir, Oleh-oleh Khas, Handicraft",
      category: "umkm"
    },
    {
      id: 52,
      name: "Madu Hutan Sumbawa",
      image: "https://images.unsplash.com/photo-1587049352846-4a222e784718?w=800&h=600&fit=crop",
      address: "Desa Batu Bulan, Kec. Batulanteh",
      website: "-",
      phone: "(0371) 42345",
      email: "maduhutansumbawa@yahoo.com",
      owner: "Kelompok Tani Hutan",
      serviceType: "Madu Alami, Propolis, Royal Jelly",
      category: "umkm"
    },
    {
      id: 53,
      name: "Sepatu Kulit Samawa",
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&h=600&fit=crop",
      address: "Jl. Hasanuddin No. 89, Sumbawa Besar",
      website: "http://www.sepatuksamawa.co.id",
      phone: "(0371) 43456",
      email: "info@sepatuksamawa.co.id",
      owner: "CV. Kulit Nusantara",
      serviceType: "Sepatu Kulit, Sandal, Tas",
      category: "umkm"
    },
  ];

  const filteredItems = galleryItems.filter(item => item.category === activeTab);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12">
            <div className="text-center max-w-2xl mx-auto">
              <p className="uppercase tracking-wider text-[#84CC16] mb-3">
                Direktori Lengkap
              </p>
              <h1 className="text-black mb-3">Daftar Usaha Kabupaten Sumbawa</h1>
              <p className="text-gray-600 text-lg">
                Direktori lengkap usaha-usaha yang terdaftar di Kabupaten Sumbawa, dikategorikan berdasarkan jenis usaha untuk memudahkan pencarian
              </p>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex justify-center mb-8 border-b border-gray-200">
            <div className="flex gap-1 overflow-x-auto">
              {categories.map((category) => {
                const Icon = category === "perhotelan" ? Hotel : 
                            category === "kuliner" ? UtensilsCrossed : 
                            category === "pertanian" ? Wheat :
                            category === "peternakan" ? Building2 :
                            category === "perikanan" ? Fish :
                            Briefcase;
                return (
                  <button
                    key={category}
                    onClick={() => setActiveTab(category)}
                    className={`flex items-center gap-2 px-6 py-4 transition-all whitespace-nowrap ${
                      activeTab === category
                        ? "text-[#84CC16] border-b-2 border-[#84CC16]"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{categoryLabels[category]}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Business Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((business) => (
              <div
                key={business.id}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all group flex flex-col"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden flex-shrink-0">
                  <ImageWithFallback
                    src={business.image}
                    alt={business.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-black mb-2 min-h-[3.5rem]">{business.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2 min-h-[2.5rem]">
                    {business.address}
                  </p>

                  {/* Action Button */}
                  <button
                    onClick={() => setSelectedBusiness(business)}
                    className="mt-auto w-full bg-[#84CC16] hover:bg-[#65A30D] text-white py-2.5 px-4 rounded-lg transition-all shadow-sm hover:shadow-md"
                  >
                    Lihat Detail
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <Briefcase className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-gray-900 mb-2">Belum ada usaha terdaftar</h3>
              <p className="text-gray-500">
                Belum ada usaha yang terdaftar untuk kategori ini.
              </p>
            </div>
          )}
        </div>
      </main>

      {/* Modal Detail */}
      {selectedBusiness && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedBusiness(null)}
        >
          <div 
            className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center z-10">
              <h3 className="text-black">{selectedBusiness.name}</h3>
              <button
                onClick={() => setSelectedBusiness(null)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              {/* Image */}
              <div className="relative h-64 rounded-lg overflow-hidden mb-6">
                <ImageWithFallback
                  src={selectedBusiness.image}
                  alt={selectedBusiness.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Detail Information */}
              <div className="space-y-4">
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex items-start gap-3">
                    <Globe className="w-5 h-5 text-[#84CC16] mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <p className="text-gray-500 text-sm mb-1">Nama Website</p>
                      {selectedBusiness.website !== "-" ? (
                        <a
                          href={selectedBusiness.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-black hover:text-[#84CC16] transition-colors break-all"
                        >
                          {selectedBusiness.website}
                        </a>
                      ) : (
                        <p className="text-black">-</p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="border-b border-gray-200 pb-4">
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-[#84CC16] mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <p className="text-gray-500 text-sm mb-1">Telp</p>
                      <p className="text-black">{selectedBusiness.phone}</p>
                    </div>
                  </div>
                </div>

                <div className="border-b border-gray-200 pb-4">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[#84CC16] mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <p className="text-gray-500 text-sm mb-1">Email</p>
                      {selectedBusiness.email !== "-" ? (
                        <a
                          href={`mailto:${selectedBusiness.email}`}
                          className="text-black hover:text-[#84CC16] transition-colors"
                        >
                          {selectedBusiness.email}
                        </a>
                      ) : (
                        <p className="text-black">-</p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="border-b border-gray-200 pb-4">
                  <div className="flex items-start gap-3">
                    <User className="w-5 h-5 text-[#84CC16] mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <p className="text-gray-500 text-sm mb-1">Nama Pemilik</p>
                      <p className="text-black">{selectedBusiness.owner}</p>
                    </div>
                  </div>
                </div>

                <div className="pb-4">
                  <div className="flex items-start gap-3">
                    <Briefcase className="w-5 h-5 text-[#84CC16] mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <p className="text-gray-500 text-sm mb-1">Jenis Layanan</p>
                      <p className="text-black">{selectedBusiness.serviceType}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
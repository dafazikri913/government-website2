import { useState } from "react";
import { Hotel, Building2, UtensilsCrossed, X, Globe, Phone, Mail, User, Briefcase, Fish, Wheat, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Link } from "react-router";

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

export function BusinessGallery() {
  const [activeTab, setActiveTab] = useState<TabType>("perhotelan");
  const [selectedBusiness, setSelectedBusiness] = useState<Business | null>(null);

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
      name: "Warung Nan Salero",
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&h=600&fit=crop",
      address: "Jl. Kebayan No. 45, Sumbawa Besar",
      website: "-",
      phone: "(0371) 25678",
      email: "nansalero@gmail.com",
      owner: "Ibu Siti Maryam",
      serviceType: "Warung Makan, Masakan Padang",
      category: "kuliner"
    },
    {
      id: 12,
      name: "Bakso Malang Pak Kumis",
      image: "https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?w=800&h=600&fit=crop",
      address: "Jl. Hasanuddin No. 120, Sumbawa Besar",
      website: "-",
      phone: "0812-3456-7890",
      email: "-",
      owner: "Bapak Sugianto",
      serviceType: "Warung Makan, Bakso, Mie Ayam",
      category: "kuliner"
    },
    {
      id: 13,
      name: "Kafe Samawa Corner",
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&h=600&fit=crop",
      address: "Jl. Diponegoro No. 67, Sumbawa Besar",
      website: "http://www.samawacorner.com",
      phone: "(0371) 26789",
      email: "hello@samawacorner.com",
      owner: "PT. Samawa Coffee",
      serviceType: "Kafe, Kopi, Makanan Ringan, Free WiFi",
      category: "kuliner"
    },
    {
      id: 14,
      name: "Ayam Goreng Nelongso",
      image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=800&h=600&fit=crop",
      address: "Jl. Sultan Kaharuddin No. 99, Sumbawa Besar",
      website: "-",
      phone: "(0371) 27890",
      email: "nelongso@yahoo.com",
      owner: "Ibu Sumarni",
      serviceType: "Restoran, Ayam Goreng, Catering",
      category: "kuliner"
    },
    {
      id: 15,
      name: "Seafood Bahari",
      image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&h=600&fit=crop",
      address: "Jl. Pantai Labuhan No. 23, Sumbawa Besar",
      website: "http://www.seafoodbahari.co.id",
      phone: "(0371) 28901",
      email: "info@seafoodbahari.co.id",
      owner: "Bapak Wiranto",
      serviceType: "Restoran Seafood, Masakan Laut Segar",
      category: "kuliner"
    },
    // Pertanian
    {
      id: 16,
      name: "Tani Makmur Sumbawa",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=600&fit=crop",
      address: "Desa Labuhan Sumbawa, Sumbawa",
      website: "-",
      phone: "(0371) 31234",
      email: "tanimakmur@gmail.com",
      owner: "Kelompok Tani Makmur",
      serviceType: "Pertanian Padi, Jagung, Sayuran Organik",
      category: "pertanian"
    },
    {
      id: 17,
      name: "Kebun Sayur Hijau Daun",
      image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&h=600&fit=crop",
      address: "Desa Moyo Hilir, Sumbawa",
      website: "-",
      phone: "0813-5678-9012",
      email: "hijaudaun@yahoo.com",
      owner: "Bapak Arifin",
      serviceType: "Sayuran Organik, Cabai, Tomat",
      category: "pertanian"
    },
    {
      id: 18,
      name: "Agro Buah Tropika",
      image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&h=600&fit=crop",
      address: "Desa Unter Iwes, Sumbawa",
      website: "http://www.agrotropika.com",
      phone: "(0371) 32345",
      email: "info@agrotropika.com",
      owner: "PT. Agro Nusantara",
      serviceType: "Buah-buahan Tropis, Jeruk, Mangga, Pisang",
      category: "pertanian"
    },
    // Peternakan
    {
      id: 19,
      name: "Peternakan Sapi Samawa",
      image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800&h=600&fit=crop",
      address: "Desa Empang, Sumbawa",
      website: "-",
      phone: "(0371) 33456",
      email: "sapisamawa@gmail.com",
      owner: "Kelompok Ternak Sejahtera",
      serviceType: "Sapi Potong, Sapi Perah, Susu Segar",
      category: "peternakan"
    },
    {
      id: 20,
      name: "Kandang Ayam Kampung",
      image: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=800&h=600&fit=crop",
      address: "Desa Batu Dulang, Sumbawa",
      website: "-",
      phone: "0815-6789-0123",
      email: "-",
      owner: "Ibu Aminah",
      serviceType: "Ayam Kampung, Telur Organik",
      category: "peternakan"
    },
    {
      id: 21,
      name: "Kerbau Sumbawa Farm",
      image: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=800&h=600&fit=crop",
      address: "Desa Pelat, Sumbawa",
      website: "http://www.kerbausumbawa.co.id",
      phone: "(0371) 34567",
      email: "info@kerbausumbawa.co.id",
      owner: "CV. Sumbawa Livestock",
      serviceType: "Kerbau Sumbawa, Daging Kerbau",
      category: "peternakan"
    },
    // Perikanan
    {
      id: 22,
      name: "Tambak Udang Bahari",
      image: "https://images.unsplash.com/photo-1535591273668-578e31182c4f?w=800&h=600&fit=crop",
      address: "Desa Labuhan Badas, Sumbawa",
      website: "http://www.udangbahari.com",
      phone: "(0371) 35678",
      email: "info@udangbahari.com",
      owner: "PT. Bahari Sejahtera",
      serviceType: "Udang Vaname, Udang Windu",
      category: "perikanan"
    },
    {
      id: 23,
      name: "Nelayan Pantai Maluk",
      image: "https://images.unsplash.com/photo-1544943910-4c1dc44aab44?w=800&h=600&fit=crop",
      address: "Desa Maluk, Sumbawa Barat",
      website: "-",
      phone: "0816-7890-1234",
      email: "nelayanmaluk@gmail.com",
      owner: "Kelompok Nelayan Maluk",
      serviceType: "Ikan Laut Segar, Tuna, Cakalang",
      category: "perikanan"
    },
    {
      id: 24,
      name: "Budidaya Ikan Air Tawar",
      image: "https://images.unsplash.com/photo-1520990258224-ccfbf08be9fb?w=800&h=600&fit=crop",
      address: "Desa Rhee, Sumbawa",
      website: "-",
      phone: "(0371) 36789",
      email: "budidayatawar@yahoo.com",
      owner: "Bapak Herman",
      serviceType: "Ikan Nila, Lele, Gurame",
      category: "perikanan"
    },
    // UMKM
    {
      id: 25,
      name: "Kerajinan Tenun Samawa",
      image: "https://images.unsplash.com/photo-1610992015762-45dca7656aeb?w=800&h=600&fit=crop",
      address: "Desa Poto, Sumbawa",
      website: "http://www.tenunsamawa.com",
      phone: "(0371) 37890",
      email: "info@tenunsamawa.com",
      owner: "Ibu Siti Rahmah",
      serviceType: "Kain Tenun, Sarung, Selendang",
      category: "umkm"
    },
    {
      id: 26,
      name: "Madu Hutan Sumbawa",
      image: "https://images.unsplash.com/photo-1587049352846-4a222e784e38?w=800&h=600&fit=crop",
      address: "Desa Tepal, Sumbawa",
      website: "-",
      phone: "0817-8901-2345",
      email: "maduhutan@gmail.com",
      owner: "Kelompok Tani Hutan",
      serviceType: "Madu Murni, Propolis, Royal Jelly",
      category: "umkm"
    },
    {
      id: 27,
      name: "Keripik Singkong Renyah",
      image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=800&h=600&fit=crop",
      address: "Jl. Veteran No. 45, Sumbawa Besar",
      website: "-",
      phone: "(0371) 38901",
      email: "keripikrenyah@yahoo.com",
      owner: "Ibu Fatimah",
      serviceType: "Keripik Singkong, Oleh-oleh Khas",
      category: "umkm"
    },
  ];

  // Filter items based on active tab
  const filteredItems = activeTab === "all" 
    ? galleryItems 
    : galleryItems.filter((item) => item.category === activeTab);

  // Get limited items (max 3 per category) for main page
  const getLimitedItemsByCategory = () => {
    if (activeTab === "all") {
      // For main page, only show 3 items total
      return galleryItems.slice(0, 3);
    }
    return filteredItems.slice(0, 3);
  };

  const displayItems = getLimitedItemsByCategory();

  return (
    <>
      <section id="business-gallery" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12 text-center">
            <p className="uppercase tracking-wider text-[#84CC16] mb-3">
              Direktori Usaha
            </p>
            <h2 className="text-black mb-3">Daftar Usaha</h2>
            <p className="text-gray-600 text-lg">
              Informasi lengkap usaha di Kabupaten Sumbawa
            </p>
          </div>

          {/* Tabs */}
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
            {displayItems.map((business) => (
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

                  {/* Quick Info */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Phone className="w-4 h-4 text-[#84CC16] flex-shrink-0" />
                      <span className="truncate">{business.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Globe className="w-4 h-4 text-[#84CC16] flex-shrink-0" />
                      <span className="truncate">{business.website}</span>
                    </div>
                  </div>

                  {/* Detail Button */}
                  <button
                    onClick={() => setSelectedBusiness(business)}
                    className="w-full bg-[#84CC16] hover:bg-[#65A30D] text-white py-2.5 rounded-lg transition-colors mt-auto shadow-sm hover:shadow-md"
                  >
                    Lihat Detail
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Button Lihat Semua Usaha */}
          <div className="flex justify-center mt-12">
            <Link to="/daftar-usaha">
              <button
                className="flex items-center gap-2 px-8 py-4 border border-gray-300 hover:border-[#84CC16] hover:text-[#84CC16] text-gray-900 bg-white rounded-lg transition-all shadow-md hover:shadow-lg"
              >
                <span>Lihat Semua Usaha</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </div>
        </div>

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

                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-gray-500 text-sm mb-1">Alamat</p>
                    <p className="text-black">{selectedBusiness.address}</p>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="sticky bottom-0 bg-gray-50 border-t border-gray-200 p-6">
                <button
                  onClick={() => setSelectedBusiness(null)}
                  className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 py-2.5 rounded-lg transition-colors"
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
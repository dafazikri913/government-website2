import { useState, useEffect } from "react";
import { ChevronDown, Menu, X, Search } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
} from "./ui/sheet";
import logoImage from "../assets/Frame 45.png";

interface SubMenuItem {
  name: string;
  href: string;
}

interface MenuItem {
  name: string;
  href?: string;
  subItems?: SubMenuItem[];
}

interface MenuSection {
  title: string;
  items: MenuItem[];
}

interface MegaMenu {
  title: string;
  sections: MenuSection[];
}

export function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSidebarMenu, setActiveSidebarMenu] = useState<string | null>(
    null,
  );
  const [activeSection, setActiveSection] = useState<string>("about");

  // Set active section based on current pathname
  useEffect(() => {
    const pathname = location.pathname;

    // Map pathnames to sections
    if (pathname === "/") {
      // On home page, active section will be determined by scroll
      return;
    } else if (pathname.startsWith("/berita")) {
      setActiveSection("news");
    } else if (pathname.startsWith("/artikel")) {
      setActiveSection("articles");
    } else if (pathname.startsWith("/events")) {
      setActiveSection("events");
    } else if (pathname.startsWith("/daftar-usaha")) {
      setActiveSection("business-gallery");
    } else if (pathname.startsWith("/market-price")) {
      setActiveSection("market-price");
    } else if (pathname.startsWith("/akses-sumbawa")) {
      setActiveSection("access");
    } else if (pathname.startsWith("/galeri")) {
      setActiveSection("gallery");
    } else {
      setActiveSection("about");
    }
  }, [location.pathname]);

  // Intersection Observer untuk mendeteksi section yang sedang aktif (hanya di home page)
  useEffect(() => {
    // Only run scroll observer on home page
    if (location.pathname !== "/") {
      return;
    }

    const sections = [
      "about",
      "gallery",
      "news",
      "articles",
      "events",
      "business-gallery",
      "market-price",
      "access",
    ];

    // Function to determine active section based on scroll position
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Offset untuk navbar

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const sectionTop = section.offsetTop;
          if (scrollPosition >= sectionTop) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    // Set initial active section
    handleScroll();

    // Add scroll listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Fungsi untuk smooth scroll ke section
  const scrollToSection = (sectionId: string) => {
    // Check if we're already on the home page
    if (location.pathname === "/") {
      // If on home page, just scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 80; // Height of navbar
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    } else {
      // If on different page, navigate to home with hash
      navigate(`/#${sectionId}`);
    }
    setMobileMenuOpen(false);
  };

  const handleSectionClick = (sectionId: string) => {
    scrollToSection(sectionId);
  };

  const megaMenus: Record<string, MegaMenu> = {
    services: {
      title: "Layanan",
      sections: [
        {
          title: "Layanan Masyarakat",
          items: [
            {
              name: "Layanan Dokumen",
              subItems: [
                { name: "Akta Kelahiran", href: "#" },
                { name: "Akta Kematian", href: "#" },
                { name: "Akta Pernikahan", href: "#" },
                { name: "Layanan KTP", href: "#" },
              ],
            },
            {
              name: "Izin & Perizinan",
              subItems: [
                { name: "Izin Usaha", href: "#" },
                { name: "Izin Bangunan", href: "#" },
                { name: "SIM", href: "#" },
                { name: "Izin Khusus", href: "#" },
              ],
            },
            { name: "Layanan Pajak", href: "#" },
            { name: "Arsip Publik", href: "#" },
          ],
        },
        {
          title: "Layanan Bisnis",
          items: [
            {
              name: "Pendaftaran Usaha",
              subItems: [
                { name: "Usaha Baru", href: "#" },
                { name: "Perpanjangan Usaha", href: "#" },
                { name: "Penutupan Usaha", href: "#" },
                { name: "Ubah Nama", href: "#" },
              ],
            },
            { name: "Pengadaan", href: "#" },
            {
              name: "Kepatuhan",
              subItems: [
                { name: "Kepatuhan Pajak", href: "#" },
                { name: "Kepatuhan Tenaga Kerja", href: "#" },
                { name: "Lingkungan", href: "#" },
              ],
            },
            { name: "Dukungan Bisnis", href: "#" },
          ],
        },
        {
          title: "Layanan Digital",
          items: [
            {
              name: "Portal Online",
              subItems: [
                { name: "Daftar Akun", href: "#" },
                { name: "Masuk Portal", href: "#" },
                { name: "Dashboard", href: "#" },
                { name: "Bantuan", href: "#" },
              ],
            },
            { name: "Aplikasi Mobile", href: "#" },
            { name: "E-Government", href: "#" },
            { name: "ID Digital", href: "#" },
          ],
        },
      ],
    },
    profile: {
      title: "Profil Daerah",
      sections: [
        {
          title: "Informasi Umum",
          items: [
            {
              name: "Gambaran Umum",
              subItems: [
                { name: "Sejarah", href: "#" },
                { name: "Geografi", href: "#" },
                { name: "Demografi", href: "#" },
                { name: "Kondisi Sosial", href: "#" },
              ],
            },
            {
              name: "Pemerintahan",
              subItems: [
                { name: "Struktur Organisasi", href: "#" },
                { name: "Visi dan Misi", href: "#" },
                { name: "Pejabat Daerah", href: "#" },
                { name: "SKPD", href: "#" },
              ],
            },
          ],
        },
        {
          title: "Pembangunan",
          items: [
            {
              name: "Strategi Pembangunan",
              subItems: [
                { name: "RPJMD", href: "#" },
                { name: "RKPD", href: "#" },
                { name: "Rencana Strategis", href: "#" },
                { name: "Program Prioritas", href: "#" },
              ],
            },
            {
              name: "Jaringan Dokumentasi dan Informasi Hukum",
              subItems: [
                { name: "Produk Hukum Daerah", href: "#" },
                { name: "Database Peraturan", href: "#" },
                { name: "Artikel Hukum", href: "#" },
                { name: "Konsultasi Hukum", href: "#" },
              ],
            },
          ],
        },
      ],
    },
    potential: {
      title: "Potensi Daerah",
      sections: [
        {
          title: "Sektor Unggulan",
          items: [
            {
              name: "Pertanian",
              subItems: [
                { name: "Tanaman Pangan", href: "#" },
                { name: "Hortikultura", href: "#" },
                { name: "Perkebunan", href: "#" },
                { name: "Kehutanan", href: "#" },
              ],
            },
            {
              name: "Peternakan",
              subItems: [
                { name: "Ternak Besar", href: "#" },
                { name: "Ternak Kecil", href: "#" },
                { name: "Unggas", href: "#" },
                { name: "Pakan Ternak", href: "#" },
              ],
            },
            {
              name: "Perikanan",
              subItems: [
                { name: "Perikanan Tangkap", href: "#" },
                { name: "Budidaya Ikan", href: "#" },
                { name: "Pengolahan Hasil", href: "#" },
                { name: "Sarana Perikanan", href: "#" },
              ],
            },
            {
              name: "Pariwisata",
              subItems: [
                { name: "Wisata Alam", href: "#" },
                { name: "Wisata Budaya", href: "#" },
                { name: "Wisata Kuliner", href: "#" },
                { name: "Destinasi Unggulan", href: "#" },
              ],
            },
          ],
        },
      ],
    },
    culture: {
      title: "Seni dan Budaya",
      sections: [
        {
          title: "Seni",
          items: [
            { name: "Musik", href: "#" },
            { name: "Tarian", href: "#" },
            { name: "Ragam Hias", href: "#" },
            { name: "Pakaian Adat", href: "#" },
            { name: "Seni Rupa", href: "#" },
            { name: "Seni Sastra", href: "#" },
          ],
        },
        {
          title: "Cerita Rakyat",
          items: [
            { name: "Legenda Daerah", href: "#" },
            { name: "Dongeng Tradisional", href: "#" },
            { name: "Mitos dan Kepercayaan", href: "#" },
            { name: "Tokoh Legendaris", href: "#" },
          ],
        },
        {
          title: "Permainan Rakyat",
          items: [
            { name: "Barapan Kebo", href: "#" },
            { name: "Maen Jaran", href: "#" },
            { name: "Barempuk", href: "#" },
            { name: "Gentao", href: "#" },
          ],
        },
      ],
    },
  };

  const toggleMenu = (key: string) => {
    setActiveMenu(activeMenu === key ? null : key);
    setActiveSubMenu(null);
  };

  const toggleSubMenu = (itemName: string) => {
    setActiveSubMenu(activeSubMenu === itemName ? null : itemName);
  };

  const toggleSidebarMenu = (title: string) => {
    setActiveSidebarMenu(activeSidebarMenu === title ? null : title);
  };

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const sidebarMenus = [
    {
      title: "Agenda",
      items: [
        "Agenda Gubernur",
        "Rapat Koordinasi",
        "Kunjungan Kerja",
        "Acara Publik",
      ],
    },
    {
      title: "Dokumen Daerah",
      items: [
        "Peraturan Bupati Sumbawa Nomor 41 Tahun 2025 Tentang Analisis Standar Belanja",
        "KEPUTUSAN BUPATI SUMBAWA NOMOR 458 TAHUN 2024 TANGGAL 13 MEI 2024 TENTANG PENETAPAN SHS PEMKAB SUMBAWA",
        "PERDA PENGELOLAAN KEUANGAN DAERAH",
        "REKAP RENCANA UMUM PENGADAAN TAHUN ANGGARAN 2021",
        "SK PERTANGGUNGJAWABAN PELAKSANAAN ANGGARAN PENDAPATAN DAN BELANJA DAERAH TAHUN ANGGARAN 2021",
        "CATATAN ATAS LAPORAN KEUANGAN",
        "LAPORAN ARUS KAS",
        "NERACA",
        "SK PELIMPAHAN KEKUASAAN PKD KPD KABAN BKAD (PPKD)",
        "PERBUP Perubahan Kebijakan Akuntansi Pemkab Sumbawa",
        "STANDAR SATUAN HARGA 2022",
        "LKjIP",
        "DOKUMEN AKIP",
        "LPPD",
        "SOP",
        "RKPD",
        "P-RKPD",
        "RPJMD",
        "RLPPD",
      ],
    },
    {
      title: "Statistik",
      items: [
        "Statistik Daerah",
        "Statistik Gender",
        "Analisis Statistik Sektoral",
        "Sumbawa Dalam Angka",
        "Kecamatan Dalam Angka",
        "PDRB",
        "Annual Report",
        "Data Strategis Daerah",
      ],
    },
    {
      title: "Transparansi Anggaran",
      items: [
        "APBDP & APBD TA 2019",
        "APBDP & APBD TA 2020",
        "APBDP & APBD TA 2021",
        "APBDP & APBD TA 2022",
        "APBDP & APBD TA 2023",
        "APBDP & APBD TA 2024",
        "APBDP & APBD TA 2025",
      ],
    },
    {
      title: "Data IPKD",
      items: ["2022", "2023", "2024", "2025"],
    },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex flex-col">
            <Link to="/" className="flex items-center">
              <img
                src={logoImage}
                alt="SumbawaKab - Website Resmi Pemerintah Daerah Sumbawa"
                className="h-10"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-0.5">
            {Object.entries(megaMenus).map(([key, menu]) => (
              <div key={key} className="relative">
                <button
                  onClick={() => toggleMenu(key)}
                  className="flex items-center gap-0.5 px-2.5 py-2 text-black hover:text-[#84CC16] transition-colors text-sm whitespace-nowrap">
                  {menu.title}
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      activeMenu === key ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>
            ))}

            <div className="ml-1.5 relative">
              <Search className="absolute left-2.5 top-1/2 transform -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
              <Input
                type="text"
                placeholder="Cari"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={handleSearch}
                className="pl-8 pr-3 w-[110px] h-9 border-gray-300 focus:border-[#84CC16] focus:ring-[#84CC16] text-sm"
              />
            </div>
            <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
              <SheetTrigger asChild>
                <button className="ml-1 px-2.5 py-2 text-black hover:text-[#84CC16] transition-colors flex items-center gap-1.5 hover:bg-gray-50 rounded whitespace-nowrap">
                  <Menu className="w-4 h-4" />
                  <span className="text-sm">Arsip</span>
                </button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-white w-80 overflow-y-auto">
                <SheetHeader className="px-6">
                  <SheetTitle className="text-black">Daftar Arsip</SheetTitle>
                  <SheetDescription className="text-gray-600">
                    Akses informasi penting pemerintah daerah
                  </SheetDescription>
                </SheetHeader>
                <div className="mt-6 space-y-4 px-6 pb-6">
                  {sidebarMenus.map((menu, idx) => (
                    <div key={idx} className="border-b border-gray-200 pb-3">
                      <button
                        className="flex items-center justify-between w-full py-2 text-black hover:text-[#84CC16] transition-colors"
                        onClick={() => toggleSidebarMenu(menu.title)}>
                        <span>{menu.title}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            activeSidebarMenu === menu.title ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {activeSidebarMenu === menu.title && (
                        <div className="pl-4 space-y-2 pt-2">
                          {menu.items.map((item, itemIdx) => (
                            <a
                              key={itemIdx}
                              href="#"
                              className="text-gray-600 hover:text-[#84CC16] block py-1.5 transition-colors">
                              {item}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Full Width Mega Menu Dropdown */}
      {activeMenu && (
        <div className="hidden lg:block absolute left-0 right-0 w-full bg-white border-t border-b border-gray-200 shadow-lg animate-in slide-in-from-top-4 duration-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div
              className={`grid gap-8 ${activeMenu === "profile" ? "grid-cols-2" : "grid-cols-3"}`}>
              {megaMenus[activeMenu as keyof typeof megaMenus].sections.map(
                (section, idx) => (
                  <div key={idx} className="space-y-4">
                    {section.title && (
                      <h3 className="text-black pb-2 border-b border-gray-200">
                        {section.title}
                      </h3>
                    )}
                    <ul className="space-y-2">
                      {section.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="space-y-1">
                          {item.subItems ? (
                            <div>
                              <button
                                onClick={() => toggleSubMenu(item.name)}
                                className="w-full flex items-center justify-between text-gray-600 hover:text-[#84CC16] hover:bg-gray-50 transition-colors py-1 px-2 rounded group text-left">
                                <span className="text-justify">
                                  {item.name}
                                </span>
                                <ChevronDown
                                  className={`w-4 h-4 transition-transform duration-200 flex-shrink-0 ml-2 ${
                                    activeSubMenu === item.name
                                      ? "rotate-180"
                                      : ""
                                  }`}
                                />
                              </button>
                              {activeSubMenu === item.name && (
                                <ul className="ml-4 mt-1 space-y-1 animate-in slide-in-from-top-2 duration-150">
                                  {item.subItems.map((subItem, subIdx) => (
                                    <li key={subIdx}>
                                      <a
                                        href={subItem.href}
                                        className="text-gray-500 hover:text-[#84CC16] hover:bg-gray-50 transition-colors block py-1 px-2 rounded text-sm text-left">
                                        {subItem.name}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          ) : (
                            <a
                              href={item.href}
                              className="text-gray-600 hover:text-[#84CC16] hover:bg-gray-50 transition-colors block py-1 px-2 rounded text-left">
                              {item.name}
                            </a>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white animate-in slide-in-from-top-4 duration-200">
          <div className="px-4 py-4 space-y-3">
            {Object.entries(megaMenus).map(([key, menu]) => (
              <div key={key}>
                <button
                  className="flex items-center justify-between w-full py-2 text-black"
                  onClick={() => toggleMenu(key)}>
                  {menu.title}
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      activeMenu === key ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {activeMenu === key && (
                  <div className="pl-4 space-y-3 pt-2 animate-in slide-in-from-top-2 duration-150">
                    {menu.sections.map((section, idx) => (
                      <div key={idx}>
                        <h4 className="text-black mb-2">{section.title}</h4>
                        <ul className="space-y-1 pl-3">
                          {section.items.map((item, itemIdx) => (
                            <li key={itemIdx}>
                              {item.subItems ? (
                                <div>
                                  <button
                                    onClick={() => toggleSubMenu(item.name)}
                                    className="w-full flex items-center justify-between text-gray-600 hover:text-[#84CC16] py-1">
                                    <span>{item.name}</span>
                                    <ChevronDown
                                      className={`w-4 h-4 transition-transform duration-200 ${
                                        activeSubMenu === item.name
                                          ? "rotate-180"
                                          : ""
                                      }`}
                                    />
                                  </button>
                                  {activeSubMenu === item.name && (
                                    <ul className="ml-4 mt-1 space-y-1 animate-in slide-in-from-top-2 duration-150">
                                      {item.subItems.map((subItem, subIdx) => (
                                        <li key={subIdx}>
                                          <a
                                            href={subItem.href}
                                            className="text-gray-500 hover:text-[#84CC16] block py-1 text-sm">
                                            {subItem.name}
                                          </a>
                                        </li>
                                      ))}
                                    </ul>
                                  )}
                                </div>
                              ) : (
                                <a
                                  href={item.href}
                                  className="text-gray-600 hover:text-[#84CC16] block py-1">
                                  {item.name}
                                </a>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="relative mt-2">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Cari"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={handleSearch}
                className="pl-10 pr-4 w-full border-gray-300 focus:border-[#84CC16] focus:ring-[#84CC16]"
              />
            </div>
          </div>
        </div>
      )}

      {/* Overlay to close menu when clicking outside */}
      {activeMenu && (
        <div
          className="fixed inset-0 bg-transparent z-[-1]"
          onClick={() => {
            setActiveMenu(null);
            setActiveSubMenu(null);
          }}
        />
      )}

      {/* Anchor Links Bar - Desktop Only */}
      <div className="hidden lg:block bg-gradient-to-r from-gray-50 to-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <div className="inline-flex items-center bg-white rounded-lg shadow-sm border border-gray-200 my-3 overflow-hidden">
              <button
                onClick={() => scrollToSection("about")}
                className={`px-4 py-2.5 text-sm font-medium border-r border-gray-200 whitespace-nowrap transition-all ${activeSection === "about" ? "bg-[#84CC16] text-white shadow-md" : "text-gray-700 hover:text-[#84CC16] hover:bg-[#84CC16]/10"}`}>
                Tentang
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className={`px-4 py-2.5 text-sm font-medium border-r border-gray-200 whitespace-nowrap transition-all ${activeSection === "gallery" ? "bg-[#84CC16] text-white shadow-md" : "text-gray-700 hover:text-[#84CC16] hover:bg-[#84CC16]/10"}`}>
                Galeri
              </button>
              <button
                onClick={() => scrollToSection("news")}
                className={`px-4 py-2.5 text-sm font-medium border-r border-gray-200 whitespace-nowrap transition-all ${activeSection === "news" ? "bg-[#84CC16] text-white shadow-md" : "text-gray-700 hover:text-[#84CC16] hover:bg-[#84CC16]/10"}`}>
                Berita
              </button>
              <button
                onClick={() => scrollToSection("articles")}
                className={`px-4 py-2.5 text-sm font-medium border-r border-gray-200 whitespace-nowrap transition-all ${activeSection === "articles" ? "bg-[#84CC16] text-white shadow-md" : "text-gray-700 hover:text-[#84CC16] hover:bg-[#84CC16]/10"}`}>
                Artikel
              </button>
              <button
                onClick={() => scrollToSection("events")}
                className={`px-4 py-2.5 text-sm font-medium border-r border-gray-200 whitespace-nowrap transition-all ${activeSection === "events" ? "bg-[#84CC16] text-white shadow-md" : "text-gray-700 hover:text-[#84CC16] hover:bg-[#84CC16]/10"}`}>
                Acara
              </button>
              <button
                onClick={() => handleSectionClick("business-gallery")}
                className={`px-4 py-2.5 text-sm font-medium border-r border-gray-200 whitespace-nowrap transition-all ${activeSection === "business-gallery" ? "bg-[#84CC16] text-white shadow-md" : "text-gray-700 hover:text-[#84CC16] hover:bg-[#84CC16]/10"}`}>
                Daftar Usaha
              </button>
              <button
                onClick={() => scrollToSection("market-price")}
                className={`px-4 py-2.5 text-sm font-medium border-r border-gray-200 whitespace-nowrap transition-all ${activeSection === "market-price" ? "bg-[#84CC16] text-white shadow-md" : "text-gray-700 hover:text-[#84CC16] hover:bg-[#84CC16]/10"}`}>
                Harga Pasar
              </button>
              <button
                onClick={() => scrollToSection("access")}
                className={`px-4 py-2.5 text-sm font-medium whitespace-nowrap transition-all ${activeSection === "access" ? "bg-[#84CC16] text-white shadow-md" : "text-gray-700 hover:text-[#84CC16] hover:bg-[#84CC16]/10"}`}>
                Akses Sumbawa
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

import { Facebook, Twitter, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  const footerLinks = {
    services: {
      title: "Layanan",
      links: [
        "Layanan Masyarakat",
        "Layanan Bisnis",
        "Portal Online",
        "Layanan Dokumen",
        "Izin & Perizinan",
      ],
    },
    about: {
      title: "Tentang",
      links: [
        "Tentang Kami",
        "Pimpinan",
        "Departemen",
        "Karir",
        "Hubungi Kami",
      ],
    },
    resources: {
      title: "Sumber Daya",
      links: [
        "Berita & Update",
        "Kalender Acara",
        "Publikasi",
        "Formulir & Download",
        "FAQ",
      ],
    },
    legal: {
      title: "Hukum",
      links: [
        "Kebijakan Privasi",
        "Syarat Layanan",
        "Aksesibilitas",
        "Hak Cipta",
        "Disclaimer",
      ],
    },
  };

  return (
    <footer className="bg-black text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 mb-8">
          {/* Branding */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#EE0000] flex items-center justify-center">
                <span className="text-white">G</span>
              </div>
              <div>
                <div className="text-white">SumbawaKab.</div>
                <div className="text-[#EE0000]">Situs Resmi</div>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Portal layanan pemerintah yang menyediakan berbagai informasi 
              dan layanan publik untuk memudahkan masyarakat dalam mengakses 
              berbagai keperluan administrasi.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#EE0000] mt-0.5" />
                <div>
                  <div className="text-white">Call Center</div>
                  <div className="text-gray-400">1500-LAYANAN</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#EE0000] mt-0.5" />
                <div>
                  <div className="text-white">Email</div>
                  <div className="text-gray-400">info@pemerintah.go.id</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#EE0000] mt-0.5" />
                <div>
                  <div className="text-white">Alamat</div>
                  <div className="text-gray-400">
                    Jl. Pemerintahan No. 123, Kota
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key}>
              <h4 className="text-white mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-[#EE0000] transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Media & Contact Form */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h4 className="text-white mb-4">Tetap Terhubung</h4>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 hover:bg-[#EE0000] rounded-lg flex items-center justify-center transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 hover:bg-[#EE0000] rounded-lg flex items-center justify-center transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 hover:bg-[#EE0000] rounded-lg flex items-center justify-center transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 hover:bg-[#EE0000] rounded-lg flex items-center justify-center transition-colors"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-white mb-4">Kirim Pesan atau Saran</h4>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Email Anda"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#EE0000]"
                />
                <textarea
                  placeholder="Isi pesan atau saran Anda..."
                  rows={3}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#EE0000] resize-none"
                />
                <button className="px-6 py-2 bg-[#EE0000] hover:bg-[#CC0000] rounded-lg transition-colors">
                  Kirim
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400">
              © 2025 SumbawaKab. Hak Cipta Dilindungi.
            </div>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-gray-400 hover:text-[#EE0000] transition-colors"
              >
                Privasi
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#EE0000] transition-colors"
              >
                Syarat
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#EE0000] transition-colors"
              >
                Sitemap
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#EE0000] transition-colors"
              >
                Aksesibilitas
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
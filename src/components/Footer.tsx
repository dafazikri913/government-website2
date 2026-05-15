import {
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export function Footer() {
  const footerLinks = {
    services: {
      title: "Situs relevan",
      links: [
        { label: "Kotaku|Kota Tanpa Kumuh", url: "http://kotaku.pu.go.id" },
        {
          label: "INFO HARGA BARANG POKOK DAN PENTING ANTAR PASAR",
          url: "https://hargapangan.id",
        },
        { label: "Informasi Tentang Stunting", url: "https://stunting.go.id" },
        {
          label: "Yayasan Plan International Indonesia",
          url: "https://planindonesia.org/",
        },
        { label: "JAGA.ID", url: "https://jaga.id" },
      ],
    },
    about: {
      title: "Situs relevan Lainnya",
      links: [
        { label: "SILAMO", url: "https://silamo.sumbawakab.go.id" },
        {
          label: "SUMBAWA TANGKAL COVID-19",
          url: "https://covid19.sumbawakab.go.id",
        },
        { label: "Biro Pusat Statistik", url: "https://bps.go.id" },
        { label: "BPS Kabupaten Sumbawa", url: "https://sumbawakab.bps.go.id" },
        { label: "BMKG", url: "https://bmkg.go.id" },
      ],
    },
    resources: {
      title: "Link Cepat",
      links: [
        { label: "Berita", url: "/berita" },
        { label: "Artikel dan Pengumuman", url: "/events" },
        { label: "Daftar Usaha", url: "#" },
        { label: "Menuju Pulau Sumbawa", url: "#" },
        { label: "Harga Pasar", url: "#" },
      ],
    },
    legal: {
      title: "Hukum",
      links: [
        { label: "Kebijakan Privasi", url: "#" },
        { label: "Syarat Layanan", url: "#" },
        { label: "Aksesibilitas", url: "#" },
        { label: "Hak Cipta", url: "#" },
        { label: "Disclaimer", url: "#" },
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
              Portal layanan pemerintah yang menyediakan berbagai informasi dan
              layanan publik untuk memudahkan masyarakat dalam mengakses
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
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-[#EE0000] transition-colors">
                      {link.label}
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
                  className="w-10 h-10 bg-gray-800 hover:bg-[#EE0000] rounded-lg flex items-center justify-center transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 hover:bg-[#EE0000] rounded-lg flex items-center justify-center transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 hover:bg-[#EE0000] rounded-lg flex items-center justify-center transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 hover:bg-[#EE0000] rounded-lg flex items-center justify-center transition-colors">
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
                className="text-gray-400 hover:text-[#EE0000] transition-colors">
                Privasi
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#EE0000] transition-colors">
                Syarat
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#EE0000] transition-colors">
                Sitemap
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#EE0000] transition-colors">
                Aksesibilitas
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

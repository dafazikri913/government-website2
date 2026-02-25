import { Shield, Users, FileText, Award } from "lucide-react";

export function About() {
  const features = [
    {
      icon: Shield,
      title: "Aman & Terpercaya",
      description:
        "Sistem keamanan terbaik untuk melindungi data dan privasi masyarakat dalam setiap layanan yang kami sediakan.",
    },
    {
      icon: Users,
      title: "Fokus pada Masyarakat",
      description:
        "Mengutamakan kepentingan dan kemudahan masyarakat dalam mengakses berbagai layanan pemerintahan.",
    },
    {
      icon: FileText,
      title: "Transparan",
      description:
        "Keterbukaan informasi dan akuntabilitas dalam setiap proses pelayanan kepada masyarakat.",
    },
    {
      icon: Award,
      title: "Pelayanan Prima",
      description:
        "Komitmen untuk memberikan pelayanan terbaik dengan standar kualitas yang tinggi kepada seluruh masyarakat.",
    },
  ];

  const stats = [
    { value: "500K+", label: "Masyarakat Terlayani" },
    { value: "50+", label: "Layanan Tersedia" },
    { value: "99.9%", label: "Jaminan Uptime" },
    { value: "24/7", label: "Dukungan Tersedia" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 bg-lime-50 text-[#84CC16] rounded-full mb-4 border border-lime-100">
            Tentang Kami
          </div>
          <h2 className="text-black mb-4">
            Melayani dengan Dedikasi dan Integritas
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Kami berkomitmen untuk memberikan layanan terbaik kepada masyarakat 
            melalui sistem yang efisien, transparan, dan mudah diakses oleh seluruh 
            lapisan masyarakat.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-gray-50 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-[#84CC16] mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-all hover:border-[#84CC16]/20"
            >
              <div className="w-12 h-12 bg-[#84CC16]/10 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-[#84CC16]" />
              </div>
              <h3 className="text-black mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="mt-16 bg-gradient-to-br from-gray-50 to-white p-8 lg:p-12 rounded-2xl border border-gray-200 shadow-lg">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-black mb-4">Misi Kami</h3>
              <p className="text-gray-600 mb-4">
                Memberikan pelayanan publik yang berkualitas, efisien, dan 
                profesional kepada seluruh masyarakat dengan memanfaatkan 
                teknologi informasi untuk meningkatkan kualitas hidup masyarakat.
              </p>
              <p className="text-gray-600">
                Mewujudkan tata kelola pemerintahan yang baik, bersih, dan 
                akuntabel melalui transparansi dan partisipasi aktif masyarakat 
                dalam pembangunan daerah.
              </p>
            </div>
            <div>
              <h3 className="text-black mb-4">Visi Kami</h3>
              <p className="text-gray-600 mb-4">
                Menjadi pemerintahan yang terdepan dalam pelayanan publik dengan 
                memanfaatkan teknologi digital untuk kemudahan, kecepatan, dan 
                ketepatan layanan kepada masyarakat.
              </p>
              <p className="text-gray-600">
                Menciptakan masyarakat yang sejahtera, maju, dan berdaya saing 
                melalui pembangunan yang berkelanjutan dan inklusif untuk semua 
                lapisan masyarakat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
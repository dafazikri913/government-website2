import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Link } from "react-router";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { newsData } from "../data/newsData";

export function News() {
  // Fungsi untuk parse tanggal Indonesia ke Date object
  const parseIndonesianDate = (dateStr: string) => {
    const months: { [key: string]: number } = {
      Januari: 0,
      Februari: 1,
      Maret: 2,
      April: 3,
      Mei: 4,
      Juni: 5,
      Juli: 6,
      Agustus: 7,
      September: 8,
      Oktober: 9,
      November: 10,
      Desember: 11,
    };
    const parts = dateStr.split(" ");
    const day = parseInt(parts[0]);
    const month = months[parts[1]];
    const year = parseInt(parts[2]);
    return new Date(year, month, day);
  };

  // Sort berita dari yang terbaru dan ambil maksimal 5 untuk setiap kategori
  const sortedNews = [...newsData].sort((a, b) => {
    const dateA = parseIndonesianDate(a.date);
    const dateB = parseIndonesianDate(b.date);
    return dateB.getTime() - dateA.getTime();
  });

  // Filter berita daerah dan nasional, masing-masing maksimal 5
  const regionalNews = sortedNews
    .filter((item) => item.newsCategory === "daerah")
    .slice(0, 5);
  const nationalNews = sortedNews
    .filter((item) => item.newsCategory === "nasional")
    .slice(0, 5);

  return (
    <section id="news" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="max-w-2xl">
            <p className="uppercase tracking-wider text-[#84CC16] mb-2 text-sm">
              Berita Terbaru
            </p>
            <h2 className="text-black mb-2">Berita & Pengumuman</h2>
            <p className="text-gray-600">
              Tetap terinformasi dengan berita dan pembaruan terkini dari
              pemerintah
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-6">
          <Tabs defaultValue="daerah">
            <TabsList className="grid grid-cols-2">
              <TabsTrigger value="daerah">Berita Daerah</TabsTrigger>
              <TabsTrigger value="nasional">Berita Nasional</TabsTrigger>
            </TabsList>
            <TabsContent value="daerah">
              {/* Featured News */}
              <div className="grid lg:grid-cols-2 gap-4 mb-4">
                <Link to={`/berita/${regionalNews[0].id}`}>
                  <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-gray-200 group">
                    <div className="relative overflow-hidden h-48">
                      <ImageWithFallback
                        src={regionalNews[0].image}
                        alt={regionalNews[0].title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="bg-[#84CC16] text-white px-2 py-1 rounded-full text-xs">
                          {regionalNews[0].category}
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center gap-3 text-gray-500 mb-2 text-xs">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          <span>{regionalNews[0].date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>{regionalNews[0].readTime}</span>
                        </div>
                      </div>
                      <h4 className="text-black mb-2 line-clamp-2 group-hover:text-[#84CC16] transition-colors">
                        {regionalNews[0].title}
                      </h4>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                        {regionalNews[0].excerpt}
                      </p>
                      <span className="text-[#84CC16] hover:underline flex items-center gap-1 text-sm">
                        Baca Selengkapnya
                        <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </Link>

                {/* Secondary News Items */}
                <div className="space-y-4">
                  {regionalNews.slice(1, 3).map((item) => (
                    <Link key={item.id} to={`/berita/${item.id}`}>
                      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-200 group">
                        <div className="flex gap-3 p-3">
                          <div className="relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
                            <ImageWithFallback
                              src={item.image}
                              alt={item.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          <div className="flex-1">
                            <span className="inline-block bg-gray-100 text-gray-700 px-2 py-0.5 rounded mb-1 text-xs">
                              {item.category}
                            </span>
                            <h5 className="text-black mb-1 line-clamp-2 group-hover:text-[#84CC16] transition-colors text-sm">
                              {item.title}
                            </h5>
                            <div className="flex items-center gap-2 text-gray-500 text-xs">
                              <span>{item.date}</span>
                              <span>•</span>
                              <span>{item.readTime}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Additional News Grid */}
              <div className="grid md:grid-cols-3 gap-4">
                {regionalNews.slice(3).map((item) => (
                  <Link key={item.id} to={`/berita/${item.id}`}>
                    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-200 group">
                      <div className="relative overflow-hidden h-40">
                        <ImageWithFallback
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-3">
                        <span className="inline-block bg-gray-100 text-gray-700 px-2 py-0.5 rounded mb-1 text-xs">
                          {item.category}
                        </span>
                        <h5 className="text-black mb-2 line-clamp-2 group-hover:text-[#84CC16] transition-colors text-sm">
                          {item.title}
                        </h5>
                        <div className="flex items-center gap-2 text-gray-500 mb-2 text-xs">
                          <span>{item.date}</span>
                        </div>
                        <span className="text-[#84CC16] hover:underline flex items-center gap-1 text-xs">
                          Baca Selengkapnya
                          <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="nasional">
              {/* Featured News */}
              <div className="grid lg:grid-cols-2 gap-4 mb-4">
                <Link to={`/berita/${nationalNews[0].id}`}>
                  <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-gray-200 group">
                    <div className="relative overflow-hidden h-48">
                      <ImageWithFallback
                        src={nationalNews[0].image}
                        alt={nationalNews[0].title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="bg-[#84CC16] text-white px-2 py-1 rounded-full text-xs">
                          {nationalNews[0].category}
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center gap-3 text-gray-500 mb-2 text-xs">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          <span>{nationalNews[0].date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>{nationalNews[0].readTime}</span>
                        </div>
                      </div>
                      <h4 className="text-black mb-2 line-clamp-2 group-hover:text-[#84CC16] transition-colors">
                        {nationalNews[0].title}
                      </h4>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                        {nationalNews[0].excerpt}
                      </p>
                      <span className="text-[#84CC16] hover:underline flex items-center gap-1 text-sm">
                        Baca Selengkapnya
                        <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </Link>

                {/* Secondary News Items */}
                <div className="space-y-4">
                  {nationalNews.slice(1, 3).map((item) => (
                    <Link key={item.id} to={`/berita/${item.id}`}>
                      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-200 group">
                        <div className="flex gap-3 p-3">
                          <div className="relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
                            <ImageWithFallback
                              src={item.image}
                              alt={item.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          <div className="flex-1">
                            <span className="inline-block bg-gray-100 text-gray-700 px-2 py-0.5 rounded mb-1 text-xs">
                              {item.category}
                            </span>
                            <h5 className="text-black mb-1 line-clamp-2 group-hover:text-[#84CC16] transition-colors text-sm">
                              {item.title}
                            </h5>
                            <div className="flex items-center gap-2 text-gray-500 text-xs">
                              <span>{item.date}</span>
                              <span>•</span>
                              <span>{item.readTime}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Additional News Grid */}
              <div className="grid md:grid-cols-3 gap-4">
                {nationalNews.slice(3).map((item) => (
                  <Link key={item.id} to={`/berita/${item.id}`}>
                    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-200 group">
                      <div className="relative overflow-hidden h-40">
                        <ImageWithFallback
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-3">
                        <span className="inline-block bg-gray-100 text-gray-700 px-2 py-0.5 rounded mb-1 text-xs">
                          {item.category}
                        </span>
                        <h5 className="text-black mb-2 line-clamp-2 group-hover:text-[#84CC16] transition-colors text-sm">
                          {item.title}
                        </h5>
                        <div className="flex items-center gap-2 text-gray-500 mb-2 text-xs">
                          <span>{item.date}</span>
                        </div>
                        <span className="text-[#84CC16] hover:underline flex items-center gap-1 text-xs">
                          Baca Selengkapnya
                          <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* View All Button - Bottom */}
        <div className="mt-8 text-center">
          <Link to="/berita">
            <Button
              variant="outline"
              className="border-gray-300 hover:border-[#84CC16] hover:text-[#84CC16] shadow-md hover:shadow-lg">
              Lihat Semua Berita
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

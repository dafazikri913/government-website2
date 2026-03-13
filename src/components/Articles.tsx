import { User, ArrowRight, Eye } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Link } from "react-router";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { articlesData } from "../data/articlesData";

export function Articles() {
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

  // Sort artikel dari yang terbaru
  const sortedArticles = [...articlesData].sort((a, b) => {
    const dateA = parseIndonesianDate(a.date);
    const dateB = parseIndonesianDate(b.date);
    return dateB.getTime() - dateA.getTime();
  });

  // Filter berdasarkan articleType
  const allArticles = sortedArticles.slice(0, 4);
  const artikelOnly = sortedArticles
    .filter((item) => item.articleType === "artikel")
    .slice(0, 4);
  const pengumumanOnly = sortedArticles
    .filter((item) => item.articleType === "pengumuman")
    .slice(0, 4);

  return (
    <section id="articles" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <div className="max-w-2xl">
            <p className="uppercase tracking-wider text-[#84CC16] mb-3">
              Artikel Pilihan
            </p>
            <h2 className="text-black mb-3">Artikel & Pengumuman</h2>
            <p className="text-gray-600 text-lg">
              Bacaan mendalam dan informasi penting seputar kebijakan daerah
            </p>
          </div>
        </div>

        {/* Tabs Navigation */}
        <Tabs defaultValue="semua" className="w-full">
          <TabsList className="mb-8 bg-gray-100 p-1 rounded-lg inline-flex">
            <TabsTrigger
              value="semua"
              className="data-[state=active]:bg-[#84CC16] data-[state=active]:text-white">
              Semua
            </TabsTrigger>
            <TabsTrigger
              value="artikel"
              className="data-[state=active]:bg-[#84CC16] data-[state=active]:text-white">
              Artikel
            </TabsTrigger>
            <TabsTrigger
              value="pengumuman"
              className="data-[state=active]:bg-[#84CC16] data-[state=active]:text-white">
              Pengumuman
            </TabsTrigger>
          </TabsList>

          {/* Tab Content - Semua */}
          <TabsContent value="semua">
            <div className="grid md:grid-cols-2 gap-8">
              {allArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </TabsContent>

          {/* Tab Content - Artikel */}
          <TabsContent value="artikel">
            <div className="grid md:grid-cols-2 gap-8">
              {artikelOnly.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </TabsContent>

          {/* Tab Content - Pengumuman */}
          <TabsContent value="pengumuman">
            <div className="grid md:grid-cols-2 gap-8">
              {pengumumanOnly.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* View All Button - Bottom */}
        <div className="mt-8 text-center">
          <Link to="/artikel">
            <Button
              variant="outline"
              className="border-gray-300 hover:border-[#84CC16] hover:text-[#84CC16] shadow-md hover:shadow-lg">
              Lihat Semua Artikel
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

// Article Card Component
function ArticleCard({ article }: { article: any }) {
  return (
    <Link to={`/artikel/${article.id}`} className="block h-full">
      <div className="bg-white rounded-lg overflow-hidden border-2 border-gray-100 hover:border-[#84CC16] transition-all shadow-sm hover:shadow-md group cursor-pointer h-full">
        <div className="flex flex-col sm:flex-row gap-5 p-5 h-full">
          {/* Image */}
          <div className="relative w-full sm:w-48 h-48 flex-shrink-0 rounded-lg overflow-hidden">
            <ImageWithFallback
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute top-3 left-3">
              <span className="bg-[#84CC16] text-white px-2.5 py-1 rounded-md text-sm capitalize">
                {article.articleType}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 flex flex-col min-h-0">
            <h3 className="text-black mb-3 group-hover:text-[#84CC16] transition-colors line-clamp-2">
              {article.title}
            </h3>
            <p className="text-gray-600 mb-4 line-clamp-3 flex-1 leading-relaxed">
              {article.excerpt}
            </p>

            {/* Meta Info */}
            <div className="flex items-center justify-between pt-3 border-t border-gray-100">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-gray-400" />
                <span className="text-gray-600 text-sm">{article.author}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-500 text-sm">
                <div className="flex items-center gap-1">
                  <Eye className="w-4 h-4" />
                  <span>{article.views}</span>
                </div>
              </div>
            </div>

            <div className="mt-3 flex items-center justify-between">
              <span className="text-gray-500 text-sm">{article.date}</span>
              <span className="text-[#84CC16] flex items-center gap-1 text-sm group-hover:underline">
                Baca{" "}
                {article.articleType === "artikel" ? "Artikel" : "Pengumuman"}
                <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

import { useParams, Link } from "react-router";
import { useEffect } from "react";
import { Calendar, Clock, User, ArrowLeft, ArrowRight, Tag } from "lucide-react";
import { Button } from "../components/ui/button";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { newsData } from "../data/newsData";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export function NewsDetailPage() {
  const { id } = useParams();
  const newsItems = newsData;
  const newsItem = newsItems.find((item) => item.id === Number(id));

  // Scroll to top when component mounts or id changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!newsItem) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <main className="pt-24 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center py-20">
              <h1 className="text-4xl mb-4">Berita Tidak Ditemukan</h1>
              <Link to="/">
                <Button className="bg-[#84CC16] hover:bg-[#84CC16]/90">
                  Kembali ke Beranda
                </Button>
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const index = newsItems.indexOf(newsItem);
  const previousNews = index > 0 ? newsItems[index - 1] : null;
  const nextNews = index < newsItems.length - 1 ? newsItems[index + 1] : null;
  
  // Filter berita berdasarkan kategori
  const regionalNews = newsItems.filter((item) => item.newsCategory === "daerah");
  const nationalNews = newsItems.filter((item) => item.newsCategory === "nasional");
  const currentNews = newsItem;

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <div className="mb-8">
            <Link to="/">
              <Button
                variant="outline"
                className="border-gray-300 hover:border-[#84CC16] hover:text-[#84CC16]"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Kembali ke Beranda
              </Button>
            </Link>
          </div>

          <div className="grid lg:grid-cols-12 gap-8">
            {/* Sidebar - Berita Lainnya */}
            <aside className="lg:col-span-3 order-2 lg:order-1">
              <div className="sticky top-24">
                <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                  <div className="p-6 border-b border-gray-200">
                    <h3 className="text-lg font-semibold text-black">
                      Berita Lainnya
                    </h3>
                  </div>
                  
                  <Tabs defaultValue="daerah" className="w-full">
                    <TabsList className="w-full grid grid-cols-2 rounded-none border-b">
                      <TabsTrigger value="daerah" className="rounded-none">
                        Daerah
                      </TabsTrigger>
                      <TabsTrigger value="nasional" className="rounded-none">
                        Nasional
                      </TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="daerah" className="p-6 max-h-[calc(100vh-280px)] overflow-y-auto">
                      <div className="space-y-4">
                        {regionalNews.slice(0, 10).map((item) => (
                          <Link
                            key={item.id}
                            to={`/berita/${item.id}`}
                            className={`block group ${
                              item.id === currentNews.id ? "opacity-50 pointer-events-none" : ""
                            }`}
                          >
                            <div className="flex gap-3">
                              <ImageWithFallback
                                src={item.image}
                                alt={item.title}
                                className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
                              />
                              <div className="flex-1 min-w-0">
                                <h4 className="text-sm line-clamp-2 group-hover:text-[#84CC16] transition-colors mb-1">
                                  {item.title}
                                </h4>
                                <p className="text-xs text-gray-500">{item.date}</p>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="nasional" className="p-6 max-h-[calc(100vh-280px)] overflow-y-auto">
                      <div className="space-y-4">
                        {nationalNews.slice(0, 10).map((item) => (
                          <Link
                            key={item.id}
                            to={`/berita/${item.id}`}
                            className={`block group ${
                              item.id === currentNews.id ? "opacity-50 pointer-events-none" : ""
                            }`}
                          >
                            <div className="flex gap-3">
                              <ImageWithFallback
                                src={item.image}
                                alt={item.title}
                                className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
                              />
                              <div className="flex-1 min-w-0">
                                <h4 className="text-sm line-clamp-2 group-hover:text-[#84CC16] transition-colors mb-1">
                                  {item.title}
                                </h4>
                                <p className="text-xs text-gray-500">{item.date}</p>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <article className="lg:col-span-9 order-1 lg:order-2">
              <div className="bg-white rounded-xl border border-gray-200 shadow-lg overflow-hidden">
                {/* Category Badge */}
                <div className="px-8 pt-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Tag className="w-4 h-4 text-[#84CC16]" />
                    <span className="text-sm uppercase tracking-wider text-[#84CC16]">
                      {newsItem.category}
                    </span>
                    <span className="text-gray-400">•</span>
                    <span className="text-sm text-gray-600 capitalize">
                      Berita {newsItem.newsCategory}
                    </span>
                  </div>

                  {/* Title */}
                  <h1 className="text-4xl text-black mb-6 leading-tight font-bold">
                    {newsItem.title}
                  </h1>

                  {/* Meta Information */}
                  <div className="flex flex-wrap items-center gap-6 text-gray-600 pb-6 border-b border-gray-200">
                    <div className="flex items-center gap-2">
                      <User className="w-5 h-5" />
                      <span>{newsItem.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5" />
                      <span>{newsItem.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5" />
                      <span>{newsItem.readTime}</span>
                    </div>
                  </div>
                </div>

                {/* Featured Image */}
                <div className="px-8 py-8">
                  <ImageWithFallback
                    src={newsItem.image}
                    alt={newsItem.title}
                    className="w-full h-96 object-cover rounded-xl"
                  />
                </div>

                {/* Content */}
                <div className="px-8 pb-8">
                  <div className="prose prose-lg max-w-none">
                    {/* Excerpt */}
                    <p className="text-xl text-gray-700 leading-relaxed mb-8 font-medium border-l-4 border-[#84CC16] pl-6 italic">
                      {newsItem.excerpt}
                    </p>

                    {/* Main Content */}
                    <div className="space-y-6 text-gray-700 leading-relaxed">
                      {newsItem.content.map((paragraph, index) => (
                        <p key={index} className="text-lg">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="mt-12 pt-8 border-t border-gray-200">
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm">
                        {newsItem.category}
                      </span>
                      <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm capitalize">
                        {newsItem.newsCategory}
                      </span>
                      <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm">
                        Berita Terkini
                      </span>
                    </div>
                  </div>

                  {/* Share Section */}
                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <p className="text-gray-600 mb-4">Bagikan berita ini:</p>
                    <div className="flex gap-3">
                      <Button
                        variant="outline"
                        className="border-gray-300 hover:border-[#84CC16] hover:text-[#84CC16]"
                      >
                        Facebook
                      </Button>
                      <Button
                        variant="outline"
                        className="border-gray-300 hover:border-[#84CC16] hover:text-[#84CC16]"
                      >
                        Twitter
                      </Button>
                      <Button
                        variant="outline"
                        className="border-gray-300 hover:border-[#84CC16] hover:text-[#84CC16]"
                      >
                        WhatsApp
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation to Previous/Next Article */}
              <div className="mt-8 grid md:grid-cols-2 gap-4">
                {previousNews && (
                  <Link to={`/berita/${previousNews.id}`}>
                    <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow group">
                      <p className="text-sm text-gray-600 mb-2">← Berita Sebelumnya</p>
                      <h4 className="text-black group-hover:text-[#84CC16] transition-colors">
                        {previousNews.title}
                      </h4>
                    </div>
                  </Link>
                )}
                {nextNews && (
                  <Link to={`/berita/${nextNews.id}`}>
                    <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow group text-right">
                      <p className="text-sm text-gray-600 mb-2">Berita Selanjutnya →</p>
                      <h4 className="text-black group-hover:text-[#84CC16] transition-colors">
                        {nextNews.title}
                      </h4>
                    </div>
                  </Link>
                )}
              </div>
            </article>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
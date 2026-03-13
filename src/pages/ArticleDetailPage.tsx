import { useParams, Link } from "react-router";
import { useEffect } from "react";
import { Calendar, Clock, User, ArrowLeft, Eye, Tag } from "lucide-react";
import { Button } from "../components/ui/button";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { articlesData } from "../data/articlesData";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export function ArticleDetailPage() {
  const { id } = useParams();
  const articles = articlesData;
  const article = articles.find((item) => item.id === Number(id));

  // Scroll to top when component mounts or id changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!article) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="pt-24 pb-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl mb-4">Artikel tidak ditemukan</h1>
            <Link to="/artikel">
              <Button className="bg-[#84CC16] hover:bg-[#84CC16]/90">
                Kembali ke Daftar Artikel
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Get other articles for sidebar
  const otherArticles = articles
    .filter((item) => item.id !== article.id)
    .slice(0, 5);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link to="/artikel">
            <Button
              variant="outline"
              className="mb-8 border-gray-300 hover:border-[#84CC16] hover:text-[#84CC16]">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Kembali ke Daftar Artikel
            </Button>
          </Link>

          <div className="grid lg:grid-cols-12 gap-8">
            {/* Sidebar - Other Articles */}
            <aside className="lg:col-span-3 order-2 lg:order-1">
              <div className="lg:sticky lg:top-24">
                <div className="bg-white rounded-xl border border-gray-200 shadow-lg p-6">
                  <h3 className="text-xl mb-6 text-black border-b border-gray-200 pb-3">
                    Artikel Lainnya
                  </h3>
                  <div className="space-y-6">
                    {otherArticles.map((item) => (
                      <Link
                        key={item.id}
                        to={`/artikel/${item.id}`}
                        className="block group">
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
                    <span className="text-sm uppercase tracking-wider text-[#84CC16] capitalize">
                      {article.articleType === "artikel"
                        ? "Artikel"
                        : "Pengumuman"}
                    </span>
                  </div>

                  {/* Title */}
                  <h1 className="text-4xl font-bold text-black mb-6 leading-tight">
                    {article.title}
                  </h1>

                  {/* Meta Information */}
                  <div className="flex flex-wrap items-center gap-6 text-gray-600 pb-6 border-b border-gray-200">
                    <div className="flex items-center gap-2">
                      <User className="w-5 h-5" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </div>

                {/* Featured Image */}
                <div className="px-8 py-8">
                  <div className="flex justify-center bg-gray-100 rounded-xl overflow-hidden">
                    <ImageWithFallback
                      src={article.image}
                      alt={article.title}
                      className="max-w-full max-h-[600px] object-contain rounded-xl"
                    />
                  </div>
                </div>
                {/* Content */}
                <div className="px-8 pb-8">
                  <div className="prose prose-lg max-w-none">
                    {/* Excerpt */}
                    <p className="text-xl text-gray-700 leading-relaxed mb-8 font-medium border-l-4 border-[#84CC16] pl-6 italic">
                      {article.excerpt}
                    </p>

                    {/* Main Content */}
                    <div className="space-y-6 text-gray-700 leading-relaxed">
                      {article.content.split("\n\n").map((paragraph, index) => (
                        <p key={index} className="text-lg">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="mt-12 pt-8 border-t border-gray-200">
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm capitalize">
                        {article.articleType}
                      </span>
                      <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm">
                        {article.articleType === "artikel"
                          ? "Artikel Terkini"
                          : "Pengumuman Resmi"}
                      </span>
                    </div>
                  </div>

                  {/* Share Section */}
                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <p className="text-gray-600 mb-4">Bagikan artikel ini:</p>
                    <div className="flex gap-3">
                      <Button
                        variant="outline"
                        className="border-gray-300 hover:border-[#84CC16] hover:text-[#84CC16]">
                        Facebook
                      </Button>
                      <Button
                        variant="outline"
                        className="border-gray-300 hover:border-[#84CC16] hover:text-[#84CC16]">
                        Twitter
                      </Button>
                      <Button
                        variant="outline"
                        className="border-gray-300 hover:border-[#84CC16] hover:text-[#84CC16]">
                        WhatsApp
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation to Previous/Next Article */}
              <div className="mt-8 grid md:grid-cols-2 gap-4">
                {article.id > 1 && (
                  <Link to={`/artikel/${article.id - 1}`}>
                    <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow group">
                      <p className="text-sm text-gray-600 mb-2">
                        ← Artikel Sebelumnya
                      </p>
                      <h4 className="text-black group-hover:text-[#84CC16] transition-colors">
                        {
                          articles.find((item) => item.id === article.id - 1)
                            ?.title
                        }
                      </h4>
                    </div>
                  </Link>
                )}
                {article.id < articles.length && (
                  <Link to={`/artikel/${article.id + 1}`}>
                    <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow group text-right">
                      <p className="text-sm text-gray-600 mb-2">
                        Artikel Selanjutnya →
                      </p>
                      <h4 className="text-black group-hover:text-[#84CC16] transition-colors">
                        {
                          articles.find((item) => item.id === article.id + 1)
                            ?.title
                        }
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

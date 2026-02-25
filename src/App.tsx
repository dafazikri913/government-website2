import { BrowserRouter, Routes, Route } from "react-router";
import { HomePage } from "./pages/HomePage";
import { AccessToSumbawaPage } from "./pages/AccessToSumbawaPage";
import { NewsPage } from "./pages/NewsPage";
import { ArticlePage } from "./pages/ArticlePage";
import { ArticleDetailPage } from "./pages/ArticleDetailPage";
import { EventsPage } from "./pages/EventsPage";
import { MarketPricePage } from "./pages/MarketPricePage";
import { NewsDetailPage } from "./pages/NewsDetailPage";
import { AllNewsPage } from "./pages/AllNewsPage";
import GaleriPage from "./pages/GaleriPage";
import { BusinessListPage } from "./pages/BusinessListPage";
import { SearchPage } from "./pages/SearchPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/akses-sumbawa" element={<AccessToSumbawaPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/berita" element={<AllNewsPage />} />
        <Route path="/berita/:id" element={<NewsDetailPage />} />
        <Route path="/artikel" element={<ArticlePage />} />
        <Route path="/artikel/:id" element={<ArticleDetailPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/market-price" element={<MarketPricePage />} />
        <Route path="/galeri" element={<GaleriPage />} />
        <Route path="/daftar-usaha" element={<BusinessListPage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </BrowserRouter>
  );
}
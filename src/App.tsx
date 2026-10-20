import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import { HomePage } from "./views/HomePage";
import { AccessToSumbawaPage } from "./views/AccessToSumbawaPage";
import { NewsPage } from "./views/NewsPage";
import { ArticlePage } from "./views/ArticlePage";
import { ArticleDetailPage } from "./views/ArticleDetailPage";
import { EventsPage } from "./views/EventsPage";
import { MarketPricePage } from "./views/MarketPricePage";
import { NewsDetailPage } from "./views/NewsDetailPage";
import { AllNewsPage } from "./views/AllNewsPage";
import GaleriPage from "./views/GaleriPage";
import { BusinessListPage } from "./views/BusinessListPage";
import { SearchPage } from "./views/SearchPage";
import { InformasiUmumPage } from "./views/InformasiUmumPage";
import { PemerintahanPage } from "./views/PemerintahanPage";

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
        <Route
          path="/profil/gambaran-umum"
          element={<Navigate to="/profil/gambaran-umum/sejarah" replace />}
        />
        <Route
          path="/profil/gambaran-umum/:slug"
          element={<InformasiUmumPage />}
        />
        <Route
          path="/profil/pemerintahan"
          element={<Navigate to="/profil/pemerintahan/bupati" replace />}
        />
        <Route
          path="/profil/pemerintahan/:slug"
          element={<PemerintahanPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

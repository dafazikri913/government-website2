import { useState } from "react";
import {
  Camera,
  Video,
  Calendar,
  ArrowRight,
  Play,
  X,
  ChevronLeft,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Link } from "react-router";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { allGalleryItems } from "../components/Gallery";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function GaleriPage() {
  const [activeTab, setActiveTab] = useState<"foto" | "video">("foto");
  const [currentPage, setCurrentPage] = useState(1);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const [photoModalOpen, setPhotoModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<{
    src: string;
    title: string;
  } | null>(null);

  const openPhotoModal = (src: string, title: string) => {
    setSelectedPhoto({ src, title });
    setPhotoModalOpen(true);
  };

  const closePhotoModal = () => {
    setPhotoModalOpen(false);
    setSelectedPhoto(null);
  };
  const itemsPerPage = 12;

  // Filter berdasarkan kategori
  const filteredItems = allGalleryItems.filter(
    (item) => item.category === activeTab,
  );

  // Total halaman
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  // Items untuk halaman saat ini
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredItems.slice(startIndex, endIndex);

  const openVideoModal = (youtubeId: string) => {
    setSelectedVideo(youtubeId);
    setVideoModalOpen(true);
  };

  const closeVideoModal = () => {
    setVideoModalOpen(false);
    setSelectedVideo(null);
  };

  // Reset ke halaman 1 ketika ganti tab
  const handleTabChange = (tab: "foto" | "video") => {
    setActiveTab(tab);
    setCurrentPage(1);
  };

  return (
    <>
      <Navbar />

      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12">
            <div className="text-center max-w-2xl mx-auto">
              <p className="uppercase tracking-wider text-[#84CC16] mb-3">
                Dokumentasi Visual
              </p>
              <h1 className="text-black mb-3">Galeri Foto & Video</h1>
              <p className="text-gray-600 text-lg">
                Dokumentasi kegiatan dan program pemerintah Kabupaten Sumbawa
              </p>
            </div>
          </div>

          {/* Gallery Content */}
          <div>
            {/* Tabs */}
            <div className="mb-8">
              <div className="flex justify-center gap-1 border-b border-gray-200">
                <button
                  onClick={() => handleTabChange("foto")}
                  className={`flex items-center gap-2 px-6 py-3 border-b-2 transition-colors ${
                    activeTab === "foto"
                      ? "border-[#84CC16] text-[#84CC16]"
                      : "border-transparent text-gray-600 hover:text-[#84CC16]"
                  }`}>
                  <Camera className="w-5 h-5" />
                  <span className="font-medium">Foto</span>
                  <span className="ml-2 bg-gray-100 px-2 py-1 rounded-full text-xs">
                    {
                      allGalleryItems.filter((item) => item.category === "foto")
                        .length
                    }
                  </span>
                </button>
                <button
                  onClick={() => handleTabChange("video")}
                  className={`flex items-center gap-2 px-6 py-3 border-b-2 transition-colors ${
                    activeTab === "video"
                      ? "border-[#84CC16] text-[#84CC16]"
                      : "border-transparent text-gray-600 hover:text-[#84CC16]"
                  }`}>
                  <Video className="w-5 h-5" />
                  <span className="font-medium">Video</span>
                  <span className="ml-2 bg-gray-100 px-2 py-1 rounded-full text-xs">
                    {
                      allGalleryItems.filter(
                        (item) => item.category === "video",
                      ).length
                    }
                  </span>
                </button>
              </div>
            </div>

            {/* Gallery Grid */}
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
              {currentItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-gray-200 group flex flex-col">
                  {/* Thumbnail */}
                  <div className="relative h-48 overflow-hidden">
                    {item.category === "foto" && item.thumbnail ? (
                      <ImageWithFallback
                        src={item.thumbnail}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    ) : item.category === "video" && item.youtubeId ? (
                      <>
                        <img
                          src={`https://img.youtube.com/vi/${item.youtubeId}/maxresdefault.jpg`}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-40 transition-all flex items-center justify-center">
                          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                            <Play className="w-8 h-8 text-[#84CC16] ml-1" />
                          </div>
                        </div>
                      </>
                    ) : (
                      <div className="bg-gradient-to-br from-[#84CC16]/20 to-[#65A30D]/20 h-48 flex items-center justify-center">
                        {item.category === "foto" ? (
                          <Camera className="w-16 h-16 text-[#84CC16]/40" />
                        ) : (
                          <Video className="w-16 h-16 text-[#84CC16]/40" />
                        )}
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 text-gray-500 mb-3 text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{item.date}</span>
                    </div>
                    <h4 className="text-black mb-4 group-hover:text-[#84CC16] transition-colors line-clamp-2">
                      {item.title}
                    </h4>
                    {item.category === "video" && (
                      <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                        {item.description}
                      </p>
                    )}
                    <button
                      className="w-full text-[#84CC16] hover:bg-[#84CC16] hover:text-white border border-[#84CC16] px-4 py-2 rounded-lg flex items-center justify-center gap-2 text-sm transition-all shadow-sm hover:shadow-md mt-auto"
                      onClick={() => {
                        if (item.category === "video" && item.youtubeId) {
                          openVideoModal(item.youtubeId);
                        } else if (item.category === "foto" && item.thumbnail) {
                          openPhotoModal(item.thumbnail, item.title);
                        }
                      }}>
                      {item.category === "foto" ? "Lihat Foto" : "Putar Video"}
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2">
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  disabled={currentPage === 1}
                  className={`px-4 py-2 rounded-lg border transition-all ${
                    currentPage === 1
                      ? "border-gray-200 text-gray-400 cursor-not-allowed"
                      : "border-gray-300 text-gray-700 hover:border-[#84CC16] hover:text-[#84CC16]"
                  }`}>
                  Previous
                </button>

                {[...Array(totalPages)].map((_, index) => {
                  const page = index + 1;
                  return (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`px-4 py-2 rounded-lg border transition-all ${
                        currentPage === page
                          ? "bg-[#84CC16] text-white border-[#84CC16]"
                          : "border-gray-300 text-gray-700 hover:border-[#84CC16] hover:text-[#84CC16]"
                      }`}>
                      {page}
                    </button>
                  );
                })}

                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                  className={`px-4 py-2 rounded-lg border transition-all ${
                    currentPage === totalPages
                      ? "border-gray-200 text-gray-400 cursor-not-allowed"
                      : "border-gray-300 text-gray-700 hover:border-[#84CC16] hover:text-[#84CC16]"
                  }`}>
                  Next
                </button>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />

      {/* Video Modal */}
      {videoModalOpen && selectedVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4"
          onClick={closeVideoModal}>
          <div
            className="relative w-full max-w-5xl aspect-video"
            onClick={(e) => e.stopPropagation()}>
            <button
              className="absolute -top-12 right-0 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
              onClick={closeVideoModal}>
              <X className="w-5 h-5 text-gray-500" />
            </button>
            <iframe
              className="w-full h-full rounded-lg shadow-2xl"
              src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen></iframe>
          </div>
        </div>
      )}

      {photoModalOpen && selectedPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4"
          onClick={closePhotoModal}>
          <div
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}>
            <button
              className="absolute -top-12 right-0 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
              onClick={closePhotoModal}>
              <X className="w-5 h-5 text-gray-500" />
            </button>
            <img
              src={selectedPhoto.src}
              alt={selectedPhoto.title}
              className="max-w-[70%] max-h-[65vh] object-contain rounded-lg shadow-2xl mx-auto block"
            />
            <p className="text-white text-center mt-4 text-sm">
              {selectedPhoto.title}
            </p>
          </div>
        </div>
      )}
    </>
  );
}

import { useState, useEffect } from "react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Calendar,
  Cloud,
} from "lucide-react";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "motion/react";
import foto1 from "../assets/Hero_pic/20260303102139.png";
import foto2 from "../assets/Hero_pic/2017_04_06_24712_1491469437._large.jpg";
import foto3 from "../assets/Hero_pic/Tari-Nguri-dari-Suku-Samawa-Sumbawa-sumber-ig-@firmanananda72.jpg";

const slides = [foto1, foto2, foto3];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Navigation functions
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Get current date
  const currentDate = new Date().toLocaleDateString("id-ID", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <section id="about" className="relative h-screen overflow-hidden">
      {/* Background Images with Crossfade */}
      <div className="absolute inset-0">
        <AnimatePresence initial={false} mode="sync">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 1.2,
              ease: "easeInOut",
            }}
            className="absolute inset-0">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('${slides[currentSlide]}')`,
              }}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>

      {/* Static Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center z-10">
        <div className="w-full">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-lime-600/90 text-white rounded-full mb-6 border border-lime-500/50">
            <div className="relative">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <motion.div
                className="absolute inset-0 w-2 h-2 bg-green-500 rounded-full"
                animate={{
                  scale: [1, 1.8, 1],
                  opacity: [0.8, 0, 0.8],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
            Selamat Datang
          </div>
          <h1 className="text-white mb-6 max-w-2xl">
            Melayani Masyarakat Dengan Sepenuh Hati
          </h1>
          <p className="text-gray-200 mb-8 max-w-2xl">
            Portal layanan pemerintah yang menyediakan berbagai informasi dan
            layanan publik untuk memudahkan masyarakat dalam mengakses berbagai
            keperluan administrasi dan informasi pemerintahan.
          </p>

          {/* Quick Links */}
          <div className="flex flex-wrap gap-3 mb-6 max-w-2xl">
            {/* Date & Weather Info */}
            <div className="flex flex-wrap gap-3">
              <div className="bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg px-4 py-2.5 flex items-center gap-2 text-white">
                <Calendar className="w-4 h-4" />
                <div className="flex flex-col">
                  <span className="text-xs opacity-80">Hari Ini</span>
                  <span className="text-sm">{currentDate}</span>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg px-4 py-2.5 flex items-center gap-2 text-white">
                <Cloud className="w-4 h-4" />
                <div className="flex flex-col">
                  <span className="text-xs opacity-80">Cuaca</span>
                  <span className="text-sm">Cerah, 28°C</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/15 backdrop-blur-md hover:bg-black/25 border border-white/20 rounded-full flex items-center justify-center text-white transition-all z-10"
        aria-label="Previous slide">
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/15 backdrop-blur-md hover:bg-black/25 border border-white/20 rounded-full flex items-center justify-center text-white transition-all z-10"
        aria-label="Next slide">
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all ${
              index === currentSlide
                ? "w-12 h-3 bg-white"
                : "w-3 h-3 bg-white/50 hover:bg-white/70"
            } rounded-full`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

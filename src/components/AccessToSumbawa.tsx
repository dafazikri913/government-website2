import { useState } from "react";
import { Car, Ship, Plane, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { Button } from "./ui/button";

type TabType = "darat" | "laut" | "udara";

export function AccessToSumbawa() {
  return (
    <section id="access" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <div className="text-center max-w-2xl mx-auto">
            <p className="uppercase tracking-wider text-[#22C55E] mb-3">
              Informasi Transportasi
            </p>
            <h2 className="text-black mb-3">Akses ke Sumbawa</h2>
            <p className="text-gray-600 text-lg">
              Panduan lengkap akses transportasi menuju Kabupaten Sumbawa
            </p>
          </div>
        </div>

        {/* Preview Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-[#22C55E] rounded-lg flex items-center justify-center">
                <Car className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-black">Transportasi Darat</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Tersedia 5 travel dengan jadwal keberangkatan rutin dari Sumbawa ke Mataram dan sebaliknya
            </p>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#22C55E] rounded-full"></span>
                <span>Sumbawa Utama, Panca Sari</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#22C55E] rounded-full"></span>
                <span>Titian Mas, Tiara Mas</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#22C55E] rounded-full"></span>
                <span>Angkasa Jaya</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-[#22C55E] rounded-lg flex items-center justify-center">
                <Ship className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-black">Transportasi Laut</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Akses pelabuhan dan jalur pelayaran menuju Sumbawa dari berbagai wilayah
            </p>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#22C55E] rounded-full"></span>
                <span>Pelabuhan Penyeberangan</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#22C55E] rounded-full"></span>
                <span>Jadwal Kapal Ferry</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-[#22C55E] rounded-lg flex items-center justify-center">
                <Plane className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-black">Transportasi Udara</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Informasi penerbangan dan bandara terdekat untuk akses ke Sumbawa
            </p>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#22C55E] rounded-full"></span>
                <span>Bandara Sultan Muhammad Kaharuddin III</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#22C55E] rounded-full"></span>
                <span>Jadwal Penerbangan</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link to="/akses-sumbawa">
            <Button 
              variant="outline"
              className="border-gray-300 hover:border-[#22C55E] hover:text-[#22C55E] shadow-md hover:shadow-lg"
            >
              Lihat Informasi Lengkap
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
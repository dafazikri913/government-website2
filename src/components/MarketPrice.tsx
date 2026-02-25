import { useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router";

interface MarketItem {
  id: number;
  name: string;
  price: string;
  stats: {
    avgPrice: string;
    highPrice: string;
    lowPrice: string;
    lastUpdated: string;
  };
}

// Data lengkap harga pasar
export const allMarketItems: MarketItem[] = [
  { id: 1, name: "Apel import ex USA", price: "40.000,00/Kg", stats: { avgPrice: "Rp 39.000", highPrice: "Rp 42.000", lowPrice: "Rp 38.000", lastUpdated: "25 Desember 2024" } },
  { id: 2, name: "Apel Lokal", price: "25.000,00/kg", stats: { avgPrice: "Rp 24.500", highPrice: "Rp 27.000", lowPrice: "Rp 23.000", lastUpdated: "25 Desember 2024" } },
  { id: 3, name: "Bawang Merah", price: "35.000,00/Kg", stats: { avgPrice: "Rp 34.000", highPrice: "Rp 38.000", lowPrice: "Rp 32.000", lastUpdated: "25 Desember 2024" } },
  { id: 4, name: "Bawang Putih", price: "60.000,00/Kg", stats: { avgPrice: "Rp 58.000", highPrice: "Rp 65.000", lowPrice: "Rp 55.000", lastUpdated: "25 Desember 2024" } },
  { id: 5, name: "Beras IR 64", price: "10.000,00/kg", stats: { avgPrice: "Rp 9.800", highPrice: "Rp 11.000", lowPrice: "Rp 9.500", lastUpdated: "25 Desember 2024" } },
  { id: 6, name: "Beras IR 64 Super", price: "11.000,00/Kg", stats: { avgPrice: "Rp 10.800", highPrice: "Rp 12.000", lowPrice: "Rp 10.500", lastUpdated: "25 Desember 2024" } },
  { id: 7, name: "Beras Pandan Wangi", price: "-,00/kg", stats: { avgPrice: "Rp -", highPrice: "Rp -", lowPrice: "Rp -", lastUpdated: "25 Desember 2024" } },
  { id: 8, name: "Beras Tanpa Merek", price: "9.000,00/Kg", stats: { avgPrice: "Rp 8.800", highPrice: "Rp 9.500", lowPrice: "Rp 8.500", lastUpdated: "25 Desember 2024" } },
  { id: 9, name: "Besi Beton Ukuran 25 mm", price: "365.000,00/batang", stats: { avgPrice: "Rp 360.000", highPrice: "Rp 380.000", lowPrice: "Rp 350.000", lastUpdated: "25 Desember 2024" } },
  { id: 10, name: "Besi Beton ukurn 10 mm", price: "92.500,00/Batang", stats: { avgPrice: "Rp 90.000", highPrice: "Rp 95.000", lowPrice: "Rp 88.000", lastUpdated: "25 Desember 2024" } },
  { id: 11, name: "Besi Beton ukurn 13 mm", price: "130.500,00/Batang", stats: { avgPrice: "Rp 128.000", highPrice: "Rp 135.000", lowPrice: "Rp 125.000", lastUpdated: "25 Desember 2024" } },
  { id: 12, name: "Besi Beton ukurn 14 mm", price: "150.000,00/Batang", stats: { avgPrice: "Rp 148.000", highPrice: "Rp 155.000", lowPrice: "Rp 145.000", lastUpdated: "25 Desember 2024" } },
  { id: 13, name: "Besi Beton ukurn 16 mm", price: "150.000,00/Batang", stats: { avgPrice: "Rp 148.000", highPrice: "Rp 155.000", lowPrice: "Rp 145.000", lastUpdated: "25 Desember 2024" } },
  { id: 14, name: "Besi Beton ukurn 19 mm", price: "212.500,00/Batang", stats: { avgPrice: "Rp 210.000", highPrice: "Rp 220.000", lowPrice: "Rp 205.000", lastUpdated: "25 Desember 2024" } },
  { id: 15, name: "Besi Beton ukurn 22 mm", price: "285.000,00/Batang", stats: { avgPrice: "Rp 280.000", highPrice: "Rp 295.000", lowPrice: "Rp 275.000", lastUpdated: "25 Desember 2024" } },
  { id: 16, name: "Besi Beton ukurn 4.0", price: "8.500,00/Batang", stats: { avgPrice: "Rp 8.300", highPrice: "Rp 9.000", lowPrice: "Rp 8.000", lastUpdated: "25 Desember 2024" } },
  { id: 17, name: "Besi Beton ukurn 4.9 mm", price: "15.000,00/batang", stats: { avgPrice: "Rp 14.800", highPrice: "Rp 16.000", lowPrice: "Rp 14.500", lastUpdated: "25 Desember 2024" } },
  { id: 18, name: "Besi Beton ukurn 6,7 mm", price: "27.500,00/Batang", stats: { avgPrice: "Rp 27.000", highPrice: "Rp 29.000", lowPrice: "Rp 26.500", lastUpdated: "25 Desember 2024" } },
  { id: 19, name: "Besi Beton ukurn 7,5 mm", price: "33.000,00/Batang", stats: { avgPrice: "Rp 32.500", highPrice: "Rp 35.000", lowPrice: "Rp 31.500", lastUpdated: "25 Desember 2024" } },
  { id: 20, name: "Besi Beton ukurn 8 mm", price: "50.500,00/Batang", stats: { avgPrice: "Rp 50.000", highPrice: "Rp 53.000", lowPrice: "Rp 48.500", lastUpdated: "25 Desember 2024" } },
  { id: 21, name: "Besi Beton ukurn 8,7 mm", price: "52.500,00/Batang", stats: { avgPrice: "Rp 52.000", highPrice: "Rp 55.000", lowPrice: "Rp 50.500", lastUpdated: "25 Desember 2024" } },
  { id: 22, name: "Bimoli 1 ltr", price: "17.000,00/Botol", stats: { avgPrice: "Rp 16.800", highPrice: "Rp 18.000", lowPrice: "Rp 16.500", lastUpdated: "25 Desember 2024" } },
  { id: 23, name: "Bimoli 2 ltr", price: "29.000,00/Botol", stats: { avgPrice: "Rp 28.500", highPrice: "Rp 30.000", lowPrice: "Rp 28.000", lastUpdated: "25 Desember 2024" } },
  { id: 24, name: "Bimoli 250 ml", price: "5.500,00/Botol", stats: { avgPrice: "Rp 5.400", highPrice: "Rp 6.000", lowPrice: "Rp 5.200", lastUpdated: "25 Desember 2024" } },
  { id: 25, name: "Bimoli 5 ltr", price: "74.000,00/Cerigen", stats: { avgPrice: "Rp 73.000", highPrice: "Rp 76.000", lowPrice: "Rp 72.000", lastUpdated: "25 Desember 2024" } },
  { id: 26, name: "Bimoli 620 ml", price: "11.500,00/Botol", stats: { avgPrice: "Rp 11.300", highPrice: "Rp 12.000", lowPrice: "Rp 11.000", lastUpdated: "25 Desember 2024" } },
  { id: 27, name: "Buncis", price: "10.000,00/Kg", stats: { avgPrice: "Rp 9.800", highPrice: "Rp 11.000", lowPrice: "Rp 9.500", lastUpdated: "25 Desember 2024" } },
  { id: 28, name: "Cabe Keriting", price: "40.000,00/Kg", stats: { avgPrice: "Rp 39.000", highPrice: "Rp 45.000", lowPrice: "Rp 35.000", lastUpdated: "25 Desember 2024" } },
  { id: 29, name: "Cabe Merah Besar", price: "35.000,00/Kg", stats: { avgPrice: "Rp 34.000", highPrice: "Rp 38.000", lowPrice: "Rp 32.000", lastUpdated: "25 Desember 2024" } },
  { id: 30, name: "Cabe Merah Keriting", price: "40.000,00/Kg", stats: { avgPrice: "Rp 39.000", highPrice: "Rp 45.000", lowPrice: "Rp 35.000", lastUpdated: "25 Desember 2024" } },
  { id: 31, name: "Cabe Rawit", price: "135.000,00/Kg", stats: { avgPrice: "Rp 130.000", highPrice: "Rp 150.000", lowPrice: "Rp 120.000", lastUpdated: "25 Desember 2024" } },
  { id: 32, name: "Daging Ayam Broiler", price: "42.000,00/Kg", stats: { avgPrice: "Rp 41.000", highPrice: "Rp 45.000", lowPrice: "Rp 40.000", lastUpdated: "25 Desember 2024" } },
  { id: 33, name: "Daging Sapi", price: "110.000,00/Kg", stats: { avgPrice: "Rp 108.000", highPrice: "Rp 120.000", lowPrice: "Rp 105.000", lastUpdated: "25 Desember 2024" } },
  { id: 34, name: "Garam Yodium", price: "5.000,00/Kg", stats: { avgPrice: "Rp 4.900", highPrice: "Rp 5.500", lowPrice: "Rp 4.700", lastUpdated: "25 Desember 2024" } },
  { id: 35, name: "Gatot Kaca", price: "7.000,00/Kg", stats: { avgPrice: "Rp 6.900", highPrice: "Rp 7.500", lowPrice: "Rp 6.700", lastUpdated: "25 Desember 2024" } },
  { id: 36, name: "Gula Kristal", price: "17.000,00/Kg", stats: { avgPrice: "Rp 16.500", highPrice: "Rp 18.000", lowPrice: "Rp 16.000", lastUpdated: "25 Desember 2024" } },
  { id: 37, name: "Gula Ku", price: "20.000,00/Kg", stats: { avgPrice: "Rp 19.500", highPrice: "Rp 21.000", lowPrice: "Rp 19.000", lastUpdated: "25 Desember 2024" } },
  { id: 38, name: "Gula Pasir SHS I ( DN )", price: "14.000,00/kg", stats: { avgPrice: "Rp 13.800", highPrice: "Rp 15.000", lowPrice: "Rp 13.500", lastUpdated: "25 Desember 2024" } },
  { id: 39, name: "Gula Rafinasi", price: "13.500,00/Kg", stats: { avgPrice: "Rp 13.300", highPrice: "Rp 14.500", lowPrice: "Rp 13.000", lastUpdated: "25 Desember 2024" } },
  { id: 40, name: "Ikan Air Tawar Segar", price: "45.000,00/Kg", stats: { avgPrice: "Rp 44.000", highPrice: "Rp 50.000", lowPrice: "Rp 42.000", lastUpdated: "25 Desember 2024" } },
  { id: 41, name: "Ikan Asin", price: "55.000,00/Kg", stats: { avgPrice: "Rp 54.000", highPrice: "Rp 60.000", lowPrice: "Rp 52.000", lastUpdated: "25 Desember 2024" } },
  { id: 42, name: "Ikan Laut Segar", price: "50.000,00/Kg", stats: { avgPrice: "Rp 49.000", highPrice: "Rp 55.000", lowPrice: "Rp 47.000", lastUpdated: "25 Desember 2024" } },
  { id: 43, name: "Indomie Rasa Kari Ayam", price: "2.500,00/bks", stats: { avgPrice: "Rp 2.450", highPrice: "Rp 3.000", lowPrice: "Rp 2.400", lastUpdated: "25 Desember 2024" } },
  { id: 44, name: "Jagung", price: "6.000,00/Kg", stats: { avgPrice: "Rp 5.900", highPrice: "Rp 6.500", lowPrice: "Rp 5.700", lastUpdated: "25 Desember 2024" } },
  { id: 45, name: "Jeruk Import Mandarin", price: "50.000,00/Kg", stats: { avgPrice: "Rp 48.000", highPrice: "Rp 55.000", lowPrice: "Rp 45.000", lastUpdated: "25 Desember 2024" } },
  { id: 46, name: "Jeruk Lokal", price: "20.000,00/Kg", stats: { avgPrice: "Rp 19.500", highPrice: "Rp 22.000", lowPrice: "Rp 18.500", lastUpdated: "25 Desember 2024" } },
  { id: 47, name: "Kacang Hijau", price: "22.000,00/Kg", stats: { avgPrice: "Rp 21.500", highPrice: "Rp 24.000", lowPrice: "Rp 21.000", lastUpdated: "25 Desember 2024" } },
  { id: 48, name: "Kacang Kedelai (Lokal)", price: "10.000,00/Kg", stats: { avgPrice: "Rp 9.800", highPrice: "Rp 11.000", lowPrice: "Rp 9.500", lastUpdated: "25 Desember 2024" } },
  { id: 49, name: "Kacang Kedelai (Super)", price: "12.000,00/Kg", stats: { avgPrice: "Rp 11.800", highPrice: "Rp 13.000", lowPrice: "Rp 11.500", lastUpdated: "25 Desember 2024" } },
  { id: 50, name: "Kacang Tanah", price: "24.000,00/Kg", stats: { avgPrice: "Rp 23.500", highPrice: "Rp 26.000", lowPrice: "Rp 23.000", lastUpdated: "25 Desember 2024" } },
  { id: 51, name: "KAYU BALOK RIMAS (8X12X400)", price: "100.000,00/Batang", stats: { avgPrice: "Rp 98.000", highPrice: "Rp 110.000", lowPrice: "Rp 95.000", lastUpdated: "25 Desember 2024" } },
  { id: 52, name: "Kayu Meranti (8x12x400)", price: "-,00/batang", stats: { avgPrice: "Rp -", highPrice: "Rp -", lowPrice: "Rp -", lastUpdated: "25 Desember 2024" } },
  { id: 53, name: "Kelapa", price: "8.000,00/Btr", stats: { avgPrice: "Rp 7.800", highPrice: "Rp 9.000", lowPrice: "Rp 7.500", lastUpdated: "25 Desember 2024" } },
  { id: 54, name: "Ketan Putih", price: "17.000,00/Kg", stats: { avgPrice: "Rp 16.700", highPrice: "Rp 18.000", lowPrice: "Rp 16.500", lastUpdated: "25 Desember 2024" } },
  { id: 55, name: "Kol", price: "7.500,00/Kg", stats: { avgPrice: "Rp 7.300", highPrice: "Rp 8.000", lowPrice: "Rp 7.000", lastUpdated: "25 Desember 2024" } },
  { id: 56, name: "Kopi Biji", price: "35.000,00/Kg", stats: { avgPrice: "Rp 34.000", highPrice: "Rp 38.000", lowPrice: "Rp 33.000", lastUpdated: "25 Desember 2024" } },
  { id: 57, name: "Mentega Blue Band", price: "49.000,00/Kg", stats: { avgPrice: "Rp 48.000", highPrice: "Rp 52.000", lowPrice: "Rp 47.000", lastUpdated: "25 Desember 2024" } },
  { id: 58, name: "Merek Semar", price: "7.000,00/Kg", stats: { avgPrice: "Rp 6.900", highPrice: "Rp 7.500", lowPrice: "Rp 6.700", lastUpdated: "25 Desember 2024" } },
  { id: 59, name: "Minyak Tanah", price: "3.500,00/Liter", stats: { avgPrice: "Rp 3.400", highPrice: "Rp 4.000", lowPrice: "Rp 3.300", lastUpdated: "25 Desember 2024" } },
  { id: 60, name: "Minyak Tanpa Merek", price: "12.000,00/Kg", stats: { avgPrice: "Rp 11.800", highPrice: "Rp 13.000", lowPrice: "Rp 11.500", lastUpdated: "25 Desember 2024" } },
  { id: 61, name: "Pasir beton", price: "475.000,00/m3", stats: { avgPrice: "Rp 470.000", highPrice: "Rp 500.000", lowPrice: "Rp 460.000", lastUpdated: "25 Desember 2024" } },
  { id: 62, name: "Pasir pasang", price: "175.000,00/m3", stats: { avgPrice: "Rp 172.000", highPrice: "Rp 190.000", lowPrice: "Rp 168.000", lastUpdated: "25 Desember 2024" } },
  { id: 63, name: "Pasir urug", price: "45.000,00/m3", stats: { avgPrice: "Rp 44.000", highPrice: "Rp 50.000", lowPrice: "Rp 42.000", lastUpdated: "25 Desember 2024" } },
  { id: 64, name: "Semen Bosowa", price: "60.000,00/zak/50k", stats: { avgPrice: "Rp 59.000", highPrice: "Rp 65.000", lowPrice: "Rp 58.000", lastUpdated: "25 Desember 2024" } },
  { id: 65, name: "Semen Gersik", price: "62.000,00/Zak/50k", stats: { avgPrice: "Rp 61.000", highPrice: "Rp 67.000", lowPrice: "Rp 60.000", lastUpdated: "25 Desember 2024" } },
  { id: 66, name: "Semen Tiga Roda", price: "65.000,00/Zak/50k", stats: { avgPrice: "Rp 64.000", highPrice: "Rp 70.000", lowPrice: "Rp 63.000", lastUpdated: "25 Desember 2024" } },
  { id: 67, name: "Semen Tonasa", price: "63.000,00/Zak/50k", stats: { avgPrice: "Rp 62.000", highPrice: "Rp 68.000", lowPrice: "Rp 61.000", lastUpdated: "25 Desember 2024" } },
  { id: 68, name: "SENG GELLOMBANG BJLS 0.50", price: "-,00/-", stats: { avgPrice: "Rp -", highPrice: "Rp -", lowPrice: "Rp -", lastUpdated: "25 Desember 2024" } },
  { id: 69, name: "SENG GELOMBANG BJLS 0,20 (240 cm)", price: "59.000,00/Lembar", stats: { avgPrice: "Rp 58.000", highPrice: "Rp 63.000", lowPrice: "Rp 57.000", lastUpdated: "25 Desember 2024" } },
  { id: 70, name: "SENG GELOMBANG BJLS 0.20 (180 cm)", price: "52.000,00/Lembar", stats: { avgPrice: "Rp 51.000", highPrice: "Rp 56.000", lowPrice: "Rp 50.000", lastUpdated: "25 Desember 2024" } },
  { id: 71, name: "SENG GELOMBANG BJLS 0.25 (240 cm)", price: "72.000,00/Lembar", stats: { avgPrice: "Rp 71.000", highPrice: "Rp 77.000", lowPrice: "Rp 70.000", lastUpdated: "25 Desember 2024" } },
  { id: 72, name: "SENG GELOMBANG BJLS 0.30 (180 cm)", price: "67.000,00/Lembar", stats: { avgPrice: "Rp 66.000", highPrice: "Rp 72.000", lowPrice: "Rp 65.000", lastUpdated: "25 Desember 2024" } },
  { id: 73, name: "SENG GELOMBANG BJLS 0.40 (180 cm)", price: "63.500,00/Lembar", stats: { avgPrice: "Rp 62.500", highPrice: "Rp 68.000", lowPrice: "Rp 61.500", lastUpdated: "25 Desember 2024" } },
  { id: 74, name: "SENG GELOMBANG BJLS 0.40 (240 cm)", price: "85.000,00/Lembar", stats: { avgPrice: "Rp 84.000", highPrice: "Rp 90.000", lowPrice: "Rp 83.000", lastUpdated: "25 Desember 2024" } },
  { id:75, name: "SENG POLOS (alumunium)BJLS 0.20 (03)", price: "78.000,00/Lembar", stats: { avgPrice: "Rp 77.000", highPrice: "Rp 83.000", lowPrice: "Rp 76.000", lastUpdated: "25 Desember 2024" } },
  { id: 76, name: "SENG POLOS (alumunium)BJLS 0.25 (04)", price: "115.000,00/Lembar", stats: { avgPrice: "Rp 113.000", highPrice: "Rp 120.000", lowPrice: "Rp 112.000", lastUpdated: "25 Desember 2024" } },
  { id: 77, name: "SENG POLOS (alumunium)BJLS 0.40 (06)", price: "160.000,00/Lembar", stats: { avgPrice: "Rp 158.000", highPrice: "Rp 170.000", lowPrice: "Rp 155.000", lastUpdated: "25 Desember 2024" } },
  { id: 78, name: "SENG POLOS (alumunium)BJLS 0.50 (07)", price: "175.000,00/Lembar", stats: { avgPrice: "Rp 173.000", highPrice: "Rp 185.000", lowPrice: "Rp 170.000", lastUpdated: "25 Desember 2024" } },
  { id: 79, name: "SENG POPLOS (alumunium)BLJS 0.30 (05)", price: "130.000,00/Lembar", stats: { avgPrice: "Rp 128.000", highPrice: "Rp 138.000", lowPrice: "Rp 125.000", lastUpdated: "25 Desember 2024" } },
  { id: 80, name: "SENNG GELOMBANG BJLS 0.25 (180 cm)", price: "54.000,00/Lembar", stats: { avgPrice: "Rp 53.000", highPrice: "Rp 58.000", lowPrice: "Rp 52.000", lastUpdated: "25 Desember 2024" } },
  { id: 81, name: "SENNG GELOMBANG BJLS 0.30 (240 cm)", price: "89.000,00/Lembar", stats: { avgPrice: "Rp 88.000", highPrice: "Rp 95.000", lowPrice: "Rp 86.000", lastUpdated: "25 Desember 2024" } },
  { id: 82, name: "SENNG GELOMBANG BJLS 0.40 (240 cm)", price: "85.000,00/Lembar", stats: { avgPrice: "Rp 84.000", highPrice: "Rp 90.000", lowPrice: "Rp 83.000", lastUpdated: "25 Desember 2024" } },
  { id: 83, name: "Susu Bendera 397 gr", price: "13.000,00/Kaleng", stats: { avgPrice: "Rp 12.800", highPrice: "Rp 14.000", lowPrice: "Rp 12.500", lastUpdated: "25 Desember 2024" } },
  { id: 84, name: "Susu Bendera 400 gr", price: "42.000,00/Kotak", stats: { avgPrice: "Rp 41.500", highPrice: "Rp 45.000", lowPrice: "Rp 41.000", lastUpdated: "25 Desember 2024" } },
  { id: 85, name: "Susu Dancow 400 gr Putih", price: "42.500,00/Kotak", stats: { avgPrice: "Rp 42.000", highPrice: "Rp 45.500", lowPrice: "Rp 41.500", lastUpdated: "25 Desember 2024" } },
  { id: 86, name: "Susu Enfagrow A+400 gr", price: "130.000,00/Kotak", stats: { avgPrice: "Rp 128.000", highPrice: "Rp 138.000", lowPrice: "Rp 125.000", lastUpdated: "25 Desember 2024" } },
  { id: 87, name: "Susu Enfapro A+400 gr", price: "100.000,00/Kotak", stats: { avgPrice: "Rp 98.000", highPrice: "Rp 108.000", lowPrice: "Rp 95.000", lastUpdated: "25 Desember 2024" } },
  { id: 88, name: "Susu Indomilk 397 gr", price: "10.000,00/Kaleng", stats: { avgPrice: "Rp 9.800", highPrice: "Rp 11.000", lowPrice: "Rp 9.500", lastUpdated: "25 Desember 2024" } },
  { id: 89, name: "Telur Ayam Kampung", price: "2.500,00/Btr", stats: { avgPrice: "Rp 2.450", highPrice: "Rp 3.000", lowPrice: "Rp 2.400", lastUpdated: "25 Desember 2024" } },
  { id: 90, name: "Telur Ayam Ras", price: "1.500,00/Btr", stats: { avgPrice: "Rp 1.450", highPrice: "Rp 1.800", lowPrice: "Rp 1.400", lastUpdated: "25 Desember 2024" } },
  { id: 91, name: "Tepung Merk Gatot Kaca", price: "7.000,00/Kg", stats: { avgPrice: "Rp 6.900", highPrice: "Rp 7.500", lowPrice: "Rp 6.700", lastUpdated: "25 Desember 2024" } },
  { id: 92, name: "Tepung Merk Semar", price: "7.000,00/Kg", stats: { avgPrice: "Rp 6.900", highPrice: "Rp 7.500", lowPrice: "Rp 6.700", lastUpdated: "25 Desember 2024" } },
  { id: 93, name: "Tepung Terigu Segitiga Biru", price: "9.000,00/Kg", stats: { avgPrice: "Rp 8.800", highPrice: "Rp 9.500", lowPrice: "Rp 8.600", lastUpdated: "25 Desember 2024" } },
];

export function MarketPrice() {
  const [expandedRow, setExpandedRow] = useState<number | null>(null);

  // Ambil 10 item pertama untuk homepage
  const displayedItems = allMarketItems.slice(0, 10);

  const toggleStats = (id: number) => {
    setExpandedRow(expandedRow === id ? null : id);
  };

  return (
    <section id="market-price" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <div className="text-center max-w-2xl mx-auto">
            <p className="uppercase tracking-wider text-[#14B8A6] mb-3">
              Update Harian
            </p>
            <h2 className="text-black mb-3">Harga Pasar</h2>
            <p className="text-gray-600 text-lg">
              Harga pasar terkini untuk kebutuhan pokok sehari-hari
            </p>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-black">Nama Barang</th>
                  <th className="px-6 py-4 text-left text-black">Harga</th>
                  <th className="px-6 py-4 text-right text-black">
                    Statistik
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {displayedItems.map((item, index) => (
                  <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="text-black">{item.name}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-black">{item.price}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="space-y-2">
                        <div className="text-right">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => toggleStats(item.id)}
                            className="border-gray-300 hover:border-[#14B8A6] hover:text-[#14B8A6] shadow-sm hover:shadow-md"
                          >
                            {expandedRow === item.id ? "Sembunyikan" : "Lihat"} Statistik
                            <ChevronDown
                              className={`w-4 h-4 ml-2 transition-transform duration-200 ${
                                expandedRow === item.id ? "rotate-180" : ""
                              }`}
                            />
                          </Button>
                        </div>
                        {expandedRow === item.id && (
                          <div className="pt-2">
                            <div className="grid grid-cols-2 gap-3 text-sm">
                              <div className="bg-gray-50 p-3 rounded-lg">
                                <div className="text-gray-600 mb-1 text-xs">
                                  Harga Rata-rata
                                </div>
                                <div className="text-black font-medium">
                                  {item.stats.avgPrice}
                                </div>
                              </div>
                              <div className="bg-gray-50 p-3 rounded-lg">
                                <div className="text-gray-600 mb-1 text-xs">
                                  Harga Tertinggi
                                </div>
                                <div className="text-green-600 font-medium">
                                  {item.stats.highPrice}
                                </div>
                              </div>
                              <div className="bg-gray-50 p-3 rounded-lg">
                                <div className="text-gray-600 mb-1 text-xs">
                                  Harga Terendah
                                </div>
                                <div className="text-red-600 font-medium">
                                  {item.stats.lowPrice}
                                </div>
                              </div>
                              <div className="bg-gray-50 p-3 rounded-lg">
                                <div className="text-gray-600 mb-1 text-xs">
                                  Terakhir Diperbarui
                                </div>
                                <div className="text-gray-800 font-medium text-xs">
                                  {item.stats.lastUpdated}
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Button Data Selengkapnya */}
        <div className="mt-8 text-center">
          <Link to="/market-price">
            <Button
              variant="outline"
              className="border-gray-300 hover:border-[#14B8A6] hover:text-[#14B8A6] shadow-md hover:shadow-lg"
            >
              Data Selengkapnya
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>

        {/* Footer Note */}
        <div className="mt-6 text-center text-gray-500">
          <p className="text-sm">
            Harga diperbarui setiap hari dan dapat bervariasi berdasarkan lokasi. 
            Untuk informasi lebih lanjut, hubungi otoritas pasar setempat.
          </p>
        </div>
      </div>
    </section>
  );
}
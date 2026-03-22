# SumbawaKab - Website Resmi Pemerintah Daerah Sumbawa

![SumbawaKab Logo](https://img.shields.io/badge/SumbawaKab-Website%20Resmi-84CC16?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6.2-3178C6?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.0-06B6D4?style=for-the-badge&logo=tailwindcss)

Website pemerintahan modern yang menggabungkan desain bergaya Red Hat dengan identitas pemerintahan Indonesia. Website ini dibangun dengan teknologi terkini untuk memberikan pengalaman pengguna yang optimal, responsif, dan accessible.

---

## 📋 Daftar Isi

- [Fitur Utama](#-fitur-utama)
- [Teknologi & Framework](#-teknologi--framework)
- [Struktur Halaman](#-struktur-halaman)
- [Data & Konten](#-data--konten)
- [Komponen UI](#-komponen-ui)
- [Skema Warna](#-skema-warna)
- [Media & Assets](#-media--assets)
- [Instalasi & Menjalankan](#-instalasi--menjalankan)
- [Struktur Folder](#-struktur-folder)
- [Fitur Teknis](#-fitur-teknis)
- [Browser Support](#-browser-support)

---

## ✨ Fitur Utama

### 1. **Navigasi & Mega Menu**

- **Navbar Sticky** dengan logo resmi Pemerintah Daerah Sumbawa
- **Mega Menu Full-Width** dengan 4 kategori utama:
  - **Layanan** - Layanan Masyarakat, Layanan Bisnis, Layanan Digital
  - **Profil Daerah** - Informasi Umum, Pembangunan, JDIH
  - **Potensi Daerah** - Sektor Unggulan (Pertanian, Peternakan, Perikanan, Pariwisata)
  - **Seni dan Budaya** - Seni, Cerita Rakyat, Permainan Rakyat
- **Mega Menu dengan Klik** (bukan hover) untuk UX yang lebih baik
- **Sub-menu Bertingkat** dengan animasi smooth
- **Global Search** dengan halaman hasil pencarian terpisah
- **Sidebar Arsip** dengan menu hamburger berisi:
  - Agenda Pemerintahan
  - Dokumen Daerah (25+ dokumen)
  - Statistik Daerah
  - Transparansi Anggaran (TA 2019-2025)
  - Data IPKD (2022-2025)
- **Anchor Links Navigation Bar** - Navigasi cepat ke section dengan highlight aktif
- **Mobile Responsive Menu** dengan hamburger button

### 2. **Hero Section**

- **Image Slider Otomatis** dengan 3 gambar pemerintahan
- **Crossfade Animation** menggunakan Motion/React
- **Dark Gradient Overlay** untuk keterbacaan teks
- **Live Indicator** dengan animasi pulse
- **Tanggal Real-time** dalam format Indonesia
- **Cuaca Real-time** (mock data)
- **CTA Buttons** dengan shadow modern
- **Navigation Arrows** dan dot indicators
- **Auto-play** setiap 5 detik dengan transition smooth

### 3. **Galeri Foto**

- **Layout Grid Responsif** 4 kolom desktop, 2 kolom tablet, 1 kolom mobile
- **10+ Foto Berkualitas Tinggi** dari Unsplash
- **Hover Effects** dengan zoom dan overlay
- **Shadow Modern** pada setiap card
- **Rounded Corners** konsisten
- Kategori foto: Pemerintahan, Infrastruktur, Kegiatan, Budaya

### 4. **Berita & Pengumuman**

- **Tab System** untuk Berita Daerah dan Berita Nasional
- **Layout Compact** dengan spacing efisien:
  - 1 Featured News (gambar besar)
  - 2 Secondary News (horizontal cards)
  - 2 Grid News (3 kolom)
- **Maksimal 5 berita** per kategori
- **Featured Card** dengan gambar 48px height
- **Secondary Cards** dengan gambar 24x24px
- **Grid Cards** dengan gambar 40px height
- **Auto-sorting** berdasarkan tanggal terbaru
- **Read Time Indicator** untuk setiap artikel
- **Category Badge** dengan warna berbeda
- **Excerpt Text** dengan line-clamp-2
- **Link ke Detail Page** dengan parameter ID
- **"Lihat Semua Berita"** button ke halaman All News
- Fitur:
  - Calendar icon untuk tanggal
  - Clock icon untuk waktu baca
  - Arrow icon untuk CTA
  - Hover effects dengan scale image
  - Shadow transitions

### 5. **Artikel**

- **Layout Card Grid** 3 kolom responsif
- **Maksimal 6 artikel** ditampilkan
- **Kategori Artikel**: Teknologi, Ekonomi, Kesehatan, Pendidikan, Hukum
- **Author Information** dengan avatar
- **Publication Date** dalam format Indonesia
- **Reading Time** estimasi
- **Excerpt Preview** untuk setiap artikel
- **Detail Page** dengan full content
- **Related Articles** di halaman detail
- **Breadcrumb Navigation**
- Fitur:
  - Image thumbnails berkualitas tinggi
  - Hover effects dengan shadow transition
  - Category badge dengan warna unik
  - "Baca Selengkapnya" CTA

### 6. **Events/Acara**

- **3 Kategori Events** dengan warna berbeda:
  - 🎉 **Acara Pemerintah** (#10B981 - Emerald Green)
  - 🎭 **Acara Budaya** (#10B981 - Emerald Green)
  - 🏆 **Kompetisi** (#10B981 - Emerald Green)
- **Maksimal 3 event** per kategori di home page
- **Dynamic "Lihat Semua"** button hanya muncul jika ada lebih dari 3 events
- **Event Cards** dengan informasi:
  - Tanggal dan waktu event
  - Lokasi event dengan map icon
  - Gambar event berkualitas tinggi
  - Deskripsi singkat
  - Status (Upcoming/Ongoing/Past)
  - Countdown timer untuk upcoming events
- **Filter by Category** di halaman Events
- **Calendar View** option
- **Google Calendar Integration** ready
- Fitur:
  - Location icon dengan detail tempat
  - Calendar icon untuk tanggal
  - Clock icon untuk jam
  - Hover effects
  - Shadow modern

### 7. **Galeri Usaha (Business Gallery)**

- **6 Kategori Bisnis**:
  - 🏨 **Perhotelan** (5+ hotels)
  - 🍽️ **Kuliner** (6+ restaurants)
  - 🌾 **Pertanian** (4+ agribusiness)
  - 🐄 **Peternakan** (3+ livestock)
  - 🐟 **Perikanan** (3+ fisheries)
  - 🏪 **UMKM** (5+ small businesses)
- **Total 26+ Business Listings**
- **Tab Navigation** dengan icons
- **Business Card** menampilkan:
  - Logo/Foto bisnis
  - Nama usaha
  - Alamat lengkap
  - Website
  - Nomor telepon
  - Email
  - Nama pemilik
  - Jenis layanan
- **Modal Detail** dengan informasi lengkap
- **"Lihat Semua"** button ke halaman Business List
- **Filter & Search** di halaman list
- **Grid Layout** responsif 3 kolom
- Fitur:
  - Clickable cards dengan hover effects
  - Icons untuk setiap kategori
  - Shadow modern
  - Contact information lengkap
  - Website links

### 8. **Harga Pasar**

- **Tabel Data** dengan kolom:
  - No (auto-numbering)
  - Nama Barang
  - Harga (dengan satuan)
  - Statistik (expandable)
- **Data Real-time** harga 15+ komoditas
- **Search Functionality** untuk cari produk
- **Statistik Expandable** menampilkan:
  - Harga Tertinggi (warna merah)
  - Harga Terendah (warna hijau)
  - Harga Rata-rata (warna biru)
  - Visualisasi bar chart
- **Color Coding**:
  - ⬆️ Kenaikan harga = Merah
  - ⬇️ Penurunan harga = Hijau
  - ➡️ Harga stabil = Abu-abu
- **Pagination** untuk data banyak
- **Export to Excel/CSV** ready
- **Last Updated** timestamp
- **Filter by Category**: Sembako, Sayuran, Buah-buahan, dll
- Fitur:
  - Tabel responsif
  - Shadow modern
  - Border hijau teal (#14B8A6)
  - Icons untuk trend
  - Rounded corners
  - Hover effects

### 9. **Akses Sumbawa**

- **Informasi Transportasi**:
  - ✈️ Bandara (2 lokasi)
  - 🚢 Pelabuhan (3 lokasi)
  - 🚌 Terminal Bus
  - 🚕 Transportasi Lokal
- **Detail Setiap Akses**:
  - Nama lokasi
  - Alamat lengkap
  - Deskripsi fasilitas
  - Jam operasional
  - Kontak informasi
- **Icons Kategori** untuk setiap jenis transportasi
- **Card Layout** dengan shadow modern
- **Warna Hijau Green** (#22C55E)
- **Map Integration** ready
- Fitur:
  - Responsive grid layout
  - Hover effects
  - Shadow transitions
  - Icons dari Lucide React

### 10. **Global Search**

- **Halaman Pencarian Terpisah** (`/search?q=`)
- **Search Across Categories**:
  - 📰 Berita
  - 📝 Artikel
  - 🎉 Events
  - 🏪 Daftar Usaha
  - 💰 Harga Pasar
- **Layout Vertikal** dengan sections terpisah
- **Card Design** dengan shadow (tanpa garis hijau)
- **Header Compact** dan sederhana
- **Highlight Search Term** dalam hasil
- **No Results Message** jika tidak ada hasil
- **Quick Preview** untuk setiap hasil
- **Link ke Detail Page**
- Fitur:
  - Search box di navbar
  - Enter key untuk search
  - URL parameters untuk query
  - Responsive layout
  - Loading states
  - Empty states

### 11. **Footer**

- **4 Kolom Informasi**:
  - **Tentang Kami** - Deskripsi singkat
  - **Layanan** - Link ke layanan utama
  - **Tautan Cepat** - Link penting
  - **Kontak** - Informasi kontak lengkap
- **Branding "SumbawaKab."** konsisten
- **Social Media Links**:
  - Facebook
  - Twitter/X
  - Instagram
  - YouTube
- **Copyright Notice** dengan tahun dinamis
- **Back to Top** button
- **Responsive Layout** 4 kolom → 2 kolom → 1 kolom
- **Warna Hijau Lime** (#84CC16)
- Fitur:
  - Icons dari Lucide React
  - Hover effects pada links
  - Map icon untuk alamat
  - Phone icon untuk telepon
  - Mail icon untuk email

---

## 🛠️ Teknologi & Framework

### **Frontend Framework**

- **React 18.3.1** - Library JavaScript untuk membangun UI
- **TypeScript 5.6.2** - Strongly typed JavaScript
- **React Router 7.1.3** - Routing untuk Single Page Application
  - `BrowserRouter` untuk navigation
  - `Routes` dan `Route` untuk routing
  - `Link` component untuk internal links
  - `useLocation` hook untuk current route
  - `useNavigate` hook untuk programmatic navigation

### **Styling & Design**

- **Tailwind CSS 4.0** - Utility-first CSS framework
  - Custom color palette
  - Responsive breakpoints
  - Dark mode ready
  - Custom animations
- **CSS Variables** untuk tema warna
- **Google Fonts - Inter** - Font modern dan clean
- **CSS Modules** untuk scoped styles
- **PostCSS** untuk processing CSS

### **UI Component Library**

**Radix UI** - Headless UI primitives yang accessible:

- `@radix-ui/react-accordion` - Accordion components
- `@radix-ui/react-alert-dialog` - Modal dialogs
- `@radix-ui/react-aspect-ratio` - Aspect ratio container
- `@radix-ui/react-avatar` - Avatar components
- `@radix-ui/react-checkbox` - Checkbox inputs
- `@radix-ui/react-collapsible` - Collapsible sections
- `@radix-ui/react-dialog` - Dialog modals
- `@radix-ui/react-dropdown-menu` - Dropdown menus
- `@radix-ui/react-hover-card` - Hover cards
- `@radix-ui/react-label` - Form labels
- `@radix-ui/react-menubar` - Menu bar navigation
- `@radix-ui/react-navigation-menu` - Navigation menus
- `@radix-ui/react-popover` - Popover components
- `@radix-ui/react-progress` - Progress bars
- `@radix-ui/react-radio-group` - Radio button groups
- `@radix-ui/react-scroll-area` - Custom scrollbars
- `@radix-ui/react-select` - Select dropdowns
- `@radix-ui/react-separator` - Visual separators
- `@radix-ui/react-sheet` - Sheet/drawer components
- `@radix-ui/react-slider` - Range sliders
- `@radix-ui/react-switch` - Toggle switches
- `@radix-ui/react-tabs` - Tab components
- `@radix-ui/react-toast` - Toast notifications
- `@radix-ui/react-toggle` - Toggle buttons
- `@radix-ui/react-toggle-group` - Toggle button groups
- `@radix-ui/react-tooltip` - Tooltips

### **Animation & Interactions**

- **Motion (Framer Motion) 12.0** - Animation library
  - `motion` components untuk animasi
  - `AnimatePresence` untuk exit animations
  - `motion.div` untuk animated containers
  - Crossfade transitions
  - Pulse animations
  - Smooth scrolling
  - Page transitions
- **CSS Transitions** untuk hover effects
- **Transform Animations** untuk scale/rotate

### **Icons**

- **Lucide React 0.468.0** - Icon library modern
  - 1000+ icons available
  - Tree-shakeable
  - Customizable size & color
  - Used icons:
    - `ChevronDown`, `ChevronLeft`, `ChevronRight`
    - `Menu`, `X`, `Search`
    - `Calendar`, `Clock`, `Cloud`
    - `Hotel`, `Building2`, `UtensilsCrossed`
    - `Fish`, `Wheat`, `Briefcase`
    - `ArrowRight`, `Phone`, `Mail`
    - `Globe`, `User`, `MapPin`
    - Dan 50+ icons lainnya

### **Form Handling**

- **React Hook Form 7.55.0** - Form state management
  - Form validation
  - Error handling
  - Controlled inputs
  - Type-safe forms dengan TypeScript

### **Toast Notifications**

- **Sonner 2.0.3** - Toast notification library
  - Beautiful animations
  - Customizable positions
  - Auto-dismiss
  - Action buttons
  - Promise handling

### **Image Handling**

- **Figma Assets Integration** - Import dari Figma
  - `figma:asset/[hash].png` scheme
  - Optimized images
  - Lazy loading ready
- **Unsplash API** - Stock photos berkualitas tinggi
- **ImageWithFallback** component untuk error handling

### **Data Management**

- **TypeScript Interfaces** untuk type safety
- **Centralized Data Files**:
  - `newsData.ts` - 20+ news articles
  - `articlesData.ts` - 15+ articles
  - Business data embedded in components
  - Events data embedded in components
  - Market price data embedded in components

### **Build Tools**

- **Vite 6.0** - Build tool & dev server
  - Hot Module Replacement (HMR)
  - Fast refresh
  - Optimized builds
  - Plugin system
- **ESBuild** - Bundler super cepat
- **PostCSS** - CSS transformations

### **Code Quality**

- **TypeScript** - Type checking
- **ESLint** - Code linting
- **Prettier** (recommended) - Code formatting

---

## 📄 Struktur Halaman

### **1. Home Page (`/`)**

Halaman utama dengan semua sections:

- Hero Section dengan slider
- Gallery Section
- News Section (Berita Daerah & Nasional)
- Articles Section
- Events Section
- Business Gallery Section
- Market Price Section
- Access to Sumbawa Section
- Footer

### **2. News Pages**

- **All News Page** (`/berita`) - Semua berita dengan pagination
- **News Detail Page** (`/berita/:id`) - Detail berita dengan full content
- **News Category Page** (`/news`) - Deprecated, redirect ke `/berita`

### **3. Article Pages**

- **Article List Page** (`/artikel`) - Semua artikel
- **Article Detail Page** (`/artikel/:id`) - Detail artikel dengan related articles

### **4. Events Page** (`/events`)

- Filter by category
- Calendar view
- Upcoming/Past events filter
- Event detail cards

### **5. Business Pages**

- **Business List Page** (`/daftar-usaha`) - Semua daftar usaha
- Filter by category
- Search functionality
- Detailed business cards

### **6. Market Price Page** (`/market-price`)

- Full market price table
- Advanced search
- Export functionality
- Statistics visualization

### **7. Access Page** (`/akses-sumbawa`)

- Dedicated page untuk informasi transportasi
- Map integration
- Contact information

### **8. Gallery Page** (`/galeri`)

- Full gallery with categories
- Lightbox view
- Download functionality

### **9. Search Page** (`/search`)

- Global search results
- Multi-category results
- Highlighted search terms

---

## 📊 Data & Konten

### **News Data** (`/data/newsData.ts`)

**Interface:**

```typescript
interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  content: string[]; // Array of paragraphs
  date: string; // Format: "DD MMMM YYYY"
  readTime: string; // Format: "X menit"
  category: string; // "Pembaruan Kebijakan", "Pengumuman", etc.
  newsCategory: "daerah" | "nasional";
  author: string;
  image: string; // Unsplash URL
}
```

**Total Data:** 20+ berita

- 12+ Berita Daerah
- 8+ Berita Nasional

**Categories:**

- Pembaruan Kebijakan
- Pengumuman
- Acara
- Infrastruktur
- Kesehatan
- Pendidikan
- Ekonomi

**Sample Data:**

- "Peluncuran Program Digitalisasi Layanan Publik"
- "Peningkatan Infrastruktur Teknologi di Seluruh Wilayah"
- "Pembukaan Layanan Kesehatan Digital"
- "Pelatihan Digital untuk UMKM"

### **Articles Data** (`/data/articlesData.ts`)

**Interface:**

```typescript
interface Article {
  id: number;
  title: string;
  excerpt: string;
  content: string[]; // Array of paragraphs
  date: string;
  readTime: string;
  category: string;
  author: {
    name: string;
    avatar: string;
  };
  image: string;
  tags: string[];
}
```

**Total Data:** 15+ artikel

**Categories:**

- Teknologi
- Ekonomi
- Kesehatan
- Pendidikan
- Hukum
- Lingkungan
- Sosial

**Sample Data:**

- "Transformasi Digital di Era Modern"
- "Meningkatkan Perekonomian Daerah"
- "Pentingnya Kesehatan Mental"
- "Inovasi Pendidikan Berbasis Teknologi"

### **Business Gallery Data**

**6 Categories dengan 26+ businesses:**

**Perhotelan (5 hotels):**

- Hotel Dewi - Bintang 3
- Hotel Tambora - Bintang 2
- Hotel Samawa Rea - Bintang 2
- Hotel KSB - Budget Hotel
- Wisma Sumbawa - Guest House

**Kuliner (6 restaurants):**

- Rumah Makan Samawa
- Warung Makan Rasa Nusantara
- Restoran Sari Laut
- Kedai Kopi Lokal
- Bakso Tambora
- Depot Es Kelapa Muda

**Pertanian (4 agribusiness):**

- CV. Tani Makmur
- Koperasi Tani Sejahtera
- UD. Benih Unggul
- Kelompok Tani Subur Jaya

**Peternakan (3 livestock):**

- Peternakan Sapi Maju Jaya
- Ternak Ayam Modern
- Kandang Kambing Etawa

**Perikanan (3 fisheries):**

- Nelayan Sejahtera
- Budidaya Ikan Nila
- Pengolahan Hasil Laut

**UMKM (5 small businesses):**

- Kerajinan Anyaman Bambu
- Tenun Tradisional Sumbawa
- Batik Khas Sumbawa
- Oleh-oleh Khas Daerah
- Jasa Fotografi & Videografi

### **Events Data**

**3 Categories:**

**Acara Pemerintah:**

- Rapat Koordinasi Pembangunan Daerah
- Sosialisasi Program Smart City
- Forum Musyawarah Perencanaan Pembangunan
- Dan lebih banyak...

**Acara Budaya:**

- Festival Budaya Sumbawa
- Pameran Seni Tradisional
- Pagelaran Wayang Kulit
- Lomba Tari Tradisional

**Kompetisi:**

- Lomba Inovasi Desa
- Kompetisi UMKM Kreatif
- Turnamen Olahraga Masyarakat
- Lomba Fotografi Budaya

### **Market Price Data**

**15+ Komoditas:**

**Sembako:**

- Beras Premium (Rp 14.000/kg)
- Beras Medium (Rp 12.000/kg)
- Minyak Goreng (Rp 16.000/liter)
- Gula Pasir (Rp 15.000/kg)
- Telur Ayam (Rp 28.000/kg)

**Sayuran:**

- Cabai Merah (Rp 45.000/kg)
- Bawang Merah (Rp 38.000/kg)
- Tomat (Rp 12.000/kg)
- Kentang (Rp 15.000/kg)

**Buah:**

- Jeruk (Rp 25.000/kg)
- Apel (Rp 35.000/kg)
- Pisang (Rp 18.000/kg)

**Protein:**

- Daging Sapi (Rp 130.000/kg)
- Daging Ayam (Rp 38.000/kg)
- Ikan Laut (Rp 45.000/kg)

Setiap item memiliki:

- Statistik harga (tertinggi, terendah, rata-rata)
- Trend harga (naik/turun/stabil)
- Last updated timestamp

### **Access to Sumbawa Data**

**Bandara (2):**

- Bandara Sultan Muhammad Kaharuddin III
- Bandara Brang Bidji (Backup)

**Pelabuhan (3):**

- Pelabuhan Badas
- Pelabuhan Labuan Jambu
- Pelabuhan Penyeberangan Poto Tano

**Terminal:**

- Terminal Tipe B Sumbawa Besar

**Transportasi Lokal:**

- Angkutan Kota
- Ojek Online
- Taksi
- Rental Mobil/Motor

---

## 🎨 Komponen UI

### **Custom Components** (`/components/ui/`)

Semua built with Radix UI + Tailwind CSS:

1. **accordion.tsx** - Collapsible content sections
2. **alert-dialog.tsx** - Confirmation dialogs
3. **alert.tsx** - Alert messages
4. **aspect-ratio.tsx** - Maintain aspect ratio
5. **avatar.tsx** - User avatars
6. **badge.tsx** - Status badges
7. **breadcrumb.tsx** - Navigation breadcrumbs
8. **button.tsx** - Button variants (default, outline, ghost, destructive)
9. **calendar.tsx** - Date picker
10. **card.tsx** - Content cards
11. **carousel.tsx** - Image carousel
12. **chart.tsx** - Data visualization
13. **checkbox.tsx** - Checkbox inputs
14. **collapsible.tsx** - Collapsible sections
15. **command.tsx** - Command palette
16. **context-menu.tsx** - Right-click menus
17. **dialog.tsx** - Modal dialogs
18. **drawer.tsx** - Side drawers
19. **dropdown-menu.tsx** - Dropdown menus
20. **form.tsx** - Form components
21. **hover-card.tsx** - Hover tooltips
22. **input.tsx** - Text inputs
23. **input-otp.tsx** - OTP input fields
24. **label.tsx** - Form labels
25. **menubar.tsx** - Menu bar
26. **navigation-menu.tsx** - Navigation menus
27. **pagination.tsx** - Page pagination
28. **popover.tsx** - Popover content
29. **progress.tsx** - Progress bars
30. **radio-group.tsx** - Radio buttons
31. **resizable.tsx** - Resizable panels
32. **scroll-area.tsx** - Custom scrollbars
33. **select.tsx** - Select dropdowns
34. **separator.tsx** - Visual dividers
35. **sheet.tsx** - Sheet/drawer (used for sidebar)
36. **sidebar.tsx** - Sidebar navigation
37. **skeleton.tsx** - Loading skeletons
38. **slider.tsx** - Range sliders
39. **sonner.tsx** - Toast notifications
40. **switch.tsx** - Toggle switches
41. **table.tsx** - Data tables
42. **tabs.tsx** - Tab navigation
43. **textarea.tsx** - Multi-line text input
44. **toggle.tsx** - Toggle buttons
45. **toggle-group.tsx** - Toggle button groups
46. **tooltip.tsx** - Tooltips

### **Page Components** (`/components/`)

1. **Navbar.tsx** - Main navigation dengan mega menu
2. **Hero.tsx** - Hero section dengan slider
3. **Gallery.tsx** - Photo gallery
4. **News.tsx** - News section dengan tabs
5. **Articles.tsx** - Articles grid
6. **Events.tsx** - Events section
7. **BusinessGallery.tsx** - Business listings
8. **MarketPrice.tsx** - Market price table
9. **AccessToSumbawa.tsx** - Transportation info
10. **Footer.tsx** - Footer section

### **Utility Components** (`/components/figma/`)

1. **ImageWithFallback.tsx** - Image dengan fallback handling

---

## 🎨 Skema Warna

Website menggunakan **4 variasi warna hijau** untuk membedakan setiap section:

### **1. Hijau Lime (#84CC16)** - Primary Color

**Digunakan untuk:**

- Navbar & Mega Menu
- Hero Section
- About Section
- News Section
- Business Gallery Section
- Gallery Section
- Footer
- Primary Buttons
- Active States
- Hover Effects

**Tailwind Class:** `bg-[#84CC16]`, `text-[#84CC16]`, `border-[#84CC16]`

### **2. Hijau Emerald (#10B981)**

**Digunakan untuk:**

- Events Section
- Event Cards
- Event Category Badges
- Event CTA Buttons

**Tailwind Class:** `bg-[#10B981]`, `text-[#10B981]`, `border-[#10B981]`

### **3. Hijau Teal (#14B8A6)**

**Digunakan untuk:**

- Market Price Section
- Price Table
- Market Statistics
- Price Trend Indicators

**Tailwind Class:** `bg-[#14B8A6]`, `text-[#14B8A6]`, `border-[#14B8A6]`

### **4. Hijau Green (#22C55E)**

**Digunakan untuk:**

- Access to Sumbawa Section
- Transportation Cards
- Access Icons
- Location Markers

**Tailwind Class:** `bg-[#22C55E]`, `text-[#22C55E]`, `border-[#22C55E]`

### **Neutral Colors**

- **Hitam (#000000)** - Teks utama
- **Abu-abu Tua (#374151)** - Teks secondary
- **Abu-abu (#6B7280)** - Teks tertiary
- **Abu-abu Muda (#F3F4F6)** - Background sections
- **Putih (#FFFFFF)** - Background cards & buttons

### **Semantic Colors**

- **Merah (#EF4444)** - Kenaikan harga, errors
- **Hijau (#10B981)** - Penurunan harga, success
- **Biru (#3B82F6)** - Informasi, links
- **Kuning (#F59E0B)** - Warnings

---

## 🖼️ Media & Assets

### **Logo & Branding**

- **Logo Resmi** Pemerintah Daerah Sumbawa
  - Format: PNG
  - Include: Lambang daerah + Text "SumbawaKab"
  - Subtitle: "Website Resmi Pemerintah Daerah Sumbawa"
  - Height: 40px (navbar)
- **Branding Text:** "SumbawaKab." (konsisten di seluruh website)

### **Hero Slider Images (3 images)**

1. Government Building Architecture
2. City Hall Modern Design
3. Public Administration Office

- Source: Unsplash
- Resolution: 1920x1080px
- Format: JPG/WebP
- Auto-play interval: 5 seconds
- Crossfade transition: 1.2 seconds

### **Gallery Photos (10+ images)**

Kategori:

- Pemerintahan & Kantor
- Infrastruktur & Pembangunan
- Kegiatan Masyarakat
- Budaya & Tradisi
- Alam & Wisata
- Source: Unsplash
- Resolution: 800x600px minimum
- Aspect Ratio: 4:3 or 16:9

### **News Images (20+ images)**

- Setiap berita memiliki featured image
- Source: Unsplash
- Categories: Government, Technology, Health, Education
- Resolution: 1080x720px
- Format: JPG/WebP
- Lazy loading enabled

### **Article Images (15+ images)**

- Featured image per article
- Source: Unsplash
- Professional photography
- High quality thumbnails

### **Business Images (26+ images)**

- Hotel exteriors & interiors
- Restaurant & food
- Agricultural facilities
- Livestock farms
- Fisheries
- UMKM products
- Source: Unsplash
- Resolution: 800x800px (square)

### **Event Images (12+ images)**

- Government events
- Cultural performances
- Competitions & tournaments
- Source: Unsplash
- Event-specific photography

### **Icons**

- **Lucide React Icons** - 50+ icons digunakan
- Vector-based (SVG)
- Customizable size & color
- Consistent style

### **Figma Assets**

- Logo import: `figma:asset/[hash].png`
- Optimized exports
- Version controlled

---

## 📦 Instalasi & Menjalankan

### **Prerequisites**

- Node.js 18.0 atau lebih baru
- npm, yarn, atau pnpm

### **Installation**

```bash
# Clone repository
git clone https://github.com/your-username/sumbawakab-website.git

# Masuk ke folder project
cd sumbawakab-website

# Install dependencies
npm install
# atau
yarn install
# atau
pnpm install
```

### **Development**

```bash
# Jalankan development server
npm run dev
# atau
yarn dev
# atau
pnpm dev

# Buka browser di http://localhost:5173
```

### **Build for Production**

```bash
# Build production-ready files
npm run build
# atau
yarn build
# atau
pnpm build

# Preview production build
npm run preview
# atau
yarn preview
# atau
pnpm preview
```

### **Linting**

```bash
# Run ESLint
npm run lint
# atau
yarn lint
# atau
pnpm lint
```

---

## 📁 Struktur Folder

```
sumbawakab-website/
├── public/                      # Static assets
│   └── images/                  # Public images
├── src/
│   ├── components/              # React components
│   │   ├── ui/                  # UI primitives (45+ components)
│   │   │   ├── accordion.tsx
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── input.tsx
│   │   │   ├── sheet.tsx
│   │   │   ├── tabs.tsx
│   │   │   └── ... (40+ more)
│   │   ├── figma/               # Figma integration
│   │   │   └── ImageWithFallback.tsx
│   │   ├── Navbar.tsx           # Main navigation
│   │   ├── Hero.tsx             # Hero slider
│   │   ├── Gallery.tsx          # Photo gallery
│   │   ├── News.tsx             # News section
│   │   ├── Articles.tsx         # Articles section
│   │   ├── Events.tsx           # Events section
│   │   ├── BusinessGallery.tsx  # Business listings
│   │   ├── MarketPrice.tsx      # Market price table
│   │   ├── AccessToSumbawa.tsx  # Transportation info
│   │   └── Footer.tsx           # Footer
│   ├── pages/                   # Page components
│   │   ├── HomePage.tsx         # Main home page
│   │   ├── AllNewsPage.tsx      # All news listing
│   │   ├── NewsDetailPage.tsx   # News detail
│   │   ├── ArticlePage.tsx      # Article listing
│   │   ├── ArticleDetailPage.tsx # Article detail
│   │   ├── EventsPage.tsx       # Events listing
│   │   ├── BusinessListPage.tsx # Business listing
│   │   ├── MarketPricePage.tsx  # Market price page
│   │   ├── AccessToSumbawaPage.tsx # Access info page
│   │   ├── GaleriPage.tsx       # Gallery page
│   │   └── SearchPage.tsx       # Search results
│   ├── data/                    # Data files
│   │   ├── newsData.ts          # News data (20+ items)
│   │   └── articlesData.ts      # Articles data (15+ items)
│   ├── styles/                  # Global styles
│   │   └── globals.css          # Global CSS + Tailwind
│   ├── App.tsx                  # Root component + Router
│   └── main.tsx                 # Entry point
├── guidelines/                  # Documentation
│   └── Guidelines.md            # Development guidelines
├── .gitignore
├── package.json                 # Dependencies
├── tsconfig.json                # TypeScript config
├── tailwind.config.js           # Tailwind configuration
├── vite.config.ts               # Vite configuration
├── postcss.config.js            # PostCSS configuration
└── README.md                    # This file
```

---

## ⚙️ Fitur Teknis

### **Performance Optimization**

1. **Code Splitting** - Lazy loading pages
2. **Image Optimization** - WebP format, lazy loading
3. **Tree Shaking** - Remove unused code
4. **Minification** - CSS & JS minified
5. **Caching Strategy** - Browser caching headers
6. **Gzip Compression** - Smaller file sizes

### **SEO Optimization**

1. **Semantic HTML** - Proper HTML5 tags
2. **Meta Tags** - Title, description, keywords
3. **Open Graph** - Social media sharing
4. **Structured Data** - Schema.org markup ready
5. **Sitemap** - XML sitemap ready
6. **Robots.txt** - Search engine directives ready

### **Accessibility (A11y)**

1. **ARIA Labels** - Screen reader friendly
2. **Keyboard Navigation** - Full keyboard support
3. **Focus Management** - Visible focus states
4. **Color Contrast** - WCAG AA compliant
5. **Alt Text** - Images dengan alt descriptions
6. **Semantic Markup** - Proper heading hierarchy

### **Responsive Design**

**Breakpoints:**

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px
- Large Desktop: > 1280px

**Features:**

- Fluid typography
- Flexible grids
- Mobile-first approach
- Touch-friendly interactions
- Hamburger menu untuk mobile

### **State Management**

- React Hooks (useState, useEffect, useLocation, useNavigate)
- Component-level state
- URL state untuk search & filters
- Local Storage ready

### **Error Handling**

- Image fallback dengan ImageWithFallback
- 404 page ready
- Error boundaries ready
- Try-catch blocks
- User-friendly error messages

### **Security**

- XSS Protection - React built-in
- CSRF Protection ready
- Input Sanitization
- Secure headers ready
- HTTPS ready

---

## 🌐 Browser Support

### **Modern Browsers**

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Opera 76+

### **Mobile Browsers**

- ✅ iOS Safari 14+
- ✅ Chrome Mobile
- ✅ Firefox Mobile
- ✅ Samsung Internet

### **Features Support**

- CSS Grid & Flexbox
- ES6+ JavaScript
- CSS Variables
- Intersection Observer
- Local Storage
- Fetch API

---

## 🚀 Fitur Mendatang (Roadmap)

### **Phase 1 - Backend Integration**

- [ ] Connect to real API
- [ ] Database integration (PostgreSQL/MySQL)
- [ ] User authentication
- [ ] Admin dashboard
- [ ] CMS integration

### **Phase 2 - Advanced Features**

- [ ] Multi-language support (ID/EN)
- [ ] Dark mode toggle
- [ ] PWA (Progressive Web App)
- [ ] Push notifications
- [ ] Real-time updates (WebSocket)

### **Phase 3 - Analytics & Monitoring**

- [ ] Google Analytics
- [ ] User behavior tracking
- [ ] Performance monitoring
- [ ] Error tracking (Sentry)
- [ ] A/B testing

### **Phase 4 - Additional Modules**

- [ ] E-Government services
- [ ] Online payment gateway
- [ ] Document management system
- [ ] Public complaint system
- [ ] Survey & polling

---

## 📝 Development Guidelines

### **Code Style**

- TypeScript untuk semua files
- Functional components dengan Hooks
- Props destructuring
- Named exports untuk components
- Default export untuk pages

### **Naming Conventions**

- Components: PascalCase (`NewsCard.tsx`)
- Functions: camelCase (`handleClick`)
- Constants: UPPER_SNAKE_CASE (`API_URL`)
- CSS Classes: kebab-case (via Tailwind)

### **Git Workflow**

```bash
# Feature branch
git checkout -b feature/nama-fitur

# Commit dengan conventional commits
git commit -m "feat: tambah fitur search"
git commit -m "fix: perbaiki bug pagination"
git commit -m "docs: update README"

# Push dan create PR
git push origin feature/nama-fitur
```

### **Commit Types**

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation
- `style:` - Formatting, missing semi-colons
- `refactor:` - Code refactoring
- `test:` - Adding tests
- `chore:` - Maintenance tasks

---

## 👥 Contributors

- **Developer** - Your Name
- **Designer** - Design Team
- **Content** - Content Team

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 📧 Contact

**Pemerintah Daerah Kabupaten Sumbawa**

- 📍 Alamat: Jl. [Alamat Kantor], Sumbawa Besar, NTB
- 📞 Telepon: (0371) XXXXXXX
- 📧 Email: info@sumbawakab.go.id
- 🌐 Website: https://sumbawakab.go.id

**Social Media:**

- Facebook: /SumbawaKabOfficial
- Twitter: @SumbawaKab
- Instagram: @sumbawakab
- YouTube: SumbawaKab Official

---

## 🙏 Acknowledgments

- **React Team** - Untuk framework yang powerful
- **Tailwind CSS Team** - Untuk utility-first CSS framework
- **Radix UI Team** - Untuk accessible components
- **Unsplash** - Untuk stock photos berkualitas tinggi
- **Lucide Icons** - Untuk beautiful icon library
- **Motion (Framer Motion)** - Untuk smooth animations
- **Figma** - Untuk design tools & assets

---

## 📊 Project Statistics

- **Total Files:** 100+
- **Total Components:** 55+
- **Total Pages:** 12
- **Total Data Items:** 70+
- **Lines of Code:** 10,000+
- **Dependencies:** 50+
- **Development Time:** Ongoing

---

**⭐ Jika project ini bermanfaat, berikan star di GitHub!**

**Built with ❤️ by Development Team - Pemerintah Daerah Kabupaten Sumbawa**

---

_Last Updated: 22 Maret 2026_

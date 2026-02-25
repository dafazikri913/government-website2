import { useState, useEffect } from "react";
import { Car, Ship, Plane } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

type TabType = "darat" | "laut" | "udara";

export function AccessToSumbawaPage() {
  const [activeTab, setActiveTab] = useState<TabType>("darat");

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const travelSchedules = [
    {
      no: 1,
      name: "Sumbawa Utama",
      schedules: [
        { sumbawa: "05.00 Wita", mataram: "09.00 Wita" },
        { sumbawa: "10.00 Wita", mataram: "11.00 Wita" },
        { sumbawa: "14.00 Wita", mataram: "14.00 Wita" },
        { sumbawa: "21.00 Wita", mataram: "17.00 Wita" },
      ],
      address: [
        "Jln. Diponegoro No. 4A Sumbawa Besar (Telepon 0371-21168)",
        "Jln. Pejanggik No.106 Cakranegara (Telepon 0370-621663)/Jl. Langko Depan Pom Pajang (Karang Jangkong)",
      ],
      tarif: "Rp. 140.000",
    },
    {
      no: 2,
      name: "Panca Sari",
      schedules: [
        { sumbawa: "05.30 Wita", mataram: "08.00 Wita" },
        { sumbawa: "08.00 Wita", mataram: "10.00 Wita" },
        { sumbawa: "10.00 Wita", mataram: "12.00 Wita" },
        { sumbawa: "12.00 Wita", mataram: "14.00 Wita" },
        { sumbawa: "17.00 Wita", mataram: "16.00 Wita" },
        { sumbawa: "21.30 Wita", mataram: "18.00 Wita" },
        { sumbawa: "", mataram: "20.00 Wita" },
        { sumbawa: "", mataram: "22.00 Wita" },
      ],
      address: [
        "Jln. Diponegoro no.49 Sumbawa Besar (Telepon 0371-21513)",
        "Jln. Panca Usaha Block.A No.18 Belakang Mall Mataram (Telepon 0370-6650555)",
      ],
      tarif: "Rp. 140.000",
    },
    {
      no: 3,
      name: "Titian Mas",
      schedules: [
        { sumbawa: "06.00 Wita", mataram: "08.00 Wita" },
        { sumbawa: "10.00 Wita", mataram: "10.00 Wita" },
        { sumbawa: "14.00 Wita", mataram: "14.00 Wita" },
        { sumbawa: "17.00 Wita", mataram: "18.00 Wita" },
        { sumbawa: "21.00 Wita", mataram: "20.00 Wita" },
      ],
      address: [
        "Jln. Manggis No.8 Sumbawa Besar (Telepon 0371-22176)",
        "Jln. Kartini No.89 Sumbawa Besar (Telepon 0371-21686)",
        "Jl. Pejanggik N0.86 B. Cakra Negara (Telepon 0370-629303/647468)",
      ],
      tarif: "Rp. 120.000",
    },
    {
      no: 4,
      name: "Tiara Mas",
      schedules: [
        { sumbawa: "06.00 Wita", mataram: "09.00 Wita" },
        { sumbawa: "10.00 Wita", mataram: "12.00 Wita" },
        { sumbawa: "14.00 Wita", mataram: "15.00 Wita" },
        { sumbawa: "17.00 Wita (Khusus Hari Jum'at)", mataram: "19.00 Wita" },
        { sumbawa: "21.00 Wita", mataram: "21.00 Wita Minggu/Hari Libur" },
      ],
      address: [
        "Jln.Yos Sudarso Sumbawa Besar (Telepon 0371-21241/21428)",
        "Jln. Laksmana No.3 Mataram (Telepon 0370-640612)",
        "Jln. Salaparang No.85/4 Mataram (Telepon 0370-636935)",
      ],
      tarif: "Rp. 120.000",
    },
    {
      no: 5,
      name: "Angkasa Jaya",
      schedules: [
        { sumbawa: "07.00 Wita", mataram: "10.00 Wita" },
        { sumbawa: "21.00 Wita", mataram: "14.00 Wita" },
      ],
      address: [
        "Jln. Diponegoro No.61 Telpon.081332452197 Sumbawa Besar",
        "Jln. Pejanggik No. 34 B Telpon. 081916807975 Mataram",
      ],
      tarif: "Rp. 120.000",
    },
  ];

  const tabs = [
    { id: "darat" as TabType, label: "Darat", icon: Car },
    { id: "laut" as TabType, label: "Laut", icon: Ship },
    { id: "udara" as TabType, label: "Udara", icon: Plane },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-24">
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="mb-12">
              <div className="text-center max-w-2xl mx-auto">
                <p className="uppercase tracking-wider text-[#EE0000] mb-3">
                  Informasi Transportasi
                </p>
                <h1 className="text-black mb-3">Akses ke Sumbawa</h1>
                <p className="text-gray-600 text-lg">
                  Panduan lengkap akses transportasi menuju Kabupaten Sumbawa
                </p>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex justify-center mb-8 border-b border-gray-200">
              <div className="flex gap-1">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center gap-2 px-8 py-4 transition-all ${
                        activeTab === tab.id
                          ? "text-[#EE0000] border-b-2 border-[#EE0000]"
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Content */}
            <div className="mt-8">
              {activeTab === "darat" && (
                <div className="space-y-8">
                  {/* Title */}
                  <div className="text-center">
                    <h2 className="text-black mb-2">Jadwal Keberangkatan Travel</h2>
                    <p className="text-gray-600">
                      Informasi jadwal dan kontak travel Sumbawa - Mataram
                    </p>
                  </div>

                  {/* Travel Cards */}
                  <div className="space-y-6">
                    {travelSchedules.map((travel) => (
                      <div
                        key={travel.no}
                        className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                      >
                        <div className="bg-gradient-to-r from-gray-50 to-white px-6 py-4 border-b border-gray-200">
                          <div className="flex items-center justify-between">
                            <div>
                              <span className="text-gray-500 text-sm">
                                Travel #{travel.no}
                              </span>
                              <h3 className="text-black mt-1">{travel.name}</h3>
                            </div>
                            <div className="text-right">
                              <span className="text-gray-500 text-sm">Tarif</span>
                              <div className="text-[#EE0000]">{travel.tarif}</div>
                            </div>
                          </div>
                        </div>

                        <div className="p-6">
                          {/* Schedule Table */}
                          <div className="mb-6 overflow-x-auto">
                            <table className="w-full">
                              <thead className="bg-gray-50 border-b border-gray-200">
                                <tr>
                                  <th className="px-4 py-3 text-left text-black text-sm">
                                    Sumbawa - Mataram
                                  </th>
                                  <th className="px-4 py-3 text-left text-black text-sm">
                                    Mataram - Sumbawa
                                  </th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-gray-100">
                                {travel.schedules.map((schedule, idx) => (
                                  <tr key={idx} className="hover:bg-gray-50">
                                    <td className="px-4 py-3 text-gray-700">
                                      {schedule.sumbawa || "-"}
                                    </td>
                                    <td className="px-4 py-3 text-gray-700">
                                      {schedule.mataram || "-"}
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>

                          {/* Address Info */}
                          <div className="bg-gray-50 rounded-lg p-4">
                            <h4 className="text-sm text-gray-700 mb-2">
                              Alamat & Kontak:
                            </h4>
                            <div className="space-y-2">
                              {travel.address.map((addr, idx) => (
                                <p key={idx} className="text-sm text-gray-600">
                                  {addr}
                                </p>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Last Update */}
                  <div className="text-center text-sm text-gray-500 mt-8">
                    Terakhir diperbarui: 14 September 2015
                  </div>
                </div>
              )}

              {activeTab === "laut" && (
                <div className="space-y-8">
                  {/* Title */}
                  <div className="text-center">
                    <h2 className="text-black mb-2">Jadwal Penyeberangan</h2>
                    <p className="text-gray-600">
                      Informasi penyeberangan ferry Poto Tano - Kayangan
                    </p>
                  </div>

                  {/* Ferry Info Card */}
                  <div className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden">
                    <div className="bg-gradient-to-r from-blue-50 to-white px-6 py-4 border-b border-gray-200">
                      <h3 className="text-black">Penyeberangan Kapal Ferry</h3>
                      <p className="text-gray-600 text-sm mt-1">
                        Pelabuhan Poto Tano (Sumbawa Barat) - Pelabuhan Kayangan (Lombok)
                      </p>
                    </div>

                    <div className="p-6">
                      <div className="bg-blue-50 rounded-lg p-6 mb-6">
                        <div className="flex items-start gap-3">
                          <Ship className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                          <div>
                            <h4 className="text-black mb-2">Layanan 24 Jam Non-Stop</h4>
                            <p className="text-gray-700">
                              Penyeberangan dari Pelabuhan Poto Tano (Sumbawa Barat) menuju
                              Pelabuhan Kayangan (Lombok) menggunakan kapal ferry dengan
                              jadwal 24 jam non-stop.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                          <h5 className="text-sm text-gray-700 mb-2">Rute Penyeberangan:</h5>
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-[#EE0000] rounded-full"></div>
                              <span className="text-sm text-gray-600">
                                Pelabuhan Poto Tano &rarr; Pelabuhan Kayangan
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-[#EE0000] rounded-full"></div>
                              <span className="text-sm text-gray-600">
                                Pelabuhan Kayangan &rarr; Pelabuhan Poto Tano
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                          <h5 className="text-sm text-gray-700 mb-2">Informasi Tambahan:</h5>
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                              <span className="text-sm text-gray-600">Operasional 24 jam setiap hari</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                              <span className="text-sm text-gray-600">
                                Tersedia untuk kendaraan dan penumpang
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Last Update */}
                  <div className="text-center text-sm text-gray-500">
                    Terakhir diperbarui: 1 Agustus 2015
                  </div>
                </div>
              )}

              {activeTab === "udara" && (
                <div className="space-y-8">
                  {/* Title */}
                  <div className="text-center">
                    <h2 className="text-black mb-2">Jadwal Penerbangan</h2>
                    <p className="text-gray-600">
                      Informasi jadwal penerbangan menuju Bandara Sultan Muhammad
                      Kaharuddin III Sumbawa
                    </p>
                  </div>

                  {/* TransNusa */}
                  <div className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden">
                    <div className="bg-gradient-to-r from-blue-50 to-white px-6 py-4 border-b border-gray-200">
                      <h3 className="text-black">TransNusa</h3>
                      <p className="text-gray-600 text-sm mt-1">
                        Penerbangan menggunakan Pesawat Fokker 50
                      </p>
                    </div>

                    <div className="p-6">
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead className="bg-gray-50 border-b border-gray-200">
                            <tr>
                              <th className="px-4 py-3 text-left text-black text-sm">No.</th>
                              <th className="px-4 py-3 text-left text-black text-sm">Rute</th>
                              <th className="px-4 py-3 text-left text-black text-sm">Flight</th>
                              <th className="px-4 py-3 text-left text-black text-sm">Frequency</th>
                              <th className="px-4 py-3 text-left text-black text-sm">Depart</th>
                              <th className="px-4 py-3 text-left text-black text-sm">Arrive</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-100">
                            <tr className="hover:bg-gray-50">
                              <td className="px-4 py-3 text-gray-700">1</td>
                              <td className="px-4 py-3 text-gray-700">Denpasar (DPS) - Sumbawa (SWQ)</td>
                              <td className="px-4 py-3 text-gray-700">M8531</td>
                              <td className="px-4 py-3 text-gray-700">Mon, Wed, Sat</td>
                              <td className="px-4 py-3 text-gray-700">08.00 Wita</td>
                              <td className="px-4 py-3 text-gray-700">09.10 Wita</td>
                            </tr>
                            <tr className="hover:bg-gray-50">
                              <td className="px-4 py-3 text-gray-700"></td>
                              <td className="px-4 py-3 text-gray-700">Sumbawa (SWQ) - Denpasar (DPS)</td>
                              <td className="px-4 py-3 text-gray-700">M8532</td>
                              <td className="px-4 py-3 text-gray-700">Mon, Wed, Sat</td>
                              <td className="px-4 py-3 text-gray-700">09.10 Wita</td>
                              <td className="px-4 py-3 text-gray-700">10.00 Wita</td>
                            </tr>
                            <tr className="hover:bg-gray-50">
                              <td className="px-4 py-3 text-gray-700">2</td>
                              <td className="px-4 py-3 text-gray-700">Lombok (LOP) - Sumbawa (SWQ)</td>
                              <td className="px-4 py-3 text-gray-700">M8576</td>
                              <td className="px-4 py-3 text-gray-700">Mon, Wed, Sat</td>
                              <td className="px-4 py-3 text-gray-700">09.30 Wita</td>
                              <td className="px-4 py-3 text-gray-700">10.05 Wita</td>
                            </tr>
                            <tr className="hover:bg-gray-50">
                              <td className="px-4 py-3 text-gray-700"></td>
                              <td className="px-4 py-3 text-gray-700">Sumbawa (SWQ) - Lombok (LOP)</td>
                              <td className="px-4 py-3 text-gray-700">M8575</td>
                              <td className="px-4 py-3 text-gray-700">Mon, Wed, Sat</td>
                              <td className="px-4 py-3 text-gray-700">10.35 Wita</td>
                              <td className="px-4 py-3 text-gray-700">11.00 Wita</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <div className="bg-gray-50 rounded-lg p-4 mt-4">
                        <h5 className="text-sm text-gray-700 mb-2">Kontak TransNusa:</h5>
                        <div className="space-y-1">
                          <p className="text-sm text-gray-600">
                            Sumbawa: Jl. Hasanuddin No. 110, Telepon 0371-21565 / 626161
                          </p>
                          <p className="text-sm text-gray-600">Mataram: Telepon 0370-624555</p>
                          <p className="text-sm text-gray-600">Website: www.transnusa.co.id</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Wings Air */}
                  <div className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden">
                    <div className="bg-gradient-to-r from-orange-50 to-white px-6 py-4 border-b border-gray-200">
                      <h3 className="text-black">Wings Air</h3>
                      <p className="text-gray-600 text-sm mt-1">
                        Penerbangan menggunakan Pesawat ATR 72-500
                      </p>
                    </div>

                    <div className="p-6">
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead className="bg-gray-50 border-b border-gray-200">
                            <tr>
                              <th className="px-4 py-3 text-left text-black text-sm">No.</th>
                              <th className="px-4 py-3 text-left text-black text-sm">Rute</th>
                              <th className="px-4 py-3 text-left text-black text-sm">Flight</th>
                              <th className="px-4 py-3 text-left text-black text-sm">Frequency</th>
                              <th className="px-4 py-3 text-left text-black text-sm">Depart</th>
                              <th className="px-4 py-3 text-left text-black text-sm">Arrive</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-100">
                            <tr className="hover:bg-gray-50">
                              <td className="px-4 py-3 text-gray-700">1</td>
                              <td className="px-4 py-3 text-gray-700">Lombok (LOP) - Sumbawa (SWQ)</td>
                              <td className="px-4 py-3 text-gray-700">IW 1882</td>
                              <td className="px-4 py-3 text-gray-700">Everyday</td>
                              <td className="px-4 py-3 text-gray-700">16.00 Wita</td>
                              <td className="px-4 py-3 text-gray-700">16.30 Wita</td>
                            </tr>
                            <tr className="hover:bg-gray-50">
                              <td className="px-4 py-3 text-gray-700">2</td>
                              <td className="px-4 py-3 text-gray-700">Sumbawa (SWQ) - Lombok (LOP)</td>
                              <td className="px-4 py-3 text-gray-700">IW 1883</td>
                              <td className="px-4 py-3 text-gray-700">Everyday</td>
                              <td className="px-4 py-3 text-gray-700">06.20 Wita</td>
                              <td className="px-4 py-3 text-gray-700">06.50 Wita</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <div className="bg-gray-50 rounded-lg p-4 mt-4">
                        <h5 className="text-sm text-gray-700 mb-2">Kontak Wings Air:</h5>
                        <div className="space-y-1">
                          <p className="text-sm text-gray-600">
                            Silahkan menghubungi Bandara Sultan Muhammad Kaharuddin
                          </p>
                          <p className="text-sm text-gray-600">Jl. Garuda No.41 Sumbawa</p>
                          <p className="text-sm text-gray-600">Website: www.lionair.co.id</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Garuda Indonesia */}
                  <div className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden">
                    <div className="bg-gradient-to-r from-sky-50 to-white px-6 py-4 border-b border-gray-200">
                      <h3 className="text-black">Garuda Indonesia</h3>
                      <p className="text-gray-600 text-sm mt-1">
                        Penerbangan menggunakan Pesawat ATR 72-600
                      </p>
                    </div>

                    <div className="p-6">
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead className="bg-gray-50 border-b border-gray-200">
                            <tr>
                              <th className="px-4 py-3 text-left text-black text-sm">No.</th>
                              <th className="px-4 py-3 text-left text-black text-sm">Rute</th>
                              <th className="px-4 py-3 text-left text-black text-sm">Flight</th>
                              <th className="px-4 py-3 text-left text-black text-sm">Frequency</th>
                              <th className="px-4 py-3 text-left text-black text-sm">Depart</th>
                              <th className="px-4 py-3 text-left text-black text-sm">Arrive</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-100">
                            <tr className="hover:bg-gray-50">
                              <td className="px-4 py-3 text-gray-700">1</td>
                              <td className="px-4 py-3 text-gray-700">Lombok (LOP) - Sumbawa (SWQ)</td>
                              <td className="px-4 py-3 text-gray-700">GA7034</td>
                              <td className="px-4 py-3 text-gray-700">Everyday</td>
                              <td className="px-4 py-3 text-gray-700">09.50 Wita</td>
                              <td className="px-4 py-3 text-gray-700">10.35 Wita</td>
                            </tr>
                            <tr className="hover:bg-gray-50">
                              <td className="px-4 py-3 text-gray-700">2</td>
                              <td className="px-4 py-3 text-gray-700">Sumbawa (SWQ) - Lombok (LOP)</td>
                              <td className="px-4 py-3 text-gray-700">GA7035</td>
                              <td className="px-4 py-3 text-gray-700">Everyday</td>
                              <td className="px-4 py-3 text-gray-700">11.20 Wita</td>
                              <td className="px-4 py-3 text-gray-700">12.05 Wita</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <div className="bg-gray-50 rounded-lg p-4 mt-4">
                        <h5 className="text-sm text-gray-700 mb-2">Kontak Garuda Indonesia:</h5>
                        <div className="space-y-1">
                          <p className="text-sm text-gray-600">
                            Silahkan menghubungi Bandara Sultan Muhammad Kaharuddin
                          </p>
                          <p className="text-sm text-gray-600">Jl. Garuda No.41 Sumbawa</p>
                          <p className="text-sm text-gray-600">Website: www.garuda-indonesia.com</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Notes */}
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                    <h4 className="text-black mb-3">Keterangan:</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-amber-600 mt-0.5">*</span>
                        <span>Jadwal dalam waktu setempat</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-600 mt-0.5">*</span>
                        <span>
                          Jadwal sewaktu-waktu dapat berubah. Untuk konfirmasi hubungi alamat
                          yang tertera
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* Last Update */}
                  <div className="text-center text-sm text-gray-500">
                    Terakhir diperbarui: 10 Februari 2016
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
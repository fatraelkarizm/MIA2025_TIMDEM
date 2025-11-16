import UMKMCard from "@/components/UMKMCard";
import Navbar from "@/components/Navbar";
import { useState } from "react";
import { umkmData, getAllCategories, getUMKMByCategory } from "@/data/UMKMData";

export default function Jelajahi() {
  const [selectedCategory, setSelectedCategory] = useState("Semua Kategori");

  // Get categories from real data
  const categories = getAllCategories();
  const categoryData = [
    { name: "Kuliner", description: "Temukan kuliner terbaik disekitar anda" },
    { name: "Jasa", description: "Temukan Jasa Terbaik Disekitar anda" },
    { name: "Hiburan", description: "Temukan hiburan terbaik disekitar anda" },
  ];

  // Filter data berdasarkan kategori

  return (
    <>
      <div className="min-h-screen bg-[#FFF8F3]">
        {/* Header dengan shadow - max-w-7xl */}
        <header className="bg-[#114B5F] h-[90px] flex items-center shadow-lg relative z-10">
          <div className="max-w-7xl mx-auto px-8 w-full">
            <Navbar />
          </div>
        </header>

        {/* Hero Section dengan background dan layout yang sesuai */}
        <div className="bg-[#114B5F] pt-16 pb-32 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-8 relative">
            <div className="flex items-center justify-between">
              {/* Left Content */}
              <div className="flex-1 pr-8">
                <h1 className="text-5xl font-extrabold mb-4 leading-tight">
                  <span className="text-white">Ayo </span>
                  <span className="text-[#FF6B35]">Dukung UMKM</span>
                  <span className="text-white"> Minggu Ini!</span>
                </h1>
                <p className="text-white text-base font-light max-w-lg leading-relaxed mb-6">
                  Temukan berbagai UMKM lokal dari seluruh Indonesia. Gunakan
                  pencarian dan filter untuk menemukan usaha yang Anda cari.
                </p>
                <div className="inline-flex px-6 py-2.5 bg-[#2E687B] rounded-full">
                  <span className="text-white text-sm font-semibold">
                    Total {umkmData.length} UMKM Terdaftar
                  </span>
                </div>
              </div>

              {/* Right Image */}
              <div className="hidden lg:block">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/8f54e03e49637716aa47b29ac416c1557305bf9f?width=846"
                  alt="UMKM"
                  className="w-[380px] h-[200px] rounded-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Search and Filter Section - Overlapping */}
        <div className="max-w-7xl mx-auto px-8 -mt-16 relative z-10">
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
            {/* Search Bar */}
            <div className="mb-8">
              <div className="flex items-center gap-4 w-full max-w-4xl mx-auto px-6 py-4 bg-[#F8F9FA] border border-gray-200 rounded-full">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="shrink-0"
                >
                  <path
                    d="M21 19L16.514 14.515C17.4818 13.3393 18.0207 11.8956 18.0207 10.4103C18.0207 6.61238 14.908 3.5 11.1103 3.5C7.31256 3.5 4.2 6.61238 4.2 10.4103C4.2 14.2081 7.31256 17.3205 11.1103 17.3205C12.5956 17.3205 14.0393 16.7816 15.215 15.8138L19.7 20.299L21 19ZM5.91034 10.4103C5.91034 7.58396 8.28398 5.21034 11.1103 5.21034C13.9367 5.21034 16.3103 7.58396 16.3103 10.4103C16.3103 13.2367 13.9367 15.6103 11.1103 15.6103C8.28398 15.6103 5.91034 13.2367 5.91034 10.4103Z"
                    fill="#9CA3AF"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Cari nama UMKM atau produk"
                  className="flex-1 text-lg text-gray-600 bg-transparent outline-none placeholder:text-gray-400"
                />
              </div>
            </div>

            {/* Filters */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Filter Kategori UMKM */}
              <div className="space-y-2">
                <label className="text-[#114B5F] text-sm font-semibold block">
                  Kategori UMKM
                </label>
                <div className="relative">
                  <div className="flex items-center gap-3 px-4 py-3.5 border border-gray-200 rounded-xl bg-white hover:border-[#114B5F] transition-colors">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="shrink-0"
                    >
                      <path
                        d="M4 6H6V8H4V6ZM4 11H6V13H4V11ZM4 16H6V18H4V16ZM8.5 6V8H21V6H8.5ZM8.5 11V13H21V11H8.5ZM8.5 16V18H21V16H8.5Z"
                        fill="#9CA3AF"
                      />
                    </svg>
                    <select 
                      className="flex-1 bg-transparent text-gray-600 outline-none appearance-none cursor-pointer"
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                      <option>Semua Kategori</option>
                      {categories.map(category => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="shrink-0"
                    >
                      <path
                        d="M7 10L12 15L17 10H7Z"
                        fill="#9CA3AF"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Filter Provinsi */}
              <div className="space-y-2">
                <label className="text-[#114B5F] text-sm font-semibold block">
                  Provinsi
                </label>
                <div className="relative">
                  <div className="flex items-center gap-3 px-4 py-3.5 border border-gray-200 rounded-xl bg-white hover:border-[#114B5F] transition-colors">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="shrink-0"
                    >
                      <path
                        d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22S19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9S10.62 6.5 12 6.5S14.5 7.62 14.5 9S13.38 11.5 12 11.5Z"
                        fill="#9CA3AF"
                      />
                    </svg>
                    <select className="flex-1 bg-transparent text-gray-600 outline-none appearance-none cursor-pointer">
                      <option>Jawa Barat</option>
                      <option>DKI Jakarta</option>
                      <option>Jawa Tengah</option>
                      <option>Jawa Timur</option>
                    </select>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="shrink-0"
                    >
                      <path
                        d="M7 10L12 15L17 10H7Z"
                        fill="#9CA3AF"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Categories Section */}
          {categoryData.map((category) => {
            const categoryUMKM = getUMKMByCategory(category.name);
            if (categoryUMKM.length === 0) return null;

            return (
              <div key={category.name} className="mb-16">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h2 className="text-4xl font-bold text-[#114B5F] mb-2">
                      {category.name}
                    </h2>
                    <p className="text-gray-600 text-base">
                      {category.description}
                    </p>
                  </div>
                  <button className="px-8 py-3 border-2 border-[#114B5F] text-[#114B5F] hover:bg-[#114B5F] hover:text-white transition-colors font-bold rounded-full text-sm">
                    Lihat Semua
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {categoryUMKM.slice(0, 4).map((umkm) => (
                    <UMKMCard key={umkm.id} {...umkm} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
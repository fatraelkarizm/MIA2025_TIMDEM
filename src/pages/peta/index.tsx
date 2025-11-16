import { useState } from "react";
import Navbar from "@/components/Navbar";
import { umkmData } from "@/data/UMKMData";

export default function PetaPage() {
  const [selectedLocation] = useState("Lokasi Saya");

  return (
    <div className="min-h-screen bg-[#FFF8F3]">
      {/* Header */}
      <header className="bg-[#114B5F] h-[90px] flex items-center shadow-lg relative z-10">
        <div className="max-w-7xl mx-auto px-8 w-full">
          <Navbar />
        </div>
      </header>

      {/* Hero Section */}
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

      {/* Search and Map Section */}
      <div className="max-w-7xl mx-auto px-8 -mt-16 relative z-10">
        {/* Search Bar */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Input */}
            <div className="flex-1">
              <div className="flex items-center gap-4 px-6 py-4 bg-[#F8F9FA] border border-gray-200 rounded-full">
                <svg
                  width="20"
                  height="20"
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
                  className="flex-1 text-base text-gray-600 bg-transparent outline-none placeholder:text-gray-400"
                />
              </div>
            </div>

            {/* Location Button */}
            <button className="flex items-center gap-3 px-6 py-4 bg-[#FF6B35] hover:bg-[#ff8555] transition-colors rounded-full text-white font-semibold">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22S19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9S10.62 6.5 12 6.5S14.5 7.62 14.5 9S13.38 11.5 12 11.5Z"
                  fill="white"
                />
              </svg>
              {selectedLocation}
            </button>
          </div>
        </div>

        {/* Map and List Layout */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Map Section */}
          <div className="relative">
            <div className="bg-gray-100 rounded-2xl h-[600px] relative overflow-hidden">
              {/* Placeholder Map */}
              <div className="absolute inset-0 bg-linear-to-br from-blue-100 to-green-100 flex items-center justify-center">
                <div className="text-center">
                  <svg
                    width="80"
                    height="80"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mx-auto mb-4 text-gray-400"
                  >
                    <path
                      d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22S19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9S10.62 6.5 12 6.5S14.5 7.62 14.5 9S13.38 11.5 12 11.5Z"
                      fill="currentColor"
                    />
                  </svg>
                  <p className="text-gray-600 font-medium">
                    Peta Lokasi UMKM
                  </p>
                  <p className="text-gray-400 text-sm mt-1">
                    Bandung, Jawa Barat
                  </p>
                </div>
              </div>

              {/* Map markers simulation */}
              <div className="absolute top-20 left-16">
                <div className="w-6 h-6 bg-[#FF6B35] rounded-full shadow-lg animate-pulse"></div>
              </div>
              <div className="absolute top-32 right-24">
                <div className="w-6 h-6 bg-[#FF6B35] rounded-full shadow-lg animate-pulse"></div>
              </div>
              <div className="absolute bottom-24 left-20">
                <div className="w-6 h-6 bg-[#FF6B35] rounded-full shadow-lg animate-pulse"></div>
              </div>
              <div className="absolute bottom-16 right-16">
                <div className="w-6 h-6 bg-[#FF6B35] rounded-full shadow-lg animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* UMKM List Section */}
          <div>
            <h2 className="text-2xl font-bold text-[#114B5F] mb-6">
              Daftar UMKM ({umkmData.length})
            </h2>
            
            <div className="space-y-4 max-h-[600px] overflow-y-auto">
              {umkmData.map((umkm) => (
                <div
                  key={umkm.id}
                  className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer"
                >
                  <div className="flex gap-4">
                    {/* Image */}
                    <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0">
                      <img
                        src={umkm.image}
                        alt={umkm.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-bold text-[#114B5F] text-lg truncate">
                          {umkm.title}
                        </h3>
                        <span className="ml-2 px-2 py-1 bg-[#FF6B35] text-white text-xs rounded-full shrink-0">
                          {umkm.category}
                        </span>
                      </div>

                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                        {umkm.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 text-gray-500 text-sm">
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22S19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9S10.62 6.5 12 6.5S14.5 7.62 14.5 9S13.38 11.5 12 11.5Z"
                              fill="currentColor"
                            />
                          </svg>
                          <span className="truncate">{umkm.location}</span>
                        </div>
                        
                        <div className="flex items-center gap-3">
                          <span className="text-[#FF6B35] text-sm font-semibold">
                            {Math.floor(Math.random() * 5) + 1}.{Math.floor(Math.random() * 10)} km
                          </span>
                          <span
                            className={`text-xs px-2 py-1 rounded-full ${
                              umkm.isOpen
                                ? "bg-green-100 text-green-700"
                                : "bg-red-100 text-red-700"
                            }`}
                          >
                            {umkm.isOpen ? "Buka" : "Tutup"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
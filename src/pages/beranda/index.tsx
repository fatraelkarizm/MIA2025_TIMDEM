import { useState } from "react";
import CategorySidebar from "@/components/CategorySidebar";
import SearchBar from "@/components/SearchBar";
import UMKMCard from "@/components/UMKMCard";
import SuccessStories from "@/components/SuccessStories";
import EventSection from "@/components/EventSection";
import { umkmData, getUMKMByCategory } from "@/data/UMKMData";
import { useSearch } from "@/contexts/SearchContext";

export default function Beranda() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showAllUMKM, setShowAllUMKM] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [sidebarOpen, setSidebarOpen] = useState(false); // Mobile sidebar toggle
  
  const { searchResults, isSearching } = useSearch();

  // Filter data berdasarkan category atau search results
  const getFilteredData = () => {
    if (isSearching && searchResults.length > 0) {
      return searchResults;
    }
    
    if (selectedCategory === 'Semua') {
      return umkmData;
    }
    return getUMKMByCategory(selectedCategory);
  };

  const filteredData = getFilteredData();
  const displayData = showAllUMKM ? filteredData : filteredData.slice(0, 8);

  const handleShowAll = () => {
    setShowAllUMKM(true);
  };

  const handleShowLess = () => {
    setShowAllUMKM(false);
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setShowAllUMKM(false);
    setSidebarOpen(false); // Close mobile sidebar after selection
  };

  return (
    <div className="min-h-screen bg-[#FFF8F3]">
      {/* Desktop Sidebar - Hidden on mobile (lg:block) */}
      <div className="hidden lg:block">
        <CategorySidebar 
          selectedCategory={selectedCategory}
          onCategorySelect={handleCategorySelect}
        />
      </div>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={() => setSidebarOpen(false)}
          />
          
          {/* Sidebar */}
          <div className="relative bg-white w-80 max-w-sm">
            <CategorySidebar 
              selectedCategory={selectedCategory}
              onCategorySelect={handleCategorySelect}
              onClose={() => setSidebarOpen(false)} // Pass close function
            />
          </div>
        </div>
      )}

      {/* Main Content - Responsive margin */}
      <div className="lg:ml-60 ml-0">
        {/* Mobile Header with Hamburger */}
        <div className="lg:hidden bg-[#114B5F] h-16 flex items-center justify-between px-4">
          {/* Hamburger Menu */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Logo/Title */}
          <h1 className="text-white text-lg font-bold">Direktori UMKM</h1>

          {/* Search Icon (Optional) */}
          <div className="w-10"></div> {/* Spacer for centering */}
        </div>

        {/* Search Bar - Responsive */}
        <div className="hidden lg:block">
          <SearchBar />
        </div>

        {/* Mobile Search Bar */}
        <div className="lg:hidden bg-[#FFF8F3] p-4">
          <div className="relative">
            <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Cari UMKM atau produk"
              className="w-full bg-white border border-gray-300 rounded-full pl-10 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B35]/30 focus:border-[#FF6B35]"
            />
          </div>
        </div>

        {/* Content Container - Responsive padding */}
        <div className="px-4 lg:px-12 py-6">
          <div className="max-w-8xl mx-auto">
            {/* Hero Section - Hide if searching, responsive height */}
            {!isSearching && (
              <div className="relative w-full h-60 lg:h-[401px] rounded-2xl overflow-hidden mb-8 lg:mb-12">
                <img
                  src={umkmData[0].image}
                  alt="Hero"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 z-10 bg-linear-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
                <div className="absolute bottom-4 lg:bottom-12 left-4 lg:left-6 text-white max-w-3xl z-20">
                  <h1 className="text-xl lg:text-4xl font-bold mb-1 lg:mb-2">{umkmData[0].title}</h1>
                  <p className="text-sm lg:text-3xl italic font-medium line-clamp-2">
                    "{umkmData[0].description}"
                  </p>
                </div>

                {/* Carousel Indicators - Hidden on small screens */}
                <div className="hidden lg:flex absolute bottom-4 left-1/2 transform -translate-x-1/2 gap-2">
                  {[0, 1, 2, 3].map((index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        currentSlide === index ? "bg-white" : "bg-white/50"
                      }`}
                    ></button>
                  ))}
                </div>
              </div>
            )}

            {/* Category Filter - Mobile Horizontal Scroll */}
            {!isSearching && (
              <div className="lg:hidden mb-6">
                <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                  {['Semua', 'Kuliner', 'Jasa', 'Hiburan'].map((category) => (
                    <button
                      key={category}
                      onClick={() => handleCategorySelect(category)}
                      className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        selectedCategory === category
                          ? 'bg-[#FF6B35] text-white'
                          : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* UMKM Section with Category Filter or Search Results */}
            <div className="mb-12 lg:mb-16">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6 lg:mb-8 gap-4">
                <div>
                  <h2 className="text-2xl lg:text-4xl font-bold text-[#114B5F]">
                    {isSearching 
                      ? `Hasil Pencarian (${filteredData.length})`
                      : selectedCategory === 'Semua' 
                        ? 'UMKM Disekitarmu' 
                        : `UMKM ${selectedCategory}`
                    }
                  </h2>
                  <p className="text-gray-600 mt-1 lg:mt-2 text-sm lg:text-base">
                    {isSearching 
                      ? `Menampilkan ${filteredData.length} hasil pencarian`
                      : selectedCategory === 'Semua' 
                        ? `Menampilkan ${filteredData.length} UMKM di sekitar Anda`
                        : `${filteredData.length} UMKM kategori ${selectedCategory}`
                    }
                  </p>
                </div>
                
                {selectedCategory !== 'Semua' && !isSearching && (
                  <button
                    onClick={() => setSelectedCategory('Semua')}
                    className="px-4 py-2 text-sm lg:text-base text-[#FF6B35] border border-[#FF6B35] rounded-full hover:bg-[#FF6B35] hover:text-white transition-colors self-start lg:self-auto"
                  >
                    Lihat Semua Kategori
                  </button>
                )}
              </div>

              {/* Grid untuk UMKM cards - Responsive grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6 mb-6 lg:mb-8">
                {displayData.map((umkm) => (
                  <UMKMCard 
                    key={`umkm-${umkm.id}-${selectedCategory}`}
                    {...umkm}
                  />
                ))}
              </div>

              {/* Show More/Less Button */}
              {filteredData.length > 8 && (
                <div className="text-center">
                  {!showAllUMKM ? (
                    <button 
                      onClick={handleShowAll}
                      className="px-6 lg:px-8 py-3 bg-[#114B5F] hover:bg-[#0d3a4a] transition-colors text-white font-bold rounded-full text-sm lg:text-base"
                    >
                      Lihat Semua {selectedCategory === 'Semua' ? 'UMKM' : selectedCategory} ({filteredData.length}) →
                    </button>
                  ) : (
                    <button 
                      onClick={handleShowLess}
                      className="px-6 lg:px-8 py-3 bg-gray-500 hover:bg-gray-600 transition-colors text-white font-bold rounded-full text-sm lg:text-base"
                    >
                      ← Tampilkan Lebih Sedikit
                    </button>
                  )}
                </div>
              )}

              {/* No Results */}
              {filteredData.length === 0 && (
                <div className="text-center py-12 lg:py-16">
                  <div className="text-gray-400 mb-4">
                    <svg className="w-12 h-12 lg:w-16 lg:h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0121 12a8 8 0 01-8 8 8 8 0 01-8-8 7.962 7.962 0 014.709-7.291A7.962 7.962 0 0112 3a7.962 7.962 0 017.291 4.709z" />
                    </svg>
                  </div>
                  <h3 className="text-lg lg:text-xl text-gray-600 mb-2">
                    {isSearching ? 'Tidak Ada Hasil Pencarian' : 'Belum Ada UMKM'}
                  </h3>
                  <p className="text-gray-500 text-sm lg:text-base">
                    {isSearching 
                      ? 'Coba gunakan kata kunci lain'
                      : `Kategori ${selectedCategory} belum memiliki UMKM terdaftar.`
                    }
                  </p>
                </div>
              )}
            </div>

            {/* Success Stories Section - Hide if searching */}
            {!isSearching && <SuccessStories />}

            {/* Events Section - Hide if searching */}
            {!isSearching && <EventSection />}

            <div className="h-10 lg:h-20"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
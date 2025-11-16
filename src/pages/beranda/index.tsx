import { useState } from "react";
import CategorySidebar from "@/components/CategorySidebar";
import SearchBar from "@/components/SearchBar";
import UMKMCard from "@/components/UMKMCard";
import SuccessStories from "@/components/SuccessStories";
import EventSection from "@/components/EventSection";
import { umkmData, getUMKMByCategory } from "@/data/UMKMData";
import { useSearch } from "@/contexts/SearchContext"; // Add search context

export default function Beranda() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showAllUMKM, setShowAllUMKM] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  
  const { searchResults, isSearching } = useSearch(); // Get search state

  // Filter data berdasarkan category atau search results
  const getFilteredData = () => {
    // If there are search results, show them instead
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
  };

  return (
    <div className="min-h-screen bg-[#FFF8F3]">
      {/* Sidebar with category filter */}
      <CategorySidebar 
        selectedCategory={selectedCategory}
        onCategorySelect={handleCategorySelect}
      />

      {/* Main Content */}
      <div className="ml-60">
        <SearchBar />

        <div className="px-12 py-6">
          <div className="max-w-8xl mx-auto">
            {/* Hero Section - Hide if searching */}
            {!isSearching && (
              <div className="relative w-full h-[401px] rounded-2xl overflow-hidden mb-12">
                <img
                  src={umkmData[0].image}
                  alt="Hero"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 z-10 bg-linear-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
                <div className="absolute bottom-12 left-6 text-white max-w-3xl z-20">
                  <h1 className="text-4xl font-bold mb-2">{umkmData[0].title}</h1>
                  <p className="text-3xl italic font-medium">
                    "{umkmData[0].description}"
                  </p>
                </div>

                {/* Carousel Indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
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

            {/* UMKM Section with Category Filter or Search Results */}
            <div className="mb-16">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-4xl font-bold text-[#114B5F]">
                    {isSearching 
                      ? `Hasil Pencarian (${filteredData.length})`
                      : selectedCategory === 'Semua' 
                        ? 'UMKM Disekitarmu' 
                        : `UMKM ${selectedCategory}`
                    }
                  </h2>
                  <p className="text-gray-600 mt-2">
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
                    className="px-4 py-2 text-[#FF6B35] border border-[#FF6B35] rounded-full hover:bg-[#FF6B35] hover:text-white transition-colors"
                  >
                    Lihat Semua Kategori
                  </button>
                )}
              </div>

              {/* Grid untuk UMKM cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mb-8 px-4 sm:px-0">
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
                      className="px-8 py-3 bg-[#114B5F] hover:bg-[#0d3a4a] transition-colors text-white font-bold rounded-full"
                    >
                      Lihat Semua {selectedCategory === 'Semua' ? 'UMKM' : selectedCategory} ({filteredData.length}) →
                    </button>
                  ) : (
                    <button 
                      onClick={handleShowLess}
                      className="px-8 py-3 bg-gray-500 hover:bg-gray-600 transition-colors text-white font-bold rounded-full"
                    >
                      ← Tampilkan Lebih Sedikit
                    </button>
                  )}
                </div>
              )}

              {/* No Results */}
              {filteredData.length === 0 && (
                <div className="text-center py-16">
                  <div className="text-gray-400 mb-4">
                    <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0121 12a8 8 0 01-8 8 8 8 0 01-8-8 7.962 7.962 0 014.709-7.291A7.962 7.962 0 0112 3a7.962 7.962 0 017.291 4.709z" />
                    </svg>
                  </div>
                  <h3 className="text-xl text-gray-600 mb-2">
                    {isSearching ? 'Tidak Ada Hasil Pencarian' : 'Belum Ada UMKM'}
                  </h3>
                  <p className="text-gray-500">
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

            <div className="h-20"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
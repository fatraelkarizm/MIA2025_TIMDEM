import { Search, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import { useSearch } from '@/contexts/SearchContext';

export default function SearchBar() {
  const navigate = useNavigate();
  const { searchQuery, setSearchQuery, searchResults, isSearching, clearSearch } = useSearch();
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef<HTMLDivElement | null>(null);

  // Handle search input
  const handleInputChange = (e: any) => {
    const query = e.target.value;
    setSearchQuery(query);
    setShowResults(query.trim() !== '');
  };

  // Handle search submit
  const handleSearchSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setShowResults(false);
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  // Handle clicking on search result
  const handleResultClick = () => {
    setShowResults(false);
    clearSearch();
  };

  // Close results when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node | null;
      if (searchRef.current && target && !searchRef.current.contains(target)) {
        setShowResults(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-[#FFF8F3] border-b-0 shadow-none h-16 flex items-center px-12 py-6">
      <div className="flex items-center justify-between w-full max-w-8xl mx-auto">
        {/* Search Bar - Wider, closer to nav */}
        <div className="w-[640px] relative" ref={searchRef}>
          <form onSubmit={handleSearchSubmit}>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 z-10" />
              <input
                type="text"
                placeholder="Cari nama UMKM atau produk"
                value={searchQuery}
                onChange={handleInputChange}
                onFocus={() => searchQuery && setShowResults(true)}
                className="w-full bg-white/80 border border-gray-300/60 rounded-full pl-12 pr-12 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B35]/30 focus:bg-white transition-colors placeholder-gray-500"
              />
              
              {/* Clear button */}
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => {
                    clearSearch();
                    setShowResults(false);
                  }}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 z-10"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </form>

          {/* Search Results Dropdown */}
          {showResults && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl border border-gray-200 z-50 max-h-96 overflow-y-auto">
              {isSearching && searchResults.length > 0 ? (
                <>
                  <div className="p-4 border-b border-gray-100">
                    <p className="text-sm text-gray-500">
                      Ditemukan {searchResults.length} hasil untuk "{searchQuery}"
                    </p>
                  </div>
                  <div className="py-2">
                    {searchResults.map((umkm) => (
                      <button
                        key={umkm.id}
                        onClick={() => handleResultClick()}
                        className="w-full px-4 py-3 hover:bg-gray-50 transition-colors text-left"
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src={umkm.image}
                            alt={umkm.title}
                            className="w-12 h-12 rounded-lg object-cover"
                          
                          />
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <h4 className="font-semibold text-[#114B5F] truncate">
                                {umkm.title}
                              </h4>
                              <span className="bg-[#FF6B35] text-white px-2 py-0.5 rounded-full text-xs">
                                {umkm.category}
                              </span>
                            </div>
                            <p className="text-sm text-gray-600 line-clamp-1">
                              {umkm.description}
                            </p>
                            <p className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                              </svg>
                              {umkm.location}
                            </p>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                  
                  {/* Show all results button */}
                  <div className="p-4 border-t border-gray-100">
                    <button
                      onClick={() => {
                        setShowResults(false);
                        navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
                      }}
                      className="w-full bg-[#FF6B35] text-white py-2 px-4 rounded-full hover:bg-[#ff8555] transition-colors text-sm font-semibold"
                    >
                      Lihat Semua Hasil ({searchResults.length})
                    </button>
                  </div>
                </>
              ) : searchQuery && searchResults.length === 0 ? (
                <div className="p-8 text-center">
                  <div className="text-gray-400 mb-3">
                    <Search className="w-12 h-12 mx-auto" />
                  </div>
                  <h4 className="font-semibold text-gray-600 mb-2">Tidak Ada Hasil</h4>
                  <p className="text-sm text-gray-500">
                    Tidak ditemukan UMKM untuk "{searchQuery}"
                  </p>
                </div>
              ) : null}
            </div>
          )}
        </div>

        {/* Navigation Links - Tighter spacing */}
        <div className="flex items-center gap-6 ml-6 text-2xl ">
          <Link to="/beranda" className="text-[#FF6B35] font-medium hover:underline text-xl">
            Beranda
          </Link>
          <Link to="/peta" className="text-[#114B5F] font-medium text-xl hover:text-gray-900">
            Peta
          </Link>
          <Link to="/explore" className="text-[#114B5F] font-medium text-xl hover:text-gray-900">
            Jelajahi
          </Link>
          <Link to="/events" className="text-[#114B5F] font-medium text-xl hover:text-[#114B5F]/80">
            Event
          </Link>
        </div>
      </div>
    </nav>
  );
}
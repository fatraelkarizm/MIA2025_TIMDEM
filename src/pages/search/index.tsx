import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { searchUMKM, getAllCategories, umkmData } from '@/data/UMKMData';
import UMKMCard from '@/components/UMKMCard';
import SearchBar from '@/components/SearchBar';

export default function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  // derive UMKM type from sample dataset
  type UMKM = typeof umkmData[number];
  const [results, setResults] = useState<UMKM[]>([]);
  const [filteredResults, setFilteredResults] = useState<UMKM[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [loading, setLoading] = useState(true);

  const categories = ['Semua', ...getAllCategories()];

  useEffect(() => {
    if (query) {
      setLoading(true);
      const searchResults = searchUMKM(query);
      setResults(searchResults);
      setFilteredResults(searchResults);
      setLoading(false);
    }
  }, [query]);

  useEffect(() => {
    if (selectedCategory === 'Semua') {
      setFilteredResults(results);
    } else {
      setFilteredResults(results.filter(umkm => umkm.category === selectedCategory));
    }
  }, [selectedCategory, results]);

  return (
    <div className="min-h-screen bg-[#FFF8F3]">
      {/* Search Bar */}
      <SearchBar />
      
      <div className="max-w-7xl mx-auto px-8 py-8">
        {/* Search Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#114B5F] mb-2">
            Hasil Pencarian
          </h1>
          {query && (
            <p className="text-gray-600">
              Menampilkan {filteredResults.length} hasil untuk "<span className="font-semibold">{query}</span>"
            </p>
          )}
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-16">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#FF6B35] mx-auto mb-4"></div>
              <p className="text-gray-600">Mencari UMKM...</p>
            </div>
          </div>
        ) : (
          <>
            {/* Category Filter */}
            {results.length > 0 && (
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-[#114B5F] mb-4">Filter Kategori</h3>
                <div className="flex flex-wrap gap-3">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-full font-medium transition-all ${
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

            {/* Search Results */}
            {filteredResults.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredResults.map((umkm) => (
                  <UMKMCard key={umkm.id} {...umkm} />
                ))}
              </div>
            ) : query ? (
              <div className="text-center py-16">
                <div className="text-gray-400 mb-4">
                  <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-xl text-gray-600 mb-2">Tidak Ada Hasil</h3>
                <p className="text-gray-500 mb-4">
                  Tidak ditemukan UMKM untuk pencarian "{query}"
                  {selectedCategory !== 'Semua' && ` dalam kategori ${selectedCategory}`}
                </p>
                <div className="space-y-2 text-sm text-gray-500">
                  <p>Coba:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Periksa ejaan kata kunci</li>
                    <li>Gunakan kata kunci yang lebih umum</li>
                    <li>Cari berdasarkan kategori atau lokasi</li>
                  </ul>
                </div>
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="text-gray-400 mb-4">
                  <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-xl text-gray-600 mb-2">Mulai Pencarian</h3>
                <p className="text-gray-500">
                  Gunakan kolom pencarian di atas untuk mencari UMKM
                </p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
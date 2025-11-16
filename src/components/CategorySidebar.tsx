import { Link } from 'react-router-dom';
import { getAllCategories } from '@/data/UMKMData';

interface CategorySidebarProps {
  selectedCategory?: string;
  onCategorySelect?: (category: string) => void;
}

export default function CategorySidebar({ selectedCategory = 'Semua', onCategorySelect }: CategorySidebarProps) {
  // Get categories from real UMKM data
  const realCategories = getAllCategories();
  
  const categories = [
    { name: 'Semua', active: selectedCategory === 'Semua' },
    ...realCategories.map(cat => ({
      name: cat,
      active: selectedCategory === cat
    }))
  ];

  // Get 3 UMKM stories from real data
  const stories = [
    {
      title: 'Sekala: Pisang Goreng Premium...',
      description: 'Dimulai dari ide sederhana, kini Sekala menjadi favorit mahasiswa Telkom dengan cita rasa premium...',
      id: 1
    },
    {
      title: 'Mie Baek Ekspress: Inovasi Kuliner...',
      description: 'Hasbi Arbi Nugroho berhasil menciptakan konsep mie cepat saji dengan cita rasa lokal yang unik...',
      id: 8
    },
    {
      title: 'Groomify: Seni dalam Potongan...',
      description: 'Di Groomify, tukang cukur bukan sekedar profesi tapi seni dan panggilan hati untuk melayani...',
      id: 9
    },
  ];

  const handleCategoryClick = (categoryName: string) => {
    if (onCategorySelect) {
      onCategorySelect(categoryName);
    }
  };

  return (
    <aside className="fixed left-0 top-0 w-60 h-screen bg-[#FFF8F3] border-r border-gray-200 shadow-sm overflow-y-auto pt-6 px-4 pb-8 z-10">
      {/* Logo */}
      <div className="mb-8 text-center">
        <Link to="/" className="text-2xl font-bold italic">
          <span className="text-[#114B5F]">rasa</span>
          <span className="text-[#FF6B35]">Lokal</span>
        </Link>
      </div>

      {/* Categories */}
      <div className="mb-8">
        <h2 className="text-sm font-normal text-center mb-4 text-gray-600">KATEGORI CEPAT</h2>
        <div className="flex flex-col gap-1">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => handleCategoryClick(category.name)}
              className={`px-4 py-2.5 rounded-xl text-sm font-medium text-left transition-all ${
                category.active
                  ? 'bg-[#FF6B35]/10 text-[#FF6B35] border-l-3 border-[#FF6B35]'
                  : 'text-gray-700 hover:bg-gray-50 border-b border-gray-200/50'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Stories - 3 UMKM stories */}
      <div>
        <h2 className="text-sm font-normal text-center mb-4 text-gray-600">KISAH UMKM</h2>
        <div className="flex flex-col gap-3">
          {stories.map((story, index) => (
            <Link
              key={index}
              to={`/beranda`}
              className="p-3 rounded-xl border border-gray-200 bg-white/80 shadow-sm hover:shadow-md transition-shadow cursor-pointer block"
            >
              <div className="flex items-start gap-2 mb-2">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="shrink-0 mt-0.5"
                >
                  <path
                    d="M4.7998 19.1999V4.7999C4.7998 4.16338 5.05266 3.55293 5.50275 3.10285C5.95284 2.65276 6.56328 2.3999 7.1998 2.3999H16.7998C17.4363 2.3999 18.0468 2.65276 18.4969 3.10285C18.9469 3.55293 19.1998 4.16338 19.1998 4.7999V17.9999C19.1998 18.3182 19.0734 18.6234 18.8483 18.8484C18.6233 19.0735 18.3181 19.1999 17.9998 19.1999H5.9998C5.9998 19.5182 6.12623 19.8234 6.35128 20.0484C6.57632 20.2735 6.88154 20.3999 7.1998 20.3999H18.5998C18.7589 20.3999 18.9115 20.4631 19.0241 20.5756C19.1366 20.6882 19.1998 20.8408 19.1998 20.9999C19.1998 21.159 19.1366 21.3116 19.0241 21.4242C18.9115 21.5367 18.7589 21.5999 18.5998 21.5999H7.1998C6.56328 21.5999 5.95284 21.347 5.50275 20.897C5.05266 20.4469 4.7998 19.8364 4.7998 19.1999ZM17.9998 4.7999C17.9998 4.48164 17.8734 4.17642 17.6483 3.95137C17.4233 3.72633 17.1181 3.5999 16.7998 3.5999H7.1998C6.88154 3.5999 6.57632 3.72633 6.35128 3.95137C6.12623 4.17642 5.9998 4.48164 5.9998 4.7999V17.9999H17.9998V4.7999ZM12.5446 6.3479C12.4964 6.24416 12.4196 6.15635 12.3232 6.09481C12.2268 6.03327 12.1148 6.00058 12.0004 6.00058C11.886 6.00058 11.774 6.03327 11.6776 6.09481C11.5812 6.15635 11.5044 6.24416 11.4562 6.3479L10.4698 8.4719L8.1454 8.7527C8.03178 8.76644 7.92446 8.81238 7.83609 8.88511C7.74772 8.95785 7.682 9.05434 7.64668 9.1632C7.61136 9.27206 7.60792 9.38876 7.63675 9.49952C7.66558 9.61028 7.72549 9.71048 7.8094 9.7883L9.5242 11.3819L9.0718 13.6799C9.04979 13.7922 9.06033 13.9084 9.10219 14.0149C9.14404 14.1213 9.21547 14.2136 9.30804 14.2809C9.40062 14.3481 9.51048 14.3874 9.62468 14.3943C9.73888 14.4011 9.85266 14.3752 9.9526 14.3195L11.9998 13.1819L14.047 14.3195C14.1469 14.3748 14.2605 14.4005 14.3745 14.3935C14.4885 14.3865 14.5982 14.347 14.6905 14.2799C14.7829 14.2127 14.8542 14.1206 14.896 14.0143C14.9378 13.908 14.9484 13.792 14.9266 13.6799L14.4766 11.3819L16.1926 9.7883C16.2766 9.7104 16.3365 9.6101 16.3652 9.49925C16.394 9.3884 16.3905 9.27163 16.355 9.16273C16.3195 9.05383 16.2537 8.95736 16.1651 8.88512C16.0765 8.81288 15.9689 8.76711 15.857 8.7539L13.5326 8.4719L12.5446 6.3479Z"
                    fill="#FF6B35"
                    fillOpacity="0.79"
                  />
                </svg>
              </div>
              <h3 className="text-[#114B5F] text-sm font-semibold mb-2 leading-tight">
                {story.title}
              </h3>
              <p className="text-gray-600 text-xs font-light leading-relaxed">
                {story.description}
              </p>
            </Link>
          ))}
        </div>
        <Link
          to="/stories"
          className="block text-center text-[#FF6B35] text-xs font-semibold mt-4 hover:underline"
        >
          Baca Semua Cerita {'>'}
        </Link>
      </div>
    </aside>
  );
}
import { useState } from "react";
import { useUMKM } from "../contexts/UMKMContext";
import ShareModal from "./ShareModal";

interface UMKMCardProps {
  id?: number;
  title: string;
  description: string;
  location: string;
  image: string;
  category: string;
}

export default function UMKMCard({ id, title, description, location, image, category, }: UMKMCardProps) {
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  
  // Debug: Check if context is available
  const context = useUMKM();
  
  const { openDetailCard } = context;
  
  const umkmData = {
    id,
    title,
    description,
    location,
    image,
    category
  };

  // Handle click pada card
  const handleCardClick = () => {
    openDetailCard(umkmData);
  };

  // Handle button dukung - juga ke detail page
  const handleDukungClick = (e: React.MouseEvent) => {
    e.stopPropagation(); 
    openDetailCard(umkmData);
  };

  // Handle button sebarkan - open modal
  const handleSebarkanClick = (e: React.MouseEvent) => {
    e.stopPropagation(); 
    setIsShareModalOpen(true);
  };

  const handleCloseShareModal = () => {
    setIsShareModalOpen(false);
  };

  return (
    <>
      <div 
        className="relative w-full max-w-[320px] sm:max-w-none h-auto sm:h-[440px] rounded-2xl overflow-hidden bg-white shadow-sm group cursor-pointer hover:shadow-lg transition-shadow mx-auto"
        onClick={handleCardClick}
        style={{ pointerEvents: 'auto' }} // Ensure clickable
      >
        {/* Image Container */}
        <div className="relative h-40 sm:h-44 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
          
          {/* Category Badge */}
          <div className="absolute top-2 right-2 sm:top-3 sm:right-3">
            <div className="px-2.5 py-1 sm:px-3 sm:py-1.5 bg-[#FF6B35] rounded-full">
              <span className="text-white text-xs font-bold">{category}</span>
            </div>
          </div>
        </div>
        
        {/* Content Section */}
        <div className="p-3 sm:p-4 bg-white h-auto sm:h-60 flex flex-col justify-between">
          {/* Text Content */}
          <div className="flex-1">
            <h3 className="text-[#114B5F] text-base sm:text-lg font-bold mb-1.5 sm:mb-2 line-clamp-2 sm:line-clamp-1">{title}</h3>
            <p className="text-gray-600 text-xs sm:text-sm mb-2 sm:mb-3 line-clamp-2 leading-relaxed">{description}</p>
            
            {/* Location */}
            <div className="flex items-center gap-1 sm:gap-1.5 mb-3 sm:mb-4">
              <svg
                width="10"
                height="12"
                className="sm:w-3 sm:h-3.5"
                viewBox="0 0 11 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.5 3C5.00555 3 4.5222 3.14662 4.11107 3.42133C3.69995 3.69603 3.37952 4.08648 3.1903 4.54329C3.00108 5.00011 2.95157 5.50277 3.04804 5.98773C3.1445 6.47268 3.3826 6.91814 3.73223 7.26777C4.08186 7.6174 4.52732 7.8555 5.01227 7.95196C5.49723 8.04843 5.99989 7.99892 6.45671 7.8097C6.91352 7.62048 7.30397 7.30005 7.57867 6.88893C7.85338 6.4778 8 5.99445 8 5.5C8 4.83696 7.73661 4.20107 7.26777 3.73223C6.79893 3.26339 6.16304 3 5.5 3ZM5.5 7C5.20333 7 4.91332 6.91203 4.66664 6.7472C4.41997 6.58238 4.22771 6.34811 4.11418 6.07403C4.00065 5.79994 3.97094 5.49834 4.02882 5.20736C4.0867 4.91639 4.22956 4.64912 4.43934 4.43934C4.64912 4.22956 4.91639 4.0867 5.20736 4.02882C5.49734 3.97094 5.79994 4.00065 6.07403 4.11418C6.34811 4.22771 6.58238 4.41997 6.7472 4.66664C6.91203 4.91332 7 5.20333 7 5.5C7 5.89782 6.84196 6.27936 6.56066 6.56066C6.27936 6.84196 5.89782 7 5.5 7ZM5.5 0C4.04182 0.00165421 2.64383 0.581648 1.61274 1.61274C0.581648 2.64383 0.00165421 4.04182 0 5.5C0 7.4625 0.906875 9.5425 2.625 11.5156C3.39702 12.4072 4.26591 13.2101 5.21562 13.9094C5.2997 13.9683 5.39985 13.9999 5.5025 13.9999C5.60515 13.9999 5.70531 13.9683 5.78938 13.9094C6.73734 13.2098 7.60455 12.4069 8.375 11.5156C10.0906 9.5425 11 7.4625 11 5.5C10.9983 4.04182 10.4184 2.64383 9.38726 1.61274C8.35617 0.581648 6.95818 0.00165421 5.5 0ZM5.5 12.875C4.46688 12.0625 1 9.07812 1 5.5C1 4.30653 1.47411 3.16193 2.31802 2.31802C3.16193 1.47411 4.30653 1 5.5 1C6.69347 1 7.83807 1.47411 8.68198 2.31802C9.52589 3.16193 10 4.30653 10 5.5C10 9.07687 6.53312 12.0625 5.5 12.875Z"
                  fill="#6B7280"
                />
              </svg>
              <span className="text-gray-500 text-xs">{location}</span>
            </div>
          </div>
          
          {/* Buttons */}
          <div className="space-y-2 sm:space-y-3 mt-auto">
            {/* Primary Button - Ke detail page */}
            <button 
              className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-[#FF6B35] hover:bg-[#ff8555] transition-colors rounded-full text-white text-xs sm:text-sm font-bold"
              onClick={handleDukungClick}
            >
              <span className="hidden sm:inline">Dukung UMKM Ini Sekarang →</span>
              <span className="sm:hidden">Dukung UMKM →</span>
            </button>
            
            {/* Secondary Button - Share modal */}
            <button 
              className="w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-white border border-[#114B5F] hover:bg-gray-50 transition-colors rounded-full text-[#114B5F] text-xs sm:text-sm font-semibold flex items-center justify-center gap-1.5 sm:gap-2"
              onClick={handleSebarkanClick}
            >
              <svg width="14" height="14" className="sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="none">
                <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z" fill="#114B5F"/>
              </svg>
              <span className="hidden sm:inline">Sebarkan UMKM ini</span>
              <span className="sm:hidden">Sebarkan</span>
            </button>
          </div>
        </div>
      </div>

      {/* Share Modal - Local state */}
      <ShareModal 
        umkm={umkmData}
        isOpen={isShareModalOpen}
        onClose={handleCloseShareModal}
      />
    </>
  );
}
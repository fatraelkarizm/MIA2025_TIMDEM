interface MapEmbedProps {
  coordinates?: string;
  location?: string;
  umkmName?: string;
}

export default function MapEmbed({
  coordinates,
  location,
  umkmName,
}: MapEmbedProps) {
  // Handle click - langsung pakai coordinates yang di-pass
  const handleMapClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (coordinates) {
      window.open(coordinates, "_blank", "noopener,noreferrer");
    } else {
      alert("Koordinat tidak tersedia - coba hubungi admin");
    }
  };

  return (
    <div className="relative">
      {/* Map Preview */}
      <div
        onClick={handleMapClick}
        className="bg-linear-to-br from-blue-100 via-green-50 to-blue-50 rounded-2xl h-48 relative flex items-center justify-center overflow-hidden cursor-pointer hover:shadow-lg transition-all group mb-4 border-2 border-gray-200 hover:border-[#FF6B35]"
      >
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-20">
          <svg
            className="w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
              <pattern
                id="map-grid"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 20 0 L 0 0 0 20"
                  fill="none"
                  stroke="#3B82F6"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#map-grid)" />
            <path
              d="M0,20 Q25,10 50,20 T100,20 L100,40 Q75,50 50,40 T0,40 Z"
              fill="#3B82F6"
              opacity="0.3"
            />
            <path
              d="M0,60 Q25,50 50,60 T100,60 L100,80 Q75,90 50,80 T0,80 Z"
              fill="#10B981"
              opacity="0.3"
            />
          </svg>
        </div>

        {/* Location pin and info */}
        <div className="relative z-10 text-center">
          <div className="w-16 h-16 bg-[#FF6B35] rounded-full flex items-center justify-center mb-4 mx-auto shadow-lg group-hover:scale-110 transition-transform">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg max-w-xs">
            <h4 className="font-bold text-[#114B5F] mb-1">{umkmName}</h4>
            <p className="text-sm text-gray-600 mb-2">{location}</p>
            <p className="text-xs text-[#FF6B35] font-semibold">
              {coordinates
                ? "Klik untuk lihat peta"
                : "Koordinat tidak tersedia"}
            </p>
          </div>
        </div>

        {/* Corner indicator */}
        <div className="absolute top-4 right-4">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg px-2 py-1">
            <p className="text-xs font-medium text-[#114B5F]">📍 Google Maps</p>
          </div>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-[#FF6B35] opacity-0 group-hover:opacity-10 transition-opacity"></div>

        {/* Click indicator */}
        <div className="absolute inset-0 bg-red-500 opacity-0 active:opacity-20 transition-opacity"></div>
      </div>

      {/* Action Button */}
      <button
        onClick={handleMapClick}
        disabled={!coordinates}
        className={`w-full font-bold py-3 px-6 rounded-full transition-colors flex items-center justify-center gap-2 ${
          coordinates
            ? "bg-[#FF6B35] hover:bg-[#ff8555] text-white cursor-pointer"
            : "bg-gray-300 text-gray-500 cursor-not-allowed"
        }`}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22S19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9S10.62 6.5 12 6.5S14.5 7.62 14.5 9S13.38 11.5 12 11.5Z"
            fill="currentColor"
          />
        </svg>
        {coordinates ? "Petunjuk Arah" : "Koordinat Tidak Tersedia"}
      </button>
    </div>
  );
}

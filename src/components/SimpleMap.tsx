interface SimpleMapProps {
  latitude?: number;
  longitude?: number;
  location?: string;
  umkmName?: string;
}

export default function SimpleMap({ latitude, longitude, location, umkmName }: SimpleMapProps) {
  const getGoogleMapsUrl = () => {
    if (latitude && longitude) {
      return `https://www.google.com/maps/@${latitude},${longitude},15z`;
    } else {
      const query = encodeURIComponent(umkmName || location || '');
      return `https://www.google.com/maps/search/${query}`;
    }
  };

  const getDirectionsUrl = () => {
    if (latitude && longitude) {
      return `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;
    } else {
      const query = encodeURIComponent(umkmName || location || '');
      return `https://www.google.com/maps/dir/?api=1&destination=${query}`;
    }
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
      {/* Map Placeholder with Action */}
      <div className="bg-linear-to-br from-blue-100 via-green-50 to-blue-50 h-48 relative flex items-center justify-center">
        {/* Map Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,20 Q25,10 50,20 T100,20 L100,40 Q75,50 50,40 T0,40 Z" fill="#3B82F6"/>
            <path d="M0,60 Q25,50 50,60 T100,60 L100,80 Q75,90 50,80 T0,80 Z" fill="#10B981"/>
          </svg>
        </div>
        
        {/* Location Pin */}
        <div className="relative z-10 text-center">
          <div className="w-16 h-16 bg-[#FF6B35] rounded-full flex items-center justify-center mb-3 mx-auto shadow-lg">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <p className="font-semibold text-[#114B5F]">{umkmName}</p>
          <p className="text-sm text-gray-600">{location}</p>
          {latitude && longitude && (
            <p className="text-xs text-gray-500 mt-1">
              {latitude.toFixed(6)}, {longitude.toFixed(6)}
            </p>
          )}
        </div>
      </div>
      
      {/* Action Buttons */}
      <div className="p-4 space-y-3">
        <button 
          onClick={() => window.open(getGoogleMapsUrl(), '_blank')}
          className="w-full bg-gray-100 hover:bg-gray-200 text-[#114B5F] font-semibold py-3 px-6 rounded-full transition-colors flex items-center justify-center gap-2"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
          Lihat di Google Maps
        </button>
        
        <button 
          onClick={() => window.open(getDirectionsUrl(), '_blank')}
          className="w-full bg-[#FF6B35] hover:bg-[#ff8555] text-white font-bold py-3 px-6 rounded-full transition-colors flex items-center justify-center gap-2"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
          </svg>
          Petunjuk Arah
        </button>
      </div>
    </div>
  );
}
import { Link } from 'react-router-dom';
import { getActiveEvents } from '@/data/EventData'; // Fix import path

export default function EventSection() {
  // Get all active events
  const events = getActiveEvents();
  
  // Show only first 4 events for beranda
  const displayedEvents = events.slice(0, 4);

  const formatEventDate = (dateString: string | number | Date) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <div className="mb-16">
      {/* Centered heading */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-[#114B5F] mb-4">
          Event UMKM yang berlangsung
        </h2>
        
        {events.length > 4 && (
          <Link
            to="/events"
            className="inline-block px-6 py-3 text-[#FF6B35] border border-[#FF6B35] rounded-full hover:bg-[#FF6B35] hover:text-white transition-colors font-semibold"
          >
            Lihat Semua Event →
          </Link>
        )}
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {displayedEvents.map((event) => (
          <Link
            key={event.id}
            to={`/events/${event.id}`}
            className="relative rounded-2xl overflow-hidden shadow-lg h-64 group cursor-pointer hover:shadow-xl transition-all duration-300 block"
          >
            {/* Real Event Image */}
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
            
            {/* Fallback gradient (hidden by default) */}
            <div className="w-full h-full bg-linear-to-br from-[#FF6B35] to-[#114B5F] flex items-center justify-center absolute inset-0" style={{display: 'none'}}>
              <div className="text-center text-white">
                <div className="text-2xl font-bold mb-2">{event.category}</div>
                <div className="text-sm opacity-75">Event Category</div>
              </div>
            </div>
            
            {/* Status Badge */}
            <div className="absolute top-4 right-4">
              <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                Aktif
              </span>
            </div>
            
            {/* Price Badge */}
            <div className="absolute top-4 left-4">
              <span className="bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs font-bold">
                {event.price}
              </span>
            </div>
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-[#114B5F]/90 via-[#114B5F]/40 to-transparent"></div>
            
            {/* Event Info */}
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <h3 className="text-lg font-bold mb-2 line-clamp-2">{event.title}</h3>
              
              <p className="text-xs mb-1 opacity-90">
                {formatEventDate(event.date)}
              </p>
              
              <p className="text-xs flex items-center gap-1 mb-3 opacity-90">
                <svg
                  width="10"
                  height="12"
                  viewBox="0 0 11 14"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.5 3C5.00555 3 4.5222 3.14662 4.11107 3.42133C3.69995 3.69603 3.37952 4.08648 3.1903 4.54329C3.00108 5.00011 2.95157 5.50277 3.04804 5.98773C3.1445 6.47268 3.3826 6.91814 3.73223 7.26777C4.08186 7.6174 4.52732 7.8555 5.01227 7.95196C5.49723 8.04843 5.99989 7.99892 6.45671 7.8097C6.91352 7.62048 7.30397 7.30005 7.57867 6.88893C7.85338 6.4778 8 5.99445 8 5.5C8 4.83696 7.73661 4.20107 7.26777 3.73223C6.79893 3.26339 6.16304 3 5.5 3ZM5.5 7C5.20333 7 4.91332 6.91203 4.66664 6.7472C4.41997 6.58238 4.22771 6.34811 4.11418 6.07403C4.00065 5.79994 3.97094 5.49834 4.02882 5.20736C4.0867 4.91639 4.22956 4.64912 4.43934 4.43934C4.64912 4.22956 4.91639 4.0867 5.20736 4.02882C5.49734 3.97094 5.79994 4.00065 6.07403 4.11418C6.34811 4.22771 6.58238 4.41997 6.7472 4.66664C6.91203 4.91332 7 5.20333 7 5.5C7 5.89782 6.84196 6.27936 6.56066 6.56066C6.27936 6.84196 5.89782 7 5.5 7ZM5.5 0C4.04182 0.00165421 2.64383 0.581648 1.61274 1.61274C0.581648 2.64383 0.00165421 4.04182 0 5.5C0 7.4625 0.906875 9.5425 2.625 11.5156C3.39702 12.4072 4.26591 13.2101 5.21562 13.9094C5.2997 13.9683 5.39985 13.9999 5.5025 13.9999C5.60515 13.9999 5.70531 13.9683 5.78938 13.9094C6.73734 13.2098 7.60455 12.4069 8.375 11.5156C10.0906 9.5425 11 7.4625 11 5.5C10.9983 4.04182 10.4184 2.64383 9.38726 1.61274C8.35617 0.581648 6.95818 0.00165421 5.5 0ZM5.5 12.875C4.46688 12.0625 1 9.07812 1 5.5C1 4.30653 1.47411 3.16193 2.31802 2.31802C3.16193 1.47411 4.30653 1 5.5 1C6.69347 1 7.83807 1.47411 8.68198 2.31802C9.52589 3.16193 10 4.30653 10 5.5C10 9.07687 6.53312 12.0625 5.5 12.875Z"
                    fill="white"
                  />
                </svg>
                <span className="truncate">{event.location}</span>
              </p>
              
              {/* Capacity indicator */}
              <div className="mb-3">
                <div className="flex justify-between text-xs opacity-75 mb-1">
                  <span>Peserta</span>
                  <span>{event.registered}/{event.capacity}</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-1">
                  <div 
                    className="bg-white h-1 rounded-full transition-all" 
                    style={{ width: `${Math.min((event.registered / event.capacity) * 100, 100)}%` }}
                  ></div>
                </div>
              </div>
              
              <button className="w-full px-3 py-2 bg-white text-[#114B5F] hover:bg-gray-100 transition-colors rounded-full text-xs font-bold">
                Lihat Detail Event
              </button>
            </div>
          </Link>
        ))}
      </div>
      
      {/* Show message when no events */}
      {displayedEvents.length === 0 && (
        <div className="text-center py-16">
          <div className="text-gray-400 mb-4">
            <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-xl text-gray-600 mb-2">Belum Ada Event Aktif</h3>
          <p className="text-gray-500">Saat ini belum ada event UMKM yang berlangsung.</p>
          <Link
            to="/events"
            className="inline-block mt-4 px-6 py-3 bg-[#FF6B35] text-white rounded-full hover:bg-[#ff8555] transition-colors font-semibold"
          >
            Lihat Semua Event
          </Link>
        </div>
      )}
      
      {/* Show "Lihat Semua" button at bottom when there are more than 4 events */}
      {events.length > 4 && displayedEvents.length > 0 && (
        <div className="text-center mt-8">
          <Link
            to="/events"
            className="px-8 py-3 bg-[#114B5F] hover:bg-[#0d3a4a] transition-colors text-white font-bold rounded-full"
          >
            Lihat Semua Event ({events.length}) →
          </Link>
        </div>
      )}
    </div>
  );
}
import { useState } from "react";
import Navbar from "@/components/Navbar";
import { getActiveEvents, getEventsByCategory, getAllEventCategories } from "@/data/EventData"; // Fix import
import { Link } from "react-router-dom";

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  
  const categories = ["Semua", ...getAllEventCategories()];
  
  const getFilteredEvents = () => {
    if (selectedCategory === "Semua") {
      return getActiveEvents();
    }
    return getEventsByCategory(selectedCategory);
  };

  const filteredEvents = getFilteredEvents();

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
          <div className="text-center text-white">
            <h1 className="text-5xl font-extrabold mb-4 leading-tight">
              Event <span className="text-[#FF6B35]">UMKM</span> Bandung
            </h1>
            <p className="text-xl mb-6 max-w-2xl mx-auto">
              Ikuti berbagai event menarik untuk mengembangkan bisnis UMKM Anda
            </p>
            <div className="inline-flex px-6 py-2.5 bg-[#2E687B] rounded-full">
              <span className="text-white text-sm font-semibold">
                {filteredEvents.length} Event Aktif
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="max-w-7xl mx-auto px-8 -mt-16 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h3 className="text-xl font-bold text-[#114B5F] mb-4">Filter Kategori Event</h3>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  selectedCategory === category
                    ? "bg-[#FF6B35] text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Events Grid */}
        <div className="mb-16">
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow">
                {/* Event Image */}
                <div className="h-48 relative overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Fallback gradient */}
                  <div 
                    className="w-full h-full bg-linear-to-br from-[#FF6B35] to-[#114B5F] flex items-center justify-center absolute inset-0"
                    style={{display: 'none'}}
                  >
                    <div className="text-center text-white">
                      <h3 className="text-xl font-bold mb-2">{event.category}</h3>
                      <p className="text-sm opacity-80">Event Category</p>
                    </div>
                  </div>
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      Aktif
                    </span>
                  </div>
                </div>

                {/* Event Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[#114B5F] mb-2">{event.title}</h3>
                      <p className="text-gray-600 text-sm line-clamp-3">{event.description}</p>
                    </div>
                  </div>

                  {/* Event Details */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>{new Date(event.date).toLocaleDateString('id-ID', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</span>
                    </div>

                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{event.time}</span>
                    </div>

                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>{event.location}</span>
                    </div>

                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                      </svg>
                      <span className="font-semibold text-[#FF6B35]">{event.price}</span>
                    </div>
                  </div>

                  {/* Capacity Info */}
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-600">Kapasitas</span>
                      <span className="text-sm font-semibold">{event.registered}/{event.capacity} peserta</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-[#FF6B35] h-2 rounded-full" 
                        style={{ width: `${(event.registered / event.capacity) * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Link
                      to={`/events/${event.id}`}
                      className="flex-1 bg-[#114B5F] text-white py-3 px-6 rounded-full font-bold text-center hover:bg-[#0d3a4a] transition-colors"
                    >
                      Lihat Detail
                    </Link>
                    <button className="flex-1 bg-[#FF6B35] text-white py-3 px-6 rounded-full font-bold hover:bg-[#ff8555] transition-colors">
                      Daftar Sekarang
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* No Events */}
        {filteredEvents.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3 className="text-xl text-gray-600 mb-2">Belum Ada Event</h3>
            <p className="text-gray-500">Kategori {selectedCategory} belum memiliki event aktif.</p>
          </div>
        )}
      </div>
    </div>
  );
}
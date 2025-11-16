import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import { getEventById } from "@/data/EventData"; // Fix import path

export default function EventDetailPage() {
  const { id } = useParams();
  const [isRegistered, setIsRegistered] = useState(false);
  const event = getEventById(parseInt(String(id)));


  if (!event) {
    return (
      <div className="min-h-screen bg-[#FFF8F3] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-600 mb-4">
            Event Tidak Ditemukan
          </h1>
          <p className="text-gray-500 mb-4">
            Event dengan ID {id} tidak ditemukan
          </p>
          <Link to="/events" className="text-[#FF6B35] hover:underline">
            ← Kembali ke Events
          </Link>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string | number | Date) => {
    return new Date(dateString).toLocaleDateString("id-ID", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const handleRegister = () => {
    setIsRegistered(true);
    // Here you would normally send data to API
    alert(`Pendaftaran berhasil untuk event "${event.title}"!`);
  };

  return (
    <div className="min-h-screen bg-[#FFF8F3]">
      {/* Header */}
      <header className="bg-[#114B5F] h-[90px] flex items-center shadow-lg relative z-10">
        <div className="max-w-7xl mx-auto px-8 w-full">
          <Navbar />
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-8 py-8">
        {/* Back Button */}
        <div className="mb-6">
          <Link
            to="/events"
            className="inline-flex items-center gap-2 text-[#114B5F] hover:text-[#FF6B35] transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Kembali ke Events
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Event Header */}
            <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-[#FF6B35] text-white px-3 py-1 rounded-full text-sm font-bold">
                      {event.category}
                    </span>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold">
                      Aktif
                    </span>
                  </div>

                  <h1 className="text-3xl font-bold text-[#114B5F] mb-4">
                    {event.title}
                  </h1>

                  <p className="text-gray-600 text-lg leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>

              {/* Event Details */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#FF6B35]/10 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-[#FF6B35]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Tanggal</p>
                    <p className="font-semibold text-[#114B5F]">
                      {formatDate(event.date)}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#FF6B35]/10 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-[#FF6B35]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Waktu</p>
                    <p className="font-semibold text-[#114B5F]">{event.time}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#FF6B35]/10 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-[#FF6B35]"
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
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Lokasi</p>
                    <p className="font-semibold text-[#114B5F]">
                      {event.location}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#FF6B35]/10 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-[#FF6B35]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Harga</p>
                    <p className="font-semibold text-[#FF6B35]">
                      {event.price}
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <p className="text-sm text-gray-500 mb-2">
                  Diselenggarakan oleh
                </p>
                <p className="font-semibold text-[#114B5F]">
                  {event.organizer}
                </p>
              </div>
            </div>

            {/* Requirements */}
            <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
              <h2 className="text-2xl font-bold text-[#114B5F] mb-6">
                Syarat Pendaftaran
              </h2>
              <ul className="space-y-3">
                {event.requirements.map((req, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#FF6B35] rounded-full mt-2 shrink-0"></div>
                    <span className="text-gray-700">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-[#114B5F] mb-6">
                Manfaat yang Didapat
              </h2>
              <ul className="space-y-3">
                {event.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-green-500 mt-0.5 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Registration Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm sticky top-8">
              <h3 className="text-xl font-bold text-[#114B5F] mb-4">
                Pendaftaran
              </h3>

              {/* Capacity */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-600">Kapasitas</span>
                  <span className="text-sm font-semibold">
                    {event.registered}/{event.capacity} peserta
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-[#FF6B35] h-2 rounded-full"
                    style={{
                      width: `${(event.registered / event.capacity) * 100}%`,
                    }}
                  ></div>
                </div>
              </div>

              {/* Registration Button */}
              {!isRegistered ? (
                <button
                  onClick={handleRegister}
                  className="w-full bg-[#FF6B35] text-white py-3 px-6 rounded-full font-bold hover:bg-[#ff8555] transition-colors"
                  disabled={event.registered >= event.capacity}
                >
                  {event.registered >= event.capacity
                    ? "Pendaftaran Penuh"
                    : "Daftar Sekarang"}
                </button>
              ) : (
                <div className="text-center">
                  <div className="w-full bg-green-500 text-white py-3 px-6 rounded-full font-bold mb-3">
                    ✓ Terdaftar
                  </div>
                  <p className="text-sm text-gray-600">
                    Anda telah terdaftar untuk event ini
                  </p>
                </div>
              )}

              <p className="text-xs text-gray-500 text-center mt-4">
                Dengan mendaftar, Anda menyetujui syarat dan ketentuan event
              </p>
            </div>

            {/* Contact Info */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-[#114B5F] mb-4">
                Butuh Bantuan?
              </h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-gray-500">Email</p>
                  <p className="font-semibold">info@umkmbandung.com</p>
                </div>
                <div>
                  <p className="text-gray-500">WhatsApp</p>
                  <p className="font-semibold">+62 812-3456-7890</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

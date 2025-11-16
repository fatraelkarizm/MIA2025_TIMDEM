import { useState } from "react";
import MapEmbed from "./MapEmbed";
import { getUMKMById } from "@/data/UMKMData";

interface UMKMData {
  id?: number;
  title: string;
  category: string;
  description: string;
  location: string;
  image: string;
  coordinates?: string;
  story?: string;
  socialMedia?: {
    instagram?: string;
    website?: string;
  };
  schedule?: string;
  contact?: {
    phone?: string;
    email?: string;
    whatsapp?: string;
  };
  yearEstablished?: string;
  isOpen?: boolean;
}

interface DetailCardProps {
  umkm: UMKMData;
  onClose: () => void;
}

export default function DetailCard({ umkm, onClose }: DetailCardProps) {
  const [activeImageIndex] = useState(0);

  if (!umkm.coordinates && umkm.id) {
    const freshData = getUMKMById(umkm.id);
    if (freshData && freshData.coordinates) {
      Object.assign(umkm, freshData);
    }
  }

  const images = [umkm.image].filter(Boolean);

  return (
    <div className="w-full h-screen bg-[#FFF8F3] overflow-y-auto">
      {/* Header - Fixed at top */}
      <header className="bg-[#114B5F] h-[90px] flex items-center shadow-lg sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-8 w-full">
          <div className="flex items-center justify-between">
            {/* Back Button dan Logo */}
            <div className="flex items-center gap-4">
              <button
                onClick={onClose}
                className="flex items-center gap-2 text-white hover:text-[#FF6B35] transition-colors"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.41 7.41L14 6L8 12L14 18L15.41 16.59L10.83 12L15.41 7.41Z"
                    fill="currentColor"
                  />
                </svg>
                <span className="text-sm">Kembali</span>
              </button>
              <h1 className="text-white text-2xl lg:text-[32px] font-bold">
                Direktori UMKM
              </h1>
            </div>

            {/* Navigation */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-10">
              <a
                href="/beranda"
                className="text-white hover:text-[#FF6B35] text-lg font-bold transition-colors"
              >
                Beranda
              </a>
              <a
                href="/peta"
                className="text-white hover:text-[#FF6B35] text-lg font-bold transition-colors"
              >
                Peta
              </a>
              <a
                href="/explore"
                className="text-[#FF6B35] underline text-lg font-bold"
              >
                Jelajahi
              </a>
              <a
                href="/profil"
                className="text-white hover:text-[#FF6B35] text-lg font-bold transition-colors"
              >
                Profil
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Scrollable Content Area */}
      <div className="flex-1">
        <div className="max-w-7xl mx-auto px-8 py-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Section - Images */}
            <div className="lg:col-span-2">
              {/* Main Image */}
              <div className="mb-4">
                <img
                  src={images[activeImageIndex]}
                  alt={umkm.title}
                  className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src =
                      "data:image/svg+xml,%3Csvg width='400' height='400' viewBox='0 0 400 400' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='400' height='400' fill='%23F3F4F6'/%3E%3Cpath d='M180 160C180 171.046 171.046 180 160 180C148.954 180 140 171.046 140 160C140 148.954 148.954 140 160 140C171.046 140 180 148.954 180 160Z' fill='%23D1D5DB'/%3E%3Cpath d='M120 280L160 240L200 280L240 240L320 320H120V280Z' fill='%23D1D5DB'/%3E%3C/svg%3E";
                  }}
                />
              </div>

              {/* UMKM Info */}
              <div className="bg-white rounded-2xl p-6 shadow-sm mb-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="inline-block px-3 py-1 bg-[#FF6B35] text-white text-sm font-bold rounded-full mb-3">
                      {umkm.category}
                    </span>
                    <h1 className="text-3xl font-bold text-[#114B5F] mb-2">
                      {umkm.title}
                    </h1>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6">
                  {umkm.description}
                </p>

                {/* Location Section */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-[#114B5F] mb-4">
                    Lokasi
                  </h3>
                  <div className="flex items-center gap-2 text-gray-600 mb-4">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22S19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9S10.62 6.5 12 6.5S14.5 7.62 14.5 9S13.38 11.5 12 11.5Z"
                        fill="currentColor"
                      />
                    </svg>
                    <span>{umkm.location}</span>
                  </div>

                  {/* Map dengan enhanced debugging */}
                  <MapEmbed
                    coordinates={
                      umkm.coordinates ||
                      "https://maps.app.goo.gl/av2aSHhv83bpMjGn7"
                    } // Temporary hardcode untuk testing
                    location={umkm.location}
                    umkmName={umkm.title}
                  />
                </div>
              </div>
            </div>

            {/* Right Section - Contact & Info */}
            <div className="space-y-6">
              {/* Kisah Inspiratif */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-[#114B5F] mb-4">
                  Kisah Inspiratif
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {umkm.story ||
                    "Dimulai dari dapur rumah sederhana, Ibu Siti mulai memasak untuk tetangga sekitar. Kini, setelah 28 tahun, warung kami telah menjadi favorit warga lokal dan wisatawan. Bu siti sudah menjual 3000 pcs makanannya di seluruh Indonesia..."}
                </p>
              </div>

              {/* Informasi dan Kontak */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-[#114B5F] mb-4">
                  Informasi dan Kontak
                </h3>

                <div className="space-y-4">
                  {/* Social Media */}
                  {umkm.socialMedia?.instagram && (
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Instagram</p>
                      <a
                        href={`https://instagram.com/${umkm.socialMedia.instagram.replace(
                          "@",
                          ""
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#114B5F] font-semibold hover:text-[#FF6B35] transition-colors"
                      >
                        {umkm.socialMedia.instagram}
                      </a>
                    </div>
                  )}

                  {/* Website */}
                  {umkm.socialMedia?.website && (
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Website</p>
                      <a
                        href={umkm.socialMedia.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#114B5F] font-semibold hover:text-[#FF6B35] transition-colors"
                      >
                        {umkm.socialMedia.website}
                      </a>
                    </div>
                  )}

                  {/* WhatsApp */}
                  {umkm.contact?.whatsapp && (
                    <div>
                      <p className="text-sm text-gray-500 mb-1">WhatsApp</p>
                      <a
                        href={`https://wa.me/${umkm.contact.whatsapp.replace(
                          /[^0-9]/g,
                          ""
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#114B5F] font-semibold hover:text-[#FF6B35] transition-colors"
                      >
                        {umkm.contact.whatsapp}
                      </a>
                    </div>
                  )}

                  {/* Jam Buka */}
                  {umkm.schedule && (
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Jam Buka</p>
                      <p className="text-[#114B5F] font-semibold">
                        {umkm.schedule}
                      </p>
                    </div>
                  )}

                  {/* Status */}
                  <div>
                    <p className="text-sm text-gray-500 mb-1">
                      Status Saat Ini
                    </p>
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-3 h-3 rounded-full ${
                          umkm.isOpen ? "bg-green-500" : "bg-red-500"
                        }`}
                      ></div>
                      <span
                        className={`font-semibold ${
                          umkm.isOpen ? "text-green-600" : "text-red-600"
                        }`}
                      >
                        {umkm.isOpen ? "Buka" : "Tutup"}
                      </span>
                    </div>
                  </div>

                  {/* Tahun Berdiri */}
                  {umkm.yearEstablished && (
                    <div>
                      <p className="text-sm text-gray-500 mb-1">
                        Berdiri Sejak
                      </p>
                      <p className="text-[#114B5F] font-semibold">
                        {umkm.yearEstablished}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                {/* Share Button */}
                <button
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: `${umkm.title} - UMKM`,
                        text: umkm.description,
                        url: window.location.href,
                      });
                    } else {
                      navigator.clipboard
                        .writeText(window.location.href)
                        .then(() => {
                          alert("Link berhasil disalin!");
                        });
                    }
                  }}
                  className="w-full bg-white border-2 border-[#114B5F] text-[#114B5F] hover:bg-[#114B5F] hover:text-white font-bold py-3 px-6 rounded-full transition-colors flex items-center justify-center gap-2"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"
                      fill="currentColor"
                    />
                  </svg>
                  Sebarkan UMKM ini
                </button>

                {/* WhatsApp Quick Contact */}
                {umkm.contact?.whatsapp && (
                  <a
                    href={`https://wa.me/${umkm.contact.whatsapp.replace(
                      /[^0-9]/g,
                      ""
                    )}?text=Halo,%20saya%20ingin%20bertanya%20tentang%20${encodeURIComponent(
                      umkm.title
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition-colors flex items-center justify-center gap-2"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.106" />
                    </svg>
                    Chat WhatsApp
                  </a>
                )}
              </div>
            </div>
          </div>

          <div className="h-32"></div>
        </div>
      </div>
    </div>
  );
}

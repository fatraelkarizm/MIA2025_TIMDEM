import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";

const Landing = () => {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;

      // Detect berdasarkan element
      const featuresSection = document.getElementById("features-section");
      const howItWorksSection = document.getElementById("how-it-works-section");
      const ctaSection = document.getElementById("cta-section");

      if (ctaSection) {
        const rect = ctaSection.getBoundingClientRect();
        if (rect.top < windowHeight / 2) {
          setActiveSection("cta");
          return;
        }
      }

      if (howItWorksSection) {
        const rect = howItWorksSection.getBoundingClientRect();
        if (rect.top < windowHeight / 2 && rect.bottom > windowHeight / 2) {
          setActiveSection("how-it-works");
          return;
        }
      }

      if (featuresSection) {
        const rect = featuresSection.getBoundingClientRect();
        if (rect.top < windowHeight / 2 && rect.bottom > windowHeight / 2) {
          setActiveSection("features");
          return;
        }
      }

      setActiveSection("hero");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to section function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Offset untuk navbar yang fixed (90px)
      const offsetTop = element.offsetTop - 90;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-brand-cream">
      {/* Header dengan navbar tetap biru, tapi teks bisa berubah */}
      <header className="fixed top-0 left-0 right-0 h-[90px] bg-[#114B5F] flex items-center transition-all duration-300 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-8 w-full">
          <Navbar activeSection={activeSection} onSectionClick={scrollToSection} />
        </div>
      </header>

      {/* Spacer untuk fixed header */}
      <div className="h-[90px]"></div>

      <section
        id="hero-section"
        className="relative w-full max-w-7xl mx-auto pt-12 lg:pt-24 pb-16 lg:pb-32 overflow-visible"
      >
        <div className="relative z-10 max-w-[667px] px-6 lg:px-0">
          <div className="inline-flex items-center justify-center px-4 py-2 bg-white rounded-full mb-6 lg:mb-8">
            <span className="text-[#114B5F] text-sm font-medium">
              #DukungUMKMLokal
            </span>
          </div>

          <h2 className="text-4xl text-[#114B5F]  md:text-5xl lg:text-[64px] font-extrabold leading-tight mb-4 lg:mb-6">
            Temukan & Dukung <span className="text-primary">UMKM Lokal</span>
          </h2>

          <p className="text-[rgba(0,0,0,0.65)] text-base lg:text-lg mb-8 lg:mb-10 max-w-[590px] font-light">
            Platform terpercaya untuk menemukan bisnis kecil di sekitar Anda.
            Dukung ekonomi lokal, bangun komunitas yang lebih kuat.
          </p>

          <button 
            onClick={() => scrollToSection("features-section")}
            className="bg-primary text-white px-7 lg:px-8 py-3 lg:py-[13px] rounded-full text-base lg:text-lg font-semibold hover:bg-[#e55f2f] transition-colors"
          >
            Jelajahi Sekarang →
          </button>
        </div>

        <div
          className="hidden lg:block absolute top-8 right-0 w-[420px] h-[480px] pointer-events-none"
          aria-hidden
        >
          <div className="relative w-full h-full">
            <div className="hidden lg:block absolute top-8 right-0 w-[600px] h-[500px]">
              <div className="absolute top-0 right-60 w-[289px] bg-white rounded-lg border border-gray-200 shadow-[3px_7px_40px_0_rgba(0,0,0,0.15)] p-6 transform rotate-6">
                <img
                  src="src/assets/react.svg"
                  alt="Laundry business"
                  className="w-full h-40 object-cover rounded mb-6"
                />
                <div className="inline-block bg-primary text-white text-xs font-bold px-4 py-1 rounded-full mb-3">
                  Jasa
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Laundry Joss
                </h3>
                <p className="text-gray-600">
                  Laundry murah mulai 5rb/kg. Gratis antar-jemput!
                </p>
              </div>

              <div className="absolute top-40 right-0 w-[290px] bg-white rounded-lg border border-gray-200 shadow-[3px_7px_40px_0_rgba(0,0,0,0.15)] p-6 transform -rotate-[8deg]">
                <img
                  src="src/assets/react.svg"
                  alt="Laundry business"
                  className="w-full h-40 object-cover rounded mb-6"
                />
                <div className="inline-block bg-blue-100 text-blue-700 text-xs font-medium px-4 py-1 rounded-lg mb-3">
                  Jasa
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Laundry Joss
                </h3>
                <p className="text-gray-600">
                  Laundry murah mulai 5rb/kg. Gratis antar-jemput!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute inset-x-0 -top-6 h-56 -z-10 pointer-events-none">
          <div className="h-full w-full bg-linear-to-b"></div>
        </div>
      </section>

      <section
        id="features-section"
        className="relative bg-white py-16 lg:py-24 overflow-visible"
      >
        <div className="absolute inset-x-0 -top-12 h-64 -z-10 pointer-events-none">
          <div className="h-full w-full bg-linear-to-b-strong"></div>
        </div>

        <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-[147px] relative z-10 ">
          <div className="text-center mb-12 lg:mb-16 ">
            <div className="inline-flex items-center justify-center px-4 py-2 bg-brand-cream rounded-full mb-6 bg-linear-to-br-card">
              <span className="text-primary text-sm font-medium ">
                Fitur Unggulan
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold text-[#114B5F] mb-4">
              Kenapa Memilih Kami?
            </h2>
            <p className="text-gray-900 text-base lg:text-lg max-w-[590px] mx-auto font-light">
              Platform lengkap dengan fitur-fitur canggih untuk menghubungkan
              Anda dengan UMKM lokal
            </p>
          </div>

          {/* Cards tetap sama */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 ">
            <div className="bg-linear-to-br-card relative bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <div className="absolute inset-0 -z-10 bg-linear-to-br-card pointer-events-none"></div>
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center mb-4 shadow-sm">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <h3 className="text-[#114B5F] text-xl font-bold mb-3">
                Cari dengan Mudah
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Temukan UMKM lokal dengan pencarian cerdas dan filter kategori
              </p>
            </div>

            <div className=" bg-linear-to-br-card relative bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <div className="absolute inset-0 -z-10 bg-linear-to-br-card pointer-events-none"></div>
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center mb-4 shadow-sm">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
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
              <h3 className="text-[#114B5F] text-xl font-bold mb-3">
                Peta Interaktif
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Lihat posisi usaha langsung di peta untuk menemukan UMKM
                terdekat.
              </p>
            </div>

            <div className="bg-linear-to-br-card relative bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <div className="absolute inset-0 -z-10  pointer-events-none"></div>
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center mb-4 shadow-sm">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-[#114B5F] text-xl font-bold mb-3">
                Cerita & Inspirasi
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Kenali kisah di balik setiap usaha dan temukan inspirasi dari
                para pelaku UMKM.
              </p>
            </div>

            <div className=" bg-linear-to-br-card relative bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <div className="absolute inset-0 -z-10  pointer-events-none"></div>
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center mb-4 shadow-sm">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-[#114B5F] text-xl font-bold mb-3">
                Dukung Lokal
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Bagikan UMKM favorit ke teman dan bantu ekonomi lokal
                berkembang.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="how-it-works-section"
        className=" relative py-16 lg:py-24 bg-linear-to-b-strong bg-white "
      >
        <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-[147px] bg-linear-to-b-card ">
          <div className="text-center mb-12 lg:mb-16 bg-linear-to-b-card ">
            <div className="inline-flex items-center justify-center px-4 py-2 bg-brand-cream rounded-full mb-6">
              <span className="text-primary text-sm font-medium ">
                Cara Kerja
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold text-[#114B5F] mb-4">
              Mudah & Cepat
            </h2>
            <p className="text-gray-900 text-base lg:text-lg max-w-[590px] mx-auto font-light">
              Hanya 3 langkah untuk mulai mendukung UMKM lokal
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-start">
            <div className="text-center">
              <div className="mx-auto w-[75px] h-[75px] rounded-full flex items-center justify-center mb-6 bg-primary bg-linear-to-r from-[#FF6B35] to-[#114B5F] text-white font-semibold text-2xl">
                01
              </div>
              <h3 className="text-2xl font-bold text-black mb-3">
                Daftar Cepat
              </h3>
              <p className="text-black text-base">
                Buat akun hanya dalam 30 detik
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto w-[75px] h-[75px] rounded-full flex items-center justify-center mb-6 bg-linear-to-r from-[#FF6B35] to-[#114B5F] text-white font-semibold text-2xl">
                02
              </div>
              <h3 className="text-2xl font-bold text-black mb-3">
                Jelajahi UMKM
              </h3>
              <p className="text-black text-base">
                Cari dan temukan bisnis lokal favoritmu
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto w-[75px] h-[75px] rounded-full flex items-center justify-center mb-6 bg-linear-to-r from-[#FF6B35] to-[#114B5F] text-white font-semibold text-2xl">
                03
              </div>
              <h3 className="text-2xl font-bold text-black mb-3">
                Dukung Lokal
              </h3>
              <p className="text-black text-base">
                Hubungi, kunjungi, beri ulasan
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="cta-section"
        className="relative py-20 lg:py-32 overflow-hidden bg-[#114B5F]"
      >
        <div className="absolute inset-0 opacity-20 pointer-events-none"></div>

        <div className="relative z-10 text-center px-6">
          <h2 className="text-3xl md:text-5xl lg:text-[64px] font-bold text-white mb-6 lg:mb-8 drop-shadow-lg">
            Siap Mendukung UMKM Lokal?
          </h2>
          <p className="text-gray-100 text-base lg:text-lg mb-8">
            Langkah kecilmu bisa bantu ekonomi berkembang.
          </p>
          <button className="bg-primary text-white px-6 lg:px-8 py-3 lg:py-4 rounded-lg text-base lg:text-lg font-semibold hover:bg-[#e55f2f] transition-colors shadow-lg">
            Mulai Dukung Sekarang
          </button>
        </div>
      </section>
    </div>
  );
};

export default Landing;
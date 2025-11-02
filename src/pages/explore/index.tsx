import React, { useState } from "react";
import { Search, Filter, MapPin, Home, Map, ShoppingBag, User } from "lucide-react";
import Navbar from "@/components/Navbar";
import Carousel from "@/components/Carousel";
import { ReactLogo } from "@/assets";
import { Link } from "react-router-dom";

const CAROUSEL = [
  {
    image: ReactLogo,
    alt: "React Logo",
    title: "Promosi UMKM Modern",
    desc: "Raih pelanggan baru lewat platform digital, temukan usaha lokal terbaik di seluruh Indonesia."
  },
  {
    image: ReactLogo,
    alt: "React Logo",
    title: "Jelajahi Bisnis Lokal",
    desc: "Dapatkan inspirasi, review jujur, dan info lengkap UMKM terbaik di sekitar Anda."
  },
  {
    image: ReactLogo,
    alt: "React Logo",
    title: "Gabung Komunitas UMKM",
    desc: "Bergabung dengan ribuan pelaku usaha dan pelanggan. Dukung ekonomi kreatif lokal!"
  }
];

const Explore = () => {
  const [search, setSearch] = useState("");
  const [kategori, setKategori] = useState("Semua Kategori");
  const [provinsi, setProvinsi] = useState("Semua Provinsi");

  return (
    <div className="min-h-screen bg-[#FFF8F3] font-['Inter']">
      {/* Navbar */}
      <header className="bg-secondary h-[90px] flex items-center">
        <Navbar />
      </header>

      {/* Carousel FULL WIDTH, boxed, with border & shadow */}
      <section className="max-w-7xl mx-auto px-4 pt-8 pb-0">
        <div className="w-full flex flex-col items-center">
          <div
            className="w-full rounded-[28px] border border-[#222] shadow-md p-3 md:p-5"
            style={{ background: "#FFF8F3" }}
          >
            <div className="rounded-2xl overflow-hidden bg-[#292d32] p-0">
              <Carousel
                baseWidth={1100}
                autoplay={true}
                autoplayDelay={3000}
                pauseOnHover={true}
                loop={true}
                round={false}
                items={CAROUSEL.map((item) => ({
                  ...item,
                  icon: null
                }))}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Search bar BELOW carousel, proporsional desktop & mobile */}
      <section className="w-full flex justify-center z-20 relative">
        <form
          className="
            w-full max-w-7xl bg-white
            rounded-2xl shadow-lg border border-gray-100
            flex flex-col md:flex-row items-stretch md:items-center px-5 sm:px-7 md:px-8 py-4 gap-3 md:gap-4 mt-7
          "
          style={{ fontSize: '1.03rem' }}
        >
          <div className="flex-1 flex items-center gap-2 bg-transparent">
            <Search className="w-6 h-6 text-slate-400" />
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Cari UMKM atau produk"
              className="flex-1 bg-transparent outline-none text-slate-700 text-base placeholder:text-slate-400 py-1"
              style={{ fontSize: '1.05rem' }}
            />
          </div>
          {/* Mobile ONLY: kategori/provinsi */}
          <div className="flex flex-col sm:flex-row gap-2 md:hidden">
            <select
              value={kategori}
              onChange={e => setKategori(e.target.value)}
              className="rounded-full border border-gray-200 px-4 py-2 text-base"
            >
              <option>Semua Kategori</option>
              <option>Kuliner</option>
              <option>Kerajinan</option>
            </select>
            <select
              value={provinsi}
              onChange={e => setProvinsi(e.target.value)}
              className="rounded-full border border-gray-200 px-4 py-2 text-base"
            >
              <option>Semua Provinsi</option>
              <option>DKI Jakarta</option>
              <option>Jawa Barat</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <button
            type="submit"
            className="bg-primary text-white px-7 py-2.5 rounded-full text-base font-semibold hover:opacity-95 transition md:ml-3"
            style={{ fontSize: '1.05rem', minWidth: "90px" }}
          >
            Cari
          </button>
        </form>
      </section>

      {/* Main Content: Sidebar filter + Grid */}
      <main className="max-w-7xl mx-auto px-4 lg:px-8 py-12 flex flex-col lg:flex-row gap-10">
        {/* Sidebar Filter */}
        <aside className="hidden lg:block w-[300px] flex-shrink-0">
          <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-md sticky top-[110px]">
            <h4 className="text-base font-semibold text-brand-teal mb-4">Filter</h4>
            <div className="space-y-5">
              <div>
                <label className="text-xs text-slate-600 block mb-1">Kategori</label>
                <select className="w-full rounded-md border border-gray-200 px-3 py-2 text-base">
                  <option>Semua Kategori</option>
                  <option>Kuliner</option>
                  <option>Kerajinan</option>
                </select>
              </div>
              <div>
                <label className="text-xs text-slate-600 block mb-1">Provinsi</label>
                <select className="w-full rounded-md border border-gray-200 px-3 py-2 text-base">
                  <option>Semua Provinsi</option>
                </select>
              </div>
              <div>
                <label className="text-xs text-slate-600 block mb-1">Rating</label>
                <div className="flex gap-2">
                  <button className="px-3 py-2 rounded-md border border-gray-200 text-base">4+</button>
                  <button className="px-3 py-2 rounded-md border border-gray-200 text-base">3+</button>
                </div>
              </div>
            </div>
          </div>
        </aside>
        {/* Grid Products */}
        <section className="flex-1">
          <CategorySection
            title="Kuliner"
            subtitle="Temukan kuliner terbaik di sekitar anda"
            items={[
              {
                image: "https://api.builder.io/api/v1/image/assets/TEMP/6fee999711d9251a41e1f8b1471699515c5b94c0?width=800",
                category: "Kuliner",
                title: "Warung Nasi Bu Siti",
                description: "Nasi goreng spesial dengan bumbu rahasia dan pilihan topping beragam yang selalu segar setiap hari.",
                location: "Jl. Cihampelas No. 12, Kota Bandung",
              },
              {
                image: "https://api.builder.io/api/v1/image/assets/TEMP/6a8809b6442ca845bd8b2caccde0b15f60e54a61?width=800",
                category: "Kuliner",
                title: "Warung Mie Pak Joko",
                description: "Mie ayam dengan kuah kaldu tulang yang gurih dan pangsit homemade.",
                location: "Jl. Braga No. 5, Kota Bandung",
              },
              {
                image: "https://api.builder.io/api/v1/image/assets/TEMP/6a8809b6442ca845bd8b2caccde0b15f60e54a61?width=800",
                category: "Kuliner",
                title: "Kedai Kopi Lokal",
                description: "Kopi single origin dari petani lokal dengan signature roast.",
                location: "Jl. Asia Afrika No. 7, Kota Bandung",
              },
              {
                image: "https://api.builder.io/api/v1/image/assets/TEMP/375ff899df9e4d0e00b48d69004b3a404b69b13c?width=800",
                category: "Kuliner",
                title: "Sate Ayam Pak Kumis",
                description: "Sate ayam dengan bumbu kacang spesial yang legendaris.",
                location: "Jl. Veteran No. 1, Kota Bandung",
              },
            ]}
          />

          <CategorySection
            title="Kerajinan Tangan"
            subtitle="Temukan kerajinan tangan unik di sekitar"
            items={[
              {
                image: "https://api.builder.io/api/v1/image/assets/TEMP/3f825667aaac016df7dd6b50b0d7d6e636e41f34?width=800",
                category: "Kerajinan Tangan",
                title: "Kerajinan Bambu Jaya",
                description: "Mengolah bambu menjadi karya seni, yang bisa dijadikan sebagai hiasan rumah, kantor.",
                location: "Jl. Sukabumi No. 12, Kota Yogyakarta",
              },
              {
                image: "https://api.builder.io/api/v1/image/assets/TEMP/375ff899df9e4d0e00b48d69004b3a404b69b13c?width=800",
                category: "Kerajinan Tangan",
                title: "Anyaman Lombok",
                description: "Anyaman tradisional Lombok, cocok untuk hadiah dan dekorasi rumah.",
                location: "Jl. Malioboro No. 10, Kota Yogyakarta",
              },
            ]}
          />
        </section>
      </main>

      {/* Bottom nav mobile only */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg lg:hidden">
        <div className="flex items-center justify-around px-7 py-2 max-w-md mx-auto">
          <Link to="/" className="flex flex-col items-center gap-1 py-2">
            <Home className="w-5 h-5 text-slate-500" />
            <span className="text-xs text-slate-500">Beranda</span>
          </Link>
          <button className="flex flex-col items-center gap-1 py-2">
            <Map className="w-6 h-6 text-slate-500" />
            <span className="text-xs text-slate-500">Peta</span>
          </button>
          <button className="flex flex-col items-center gap-1 py-2">
            <ShoppingBag className="w-5 h-5 text-slate-500" />
            <span className="text-xs text-slate-500">Jelajahi</span>
          </button>
          <button className="flex flex-col items-center gap-1 py-2">
            <User className="w-5 h-5 text-slate-500" />
            <span className="text-xs text-slate-500">Profil</span>
          </button>
        </div>
      </nav>
    </div>
  );
};

function CategorySection({ title, subtitle, items }) {
  return (
    <section className="mb-12">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h3 className="text-brand-teal text-xl lg:text-2xl font-extrabold">{title}</h3>
          {subtitle && <p className="text-gray-700 text-sm">{subtitle}</p>}
        </div>
        <button className="px-5 py-2 border border-brand-teal rounded-full text-brand-teal text-sm font-bold hidden lg:inline-flex">Lihat Semua</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((it) => (
          <BusinessCard key={it.title} {...it} />
        ))}
      </div>
    </section>
  );
}

function BusinessCard({ image, category, title, description, location }) {
  return (
    <article className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <div className="relative h-[220px] lg:h-[180px]">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <span className="absolute top-4 left-4 bg-brand-orange text-white text-xs font-bold px-3 py-1 rounded-full">{category}</span>
      </div>
      <div className="p-5 lg:p-4">
        <h4 className="text-brand-teal text-lg font-bold mb-2">{title}</h4>
        <p className="text-gray-600 text-sm leading-relaxed mb-3">{description}</p>
        <div className="flex items-start gap-2 mb-4">
          <MapPin className="w-4 h-4 text-gray-500 mt-1 shrink-0" />
          <span className="text-gray-500 text-sm leading-tight">{location}</span>
        </div>
        <div className="flex gap-3">
          <button className="flex-1 bg-brand-orange text-white text-sm font-semibold py-3 rounded-full hover:bg-[#e55f2f] transition-colors">Dukung UMKM Ini Sekarang →</button>
          <button className="w-12 lg:w-12 h-12 rounded-full border border-brand-teal text-brand-teal hover:bg-brand-teal/10 transition-colors flex items-center justify-center">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" /></svg>
          </button>
        </div>
      </div>
    </article>
  );
}

export default Explore;
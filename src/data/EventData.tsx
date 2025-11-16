export interface EventData {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  image: string;
  category: string;
  organizer: string;
  price: string;
  capacity: number;
  registered: number;
  requirements: string[];
  benefits: string[];
  isActive: boolean;
}

export const eventsData: EventData[] = [
  {
    id: 1,
    title: "Bazar UMKM Bandung 2025",
    description: "Event terbesar untuk UMKM Bandung! Kesempatan emas untuk mempromosikan produk dan networking dengan sesama pelaku usaha.",
    date: "2025-12-15",
    time: "08:00 - 17:00",
    location: "Gedung Sate, Bandung",
    image: "src/assets/event/Bazar-UMKM.webp",
    category: "Pameran",
    organizer: "Dinas Koperasi Kota Bandung",
    price: "Gratis",
    capacity: 200,
    registered: 156,
    requirements: [
      "UMKM terdaftar di Kota Bandung",
      "Memiliki izin usaha yang masih berlaku",
      "Produk memenuhi standar keamanan pangan (untuk kuliner)"
    ],
    benefits: [
      "Stand gratis untuk display produk",
      "Sertifikat partisipasi",
      "Networking dengan pembeli potensial",
      "Media promosi di social media resmi"
    ],
    isActive: true
  },
  {
    id: 2,
    title: "Workshop Digital Marketing untuk UMKM",
    description: "Pelajari strategi digital marketing terkini untuk meningkatkan penjualan online UMKM Anda. Dari social media hingga e-commerce.",
    date: "2025-12-08",
    time: "09:00 - 15:00",
    location: "Telkom University, Bandung",
    image: "src/assets/event/Digital-Marketing.webp",
    category: "Workshop",
    organizer: "Telkom University x Dinas UMKM Jabar",
    price: "Rp 50.000",
    capacity: 100,
    registered: 78,
    requirements: [
      "Memiliki UMKM yang sudah berjalan",
      "Membawa laptop/smartphone",
      "Dasar pengetahuan internet"
    ],
    benefits: [
      "Materi workshop lengkap",
      "Sertifikat digital marketing",
      "Template konten siap pakai",
      "Konsultasi gratis 1 bulan"
    ],
    isActive: true
  },
  {
    id: 3,
    title: "Pelatihan Manajemen Keuangan UMKM",
    description: "Workshop khusus untuk belajar mengelola keuangan UMKM dengan baik. Dari pembukuan sederhana hingga analisis cash flow.",
    date: "2025-12-22",
    time: "13:00 - 17:00",
    location: "Bank BJB Pusat, Bandung",
    image: "src/assets/event/Pelatihan-Keuangan.webp",
    category: "Pelatihan",
    organizer: "Bank BJB x Asosiasi UMKM Jabar",
    price: "Gratis",
    capacity: 80,
    registered: 45,
    requirements: [
      "Pelaku UMKM minimal 1 tahun",
      "Membawa data keuangan usaha",
      "Kalkulator atau smartphone"
    ],
    benefits: [
      "Template pembukuan Excel",
      "Konsultasi keuangan gratis",
      "Kesempatan pengajuan kredit UMKM",
      "Networking dengan banker"
    ],
    isActive: true
  },
  {
    id: 4,
    title: "Festival Kuliner Lokal Bandung",
    description: "Rayakan kekayaan kuliner Bandung! Event ini khusus untuk UMKM kuliner untuk showcase produk terbaik mereka.",
    date: "2025-12-30",
    time: "16:00 - 22:00",
    location: "Alun-Alun Bandung",
    image: "src/assets/event/Festival-Kuliner.webp",
    category: "Festival",
    organizer: "Pemkot Bandung",
    price: "Rp 100.000 (biaya stand)",
    capacity: 50,
    registered: 38,
    requirements: [
      "UMKM kuliner bersertifikat halal",
      "Izin PIRT/BPOM",
      "Packaging menarik dan higienis",
      "Menu signature yang unik"
    ],
    benefits: [
      "Stand dengan fasilitas lengkap",
      "Promosi di media massa",
      "Kesempatan kolaborasi dengan chef terkenal",
      "Doorprize menarik"
    ],
    isActive: true
  }
];

// Helper functions
export const getActiveEvents = () => {
  return eventsData.filter(event => event.isActive);
};

export const getEventById = (id: number) => {
  return eventsData.find(event => event.id === id);
};

export const getEventsByCategory = (category: string) => {
  return eventsData.filter(event => event.category === category && event.isActive);
};

export const getAllEventCategories = () => {
  const categories = [...new Set(eventsData.map(event => event.category))];
  return categories;
};
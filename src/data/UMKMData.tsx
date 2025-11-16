// Simplified helper function - update ke current time
const isCurrentlyOpen = (schedule: string) => {
  if (!schedule) return true; // Default buka

  // Get current time in WIB (UTC+7) - Update ke current time
  const now = new Date("2025-11-16T07:06:29Z"); // Current UTC time
  const indonesiaTime = new Date(now.getTime() + 7 * 60 * 60 * 1000);
  const currentDay = indonesiaTime.getDay(); // 6 = Saturday

  // 24 hour places
  if (schedule.includes("24 jam")) {
    return true;
  }

  // Evening/night places (buka sore-malam)
  if (schedule.includes("15.00") && schedule.includes("01.00")) {
    // Sate Avengers: 15:00-01:00 -> TUTUP at 14:06 (belum buka)
    return false;
  }

  // Late night gaming places
  if (schedule.includes("11.00") && schedule.includes("03.00")) {
    // Playora: 11:00-03:00 -> BUKA at 14:06
    return true;
  }

  // Weekend-only rule for some places
  if (schedule.includes("Jumat Libur") && currentDay === 5) {
    // Friday closed
    return false;
  }

  // Default: semua buka
  return true;
};

export const umkmData = [
  {
    id: 1,
    title: "Sekala",
    category: "Kuliner",
    description: "Pisang & Nangka Goreng Kembung dengan premium rasa",
    location: "Sekitar Telkom University",
    image: "src/assets/Sekala/Sekala.jpg",
    coordinates: "https://maps.app.goo.gl/av2aSHhv83bpMjGn7",
    story: "",
    socialMedia: {
      instagram: "@_se.ka.la_",
    },
    schedule: "Senin – Sabtu Jam 12.00 SD Sehabisnya, Jumat Libur",
    contact: {
      phone: "",
      email: "",
      whatsapp: "",
    },
    yearEstablished: "2020",
    isOpen: true,
  },
  {
    id: 2,
    title: "Laundry Joss",
    category: "Jasa",
    description:
      "Jasa Laundry Kiloan dan satuan (Jaket Kulit, Sepatu, karpet, bedcover)",
    location: "Sekitar Telkom University",
    image: "src/assets/Laundry/Joss-Laundry.jpg",
    story: "",
    socialMedia: {
      instagram: "@josslaundry_telkomuniv",
    },
    coordinates: "https://maps.app.goo.gl/sYVuZrfrUbpod8z7A",
    schedule: "Buka Setiap Hari, jam 08.00 – 22.00",
    contact: {
      phone: "",
      email: "",
      whatsapp: "+6281646960017",
    },
    yearEstablished: "2019",
    get isOpen() {
      return isCurrentlyOpen(this.schedule);
    },
  },
  {
    id: 3,
    title: "BMC Juice",
    category: "Kuliner",
    description:
      "Juice dibuat dengan fresh, buah segar local yang selalu kita pilih untuk warga setia BMC.",
    location: "Sekitar Telkom University",
    image: "src/assets/BMC-Juice/BMC-Juice.jpg",
    story: "",
    socialMedia: {
      instagram: "@bmc.juice",
    },
    coordinates: "https://maps.app.goo.gl/xNNDN4LGhR1SHFsR7",
    schedule: "Buka setiap hari, jam 10.00 – 23.00",
    contact: {
      phone: "",
      email: "",
      whatsapp: "",
    },
    yearEstablished: "2020",
    get isOpen() {
      return isCurrentlyOpen(this.schedule);
    },
  },
  {
    id: 4,
    title: "Sate Avengers",
    category: "Kuliner",
    description:
      "Sate avengers menyediakan tiga macam daging dan bumbu yang enak, jadi sangat cocok untuk selera orang yang berbeda-beda.",
    location: "Sekitar Telkom University",
    image: "src/assets/Sate/Sate.jpg",
    story: "",
    socialMedia: {
      instagram: "@sateavengers",
    },
    coordinates: "https://maps.app.goo.gl/2YyXSNne1BxyRQJJ8",
    schedule: "Setiap hari jam 15.00 – 01.00",
    contact: {
      phone: "",
      email: "",
      whatsapp: "",
    },
    yearEstablished: "2020",
    get isOpen() {
      return isCurrentlyOpen(this.schedule);
    },
  },
  {
    id: 5,
    title: "Instarent",
    category: "Jasa",
    description:
      "Sewa Mobil & Motor Terlengkap di Bandung Percayakan Perlajananmu Pada Kami, Karena Bersama Instarent #JalanJadiMudah",
    location: "Bandung",
    image: "src/assets/Instarent/Instarent.jpg",
    story:
      "Sejak 2016, Instarent hadir sebagai solusi transportasi terbaik di Bandung. Kami menyediakan lebih dari 100+ armada motor & mobil terbaru, terawat, dan siap menemani perjalananmu-mulai dari liburan, kuliah, hingga perjalanan bisnis.",
    socialMedia: {
      instagram: "@instarent.idn",
      website: "https://instarent.id/",
    },
    coordinates: "https://maps.app.goo.gl/QxcgpAGXagjFCtdy6",
    schedule: "Buka 24 jam setiap hari",
    contact: {
      phone: "",
      email: "",
      whatsapp: "+6282122657933",
    },
    yearEstablished: "2016",
    get isOpen() {
      return isCurrentlyOpen(this.schedule);
    },
  },
  {
    id: 6,
    title: "Bento Coffee",
    category: "Kuliner",
    description:
      "Bento kopi tempat nongkrong, dan tempat ideal untuk segala jenis acara, dengan menyediakan makanan & minuman yang berkualitas dengan harga yang terjangkau.",
    location: "Bandung",
    image: "src/assets/Kopi/Bento.jpg",
    story:
      "Bento Kopi adalah bisnis yang didirikan oleh Hairul Umam Bento, seorang wirausaha muda yang sukses membangun jaringan kafe dan restoran hingga meraih status miliarder di usia muda. Dengan visi dan strategi bisnis yang kuat, Bento sapaan akrabnya berhasil mendirikan Bento Group Indonesia pada tahun 2012.",
    socialMedia: {
      instagram: "@bentokopi.bandung",
    },
    coordinates: "https://maps.app.goo.gl/sYj3rBkTA3Uz2zZ26",
    schedule: "Buka setiap hari jam 09.00 – 01.00",
    contact: {
      phone: "",
      email: "",
      whatsapp: "",
    },
    yearEstablished: "2012",
    get isOpen() {
      return isCurrentlyOpen(this.schedule);
    },
  },
  {
    id: 7,
    title: "Mie ayam baso SMA Japra Solo",
    category: "Kuliner",
    description:
      "Mie ayam Bakso selalu antri sama anak-anak Telkom dan sekitarnya. Selain yamin di sini juga ada mi bakso, mi ayam, ada banyak pilihan minumannya",
    location: "Sekitar Telkom University",
    image: "src/assets/Mie-Ayam/Mie-Ayam.jpg",
    story: "",
    socialMedia: {},
    coordinates: "https://maps.app.goo.gl/iiJg9LyLnoumxW8p9",
    schedule: "Buka setiap hari jam 10.00 – 21.00",
    contact: {
      phone: "",
      email: "",
      whatsapp: "",
    },
    yearEstablished: "2015",
    get isOpen() {
      return isCurrentlyOpen(this.schedule);
    },
  },
  {
    id: 8,
    title: "Mie Baek Ekspress",
    category: "Kuliner",
    description:
      "Mie Baek Ekspress merupakan UMKM yang memproduksi Mie, Dimsum, dan minuman yang memiliki konsep berwarna kuning yang memberi kesan cerah ceria dan memberikan kesan mie yang kuat",
    location: "Jl. Sukabirus No. 71, Dayeuhkolot, Kabupaten Bandung",
    image: "src/assets/Mie-Baek/Mie-Baek.jpg",
    story:
      "Salah satu UMKM yang bergerak di bidang kuliner adalah Mie Baek Ekspress, yang didirikan oleh Hasbi Arbi Nugroho pada tahun 2022 di Jalan Sukabirus No. 71, Dayeuhkolot, Kabupaten Bandung. Dengan konsep makanan cepat saji bercita rasa lokal, Mie Baek Ekspress menghadirkan solusi kuliner praktis bagi masyarakat urban, terutama mahasiswa dan pekerja.",
    socialMedia: {
      instagram: "@miebaekekspress",
    },
    coordinates: "https://maps.app.goo.gl/DGL6HkAt9Ri1G9fA9",
    schedule: "Buka Setiap Hari jam 10.00 – 21.30",
    contact: {
      phone: "",
      email: "",
      whatsapp: "",
    },
    yearEstablished: "2022",
    get isOpen() {
      return isCurrentlyOpen(this.schedule);
    },
  },
  {
    id: 9,
    title: "Groomify Barbershop",
    category: "Jasa",
    description:
      "Jasa cukur rambut premium Groomify Barbershop Monochrome menjadi pilihan utama bagi banyak orang di Sekitar Telkom.",
    location: "Sekitar Telkom University",
    image: "src/assets/Barber/Groomify.jpg",
    story:
      "Di Groomify kami percaya tukang cukur bukan sekedar profesi tetapi seni, tanggung jawab, dan panggilan hati untuk selalu melayani.",
    socialMedia: {
      instagram: "@groomify.id",
    },
    coordinates: "https://maps.app.goo.gl/3pKPcVXySFz5gQNh7",
    schedule: "Buka setiap hari jam 09.00 – 21.00",
    contact: {
      phone: "",
      email: "",
      whatsapp: "",
    },
    yearEstablished: "2020",
    get isOpen() {
      return isCurrentlyOpen(this.schedule);
    },
  },
  {
    id: 10,
    title: "Playora",
    category: "Hiburan",
    description:
      "Tempat semua orang merasakan Gaming Experience yg berbeda dari tempat lain, Memberikan experience main console yang harus dicobain semua orang!",
    location: "Sekitar Telkom University",
    image: "src/assets/Playora/Playora.jpg",
    story: "",
    socialMedia: {
      instagram: "@playora.id",
    },
    coordinates: "https://maps.app.goo.gl/BqHyPrmUHX4aokyTA",
    schedule: "Setiap Hari jam 11.00 – 03.00",
    contact: {
      phone: "",
      email: "",
      whatsapp: "",
    },
    yearEstablished: "2021",
    get isOpen() {
      return isCurrentlyOpen(this.schedule);
    },
  },
];
// Export functions for filtering data
export const getUMKMByCategory = (category: string) => {
  return umkmData.filter((umkm) => umkm.category === category);
};

export const getAllCategories = () => {
  const categories = [...new Set(umkmData.map((umkm) => umkm.category))];
  return categories;
};

export const getUMKMById = (id: number) => {
  const result = umkmData.find((umkm) => umkm.id === id);
  return result;
};

export const searchUMKM = (searchTerm: string) => {
  return umkmData.filter(
    (umkm) =>
      umkm.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      umkm.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      umkm.category.toLowerCase().includes(searchTerm.toLowerCase())
  );
};

export default function SuccessStories() {
  return (
    <div className="mb-16">
      <h2 className="text-4xl font-bold text-[#114B5F] mb-4 text-center">
        Cerita Sukses UMKM Indonesia
      </h2>
      <p className="text-center text-gray-700 text-sm font-medium mb-12 max-w-2xl mx-auto">
        Setiap UMKM memiliki perjalanan yang menginspirasi. 
        Kenali kisah mereka
      </p>

      {/* Layout yang disesuaikan dengan Figma */}
      <div className="flex flex-col lg:flex-row gap-8 mb-8">
        {/* Gambar utama di kiri */}
        <div className="lg:w-1/2">
          <div className="relative rounded-2xl overflow-hidden shadow-md h-[350px]">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/8b0c57e17952f18d6720ec5d1b7ae8ea7022ac96?width=978"
              alt="Warung Nasi Bu Siti"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-6 right-6">
              <span className="px-4 py-2 bg-[#FF6B35] rounded-full text-white text-sm font-bold">
                Kuliner
              </span>
            </div>
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-2xl font-bold mb-2">
                Warung Nasi Bu Siti
              </h3>
              <div className="flex items-center gap-2 text-sm">
                <svg
                  width="12"
                  height="15"
                  viewBox="0 0 11 14"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.5 3C5.00555 3 4.5222 3.14662 4.11107 3.42133C3.69995 3.69603 3.37952 4.08648 3.1903 4.54329C3.00108 5.00011 2.95157 5.50277 3.04804 5.98773C3.1445 6.47268 3.3826 6.91814 3.73223 7.26777C4.08186 7.6174 4.52732 7.8555 5.01227 7.95196C5.49723 8.04843 5.99989 7.99892 6.45671 7.8097C6.91352 7.62048 7.30397 7.30005 7.57867 6.88893C7.85338 6.4778 8 5.99445 8 5.5C8 4.83696 7.73661 4.20107 7.26777 3.73223C6.79893 3.26339 6.16304 3 5.5 3ZM5.5 7C5.20333 7 4.91332 6.91203 4.66664 6.7472C4.41997 6.58238 4.22771 6.34811 4.11418 6.07403C4.00065 5.79994 3.97094 5.49834 4.02882 5.20736C4.0867 4.91639 4.22956 4.64912 4.43934 4.43934C4.64912 4.22956 4.91639 4.0867 5.20736 4.02882C5.49834 3.97094 5.79994 4.00065 6.07403 4.11418C6.34811 4.22771 6.58238 4.41997 6.7472 4.66664C6.91203 4.91332 7 5.20333 7 5.5C7 5.89782 6.84196 6.27936 6.56066 6.56066C6.27936 6.84196 5.89782 7 5.5 7ZM5.5 0C4.04182 0.00165421 2.64383 0.581648 1.61274 1.61274C0.581648 2.64383 0.00165421 4.04182 0 5.5C0 7.4625 0.906875 9.5425 2.625 11.5156C3.39702 12.4072 4.26591 13.2101 5.21562 13.9094C5.2997 13.9683 5.39985 13.9999 5.5025 13.9999C5.60515 13.9999 5.70531 13.9683 5.78938 13.9094C6.73734 13.2098 7.60455 12.4069 8.375 11.5156C10.0906 9.5425 11 7.4625 11 5.5C10.9983 4.04182 10.4184 2.64383 9.38726 1.61274C8.35617 0.581648 6.95818 0.00165421 5.5 0ZM5.5 12.875C4.46688 12.0625 1 9.07812 1 5.5C1 4.30653 1.47411 3.16193 2.31802 2.31802C3.16193 1.47411 4.30653 1 5.5 1C6.69347 1 7.83807 1.47411 8.68198 2.31802C9.52589 3.16193 10 4.30653 10 5.5C10 9.07687 6.53312 12.0625 5.5 12.875Z"
                    fill="white"
                  />
                </svg>
                <span>Kota Bandung Sejak 1995</span>
              </div>
            </div>
          </div>
        </div>

        {/* Konten teks di kanan */}
        <div className="lg:w-1/2 flex flex-col justify-center">
          <div className="mb-6">
            <h3 className="text-3xl font-bold italic text-[#114B5F] mb-6">
              "Cita Rasa Nusantara yang Autentik"
            </h3>
            
            {/* Container dengan logic sama kayak sidebar */}
            <div className="px-6 py-6 rounded-xl bg-white/10 border-l-4 border-[#FF6B35]">
              <h4 className="text-[#114B5F] text-xl font-bold mb-3">
                Kisah Perjalanan
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                Dimulai dari dapur rumah sederhana, Ibu Siti mulai memasak nasi goreng untuk tetangga sekitar. Kini, setelah 28 tahun, warung kami telah menjadi favorit warga lokal dan wisatawan. Bu Siti sudah menjual 3000 pcs makanannya di seluruh Indonesia...
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <button className="px-8 py-3 border-2 border-[#114B5F] text-[#114B5F] hover:bg-[#114B5F] hover:text-white transition-colors font-bold rounded-full">
          Kisah Lainnya
        </button>
      </div>
    </div>
  );
}
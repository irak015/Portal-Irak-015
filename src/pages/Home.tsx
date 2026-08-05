import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useRef } from 'react';

const HomeGallerySlider = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const images = [
    { src: 'https://images.unsplash.com/photo-1576669947938-164b4c735d64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', title: 'Latihan Upacara' },
    { src: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', title: 'Sosialisasi kenakalan remaja' },
    { src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', title: 'Rapat perdana' },
    { src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', title: 'Pembentukan pengurus' },
  ];

  return (
    <div className="relative group mb-8">
      <div 
        ref={sliderRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 [&::-webkit-scrollbar]:hidden"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {images.map((img, idx) => (
          <div key={idx} className="snap-start shrink-0 w-full sm:w-[calc(50%-12px)] md:w-[calc(25%-18px)]">
             <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow p-3 pb-0 text-center h-full">
                <img src={img.src} alt={img.title} className="w-full h-48 object-cover rounded-xl mb-3" />
                <h3 className="font-bold text-sm text-gray-900 pb-3">{img.title}</h3>
             </div>
          </div>
        ))}
      </div>
      
      <button 
        onClick={() => scroll('left')}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white/90 p-2.5 rounded-full shadow-lg text-gray-800 hover:text-[#053b93] opacity-0 group-hover:opacity-100 transition-all hidden md:flex items-center justify-center z-10 border border-gray-100"
      >
        <ChevronLeft size={24} />
      </button>
      
      <button 
        onClick={() => scroll('right')}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white/90 p-2.5 rounded-full shadow-lg text-gray-800 hover:text-[#053b93] opacity-0 group-hover:opacity-100 transition-all hidden md:flex items-center justify-center z-10 border border-gray-100"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#00b4db] to-[#0083b0] text-white py-16 md:py-24 relative overflow-hidden h-[600px]">
        <div className="absolute inset-0 bg-[#053b93]/40 h-[600px]"></div> {/* Darken overlay to match screenshot */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2">
              <span className="inline-block bg-[#053b93] text-white text-sm px-4 py-1.5 rounded-md mb-6 shadow-sm">
                Selamat Datang
              </span>
              <h1 className="text-5xl md:text-6xl font-black mb-2 tracking-tight text-[#0a1930] drop-shadow-sm">IRAK 015</h1>
              <h2 className="font-display font-bold text-4xl md:text-5xl text-white drop-shadow-md mb-6 tracking-wide" style={{ WebkitTextStroke: '1px #053b93' }}>
                Ikatan Remaja Aktif 015
              </h2>
              <p className="text-gray-100 text-base mb-8 max-w-xl font-light">
                Wadah pengembangan generasi muda RW. 015 Pesona Gading Cibitung, Desa Wanajaya Kecamatan Cibitung, Kabupaten Bekasi, yang tumbuh dan berkembang atas dasar kesadaran dan tanggung jawab sosial dari, oleh, dan untuk masyarakat.
              </p>
              <Link to="/tentang-kami" className="inline-flex items-center justify-center bg-[#053b93] hover:bg-blue-800 text-white font-medium rounded-md transition-colors shadow-md text-[12px] h-[36px] w-[180px]">
                Selengkapnya <span className="ml-2">&gt;</span>
              </Link>
            </div>
            <div className="md:w-1/2 flex justify-center md:justify-end">
              <div className="relative">
                {/* Decorative background shape */}
                <div className="absolute -inset-2 bg-white rounded-3xl opacity-20 blur-sm"></div>
                <img 
                  src="https://drive.google.com/thumbnail?id=1n-QVXh44JrSbammiNS4qg9TkW1Okp4wo&sz=w1000" 
                  alt="Remaja bersatu" 
                  className="relative w-full max-w-md rounded-3xl border-4 border-white shadow-2xl object-cover h-[400px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tentang Kami Section */}
      <section className="py-[24px] bg-[#fcfbf9]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="mb-8 inline-block relative">
            <h2 className="font-display text-[#053b93] text-[32px] leading-[40px]">Tentang Kami</h2>
            {/* Custom underline */}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3/4 h-1.5 bg-red-500 rounded-full"></div>
          </div>
          <p className="text-gray-700 text-[16px] mt-0 leading-[24px]">
            IRAK 015 (Ikatan Remaja Aktif RW 015) adalah organisasi kepemudaan 
            tingkat RW. 015 yang berfokus pada pemberdayaan pemuda, kegiatan sosial, 
            dan menjaga kerukunan warga terutama generasi muda.
          </p>
        </div>
      </section>

      {/* Kegiatan Section */}
      <section className="py-20 bg-[#f3ebfa]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 inline-block w-full">
             <div className="inline-block relative">
                <h2 className="font-display text-4xl md:text-5xl text-[#053b93]">Kegiatan</h2>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3/4 h-1.5 bg-red-500 rounded-full"></div>
             </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-64 w-full p-4 pb-0">
                <img src="https://images.unsplash.com/photo-1576669947938-164b4c735d64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Latihan Upacara" className="w-full h-full object-cover rounded-xl" />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-sm mb-2 text-gray-900">Latihan Upacara</h3>
                <p className="text-xs text-gray-500">29 Juli 2026</p>
              </div>
            </div>
            
            {/* Card 2 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
               <div className="h-64 w-full p-4 pb-0">
                <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Sosialisasi kenakalan remaja" className="w-full h-full object-cover rounded-xl" />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-sm mb-2 text-gray-900">Sosialisasi kenakalan remaja</h3>
                <p className="text-xs text-gray-500">29 Juli 2026</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
               <div className="h-64 w-full p-4 pb-0">
                <img src="https://images.unsplash.com/photo-1576669947938-164b4c735d64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Latihan Upacara" className="w-full h-full object-cover rounded-xl" />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-sm mb-2 text-gray-900">Latihan Upacara</h3>
                <p className="text-xs text-gray-500">29 Juli 2026</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Galeri Section */}
      <section className="py-20 bg-[#fcfbf9]">
        <div className="max-w-7xl mx-auto px-4">
           <div className="text-center mb-12 inline-block w-full">
             <div className="inline-block relative">
                <h2 className="font-display text-4xl md:text-5xl text-[#053b93]">Galeri</h2>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3/4 h-1.5 bg-red-500 rounded-full"></div>
             </div>
          </div>

          <HomeGallerySlider />

          <div className="text-right">
             <Link to="/galeri" className="text-[#053b93] hover:text-blue-800 font-medium inline-flex items-center transition-colors">
               Selengkapnya <span className="ml-1 text-lg">&rsaquo;</span>
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

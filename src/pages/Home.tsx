import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Clock, MapPin, Tag, X } from 'lucide-react';
import React, { useRef, useState } from 'react';
import { Lightbox } from '../components/Lightbox';
import { mockEvents, MONTHS, DAYS, EventData } from '../components/CalendarSection';

const MiniCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2026, 7, 1));
  const [selectedEvent, setSelectedEvent] = useState<EventData | null>(null);

  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDay = new Date(currentYear, currentMonth, 1).getDay();

  const days = [];
  for (let i = 0; i < firstDay; i++) {
    days.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  const prevMonth = () => setCurrentDate(new Date(currentYear, currentMonth - 1, 1));
  const nextMonth = () => setCurrentDate(new Date(currentYear, currentMonth + 1, 1));

  const formatDateKey = (day: number) => {
    return `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
  };

  const hasEvents = (day: number) => {
    const dateStr = formatDateKey(day);
    return mockEvents.filter(e => e.date === dateStr);
  };

  const handleDateClick = (day: number) => {
    const events = hasEvents(day);
    if (events && events.length > 0) {
      // Just show the first event for simplicity in the mini calendar
      setSelectedEvent(events[0]);
    }
  };

  return (
    <>
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 h-full flex flex-col">
        <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Tag size={18} className="text-red-500" />
          Kegiatan Mendatang
        </h3>
        
        <div className="flex justify-between items-center mb-4">
          <button onClick={prevMonth} className="p-1 hover:bg-gray-100 rounded-full text-gray-700">
            <ChevronLeft size={20} />
          </button>
          <h4 className="text-sm font-bold text-[#053b93]">
            {MONTHS[currentMonth]} {currentYear}
          </h4>
          <button onClick={nextMonth} className="p-1 hover:bg-gray-100 rounded-full text-gray-700">
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="grid grid-cols-7 gap-1 mb-2">
          {DAYS.map(day => (
            <div key={day} className="text-center font-semibold text-gray-500 text-xs py-1">
              {day.slice(0,1)}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1">
          {days.map((day, idx) => {
            const events = day ? hasEvents(day) : [];
            const hasEvent = events.length > 0;
            return (
              <div 
                key={idx} 
                onClick={() => day && handleDateClick(day)}
                className={`
                  aspect-square p-0.5 relative flex items-center justify-center text-sm rounded-lg
                  ${day ? 'cursor-pointer' : ''}
                  ${hasEvent ? 'bg-blue-50 text-[#053b93] font-bold hover:bg-[#053b93] hover:text-white transition-colors group' : (day ? 'text-gray-700 hover:bg-gray-50' : '')}
                `}
              >
                {day}
                {hasEvent && (
                  <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full bg-red-500 group-hover:bg-white transition-colors"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Popup Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl p-6 w-full max-w-sm relative shadow-xl border border-gray-100">
            <button 
              onClick={() => setSelectedEvent(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 bg-gray-50 hover:bg-gray-100 rounded-full p-1 transition-colors"
            >
              <X size={20} />
            </button>
            <h4 className="font-bold text-[#053b93] text-lg mb-2 pr-8">{selectedEvent.title}</h4>
            <div className="flex gap-2 mb-4">
              <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded-full ${selectedEvent.type === 'meeting' ? 'bg-blue-100 text-blue-800' : 'bg-red-100 text-red-800'}`}>
                {selectedEvent.type === 'meeting' ? 'Rapat' : 'Kegiatan'}
              </span>
            </div>
            {selectedEvent.description && (
              <p className="text-sm text-gray-600 mb-4">{selectedEvent.description}</p>
            )}
            <div className="space-y-2 pt-4 border-t border-gray-100 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-gray-400" />
                <span>{selectedEvent.time}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-gray-400" />
                <span>{selectedEvent.location}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const HomeGallerySlider = ({ onImageClick }: { onImageClick: (src: string) => void }) => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const images = [
    { src: 'https://drive.google.com/thumbnail?id=1f1J7o6Tx8q61faXskwXuMwY0U4J5GKQr&sz=s2000', title: 'Latihan Upacara' },
    { src: 'https://drive.google.com/thumbnail?id=16DZ0H0-g2Qs2yr6QbSb96BdrlG25ww1Z&sz=s2000', title: 'Sosialisasi kenakalan remaja' },
    { src: 'https://drive.google.com/thumbnail?id=1xl0HKr0NhKHuuxp15FOB3W0aJ3spdUIz&sz=s2000', title: 'Pembentukan pengurus' },
    { src: 'https://drive.google.com/thumbnail?id=1UhNIJe8gB-wWeUB_5jBDjqsqGiSm0xvw&sz=s2000', title: 'Rapat Sie pemuda & Olahraga' }
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
             <div 
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:border-[#053b93]/20 border border-transparent p-2 pb-0 text-center h-full cursor-pointer"
                onClick={() => onImageClick(img.src)}
             >
                <img src={img.src} alt={img.title} className="w-full h-48 object-cover rounded-xl mb-3" />
                <h3 className="text-left font-bold text-[12px] text-gray-900 pb-3">{img.title}</h3>
             </div>
          </div>
        ))}
      </div>
      
      <button 
        onClick={() => scroll('left')}
        className="absolute left-2 md:-left-4 top-1/2 -translate-y-1/2 bg-white/90 p-2.5 rounded-full shadow-lg text-gray-800 hover:text-[#053b93] opacity-100 transition-all flex items-center justify-center z-10 border border-gray-100"
      >
        <ChevronLeft size={24} />
      </button>
      
      <button 
        onClick={() => scroll('right')}
        className="absolute right-2 md:-right-4 top-1/2 -translate-y-1/2 bg-white/90 p-2.5 rounded-full shadow-lg text-gray-800 hover:text-[#053b93] opacity-100 transition-all flex items-center justify-center z-10 border border-gray-100"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="bg-[#e9f1fa]">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#00b4db] to-[#0083b0] text-white relative overflow-hidden py-[24px]">
        <div className="absolute inset-0 bg-[#E9F1FA]"></div> {/* Darken overlay to match screenshot */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            <div className="lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
              <span className="inline-block bg-[#053b93] text-white text-center text-xs lg:text-sm px-4 py-1.5 rounded-md mb-4 shadow-sm w-[140px] lg:w-[160px]">
                Selamat Datang
              </span>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-black mb-1 lg:mb-2 tracking-tight text-[#0d08ef] drop-shadow-sm">IRAK 015</h1>
              <h2 className="font-display font-bold text-[32px] leading-[40px] text-white drop-shadow-md mb-4 lg:mb-6 tracking-wide" style={{ WebkitTextStroke: '1px #053b93' }}>
                Ikatan Remaja Aktif 015
              </h2>
              <p className="text-black text-sm lg:text-base mb-6 lg:mb-8 max-w-[800px] font-light">
                Wadah pengembangan generasi muda RW. 015 Pesona Gading Cibitung, Desa Wanajaya Kecamatan Cibitung, Kabupaten Bekasi, yang tumbuh dan berkembang atas dasar kesadaran dan tanggung jawab sosial dari, oleh, dan untuk masyarakat.
              </p>
              <Link to="/tentang-kami" className="inline-flex items-center justify-center bg-[#053b93] hover:bg-blue-800 text-white font-medium rounded-md transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-lg text-[12px] h-[36px] w-[180px]">
                Selengkapnya <span className="ml-2">&gt;</span>
              </Link>
            </div>
            <div className="lg:w-1/2 flex justify-center lg:justify-end w-full">
              <div className="relative w-full max-w-[280px] lg:max-w-md">
                {/* Decorative background shape */}
                <div className="absolute -inset-2 bg-white rounded-3xl opacity-20 blur-sm"></div>
                <img 
                  src="https://drive.google.com/thumbnail?id=1n-QVXh44JrSbammiNS4qg9TkW1Okp4wo&sz=s2000" 
                  alt="Remaja bersatu" 
                  className="relative w-full aspect-[4/3] rounded-3xl border-4 border-white shadow-2xl object-cover"
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
      <section className="py-[24px] bg-[#e9f1fa]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 inline-block w-full">
             <div className="inline-block relative">
                <h2 className="font-display text-[32px] leading-[40px] text-[#053b93]">Kegiatan</h2>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3/4 h-1.5 bg-red-500 rounded-full"></div>
             </div>
             <p className="text-[#053b93]/70 mt-6 max-w-2xl mx-auto text-[16px] leading-[24px]">Berbagai aktivitas dan program yang telah kami laksanakan bersama seluruh anggota IRAK 015.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                {/* Card 1 */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:border-[#053b93]/20 border border-transparent">
                  <div 
                    className="h-48 w-full p-2 pb-0 cursor-pointer"
                    onClick={() => setSelectedImage("https://drive.google.com/thumbnail?id=1f1J7o6Tx8q61faXskwXuMwY0U4J5GKQr&sz=s2000")}
                  >
                    <img src="https://drive.google.com/thumbnail?id=1f1J7o6Tx8q61faXskwXuMwY0U4J5GKQr&sz=s2000" alt="Latihan Upacara" className="w-full h-full object-cover rounded-xl" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-sm mb-1 text-gray-900">Latihan Upacara</h3>
                    <p className="text-xs text-gray-500">29 Juli 2026</p>
                  </div>
                </div>
                
                {/* Card 2 */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:border-[#053b93]/20 border border-transparent">
                   <div 
                     className="h-48 w-full p-2 pb-0 cursor-pointer"
                     onClick={() => setSelectedImage("https://drive.google.com/thumbnail?id=16DZ0H0-g2Qs2yr6QbSb96BdrlG25ww1Z&sz=s2000")}
                   >
                    <img src="https://drive.google.com/thumbnail?id=16DZ0H0-g2Qs2yr6QbSb96BdrlG25ww1Z&sz=s2000" alt="Sosialisasi kenakalan remaja" className="w-full h-full object-cover rounded-xl" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-sm mb-1 text-gray-900">Sosialisasi kenakalan remaja</h3>
                    <p className="text-xs text-gray-500">21 Juli 2026</p>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:border-[#053b93]/20 border border-transparent">
                   <div 
                     className="h-48 w-full p-2 pb-0 cursor-pointer"
                     onClick={() => setSelectedImage("https://drive.google.com/thumbnail?id=1xl0HKr0NhKHuuxp15FOB3W0aJ3spdUIz&sz=s2000")}
                   >
                    <img src="https://drive.google.com/thumbnail?id=1xl0HKr0NhKHuuxp15FOB3W0aJ3spdUIz&sz=s2000" alt="Pembentukan pengurus" className="w-full h-full object-cover rounded-xl" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-sm mb-1 text-gray-900 line-clamp-1">Pembentukan Struktur Organisasi</h3>
                    <p className="text-xs text-gray-500">13 Juni 2026</p>
                  </div>
                </div>

                {/* Card 4 */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:border-[#053b93]/20 border border-transparent">
                   <div 
                     className="h-48 w-full p-2 pb-0 cursor-pointer"
                     onClick={() => setSelectedImage("https://drive.google.com/thumbnail?id=1UhNIJe8gB-wWeUB_5jBDjqsqGiSm0xvw&sz=s2000")}
                   >
                    <img src="https://drive.google.com/thumbnail?id=1UhNIJe8gB-wWeUB_5jBDjqsqGiSm0xvw&sz=s2000" alt="Rapat Sie Pemuda dan Olahraga" className="w-full h-full object-cover rounded-xl" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-sm mb-1 text-gray-900 line-clamp-1">Rapat Sie Pemuda & Olahraga</h3>
                    <p className="text-xs text-gray-500">22 Mei 2026</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Upcoming Events Mini List */}
            <div className="lg:col-span-1">
              <MiniCalendar />
            </div>
          </div>
        </div>
      </section>

      {/* Galeri Section */}
      <section className="py-[24px] bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-4">
           <div className="text-center mb-12 inline-block w-full">
             <div className="inline-block relative">
                <h2 className="font-display text-[32px] leading-[40px] text-[#053b93]">Galeri</h2>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3/4 h-1.5 bg-red-500 rounded-full"></div>
             </div>
             <p className="text-[#053b93]/70 mt-6 max-w-2xl mx-auto text-[16px] leading-[24px]">Momen-momen berharga dan kebersamaan kami yang diabadikan dalam bentuk foto.</p>
          </div>

          <HomeGallerySlider onImageClick={setSelectedImage} />

          <div className="text-right">
             <Link to="/galeri" className="text-[#053b93] hover:text-blue-800 font-medium inline-flex items-center transition-all duration-300 transform hover:translate-x-1 text-[12px] leading-[16px]">
               Selengkapnya <span className="ml-1 text-lg">&rsaquo;</span>
             </Link>
          </div>
        </div>
      </section>

      <Lightbox imageSrc={selectedImage} onClose={() => setSelectedImage(null)} />
    </div>
  );
}

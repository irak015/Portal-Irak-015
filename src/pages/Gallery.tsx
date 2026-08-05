import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useRef } from 'react';

const EventSlider = ({ event }: { event: any }) => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative group">
      <div 
        ref={sliderRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 [&::-webkit-scrollbar]:hidden"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {event.images.map((img: string, imgIdx: number) => (
          <div key={imgIdx} className="snap-start shrink-0 w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] lg:w-[calc(25%-18px)]">
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm p-4 hover:shadow-md transition-shadow h-full">
              <div className="w-full h-64 md:h-56">
                 <img src={img} alt={`${event.title} ${imgIdx + 1}`} className="w-full h-full object-cover rounded-2xl" />
              </div>
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

export default function Gallery() {
  const events = [
    {
      title: 'Latihan Upacara',
      date: '29 Juli 2026',
      images: [
        'https://images.unsplash.com/photo-1576669947938-164b4c735d64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1576669947938-164b4c735d64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1576669947938-164b4c735d64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1576669947938-164b4c735d64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      ]
    },
    {
      title: 'Rapat Perdana',
      date: '29 Juli 2026',
      images: [
        'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      ]
    },
    {
      title: 'Pembentukan Struktur Organisasi',
      date: '29 Juli 2026',
      images: [
        'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      ]
    }
  ];

  return (
    <div className="bg-[#f3ebfa] min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4">
         <div className="text-center mb-16">
            <div className="inline-block relative">
               <h1 className="font-display text-4xl md:text-5xl text-[#053b93]">Galeri</h1>
               <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3/4 h-1.5 bg-red-500 rounded-full"></div>
            </div>
         </div>

         <div className="space-y-16">
            {events.map((event, idx) => (
              <div key={idx}>
                 <h2 className="text-2xl font-bold text-gray-900 mb-1">{event.title}</h2>
                 <p className="text-gray-600 mb-6">{event.date}</p>
                 
                 <EventSlider event={event} />
              </div>
            ))}
         </div>
      </div>
    </div>
  );
}

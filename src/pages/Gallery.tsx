import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import React, { useRef, useState, useEffect } from 'react';

import { Lightbox } from '../components/Lightbox';

const EventSlider = ({ event, onImageClick }: { event: any, onImageClick: (img: string) => void }) => {
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
            <div 
              className="bg-white rounded-3xl overflow-hidden shadow-sm p-4 hover:shadow-md transition-shadow h-full cursor-pointer"
              onClick={() => onImageClick(img)}
            >
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
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const events = [
    {
      title: 'Latihan Upacara',
      date: '29 Juli 2026',
      images: [
        'https://drive.google.com/thumbnail?id=1f1J7o6Tx8q61faXskwXuMwY0U4J5GKQr&sz=s2000',
        'https://drive.google.com/thumbnail?id=1DpvOMCE54zEb2mgQvdDMXrnVFVgZNerp&sz=s2000',
        'https://drive.google.com/thumbnail?id=1wvjtmNqpEZZV7KTrRY6HD9_FG-2WeTs5&sz=s2000',
        'https://drive.google.com/thumbnail?id=1FWMfzp12Z9c2Jnz3KRdZIqSCCMuSf5VN&sz=s2000',
        'https://drive.google.com/thumbnail?id=1Bq_2sRSMA3gW3vBeCOhQhcpohpwUQKKU&sz=s2000',
        'https://drive.google.com/thumbnail?id=1kn0gHmYLfe9qEwsn1FJ5r_XyD6vfBU8g&sz=s2000',
        'https://drive.google.com/thumbnail?id=1B25AGQ_G1OoXtJM59XSyYOpuhltWAbW2&sz=s2000',
        'https://drive.google.com/thumbnail?id=1ZJFDCdzkdUl02GLWWPS-Ecikuph0tPtj&sz=s2000'
      ]
    },
    {
      title: 'Sosialisasi Kenakalan Remaja',
      date: '21 Juli 2026',
      images: [
        'https://drive.google.com/thumbnail?id=16DZ0H0-g2Qs2yr6QbSb96BdrlG25ww1Z&sz=s2000',
        'https://drive.google.com/thumbnail?id=1A4lz300vYv0iDRqXat905a2dKYjTmOVo&sz=s2000',
        'https://drive.google.com/thumbnail?id=1yLi-cJT2gZ6r2g5SI7u6_S84vebih6Ot&sz=s2000',
        'https://drive.google.com/thumbnail?id=1A9oLu3yTF27cLTMtJL4Pfcto6oQrXStP&sz=s2000',
        'https://drive.google.com/thumbnail?id=1tBKsexqveUssVwsK2qDNS_CyqojwrvjS&sz=s2000',
        'https://drive.google.com/thumbnail?id=16p46y449U4VQkZuSdhcCMkC-17JiN8Ua&sz=s2000',
        'https://drive.google.com/thumbnail?id=19Pznq69ECeDbC9Kx8BwfLkKmF5TsTX-g&sz=s2000',
        'https://drive.google.com/thumbnail?id=1N5rnZ3Z54g4qml_UTAxVHBzuQzJ2185X&sz=s2000',
        'https://drive.google.com/thumbnail?id=1mDJCVmdTcyn0CyYlI1wnNVejZYztf6AI&sz=s2000',
        'https://drive.google.com/thumbnail?id=1mXxAobsyCFwSy10yC1Aycb0Zr6VyUuFK&sz=s2000',
        'https://drive.google.com/thumbnail?id=1YP7yvI4eK1tcYCnAR2iuCp8weCL7VMjL&sz=s2000',
        'https://drive.google.com/thumbnail?id=1K6IJJCWP_c4yJwW3bhOzfL01dkXLPcSG&sz=s2000',
        'https://drive.google.com/thumbnail?id=1SshHBKzfj78RKWql-V55sCretN5yJ6ip&sz=s2000',
        'https://drive.google.com/thumbnail?id=1sN4UZ6p2rc3iLEbaXh7VIE7zZRzIjgz1&sz=s2000',
        'https://drive.google.com/thumbnail?id=1kZuGhyE9BYrMcjfiZDUlBSjrpn6jUOQ1&sz=s2000',
        'https://drive.google.com/thumbnail?id=1XXHKXovA7G6883fR84Q0bYLmiJOdl0yk&sz=s2000',
        'https://drive.google.com/thumbnail?id=1-Qblv27-INju9TqZ-nl0Wfkv1BpOh1xu&sz=s2000',
        'https://drive.google.com/thumbnail?id=1gzkoZNWjCzLy7ePiJRktyhEhGIdnCy8c&sz=s2000',
        'https://drive.google.com/thumbnail?id=1Qz32kX9-7x0qQZ1Bka_f1p44LwiDUqID&sz=s2000',
        'https://drive.google.com/thumbnail?id=1-_nh2bkMDmiqyuP82U7Tj6T2t4IyCQxI&sz=s2000'
      ]
    },
    {
      title: 'Pembentukan Struktur Organisasi',
      date: '13 Juni 2026',
      images: [
        'https://drive.google.com/thumbnail?id=1xl0HKr0NhKHuuxp15FOB3W0aJ3spdUIz&sz=s2000',
        'https://drive.google.com/thumbnail?id=1n_ADXkp_C_YaTJVtVy65_V8gnQaL3hST&sz=s2000',
        'https://drive.google.com/thumbnail?id=1zntbWwvmsegCjFM-Qe9jncPjf2dijgbb&sz=s2000',
        'https://drive.google.com/thumbnail?id=1xkjyeM6PgFHQ0Ll9ig--X19ihCodmMtp&sz=s2000',
      ]
    },
    {
      title: 'Rapat Sie Pemuda dan Olahraga',
      date: '22 Mei 2026',
      images: [
        'https://drive.google.com/thumbnail?id=1HBbI18QS29u8Nt1JwhWUHalO8Sbm0OF2&sz=s2000',
        'https://drive.google.com/thumbnail?id=1hTQETHjnOb2dEAnTNOS2XOpafYNzUwav&sz=s2000',
        'https://drive.google.com/thumbnail?id=1L5IQVdnghfx2t1RKZD7crF6KCvGdRC7f&sz=s2000',
        'https://drive.google.com/thumbnail?id=1AOHdlsLi77WwI5t-pk8MEZnh5aIlAAME&sz=s2000'
      ]
    }
  ];

  return (
    <div className="bg-[#f3ebfa] min-h-screen py-[24px]">
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
                 <h2 className="text-[16px] leading-[20px] font-bold text-gray-900 mb-1">{event.title}</h2>
                 <p className="text-gray-600 mb-6 text-[12px] leading-[20px]">{event.date}</p>
                 
                 <EventSlider event={event} onImageClick={setSelectedImage} />
              </div>
            ))}
         </div>
      </div>

      <Lightbox imageSrc={selectedImage} onClose={() => setSelectedImage(null)} />
    </div>
  );
}

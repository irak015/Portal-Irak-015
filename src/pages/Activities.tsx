import React, { useState } from 'react';
import { Lightbox } from '../components/Lightbox';

export default function Activities() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const activities = [
    {
      title: 'Latihan Upacara',
      date: '29 Juli 2026',
      image: 'https://drive.google.com/thumbnail?id=1f1J7o6Tx8q61faXskwXuMwY0U4J5GKQr&sz=s2000',
      description: 'Kegiatan latihan rutin untuk mempersiapkan petugas upacara bendera yang baik dan disiplin.'
    },
    {
      title: 'Sosialisasi kenakalan remaja',
      date: '21 Juli 2026',
      image: 'https://drive.google.com/thumbnail?id=16DZ0H0-g2Qs2yr6QbSb96BdrlG25ww1Z&sz=s2000',
      description: 'Penyuluhan dan edukasi kepada remaja tentang bahaya pergaulan bebas dan pentingnya menjaga moral.'
    },
    {
      title: 'Pembentukan pengurus',
      date: '13 Juni 2026',
      image: 'https://drive.google.com/thumbnail?id=1xl0HKr0NhKHuuxp15FOB3W0aJ3spdUIz&sz=s2000',
      description: 'Musyawarah pembentukan susunan pengurus baru untuk masa bakti 2026-2028.'
    },
    {
      title: 'Rapat Sie Pemuda & Olahraga',
      date: '22 Mei 2026',
      image: 'https://drive.google.com/thumbnail?id=1UhNIJe8gB-wWeUB_5jBDjqsqGiSm0xvw&sz=s2000',
      description: 'Rapat koordinasi seksi pemuda dan olahraga untuk menyusun program kerja kegiatan olahraga rutin warga.'
    }
  ];

  return (
    <div className="bg-[#e9f1fa] min-h-screen py-[24px]">
      <div className="max-w-7xl mx-auto px-4">
         <div className="text-center mb-16">
            <div className="inline-block relative">
               <h1 className="font-display text-[32px] leading-[40px] text-[#053b93]">Kegiatan</h1>
               <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3/4 h-1.5 bg-red-500 rounded-full"></div>
            </div>
            <p className="text-[#053b93]/70 mt-6 max-w-2xl mx-auto text-sm">Berbagai aktivitas dan program yang telah kami laksanakan bersama seluruh anggota IRAK 015.</p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity, idx) => (
              <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:border-[#053b93]/20 border border-transparent">
                <div 
                  className="h-64 w-full p-2 pb-0 cursor-pointer"
                  onClick={() => setSelectedImage(activity.image)}
                >
                  <img src={activity.image} alt={activity.title} className="w-full h-full object-cover rounded-xl" />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-sm mb-2 text-gray-900">{activity.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{activity.description}</p>
                  <p className="text-xs text-gray-500">{activity.date}</p>
                </div>
              </div>
            ))}
         </div>
      </div>

      <Lightbox imageSrc={selectedImage} onClose={() => setSelectedImage(null)} />
    </div>
  );
}

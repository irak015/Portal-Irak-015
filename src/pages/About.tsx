import React, { useState } from 'react';
import { Lightbox } from '../components/Lightbox';
import { X } from 'lucide-react';

interface MemberData {
  noAnggota: string;
  nama: string;
  tglLahir: string;
  alamat: string;
  posisi: string;
  imgSrc: string;
}

export default function About() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedMember, setSelectedMember] = useState<MemberData | null>(null);

  const pengurus = [
    { name: 'Bayu', role: 'Ketua', colSpan: 'col-span-4 flex justify-center' },
    { name: 'Davin', role: 'Sekretariat', colSpan: 'col-span-1' },
    { name: 'Arman', role: 'Sekretariat', colSpan: 'col-span-1' },
    { name: 'Rifa', role: 'Sekretariat', colSpan: 'col-span-1' },
    { name: 'Brina', role: 'Sekretariat', colSpan: 'col-span-1' },
    { name: 'Echa', role: 'Bendahara', colSpan: 'col-span-1' },
    { name: 'Ghesa', role: 'Bendahara', colSpan: 'col-span-1' },
    { name: 'Farih', role: 'Sie Olahraga', colSpan: 'col-span-1' },
    { name: 'Zaidan', role: 'Sie Olahraga', colSpan: 'col-span-1' },
  ];

  const anggota = [
    { name: 'Napisa', imgSrc: 'https://drive.google.com/thumbnail?id=1MAiVcVoE8heYTAFf48HL7yx5_HM7SKn_&sz=s2000' },
    { name: 'Fitri', imgSrc: 'https://drive.google.com/thumbnail?id=130jUSxTHkFnjYTFr086AjQY3cxjjGG-d&sz=s2000' },
    { name: 'Riski', imgSrc: 'https://drive.google.com/thumbnail?id=1CAPo1IqBO4Z2cv-J9U35mJguuOGUojdS&sz=s2000' },
    { name: 'Iffah', imgSrc: 'https://drive.google.com/thumbnail?id=1LyP1j_H6ye9oQJtIJdAb7Ju9j3GyvAy5&sz=s2000' },
    { name: 'Kayla', imgSrc: 'https://drive.google.com/thumbnail?id=1x-p05CTCzXmG7ukFypZYrVwntHUheBLi&sz=s2000' },
    { name: 'Hanum', imgSrc: 'https://drive.google.com/thumbnail?id=1_Q0Z1kSO8If-2uNUhGPlDhyNA_quB3xv&sz=s2000' },
    { name: 'Danesh', imgSrc: 'https://drive.google.com/thumbnail?id=1n75r7yUOwQrY2-8PnA2NgfW1h70zjbrZ&sz=s2000' },
    { name: 'Sekar', imgSrc: 'https://drive.google.com/thumbnail?id=14-kcW_v8DA1AE2d85yjXOmxzhhcpcxxS&sz=s2000' },
    { name: 'Aida', imgSrc: 'https://drive.google.com/thumbnail?id=1korRFt74uPRjPNkLs_EI8dOWAXBt_fTW&sz=s2000' },
    { name: 'Joja', imgSrc: 'https://drive.google.com/thumbnail?id=1EZjASLnw021H_s8VcQNsKhHH_cHgR7GZ&sz=s2000' },
    { name: 'Delisa', imgSrc: 'https://drive.google.com/thumbnail?id=1b2QazZFF6V51_XDTSqduJjxyYKBgL63n&sz=s2000' }
  ];

  return (
    <div className="bg-[#e9f1fa]">
      {/* Header Section */}
      <section className="py-[24px] bg-[#e9f1fa] text-center">
        <div className="max-w-7xl mx-auto px-4">
           <div className="inline-block relative mb-8">
              <h1 className="font-display text-[32px] leading-[40px] text-[#053b93]">Tentang Kami</h1>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3/4 h-1.5 bg-red-500 rounded-full"></div>
           </div>
           <p className="text-[#053b93]/70 mt-2 mb-8 max-w-2xl mx-auto text-[16px] leading-[24px]">Mengenal lebih dekat siapa kami dan visi misi Ikatan Remaja Aktif 015.</p>
           
           <div className="mb-12">
             <p className="text-gray-800 text-lg font-medium mb-2">Moto :</p>
             <h2 className="font-display text-[32px] leading-[40px] text-[#053b93] mb-4">Eksis</h2>
             <p className="text-gray-800 text-xl md:text-2xl font-medium">Edukatif, Kreatif, Simpatik, Integritas, dan Solidaritas</p>
           </div>

           <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto text-left">
              {/* Histori */}
              <div className="bg-white rounded-3xl p-8 shadow-sm flex-1">
                 <h3 className="text-xl font-bold text-gray-900 mb-4">Histori</h3>
                 <p className="text-gray-700 leading-relaxed">
                   Ikatan Remaja Aktif RW. 015 Pesona Gading Cibitung, yang akrab disebut IRAK 015, adalah organisasi remaja yang berdedikasi untuk mengembangkan potensi generasi muda. Sejak berdiri tanggal 8 Mei 2017, telah aktif dalam berbagai kegiatan positif, mulai dari kegatan sosial, budaya, olahraga, pengembangan diri serta menjadi bagian dari kegiatan di liingkungan RW. 015. Tujuan utama kami adalah menciptakan lingkungan yang kondusif bagi tumbuh kembangnya remaja yang Edukatif, Kreatif, Simpatik, Integritas, dan solidaritas peduli terhadap sesama.
                 </p>
              </div>

              {/* Visi Misi */}
              <div className="flex-1 flex flex-col gap-8">
                 <div className="bg-white rounded-3xl p-8 shadow-sm">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Visi</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Menjadikan generasi muda RW. 015 Pesona Gading Cibitung sebagai generasi muda yang kreatif, peduli lingkungannya, dan bertanggung jawab.
                    </p>
                 </div>
                 <div className="bg-white rounded-3xl p-8 shadow-sm flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Misi</h3>
                    <ul className="list-disc list-outside ml-5 text-gray-700 leading-relaxed space-y-2">
                      <li>Membangun kepedulian dan solidaritas sosial.</li>
                      <li>Meningkatkan ketrampilan pemuda melalui berbagai program pelatihan.</li>
                      <li>Membangun kebersamaan dan kreatifitas antar pemuda.</li>
                    </ul>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Struktur Pengurus Section */}
      <section className="py-[24px] bg-[#fcfbf9] text-center">
         <div className="max-w-5xl mx-auto px-4">
            <div className="inline-block relative mb-4">
               <h2 className="font-display text-[32px] leading-[40px] text-[#053b93]">Struktur Pengurus</h2>
               <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3/4 h-1.5 bg-red-500 rounded-full"></div>
            </div>
            <p className="text-red-500 font-medium mb-10">Periode 2026-2028</p>

            <div className="bg-[#e9f1fa] rounded-[3rem] p-8 md:p-12 shadow-inner-sm">
               
               {/* Ketua Row */}
               <div className="flex justify-center mb-6">
                 <MemberCard onClick={() => setSelectedMember({
                    noAnggota: '0010526101197',
                    nama: 'Bayu Hendri Priyono',
                    tglLahir: '10 Nov 1997',
                    alamat: 'J7/10',
                    posisi: 'Ketua',
                    imgSrc: 'https://drive.google.com/thumbnail?id=14l-EO95AJNlgTa47uUp53EPDSanMoa_W&sz=s2000'
                 })} name="Bayu" role="Ketua" imgSrc="https://drive.google.com/thumbnail?id=14l-EO95AJNlgTa47uUp53EPDSanMoa_W&sz=s2000" />
               </div>

               {/* Sekretariat Row */}
               <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-6">
                 <MemberCard onClick={() => setSelectedMember({
                    noAnggota: '0020526210510',
                    nama: 'Davin Rafif Alfiano',
                    tglLahir: '21 Mei 2010',
                    alamat: 'J5/2',
                    posisi: 'Sekretariat',
                    imgSrc: 'https://drive.google.com/thumbnail?id=1OSHDZA96tV4MArfihaJv3U61NG3QFsKL&sz=s2000'
                 })} name="Davin" role="Sekretariat" imgSrc="https://drive.google.com/thumbnail?id=1OSHDZA96tV4MArfihaJv3U61NG3QFsKL&sz=s2000" />
                 <MemberCard onClick={() => setSelectedMember({
                    noAnggota: '0030526301110',
                    nama: 'Arman Zhaahiir',
                    tglLahir: '30 Nov 2011',
                    alamat: 'I.7/10',
                    posisi: 'Sekretariat',
                    imgSrc: 'https://drive.google.com/thumbnail?id=1Wb-QlwP4TvQgqS5kZ0rHKAxwLo61x_rs&sz=s2000'
                 })} name="Arman" role="Sekretariat" imgSrc="https://drive.google.com/thumbnail?id=1Wb-QlwP4TvQgqS5kZ0rHKAxwLo61x_rs&sz=s2000" />
                 <MemberCard onClick={() => setSelectedMember({
                    noAnggota: '0040626180910',
                    nama: 'Rifa Azkiya',
                    tglLahir: '18 Sep 2010',
                    alamat: 'D1/23',
                    posisi: 'Sekretariat',
                    imgSrc: 'https://drive.google.com/thumbnail?id=1A1dsSi23nZpPjMHMYIIQ3RQEiWBdkQY_&sz=s2000'
                 })} name="Rifa" role="Sekretariat" imgSrc="https://drive.google.com/thumbnail?id=1A1dsSi23nZpPjMHMYIIQ3RQEiWBdkQY_&sz=s2000" />
                 <MemberCard onClick={() => setSelectedMember({
                    noAnggota: '0050626300311',
                    nama: 'Sabrina Putri Nuraini',
                    tglLahir: '30 Mar 2011',
                    alamat: 'D1/9',
                    posisi: 'Sekretariat',
                    imgSrc: 'https://drive.google.com/thumbnail?id=1FeBvdFjkYV2i8n7JbxNh_K2oQng0eIBB&sz=s2000'
                 })} name="Brina" role="Sekretariat" imgSrc="https://drive.google.com/thumbnail?id=1FeBvdFjkYV2i8n7JbxNh_K2oQng0eIBB&sz=s2000" />
               </div>

               {/* Bendahara & Sie Row */}
               <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                 <MemberCard onClick={() => setSelectedMember({
                    noAnggota: '0070526020310',
                    nama: 'Shafa Hezsya Anbiyani',
                    tglLahir: '2 Maret 2010',
                    alamat: 'C2/10',
                    posisi: 'Bendahara',
                    imgSrc: 'https://drive.google.com/thumbnail?id=1sMwOJAacW6_NiluCO-Xs2_M6Midp-FDj&sz=s2000'
                 })} name="Echa" role="Bendahara" imgSrc="https://drive.google.com/thumbnail?id=1sMwOJAacW6_NiluCO-Xs2_M6Midp-FDj&sz=s2000" />
                 <MemberCard onClick={() => setSelectedMember({
                    noAnggota: '0060526230211',
                    nama: 'Ghesani Tsuraya Dwi Widiasti',
                    tglLahir: '23 Feb 2011',
                    alamat: 'C1/52',
                    posisi: 'Bendahara',
                    imgSrc: 'https://drive.google.com/thumbnail?id=1bB_brdah_xFYhntlUWbyfOtT179O2I1H&sz=s2000'
                 })} name="Ghesa" role="Bendahara" imgSrc="https://drive.google.com/thumbnail?id=1bB_brdah_xFYhntlUWbyfOtT179O2I1H&sz=s2000" />
                 <MemberCard onClick={() => setSelectedMember({
                    noAnggota: '0080526121210',
                    nama: 'Farih Irwin Sugito',
                    tglLahir: '12 Des 2010',
                    alamat: 'J4/72A',
                    posisi: 'Sie Olahraga',
                    imgSrc: 'https://drive.google.com/thumbnail?id=100Q61DMxCADZdOKV8hSxXy6UTl4IWIN6&sz=s2000'
                 })} name="Farih" role="Sie Olahraga" imgSrc="https://drive.google.com/thumbnail?id=100Q61DMxCADZdOKV8hSxXy6UTl4IWIN6&sz=s2000" />
                 <MemberCard onClick={() => setSelectedMember({
                    noAnggota: '0090626270610',
                    nama: 'Ahmad Zaidan Abiyy Dzaki',
                    tglLahir: '27 Jun 2010',
                    alamat: 'J4/68',
                    posisi: 'Sie Olahraga',
                    imgSrc: 'https://drive.google.com/thumbnail?id=1y0aBoTmDaRD07YSdVU-KjQt04W6BCe1h&sz=s2000'
                 })} name="Zaidan" role="Sie Olahraga" imgSrc="https://drive.google.com/thumbnail?id=1y0aBoTmDaRD07YSdVU-KjQt04W6BCe1h&sz=s2000" />
               </div>
            </div>
         </div>
      </section>

      {/* Anggota Section */}
      <section className="py-[24px] bg-[#fcfbf9] text-center">
         <div className="max-w-5xl mx-auto px-4">
            <div className="inline-block relative mb-10">
               <h2 className="font-display text-[32px] leading-[40px] text-[#053b93]">Anggota</h2>
               <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3/4 h-1.5 bg-red-500 rounded-full"></div>
            </div>

            <div className="bg-[#e9f1fa] rounded-[3rem] p-8 md:p-12 shadow-inner-sm">
               <div className="grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-6">
                  {anggota.map((member, index) => (
                    <MemberCard onClick={setSelectedImage} key={index} name={member.name} role="" imgSrc={member.imgSrc} isAnggota={true} />
                  ))}
               </div>
            </div>
         </div>
      </section>
      <Lightbox imageSrc={selectedImage} onClose={() => setSelectedImage(null)} />
      
      {/* Member Detail Modal */}
      {selectedMember && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => setSelectedMember(null)}>
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl max-w-sm w-full relative" onClick={e => e.stopPropagation()}>
            <button onClick={() => setSelectedMember(null)} className="absolute top-4 right-4 bg-white rounded-full p-1.5 shadow-md text-gray-700 hover:text-red-500 z-10 transition-colors">
               <X size={20} />
            </button>
            <div className="bg-gradient-to-br from-blue-300 to-cyan-200 h-32 relative"></div>
            <div className="px-6 pb-8 -mt-16 flex flex-col items-center relative z-0">
               <div className="w-32 h-32 rounded-2xl overflow-hidden border-4 border-white shadow-lg mb-4 bg-white">
                  <img src={selectedMember.imgSrc} alt={selectedMember.nama} className="w-full h-full object-cover" />
               </div>
               <h3 className="font-display text-2xl text-[#053b93] font-bold text-center mb-1">{selectedMember.nama}</h3>
               <span className="inline-block bg-[#50d1d9] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-6">
                 {selectedMember.posisi}
               </span>
               
               <div className="w-full bg-gray-50 rounded-2xl p-5 space-y-3 shadow-inner-sm text-left">
                  <div>
                     <p className="text-xs text-gray-500 font-semibold uppercase">No Anggota</p>
                     <p className="text-gray-900 font-medium">{selectedMember.noAnggota}</p>
                  </div>
                  <div className="h-px bg-gray-200 w-full"></div>
                  <div>
                     <p className="text-xs text-gray-500 font-semibold uppercase">Tgl Lahir</p>
                     <p className="text-gray-900 font-medium">{selectedMember.tglLahir}</p>
                  </div>
                  <div className="h-px bg-gray-200 w-full"></div>
                  <div>
                     <p className="text-xs text-gray-500 font-semibold uppercase">Alamat</p>
                     <p className="text-gray-900 font-medium">{selectedMember.alamat}</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

interface MemberCardProps {
  name: string;
  role: string;
  imgSrc?: string;
  isAnggota?: boolean;
  onClick?: (imgSrc: string) => void;
}

const MemberCard: React.FC<MemberCardProps> = ({ name, role, imgSrc = "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600w=300&q=80q=100", isAnggota = false, onClick }) => {
  return (
    <div className="flex flex-col items-center">
       <div 
         className="relative w-full max-w-[140px] aspect-[3/4] bg-gradient-to-br from-blue-300 to-cyan-200 rounded-2xl overflow-hidden shadow-md p-1.5 cursor-pointer transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 hover:shadow-lg"
         onClick={() => onClick && onClick(imgSrc)}
       >
          {/* Inner image container */}
          <div className="w-full h-[75%] rounded-t-xl overflow-hidden bg-white">
             <img src={imgSrc} alt={name} className="w-full h-full object-cover" />
          </div>
          {/* Name/Role container */}
          <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-[#50d1d9] flex flex-col items-center justify-center rounded-b-xl px-1">
             <span className="font-display text-white text-xl md:text-2xl leading-none drop-shadow-md">{name}</span>
             {!isAnggota && <span className="text-[10px] text-[#053b93] font-semibold uppercase tracking-wider mt-0.5">{role}</span>}
          </div>
       </div>
    </div>
  );
};


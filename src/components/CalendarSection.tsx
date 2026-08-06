import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, Clock, MapPin, Tag } from 'lucide-react';

export interface EventData {
  id: number;
  date: string;
  title: string;
  time: string;
  location: string;
  type: 'meeting' | 'activity';
  description?: string;
}

export const mockEvents: EventData[] = [
  { id: 1, date: '2026-08-07', title: 'Latihan Upacara', time: '20:00 WIB', location: 'Sarana Olahraga RW. 015', type: 'activity', description: 'Latihan persiapan upacara bendera.' },
  { id: 2, date: '2026-08-17', title: 'Upacara HUT RI & Lomba', time: '07:00 WIB', location: 'Lapangan RW 015', type: 'activity', description: 'Peringatan Hari Kemerdekaan RI ke-81 dan kegiatan lomba antar RT.' },
  { id: 3, date: '2026-08-22', title: 'Kerja Bakti Lingkungan', time: '08:00 WIB', location: 'Lingkungan RW 015', type: 'activity', description: 'Membersihkan lingkungan bersama seluruh warga menyambut akhir bulan.' },
  { id: 4, date: '2026-08-28', title: 'Rapat Persiapan Acara Puncak', time: '20:00 WIB', location: 'Sekretariat IRAK 015', type: 'meeting', description: 'Koordinasi akhir panitia untuk acara puncak RW 015.' },
];

export const DAYS = ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'];
export const MONTHS = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];

export default function CalendarSection() {
  const [currentDate, setCurrentDate] = useState(new Date(2026, 7, 1));
  const [selectedDate, setSelectedDate] = useState<Date>(new Date(2026, 7, 7));

  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month: number, year: number) => {
    return new Date(year, month, 1).getDay();
  };

  const prevMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth + 1, 1));
  };

  const daysInMonth = getDaysInMonth(currentMonth, currentYear);
  const firstDay = getFirstDayOfMonth(currentMonth, currentYear);

  const days = [];
  for (let i = 0; i < firstDay; i++) {
    days.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  const formatDateKey = (day: number | null, month: number, year: number) => {
    if (!day) return '';
    return `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
  };

  const handleDateClick = (day: number | null) => {
    if (day) {
      setSelectedDate(new Date(currentYear, currentMonth, day));
    }
  };

  const selectedDateStr = `${selectedDate.getFullYear()}-${String(selectedDate.getMonth() + 1).padStart(2, '0')}-${String(selectedDate.getDate()).padStart(2, '0')}`;
  
  const selectedEvents = mockEvents.filter(e => e.date === selectedDateStr);

  const isToday = (day: number | null) => {
    if (!day) return false;
    const today = new Date();
    return day === today.getDate() && currentMonth === today.getMonth() && currentYear === today.getFullYear();
  };

  const isSelected = (day: number | null) => {
    if (!day) return false;
    return day === selectedDate.getDate() && currentMonth === selectedDate.getMonth() && currentYear === selectedDate.getFullYear();
  };

  const hasEvent = (day: number | null) => {
    if (!day) return false;
    const dateStr = formatDateKey(day, currentMonth, currentYear);
    return mockEvents.some(e => e.date === dateStr);
  };

  return (
    <section id="calendar-section" className="py-[24px] bg-[#fcfbf9]">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header Title */}
        <div className="text-center mb-12 inline-block w-full">
          <div className="inline-block relative">
            <h1 className="font-display text-[32px] leading-[40px] text-[#053b93]">Kalender Kegiatan</h1>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3/4 h-1.5 bg-red-500 rounded-full"></div>
          </div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            Jadwal lengkap rapat pengurus dan kegiatan kemasyarakatan Ikatan Remaja Aktif RW. 015.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Calendar View */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
              
              <div className="flex justify-between items-center mb-6 px-2">
                <button 
                  onClick={prevMonth}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-700"
                >
                  <ChevronLeft size={24} />
                </button>
                <h2 className="text-xl font-bold text-[#053b93]">
                  {MONTHS[currentMonth]} {currentYear}
                </h2>
                <button 
                  onClick={nextMonth}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-700"
                >
                  <ChevronRight size={24} />
                </button>
              </div>

              <div className="grid grid-cols-7 gap-1 mb-2">
                {DAYS.map(day => (
                  <div key={day} className="text-center font-semibold text-gray-500 text-sm py-2">
                    {day}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-7 gap-1">
                {days.map((day, idx) => (
                  <div 
                    key={idx} 
                    onClick={() => handleDateClick(day)}
                    className={`
                      aspect-square p-1 relative
                      ${day ? 'cursor-pointer' : ''}
                    `}
                  >
                    {day && (
                      <div className={`
                        w-full h-full flex items-center justify-center rounded-xl text-sm md:text-base transition-all
                        ${isSelected(day) ? 'bg-[#053b93] text-white font-bold shadow-md' : 'hover:bg-blue-50 text-gray-700'}
                        ${isToday(day) && !isSelected(day) ? 'text-[#053b93] font-bold border-2 border-[#053b93]' : ''}
                      `}>
                        {day}
                        {hasEvent(day) && (
                          <div className={`absolute bottom-2 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 rounded-full ${isSelected(day) ? 'bg-white' : 'bg-red-500'}`}></div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* Event Details Sidebar */}
          <div className="lg:col-span-1 flex flex-col gap-6">
            <div className="bg-[#f3ebfa] rounded-3xl p-6 shadow-inner-sm border border-purple-100">
              <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                <CalendarIcon size={20} className="text-[#053b93]" />
                Kegiatan pada {selectedDate.getDate()} {MONTHS[selectedDate.getMonth()]}
              </h3>

              <div className="space-y-4">
                {selectedEvents.length > 0 ? (
                  selectedEvents.map(event => (
                    <div key={event.id} className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
                       <div className="flex justify-between items-start mb-2">
                          <h4 className="font-bold text-[#053b93] text-base">{event.title}</h4>
                          <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded-full ${event.type === 'meeting' ? 'bg-blue-100 text-blue-800' : 'bg-red-100 text-red-800'}`}>
                            {event.type === 'meeting' ? 'Rapat' : 'Kegiatan'}
                          </span>
                       </div>
                       {event.description && (
                         <p className="text-sm text-gray-600 mb-4">{event.description}</p>
                       )}
                       <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-gray-100 text-sm text-gray-600">
                          <div className="flex items-center gap-2">
                            <Clock size={16} className="text-gray-400" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin size={16} className="text-gray-400" />
                            <span>{event.location}</span>
                          </div>
                       </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8 bg-white/50 rounded-2xl border border-dashed border-gray-300">
                    <p className="text-gray-500 text-sm">Tidak ada kegiatan pada tanggal ini.</p>
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

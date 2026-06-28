import React from 'react';
import { Calendar as CalendarIcon, Clock, MapPin } from 'lucide-react';

const events = [
  {
    id: 1,
    date: '15 พ.ย. 2026',
    title: 'ประเพณีชักพระ ทอดผ้าป่า และแข่งเรือยาว',
    time: '08:00 - 18:00',
    location: 'ริมแม่น้ำตาปี',
    type: 'festival'
  },
  {
    id: 2,
    date: 'ทุกวันอาทิตย์',
    title: 'ตลาดน้ำประชารัฐบางใบไม้',
    time: '09:00 - 15:00',
    location: 'วัดบางใบไม้',
    type: 'market'
  },
  {
    id: 3,
    date: '20 ธ.ค. 2026',
    title: 'อบรมการทำผลิตภัณฑ์จากใบจาก (ฟรี)',
    time: '13:00 - 16:00',
    location: 'ศาลาอเนกประสงค์ หมู่ 2',
    type: 'workshop'
  }
];

export default function Calendar() {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl shadow-sm p-6 md:p-10 border border-gray-100">
        <div className="flex items-center mb-8 border-b border-[#E0E0E0] pb-4">
          <div className="w-12 h-12 bg-[#D8F3DC] rounded-xl flex items-center justify-center mr-4">
            <CalendarIcon size={24} className="text-[#2D6A4F]" />
          </div>
          <h1 className="text-3xl font-bold text-[#1B4332]">ปฏิทินกิจกรรมชุมชน</h1>
        </div>
        
        <div className="space-y-4">
          {events.map((event) => (
            <div key={event.id} className="flex flex-col md:flex-row border border-[#E0E0E0] rounded-xl overflow-hidden hover:border-[#2D6A4F] hover:shadow-sm transition-all bg-[#FDFBF7]">
              <div className="md:w-40 bg-[#1B4332] text-white p-6 flex flex-col justify-center items-center shrink-0">
                <span className="text-xs font-bold opacity-80 uppercase tracking-wider">{event.date.split(' ')[2] || 'สม่ำเสมอ'}</span>
                <span className="text-4xl font-bold my-1 text-[#B7E4C7]">{event.date.split(' ')[0]}</span>
                <span className="text-sm font-medium">{event.date.split(' ')[1]}</span>
              </div>
              <div className="p-6 md:p-8 flex-grow bg-white">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-xl font-bold text-[#1B4332]">{event.title}</h2>
                  {event.type === 'festival' && <span className="px-3 py-1 bg-[#FDE2E2] text-red-700 rounded-full text-[10px] uppercase font-bold tracking-widest border border-red-100">เทศกาล</span>}
                  {event.type === 'market' && <span className="px-3 py-1 bg-[#D8F3DC] text-[#2D6A4F] rounded-full text-[10px] uppercase font-bold tracking-widest border border-[#B7E4C7]">ตลาดชุมชน</span>}
                  {event.type === 'workshop' && <span className="px-3 py-1 bg-[#E7F5FF] text-blue-700 rounded-full text-[10px] uppercase font-bold tracking-widest border border-blue-100">อบรม</span>}
                </div>
                
                <div className="flex flex-wrap gap-6 mt-4 text-[#2D3436] text-sm">
                  <div className="flex items-center">
                    <Clock size={16} className="mr-2 text-[#2D6A4F]" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin size={16} className="mr-2 text-[#2D6A4F]" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

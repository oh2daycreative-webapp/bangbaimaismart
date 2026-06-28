import React from 'react';
import { MapPin, Clock } from 'lucide-react';

const attractions = [
  {
    id: 1,
    title: 'อุโมงค์จาก คลองร้อยสาย',
    description: 'นั่งเรือชมความงามของป่าจากที่โน้มเข้าหากันจนเกิดเป็นอุโมงค์ธรรมชาติที่สวยงาม ร่มรื่นตลอดเส้นทางน้ำ',
    time: '08:00 - 17:00 น. (ทุกวัน)',
    location: 'ท่าเรือชุมชนบางใบไม้',
    image: 'https://images.unsplash.com/photo-1543360451-404325a2df43?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 2,
    title: 'ตลาดน้ำประชารัฐบางใบไม้',
    description: 'ชิมอาหารพื้นบ้าน ขนมหวาน ซื้อของฝากและผลิตภัณฑ์ชุมชน ท่ามกลางบรรยากาศริมน้ำที่คึกคัก',
    time: '09:00 - 15:00 น. (เฉพาะวันอาทิตย์)',
    location: 'วัดบางใบไม้',
    image: 'https://images.unsplash.com/photo-1579456247781-6785022830f3?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 3,
    title: 'สวนลุงสงค์',
    description: 'แหล่งเรียนรู้การทำน้ำมันมะพร้าวสกัดเย็นแบบครบวงจร ชมสวนมะพร้าวอินทรีย์และการแปรรูป',
    time: '09:00 - 16:00 น. (ทุกวัน)',
    location: 'หมู่ 3 ต.บางใบไม้',
    image: 'https://images.unsplash.com/photo-1550517595-188612fb9471?auto=format&fit=crop&q=80&w=800'
  }
];

export default function Attractions() {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl shadow-sm p-6 md:p-10 border border-gray-100">
        <h1 className="text-3xl font-bold text-[#1B4332] mb-2">แหล่งท่องเที่ยว</h1>
        <p className="text-[#2D3436] mb-8">สัมผัสวิถีชีวิตริมน้ำ ธรรมชาติอุดมสมบูรณ์ และเสน่ห์ของคลองร้อยสาย</p>
        
        <div className="space-y-6">
          {attractions.map((place) => (
            <div key={place.id} className="flex flex-col md:flex-row gap-0 bg-[#FDFBF7] rounded-2xl overflow-hidden border border-[#E0E0E0] hover:border-[#2D6A4F] hover:shadow-md transition-all group">
              <div className="md:w-2/5 h-64 md:h-auto overflow-hidden">
                <img 
                  src={place.image} 
                  alt={place.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="md:w-3/5 p-6 md:p-8 flex flex-col justify-center bg-white">
                <h2 className="text-2xl font-bold text-[#1B4332] mb-3 group-hover:text-[#2D6A4F] transition-colors">{place.title}</h2>
                <p className="text-[#2D3436] mb-6 text-sm md:text-base leading-relaxed">{place.description}</p>
                
                <div className="space-y-3 mt-auto pt-4 border-t border-gray-50">
                  <div className="flex items-center text-[#2D3436] text-sm">
                    <Clock size={16} className="mr-3 text-[#2D6A4F]" />
                    <span>{place.time}</span>
                  </div>
                  <div className="flex items-center text-[#2D3436] text-sm">
                    <MapPin size={16} className="mr-3 text-[#2D6A4F]" />
                    <span>{place.location}</span>
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

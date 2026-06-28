import React from 'react';

const news = [
  {
    id: 1,
    title: 'เชิญร่วมประกวดภาพถ่าย "เสน่ห์คลองร้อยสาย"',
    date: '10 พ.ย. 2026',
    excerpt: 'ลุ้นรับรางวัลเงินสดรวมกว่า 50,000 บาท ส่งผลงานได้ตั้งแต่วันนี้ถึง 30 พฤศจิกายน',
    image: 'https://images.unsplash.com/photo-1516246377666-b3c95973c734?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 2,
    title: 'บางใบไม้คว้ารางวัลชุมชนท่องเที่ยว OTOP นวัตวิถี',
    date: '5 พ.ย. 2026',
    excerpt: 'รับมอบป้ายการันตีคุณภาพจากผู้ว่าราชการจังหวัด ยกระดับการท่องเที่ยวชุมชนอย่างยั่งยืน',
    image: 'https://images.unsplash.com/photo-1522055660877-628424269931?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 3,
    title: 'กำหนดการฉีดวัคซีนสัตว์เลี้ยง (สุนัขและแมว)',
    date: '1 พ.ย. 2026',
    excerpt: 'บริการฉีดวัคซีนป้องกันโรคพิษสุนัขบ้าฟรี ณ ที่ทำการผู้ใหญ่บ้าน หมู่ 1-4 วันที่ 15-16 พ.ย. นี้',
    image: 'https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&q=80&w=600'
  }
];

export default function News() {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl shadow-sm p-6 md:p-10 border border-gray-100">
        <h1 className="text-3xl font-bold text-[#1B4332] mb-8 border-b border-[#E0E0E0] pb-4">ข่าวประชาสัมพันธ์</h1>
        
        <div className="grid md:grid-cols-3 gap-6">
          {news.map((item) => (
            <div key={item.id} className="group cursor-pointer bg-[#FDFBF7] p-4 rounded-xl border border-[#E0E0E0] hover:border-[#2D6A4F] hover:shadow-sm transition-all flex flex-col">
              <div className="rounded-lg overflow-hidden mb-4 relative h-48">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-md text-[10px] font-bold tracking-widest text-[#1B4332] shadow-sm z-20 uppercase border border-white/50">
                  {item.date}
                </div>
              </div>
              <h3 className="text-lg font-bold text-[#1B4332] mb-2 group-hover:text-[#2D6A4F] transition-colors leading-tight">{item.title}</h3>
              <p className="text-[#2D3436] text-sm opacity-80 leading-relaxed flex-grow">{item.excerpt}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center border-t border-[#E0E0E0] pt-8">
          <button className="px-6 py-2.5 border-2 border-[#2D6A4F] rounded-lg text-[#2D6A4F] font-bold text-sm hover:bg-[#D8F3DC] transition-colors">
            ดูข่าวทั้งหมด
          </button>
        </div>
      </div>
    </div>
  );
}

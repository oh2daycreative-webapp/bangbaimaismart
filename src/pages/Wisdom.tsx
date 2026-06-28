import React from 'react';

export default function Wisdom() {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl shadow-sm p-6 md:p-10 border border-gray-100">
        <h1 className="text-3xl font-bold text-[#1B4332] mb-8 border-b border-[#E0E0E0] pb-4">ภูมิปัญญาท้องถิ่น</h1>
        
        <div className="space-y-12">
          <div className="flex flex-col md:flex-row gap-8 items-center bg-[#FDFBF7] p-4 rounded-2xl border border-[#E0E0E0] hover:border-[#2D6A4F] transition-colors">
            <div className="md:w-1/2 rounded-xl overflow-hidden shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&q=80&w=800" 
                alt="Coconut processing" 
                className="w-full h-auto object-cover aspect-[4/3] hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="md:w-1/2 space-y-4 p-2 md:pr-8">
              <div className="inline-block px-3 py-1 bg-[#D8F3DC] text-[#2D6A4F] rounded-full text-xs font-bold mb-2">การแปรรูป</div>
              <h2 className="text-2xl font-bold text-[#1B4332]">การสกัดน้ำมันมะพร้าวสกัดเย็น</h2>
              <p className="text-[#2D3436] leading-relaxed">
                ภูมิปัญญาที่สืบทอดกันมาในการแปรรูปมะพร้าวที่มีมากในชุมชน ให้กลายเป็นน้ำมันมะพร้าวบริสุทธิ์ 
                โดยไม่ผ่านความร้อน ทำให้ยังคงคุณค่าทางสารอาหารและวิตามินไว้อย่างครบถ้วน 
                ใช้บำรุงผิวพรรณ เส้นผม และรับประทานเพื่อสุขภาพ
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse gap-8 items-center bg-[#FDFBF7] p-4 rounded-2xl border border-[#E0E0E0] hover:border-[#2D6A4F] transition-colors">
            <div className="md:w-1/2 rounded-xl overflow-hidden shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?auto=format&fit=crop&q=80&w=800" 
                alt="Handicraft" 
                className="w-full h-auto object-cover aspect-[4/3] hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="md:w-1/2 space-y-4 p-2 md:pl-8">
              <div className="inline-block px-3 py-1 bg-[#B7E4C7] text-[#1B4332] rounded-full text-xs font-bold mb-2">หัตถกรรม</div>
              <h2 className="text-2xl font-bold text-[#1B4332]">งานสานจากใบจาก</h2>
              <p className="text-[#2D3436] leading-relaxed">
                การนำ "ใบจาก" พืชพื้นถิ่นที่ขึ้นหนาแน่นริมคลอง มาสานเป็นของใช้ในชีวิตประจำวัน เช่น 
                เสวียนหม้อ ตะกร้า กระบุง และของที่ระลึกต่างๆ แสดงให้เห็นถึงความผูกพันของชาวบ้านกับสายน้ำและป่าจาก 
                ความประณีตในการสานสะท้อนถึงวิถีชีวิตที่เรียบง่ายและยั่งยืน
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

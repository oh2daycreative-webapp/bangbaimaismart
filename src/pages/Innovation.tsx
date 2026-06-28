import React from 'react';

export default function Innovation() {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl shadow-sm p-6 md:p-10 border border-gray-100">
        <h1 className="text-3xl font-bold text-[#1B4332] mb-6 border-b border-[#E0E0E0] pb-4">นวัตกรรมชุมชน</h1>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="group rounded-2xl overflow-hidden border border-[#E0E0E0] bg-[#FDFBF7] shadow-sm hover:border-[#2D6A4F] transition-all">
            <div className="h-56 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1611270404090-f20387431ec5?auto=format&fit=crop&q=80&w=800" 
                alt="Eco Packaging" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-4 left-4 z-20">
                 <span className="inline-block px-3 py-1 bg-[#D8F3DC] text-[#2D6A4F] rounded-full text-xs font-bold shadow-sm">รักษ์โลก</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#1B4332] mb-2">บรรจุภัณฑ์จากธรรมชาติ</h3>
              <p className="text-[#2D3436] text-sm leading-relaxed">
                การนำใบจากและวัสดุเหลือใช้ทางการเกษตรมาแปรรูปเป็นบรรจุภัณฑ์ทดแทนพลาสติก 
                ผ่านกระบวนการอัดขึ้นรูปด้วยความร้อน สามารถย่อยสลายได้ 100%
              </p>
            </div>
          </div>

          <div className="group rounded-2xl overflow-hidden border border-[#E0E0E0] bg-[#FDFBF7] shadow-sm hover:border-[#2D6A4F] transition-all">
            <div className="h-56 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800" 
                alt="Water Treatment" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-4 left-4 z-20">
                <span className="inline-block px-3 py-1 bg-[#E7F5FF] text-[#0077B6] rounded-full text-xs font-bold shadow-sm">สิ่งแวดล้อม</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#1B4332] mb-2">ระบบบำบัดน้ำเสียครัวเรือน</h3>
              <p className="text-[#2D3436] text-sm leading-relaxed">
                นวัตกรรมการจัดการน้ำทิ้งก่อนลงสู่คลองร้อยสาย ด้วยระบบกรองชีวภาพแบบง่ายที่ชาวบ้านทำเองได้ 
                ช่วยฟื้นฟูระบบนิเวศของสายน้ำ
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

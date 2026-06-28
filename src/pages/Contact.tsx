import React from 'react';
import { MapPin, Phone, Facebook, ArrowRight, MessageSquare } from 'lucide-react';

export default function Contact() {
  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-[#E0E0E0]">
        <div className="grid md:grid-cols-5">
          <div className="md:col-span-2 p-8 md:p-12 bg-[#1B4332] text-white flex flex-col justify-between relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-white/5 blur-2xl"></div>
            <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-48 h-48 rounded-full bg-[#B7E4C7]/10 blur-xl"></div>
            
            <div className="relative z-10">
              <div className="w-12 h-12 bg-[#2D6A4F] rounded-xl flex items-center justify-center mb-6 border border-white/10 shadow-sm">
                <MessageSquare className="text-white" size={24} />
              </div>
              <h1 className="text-3xl font-bold mb-4">ติดต่อชุมชน</h1>
              <p className="text-white/70 mb-10 text-sm leading-relaxed">
                ยินดีต้อนรับสู่ชุมชนบางใบไม้ สอบถามข้อมูลการท่องเที่ยว สินค้าชุมชน หรือติดต่อประสานงาน
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start group">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mr-4 shrink-0 group-hover:bg-[#2D6A4F] transition-colors">
                    <MapPin className="text-[#B7E4C7]" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm mb-1 text-white">ที่ทำการผู้ใหญ่บ้าน หมู่ 3</h3>
                    <p className="text-white/60 text-sm leading-relaxed">ต.บางใบไม้ อ.เมือง<br/>จ.สุราษฎร์ธานี 84000</p>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mr-4 shrink-0 group-hover:bg-[#2D6A4F] transition-colors">
                    <Phone className="text-[#B7E4C7]" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm mb-1 text-white">เบอร์โทรศัพท์</h3>
                    <p className="text-white/60 text-sm">077-123-456 (สำนักงาน)</p>
                    <p className="text-white/60 text-sm">089-123-4567 (สายด่วน)</p>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mr-4 shrink-0 group-hover:bg-[#2D6A4F] transition-colors">
                    <Facebook className="text-[#B7E4C7]" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm mb-1 text-white">Facebook</h3>
                    <p className="text-white/60 text-sm">ท่องเที่ยววิถีชุมชน คลองร้อยสาย</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-3 p-8 md:p-12 flex flex-col justify-center bg-white">
            <h2 className="text-2xl font-bold text-[#1B4332] mb-2">ส่งข้อความถึงเรา</h2>
            <p className="text-[#2D3436] text-sm mb-8 opacity-80">กรอกข้อมูลด้านล่างเพื่อส่งข้อความถึงทีมงานชุมชน</p>
            
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[11px] font-bold text-[#1B4332] uppercase tracking-widest mb-2">ชื่อ - นามสกุล</label>
                  <input type="text" className="w-full bg-[#FDFBF7] border-[#E0E0E0] rounded-lg shadow-sm p-3.5 border focus:ring-[#2D6A4F] focus:border-[#2D6A4F] outline-none text-[#2D3436] text-sm transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-[#1B4332] uppercase tracking-widest mb-2">อีเมล หรือ เบอร์โทร</label>
                  <input type="text" className="w-full bg-[#FDFBF7] border-[#E0E0E0] rounded-lg shadow-sm p-3.5 border focus:ring-[#2D6A4F] focus:border-[#2D6A4F] outline-none text-[#2D3436] text-sm transition-all" placeholder="contact@example.com" />
                </div>
              </div>
              <div>
                <label className="block text-[11px] font-bold text-[#1B4332] uppercase tracking-widest mb-2">หัวข้อเรื่อง</label>
                <input type="text" className="w-full bg-[#FDFBF7] border-[#E0E0E0] rounded-lg shadow-sm p-3.5 border focus:ring-[#2D6A4F] focus:border-[#2D6A4F] outline-none text-[#2D3436] text-sm transition-all" placeholder="ระบุเรื่องที่ต้องการติดต่อ" />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-[#1B4332] uppercase tracking-widest mb-2">ข้อความ</label>
                <textarea rows={5} className="w-full bg-[#FDFBF7] border-[#E0E0E0] rounded-lg shadow-sm p-3.5 border focus:ring-[#2D6A4F] focus:border-[#2D6A4F] outline-none text-[#2D3436] text-sm resize-none transition-all" placeholder="พิมพ์ข้อความของคุณที่นี่..."></textarea>
              </div>
              <button className="w-full py-4 bg-[#1B4332] text-white rounded-lg hover:bg-[#2D6A4F] transition-colors font-bold text-sm shadow-md mt-2 flex justify-center items-center">
                ส่งข้อความ
                <ArrowRight size={16} className="ml-2" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

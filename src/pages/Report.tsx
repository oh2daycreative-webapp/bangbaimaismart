import React, { useState } from 'react';
import { Camera, Send, CheckCircle2 } from 'lucide-react';

export default function Report() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl shadow-sm p-6 md:p-10 max-w-2xl mx-auto border border-gray-100">
        <h1 className="text-3xl font-bold text-[#1B4332] mb-2">แจ้งปัญหา</h1>
        <p className="text-[#2D3436] mb-8 pb-4 border-b border-[#E0E0E0] text-sm">พบเห็นสาธารณูปโภคชำรุด เหตุรำคาญ หรือต้องการความช่วยเหลือ สามารถแจ้งผู้นำชุมชนได้ที่นี่</p>
        
        {submitted ? (
          <div className="bg-[#D8F3DC] border border-[#B7E4C7] text-[#1B4332] p-10 rounded-2xl text-center shadow-sm">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
              <CheckCircle2 size={40} className="text-[#2D6A4F]" />
            </div>
            <h3 className="text-2xl font-bold mb-3">ส่งข้อมูลสำเร็จ</h3>
            <p className="text-[#2D3436] mb-8">ทางชุมชนได้รับเรื่องแจ้งของท่านแล้ว จะดำเนินการตรวจสอบและแก้ไขโดยเร็วที่สุด</p>
            <button 
              onClick={() => setSubmitted(false)}
              className="px-8 py-3 bg-[#1B4332] text-white rounded-lg hover:bg-[#2D6A4F] transition-colors font-bold text-sm shadow-sm"
            >
              แจ้งปัญหาอีกครั้ง
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5 bg-[#FDFBF7] p-6 rounded-xl border border-[#E0E0E0]">
            <div>
              <label className="block text-sm font-bold text-[#1B4332] mb-2">ประเภทปัญหา <span className="text-red-500">*</span></label>
              <select required className="w-full bg-white border-[#E0E0E0] rounded-lg shadow-sm p-3 border focus:ring-[#2D6A4F] focus:border-[#2D6A4F] outline-none text-[#2D3436] text-sm">
                <option value="">เลือกประเภทปัญหา...</option>
                <option value="infrastructure">ถนน/สะพานชำรุด</option>
                <option value="light">ไฟฟ้าส่องสว่างดับ</option>
                <option value="water">น้ำประปาไม่ไหล/ท่อแตก</option>
                <option value="trash">ขยะมูลฝอย/สิ่งปฏิกูล</option>
                <option value="noise">เหตุรำคาญ/เสียงดัง</option>
                <option value="other">อื่นๆ</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-bold text-[#1B4332] mb-2">รายละเอียด <span className="text-red-500">*</span></label>
              <textarea 
                required 
                rows={4} 
                className="w-full bg-white border-[#E0E0E0] rounded-lg shadow-sm p-3 border focus:ring-[#2D6A4F] focus:border-[#2D6A4F] outline-none text-[#2D3436] text-sm resize-none"
                placeholder="ระบุรายละเอียดปัญหาที่พบ สถานที่ใกล้เคียง..."
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-bold text-[#1B4332] mb-2">รูปภาพประกอบ (ถ้ามี)</label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-[#E0E0E0] bg-white border-dashed rounded-lg hover:border-[#2D6A4F] hover:bg-[#D8F3DC]/30 transition-colors cursor-pointer group">
                <div className="space-y-2 text-center">
                  <div className="w-12 h-12 bg-[#FDFBF7] group-hover:bg-white rounded-full flex items-center justify-center mx-auto mb-2 transition-colors">
                    <Camera className="h-6 w-6 text-[#2D6A4F]" />
                  </div>
                  <div className="flex text-sm text-[#2D3436] justify-center">
                    <span className="relative cursor-pointer bg-transparent rounded-md font-bold text-[#2D6A4F]">
                      อัพโหลดรูปภาพ
                    </span>
                  </div>
                  <p className="text-[11px] text-[#2D3436]/60 font-medium">PNG, JPG ไม่เกิน 10MB</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
              <div>
                <label className="block text-sm font-bold text-[#1B4332] mb-2">ชื่อผู้แจ้ง (ไม่บังคับ)</label>
                <input type="text" className="w-full bg-white border-[#E0E0E0] rounded-lg shadow-sm p-3 border focus:ring-[#2D6A4F] focus:border-[#2D6A4F] outline-none text-[#2D3436] text-sm" />
              </div>
              <div>
                <label className="block text-sm font-bold text-[#1B4332] mb-2">เบอร์โทรศัพท์ (ไม่บังคับ)</label>
                <input type="tel" className="w-full bg-white border-[#E0E0E0] rounded-lg shadow-sm p-3 border focus:ring-[#2D6A4F] focus:border-[#2D6A4F] outline-none text-[#2D3436] text-sm" />
              </div>
            </div>

            <div className="pt-6 border-t border-[#E0E0E0] mt-6">
              <button type="submit" className="w-full flex justify-center py-3.5 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-white bg-[#1B4332] hover:bg-[#2D6A4F] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2D6A4F]">
                <Send size={18} className="mr-2" />
                ส่งข้อมูล
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

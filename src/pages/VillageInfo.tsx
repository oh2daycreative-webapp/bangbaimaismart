import React from 'react';
import { Waves, Trees, Megaphone } from 'lucide-react';

export default function VillageInfo() {
  return (
    <div className="space-y-6">
      <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg group">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
        <img 
          src="https://bangbaimaismart.pages.dev/assets/.aistudio/images/hero01.jpg?auto=format&fit=crop&q=80&w=2000" 
          alt="Bang Bai Mai Village" 
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute bottom-0 left-0 p-8 z-20">
          <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-xs mb-3 inline-block border border-white/30">ข้อมูลหมู่บ้าน</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 underline decoration-[#B7E4C7] decoration-4 underline-offset-8">ชุมชนบางใบไม้</h1>
        </div>
      </div>
      
      <div className="bg-white p-6 md:p-10 rounded-2xl border border-gray-100 shadow-sm">
        <h2 className="text-2xl font-bold text-[#1B4332] mb-4 border-l-4 border-[#2D6A4F] pl-3">ประวัติความเป็นมา</h2>
        <p className="text-[#2D3436] leading-relaxed mb-6 text-lg">
          ชุมชนบางใบไม้ หรือที่รู้จักกันในนาม "คลองร้อยสาย" เป็นชุมชนเก่าแก่ริมแม่น้ำตาปี ในอำเภอเมือง จังหวัดสุราษฎร์ธานี 
          มีลำคลองเล็กๆ จำนวนมากเชื่อมต่อกันจนเป็นเครือข่ายเหมือนใยแมงมุม วิถีชีวิตของผู้คนผูกพันกับสายน้ำและธรรมชาติมาอย่างยาวนาน 
          โดยเฉพาะต้นจากที่เติบโตริมฝั่งคลอง ซึ่งเป็นพืชสารพัดประโยชน์ที่หล่อเลี้ยงชีวิตชาวบ้านมาหลายชั่วอายุคน
        </p>
        
        <div className="grid md:grid-cols-3 gap-4 mt-8">
          <div className="bg-[#FDFBF7] p-6 rounded-xl border border-[#E0E0E0] shadow-sm hover:border-[#2D6A4F] transition-colors">
            <h3 className="text-lg font-bold text-[#2D6A4F] mb-3 flex items-center gap-3">
              <div className="w-10 h-10 bg-[#D8F3DC] rounded-full flex items-center justify-center text-[#2D6A4F]">
                <Waves size={18} />
              </div>
              วิถีชีวิต
            </h3>
            <p className="text-[#2D3436] text-sm leading-relaxed">พึ่งพาอาศัยธรรมชาติ ใช้เรือเป็นพาหนะหลักในการสัญจร และทำเกษตรกรรมริมคลอง</p>
          </div>
          <div className="bg-[#FDFBF7] p-6 rounded-xl border border-[#E0E0E0] shadow-sm hover:border-[#2D6A4F] transition-colors">
            <h3 className="text-lg font-bold text-[#2D6A4F] mb-3 flex items-center gap-3">
              <div className="w-10 h-10 bg-[#B7E4C7] rounded-full flex items-center justify-center text-[#2D6A4F]">
                <Trees size={18} />
              </div>
              ลักษณะภูมิประเทศ
            </h3>
            <p className="text-[#2D3436] text-sm leading-relaxed">ที่ราบลุ่มริมแม่น้ำ มีลำคลองสาขาจำนวนมาก ป่าชายเลนและป่าจากอุดมสมบูรณ์</p>
          </div>
          <div className="bg-[#FDFBF7] p-6 rounded-xl border border-[#E0E0E0] shadow-sm hover:border-[#2D6A4F] transition-colors">
            <h3 className="text-lg font-bold text-[#2D6A4F] mb-3 flex items-center gap-3">
              <div className="w-10 h-10 bg-[#95D5B2] rounded-full flex items-center justify-center text-[#1B4332]">
                <Megaphone size={18} />
              </div>
              คำขวัญชุมชน
            </h3>
            <p className="text-[#2D3436] text-sm leading-relaxed">คลองร้อยสายสวยงาม นามลือเลื่องเมืองคนดี ถิ่นนี้บางใบไม้</p>
          </div>
        </div>
      </div>
    </div>
  );
}

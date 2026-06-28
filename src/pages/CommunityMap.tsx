import React from 'react';
import { MapPin } from 'lucide-react';

export default function CommunityMap() {
  return (
    <div className="space-y-6 h-full">
      <div className="bg-white rounded-2xl shadow-sm p-6 md:p-10 h-[calc(100vh-8rem)] min-h-[600px] flex flex-col border border-gray-100">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-[#1B4332]">แผนที่ชุมชน</h1>
          <button className="flex items-center bg-[#2D6A4F] text-white px-4 py-2 rounded-lg hover:bg-[#1B4332] transition-colors text-sm font-bold shadow-sm">
            <MapPin size={16} className="mr-2" />
            ขอเส้นทาง
          </button>
        </div>
        
        <div className="flex-grow rounded-xl overflow-hidden border border-[#E0E0E0] relative bg-[#FDFBF7]">
          {/* Embed Google Map for Surat Thani / Bang Bai Mai */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15732.146200236402!2d99.317585!3d9.144455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3054065cc3ec7f75%3A0x40223bc2c382450!2sBang%20Bai%20Mai%2C%20Mueang%20Surat%20Thani%20District%2C%20Surat%20Thani%2084000!5e0!3m2!1sen!2sth!4v1700000000000!5m2!1sen!2sth" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Bang Bai Mai Map"
            className="absolute inset-0"
          ></iframe>
        </div>
        
        <div className="mt-6 flex flex-wrap gap-4 text-sm font-medium">
          <div className="flex items-center bg-[#FDFBF7] px-3 py-1.5 rounded-full border border-[#E0E0E0]">
            <span className="w-3 h-3 rounded-full bg-[#2D6A4F] mr-2"></span> แหล่งท่องเที่ยว
          </div>
          <div className="flex items-center bg-[#FDFBF7] px-3 py-1.5 rounded-full border border-[#E0E0E0]">
            <span className="w-3 h-3 rounded-full bg-[#B7E4C7] mr-2"></span> ท่าเรือ
          </div>
          <div className="flex items-center bg-[#FDFBF7] px-3 py-1.5 rounded-full border border-[#E0E0E0]">
            <span className="w-3 h-3 rounded-full bg-[#1B4332] mr-2"></span> ร้านค้าชุมชน
          </div>
        </div>
      </div>
    </div>
  );
}

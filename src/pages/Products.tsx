import React from 'react';
import { ShoppingCart } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'น้ำมันมะพร้าวสกัดเย็น (250ml)',
    description: 'สกัดจากมะพร้าวอินทรีย์ 100% บำรุงผิวและผม',
    price: 150,
    image: 'https://images.unsplash.com/photo-1620015525531-1f9e9ec46875?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 2,
    name: 'น้ำส้มสายชูหมักจากน้ำตาลจาก',
    description: 'หมักวิธีธรรมชาติ รสชาติกลมกล่อม',
    price: 85,
    image: 'https://images.unsplash.com/photo-1589327914441-11883be121da?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 3,
    name: 'กระเป๋าสานใบจาก',
    description: 'งานแฮนด์เมด ทนทาน ดีไซน์ร่วมสมัย',
    price: 350,
    image: 'https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 4,
    name: 'สบู่สมุนไพรน้ำมันมะพร้าว',
    description: 'สูตรธรรมชาติ ลดการระคายเคืองผิว',
    price: 50,
    image: 'https://images.unsplash.com/photo-1600857062241-98e5dba7f214?auto=format&fit=crop&q=80&w=600',
  }
];

export default function Products() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-6 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-[#1B4332]">ผลิตภัณฑ์ชุมชน</h1>
          <p className="text-[#2D3436] mt-2">สนับสนุนสินค้าท้องถิ่น รายได้คืนสู่ชุมชน</p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col group hover:border-[#2D6A4F] hover:shadow-md transition-all">
            <div className="h-48 overflow-hidden relative bg-[#FDFBF7]">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-5 flex flex-col flex-grow bg-white">
              <h3 className="text-lg font-bold text-[#1B4332] mb-1">{product.name}</h3>
              <p className="text-sm text-[#2D3436] mb-4 flex-grow opacity-80">{product.description}</p>
              <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-50">
                <span className="text-xl font-bold text-[#2D6A4F]">฿{product.price}</span>
                <button className="bg-[#D8F3DC] text-[#2D6A4F] hover:bg-[#2D6A4F] hover:text-white p-2 rounded-lg transition-colors">
                  <ShoppingCart size={20} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { MENU_ITEMS, PageId } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  activePage: PageId;
  setActivePage: (page: PageId) => void;
}

export default function Layout({ children, activePage, setActivePage }: LayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FDFBF7] flex flex-col md:flex-row font-sans text-[#2D3436]">
      {/* Mobile Header */}
      <div className="md:hidden bg-white text-[#1B4332] p-4 flex justify-between items-center sticky top-0 z-50 border-b border-[#E0E0E0]">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#2D6A4F] rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">บ</span>
          </div>
          <h1 className="text-xl font-bold tracking-tight">ชุมชนบางใบไม้</h1>
        </div>
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar Navigation */}
      <nav className={`
        ${isMobileMenuOpen ? 'block' : 'hidden'} 
        md:block w-full md:w-64 bg-[#1B4332] text-white/80 md:shrink-0
        md:sticky md:top-0 md:h-screen md:overflow-y-auto z-40
        absolute md:relative
      `}>
        <div className="p-6 hidden md:block border-b border-white/10 mb-2">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-[#2D6A4F] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">บ</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-white tracking-tight">ชุมชนบางใบไม้</h1>
            </div>
          </div>
          <p className="text-[10px] uppercase tracking-widest text-white/50">Bang Baimai Digital Hub</p>
        </div>
        
        <div className="py-4 md:py-2 flex flex-col gap-1 px-3">
          {MENU_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = activePage === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActivePage(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`
                  w-full flex items-center px-4 py-3 rounded-xl transition-colors text-left
                  ${isActive 
                    ? 'bg-[#2D6A4F] text-white shadow-sm' 
                    : 'hover:bg-white/10 hover:text-white'
                  }
                `}
              >
                <Icon size={20} className={`mr-3 ${isActive ? 'text-[#B7E4C7]' : 'text-white/60'}`} />
                <span className="font-medium text-sm">{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 overflow-x-hidden pt-4 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto mt-2 md:mt-4">
          {children}
        </div>
      </main>
      
      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </div>
  );
}

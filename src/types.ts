import {
  Info,
  Lightbulb,
  BookOpen,
  ShoppingBag,
  MapPin,
  Map,
  Calendar,
  Newspaper,
  AlertTriangle,
  Phone,
} from 'lucide-react';

export const MENU_ITEMS = [
  { id: 'info', label: 'ข้อมูลหมู่บ้าน', icon: Info },
  { id: 'innovation', label: 'นวัตกรรมชุมชน', icon: Lightbulb },
  { id: 'wisdom', label: 'ภูมิปัญญาท้องถิ่น', icon: BookOpen },
  { id: 'products', label: 'ผลิตภัณฑ์ชุมชน', icon: ShoppingBag },
  { id: 'attractions', label: 'แหล่งท่องเที่ยว', icon: MapPin },
  { id: 'map', label: 'แผนที่ชุมชน', icon: Map },
  { id: 'calendar', label: 'ปฎิทินกิจกรรม', icon: Calendar },
  { id: 'news', label: 'ข่าวประชาสัมพันธ์', icon: Newspaper },
  { id: 'report', label: 'แจ้งปัญหา', icon: AlertTriangle },
  { id: 'contact', label: 'ติดต่อชุมชน', icon: Phone },
] as const;

export type PageId = (typeof MENU_ITEMS)[number]['id'];

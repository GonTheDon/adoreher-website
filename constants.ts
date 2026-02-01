import { NavItem } from './types';

export const WHATSAPP_NUMBER = '919057723773';
export const WHATSAPP_MESSAGE = 'Hello Adore Her 💕 \n\nI want to turn my memories and feelings into a beautiful, personalized animated website for the one I adore.\n\nI’m looking for something heartfelt, private, and truly special.\n\nPlease help me begin this journey. ❤️';

export const getWhatsAppLink = () => {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Examples', path: '/examples' },
  { label: 'Our Story', path: '/story' },
  { label: 'Services', path: '/services' },
  { label: 'Pricing', path: '/pricing' },
  { label: 'Gifts', path: '/gifts' },
];

export const PLACEHOLDER_IMAGES = {
  hero: "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?q=80&w=2500&auto=format&fit=crop",
  couple: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=1000&auto=format&fit=crop",
  family: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=1000&auto=format&fit=crop",
  gift: "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=1000&auto=format&fit=crop",
  distance: "https://images.unsplash.com/photo-1529619768328-e37af76c6fe5?q=80&w=1000&auto=format&fit=crop",
};
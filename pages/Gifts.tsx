import React from 'react';
import Button from '../components/ui/Button';
import { PLACEHOLDER_IMAGES } from '../constants';
import { Gift, QrCode, Lightbulb } from 'lucide-react';

const Gifts: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl md:text-6xl mb-6">Physical Keepsakes</h1>
          <p className="font-sans text-xl text-brand-dark/60 max-w-2xl mx-auto">
            Bridge the digital and physical world. Add these to your website order.
          </p>
        </div>

        <div className="space-y-20">
          
          {/* Item 1 */}
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <img src="https://images.unsplash.com/photo-1563293883-8a3c42875154?q=80&w=1000&auto=format&fit=crop" alt="QR Card" className="rounded-2xl shadow-2xl w-full h-[400px] object-cover" />
            </div>
            <div className="w-full md:w-1/2">
              <div className="flex items-center gap-3 text-brand-pink mb-4">
                <QrCode className="w-6 h-6" />
                <span className="font-bold tracking-wider uppercase text-sm">Best Seller</span>
              </div>
              <h2 className="font-serif text-4xl font-bold mb-6">The "Scan Me" Card</h2>
              <p className="font-sans text-lg text-brand-dark/70 mb-8">
                A premium, heavy-stock card with a custom gold-foil QR code. When they scan it, their custom memory website opens instantly. The perfect way to present your digital gift physically.
              </p>
              <div className="flex items-center gap-4">
                <span className="text-3xl font-bold text-brand-dark">₹199</span>
                <Button size="sm">Add to Order</Button>
              </div>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="w-full md:w-1/2">
              <img src="https://images.unsplash.com/photo-1507915135761-41a0a222c709?q=80&w=1000&auto=format&fit=crop" alt="Lamp" className="rounded-2xl shadow-2xl w-full h-[400px] object-cover" />
            </div>
            <div className="w-full md:w-1/2">
              <div className="flex items-center gap-3 text-brand-gold mb-4">
                <Lightbulb className="w-6 h-6" />
                <span className="font-bold tracking-wider uppercase text-sm">New Arrival</span>
              </div>
              <h2 className="font-serif text-4xl font-bold mb-6">NFC Memory Lamp</h2>
              <p className="font-sans text-lg text-brand-dark/70 mb-8">
                A beautiful aesthetic desk lamp. Tap your phone on the base, and your memory website opens automatically. No apps needed. A magical interaction.
              </p>
              <div className="flex items-center gap-4">
                <span className="text-3xl font-bold text-brand-dark">₹999</span>
                <Button size="sm">Order Now</Button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Gifts;
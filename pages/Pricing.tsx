import React from 'react';
import { Check, Star } from 'lucide-react';
import Button from '../components/ui/Button';
import { PricePlan } from '../types';

const PLANS: PricePlan[] = [
  {
    name: "Basic Memory",
    price: "₹199",
    description: "Perfect for a simple, beautiful surprise.",
    color: "bg-brand-blush",
    features: [
      "Single Page Scroll",
      "Up to 15 Photos",
      "Background Music",
      "Lifetime Hosting (1 Year)",
      "Mobile Friendly"
    ]
  },
  {
    name: "Signature Story",
    price: "₹499",
    isPopular: true,
    description: "Our most loved plan. Fully custom.",
    color: "bg-brand-pink",
    features: [
      "Multi-section Design",
      "Unlimited Photos",
      "Custom Written Poem/Note",
      "Voice Note Integration",
      "QR Code for Gifting",
      "Lifetime Hosting (Forever)",
      "Priority Delivery (2 Days)"
    ]
  },
  {
    name: "Interactive World",
    price: "₹1499",
    description: "A complete digital experience.",
    color: "bg-brand-dark",
    features: [
      "Multiple Pages",
      "Interactive Timeline",
      "Secret Password Protection",
      "Quiz / Games Section",
      "Video Backgrounds",
      "Custom Domain (.com)",
      "24/7 Edit Support"
    ]
  }
];

const Pricing: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-ivory pt-24 pb-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl md:text-6xl mb-6">Transparent Pricing</h1>
          <p className="font-sans text-xl text-brand-dark/60 max-w-2xl mx-auto">
            We don't charge for love, only for the effort to craft it perfectly.
            <br/>No hidden fees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {PLANS.map((plan, i) => (
            <div 
              key={i} 
              className={`relative rounded-3xl p-8 transition-transform hover:-translate-y-2 duration-300 ${
                plan.isPopular ? 'bg-white shadow-2xl border-2 border-brand-pink' : 'bg-white shadow-lg border border-transparent'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-orange text-white px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1 shadow-lg">
                  <Star className="w-3 h-3 fill-current" /> MOST LOVED
                </div>
              )}
              
              <h3 className="font-serif text-3xl font-bold mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className={`text-4xl font-bold ${plan.isPopular ? 'text-brand-pink' : 'text-brand-dark'}`}>{plan.price}</span>
                <span className="text-brand-dark/40 text-sm">/one-time</span>
              </div>
              <p className="font-sans text-brand-dark/60 mb-8 border-b border-brand-dark/10 pb-8">
                {plan.description}
              </p>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 font-sans text-brand-dark/80">
                    <Check className="w-5 h-5 text-green-500 shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={plan.isPopular ? 'primary' : 'outline'} 
                className="w-full"
              >
                Choose {plan.name}
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="font-sans text-brand-dark/60 mb-4">Need something specific?</p>
          <a href="#" className="font-serif text-xl underline decoration-brand-pink underline-offset-4 hover:text-brand-pink">
            Talk to us for a custom quote
          </a>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
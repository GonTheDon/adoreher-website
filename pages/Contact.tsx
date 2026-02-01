import React from 'react';
import Button from '../components/ui/Button';
import { WHATSAPP_NUMBER } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center pt-20">
      <div className="container mx-auto px-6 text-center">
        <h1 className="font-serif text-5xl md:text-7xl mb-8">Let's Talk</h1>
        <p className="font-sans text-xl text-brand-dark/60 mb-12 max-w-xl mx-auto">
          We primarily operate on WhatsApp to ensure fast, personal, and real-time communication.
        </p>
        
        <div className="bg-brand-ivory p-12 rounded-3xl max-w-2xl mx-auto shadow-xl">
          <p className="mb-2 text-sm uppercase tracking-widest font-bold text-brand-pink">Direct Line</p>
          <p className="font-serif text-4xl md:text-5xl font-bold mb-8 text-brand-dark">+{WHATSAPP_NUMBER}</p>
          <Button size="lg" className="w-full md:w-auto px-12">Chat on WhatsApp</Button>
          <p className="mt-6 text-sm text-brand-dark/40">
            Average response time: 10 minutes
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Instagram, Facebook, Twitter } from 'lucide-react';
import { getWhatsAppLink } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-blush/30 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <Heart className="w-6 h-6 text-brand-pink" fill="currentColor" />
              <span className="font-serif text-2xl font-bold text-brand-dark">Adore Her</span>
            </Link>
            <p className="text-brand-dark/70 font-sans max-w-md mb-8 leading-relaxed">
              We build handcrafted digital homes for your most precious memories. 
              Because love isn't just a feeling, it's a story worth preserving forever.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-white rounded-full text-brand-pink hover:bg-brand-pink hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white rounded-full text-brand-pink hover:bg-brand-pink hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white rounded-full text-brand-pink hover:bg-brand-pink hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-serif text-lg font-bold mb-6 text-brand-dark">Explore</h4>
            <ul className="space-y-4 font-sans text-brand-dark/70">
              <li><Link to="/examples" className="hover:text-brand-pink transition-colors">Live Examples</Link></li>
              <li><Link to="/story" className="hover:text-brand-pink transition-colors">Our Story</Link></li>
              <li><Link to="/pricing" className="hover:text-brand-pink transition-colors">Pricing & Plans</Link></li>
              <li><Link to="/gifts" className="hover:text-brand-pink transition-colors">Custom Gifts</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-bold mb-6 text-brand-dark">Support</h4>
            <ul className="space-y-4 font-sans text-brand-dark/70">
              <li><a href={getWhatsAppLink()} target="_blank" rel="noreferrer" className="hover:text-brand-pink transition-colors">Contact via WhatsApp</a></li>
              <li><Link to="/privacy" className="hover:text-brand-pink transition-colors">Privacy & Safety</Link></li>
              <li><Link to="/contact" className="hover:text-brand-pink transition-colors">Help Center</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-dark/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-brand-dark/50">
          <p>© {new Date().getFullYear()} Adore Her. All rights reserved.</p>
          <p className="mt-2 md:mt-0 flex items-center">
            Made with <Heart className="w-3 h-3 mx-1 text-brand-pink" fill="currentColor" /> for lovers everywhere.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
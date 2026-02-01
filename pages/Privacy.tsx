import React from 'react';
import { Shield, Trash2, Key } from 'lucide-react';

const Privacy: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-ivory pt-24 pb-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="font-serif text-4xl md:text-5xl mb-12 text-center">Your Privacy & Safety</h1>

        <div className="space-y-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <div className="flex items-start gap-4">
              <div className="bg-brand-blush p-3 rounded-full text-brand-pink">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold mb-3">Ownership of Content</h3>
                <p className="font-sans text-brand-dark/70">
                  You retain full ownership of all photos, videos, and text you share with us. We use them solely for the purpose of building your website. We do not use your personal photos for our marketing without explicit written consent.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <div className="flex items-start gap-4">
              <div className="bg-brand-blush p-3 rounded-full text-brand-pink">
                <Key className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold mb-3">Password Protection</h3>
                <p className="font-sans text-brand-dark/70">
                  We highly recommend password-protecting your memory website. This ensures that even if the link is shared, only people with the specific key can access the personal moments inside.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <div className="flex items-start gap-4">
              <div className="bg-brand-blush p-3 rounded-full text-brand-pink">
                <Trash2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold mb-3">Right to Delete</h3>
                <p className="font-sans text-brand-dark/70">
                  If you break up, or simply want the site taken down, just message us from the registered number. We will permanently delete the website and all associated data within 24 hours. No questions asked.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center text-sm opacity-60">
          <p>We do not accept intimate or explicit content (NSFW). Adore Her creates wholesome, romantic, and emotional experiences suitable for general viewing by partners and families.</p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
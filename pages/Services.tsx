import React from 'react';
import { motion } from 'framer-motion';
import { Code, PenTool, Globe, Lock, Music, Video } from 'lucide-react';
import Button from '../components/ui/Button';

const Services: React.FC = () => {
  const services = [
    { icon: Globe, title: "Static Memory Websites", desc: "Elegant, single-page sites that tell a linear story with photos and text." },
    { icon: Code, title: "Interactive Experiences", desc: "Quizzes, timelines, map integrations, and hidden messages revealed on click." },
    { icon: PenTool, title: "Custom Writing", desc: "Struggling with words? Our in-house writers craft poems and letters based on your inputs." },
    { icon: Lock, title: "Privacy Protection", desc: "Password-protected pages so only you and your loved one can access the memories." },
    { icon: Music, title: "Audio & Playlist", desc: "Embed their favorite Spotify songs or upload your own voice notes to play automatically." },
    { icon: Video, title: "Video Tributes", desc: "We edit your raw clips into a cinematic montage embedded directly into the site." },
  ];

  return (
    <div className="min-h-screen bg-brand-ivory pt-24 pb-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h1 className="font-serif text-5xl md:text-6xl mb-6">What We Build</h1>
          <p className="font-sans text-xl text-brand-dark/60 max-w-2xl mx-auto">
            More than just templates. We provide a full suite of creative services to make the gift perfect.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-brand-pink/20"
            >
              <div className="w-14 h-14 bg-brand-blush text-brand-pink rounded-xl flex items-center justify-center mb-6">
                <s.icon className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl font-bold mb-4">{s.title}</h3>
              <p className="font-sans text-brand-dark/70 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 bg-brand-dark text-white rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="font-serif text-4xl mb-6">Not sure what you need?</h2>
            <p className="font-sans text-white/70 mb-8 max-w-xl mx-auto">
              Just chat with us. Tell us your budget and your idea, and we will recommend the best package for you.
            </p>
            <Button variant="primary">Consult for Free</Button>
          </div>
          {/* Decorative circles */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-brand-pink/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-gold/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>
      </div>
    </div>
  );
};

export default Services;
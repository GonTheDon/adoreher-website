import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';

const Story: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      <div className="container mx-auto px-6 max-w-4xl">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-brand-pink font-bold tracking-widest uppercase text-sm mb-4 block">Our Philosophy</span>
          <h1 className="font-serif text-5xl md:text-7xl mb-8 leading-tight">
            Designed for the <br/><span className="italic text-brand-gold">hopeless romantics</span>.
          </h1>
        </motion.div>

        <div className="font-serif text-xl md:text-2xl leading-relaxed text-brand-dark/80 space-y-8 first-letter:text-5xl first-letter:font-bold first-letter:text-brand-pink first-letter:mr-1 first-letter:float-left">
          <p>
            It started with a simple thought. Why do we keep our most precious memories locked inside scrolling galleries on our phones? Photos get buried. Messages get deleted. The "feeling" fades.
          </p>
          <p>
            Adore Her was born out of a desire to create a permanent sanctuary for affection. We realized that a custom website is the modern-day equivalent of a handwritten letter or a compiled scrapbook—but better. It can play music. It can show videos. It can be shared with the world, or kept as a secret between two people.
          </p>
          <p>
             We are a small team of designers, developers, and writers who genuinely care about your story. When you place an order, you aren't talking to a bot. You are talking to a human who wants to know: <em>"What makes them smile? What is your song? What do you want to tell them?"</em>
          </p>
          <p>
            This isn't just code. It's digital architecture for love.
          </p>
        </div>

        <div className="mt-16 p-8 bg-brand-ivory rounded-2xl border-l-4 border-brand-pink">
          <h3 className="font-serif text-2xl font-bold mb-4">Our Promise</h3>
          <p className="font-sans text-lg opacity-80 mb-6">
            We promise to treat your memories with the same respect we would treat our own. Your data is private. Your story is safe. And the result will be beautiful.
          </p>
          <Button variant="secondary" size="sm">Talk to Founder</Button>
        </div>

      </div>
    </div>
  );
};

export default Story;
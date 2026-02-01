import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExampleProject } from '../types';
import Button from '../components/ui/Button';
import { PLACEHOLDER_IMAGES } from '../constants';

const PROJECTS: ExampleProject[] = [
  { id: '1', title: 'Aarav & Meera', category: 'Couple', description: 'A scrollable timeline of their 7-year relationship with Spotify integration.', image: PLACEHOLDER_IMAGES.couple },
  { id: '2', title: 'Happy 50th Maa', category: 'Family', description: 'Video compilation from 20 relatives across the globe.', image: PLACEHOLDER_IMAGES.family },
  { id: '3', title: 'Miles Apart', category: 'Distance', description: 'Interactive map showing their travel plans and countdowns.', image: PLACEHOLDER_IMAGES.distance },
  { id: '4', title: 'Proposal Site', category: 'Couple', description: 'A "Will You Marry Me?" hidden at the end of a photo gallery.', image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=1000&auto=format&fit=crop" },
  { id: '5', title: 'Bestie Forever', category: 'Birthday', description: 'Funny memes and sentimental letters for a best friend.', image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1000&auto=format&fit=crop" },
];

const Examples: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <div className="min-h-screen bg-brand-ivory pt-24 pb-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl md:text-6xl mb-6">Our Work</h1>
          <p className="font-sans text-xl text-brand-dark/60 max-w-2xl mx-auto">
            Each website is unique, just like the story it holds. Browse through our favorite creations.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['All', 'Couple', 'Family', 'Birthday', 'Distance'].map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-sans transition-all ${
                filter === cat 
                  ? 'bg-brand-pink text-white shadow-lg' 
                  : 'bg-white text-brand-dark hover:bg-brand-blush'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                key={project.id}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="h-64 overflow-hidden relative group">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Button size="sm" variant="primary">View Demo</Button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-serif text-2xl font-bold">{project.title}</h3>
                    <span className="text-xs uppercase font-bold tracking-wider text-brand-pink bg-brand-pink/10 px-2 py-1 rounded">{project.category}</span>
                  </div>
                  <p className="font-sans text-brand-dark/70 mb-4 h-12">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-20 text-center bg-white p-12 rounded-3xl shadow-xl border border-brand-pink/20">
          <h3 className="font-serif text-3xl mb-4">Want something similar?</h3>
          <p className="mb-8 font-sans text-brand-dark/60">We can recreate any of these styles for your story.</p>
          <Button size="lg">I Want This</Button>
        </div>
      </div>
    </div>
  );
};

export default Examples;
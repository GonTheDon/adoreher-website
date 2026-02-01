import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import ParticleBackground from '../components/ui/ParticleBackground';
import { PLACEHOLDER_IMAGES } from '../constants';
import { ArrowRight, Star, Heart, Lock, PenTool, Layout } from 'lucide-react';

const Home: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div className="w-full overflow-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <ParticleBackground />
        
        <div className="container mx-auto relative z-10 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-tight md:leading-[1.1] text-brand-dark mb-8">
              Some memories deserve more than photos. <br />
              <span className="text-brand-pink italic">They deserve a home.</span>
            </h1>
            
            <p className="font-sans text-lg md:text-2xl text-brand-dark/70 mb-12 max-w-2xl mx-auto leading-relaxed">
              We build handcrafted, story-driven memory websites and gifts for the people you adore most in this world.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <Button size="lg" variant="primary">Create a Memory</Button>
              <Link to="/examples">
                <Button size="lg" variant="outline" isWhatsApp={false}>See Live Examples</Button>
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div 
          style={{ opacity: opacityFade }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-brand-dark/40"
        >
          <span className="text-xs tracking-widest uppercase">Scroll to feel</span>
          <div className="w-[1px] h-12 bg-brand-dark/20" />
        </motion.div>
      </section>

      {/* --- LIVE EXAMPLES TEASER --- */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Real Love Stories</h2>
            <p className="font-sans text-brand-dark/60">Not screenshots. These are real moments we've built.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Rahul & Simran", type: "Anniversary", img: PLACEHOLDER_IMAGES.couple, desc: "A 5-year journey map with voice notes." },
              { title: "For Maa", type: "Birthday", img: PLACEHOLDER_IMAGES.family, desc: "Video messages from the whole family." },
              { title: "Long Distance", type: "Virtual Home", img: PLACEHOLDER_IMAGES.distance, desc: "Interactive time-zone love letters." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group relative h-[500px] rounded-2xl overflow-hidden cursor-pointer shadow-xl"
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all z-10" />
                <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                
                <div className="absolute bottom-0 left-0 right-0 p-8 z-20 text-white translate-y-4 group-hover:translate-y-0 transition-transform">
                  <span className="text-sm tracking-wider uppercase bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">{item.type}</span>
                  <h3 className="font-serif text-3xl mt-4 mb-2">{item.title}</h3>
                  <p className="font-sans opacity-90 mb-6">{item.desc}</p>
                  <Button size="sm" variant="secondary" className="w-full">Open Demo</Button>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/examples" className="inline-flex items-center text-brand-pink hover:text-brand-orange font-serif text-xl transition-colors border-b border-brand-pink pb-1">
              View All Examples <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* --- EMOTIONAL STORY --- */}
      <section className="py-32 bg-brand-ivory relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-blush/20 blur-3xl rounded-l-full" />
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
          <motion.div 
            style={{ y: yParallax }}
            className="w-full md:w-1/2 h-[600px] relative"
          >
            <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1000&auto=format&fit=crop" alt="Emotions" className="w-full h-full object-cover rounded-none md:rounded-r-3xl shadow-2xl" />
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-gold/10 backdrop-blur-md p-8 flex items-center justify-center text-center rounded-full">
              <p className="font-serif italic text-xl text-brand-dark">"We don't sell templates.<br/>We frame emotions."</p>
            </div>
          </motion.div>

          <div className="w-full md:w-1/2">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <h2 className="font-serif text-5xl md:text-6xl text-brand-dark mb-10 leading-tight">
                Why we do this?
              </h2>
              <div className="space-y-6 font-sans text-lg text-brand-dark/80 leading-relaxed">
                <p>
                  In a world of vanishing Instagram stories and buried WhatsApp chats, true feelings often get lost in the digital noise.
                </p>
                <p>
                  At <span className="font-bold text-brand-pink">Adore Her</span>, we believe love isn't just about the "I love you". It's about the late-night songs, the unplanned trips, the inside jokes, and the quiet moments that built you.
                </p>
                <p>
                  We are not an automated tool. We are designers, writers, and romantics. You tell us your story, and we weave it into a digital tapestry that lives forever.
                </p>
              </div>
              <div className="mt-12">
                <Button variant="outline" isWhatsApp={false} onClick={() => window.location.hash = '#process'}>See How It Works</Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- FEATURES / DIFFERENTIATORS --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: PenTool, title: "Hand Written", text: "Our poets write custom messages for your partner." },
              { icon: Layout, title: "Custom Design", text: "Colors and layout match their personality." },
              { icon: Lock, title: "100% Private", text: "Password protected. You own the data." },
              { icon: Heart, title: "Forever Live", text: "Lifetime hosting options so memories never fade." }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6 rounded-2xl hover:bg-brand-ivory transition-colors duration-300"
              >
                <div className="w-16 h-16 bg-brand-pink/10 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-pink">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="font-sans text-brand-dark/60">{feature.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PROCESS (HOW IT WORKS) --- */}
      <section id="process" className="py-24 bg-brand-dark text-white relative">
        <div className="container mx-auto px-6">
          <h2 className="font-serif text-4xl md:text-5xl text-center mb-20 text-brand-ivory">How We Build Magic</h2>
          
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-brand-gold/30 hidden md:block" />
            
            {[
              { step: "01", title: "Say Hello", text: "Click WhatsApp. Tell us who you want to surprise." },
              { step: "02", title: "Share Memories", text: "Send us photos, voice notes, and your story. We listen." },
              { step: "03", title: "We Create", text: "Our designers and writers build the website from scratch." },
              { step: "04", title: "The Reveal", text: "You get a private link + a QR code card to gift them." }
            ].map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ margin: "-100px" }}
                className={`flex items-center gap-8 mb-16 md:mb-0 ${i % 2 === 0 ? 'md:flex-row-reverse md:translate-x-6' : 'md:flex-row md:-translate-x-6'}`}
              >
                <div className={`w-full md:w-1/2 p-8 ${i % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                  <span className="text-6xl font-display text-brand-gold opacity-50 block mb-2">{step.step}</span>
                  <h3 className="text-3xl font-serif mb-4">{step.title}</h3>
                  <p className="text-brand-ivory/60 font-sans text-lg">{step.text}</p>
                </div>
                <div className="hidden md:block w-4 h-4 bg-brand-gold rounded-full absolute left-1/2 -translate-x-1/2" />
                <div className="hidden md:block w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PRICING TEASER --- */}
      <section className="py-24 bg-gradient-romantic text-center">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-serif text-4xl mb-6">Priceless Memories, Affordable Plans</h2>
          <p className="font-sans text-xl mb-10 text-brand-dark/70">
            Starting from just <span className="font-bold text-brand-pink">₹149</span>. 
            Because love shouldn't be expensive.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/pricing">
              <Button size="lg" variant="primary" isWhatsApp={false}>View Pricing & Plans</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="min-h-[60vh] flex items-center justify-center relative bg-brand-ivory overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=2000&auto=format&fit=crop" className="w-full h-full object-cover opacity-10" alt="Background" />
        </div>
        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-5xl md:text-7xl mb-8 leading-tight">
              One day, people may forget words.<br />
              <span className="text-brand-pink">Make sure they never forget the feeling.</span>
            </h2>
            <Button size="lg" className="shadow-2xl text-xl px-12 py-6">Start Your Story Now</Button>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Home;
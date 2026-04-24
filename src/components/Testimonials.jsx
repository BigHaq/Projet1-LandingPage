import React from 'react';

const TestimonialCard = ({ name, role, quote, hashtag, image, icon }) => {
  return (
    <div className="glass-card neon-border rounded-xl p-8 flex flex-col md:flex-row gap-6 relative overflow-hidden group hover:scale-[1.01] transition-transform duration-300">
      <div className="flex-shrink-0">
        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-neon-green/30">
          <img alt={name} className="w-full h-full object-cover" src={image} />
        </div>
      </div>
      <div className="flex-grow">
        <div className="flex gap-1 mb-4">
          {[1, 2, 3, 4, 5].map((s) => (
            <span key={s} className="material-symbols-outlined text-neon-green text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
          ))}
        </div>
        <blockquote className="font-['Bebas_Neue'] text-3xl md:text-4xl uppercase tracking-tight text-white mb-4 italic">
          "{quote}"
        </blockquote>
        <div className="flex items-center justify-between">
          <div>
            <p className="font-bold text-white text-lg">{name}</p>
            <p className="text-zinc-500 font-['Inter'] text-xs uppercase tracking-widest">{role}</p>
          </div>
          <span className="text-electric-cyan font-['Bebas_Neue'] text-sm">{hashtag}</span>
        </div>
      </div>
      {/* Background Decorative Element */}
      <div className="absolute -right-4 -bottom-4 opacity-5 pointer-events-none">
        <span className="material-symbols-outlined text-[10rem]">{icon}</span>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      name: "Thomas R.",
      role: "CrossFit Athlete",
      quote: "J'ai détruit mes limites dès le premier mois. Kinetix n'est pas une appli, c'est une arme.",
      hashtag: "#KINETIXULTRA",
      icon: "fitness_center",
      image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&q=80&w=200"
    },
    {
      name: "Sarah M.",
      role: "HIIT Extreme",
      quote: "Transformation radicale. Le HIIT Extreme a redéfini ce que je pensais possible physiquement.",
      hashtag: "#EVOLUTION",
      icon: "bolt",
      image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=200"
    },
    {
      name: "Marc L.",
      role: "Force & Powerlifting",
      quote: "Le meilleur coaching de Paris, même à distance. La précision des metrics est chirurgicale.",
      hashtag: "#HARDCORE",
      icon: "insights",
      image: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?auto=format&fit=crop&q=80&w=200"
    }
  ];

  return (
    <section id="testimonials" className="relative min-h-screen pb-24 pt-12 px-6 max-w-4xl mx-auto">
      <div className="mb-16 relative">
        <h2 className="font-['Bebas_Neue'] text-7xl md:text-9xl font-bold uppercase leading-none tracking-tight text-white">
          LA PREUVE <br/>
          <span className="text-neon-green">PAR L'ACTION</span>
        </h2>
        <div className="absolute -top-8 -left-8 text-white/5 font-['Bebas_Neue'] text-[12rem] -z-10 select-none">TESTIMONY</div>
      </div>

      <div className="space-y-8">
        {reviews.map((rev, idx) => (
          <TestimonialCard key={idx} {...rev} />
        ))}
      </div>

      <div className="mt-20 text-center">
        <button className="bg-neon-green text-black font-['Bebas_Neue'] text-2xl px-12 py-4 tracking-wider hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(57,255,20,0.3)]">
          COMMENCER MON HISTOIRE
        </button>
      </div>
    </section>
  );
};

export default Testimonials;

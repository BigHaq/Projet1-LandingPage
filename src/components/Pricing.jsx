import React from 'react';

const PricingCard = ({ title, price, features, isPopular, subtitle }) => {
  return (
    <div className={`glass-card rounded-xl p-8 relative overflow-hidden transition-all duration-300 ${
      isPopular ? 'neon-border-active bg-gradient-to-br from-neutral-900/80 to-black scale-[1.02]' : 'border border-white/5'
    }`}>
      {isPopular && (
        <div className="absolute top-0 right-0 bg-neon-green text-black px-4 py-1 text-[10px] font-black uppercase tracking-tighter">
          POPULAIRE
        </div>
      )}
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className={`font-['Bebas_Neue'] uppercase tracking-tight ${isPopular ? 'text-4xl text-neon-green' : 'text-3xl text-white'}`}>
            {title}
          </h3>
          <p className="text-zinc-500 text-xs uppercase tracking-widest">{subtitle}</p>
        </div>
        <div className="text-right">
          <span className="text-4xl font-black text-white">{price}€</span>
          <span className="block text-[10px] text-zinc-500 uppercase tracking-widest">/ Mois</span>
        </div>
      </div>
      <ul className="space-y-4 mb-8">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-center text-sm">
            <span className={`material-symbols-outlined text-lg mr-3 ${feature.included ? 'text-neon-green' : 'text-zinc-700'}`} style={{ fontVariationSettings: "'FILL' 1" }}>
              check_circle
            </span>
            <span className={feature.included ? 'text-white' : 'text-zinc-500'}>{feature.text}</span>
          </li>
        ))}
      </ul>
      <button className={`w-full py-4 rounded-lg font-black text-xs tracking-[0.2em] uppercase transition-all active:scale-95 duration-200 ${
        isPopular ? 'bg-neon-green text-black shadow-[0_0_20px_rgba(57,255,20,0.4)]' : 'border border-white/20 text-white hover:bg-white hover:text-black'
      }`}>
        CHOISIR CE PLAN
      </button>
    </div>
  );
};

const Pricing = () => {
  const plans = [
    {
      title: "ESSENTIEL",
      subtitle: "Base de l'entraînement",
      price: 49,
      features: [
        { text: "Accès salle 24/7", included: true },
        { text: "Équipement de pointe", included: true },
        { text: "Programmes personnalisés", included: false },
        { text: "Suivi biométrique", included: false }
      ]
    },
    {
      title: "ÉLITE",
      subtitle: "Performance optimisée",
      price: 89,
      isPopular: true,
      features: [
        { text: "Accès salle 24/7 & Spa", included: true },
        { text: "Coaching privé (2h/mois)", included: true },
        { text: "Nutrition connectée", included: true },
        { text: "Suivi biométrique Ultra", included: true }
      ]
    },
    {
      title: "ILLIMITÉ",
      subtitle: "Expérience ultime",
      price: 129,
      features: [
        { text: "Tout inclus Élite", included: true },
        { text: "Coaching illimité", included: true },
        { text: "Vêtements Kinetix offerts", included: true },
        { text: "Accès VIP événements", included: true }
      ]
    }
  ];

  return (
    <section id="pricing" className="pt-24 px-6 max-w-4xl mx-auto relative overflow-hidden">
      <div className="mb-12 relative">
        <div className="absolute -left-10 top-0 opacity-10 font-['Bebas_Neue'] text-8xl pointer-events-none select-none text-zinc-500">03</div>
        <h2 className="font-['Bebas_Neue'] text-6xl leading-none tracking-tighter uppercase mb-2">L'INVESTISSEMENT</h2>
        <p className="text-zinc-500 text-sm tracking-widest uppercase">Choisissez votre niveau de performance</p>
      </div>

      <div className="flex flex-col gap-8 md:grid md:grid-cols-3 md:items-start">
        {plans.map((plan, idx) => (
          <PricingCard key={idx} {...plan} />
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-zinc-500 text-[10px] uppercase tracking-widest">Sans engagement. Annulation possible à tout moment.</p>
      </div>

      {/* Decorative background elements */}
      <div className="fixed top-1/4 -right-20 w-64 h-64 bg-neon-green/5 blur-[120px] pointer-events-none"></div>
      <div className="fixed bottom-1/4 -left-20 w-64 h-64 bg-electric-cyan/5 blur-[120px] pointer-events-none"></div>
    </section>
  );
};

export default Pricing;

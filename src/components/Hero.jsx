import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0A0A0A]/80 backdrop-blur-2xl shadow-[0_10px_30px_rgba(57,255,20,0.05)]">
      <div className="flex justify-between items-center w-full px-8 py-6 max-w-[1440px] mx-auto">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-neon-green text-3xl">bolt</span>
          <span className="text-3xl font-black italic text-neon-green tracking-tighter font-['Bebas_Neue']">KINETIC</span>
        </div>
        <div className="hidden md:flex items-center gap-12">
          <a className="text-neon-green font-bold border-b-2 border-neon-green pb-1 font-['Bebas_Neue'] tracking-widest text-sm uppercase" href="#">Accueil</a>
          <a className="text-zinc-400 hover:text-neon-green uppercase text-sm tracking-widest transition-all duration-300 font-['Bebas_Neue']" href="#programs">Programmes</a>
          <a className="text-zinc-400 hover:text-neon-green uppercase text-sm tracking-widest transition-all duration-300 font-['Bebas_Neue']" href="#pricing">Tarifs</a>
          <a className="text-zinc-400 hover:text-neon-green uppercase text-sm tracking-widest transition-all duration-300 font-['Bebas_Neue']" href="#coaches">Équipe</a>
        </div>
        <button className="bg-neon-green text-black px-8 py-2 font-black font-['Bebas_Neue'] tracking-wider rounded-none hover:scale-105 transition-transform duration-300 active:scale-95">
          REJOINDRE
        </button>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <>
      <Navbar />
      <section className="relative min-h-screen flex flex-col justify-center items-center pt-24 overflow-hidden grain-overlay">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0A0A0A]/95 to-[#0A0A0A] z-0"></div>
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-neon-green/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-electric-purple/10 rounded-full blur-[120px]"></div>
        
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            alt="athlete training hard" 
            className="w-full h-full object-cover grayscale mix-blend-overlay"
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1920" 
          />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="inline-block mb-6 px-4 py-1 bg-white/5 border-l-2 border-neon-green">
            <span className="font-['Bebas_Neue'] text-neon-green tracking-[0.3em] text-sm uppercase">Vive l'intensité</span>
          </div>
          <h1 className="text-7xl md:text-[11rem] leading-none font-['Bebas_Neue'] italic tracking-tighter mb-6 bg-gradient-to-b from-white via-white to-zinc-600 bg-clip-text text-transparent drop-shadow-2xl">
            DÉPASSEZ VOS <br/>
            <span className="text-neon-green neon-glow">LIMITES</span>
          </h1>
          <p className="max-w-2xl mx-auto text-zinc-400 text-lg md:text-xl font-light tracking-wide mb-12">
            Entraînement de classe mondiale. Vrais résultats. <br className="hidden md:block"/> 
            Réservez votre première séance aujourd'hui et transformez votre potentiel en puissance.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <button className="group relative px-10 py-5 bg-neon-green rounded-full overflow-hidden hover:scale-105 transition-all duration-300 active:scale-95 shadow-[0_0_30px_rgba(57,255,20,0.2)] text-black font-black font-['Bebas_Neue'] text-xl tracking-widest">
              RÉSERVER UNE CLASSE
            </button>
            <button className="px-10 py-5 border border-white/20 hover:border-neon-green/50 text-white rounded-full font-black font-['Bebas_Neue'] text-xl tracking-widest transition-all duration-300 hover:bg-white/5 active:scale-95">
              EXPLORER LES PROGRAMMES
            </button>
          </div>
        </div>

        <div className="relative z-20 w-full mt-24 bg-[#131313]/50 backdrop-blur-md border-t border-white/5">
          <div className="max-w-7xl mx-auto px-8 py-10 flex flex-col md:flex-row justify-around items-center gap-8 md:gap-4">
            <div className="flex flex-col items-center">
              <span className="font-['Bebas_Neue'] text-4xl text-white">1 200+</span>
              <span className="text-[10px] uppercase tracking-[0.4em] text-neon-green font-bold">Membres Actifs</span>
            </div>
            <div className="hidden md:block w-px h-12 bg-white/10"></div>
            <div className="flex flex-col items-center">
              <span className="font-['Bebas_Neue'] text-4xl text-white">40+</span>
              <span className="text-[10px] uppercase tracking-[0.4em] text-neon-green font-bold">Classes / Semaine</span>
            </div>
            <div className="hidden md:block w-px h-12 bg-white/10"></div>
            <div className="flex flex-col items-center">
              <span className="font-['Bebas_Neue'] text-4xl text-white">12</span>
              <span className="text-[10px] uppercase tracking-[0.4em] text-neon-green font-bold">Coachs Experts</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full relative bg-black border-t border-white/5 overflow-hidden">
      {/* Watermark Background */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 select-none pointer-events-none z-0">
        <span className="font-['Bebas_Neue'] text-[20vw] leading-none text-white opacity-[0.02] tracking-tighter">KINETIX</span>
      </div>

      {/* Section Top (CTA) */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 text-center border-b border-white/5">
        <h3 className="font-['Bebas_Neue'] text-5xl md:text-8xl tracking-tight mb-8 text-white">PRÊT À REJOINDRE L'ÉLITE ?</h3>
        <button className="bg-neon-green text-black px-12 py-5 text-xl font-bold font-['Bebas_Neue'] tracking-widest hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_30px_rgba(57,255,20,0.2)] hover:shadow-[0_0_50px_rgba(57,255,20,0.4)] uppercase">
          COMMENCER MAINTENANT
        </button>
      </div>

      {/* Section Liens & Info */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          {/* Col 1: Identity */}
          <div className="space-y-6">
            <div className="text-2xl font-bold tracking-tighter text-neon-green flex items-center gap-2">
              <span className="material-symbols-outlined text-3xl">bolt</span>
              <span className="font-['Bebas_Neue'] text-3xl tracking-tight">KINETIX ULTRA</span>
            </div>
            <div className="space-y-2">
              <p className="text-white uppercase font-bold tracking-widest text-sm">Siège Social</p>
              <p className="text-zinc-500 text-sm leading-relaxed">
                123 Avenue de la Performance<br/>
                75008 Paris, France
              </p>
            </div>
            <p className="font-['Bebas_Neue'] text-xl text-neon-green tracking-widest opacity-80">Dépassez vos limites</p>
          </div>

          {/* Col 2: Navigation */}
          <div className="grid grid-cols-2 gap-8 md:justify-center">
            <div className="space-y-4">
              <h4 className="text-xs font-bold text-white/30 uppercase tracking-[0.2em]">Menu</h4>
              <ul className="space-y-3">
                {['Programmes', 'Coachs', 'Tarifs', 'Réservation'].map((item) => (
                  <li key={item}>
                    <a className="text-zinc-500 uppercase text-sm tracking-widest hover:text-neon-green hover:translate-x-2 transition-all duration-300 inline-block" href={`#${item.toLowerCase()}`}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-xs font-bold text-white/30 uppercase tracking-[0.2em]">Support</h4>
              <ul className="space-y-3">
                {['Contact', 'FAQ', 'Privacy'].map((item) => (
                  <li key={item}>
                    <a className="text-zinc-500 uppercase text-sm tracking-widest hover:text-neon-green hover:translate-x-2 transition-all duration-300 inline-block" href="#">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Col 3: Social & Newsletter */}
          <div className="space-y-8 md:text-right flex flex-col md:items-end">
            <div className="space-y-4 w-full">
              <h4 className="text-xs font-bold text-white/30 uppercase tracking-[0.2em]">Communauté</h4>
              <div className="flex gap-6 md:justify-end">
                {['camera', 'play_circle', 'video_library'].map((icon) => (
                  <a key={icon} className="text-zinc-500 hover:text-neon-green transition-colors duration-300" href="#">
                    <span className="material-symbols-outlined text-3xl">{icon}</span>
                  </a>
                ))}
              </div>
            </div>
            <div className="bg-[#131313] backdrop-blur p-4 rounded-lg w-full max-w-xs border border-white/5">
              <p className="text-[10px] text-zinc-500 uppercase tracking-widest mb-2 font-bold">Abonnez-vous à la newsletter</p>
              <div className="flex gap-2">
                <input 
                  className="bg-[#1a1919] border-none text-xs tracking-widest p-2 flex-grow focus:ring-1 focus:ring-neon-green outline-none text-white" 
                  placeholder="EMAIL" 
                  type="email"
                />
                <button className="bg-neon-green text-black p-2 flex items-center justify-center hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-lg">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Barre de bas */}
      <div className="relative z-10 w-full border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium tracking-widest uppercase text-white/20">
          <p>© 2024 KINETIX ULTRA. TOUS DROITS RÉSERVÉS.</p>
          <div className="flex gap-8">
            <a className="hover:text-white transition-colors" href="#">Mentions Légales</a>
            <a className="hover:text-white transition-colors" href="#">Politique de Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

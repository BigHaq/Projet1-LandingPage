import React from 'react';
import { classes } from '../data/classes';

const ProgramCard = ({ id, name, description, duration, icon, index }) => {
  return (
    <div className="glass-card rounded-xl p-5 relative overflow-hidden flex flex-col gap-4 group hover:active-glow transition-all duration-300">
      <div className="flex justify-between items-start">
        <div className="w-12 h-12 rounded-lg bg-neon-green/10 flex items-center justify-center">
          <span className="material-symbols-outlined text-neon-green text-3xl">{icon}</span>
        </div>
        <div className="px-3 py-1 rounded-full border border-neon-green text-neon-green text-[10px] font-bold tracking-widest uppercase">
          {duration}
        </div>
      </div>
      <div>
        <h3 className="font-['Bebas_Neue'] text-3xl text-white leading-none mb-1">{name}</h3>
        <p className="text-zinc-400 text-sm leading-relaxed">{description}</p>
      </div>
      <button className="w-full py-3 bg-neon-green text-black font-['Bebas_Neue'] text-xl tracking-wider rounded-lg transition-transform active:scale-95">
        RÉSERVER
      </button>
      <div className="absolute -right-4 -top-8 opacity-[0.03] select-none pointer-events-none">
        <span className="font-['Bebas_Neue'] text-8xl">{index < 10 ? `0${index}` : index}</span>
      </div>
    </div>
  );
};

const Programs = () => {
  const icons = ['bolt', 'fitness_center', 'self_improvement', 'rebase_edit'];

  return (
    <section id="programs" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-['Bebas_Neue'] font-bold uppercase tracking-tight text-white neon-glow-text leading-none mb-4">
          ENTRAÎNEZ-VOUS COMME UN PRO
        </h2>
        <div className="w-24 h-1 bg-neon-green mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {classes.map((cls, idx) => (
          <ProgramCard 
            key={cls.id} 
            {...cls} 
            icon={icons[idx % icons.length]} 
            index={idx + 1}
          />
        ))}
      </div>

      <div className="mt-16 rounded-xl overflow-hidden relative h-64 bg-[#131313] flex items-end p-8 border border-white/5">
        <img 
          className="absolute inset-0 w-full h-full object-cover opacity-60" 
          src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=1920" 
          alt="Session Ultra Endurance"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        <div className="relative z-10">
          <span className="text-neon-green font-bold text-xs tracking-widest uppercase mb-2 block">Défi de la semaine</span>
          <h4 className="font-['Bebas_Neue'] text-4xl text-white">SESSION ULTRA ENDURANCE</h4>
          <button className="mt-4 px-6 py-2 border border-neon-green text-neon-green font-['Bebas_Neue'] uppercase tracking-widest text-sm hover:bg-neon-green hover:text-black transition-all">
            Participer
          </button>
        </div>
      </div>
    </section>
  );
};

export default Programs;

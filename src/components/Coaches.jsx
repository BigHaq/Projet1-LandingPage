import React from 'react';
import { coaches } from '../data/classes';

const CoachCard = ({ name, specialty, experience, image }) => {
  return (
    <div className="glass-card rounded-xl overflow-hidden border border-white/5 relative group transition-all duration-300">
      <div className="flex items-center p-4">
        <div className="relative flex-shrink-0">
          <div className="w-24 h-24 rounded-lg overflow-hidden border-2 border-neon-green neon-border-glow">
            <img 
              alt={name} 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
              src={image} 
            />
          </div>
        </div>
        <div className="ml-6 flex-grow">
          <div className="flex justify-between items-start">
            <h3 className="font-['Bebas_Neue'] text-2xl uppercase tracking-wider text-white">{name}</h3>
            <span className="material-symbols-outlined text-neon-green text-lg">verified</span>
          </div>
          <p className="text-neon-green font-bold text-xs uppercase tracking-widest mb-1">{specialty}</p>
          <div className="flex items-center text-zinc-500 text-sm">
            <span className="material-symbols-outlined text-xs mr-1">history</span>
            <span>{experience.toUpperCase()}</span>
          </div>
        </div>
      </div>
      <div className="absolute right-4 bottom-4">
        <button className="bg-neon-green text-black h-8 w-8 rounded-full flex items-center justify-center hover:scale-110 active:scale-95 transition-all">
          <span className="material-symbols-outlined text-xl">chevron_right</span>
        </button>
      </div>
    </div>
  );
};

const Coaches = () => {
  return (
    <section id="coaches" className="pt-24 pb-32 px-6 max-w-lg mx-auto">
      <div className="mb-10 relative">
        <span className="absolute -top-6 -left-2 text-[8rem] font-['Bebas_Neue'] font-bold opacity-5 pointer-events-none select-none">COACH</span>
        <h2 className="font-['Bebas_Neue'] text-5xl font-bold uppercase tracking-tight leading-none mb-2">
          VOS COACHS.<br/>
          <span className="text-neon-green text-glow">VOTRE AVANTAGE.</span>
        </h2>
        <div className="w-12 h-1 bg-neon-green mb-8"></div>
      </div>

      <div className="space-y-6">
        {coaches.map((coach) => (
          <CoachCard key={coach.id} {...coach} />
        ))}
      </div>

      <div className="mt-12 p-6 glass-card rounded-xl border border-dashed border-neon-green/30 text-center">
        <h4 className="font-['Bebas_Neue'] text-xl mb-4 tracking-wider text-white">BESOIN D'UN PLAN PERSONNALISÉ ?</h4>
        <button className="w-full bg-neon-green text-black font-bold py-3 uppercase tracking-widest active:scale-95 transition-all neon-border-glow">
          CONTACTER UN EXPERT
        </button>
      </div>
    </section>
  );
};

export default Coaches;

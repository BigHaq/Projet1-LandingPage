import React, { useState } from 'react';
import { classes } from '../data/classes';

const Booking = () => {
  const [step, setStep] = useState(2);
  const [selectedClass, setSelectedClass] = useState(classes[1]); // FORCE
  const [selectedSlot, setSelectedSlot] = useState('17:45 - 18:45');
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleConfirm = () => {
    setIsConfirmed(true);
    setTimeout(() => setIsConfirmed(false), 5000);
  };

  return (
    <section id="booking" className="pt-16 md:pt-24 pb-20 md:pb-32 px-4 max-w-2xl mx-auto min-h-[100dvh] relative">
      {/* Title & Step Indicator */}
      <div className="mb-8 md:mb-10 text-center">
        <h2 className="font-['Bebas_Neue'] text-4xl md:text-6xl tracking-tighter mb-6 md:mb-8 text-neon-green drop-shadow-[0_0_15px_rgba(57,255,20,0.2)]">
          RÉSERVEZ VOTRE SÉANCE
        </h2>
        <div className="flex items-center justify-between px-2 max-w-[280px] md:max-w-sm mx-auto relative">
          <div className="absolute top-1/2 left-0 w-full h-[2px] bg-white/10 -translate-y-1/2 z-0"></div>
          <div 
            className="absolute top-1/2 left-0 h-[2px] bg-neon-green -translate-y-1/2 z-0 shadow-[0_0_8px_rgba(57,255,20,0.5)] transition-all duration-500"
            style={{ width: step === 1 ? '0%' : step === 2 ? '50%' : '100%' }}
          ></div>
          
          {[1, 2, 3].map((s) => (
            <div 
              key={s}
              className={`relative z-10 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all duration-300 text-sm md:text-base ${
                s < step ? 'bg-neon-green text-black' : s === step ? 'bg-[#131313] border-2 border-neon-green text-neon-green neon-glow' : 'bg-[#1a1919] text-zinc-500'
              }`}
            >
              {s < step ? (
                <span className="material-symbols-outlined text-lg md:text-xl">check</span>
              ) : (
                <span className="font-bold">0{s}</span>
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-between px-2 mt-3 text-[8px] md:text-[10px] font-bold tracking-[0.2em] text-zinc-500 uppercase max-w-[300px] md:max-w-sm mx-auto">
          <span className={step === 1 ? 'text-neon-green' : ''}>Discipline</span>
          <span className={step === 2 ? 'text-neon-green' : ''}>Horaire</span>
          <span className={step === 3 ? 'text-neon-green' : ''}>Détails</span>
        </div>
      </div>

      {/* Discipline Selection (Step 1) */}
      <div className="mb-10 md:mb-12 overflow-x-auto no-scrollbar">
        <div className="flex space-x-3 md:space-x-4 pb-2">
          {classes.map((cls) => (
            <button 
              key={cls.id}
              onClick={() => { setSelectedClass(cls); setStep(2); }}
              className={`flex-shrink-0 px-6 md:px-8 py-2 md:py-3 rounded-lg transition-all duration-300 ${
                selectedClass?.id === cls.id ? 'bg-neon-green text-black shadow-[0_0_20px_rgba(57,255,20,0.4)]' : 'bg-[#131313] border border-white/10 hover:border-neon-green/50'
              }`}
            >
              <span className="font-['Bebas_Neue'] text-lg md:text-xl tracking-wide uppercase">{cls.category}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Time Slots (Step 2) */}
      <div className="mb-8 md:mb-10">
        <h3 className="font-['Bebas_Neue'] text-xl md:text-2xl tracking-wide mb-4 md:mb-6 flex items-center gap-2">
          <span className="material-symbols-outlined text-neon-green">calendar_month</span>
          MAI 2024
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {selectedClass?.slots.map((slot) => (
            <button 
              key={slot}
              onClick={() => { setSelectedSlot(slot); setStep(3); }}
              className={`py-3 md:py-4 rounded-full font-bold text-sm md:text-base transition-all ${
                selectedSlot === slot ? 'bg-neon-green text-black shadow-[0_0_20px_rgba(57,255,20,0.3)]' : 'border border-neon-green/40 text-neon-green hover:bg-neon-green/10'
              }`}
            >
              {slot}
            </button>
          ))}
        </div>
      </div>

      {/* Form (Step 3) */}
      <div className={`p-5 md:p-6 rounded-xl bg-[#131313] border border-white/5 relative overflow-hidden backdrop-blur-sm transition-opacity duration-300 ${step < 3 ? 'opacity-50 pointer-events-none' : 'opacity-100'}`}>
        <div className="absolute -right-10 -top-10 w-32 h-32 bg-neon-green/10 rounded-full blur-3xl"></div>
        <h3 className="font-['Bebas_Neue'] text-xl md:text-2xl tracking-wide mb-6">DÉTAILS DE LA RÉSERVATION</h3>
        
        <div className="space-y-4 md:space-y-6 mb-8 md:mb-10">
          <div className="grid grid-cols-2 gap-2 md:gap-4 text-xs md:text-sm tracking-tight border-b border-white/5 pb-4">
            <div className="text-zinc-400 font-medium uppercase">Séance :</div>
            <div className="text-right text-neon-green font-bold uppercase">{selectedClass?.name}</div>
            <div className="text-zinc-400 font-medium uppercase">Horaire :</div>
            <div className="text-right font-bold">{selectedSlot}</div>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-[8px] md:text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em] mb-1">Nom Complet</label>
              <input className="w-full bg-[#1a1919] border-none rounded-lg focus:ring-1 focus:ring-neon-green/50 text-white py-3 px-4 placeholder:text-zinc-700 text-sm" placeholder="JEAN DUPONT" type="text"/>
            </div>
            <div>
              <label className="block text-[8px] md:text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em] mb-1">Email</label>
              <input className="w-full bg-[#1a1919] border-none rounded-lg focus:ring-1 focus:ring-neon-green/50 text-white py-3 px-4 placeholder:text-zinc-700 text-sm" placeholder="JEAN.DUPONT@KINETIX.COM" type="email"/>
            </div>
          </div>
        </div>

        <button 
          onClick={handleConfirm}
          className="w-full py-4 md:py-5 bg-neon-green text-black font-['Bebas_Neue'] text-xl md:text-2xl tracking-widest rounded-lg shadow-[0_10px_30px_rgba(57,255,20,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all"
        >
          CONFIRMER
        </button>
      </div>

      {/* Success Toast */}
      {isConfirmed && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-sm animate-bounce">
          <div className="bg-[#1a1919] border border-neon-green/30 backdrop-blur-md rounded-xl p-4 flex items-center gap-4 shadow-2xl">
            <div className="w-10 h-10 bg-neon-green/20 rounded-full flex items-center justify-center text-neon-green">
              <span className="material-symbols-outlined">check_circle</span>
            </div>
            <div>
              <p className="text-sm font-bold text-white">🎯 Réservation confirmée !</p>
              <p className="text-xs text-zinc-500">Vérifiez vos emails.</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Booking;

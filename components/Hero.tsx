
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background with Dark Aesthetics */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/itachi-dark/1920/1080" 
          alt="Cinematic Background" 
          className="w-full h-full object-cover opacity-30 brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"></div>
        <div className="absolute inset-0 sharingan-gradient animate-pulse"></div>
      </div>

      <div className="relative z-10 text-center px-4">
        <h2 className="text-red-600 text-xl md:text-2xl font-cinzel tracking-[0.5em] mb-4 opacity-80 animate-fade-in">
          宇智波鼬
        </h2>
        <h1 className="text-5xl md:text-8xl font-cinzel font-black text-white mb-6 drop-shadow-[0_5px_15px_rgba(185,28,28,0.5)]">
          ITACHI UCHIHA
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl font-light italic leading-relaxed">
          “自我牺牲……在阴影中守护和平的无名忍者。那才是真正的忍者。”
        </p>
        
        <div className="mt-12 flex flex-col md:flex-row gap-6 justify-center">
          <button className="px-8 py-3 bg-red-700 hover:bg-red-600 transition-all text-white font-cinzel tracking-widest rounded-sm border border-red-900 shadow-lg shadow-red-900/20">
            探索能力
          </button>
          <button className="px-8 py-3 bg-transparent hover:bg-white/10 transition-all text-white font-cinzel tracking-widest rounded-sm border border-white/20">
            生平事迹
          </button>
        </div>
      </div>

      {/* Floating Crow Silhouette (SVG) */}
      <div className="absolute bottom-10 right-10 animate-bounce">
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-red-700 opacity-40">
           <path d="M4 10a14 14 0 0 1 16 0" />
           <path d="M12 20c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z" />
           <circle cx="12" cy="12" r="3" fill="currentColor" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;

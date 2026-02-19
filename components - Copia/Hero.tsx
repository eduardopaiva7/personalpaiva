
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#121212] via-[#121212]/70 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="max-w-3xl">
          <span className="inline-block px-4 py-1 bg-[#1B5E20] text-[#66FF66] font-bold text-xs uppercase tracking-widest rounded mb-6 border border-[#66FF66]/30">
            Acompanhamento Premium
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-[1.1] uppercase italic tracking-tighter">
            Transforme seu <span className="text-[#66FF66]">Corpo</span> com <br />
            quem entende de <span className="underline decoration-[#1B5E20]">Performance</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-xl leading-relaxed">
            Treinos personalizados para saúde, estética e performance com o método Personal Paiva. Resultados reais e duradouros.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="#planos" 
              className="bg-[#66FF66] text-[#121212] px-10 py-4 rounded-sm font-extrabold text-lg hover:scale-105 transition-all text-center shadow-[0_0_20px_rgba(102,255,102,0.4)]"
            >
              COMEÇAR AGORA
            </a>
            <a 
              href="#sobre" 
              className="border border-white/30 text-white px-10 py-4 rounded-sm font-bold text-lg hover:bg-white hover:text-[#121212] transition-all text-center backdrop-blur-sm"
            >
              METODOLOGIA
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;


import React from 'react';
import { Quote } from 'lucide-react';

const Testimonial: React.FC<{ name: string, result: string, text: string, img: string }> = ({ name, result, text, img }) => (
  <div className="bg-white/5 p-10 relative overflow-hidden group border border-white/10">
    <Quote className="absolute -top-4 -right-4 text-[#1B5E20]/20 w-32 h-32" />
    <div className="relative z-10">
      <div className="flex items-center space-x-4 mb-8">
        <img src={img} alt={name} className="w-16 h-16 rounded-full object-cover border-2 border-[#66FF66]" />
        <div>
          <h4 className="text-white font-bold uppercase tracking-tight">{name}</h4>
          <span className="text-[#66FF66] text-xs font-black uppercase">{result}</span>
        </div>
      </div>
      <p className="text-gray-300 text-lg italic leading-relaxed">
        "{text}"
      </p>
    </div>
  </div>
);

const SocialProof: React.FC = () => {
  return (
    <section className="py-24 bg-[#121212]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16">
          <div className="max-w-2xl">
            <span className="text-[#66FF66] font-extrabold uppercase tracking-[0.3em] block mb-4 text-sm">Resultados Reais</span>
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase italic">Alunos que evoluíram</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Testimonial 
            img="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&h=200&q=80"
            name="Julia Ramos"
            result="-12kg em 4 meses"
            text="Nunca consegui manter uma rotina antes. O suporte via WhatsApp faz toda a diferença nos dias de desânimo."
          />
          <Testimonial 
            img="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&h=200&q=80"
            name="Marcos Vinícius"
            result="+6kg Massa Magra"
            text="Os treinos são intensos e muito bem explicados. Minha postura e força mudaram completamente em pouco tempo."
          />
          <Testimonial 
            img="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&h=200&q=80"
            name="Carla Mendes"
            result="Fim das dores lombares"
            text="Além do ganho estético, o foco em mobilidade me livrou de dores crônicas que me impediam de treinar."
          />
        </div>
      </div>
    </section>
  );
};

export default SocialProof;

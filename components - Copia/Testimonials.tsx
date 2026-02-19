
import React from 'react';
import { Quote } from 'lucide-react';

const TestimonialCard: React.FC<{ name: string, role: string, text: string }> = ({ name, role, text }) => (
  <div className="bg-[#0a192f] p-10 relative overflow-hidden group">
    <Quote className="absolute -top-4 -right-4 text-[#c5a059]/20 w-32 h-32 group-hover:scale-110 transition-transform duration-700" />
    <div className="relative z-10">
      <div className="flex text-[#c5a059] mb-6">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-xl">★</span>
        ))}
      </div>
      <p className="text-gray-300 text-lg italic leading-relaxed mb-8">
        "{text}"
      </p>
      <div>
        <h4 className="text-white font-serif font-bold text-xl">{name}</h4>
        <p className="text-[#c5a059] text-sm uppercase tracking-widest font-bold mt-1">{role}</p>
      </div>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16">
          <div className="max-w-2xl">
            <span className="text-[#c5a059] font-bold uppercase tracking-widest block mb-4">Depoimentos</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0a192f]">O que nossos clientes dizem</h2>
          </div>
          <div className="hidden md:block">
            <div className="h-px w-32 bg-[#c5a059] mb-4"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TestimonialCard 
            name="Ricardo Santos"
            role="Empresário"
            text="O profissionalismo da equipe Martins Advocacia foi fundamental para a resolução de um conflito societário complexo. Recomendo fortemente."
          />
          <TestimonialCard 
            name="Mariana Oliveira"
            role="Diretora Jurídica"
            text="Encontrei no Dr. Martins não apenas um advogado, mas um parceiro estratégico que entende as nuances do mercado corporativo."
          />
          <TestimonialCard 
            name="Carlos Eduardo"
            role="Cliente Civil"
            text="Atendimento impecável e humano. Resolveram meu problema de partilha de bens com agilidade e total transparência em todas as etapas."
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

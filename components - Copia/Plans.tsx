
import React from 'react';
import { Check, Dumbbell, Flame, Trophy } from 'lucide-react';

const PlanCard: React.FC<{ 
  name: string, 
  price: string, 
  features: string[], 
  icon: React.ReactNode,
  popular?: boolean,
  colorClass: string 
}> = ({ name, price, features, icon, popular, colorClass }) => (
  <div className={`relative flex flex-col p-8 rounded-sm transition-all duration-500 hover:-translate-y-2 border ${popular ? 'border-[#66FF66] bg-[#1B5E20]/10' : 'border-white/10 bg-white/5'} flex-1`}>
    {popular && (
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#66FF66] text-[#121212] px-4 py-1 text-xs font-black uppercase rounded-full">
        Mais Procurado
      </div>
    )}
    
    <div className={`mb-6 ${colorClass} w-16 h-16 rounded-full flex items-center justify-center`}>
      {icon}
    </div>
    
    <h3 className="text-2xl font-black uppercase italic text-white mb-2">{name}</h3>
    <div className="mb-6">
      <span className="text-4xl font-black text-[#66FF66]">{price}</span>
      <span className="text-gray-500 text-sm ml-2">/mês</span>
    </div>
    
    <ul className="space-y-4 mb-10 flex-grow">
      {features.map((feature, idx) => (
        <li key={idx} className="flex items-start space-x-3">
          <Check size={18} className="text-[#66FF66] shrink-0 mt-0.5" />
          <span className="text-gray-300 text-sm">{feature}</span>
        </li>
      ))}
    </ul>
    
    <button className={`w-full py-4 rounded-sm font-black uppercase transition-all ${
      popular ? 'bg-[#66FF66] text-[#121212]' : 'bg-white/10 text-white hover:bg-[#1B5E20] hover:text-white'
    }`}>
      Quero esse plano
    </button>
  </div>
);

const Plans: React.FC = () => {
  return (
    <section className="py-24 bg-[#121212] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#1B5E20]/5 -skew-x-12 transform origin-top-right"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-[#66FF66] font-extrabold uppercase tracking-[0.3em] block mb-4 text-sm">Investimento</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase italic">Planos de Treinamento</h2>
          <p className="text-gray-400">Escolha o nível de acompanhamento ideal para o seu objetivo e rotina.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <PlanCard 
            name="Plano Start"
            price="R$ 197"
            colorClass="text-[#66FF66]"
            icon={<Dumbbell size={32} />}
            features={[
              "Avaliação física inicial",
              "Planilha de treino mensal",
              "Acesso ao app exclusivo",
              "Ideal para iniciantes"
            ]}
          />
          <PlanCard 
            name="Plano Pro"
            price="R$ 297"
            popular
            colorClass="text-[#66FF66]"
            icon={<Flame size={32} />}
            features={[
              "Avaliação física completa",
              "Ajustes semanais de carga",
              "Suporte direto via WhatsApp",
              "Planejamento nutricional base",
              "Ideal para emagrecimento"
            ]}
          />
          <PlanCard 
            name="Plano Premium"
            price="R$ 497"
            colorClass="text-[#66FF66]"
            icon={<Trophy size={32} />}
            features={[
              "Avaliação + Bioimpedância",
              "Treino 100% individualizado",
              "Consultoria semanal via vídeo",
              "Suporte prioritário 24/7",
              "Ideal para atletas e performance"
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Plans;


import React from 'react';
import { ShieldCheck, UserCheck, TrendingUp, Activity } from 'lucide-react';

const BenefitItem: React.FC<{ icon: React.ReactNode, title: string, desc: string }> = ({ icon, title, desc }) => (
  <div className="group p-8 border border-white/5 bg-white/[0.02] hover:bg-[#1B5E20]/10 transition-all rounded-sm">
    <div className="mb-6 p-4 bg-[#1B5E20]/20 rounded-sm inline-block text-[#66FF66] group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h4 className="text-xl font-black uppercase italic text-white mb-3 tracking-tighter">{title}</h4>
    <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
  </div>
);

const Benefits: React.FC = () => {
  return (
    <section className="py-24 bg-[#121212]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <BenefitItem 
            icon={<TrendingUp size={28} />}
            title="Resultados Reais"
            desc="Metodologia focada em evidências científicas para máxima eficácia no seu treino."
          />
          <BenefitItem 
            icon={<UserCheck size={28} />}
            title="Treino Único"
            desc="Nada de treinos prontos. Cada exercício é escolhido pensando na sua biomecânica."
          />
          <BenefitItem 
            icon={<ShieldCheck size={28} />}
            title="Segurança Total"
            desc="Prevenção de lesões é nossa prioridade. Treine pesado, mas treine certo."
          />
          <BenefitItem 
            icon={<Activity size={28} />}
            title="Acompanhamento"
            desc="Monitoramento constante do seu progresso para ajustes rápidos e precisos."
          />
        </div>
      </div>
    </section>
  );
};

export default Benefits;


import React from 'react';
import { Gavel, Users, ShieldAlert, ArrowUpRight } from 'lucide-react';

const ServiceCard: React.FC<{ icon: React.ReactNode, title: string, description: string }> = ({ icon, title, description }) => (
  <div className="bg-white p-10 border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 group relative flex flex-col h-full">
    <div className="mb-8 text-[#c5a059] group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <h3 className="text-2xl font-serif font-bold text-[#0a192f] mb-4 group-hover:text-[#c5a059] transition-colors uppercase tracking-wide">
      {title}
    </h3>
    <p className="text-gray-600 leading-relaxed flex-grow">
      {description}
    </p>
    <div className="mt-8 pt-6 border-t border-gray-100 flex justify-between items-center">
      <span className="text-sm font-bold uppercase tracking-widest text-[#0a192f]">Consultar agora</span>
      <ArrowUpRight className="text-[#c5a059]" size={20} />
    </div>
  </div>
);

const Services: React.FC = () => {
  return (
    <section className="py-24 bg-[#f8f9fa]">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-[#c5a059] font-bold uppercase tracking-widest block mb-4">Nossa Especialidade</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0a192f] mb-6">Áreas de Atuação</h2>
          <div className="h-1 w-20 bg-[#c5a059] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard 
            icon={<Users size={48} strokeWidth={1} />}
            title="Direito Civil"
            description="Atuação estratégica em contratos, direito de família, sucessões e responsabilidade civil, garantindo a proteção do seu patrimônio."
          />
          <ServiceCard 
            icon={<Gavel size={48} strokeWidth={1} />}
            title="Direito Trabalhista"
            description="Defesa técnica para empresas e colaboradores em questões de rescisões, assédio, horas extras e compliance laboral."
          />
          <ServiceCard 
            icon={<ShieldAlert size={48} strokeWidth={1} />}
            title="Direito Criminal"
            description="Assistência jurídica imediata e defesa em processos criminais, prezando pelo devido processo legal e garantias constitucionais."
          />
        </div>
      </div>
    </section>
  );
};

export default Services;

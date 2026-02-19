
import React from 'react';
import { CheckCircle, Award, Target, Zap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="py-24 bg-[#121212] border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Trainer Photo */}
          <div className="lg:w-1/2 relative group">
            <div className="absolute -top-6 -left-6 w-full h-full border border-[#1B5E20] -z-10 group-hover:top-0 group-hover:left-0 transition-all duration-500"></div>
            <div className="relative z-10 aspect-[4/5] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1597452485669-2c7bb5fef90d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Personal Paiva - Especialista em Performance" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-[#1B5E20] p-8 text-white hidden md:block border border-[#66FF66]/20">
              <p className="text-4xl font-extrabold italic mb-1 text-[#66FF66]">12+</p>
              <p className="text-xs uppercase tracking-[0.2em] font-bold">Anos de Experiência</p>
            </div>
          </div>

          {/* About Text */}
          <div className="lg:w-1/2">
            <span className="text-[#66FF66] font-extrabold uppercase tracking-[0.3em] text-sm mb-4 block">Conheça a Profissional</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8 leading-tight uppercase italic">
              Sou a Personal <br /> <span className="text-[#1B5E20]">Paiva</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Formada em Educação Física com foco em alto rendimento e biomecânica. No método **Personal Paiva**, não trabalhamos apenas o corpo; transformamos sua relação com a disciplina e a performance através de treinos inteligentes e seguros.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {[
                { icon: <Award className="text-[#66FF66]" size={20}/>, text: "Bacharel em Ed. Física" },
                { icon: <Zap className="text-[#66FF66]" size={20}/>, text: "Especialista em Hipertrofia" },
                { icon: <Target className="text-[#66FF66]" size={20}/>, text: "Foco em Emagrecimento" },
                { icon: <CheckCircle className="text-[#66FF66]" size={20}/>, text: "Treino Personalizado" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center space-x-3 p-4 bg-white/5 rounded-sm border-l-2 border-[#1B5E20]">
                  {item.icon}
                  <span className="text-sm font-bold text-white uppercase tracking-tight">{item.text}</span>
                </div>
              ))}
            </div>

            <a 
              href="#planos" 
              className="inline-flex items-center space-x-4 text-white hover:text-[#66FF66] font-bold text-lg group transition-colors italic uppercase tracking-tighter underline underline-offset-8 decoration-[#1B5E20] decoration-4"
            >
              <span>Conheça a Metodologia Paiva</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

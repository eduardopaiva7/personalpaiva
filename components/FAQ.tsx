
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQItem: React.FC<{ question: string, answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10">
      <button 
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-xl font-bold text-white pr-8">{question}</span>
        <span className="text-[#66FF66] transition-transform">
          {isOpen ? <Minus size={24} /> : <Plus size={24} />}
        </span>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 pb-6' : 'max-h-0'
        }`}
      >
        <p className="text-gray-400 leading-relaxed text-lg">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "Em quanto tempo vejo resultados?",
      answer: "Os resultados variam conforme a dedicação, mas a maioria dos alunos percebe melhora no fôlego e disposição em 2 semanas, e mudanças estéticas visíveis entre 6 a 8 semanas."
    },
    {
      question: "O treino é adaptado para iniciantes?",
      answer: "Com certeza! Minha metodologia prevê uma fase de adaptação para quem está começando agora, focando em técnica e consciência corporal antes de grandes cargas."
    },
    {
      question: "Posso treinar em casa ou preciso de academia?",
      answer: "Os planos são adaptáveis. Tenho protocolos específicos tanto para quem treina em academias completas quanto para quem prefere treinar no conforto de casa com pouco equipamento."
    },
    {
      question: "Como funciona a consultoria online?",
      answer: "Através de um aplicativo exclusivo, você recebe seu cronograma de treinos com vídeos explicativos de cada exercício. O suporte via WhatsApp é diário para tirar dúvidas sobre técnica e execução."
    },
    {
      question: "Preciso comprar suplementos para ter resultados?",
      answer: "Não necessariamente. O foco principal é o treino e uma alimentação equilibrada. Suplementos são auxiliares e só devem ser usados sob recomendação nutricional caso haja necessidade real."
    },
    {
      question: "Com que frequência os treinos são atualizados?",
      answer: "Geralmente a cada 4 ou 5 semanas, dependendo da sua evolução e feedback. É importante dar tempo para o corpo se adaptar e progredir nas cargas antes de mudar o estímulo."
    },
    {
      question: "Qual o horário das aulas presenciais em Recife?",
      answer: "Atendemos com horários agendados das 06:00 às 21:00. Devido à alta demanda, a disponibilidade deve ser consultada diretamente via WhatsApp."
    }
  ];

  return (
    <section className="py-24 bg-[#121212]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#66FF66] font-extrabold uppercase tracking-[0.3em] block mb-4 text-sm">Suporte</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase italic">Dúvidas Frequentes</h2>
          </div>
          
          <div className="bg-white/5 border border-white/5 rounded-sm p-8 md:p-12">
            {faqs.map((faq, index) => (
              <FAQItem key={index} {...faq} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

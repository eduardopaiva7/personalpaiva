
import React from 'react';
import { Mail, Instagram, MessageSquare, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section className="py-24 bg-[#1B5E20]/5 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20">
          
          <div className="lg:w-1/3">
            <span className="text-[#66FF66] font-black uppercase tracking-[0.3em] block mb-4 text-sm">Comece Hoje</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-10 uppercase italic">Seu corpo é o seu <br /><span className="text-[#66FF66]">Legado.</span></h2>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-[#66FF66] p-3 rounded-sm text-[#121212]">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white uppercase text-sm tracking-widest">WhatsApp</h4>
                  <p className="text-gray-400 font-bold">(81) 98888-7777</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#66FF66] p-3 rounded-sm text-[#121212]">
                  <Instagram size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white uppercase text-sm tracking-widest">Instagram</h4>
                  <p className="text-gray-400 font-bold">@paiva_personal</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#66FF66] p-3 rounded-sm text-[#121212]">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white uppercase text-sm tracking-widest">Atendimento</h4>
                  <p className="text-gray-400">Pernambuco (Recife) & Online</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3">
            <div className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-sm shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#66FF66]/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
              
              <h3 className="text-2xl font-black text-white mb-8 uppercase italic tracking-tight">Fale com o Especialista</h3>
              
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
                <div className="md:col-span-1">
                  <label className="block text-gray-500 text-[10px] mb-2 font-black uppercase tracking-widest">Seu Nome</label>
                  <input 
                    type="text" 
                    placeholder="Nome Completo"
                    className="w-full bg-[#121212]/50 border border-white/10 rounded-sm p-4 text-white focus:outline-none focus:border-[#66FF66] transition-colors" 
                  />
                </div>
                <div className="md:col-span-1">
                  <label className="block text-gray-500 text-[10px] mb-2 font-black uppercase tracking-widest">Seu WhatsApp</label>
                  <input 
                    type="tel" 
                    placeholder="(00) 00000-0000"
                    className="w-full bg-[#121212]/50 border border-white/10 rounded-sm p-4 text-white focus:outline-none focus:border-[#66FF66] transition-colors" 
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-gray-500 text-[10px] mb-2 font-black uppercase tracking-widest">Qual seu principal desafio?</label>
                  <select className="w-full bg-[#121212]/50 border border-white/10 rounded-sm p-4 text-gray-400 focus:outline-none focus:border-[#66FF66] transition-colors appearance-none">
                    <option>Perder Gordura</option>
                    <option>Ganhar Massa Muscular</option>
                    <option>Condicionamento Atleta</option>
                    <option>Saúde e Longevidade</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <button 
                    type="submit"
                    className="w-full bg-[#66FF66] text-[#121212] py-5 rounded-sm font-black text-lg hover:scale-[1.01] transition-all shadow-lg uppercase italic tracking-tighter"
                  >
                    Enviar Mensagem Direta
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;

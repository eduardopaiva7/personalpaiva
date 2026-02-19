
import React from 'react';
import { Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#121212] text-white pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          <div className="md:col-span-2">
            <span className="text-3xl font-black italic tracking-tighter block mb-6 uppercase">
              PERSONAL <span className="text-[#66FF66]">PAIVA</span>
            </span>
            <p className="text-gray-500 max-w-sm leading-relaxed mb-8 font-medium">
              Transformando corpos e mentes através de um treinamento de alto nível. Junte-se ao time e mude sua vida hoje com o método Personal Paiva.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="w-10 h-10 flex items-center justify-center border border-white/10 rounded-full text-gray-400 hover:text-[#66FF66] hover:border-[#66FF66] transition-all"><Instagram size={20} /></a>
              <a href="#" className="w-10 h-10 flex items-center justify-center border border-white/10 rounded-full text-gray-400 hover:text-[#66FF66] hover:border-[#66FF66] transition-all"><Youtube size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-[#66FF66] font-black uppercase tracking-widest mb-6 text-sm italic">Mapa do Site</h4>
            <ul className="space-y-4 text-sm font-bold uppercase tracking-tighter">
              <li><a href="#home" className="text-gray-500 hover:text-white transition-colors">Home</a></li>
              <li><a href="#sobre" className="text-gray-500 hover:text-white transition-colors">A Metodologia</a></li>
              <li><a href="#planos" className="text-gray-500 hover:text-white transition-colors">Planos e Preços</a></li>
              <li><a href="#resultados" className="text-gray-500 hover:text-white transition-colors">Resultados</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#66FF66] font-black uppercase tracking-widest mb-6 text-sm italic">Unidades</h4>
            <ul className="space-y-4 text-sm font-bold uppercase tracking-tighter">
              <li className="text-gray-500">Pernambuco - Recife</li>
              <li className="text-gray-500">Consultoria Online</li>
              <li className="text-gray-500">Treinamento Híbrido</li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/5 text-center">
          <p className="text-gray-600 text-[10px] uppercase tracking-[0.4em] font-bold">
            &copy; {currentYear} Personal Paiva - Performance & Saúde. Todos os direitos reservados.
          </p>
          <p className="text-[#66FF66]/50 text-[10px] mt-4 uppercase tracking-widest font-bold">
            Desenvolvido por Eduardo Paiva - Paiva Sports Agency
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

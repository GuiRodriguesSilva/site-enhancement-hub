import { Link } from "react-router-dom";
import { Network, Radio } from "lucide-react";
import zyxelLogo from "@/assets/zyxel-logo.png";
import { useState } from "react";

const Lobby = () => {
  const [hoveredSide, setHoveredSide] = useState<'network' | 'communication' | null>(null);

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Animated background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-green-500 rounded-full filter blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full filter blur-[100px] animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Header com logo centralizado */}
      <div className="absolute top-0 left-0 right-0 z-50 flex flex-col items-center pt-4">
        <img src={zyxelLogo} alt="Zyxel Logo" className="h-12 md:h-14 mb-2 drop-shadow-2xl" />
        <h1 className="text-xl md:text-2xl font-bold text-white drop-shadow-2xl mb-1">
          Zyxel Brasil
        </h1>
        <p className="text-white/70 text-xs md:text-sm drop-shadow-lg">Escolha sua Business Unit</p>
      </div>

      {/* Container principal com as duas opções */}
      <div className="relative h-full w-full flex items-center justify-center pt-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* Network Card */}
            <Link 
              to="/network"
              onMouseEnter={() => setHoveredSide('network')}
              onMouseLeave={() => setHoveredSide(null)}
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-600 via-green-600 to-teal-700 p-1 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/50"
            >
              <div className="relative bg-gradient-to-br from-emerald-600/90 via-green-600/90 to-teal-700/90 rounded-3xl p-8 md:p-12 h-full min-h-[300px] flex flex-col items-center justify-center text-center backdrop-blur-sm">
                {/* Ícone animado */}
                <div className={`mb-6 p-4 rounded-full bg-white/20 backdrop-blur-md transition-all duration-500 ${hoveredSide === 'network' ? 'scale-110 rotate-12' : ''}`}>
                  <Network className="h-12 w-12 md:h-14 md:w-14 text-white drop-shadow-lg" />
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 drop-shadow-lg">
                  Network
                </h2>
                
                <p className="text-lg md:text-xl text-white/90 mb-6 max-w-md drop-shadow-md">
                  Infraestrutura de Redes e Segurança Empresarial
                </p>
                
                <div className="flex items-center gap-3 text-white/90 text-lg font-semibold group-hover:gap-5 transition-all">
                  <span>Explorar Soluções</span>
                  <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>

                {/* Efeito de brilho */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              </div>
            </Link>

            {/* Communication Card */}
            <Link 
              to="/communication"
              onMouseEnter={() => setHoveredSide('communication')}
              onMouseLeave={() => setHoveredSide(null)}
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-cyan-600 to-sky-700 p-1 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50"
            >
              <div className="relative bg-gradient-to-br from-blue-600/90 via-cyan-600/90 to-sky-700/90 rounded-3xl p-8 md:p-12 h-full min-h-[300px] flex flex-col items-center justify-center text-center backdrop-blur-sm">
                {/* Ícone animado */}
                <div className={`mb-6 p-4 rounded-full bg-white/20 backdrop-blur-md transition-all duration-500 ${hoveredSide === 'communication' ? 'scale-110 rotate-12' : ''}`}>
                  <Radio className="h-12 w-12 md:h-14 md:w-14 text-white drop-shadow-lg" />
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 drop-shadow-lg">
                  Communication
                </h2>
                
                <p className="text-lg md:text-xl text-white/90 mb-6 max-w-md drop-shadow-md">
                  Comunicação e Conectividade Avançada
                </p>
                
                <div className="flex items-center gap-3 text-white/90 text-lg font-semibold group-hover:gap-5 transition-all">
                  <span>Explorar Soluções</span>
                  <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>

                {/* Efeito de brilho */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-8 left-0 right-0 text-center z-50">
        <p className="text-white/60 text-sm drop-shadow-md">
          © 2025 Zyxel Brasil - Go Together
        </p>
      </div>
    </div>
  );
};

export default Lobby;
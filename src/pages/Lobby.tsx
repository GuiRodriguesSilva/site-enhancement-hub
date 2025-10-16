import { Link } from "react-router-dom";
import { Network, Radio } from "lucide-react";
import zyxelLogo from "@/assets/zyxel-logo.png";
import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
} from "@/components/ui/carousel";
import carousel1 from "@/assets/carousel/zyxel-1.jpg";
import carousel2 from "@/assets/carousel/zyxel-2.jpg";
import carousel3 from "@/assets/carousel/zyxel-3.jpg";
import carousel4 from "@/assets/carousel/zyxel-4.jpg";

const Lobby = () => {
  const [hoveredSide, setHoveredSide] = useState<'network' | 'communication' | null>(null);
  const [api, setApi] = useState<CarouselApi>();
  
  const carouselImages = [carousel1, carousel2, carousel3, carousel4];

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Carrossel de imagens de fundo */}
      <div className="absolute inset-0 opacity-40">
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full h-full"
        >
          <CarouselContent className="h-screen">
            {carouselImages.map((image, index) => (
              <CarouselItem key={index} className="h-full">
                <div className="h-full w-full">
                  <img
                    src={image}
                    alt={`Zyxel produto ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      
      {/* Overlay escuro para melhorar contraste */}
      <div className="absolute inset-0 bg-slate-950/40"></div>
      
      {/* Grid background futurístico */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      
      {/* Animated background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500 rounded-full filter blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500 rounded-full filter blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-500 rounded-full filter blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      {/* Linhas futurísticas decorativas */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-emerald-500/20 to-transparent"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent"></div>
        <div className="absolute left-0 top-1/4 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent"></div>
        <div className="absolute left-0 bottom-1/4 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"></div>
      </div>

      {/* Header com logo centralizado */}
      <div className="absolute top-0 left-0 right-0 z-50 flex flex-col items-center pt-2 md:pt-3 px-4">
        <div className="relative">
          <div className="absolute inset-0 bg-emerald-500/20 blur-2xl rounded-full"></div>
          <img src={zyxelLogo} alt="Zyxel Logo" className="relative h-10 md:h-14 mb-1 md:mb-2 drop-shadow-2xl" />
        </div>
        <h1 className="text-lg md:text-2xl font-bold text-white drop-shadow-2xl mb-1 md:mb-1.5 tracking-wider">
          ZYXEL BRASIL
        </h1>
        <div className="flex items-center gap-2 text-white/70 text-xs md:text-sm">
          <div className="w-6 md:w-8 h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent"></div>
          <p className="drop-shadow-lg tracking-wide text-center">Escolha sua Business Unit</p>
          <div className="w-6 md:w-8 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
        </div>
      </div>

      {/* Container principal com as duas opções */}
      <div className="relative h-full w-full flex items-center justify-center pt-24 md:pt-16 pb-16 md:pb-0">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {/* Network Card */}
            <Link 
              to="/network"
              onMouseEnter={() => setHoveredSide('network')}
              onMouseLeave={() => setHoveredSide(null)}
              className="group relative overflow-hidden rounded-3xl p-[2px] transition-all duration-500 hover:scale-105 hover:shadow-2xl"
              style={{
                background: 'linear-gradient(135deg, hsl(125 75% 45%), hsl(160 70% 50%))',
                boxShadow: hoveredSide === 'network' ? '0 20px 50px hsl(125 75% 45% / 0.5)' : 'none'
              }}
            >
              <div className="relative rounded-3xl p-6 sm:p-8 md:p-12 h-full min-h-[280px] sm:min-h-[320px] flex flex-col items-center justify-center text-center backdrop-blur-sm"
                style={{
                  background: 'linear-gradient(135deg, hsl(125 75% 45% / 0.95), hsl(160 70% 50% / 0.95))'
                }}
              >
                {/* Grid interno */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:2rem_2rem] rounded-3xl"></div>
                
                {/* Ícone animado */}
                <div className={`relative mb-4 sm:mb-6 p-4 sm:p-5 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 transition-all duration-500 ${hoveredSide === 'network' ? 'scale-110 rotate-12' : ''}`}>
                  <Network className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 text-white drop-shadow-lg" />
                </div>
                
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-3 drop-shadow-lg">
                  Network
                </h2>
                
                <p className="text-base sm:text-lg md:text-xl text-white/90 mb-4 sm:mb-6 max-w-md drop-shadow-md px-2">
                  Infraestrutura de Redes e Segurança Empresarial
                </p>
                
                <div className="flex items-center gap-2 sm:gap-3 text-white/90 text-base sm:text-lg font-semibold group-hover:gap-5 transition-all">
                  <span>Explorar Soluções</span>
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              className="group relative overflow-hidden rounded-3xl p-[2px] transition-all duration-500 hover:scale-105 hover:shadow-2xl"
              style={{
                background: 'linear-gradient(135deg, hsl(205 75% 45%), hsl(195 70% 50%))',
                boxShadow: hoveredSide === 'communication' ? '0 20px 50px hsl(205 75% 45% / 0.5)' : 'none'
              }}
            >
              <div className="relative rounded-3xl p-6 sm:p-8 md:p-12 h-full min-h-[280px] sm:min-h-[320px] flex flex-col items-center justify-center text-center backdrop-blur-sm"
                style={{
                  background: 'linear-gradient(135deg, hsl(205 75% 45% / 0.95), hsl(195 70% 50% / 0.95))'
                }}
              >
                {/* Grid interno */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:2rem_2rem] rounded-3xl"></div>
                
                {/* Ícone animado */}
                <div className={`relative mb-4 sm:mb-6 p-4 sm:p-5 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 transition-all duration-500 ${hoveredSide === 'communication' ? 'scale-110 rotate-12' : ''}`}>
                  <Radio className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 text-white drop-shadow-lg" />
                </div>
                
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-3 drop-shadow-lg">
                  Communication
                </h2>
                
                <p className="text-base sm:text-lg md:text-xl text-white/90 mb-4 sm:mb-6 max-w-md drop-shadow-md px-2">
                  Comunicação e Conectividade Avançada
                </p>
                
                <div className="flex items-center gap-2 sm:gap-3 text-white/90 text-base sm:text-lg font-semibold group-hover:gap-5 transition-all">
                  <span>Explorar Soluções</span>
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      <div className="absolute bottom-4 md:bottom-8 left-0 right-0 text-center z-50 px-4">
        <p className="text-white/60 text-xs sm:text-sm drop-shadow-md">
          © 2025 Zyxel Brasil - Go Together
        </p>
      </div>
    </div>
  );
};

export default Lobby;

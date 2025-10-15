import { Link } from "react-router-dom";
import { Network, Radio, ArrowRight } from "lucide-react";
import zyxelLogo from "@/assets/zyxel-logo.png";

const Lobby = () => {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {/* Logo no topo */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 z-50 text-center">
        <img src={zyxelLogo} alt="Zyxel Logo" className="h-16 mx-auto mb-4" />
        <h1 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
          Zyxel Brasil
        </h1>
        <p className="text-white/90 text-lg mt-2 drop-shadow-md">Escolha sua área de interesse</p>
      </div>

      {/* Divisão diagonal */}
      <div className="relative h-full w-full">
        {/* Network Side (Green) - Left */}
        <Link 
          to="/network"
          className="absolute inset-0 group overflow-hidden"
          style={{
            clipPath: "polygon(0 0, 50% 0, 0 100%)"
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-green-600 to-teal-700 transition-all duration-500 group-hover:scale-110">
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
          
          <div className="relative h-full flex flex-col items-center justify-center text-white px-8 transform -translate-x-24 group-hover:-translate-x-20 transition-transform duration-300">
            <Network className="h-24 w-24 mb-6 drop-shadow-lg animate-fade-in" />
            <h2 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">Network</h2>
            <p className="text-xl md:text-2xl text-center max-w-md mb-6 drop-shadow-md">
              Soluções em Infraestrutura de Redes
            </p>
            <div className="flex items-center gap-2 text-lg font-semibold">
              <span>Explorar</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
            </div>
          </div>
        </Link>

        {/* Communication Side (Blue) - Right */}
        <Link 
          to="/communication"
          className="absolute inset-0 group overflow-hidden"
          style={{
            clipPath: "polygon(50% 0, 100% 0, 100% 100%, 0 100%)"
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-bl from-blue-600 via-cyan-600 to-sky-700 transition-all duration-500 group-hover:scale-110">
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
          
          <div className="relative h-full flex flex-col items-center justify-center text-white px-8 transform translate-x-24 group-hover:translate-x-20 transition-transform duration-300">
            <Radio className="h-24 w-24 mb-6 drop-shadow-lg animate-fade-in" />
            <h2 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">Communication</h2>
            <p className="text-xl md:text-2xl text-center max-w-md mb-6 drop-shadow-md">
              Soluções em Comunicação e Conectividade
            </p>
            <div className="flex items-center gap-2 text-lg font-semibold">
              <span>Explorar</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
            </div>
          </div>
        </Link>

        {/* Linha diagonal decorativa */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(to bottom right, transparent 49.5%, white 49.5%, white 50.5%, transparent 50.5%)"
          }}
        ></div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-center z-50">
        <p className="text-sm drop-shadow-md">© 2025 Zyxel Brasil - Go Together</p>
      </div>
    </div>
  );
};

export default Lobby;

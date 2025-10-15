import { Link } from "react-router-dom";
import { Moon, Sun, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export const HeaderNetwork = () => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem("darkMode") === "true";
    }
    return false;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark", "network-theme");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("network-theme");
    }
  }, [isDark]);

  const toggleTheme = () => {
    const newDarkMode = !isDark;
    setIsDark(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode.toString());
    if (newDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 network-theme">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/network" className="flex items-center gap-2">
          <img src="/zyxel-logo.png" alt="Zyxel Logo" className="h-8" />
          <span className="font-bold text-xl">Zyxel Network</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/network" className="text-sm font-medium transition-colors hover:text-primary">
            Início
          </Link>
          <Link to="/network/produtos" className="text-sm font-medium transition-colors hover:text-primary">
            Produtos
          </Link>
          <Link to="/network/treinamento" className="text-sm font-medium transition-colors hover:text-primary">
            Treinamento
          </Link>
          <Link to="/network/suporte" className="text-sm font-medium transition-colors hover:text-primary">
            Suporte
          </Link>
          <Link to="/network/lancamentos" className="text-sm font-medium transition-colors hover:text-primary">
            Lançamentos
          </Link>
          <Link to="/network/download" className="text-sm font-medium transition-colors hover:text-primary">
            Download
          </Link>
          <Link to="/network/contato" className="text-sm font-medium transition-colors hover:text-primary">
            Contato
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
          >
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Link to="/">
            <Button variant="ghost" size="icon" title="Voltar ao Lobby">
              <Home className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

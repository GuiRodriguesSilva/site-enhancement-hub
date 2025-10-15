import { Link } from "react-router-dom";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export const Header = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setIsDark(isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    }
  }, []);

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
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src="/zyxel-logo.png" alt="Zyxel Logo" className="h-8" />
          <span className="font-bold text-xl">Zyxel Brasil Network</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium transition-colors hover:text-primary">
            Início
          </Link>
          <Link to="/produtos" className="text-sm font-medium transition-colors hover:text-primary">
            Produtos
          </Link>
          <Link to="/treinamento" className="text-sm font-medium transition-colors hover:text-primary">
            Treinamento
          </Link>
          <Link to="/suporte" className="text-sm font-medium transition-colors hover:text-primary">
            Suporte
          </Link>
          <Link to="/lancamentos" className="text-sm font-medium transition-colors hover:text-primary">
            Lançamentos
          </Link>
          <Link to="/download" className="text-sm font-medium transition-colors hover:text-primary">
            Download
          </Link>
          <Link to="/contato" className="text-sm font-medium transition-colors hover:text-primary">
            Contato
          </Link>
        </nav>

        <Button
          variant="ghost"
          size="icon"
          onClick={toggleTheme}
          className="ml-auto md:ml-0"
        >
          {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </Button>
      </div>
    </header>
  );
};

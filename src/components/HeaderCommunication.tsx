import { Link } from "react-router-dom";
import { Moon, Sun, Home, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export const HeaderCommunication = () => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem("darkMode") === "true";
    }
    return false;
  });
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Sempre aplicar a classe communication-theme
    document.documentElement.classList.add("communication-theme");
    document.documentElement.classList.remove("network-theme");
    
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const toggleTheme = () => {
    const newDarkMode = !isDark;
    setIsDark(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode.toString());
    
    document.documentElement.classList.add("communication-theme");
    if (newDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 communication-theme">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/communication" className="flex items-center gap-2">
          <img src="/zyxel-logo.png" alt="Zyxel Logo" className="h-8" />
          <span className="font-bold text-lg">Zyxel Communication</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/communication" className="text-sm font-medium transition-colors hover:text-primary">
            Início
          </Link>
          <Link to="/communication/produtos" className="text-sm font-medium transition-colors hover:text-primary">
            Produtos
          </Link>
          <Link to="/communication/suporte" className="text-sm font-medium transition-colors hover:text-primary">
            Suporte
          </Link>
          <Link to="/communication/lancamentos" className="text-sm font-medium transition-colors hover:text-primary">
            Lançamentos
          </Link>
          <Link to="/communication/download" className="text-sm font-medium transition-colors hover:text-primary">
            Download
          </Link>
          <Link to="/communication/contato" className="text-sm font-medium transition-colors hover:text-primary">
            Contato
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          {/* Menu mobile */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[280px] sm:w-[320px]">
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2">
                  <img src="/zyxel-logo.png" alt="Zyxel Logo" className="h-6" />
                  Zyxel Communication
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4 mt-8">
                <Link 
                  to="/communication" 
                  className="text-base font-medium transition-colors hover:text-primary py-2 px-4 rounded-md hover:bg-muted"
                  onClick={() => setOpen(false)}
                >
                  Início
                </Link>
                <Link 
                  to="/communication/produtos" 
                  className="text-base font-medium transition-colors hover:text-primary py-2 px-4 rounded-md hover:bg-muted"
                  onClick={() => setOpen(false)}
                >
                  Produtos
                </Link>
                <Link 
                  to="/communication/suporte" 
                  className="text-base font-medium transition-colors hover:text-primary py-2 px-4 rounded-md hover:bg-muted"
                  onClick={() => setOpen(false)}
                >
                  Suporte
                </Link>
                <Link 
                  to="/communication/lancamentos" 
                  className="text-base font-medium transition-colors hover:text-primary py-2 px-4 rounded-md hover:bg-muted"
                  onClick={() => setOpen(false)}
                >
                  Lançamentos
                </Link>
                <Link 
                  to="/communication/download" 
                  className="text-base font-medium transition-colors hover:text-primary py-2 px-4 rounded-md hover:bg-muted"
                  onClick={() => setOpen(false)}
                >
                  Download
                </Link>
                <Link 
                  to="/communication/contato" 
                  className="text-base font-medium transition-colors hover:text-primary py-2 px-4 rounded-md hover:bg-muted"
                  onClick={() => setOpen(false)}
                >
                  Contato
                </Link>
              </nav>
            </SheetContent>
          </Sheet>

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

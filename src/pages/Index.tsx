import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Network, 
  Shield, 
  Headphones, 
  GraduationCap, 
  Zap, 
  Globe, 
  Moon, 
  Sun,
  ChevronRight,
  Sparkles
} from "lucide-react";
import zyxelLogo from "@/assets/zyxel-logo.png";

const Index = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const features = [
    {
      icon: Network,
      title: "Infraestrutura de Redes",
      description: "Soluções robustas para redes corporativas com alta performance, escalabilidade e confiabilidade comprovada.",
    },
    {
      icon: Shield,
      title: "Cibersegurança",
      description: "Proteção avançada contra ameaças digitais com firewalls inteligentes e monitoramento em tempo real.",
    },
    {
      icon: Headphones,
      title: "Suporte Técnico",
      description: "Equipe especializada 24/7 para configuração, manutenção e otimização de suas redes empresariais.",
    },
    {
      icon: GraduationCap,
      title: "Treinamentos Profissionais",
      description: "Capacitação completa em tecnologias Zyxel, Nebula Cloud e gestão de infraestrutura de redes.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <nav className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-3 text-2xl font-bold">
              <img src={zyxelLogo} alt="Zyxel Logo" className="h-10 w-auto" />
              <span className="bg-tech-gradient bg-clip-text text-transparent">
                Zyxel Brasil Network
              </span>
            </div>
          </div>
          
          <ul className="hidden md:flex items-center gap-6 text-sm font-medium">
            <li><a href="/" className="text-foreground/80 hover:text-primary transition-colors">Início</a></li>
            <li><a href="/treinamento" className="text-foreground/80 hover:text-primary transition-colors">Treinamento</a></li>
            <li><a href="/produtos" className="text-foreground/80 hover:text-primary transition-colors">Produtos</a></li>
            <li><a href="/suporte" className="text-foreground/80 hover:text-primary transition-colors">Suporte</a></li>
            <li><a href="/lancamentos" className="text-foreground/80 hover:text-primary transition-colors">Lançamentos</a></li>
            <li><a href="/contato" className="text-foreground/80 hover:text-primary transition-colors">Contato</a></li>
            <li><a href="/download" className="text-foreground/80 hover:text-primary transition-colors">Download</a></li>
          </ul>

          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="ml-auto md:ml-0"
          >
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-tech-gradient opacity-5"></div>
        <div className="container relative mx-auto px-4 py-24 md:py-32">
          <div className="mx-auto max-w-4xl text-center animate-fade-in">
            <div className="mb-6 flex items-center justify-center gap-2">
              <Sparkles className="h-5 w-5 text-primary" />
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                Go Together
              </span>
              <Sparkles className="h-5 w-5 text-primary" />
            </div>
            
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
              Bem-vindo à{" "}
              <span className="bg-tech-gradient bg-clip-text text-transparent">
                Zyxel Brasil Network
              </span>
            </h1>
            
            <p className="mb-8 text-lg text-muted-foreground md:text-xl lg:text-2xl">
              Liderando a transformação digital com soluções inovadoras em infraestrutura de redes e cibersegurança. 
              Com tecnologia de ponta e compromisso com a excelência, conectamos empresas ao futuro.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="tech" className="gap-2">
                Saiba Mais
                <ChevronRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                <Globe className="h-4 w-4 mr-2" />
                Nossos Produtos
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Zyxel */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">Sobre a Zyxel</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Fundada em 1989, a Zyxel Communications é líder global em soluções de rede e segurança. 
              Com presença em mais de 150 países, oferecemos produtos inovadores para provedores de serviços, 
              empresas e usuários domésticos. No Brasil, combinamos tecnologia internacional de ponta com 
              suporte local especializado, garantindo conectividade segura e confiável para empresas de todos os tamanhos.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Nossas Soluções</h2>
            <p className="text-lg text-muted-foreground">
              Tecnologia de ponta para conectar seu negócio ao futuro
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-l-4 border-l-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-tech-gradient group-hover:text-white transition-all">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-tech-gradient opacity-10"></div>
        <div className="container relative mx-auto px-4">
          <Card className="border-2 border-primary/20 bg-card/50 backdrop-blur">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-3xl md:text-4xl mb-4">
                Pronto para transformar sua infraestrutura de rede?
              </CardTitle>
              <CardDescription className="text-lg">
                Entre em contato com nossa equipe e descubra como podemos impulsionar seu negócio
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
              <Button size="lg" variant="tech" className="gap-2">
                Fale Conosco
                <ChevronRight className="h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-muted/30 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <img src={zyxelLogo} alt="Zyxel Logo" className="h-6 w-auto" />
              <span className="text-sm font-semibold">Zyxel Brasil Network</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 Zyxel Brasil Network. Todos os direitos reservados.
            </p>
            <p className="text-sm font-semibold text-primary">Go Together</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

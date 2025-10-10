import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download as DownloadIcon, Smartphone, Cloud, Shield, Zap, CheckCircle2, Moon, Sun } from "lucide-react";
import { Link } from "react-router-dom";
import zyxelLogo from "@/assets/zyxel-logo.png";

const Download = () => {
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
      icon: Cloud,
      title: "Gestão em Nuvem",
      description: "Gerencie toda sua infraestrutura de qualquer lugar",
    },
    {
      icon: Shield,
      title: "Segurança Integrada",
      description: "Monitoramento de segurança e alertas em tempo real",
    },
    {
      icon: Zap,
      title: "Configuração Rápida",
      description: "Deploy de equipamentos em minutos",
    },
    {
      icon: Smartphone,
      title: "Mobile-First",
      description: "Interface otimizada para dispositivos móveis",
    },
  ];

  const benefits = [
    "Gestão centralizada de switches, APs e firewalls",
    "Dashboard intuitivo com métricas em tempo real",
    "Alertas proativos e notificações push",
    "Configuração zero-touch para novos dispositivos",
    "Backup automático de configurações",
    "Relatórios detalhados de performance",
    "Suporte a multi-site e hierarquia organizacional",
    "Atualizações automáticas de firmware",
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <nav className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link to="/" className="flex items-center gap-3 text-2xl font-bold">
            <img src={zyxelLogo} alt="Zyxel Logo" className="h-10 w-auto" />
            <span className="bg-tech-gradient bg-clip-text text-transparent">
              Zyxel Brasil Network
            </span>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
          >
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-tech-gradient opacity-5"></div>
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center animate-fade-in">
            <Badge className="mb-4 text-sm px-4 py-1.5">
              Aplicativo Oficial Zyxel
            </Badge>
            <h1 className="mb-6 text-4xl font-bold md:text-6xl">
              Zyxel <span className="bg-tech-gradient bg-clip-text text-transparent">Nebula</span>
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl mb-8">
              Gerencie sua infraestrutura de rede de forma simples e eficiente com o aplicativo Nebula
            </p>
            
            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="gap-2 text-base">
                <DownloadIcon className="h-5 w-5" />
                Download para Android
              </Button>
              <Button size="lg" variant="outline" className="gap-2 text-base">
                <DownloadIcon className="h-5 w-5" />
                Download para iOS
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              Também disponível para acesso via web em{" "}
              <a href="https://nebula.zyxel.com" className="text-primary hover:underline">
                nebula.zyxel.com
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Recursos Principais</h2>
            <p className="text-lg text-muted-foreground">
              Tudo que você precisa para gerenciar sua rede
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
                <CardHeader>
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 mx-auto">
                    <feature.icon className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">Benefícios do Nebula</h2>
              <p className="text-lg text-muted-foreground">
                Simplifique a gestão da sua infraestrutura de rede
              </p>
            </div>

            <Card>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-sm">{benefit}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-20 bg-muted/30">
        <div className="absolute inset-0 bg-tech-gradient opacity-10"></div>
        <div className="container relative mx-auto px-4">
          <Card className="border-2 border-primary/20 bg-card/50 backdrop-blur max-w-3xl mx-auto">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-3xl md:text-4xl mb-4">
                Pronto para começar?
              </CardTitle>
              <CardDescription className="text-lg">
                Baixe o Nebula agora e transforme a gestão da sua rede
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="gap-2">
                <DownloadIcon className="h-5 w-5" />
                Download Android
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <DownloadIcon className="h-5 w-5" />
                Download iOS
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Download;

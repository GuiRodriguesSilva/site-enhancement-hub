import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, Sparkles, Wifi, Shield, Zap, Moon, Sun } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import zyxelLogo from "@/assets/zyxel-logo.png";

const Lancamentos = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);
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

  const launches = [
    {
      name: "XGS2220-30HP",
      category: "Switches",
      icon: Zap,
      tagline: "Poder Multi-Gigabit",
      shortDescription: "Switch gerenciável de próxima geração com Multi-Gig e PoE++",
      imageUrl: "https://images.unsplash.com/photo-1545987796-200677ee1011?w=600",
      fullDescription: "O XGS2220-30HP representa o futuro da conectividade empresarial, oferecendo velocidades Multi-Gigabit em todas as portas com suporte a PoE++ de alta potência. Ideal para ambientes que exigem máxima performance.",
      specs: [
        "24 portas Multi-Gigabit (100M/1G/2.5G/5G/10G)",
        "6 portas 10G SFP+",
        "PoE++ 375W com smart power management",
        "Capacidade de switching 140 Gbps",
        "Layer 3 Lite com roteamento estático",
        "Gerenciamento Nebula Cloud ou local",
        "Suporte a VLAN, QoS, IGMP Snooping",
        "Redundância de fonte de alimentação",
      ],
      launch: "Janeiro 2025",
    },
    {
      name: "WAX655E WiFi 6E",
      category: "Access Points",
      icon: Wifi,
      tagline: "WiFi de 6ª Geração Avançada",
      shortDescription: "AP WiFi 6E com suporte a banda de 6 GHz e velocidades de até 6 Gbps",
      imageUrl: "https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=600",
      fullDescription: "Experimente a liberdade da nova banda de 6 GHz com o WAX655E. Este Access Point WiFi 6E oferece capacidade triplicada e latência ultra-baixa para aplicações críticas.",
      specs: [
        "WiFi 6E AX6000 (6 Gbps total)",
        "Tri-band: 2.4GHz + 5GHz + 6GHz",
        "4x4:4 MU-MIMO em todas as bandas",
        "OFDMA para até 512 clientes",
        "PoE+ (802.3at) ou PoE++ (802.3bt)",
        "Antenas internas de alto ganho",
        "Gestão completa via Nebula Cloud",
        "WPA3 e Enhanced Open",
      ],
      launch: "Fevereiro 2025",
    },
    {
      name: "ATP700 Security Gateway",
      category: "Firewalls",
      icon: Shield,
      tagline: "Proteção AI-Powered",
      shortDescription: "Firewall de próxima geração com IA e proteção contra ameaças avançadas",
      imageUrl: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=600",
      fullDescription: "O ATP700 redefine a segurança empresarial com inteligência artificial integrada, detectando e bloqueando ameaças antes que elas atinjam sua rede. Proteção completa para ambientes empresariais modernos.",
      specs: [
        "Throughput de firewall: 7 Gbps",
        "AI-powered threat detection",
        "Sandboxing avançado integrado",
        "IPS/IDP com base de assinaturas atualizada",
        "Content filtering e antivírus",
        "SD-WAN e VPN SSL/IPSec",
        "Zero Trust Network Access (ZTNA)",
        "Dashboard unificado Nebula Security Center",
      ],
      launch: "Março 2025",
    },
    {
      name: "XMG1930-30HP",
      category: "Switches",
      icon: Zap,
      tagline: "Multigigabit Acessível",
      shortDescription: "Switch Multi-Gig econômico com gerenciamento simplificado",
      imageUrl: "https://images.unsplash.com/photo-1545987796-200677ee1011?w=600",
      fullDescription: "Trazendo a tecnologia Multi-Gigabit para pequenas e médias empresas, o XMG1930-30HP oferece performance excepcional com gestão simplificada e preço competitivo.",
      specs: [
        "24 portas Multi-Gigabit (100M/1G/2.5G)",
        "4 portas 10G SFP+",
        "PoE+ 375W total",
        "Switching fabric 128 Gbps",
        "Layer 2+ com VLAN avançado",
        "Web GUI intuitiva",
        "Suporte Nebula Cloud opcional",
        "Garantia estendida de 5 anos",
      ],
      launch: "Março 2025",
    },
  ];

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

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
          <div className="mx-auto max-w-3xl text-center animate-fade-in">
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Sparkles className="h-8 w-8 text-primary" />
            </div>
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">
              Lançamentos <span className="bg-tech-gradient bg-clip-text text-transparent">2025</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Conheça as mais recentes inovações em infraestrutura de redes
            </p>
          </div>
        </div>
      </section>

      {/* Launches */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-6 max-w-5xl mx-auto">
            {launches.map((launch, index) => (
              <Collapsible
                key={index}
                open={openItems.includes(index)}
                onOpenChange={() => toggleItem(index)}
              >
                <Card className="overflow-hidden hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
                  <div className="grid md:grid-cols-[300px_1fr] gap-6">
                    <div className="aspect-video md:aspect-square overflow-hidden">
                      <img
                        src={launch.imageUrl}
                        alt={launch.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    
                    <div className="p-6 md:py-6 md:pr-6 md:pl-0">
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <launch.icon className="h-6 w-6 text-primary" />
                            <Badge variant="secondary">{launch.category}</Badge>
                            <Badge className="bg-primary/10 text-primary border-primary/20">
                              {launch.launch}
                            </Badge>
                          </div>
                          <h3 className="text-2xl font-bold mb-1">{launch.name}</h3>
                          <p className="text-sm text-primary font-semibold mb-3">{launch.tagline}</p>
                          <p className="text-muted-foreground">{launch.shortDescription}</p>
                        </div>
                        
                        <CollapsibleTrigger asChild>
                          <Button variant="outline" size="sm" className="flex-shrink-0">
                            <ChevronDown
                              className={`h-4 w-4 transition-transform duration-200 ${
                                openItems.includes(index) ? "rotate-180" : ""
                              }`}
                            />
                          </Button>
                        </CollapsibleTrigger>
                      </div>

                      <CollapsibleContent className="space-y-4">
                        <div className="pt-4 border-t">
                          <p className="text-sm leading-relaxed mb-4">{launch.fullDescription}</p>
                          
                          <h4 className="font-semibold mb-3">Especificações Técnicas:</h4>
                          <ul className="grid md:grid-cols-2 gap-2">
                            {launch.specs.map((spec, idx) => (
                              <li key={idx} className="text-sm flex items-start gap-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                                <span>{spec}</span>
                              </li>
                            ))}
                          </ul>

                          <div className="mt-6 flex gap-3">
                            <Button className="gap-2">Solicitar Orçamento</Button>
                            <Button variant="outline">Baixar Datasheet</Button>
                          </div>
                        </div>
                      </CollapsibleContent>
                    </div>
                  </div>
                </Card>
              </Collapsible>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Lancamentos;

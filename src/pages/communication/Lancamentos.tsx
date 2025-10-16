import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, Sparkles, Radio, Wifi, Router } from "lucide-react";
import { useState, useEffect } from "react";
import { HeaderCommunication } from "@/components/HeaderCommunication";

const CommunicationLancamentos = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  useEffect(() => {
    document.documentElement.classList.add("communication-theme");
    document.documentElement.classList.remove("network-theme");
    return () => {
      document.documentElement.classList.remove("communication-theme");
    };
  }, []);

  const launches = [
    {
      name: "LTE7490-M904 5G Gateway",
      category: "5G Gateways",
      icon: Radio,
      tagline: "5G para Empresas",
      shortDescription: "Gateway 5G empresarial com WiFi 6E e SD-WAN integrado",
      imageUrl: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=600",
      fullDescription: "O LTE7490-M904 representa a nova era da conectividade empresarial, combinando tecnologia 5G de ponta com WiFi 6E e recursos avançados de SD-WAN para máxima performance e confiabilidade.",
      specs: [
        "5G Sub-6GHz com agregação de bandas",
        "WiFi 6E AX3000 tri-band",
        "SD-WAN com failover inteligente",
        "Firewall empresarial integrado",
        "Dual SIM com load balancing",
        "VPN IPSec/SSL de alto desempenho",
        "Gerenciamento via Nebula Cloud",
        "Portas Gigabit Ethernet",
      ],
      launch: "Janeiro 2025",
    },
    {
      name: "WSQ60 WiFi 6 Mesh System",
      category: "WiFi Mesh",
      icon: Wifi,
      tagline: "Cobertura Total WiFi 6",
      shortDescription: "Sistema mesh tri-band com cobertura de até 600m² e velocidades de 5.4 Gbps",
      imageUrl: "https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=600",
      fullDescription: "O WSQ60 oferece cobertura WiFi 6 completa para residências e escritórios de grande porte. Sistema mesh tri-band com backhaul dedicado garante velocidade máxima em todos os ambientes.",
      specs: [
        "WiFi 6 AX5400 (5.4 Gbps)",
        "Tri-band com backhaul dedicado 5GHz",
        "Cobertura até 600m² (kit com 3 unidades)",
        "Suporta até 150 dispositivos",
        "6 portas Gigabit por unidade",
        "Configuração via app móvel",
        "Controle parental avançado",
        "Compatível com Alexa e Google Assistant",
      ],
      launch: "Fevereiro 2025",
    },
    {
      name: "LTE5398-M904 Cat6 Router",
      category: "LTE Routers",
      icon: Router,
      tagline: "Conectividade Móvel Avançada",
      shortDescription: "Router LTE Cat6 com WiFi 6 dual-band e suporte para até 64 dispositivos",
      imageUrl: "https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=600",
      fullDescription: "Perfeito para ambientes que necessitam de conectividade móvel confiável, o LTE5398 combina velocidades LTE Cat6 com WiFi 6 de alto desempenho e recursos empresariais avançados.",
      specs: [
        "LTE Cat6 300/50 Mbps (Download/Upload)",
        "WiFi 6 AX1800 dual-band",
        "Dual SIM com failover automático",
        "4 portas Gigabit Ethernet",
        "VPN site-to-site e cliente",
        "Antenas externas de alto ganho",
        "Gerenciamento remoto via Nebula",
        "QoS inteligente para priorização de tráfego",
      ],
      launch: "Março 2025",
    },
    {
      name: "VMG8825-T50K VDSL Modem",
      category: "Modems",
      icon: Radio,
      tagline: "Banda Larga de Alto Desempenho",
      shortDescription: "Modem VDSL2 com WiFi 6 e portas Multi-Gig para serviços fibra e cobre",
      imageUrl: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=600",
      fullDescription: "O VMG8825 é ideal para provedores e usuários finais que buscam máxima performance em serviços de banda larga, combinando VDSL2 de alta velocidade com WiFi 6 e conectividade Multi-Gig.",
      specs: [
        "VDSL2 Profile 35b (300 Mbps)",
        "WiFi 6 AX3000 dual-band",
        "2x portas 2.5G Multi-Gig",
        "2x portas Gigabit Ethernet",
        "USB 3.0 para compartilhamento",
        "Suporte a IPv6 nativo",
        "TR-069/TR-181 para ISPs",
        "Beacon 11ax para melhor cobertura",
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
    <div className="min-h-screen bg-background communication-theme">
      <HeaderCommunication />

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
              Conheça as mais recentes inovações em comunicação e conectividade
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

export default CommunicationLancamentos;

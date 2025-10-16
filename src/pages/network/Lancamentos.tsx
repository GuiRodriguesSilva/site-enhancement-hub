import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, Sparkles, Wifi, Shield, Zap, Server } from "lucide-react";
import { useState } from "react";
import { HeaderNetwork } from "@/components/HeaderNetwork";

const NetworkLancamentos = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const launches = [
    // SWITCHES
    {
      name: "XMG1915 Series",
      category: "Switches",
      icon: Zap,
      tagline: "Switch Smart Managed Multi-Gig 2.5G com uplinks 10G SFP+",
      shortDescription: "Modelos: XMG1915-10E / XMG1915-10EP / XMG1915-18EP",
      imageUrl: "https://images.unsplash.com/photo-1545987796-200677ee1011?w=600",
      fullDescription: "A série XMG1915 oferece switches smart managed multi-gig compactos e silenciosos, ideais para ambientes SMB com WiFi 6/6E. Substitui a linha XGS1210/1250 trazendo velocidades 2.5G e uplinks 10G SFP+.",
      specs: [
        "Velocidades: 8 ou 16 portas 2.5G + 2 uplinks 10G SFP+",
        "Gerenciamento híbrido: NebulaFlex (standalone ou cloud)",
        "Suporte PoE++ (60W) nos modelos 'EP'",
        "Design compacto e silencioso, ideal para SMB",
        "Substitui a linha XGS1210/1250 em ambientes com WiFi 6/6E",
        "Modelos: XMG1915-10E / XMG1915-10EP / XMG1915-18EP",
      ],
      launch: "2024",
    },
    {
      name: "XGS2220 Series",
      category: "Switches",
      icon: Zap,
      tagline: "Switch L3 Access Multi-Gig de alto desempenho",
      shortDescription: "Switch Layer 3 com portas Multi-Gig e stacking físico",
      imageUrl: "https://images.unsplash.com/photo-1545987796-200677ee1011?w=600",
      fullDescription: "A série XGS2220 oferece switches Layer 3 de alto desempenho com suporte a portas Multi-Gig (1G/2.5G/5G/10G), ideal para ambientes corporativos que exigem máxima performance e flexibilidade.",
      specs: [
        "Suporte a portas Multi-Gig (1G/2.5G/5G/10G)",
        "6 uplinks 10G (2 RJ45 Multi-G + 4 SFP+)",
        "Modelos com PoE++ (60W/960W)",
        "Stacking físico até 4 unidades",
        "Modo AVoIP dedicado",
        "NebulaFlex Pro com 1 ano Nebula Pro Pack",
      ],
      launch: "2024",
    },

    // FIREWALLS
    {
      name: "USG FLEX H Series",
      category: "Firewalls",
      icon: Shield,
      tagline: "Firewall Multi-Gig com uOS e IA em nuvem",
      shortDescription: "Modelos: USG FLEX 100H / 200H / 500H / 700H",
      imageUrl: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=600",
      fullDescription: "A série USG FLEX H inaugura a nova geração de firewalls Zyxel com sistema operacional uOS otimizado, portas Multi-Gig e inteligência artificial em nuvem para proteção avançada. Substitui a linha anterior USG FLEX.",
      specs: [
        "Modelos: USG FLEX 100H / 200H / 500H / 700H",
        "Throughput até 15 Gbps (modelo 700H)",
        "Portas 2.5G e 10G, algumas com PoE+",
        "Sistema uOS (novo sistema operacional com interface otimizada)",
        "IA Cloud Security, Sandboxing, Anti-malware, IPS/URL Filter",
        "Gerenciamento local ou via Nebula",
        "Substitui a linha anterior USG FLEX",
      ],
      launch: "2024-2025",
    },
    {
      name: "USG LITE 60AX",
      category: "Firewalls",
      icon: Shield,
      tagline: "Firewall com WiFi 6 integrado",
      shortDescription: "Firewall compacto com WiFi 6 AX6000 integrado",
      imageUrl: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=600",
      fullDescription: "O USG LITE 60AX combina firewall e WiFi 6 em um único dispositivo compacto, ideal para escritórios domésticos e pequenas empresas que buscam simplicidade e segurança.",
      specs: [
        "AX6000 WiFi 6 dual-band",
        "Dual 2.5GbE mGig ports",
        "Segurança integrada e sem assinatura",
        "Gerenciamento via app Nebula",
        "Voltado a escritórios domésticos e pequenas empresas",
      ],
      launch: "2024",
    },

    // ACCESS POINTS
    {
      name: "WBE630S",
      category: "Access Points",
      icon: Wifi,
      tagline: "WiFi 7 (BE12300)",
      shortDescription: "Access Point WiFi 7 com tecnologia MLO e BandFlex",
      imageUrl: "https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=600",
      fullDescription: "O WBE630S é o primeiro Access Point WiFi 7 da Zyxel, oferecendo velocidades de até 12,3 Gbps com tecnologia MLO (Multiple Link Operation) e Smart Antenna adaptativa, ideal para instituições de ensino e ambientes de alta densidade.",
      specs: [
        "Dual Radio 2.4GHz + 5GHz/6GHz (BandFlex)",
        "Velocidade até 12,3 Gbps",
        "Tecnologia WiFi 7 MLO (Multiple Link Operation)",
        "Smart Antenna adaptativa",
        "NebulaFlex Pro com 1 ano de licença",
        "Foco: instituições de ensino e alta densidade",
      ],
      launch: "2024-2025",
    },
    {
      name: "WAX655E",
      category: "Access Points",
      icon: Wifi,
      tagline: "WiFi 6 Outdoor IP67",
      shortDescription: "Access Point WiFi 6 para ambientes externos de alta densidade",
      imageUrl: "https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=600",
      fullDescription: "O WAX655E é um Access Point WiFi 6 AX5400 com certificação IP67 para uso externo, ideal para ambientes de alta densidade que exigem conectividade robusta e confiável.",
      specs: [
        "AX5400, dual radio",
        "Smart Mesh e 2.5Gbps uplink",
        "NebulaFlex Pro (cloud/controller/standalone)",
        "Ideal para ambientes externos de alta densidade",
        "⚠️ Em processo de homologação ANATEL",
      ],
      launch: "2024-2025",
    },
    {
      name: "NWA90AX PRO",
      category: "Access Points",
      icon: Wifi,
      tagline: "WiFi 6 Indoor Multi-Gig",
      shortDescription: "Access Point WiFi 6 com uplink 2.5GbE e alto custo-benefício",
      imageUrl: "https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=600",
      fullDescription: "O NWA90AX PRO oferece WiFi 6 AX3000 com uplink 2.5GbE e antenas de alto ganho, proporcionando excelente custo-benefício para SMB e SOHO.",
      specs: [
        "AX3000 com 2.5GbE uplink",
        "3x antenas de alto ganho",
        "NebulaFlex (standalone/cloud)",
        "Custo-benefício para SMB e SOHO",
      ],
      launch: "2024",
    },
  ];

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="min-h-screen bg-background network-theme">
      <HeaderNetwork />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-tech-gradient opacity-5"></div>
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center animate-fade-in">
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Sparkles className="h-8 w-8 text-primary" />
            </div>
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">
              Lançamentos Zyxel Network <span className="bg-tech-gradient bg-clip-text text-transparent">2024-2025</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Conheça os mais recentes lançamentos em Switches, Firewalls e Access Points
            </p>
          </div>
        </div>
      </section>

      {/* Category Sections */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Switches Section */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <Zap className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold">Switches – Novos Lançamentos</h2>
            </div>
            <div className="space-y-6 max-w-5xl mx-auto">
              {launches
                .filter((launch) => launch.category === "Switches")
                .map((launch, index) => {
                  const globalIndex = launches.findIndex((l) => l.name === launch.name);
                  return (
                    <Collapsible
                      key={globalIndex}
                      open={openItems.includes(globalIndex)}
                      onOpenChange={() => toggleItem(globalIndex)}
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
                                <p className="text-sm text-primary font-semibold mb-3">
                                  {launch.tagline}
                                </p>
                                <p className="text-muted-foreground">{launch.shortDescription}</p>
                              </div>

                              <CollapsibleTrigger asChild>
                                <Button variant="outline" size="sm" className="flex-shrink-0">
                                  <ChevronDown
                                    className={`h-4 w-4 transition-transform duration-200 ${
                                      openItems.includes(globalIndex) ? "rotate-180" : ""
                                    }`}
                                  />
                                </Button>
                              </CollapsibleTrigger>
                            </div>

                            <CollapsibleContent className="space-y-4">
                              <div className="pt-4 border-t">
                                <p className="text-sm leading-relaxed mb-4">
                                  {launch.fullDescription}
                                </p>

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
                                  <Button asChild className="gap-2">
                                    <a
                                      href={`https://wa.me/5511951857253?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20${encodeURIComponent(
                                        launch.name
                                      )}%20da%20Zyxel.`}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      Solicitar Orçamento
                                    </a>
                                  </Button>
                                  <Button variant="outline">Baixar Datasheet</Button>
                                </div>
                              </div>
                            </CollapsibleContent>
                          </div>
                        </div>
                      </Card>
                    </Collapsible>
                  );
                })}
            </div>
          </div>

          {/* Firewalls Section */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <Shield className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold">🔥 Firewalls – Nova Geração</h2>
            </div>
            <div className="space-y-6 max-w-5xl mx-auto">
              {launches
                .filter((launch) => launch.category === "Firewalls")
                .map((launch, index) => {
                  const globalIndex = launches.findIndex((l) => l.name === launch.name);
                  return (
                    <Collapsible
                      key={globalIndex}
                      open={openItems.includes(globalIndex)}
                      onOpenChange={() => toggleItem(globalIndex)}
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
                                <p className="text-sm text-primary font-semibold mb-3">
                                  {launch.tagline}
                                </p>
                                <p className="text-muted-foreground">{launch.shortDescription}</p>
                              </div>

                              <CollapsibleTrigger asChild>
                                <Button variant="outline" size="sm" className="flex-shrink-0">
                                  <ChevronDown
                                    className={`h-4 w-4 transition-transform duration-200 ${
                                      openItems.includes(globalIndex) ? "rotate-180" : ""
                                    }`}
                                  />
                                </Button>
                              </CollapsibleTrigger>
                            </div>

                            <CollapsibleContent className="space-y-4">
                              <div className="pt-4 border-t">
                                <p className="text-sm leading-relaxed mb-4">
                                  {launch.fullDescription}
                                </p>

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
                                  <Button asChild className="gap-2">
                                    <a
                                      href={`https://wa.me/5511951857253?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20${encodeURIComponent(
                                        launch.name
                                      )}%20da%20Zyxel.`}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      Solicitar Orçamento
                                    </a>
                                  </Button>
                                  <Button variant="outline">Baixar Datasheet</Button>
                                </div>
                              </div>
                            </CollapsibleContent>
                          </div>
                        </div>
                      </Card>
                    </Collapsible>
                  );
                })}
            </div>
          </div>

          {/* Access Points Section */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Wifi className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold">📶 Access Points – WiFi 6/6E/7</h2>
            </div>
            <div className="space-y-6 max-w-5xl mx-auto">
              {launches
                .filter((launch) => launch.category === "Access Points")
                .map((launch, index) => {
                  const globalIndex = launches.findIndex((l) => l.name === launch.name);
                  return (
                    <Collapsible
                      key={globalIndex}
                      open={openItems.includes(globalIndex)}
                      onOpenChange={() => toggleItem(globalIndex)}
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
                                <p className="text-sm text-primary font-semibold mb-3">
                                  {launch.tagline}
                                </p>
                                <p className="text-muted-foreground">{launch.shortDescription}</p>
                              </div>

                              <CollapsibleTrigger asChild>
                                <Button variant="outline" size="sm" className="flex-shrink-0">
                                  <ChevronDown
                                    className={`h-4 w-4 transition-transform duration-200 ${
                                      openItems.includes(globalIndex) ? "rotate-180" : ""
                                    }`}
                                  />
                                </Button>
                              </CollapsibleTrigger>
                            </div>

                            <CollapsibleContent className="space-y-4">
                              <div className="pt-4 border-t">
                                <p className="text-sm leading-relaxed mb-4">
                                  {launch.fullDescription}
                                </p>

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
                                  <Button asChild className="gap-2">
                                    <a
                                      href={`https://wa.me/5511951857253?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20${encodeURIComponent(
                                        launch.name
                                      )}%20da%20Zyxel.`}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      Solicitar Orçamento
                                    </a>
                                  </Button>
                                  <Button variant="outline">Baixar Datasheet</Button>
                                </div>
                              </div>
                            </CollapsibleContent>
                          </div>
                        </div>
                      </Card>
                    </Collapsible>
                  );
                })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NetworkLancamentos;
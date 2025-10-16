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
      name: "XMG1915-10E",
      category: "Switches",
      icon: Zap,
      tagline: "Switch Smart Managed Multi-Gig 2.5G",
      shortDescription: "Switch Smart Managed com portas 2.5G e uplinks 10G SFP+",
      imageUrl: "https://images.unsplash.com/photo-1545987796-200677ee1011?w=600",
      fullDescription: "O XMG1915-10E é um switch smart managed multi-gig compacto e silencioso, ideal para ambientes SMB que demandam alta performance. Oferece gerenciamento híbrido NebulaFlex, permitindo uso standalone ou cloud.",
      specs: [
        "8 portas Multi-Gigabit 2.5G",
        "2 uplinks 10G SFP+",
        "Gerenciamento NebulaFlex (standalone ou cloud)",
        "Design compacto e silencioso",
        "Ideal para ambientes WiFi 6/6E",
        "Substitui linha XGS1210/1250",
      ],
      launch: "2024",
    },
    {
      name: "XMG1915-10EP",
      category: "Switches",
      icon: Zap,
      tagline: "Switch Smart Managed Multi-Gig 2.5G com PoE++",
      shortDescription: "Switch Smart Managed com portas 2.5G, uplinks 10G SFP+ e suporte PoE++",
      imageUrl: "https://images.unsplash.com/photo-1545987796-200677ee1011?w=600",
      fullDescription: "O XMG1915-10EP adiciona suporte PoE++ de 60W ao XMG1915-10E, tornando-o ideal para alimentar dispositivos de alta demanda como APs WiFi 6E e câmeras IP avançadas.",
      specs: [
        "8 portas Multi-Gigabit 2.5G com PoE++",
        "2 uplinks 10G SFP+",
        "PoE++ até 60W por porta",
        "Gerenciamento NebulaFlex (standalone ou cloud)",
        "Design compacto e silencioso",
        "Ideal para WiFi 6/6E e dispositivos IP de alta performance",
      ],
      launch: "2024",
    },
    {
      name: "XMG1915-18EP",
      category: "Switches",
      icon: Zap,
      tagline: "Switch Smart Managed Multi-Gig 2.5G 16 portas com PoE++",
      shortDescription: "Switch Smart Managed com 16 portas 2.5G, uplinks 10G SFP+ e PoE++",
      imageUrl: "https://images.unsplash.com/photo-1545987796-200677ee1011?w=600",
      fullDescription: "O XMG1915-18EP expande a capacidade da série com 16 portas Multi-Gig 2.5G e suporte PoE++, ideal para instalações de médio porte com múltiplos dispositivos de alta demanda.",
      specs: [
        "16 portas Multi-Gigabit 2.5G com PoE++",
        "2 uplinks 10G SFP+",
        "PoE++ até 60W por porta",
        "Gerenciamento NebulaFlex (standalone ou cloud)",
        "Design compacto e silencioso",
        "Ideal para SMB com WiFi 6/6E",
      ],
      launch: "2024",
    },
    {
      name: "XGS2220 Series",
      category: "Switches",
      icon: Zap,
      tagline: "Switch L3 Access Multi-Gig de Alto Desempenho",
      shortDescription: "Switch Layer 3 com portas Multi-Gig e stacking físico",
      imageUrl: "https://images.unsplash.com/photo-1545987796-200677ee1011?w=600",
      fullDescription: "A série XGS2220 oferece switches Layer 3 de alto desempenho com suporte a portas Multi-Gig (1G/2.5G/5G/10G), ideal para ambientes corporativos que exigem máxima performance e flexibilidade.",
      specs: [
        "Portas Multi-Gig (1G/2.5G/5G/10G)",
        "6 uplinks 10G (2 RJ45 Multi-G + 4 SFP+)",
        "Modelos com PoE++ (60W/960W)",
        "Stacking físico até 4 unidades",
        "Modo AVoIP dedicado",
        "NebulaFlex Pro com 1 ano Nebula Pro Pack",
        "Layer 3 com roteamento avançado",
      ],
      launch: "2024",
    },

    // FIREWALLS
    {
      name: "USG FLEX 100H",
      category: "Firewalls",
      icon: Shield,
      tagline: "Firewall Multi-Gig com uOS e IA em Nuvem",
      shortDescription: "Firewall de nova geração com sistema uOS e segurança com IA",
      imageUrl: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=600",
      fullDescription: "O USG FLEX 100H inaugura a nova série H de firewalls Zyxel com sistema operacional uOS otimizado, portas Multi-Gig e inteligência artificial em nuvem para proteção avançada.",
      specs: [
        "Sistema uOS (novo OS com interface otimizada)",
        "Portas 2.5G e opcionalmente 10G",
        "IA Cloud Security integrada",
        "Sandboxing e Anti-malware",
        "IPS/URL Filter",
        "Gerenciamento local ou via Nebula",
        "Substitui linha USG FLEX anterior",
      ],
      launch: "2024-2025",
    },
    {
      name: "USG FLEX 200H",
      category: "Firewalls",
      icon: Shield,
      tagline: "Firewall Multi-Gig com uOS - Performance Média",
      shortDescription: "Firewall de nova geração com throughput otimizado",
      imageUrl: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=600",
      fullDescription: "O USG FLEX 200H oferece performance aprimorada para empresas de médio porte, com portas Multi-Gig e recursos avançados de segurança com IA.",
      specs: [
        "Sistema uOS otimizado",
        "Portas 2.5G e 10G",
        "Alguns modelos com PoE+",
        "IA Cloud Security",
        "Sandboxing e Anti-malware avançado",
        "IPS/URL Filter integrado",
        "Gerenciamento híbrido (local/Nebula)",
      ],
      launch: "2024-2025",
    },
    {
      name: "USG FLEX 500H",
      category: "Firewalls",
      icon: Shield,
      tagline: "Firewall Multi-Gig com uOS - Alto Desempenho",
      shortDescription: "Firewall empresarial de alta performance",
      imageUrl: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=600",
      fullDescription: "O USG FLEX 500H é projetado para ambientes empresariais exigentes, oferecendo throughput elevado e recursos de segurança de nível corporativo.",
      specs: [
        "Sistema uOS com interface otimizada",
        "Portas 2.5G e 10G",
        "Modelos com PoE+ disponíveis",
        "IA Cloud Security",
        "Sandboxing e proteção avançada",
        "IPS/URL Filter enterprise-grade",
        "Gerenciamento local ou Nebula",
      ],
      launch: "2024-2025",
    },
    {
      name: "USG FLEX 700H",
      category: "Firewalls",
      icon: Shield,
      tagline: "Firewall Multi-Gig de Máxima Performance",
      shortDescription: "Firewall topo de linha com throughput até 15 Gbps",
      imageUrl: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=600",
      fullDescription: "O USG FLEX 700H é o firewall mais poderoso da série H, oferecendo throughput de até 15 Gbps e recursos avançados de segurança para grandes empresas.",
      specs: [
        "Throughput até 15 Gbps",
        "Sistema uOS otimizado",
        "Portas 2.5G e 10G",
        "Modelos com PoE+ disponíveis",
        "IA Cloud Security completa",
        "Sandboxing e Anti-malware enterprise",
        "IPS/URL Filter avançado",
        "Gerenciamento local ou via Nebula",
      ],
      launch: "2024-2025",
    },
    {
      name: "USG LITE 60AX",
      category: "Firewalls",
      icon: Shield,
      tagline: "Firewall com WiFi 6 Integrado",
      shortDescription: "Firewall compacto com WiFi 6 AX6000 integrado",
      imageUrl: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=600",
      fullDescription: "O USG LITE 60AX combina firewall e WiFi 6 em um único dispositivo compacto, ideal para escritórios domésticos e pequenas empresas que buscam simplicidade e segurança.",
      specs: [
        "WiFi 6 AX6000 dual-band integrado",
        "Dual 2.5GbE mGig ports",
        "Segurança integrada sem assinatura",
        "Gerenciamento via app Nebula",
        "Voltado a SOHO e pequenas empresas",
        "Setup simplificado via app móvel",
      ],
      launch: "2024",
    },

    // ACCESS POINTS
    {
      name: "WBE630S",
      category: "Access Points",
      icon: Wifi,
      tagline: "WiFi 7 BE12300 de Última Geração",
      shortDescription: "Access Point WiFi 7 com tecnologia MLO e BandFlex",
      imageUrl: "https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=600",
      fullDescription: "O WBE630S é o primeiro Access Point WiFi 7 da Zyxel, oferecendo velocidades de até 12,3 Gbps com tecnologia MLO (Multiple Link Operation) e Smart Antenna adaptativa, ideal para instituições de ensino e ambientes de alta densidade.",
      specs: [
        "WiFi 7 BE12300 (até 12,3 Gbps)",
        "Dual Radio 2.4GHz + 5GHz/6GHz (BandFlex)",
        "Tecnologia MLO (Multiple Link Operation)",
        "Smart Antenna adaptativa",
        "NebulaFlex Pro com 1 ano de licença",
        "Foco em instituições de ensino e alta densidade",
        "⚠️ Em processo de homologação ANATEL (2025)",
      ],
      launch: "2025",
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
        "WiFi 6 AX5400 dual radio",
        "Certificação IP67 para uso externo",
        "Smart Mesh integrado",
        "Uplink 2.5Gbps",
        "NebulaFlex Pro (cloud/controller/standalone)",
        "Ideal para ambientes externos de alta densidade",
        "⚠️ Em processo de homologação ANATEL",
      ],
      launch: "2025",
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
        "WiFi 6 AX3000",
        "Uplink 2.5GbE Multi-Gig",
        "3x antenas de alto ganho",
        "NebulaFlex (standalone/cloud)",
        "Custo-benefício otimizado para SMB e SOHO",
        "Design compacto e elegante",
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
              <h2 className="text-3xl font-bold">🧱 Switches – Novos Lançamentos</h2>
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
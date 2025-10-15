import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Network, Shield, Wifi, Router } from "lucide-react";
import { HeaderNetwork } from "@/components/HeaderNetwork";

const NetworkProdutos = () => {
  const [filtro, setFiltro] = useState("Todos");

  useEffect(() => {
    document.documentElement.classList.add("network-theme");
    document.documentElement.classList.remove("communication-theme");
    return () => {
      document.documentElement.classList.remove("network-theme");
    };
  }, []);

  const products = [
    {
      name: "Switch XGS1250-12",
      category: "Switches",
      icon: Network,
      description:
        "Switch gerenciável Multi-Gigabit de 12 portas com 10G uplinks",
      features: [
        "12 portas Multi-Gig",
        "2x 10G SFP+",
        "PoE+ 375W",
        "Nebula Cloud",
      ],
      price: "Consulte",
      imageUrl:
        "https://images.unsplash.com/photo-1545987796-200677ee1011?w=400",
    },
    {
      name: "Firewall USG FLEX 200",
      category: "Firewalls",
      icon: Shield,
      description: "Firewall empresarial de próxima geração com VPN e SD-WAN",
      features: ["Throughput 2 Gbps", "VPN IPSec/SSL", "SD-WAN", "IPS/IDP"],
      price: "Consulte",
      imageUrl:
        "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=400",
    },
    {
      name: "Access Point WAX610D",
      category: "WiFi",
      icon: Wifi,
      description:
        "Access Point indoor WiFi 6 (AX3000) com antena dual-optimized e suporte NebulaFlex Pro para gerenciamento em nuvem ou local.",
      features: [
        "WiFi 6 AX3000 (até 2,975 Mbps)",
        "Antena Dual-Optimized para parede ou teto",
        "2x2 (2.4GHz) + 4x4 (5GHz) MIMO",
        "Porta 2.5G Ethernet Multi-Gigabit",
        "Suporte NebulaFlex Pro (Cloud / Controller / Standalone)",
        "1 ano de licença Nebula Pro Pack incluso",
        "Até 220 m² / até 512 usuários",
      ],
      price: "Consulte",
      imageUrl:
        "https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=400",
    },
    {
      name: "Access Point NWA90AX",
      category: "WiFi",
      icon: Wifi,
      description:
        "Access Point indoor WiFi 6 (AX1800) ideal para pequenas empresas e ambientes de escritório com alta eficiência energética.",
      features: [
        "WiFi 6 AX1800 (até 1,775 Mbps)",
        "2x2 MIMO Dual-Radio (2.4GHz + 5GHz)",
        "Porta Gigabit Ethernet",
        "Suporte NebulaFlex (Cloud / Standalone)",
        "Gerenciamento simplificado via app Nebula",
        "Até 150 m² / até 256 usuários",
      ],
      price: "Consulte",
      imageUrl:
        "https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=400",
    },
    {
      name: "Access Point Outdoor WAX655E",
      category: "WiFi",
      icon: Wifi,
      description:
        "Access Point outdoor WiFi 6 (AX5400) de alto desempenho com IP67 e suporte NebulaFlex Pro, ideal para grandes áreas externas e alta densidade de usuários.",
      features: [
        "WiFi 6 AX5400 (até 5,400 Mbps)",
        "Dual-Radio 4x4 (5GHz) + 2x2 (2.4GHz)",
        "Porta 2.5G Multi-Gigabit PoE",
        "IP67 – proteção total contra intempéries",
        "Smart Mesh para interconexão sem fio",
        "NebulaFlex Pro (Cloud / Controller / Standalone)",
        "Até 250 metros / até 512 usuários",
      ],
      price: "Consulte",
      imageUrl:
        "https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=400",
    },
    {
      name: "Access Point WBE630S",
      category: "WiFi",
      icon: Router,
      description:
        "Access Point indoor WiFi 7 (BE12500) com suporte NebulaFlex Pro para gerenciamento em nuvem, projetado para alta densidade de usuários e ambientes corporativos.",
      features: [
        "WiFi 7 BE12500 (até 12,3 Gbps)",
        "BandFlex – operação em 5 GHz ou 6 GHz",
        "Smart Antenna com adaptação automática de sinal",
        "Porta 2.5G Multi-Gigabit Ethernet",
        "Suporte NebulaFlex Pro (Cloud / Standalone / Controller)",
        "1 ano de licença Nebula Pro Pack incluso",
        "Até 350 m² / até 1024 usuários",
      ],
      price: "Consulte",
      imageUrl:
        "https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=400",
    },
    {
      name: "Switch XS1930-12HP",
      category: "Switches",
      icon: Network,
      description: "Switch 10G gerenciável com PoE++ de alta potência",
      features: ["8x 10G RJ45", "4x 10G SFP+", "PoE++ 375W", "Layer 3"],
      price: "Consulte",
      imageUrl:
        "https://images.unsplash.com/photo-1545987796-200677ee1011?w=400",
    },
    {
      name: "Firewall ATP800",
      category: "Firewalls",
      icon: Shield,
      description: "Proteção avançada contra ameaças com Sandboxing",
      features: [
        "Throughput 8 Gbps",
        "Sandboxing",
        "AI Security",
        "Zero Trust",
      ],
      price: "Consulte",
      imageUrl:
        "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=400",
    },
  ];

  const categories = ["Todos", "Switches", "Firewalls", "WiFi"];

  const produtosFiltrados =
    filtro === "Todos"
      ? products
      : products.filter((p) => p.category === filtro);

  return (
    <div className="min-h-screen bg-background transition-colors duration-300 network-theme">
      <HeaderNetwork />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-tech-gradient opacity-5"></div>
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center animate-fade-in">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">
              Nossos{" "}
              <span className="bg-tech-gradient bg-clip-text text-transparent">
                Produtos
              </span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Soluções de rede e segurança para empresas de todos os tamanhos
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={filtro === category ? "default" : "outline"}
                size="sm"
                onClick={() => setFiltro(category)}
                className={`transition-all duration-300 ${
                  filtro === category
                    ? "shadow-lg shadow-primary/30 scale-105"
                    : "hover:scale-105"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {produtosFiltrados.length === 0 ? (
            <p className="text-center text-muted-foreground">
              Nenhum produto encontrado.
            </p>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {produtosFiltrados.map((product, index) => (
                <Card
                  key={index}
                  className="group overflow-hidden hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <CardHeader>
                    <div className="mb-2">
                      <Badge variant="secondary">{product.category}</Badge>
                    </div>
                    <CardTitle className="flex items-start gap-2 font-bold">
                      <product.icon className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      {product.name}
                    </CardTitle>
                    <CardDescription>{product.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-4">
                      {product.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="text-sm flex items-center gap-2"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-semibold text-primary">
                        {product.price}
                      </span>
                      <Button asChild variant="outline" size="sm">
                        <a
                          href={`https://wa.me/5511951857253`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-green-600 hover:text-green-700 hover:border-green-600"
                        >
                          Saiba Mais
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default NetworkProdutos;

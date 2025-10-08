import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Network, Shield, Wifi, Router } from "lucide-react";
import { Link } from "react-router-dom";
import zyxelLogo from "@/assets/zyxel-logo.png";

const Produtos = () => {
  const products = [
    {
      name: "Switch XGS1250-12",
      category: "Switches",
      icon: Network,
      description: "Switch gerenciável Multi-Gigabit de 12 portas com 10G uplinks",
      features: ["12 portas Multi-Gig", "2x 10G SFP+", "PoE+ 375W", "Nebula Cloud"],
      price: "Consulte",
      imageUrl: "https://images.unsplash.com/photo-1545987796-200677ee1011?w=400",
    },
    {
      name: "Firewall USG FLEX 200",
      category: "Firewalls",
      icon: Shield,
      description: "Firewall empresarial de próxima geração com VPN e SD-WAN",
      features: ["Throughput 2 Gbps", "VPN IPSec/SSL", "SD-WAN", "IPS/IDP"],
      price: "Consulte",
      imageUrl: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=400",
    },
    {
      name: "Access Point WAX650S",
      category: "WiFi",
      icon: Wifi,
      description: "AP WiFi 6 de alto desempenho com tecnologia MU-MIMO",
      features: ["WiFi 6 AX3600", "4x4 MU-MIMO", "PoE+", "Gestão Nebula"],
      price: "Consulte",
      imageUrl: "https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=400",
    },
    {
      name: "Router LTE7490-M904",
      category: "Routers",
      icon: Router,
      description: "Router 5G/LTE Cat.20 com WiFi 6 para conectividade móvel",
      features: ["5G/4G LTE", "WiFi 6 AX6000", "4 portas Gigabit", "Dual SIM"],
      price: "Consulte",
      imageUrl: "https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=400",
    },
    {
      name: "Switch XS1930-12HP",
      category: "Switches",
      icon: Network,
      description: "Switch 10G gerenciável com PoE++ de alta potência",
      features: ["8x 10G RJ45", "4x 10G SFP+", "PoE++ 375W", "Layer 3"],
      price: "Consulte",
      imageUrl: "https://images.unsplash.com/photo-1545987796-200677ee1011?w=400",
    },
    {
      name: "Firewall ATP800",
      category: "Firewalls",
      icon: Shield,
      description: "Proteção avançada contra ameaças com Sandboxing",
      features: ["Throughput 8 Gbps", "Sandboxing", "AI Security", "Zero Trust"],
      price: "Consulte",
      imageUrl: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=400",
    },
  ];

  const categories = ["Todos", "Switches", "Firewalls", "WiFi", "Routers"];

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
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-tech-gradient opacity-5"></div>
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center animate-fade-in">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">
              Nossos <span className="bg-tech-gradient bg-clip-text text-transparent">Produtos</span>
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
              <Button key={category} variant="outline" size="sm">
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
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
                  <CardTitle className="flex items-start gap-2">
                    <product.icon className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    {product.name}
                  </CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="text-sm flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-primary">{product.price}</span>
                    <Button variant="outline" size="sm">Saiba Mais</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Produtos;

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
import { Radio, Shield, Wifi, Router } from "lucide-react";
import { HeaderCommunication } from "@/components/HeaderCommunication";

const CommunicationProdutos = () => {
  const [filtro, setFiltro] = useState("Todos");

  useEffect(() => {
    document.documentElement.classList.add("communication-theme");
    document.documentElement.classList.remove("network-theme");
    return () => {
      document.documentElement.classList.remove("communication-theme");
    };
  }, []);

  const products = [
    {
      name: "Router LTE5388",
      category: "Routers",
      icon: Radio,
      description:
        "Router LTE Cat6 com WiFi 6 para conectividade móvel empresarial",
      features: [
        "LTE Cat6 300 Mbps",
        "WiFi 6 AX1800",
        "Dual SIM failover",
        "VPN segura",
      ],
      price: "Consulte",
      imageUrl:
        "https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=400",
    },
    {
      name: "Gateway LTE7490",
      category: "Gateways",
      icon: Shield,
      description: "Gateway 5G empresarial com firewall integrado",
      features: ["5G Sub-6GHz", "WiFi 6E", "SD-WAN", "Firewall Integrado"],
      price: "Consulte",
      imageUrl:
        "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=400",
    },
    {
      name: "Modem VMG3927",
      category: "Modems",
      icon: Wifi,
      description:
        "Modem VDSL2/ADSL2+ com WiFi AC1600 para serviços de banda larga",
      features: [
        "VDSL2 Profile 35b",
        "WiFi AC1600",
        "Portas Gigabit",
        "USB 3.0",
      ],
      price: "Consulte",
      imageUrl:
        "https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=400",
    },
    {
      name: "CPE Outdoor LTE7410",
      category: "CPE",
      icon: Router,
      description:
        "CPE outdoor LTE Cat4 com WiFi AC para áreas remotas",
      features: [
        "LTE Cat4 150 Mbps",
        "WiFi AC1200",
        "IP65 outdoor",
        "Antenas externas",
      ],
      price: "Consulte",
      imageUrl:
        "https://images.unsplash.com/photo-1545987796-200677ee1011?w=400",
    },
    {
      name: "Router Mesh WiFi 6 WSQ60",
      category: "WiFi",
      icon: Wifi,
      description:
        "Sistema Mesh WiFi 6 tri-band para cobertura total",
      features: [
        "WiFi 6 AX5400",
        "Tri-band mesh",
        "Cobertura 500m²",
        "Ethernet backhaul",
      ],
      price: "Consulte",
      imageUrl:
        "https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=400",
    },
  ];

  const categories = ["Todos", "Routers", "Gateways", "Modems", "CPE", "WiFi"];

  const produtosFiltrados =
    filtro === "Todos"
      ? products
      : products.filter((p) => p.category === filtro);

  return (
    <div className="min-h-screen bg-background transition-colors duration-300 communication-theme">
      <HeaderCommunication />

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
              Soluções de comunicação e conectividade para todos os ambientes
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
                          href={`https://wa.me/5511951857253?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20${encodeURIComponent(product.name)}%20da%20Zyxel.`}
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

export default CommunicationProdutos;

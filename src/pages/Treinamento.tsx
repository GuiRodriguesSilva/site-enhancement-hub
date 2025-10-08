import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Download, Search, GraduationCap } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import zyxelLogo from "@/assets/zyxel-logo.png";

const Treinamento = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const trainings = [
    {
      title: "Configuração Básica de Switches",
      category: "Switches",
      description: "Aprenda a configurar switches Zyxel do zero",
      pdfUrl: "#",
    },
    {
      title: "Firewall e Segurança Avançada",
      category: "Segurança",
      description: "Proteção completa com firewalls Zyxel",
      pdfUrl: "#",
    },
    {
      title: "Gestão Nebula Cloud",
      category: "Cloud",
      description: "Gerenciamento em nuvem com Nebula",
      pdfUrl: "#",
    },
    {
      title: "Access Points e WiFi 6",
      category: "WiFi",
      description: "Implantação e otimização de redes WiFi",
      pdfUrl: "#",
    },
    {
      title: "VPN e Conectividade Remota",
      category: "VPN",
      description: "Configuração de VPN para trabalho remoto",
      pdfUrl: "#",
    },
    {
      title: "Monitoramento de Rede",
      category: "Monitoramento",
      description: "Ferramentas de análise e diagnóstico",
      pdfUrl: "#",
    },
  ];

  const filteredTrainings = trainings.filter(
    (training) =>
      training.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      training.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <GraduationCap className="h-8 w-8 text-primary" />
            </div>
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">
              Treinamentos <span className="bg-tech-gradient bg-clip-text text-transparent">Zyxel</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Capacite sua equipe com nossos materiais de treinamento especializados
            </p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Buscar treinamento por nome ou categoria..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trainings Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredTrainings.map((training, index) => (
              <Card key={index} className="group hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
                <CardHeader>
                  <div className="mb-2">
                    <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                      {training.category}
                    </span>
                  </div>
                  <CardTitle className="text-xl">{training.title}</CardTitle>
                  <CardDescription>{training.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full gap-2" variant="outline">
                    <Download className="h-4 w-4" />
                    Download PDF
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredTrainings.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">
                Nenhum treinamento encontrado. Tente outro termo de busca.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Treinamento;

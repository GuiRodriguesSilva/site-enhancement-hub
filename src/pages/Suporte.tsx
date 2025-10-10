import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Headphones, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import zyxelLogo from "@/assets/zyxel-logo.png";

const Suporte = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Solicitação enviada!",
      description: "Nossa equipe entrará em contato em breve.",
    });
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
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-tech-gradient opacity-5"></div>
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center animate-fade-in">
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Headphones className="h-8 w-8 text-primary" />
            </div>
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">
              Suporte{" "}
              <span className="bg-tech-gradient bg-clip-text text-transparent">
                Técnico
              </span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Nossa equipe está pronta para ajudar você com qualquer problema
              técnico
            </p>
          </div>
        </div>
      </section>

      {/* Support Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl">
            <Card>
              <CardHeader>
                <CardTitle>Abertura de Chamado</CardTitle>
                <CardDescription>
                  Preencha o formulário abaixo e nossa equipe técnica entrará em
                  contato
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome Completo *</Label>
                      <Input id="name" placeholder="Seu nome" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">E-mail *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="seu@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefone *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="(00) 00000-0000"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Empresa</Label>
                      <Input id="company" placeholder="Nome da empresa" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="product">Produto/Modelo</Label>
                    <Input id="product" placeholder="Ex: Switch XGS1250-12" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Assunto *</Label>
                    <Input
                      id="subject"
                      placeholder="Resumo do problema"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="issue">Descrição do Problema *</Label>
                    <Textarea
                      id="issue"
                      placeholder="Descreva detalhadamente o problema que está enfrentando..."
                      className="min-h-[150px]"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="troubleshooting">
                      Troubleshooting Realizado
                    </Label>
                    <Textarea
                      id="troubleshooting"
                      placeholder="Descreva as tentativas de solução que você já realizou..."
                      className="min-h-[100px]"
                    />
                  </div>

                  <Button type="submit" className="w-full gap-2" size="lg">
                    <Send className="h-4 w-4" />
                    Enviar Solicitação
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Quick Info */}
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    Horário de Atendimento
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Segunda a Sexta: 8h às 18h
                    <br />
                    Sábado: Fechado <br />
                    Domingo: Fechado
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Tempo de Resposta</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Crítico: 2 horas
                    <br />
                    Alto: 4 horas
                    <br />
                    Normal: 24 horas
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Suporte;

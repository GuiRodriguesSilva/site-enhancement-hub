import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Headphones, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { HeaderNetwork } from "@/components/HeaderNetwork";

const NetworkSuport = () => {
  const { toast } = useToast();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Solicitação enviada!", description: "Nossa equipe Network entrará em contato em breve." });
  };

  return (
    <div className="min-h-screen bg-background network-theme">
      <HeaderNetwork />
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-tech-gradient opacity-5"></div>
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center animate-fade-in">
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Headphones className="h-8 w-8 text-primary" />
            </div>
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">
              Suporte <span className="bg-tech-gradient bg-clip-text text-transparent">Técnico</span>
            </h1>
            <p className="text-lg text-muted-foreground">Nossa equipe Network está pronta para ajudar você</p>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl">
            <Card>
              <CardHeader>
                <CardTitle>Abertura de Chamado</CardTitle>
                <CardDescription>Preencha o formulário abaixo</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2"><Label htmlFor="name">Nome *</Label><Input id="name" required /></div>
                    <div className="space-y-2"><Label htmlFor="email">E-mail *</Label><Input id="email" type="email" required /></div>
                  </div>
                  <div className="space-y-2"><Label htmlFor="issue">Descrição *</Label><Textarea id="issue" required /></div>
                  <Button type="submit" className="w-full gap-2" size="lg"><Send className="h-4 w-4" />Enviar</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NetworkSuport;

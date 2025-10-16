import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { HeaderCommunication } from "@/components/HeaderCommunication";
import { useEffect } from "react";

const CommunicationContato = () => {
  useEffect(() => {
    document.documentElement.classList.add("communication-theme");
    document.documentElement.classList.remove("network-theme");
    return () => {
      document.documentElement.classList.remove("communication-theme");
    };
  }, []);

  const contacts = [
    {
      title: "Gerente Comercial Nacional de Vendas",
      name: "Diogo Nakazawa",
      phone: ".",
      email: ".",
      department: "Departamento Comercial",
    },
    {
      title: "Gerente de Contas Estratégicas",
      name: "Fernada Hikawa",
      phone: ".",
      email: ".",
      department: "Departamento Comercial",
    },
    {
      title: "Analista de Pré-Vendas",
      name: "Felippe Sic",
      phone: ".",
      email: ".",
      department: "Departamento Comercial",
    },
    {
      title: "Cordenador Comercial",
      name: "José Humberto",
      phone: ".",
      email: ".",
      department: "Departamento Comercial",
    },
    {
      title: "Analista de Suporte Técnico",
      name: "Alexandre Inacio",
      phone: ".",
      email: ".",
      department: "Departamento Técnico",
    },
    {
      title: "Suporte Técnico",
      name: "Guilherme Rodrigues da Silva",
      phone: ".",
      email: ".",
      department: "Departamento Técnico",
    },
  ];

  return (
    <div className="min-h-screen bg-background communication-theme">
      <HeaderCommunication />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-tech-gradient opacity-5"></div>
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center animate-fade-in">
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Phone className="h-8 w-8 text-primary" />
            </div>
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">
              Entre em{" "}
              <span className="bg-tech-gradient bg-clip-text text-transparent">
                Contato
              </span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Nossa equipe está pronta para atender você
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {contacts.map((contact, index) => (
              <Card
                key={index}
                className="hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
              >
                <CardHeader>
                  <CardTitle className="text-xl">{contact.title}</CardTitle>
                  <CardDescription>{contact.department}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                        <Phone className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">{contact.name}</p>
                        <a
                          href={`tel:${contact.phone.replace(/\D/g, "")}`}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {contact.phone}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 text-sm">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                        <Mail className="h-4 w-4 text-primary" />
                      </div>
                      <a
                        href={`mailto:${contact.email}`}
                        className="text-muted-foreground hover:text-primary transition-colors break-all"
                      >
                        {contact.email}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-12 grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Endereço
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Rua. Urussuí, 300 - Conjunto 12/13
                  <br />
                  Itaim Bibi, São Paulo - SP
                  <br />
                  CEP: 04542-050
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Horário de Atendimento
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Segunda a Sexta: 8h às 18h
                  <br />
                  Sábado: Fechado
                  <br />
                  Domingo e Feriados: Fechado
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CommunicationContato;

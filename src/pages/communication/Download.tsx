import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Download, Search, FileText } from "lucide-react";
import { useState, useEffect } from "react";
import { HeaderCommunication } from "@/components/HeaderCommunication";

const CommunicationDownload = () => {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    document.documentElement.classList.add("communication-theme");
    document.documentElement.classList.remove("network-theme");
    return () => {
      document.documentElement.classList.remove("communication-theme");
    };
  }, []);

  const downloads = [
    {
      title: "Manual LTE7490-M904",
      category: "5G Gateways",
      description: "Manual completo do gateway 5G empresarial",
      fileSize: "2.4 MB",
      pdfUrl: "#",
    },
    {
      title: "Datasheet WSQ60",
      category: "WiFi Mesh",
      description: "Especificações técnicas do sistema mesh WiFi 6",
      fileSize: "1.8 MB",
      pdfUrl: "#",
    },
    {
      title: "Guia Rápido LTE5398",
      category: "LTE Routers",
      description: "Guia de instalação e configuração rápida",
      fileSize: "1.2 MB",
      pdfUrl: "#",
    },
    {
      title: "Firmware VMG8825",
      category: "Modems",
      description: "Última versão do firmware para VMG8825",
      fileSize: "45 MB",
      pdfUrl: "#",
    },
    {
      title: "Manual VMG3927",
      category: "Modems",
      description: "Manual do usuário completo",
      fileSize: "3.1 MB",
      pdfUrl: "#",
    },
    {
      title: "Catálogo Produtos 2025",
      category: "Geral",
      description: "Catálogo completo de produtos Communication",
      fileSize: "8.5 MB",
      pdfUrl: "#",
    },
  ];

  const filteredDownloads = downloads.filter(
    (download) =>
      download.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      download.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      download.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background communication-theme">
      <HeaderCommunication />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-tech-gradient opacity-5"></div>
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center animate-fade-in">
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <FileText className="h-8 w-8 text-primary" />
            </div>
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">
              Central de{" "}
              <span className="bg-tech-gradient bg-clip-text text-transparent">
                Downloads
              </span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Manuais, datasheets, firmwares e documentação técnica
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
                placeholder="Buscar por nome, categoria ou descrição..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Downloads Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredDownloads.map((download, index) => (
              <Card key={index} className="group hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
                <CardHeader>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                      {download.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{download.fileSize}</span>
                  </div>
                  <CardTitle className="text-xl">{download.title}</CardTitle>
                  <CardDescription>{download.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full gap-2" variant="outline">
                    <Download className="h-4 w-4" />
                    Download
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredDownloads.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">
                Nenhum arquivo encontrado. Tente outro termo de busca.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default CommunicationDownload;

import { HeaderNetwork } from "@/components/HeaderNetwork";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download as DownloadIcon, FileText, Package } from "lucide-react";
import { useEffect } from "react";

const NetworkDownload = () => {
  useEffect(() => {
    document.documentElement.classList.add("network-theme");
    document.documentElement.classList.remove("communication-theme");
    
    return () => {
      document.documentElement.classList.remove("network-theme");
    };
  }, []);

  const downloads = [
    {
      title: "Firmware NWA Series",
      description: "Firmware atualizado para Access Points série NWA",
      version: "v6.70",
      size: "45 MB",
      icon: Package,
    },
    {
      title: "Switch Management Software",
      description: "Software de gerenciamento para switches Zyxel",
      version: "v2.5.1",
      size: "120 MB",
      icon: Package,
    },
    {
      title: "Documentação Técnica",
      description: "Manuais e guias de instalação completos",
      version: "2024",
      size: "15 MB",
      icon: FileText,
    },
  ];

  return (
    <div className="min-h-screen bg-background network-theme">
      <HeaderNetwork />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Downloads Network</h1>
            <p className="text-xl text-muted-foreground">
              Drivers, firmware e documentação para produtos Network
            </p>
          </div>

          <div className="grid gap-6">
            {downloads.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <item.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl mb-2">{item.title}</CardTitle>
                        <CardDescription className="text-base">{item.description}</CardDescription>
                        <div className="flex gap-4 mt-2 text-sm text-muted-foreground">
                          <span>Versão: {item.version}</span>
                          <span>Tamanho: {item.size}</span>
                        </div>
                      </div>
                    </div>
                    <Button>
                      <DownloadIcon className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <footer className="border-t mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <img src="/zyxel-logo.png" alt="Zyxel Logo" className="h-8" />
              <span className="text-sm text-muted-foreground">© 2024 Zyxel Brasil. Todos os direitos reservados.</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NetworkDownload;

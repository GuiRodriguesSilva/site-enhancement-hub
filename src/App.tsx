import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lobby from "./pages/Lobby";
import NetworkIndex from "./pages/network/Index";
import NetworkProdutos from "./pages/network/Produtos";
import NetworkTreinamento from "./pages/network/Treinamento";
import NetworkSuport from "./pages/network/Suporte";
import NetworkLancamentos from "./pages/network/Lancamentos";
import NetworkContato from "./pages/network/Contato";
import NetworkDownload from "./pages/network/Download";
import CommunicationIndex from "./pages/communication/Index";
import CommunicationProdutos from "./pages/communication/Produtos";
import CommunicationSuport from "./pages/communication/Suporte";
import CommunicationLancamentos from "./pages/communication/Lancamentos";
import CommunicationContato from "./pages/communication/Contato";
import CommunicationDownload from "./pages/communication/Download";
import Lancamentos from "./pages/Lancamentos";
import Contato from "./pages/Contato";
import Download from "./pages/Download";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Lobby />} />
          <Route path="/network" element={<NetworkIndex />} />
          <Route path="/network/produtos" element={<NetworkProdutos />} />
          <Route path="/network/treinamento" element={<NetworkTreinamento />} />
          <Route path="/network/suporte" element={<NetworkSuport />} />
          <Route path="/network/lancamentos" element={<NetworkLancamentos />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/download" element={<Download />} />
          <Route path="/network/contato" element={<NetworkContato />} />
          <Route path="/network/download" element={<NetworkDownload />} />
          <Route path="/communication" element={<CommunicationIndex />} />
          <Route path="/communication/produtos" element={<CommunicationProdutos />} />
          <Route path="/communication/suporte" element={<CommunicationSuport />} />
          <Route path="/communication/lancamentos" element={<CommunicationLancamentos />} />
          <Route path="/communication/contato" element={<CommunicationContato />} />
          <Route path="/communication/download" element={<CommunicationDownload />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

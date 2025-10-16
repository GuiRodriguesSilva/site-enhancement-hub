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
import CommunicationIndex from "./pages/communication/Index";
import CommunicationProdutos from "./pages/communication/Produtos";
import CommunicationTreinamento from "./pages/communication/Treinamento";
import CommunicationSuport from "./pages/communication/Suporte";
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
          <Route path="/network/contato" element={<Contato />} />
          <Route path="/network/download" element={<Download />} />
          <Route path="/communication" element={<CommunicationIndex />} />
          <Route path="/communication/produtos" element={<CommunicationProdutos />} />
          <Route path="/communication/treinamento" element={<CommunicationTreinamento />} />
          <Route path="/communication/suporte" element={<CommunicationSuport />} />
          <Route path="/communication/lancamentos" element={<Lancamentos />} />
          <Route path="/communication/contato" element={<Contato />} />
          <Route path="/communication/download" element={<Download />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

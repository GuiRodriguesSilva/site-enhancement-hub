import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Treinamento from "./pages/Treinamento";
import Produtos from "./pages/Produtos";
import Suporte from "./pages/Suporte";
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
          <Route path="/" element={<Index />} />
          <Route path="/treinamento" element={<Treinamento />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/suporte" element={<Suporte />} />
          <Route path="/lancamentos" element={<Lancamentos />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/download" element={<Download />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import DNATestPage from "./pages/DNATestPage";
import FamilyTreePage from "./pages/FamilyTreePage";
import PhotoToolsPage from "./pages/PhotoToolsPage";
import RecordsPage from "./pages/RecordsPage";
import CommunityPage from "./pages/CommunityPage";
import PricingPage from "./pages/PricingPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
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
          <Route path="/dna-test" element={<DNATestPage />} />
          <Route path="/family-tree" element={<FamilyTreePage />} />
          <Route path="/photo-tools" element={<PhotoToolsPage />} />
          <Route path="/records" element={<RecordsPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          {/* Placeholder routes - redirect to main pages */}
          <Route path="/features/*" element={<PhotoToolsPage />} />
          <Route path="/about" element={<CommunityPage />} />
          <Route path="/careers" element={<CommunityPage />} />
          <Route path="/press" element={<CommunityPage />} />
          <Route path="/blog" element={<CommunityPage />} />
          <Route path="/help" element={<CommunityPage />} />
          <Route path="/contact" element={<CommunityPage />} />
          <Route path="/faq" element={<PricingPage />} />
          <Route path="/privacy" element={<PricingPage />} />
          <Route path="/terms" element={<PricingPage />} />
          <Route path="/accessibility" element={<PricingPage />} />
          <Route path="/cookies" element={<PricingPage />} />
          <Route path="/forgot-password" element={<LoginPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

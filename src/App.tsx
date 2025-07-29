
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useExitIntent } from "@/hooks/useExitIntent";
import ExitIntentPopup from "@/components/ExitIntentPopup";
import Index from "./pages/Index";
import Features from "./pages/Features";
import Services from "./pages/Services";
import BookDemo from "./pages/BookDemo";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import FAQ from "./pages/FAQ";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import TwoFactorVerification from "./pages/TwoFactorVerification";
import SuperAdmin from "./pages/SuperAdmin";
import SuperAdminLogin from "./pages/SuperAdminLogin";
import Payment from "./pages/Payment";
import Pricing from "./pages/Pricing";
import Landing from "./pages/Landing";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import SupportCenter from "./pages/SupportCenter";
import PharmacyContact from "./pages/PharmacyContact";
import ThankYou from "./pages/ThankYou";
import { CategoryPage } from "./components/support/CategoryPage";
import { TutorialPage } from "./components/support/TutorialPage";

const queryClient = new QueryClient();

const AppContent = () => {
  const { isTriggered, resetTrigger } = useExitIntent();

  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/features" element={<Features />} />
        <Route path="/services" element={<Services />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/book-demo" element={<BookDemo />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/support" element={<SupportCenter />} />
        <Route path="/support/:categorySlug" element={<CategoryPage />} />
        <Route path="/support/:categorySlug/:tutorialSlug" element={<TutorialPage />} />
        <Route path="/pharmacy-contact" element={<PharmacyContact />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/super-admin" element={<SuperAdmin />} />
        <Route path="/super-admin-login" element={<SuperAdminLogin />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verify-2fa" element={<TwoFactorVerification />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/thank-you" element={<ThankYou />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ExitIntentPopup isOpen={isTriggered} onClose={resetTrigger} />
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

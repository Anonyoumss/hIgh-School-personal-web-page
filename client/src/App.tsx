import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider, useLanguage } from "@/components/language-provider";

import Navbar from "@/components/Navbar";
import WindowFrame from "@/components/WindowFrame";
import NotFound from "@/pages/not-found";
import AnimatedBackground from "@/components/AnimatedBackground";

// Import components directly as pages
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

function Router() {
  const [location] = useLocation();
  const { t } = useLanguage();

  return (
    <div className="min-h-screen pt-24 pb-8 px-4 md:px-6 flex flex-col relative">
      <AnimatedBackground />
      <Navbar />
      
      <div className="flex-1 flex items-center justify-center w-full pt-4 z-10">
        <AnimatePresence mode="wait">
          <Switch location={location} key={location}>
            <Route path="/">
              <WindowFrame title={t.window.homeTitle}>
                <Hero />
              </WindowFrame>
            </Route>
            
            <Route path="/about">
              <WindowFrame title={t.window.aboutTitle}>
                <About />
              </WindowFrame>
            </Route>
            
            <Route path="/projects">
              <WindowFrame title={t.window.projectsTitle}>
                <Projects />
              </WindowFrame>
            </Route>
            
            <Route path="/contact">
              <WindowFrame title={t.window.contactTitle}>
                <Contact />
              </WindowFrame>
            </Route>
            
            <Route>
               <WindowFrame title={t.window.notFound}>
                <NotFound />
              </WindowFrame>
            </Route>
          </Switch>
        </AnimatePresence>
      </div>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <LanguageProvider>
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </LanguageProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;

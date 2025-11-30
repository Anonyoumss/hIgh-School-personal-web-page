import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Coffee, Home, User, Code, Mail, Moon, Sun, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";
import { useLanguage } from "@/components/language-provider";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
  const { setTheme, theme } = useTheme();
  const { t, setLanguage, language } = useLanguage();

  const navLinks = [
    { name: t.nav.home, href: "/", icon: Home },
    { name: t.nav.about, href: "/about", icon: User },
    { name: t.nav.projects, href: "/projects", icon: Code },
    { name: t.nav.contact, href: "/contact", icon: Mail },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-6 px-4 pointer-events-none">
      <div className="container mx-auto max-w-6xl flex justify-between items-start">
        {/* Logo / Brand */}
        <div className="pointer-events-auto bg-white dark:bg-ink border-2 border-ink dark:border-white/20 px-4 py-2 rounded-xl shadow-hard-sm flex items-center gap-2">
          <div className="w-8 h-8 flex items-center justify-center border border-ink dark:border-white/20 rotate-3 hover:rotate-0 transition-transform">
            <img src="/favicon.png" alt="Logo" className="w-full h-full object-contain" />
          </div>
          <span className="font-heading font-bold text-lg tracking-tight text-ink dark:text-white hidden sm:inline">
            {t.nav.brand}
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex pointer-events-auto bg-white dark:bg-ink border-2 border-ink dark:border-white/20 rounded-xl shadow-hard-sm p-2 gap-2 items-center">
          {navLinks.map((link) => {
            const isActive = location === link.href;
            const Icon = link.icon;
            return (
              <Link key={link.name} href={link.href}>
                <button
                  className={`
                    px-4 py-2 rounded-lg font-heading font-bold text-sm transition-all flex items-center gap-2
                    ${isActive 
                      ? "bg-ink dark:bg-white text-white dark:text-ink shadow-sm scale-105" 
                      : "text-ink dark:text-white hover:bg-cream dark:hover:bg-white/10 hover:text-coral"}
                  `}
                >
                  <Icon className={`w-4 h-4 ${isActive ? "text-coral dark:text-coral" : "text-current"}`} />
                  {link.name}
                </button>
              </Link>
            );
          })}
        </div>

        {/* Right Actions */}
        <div className="pointer-events-auto flex gap-2">
           {/* Language Toggle */}
           <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="bg-white dark:bg-ink border-2 border-ink dark:border-white/20 shadow-hard-sm hover:bg-cream dark:hover:bg-white/10 hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all"
              >
                <Globe className="h-[1.2rem] w-[1.2rem] text-ink dark:text-white" />
                <span className="sr-only">Language</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="font-heading font-bold">
              <DropdownMenuItem onClick={() => setLanguage("EN")}>English (EN)</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage("ES")}>Español (ES)</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage("FR")}>Français (FR)</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage("AR")}>العربية (AR)</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="bg-white dark:bg-ink border-2 border-ink dark:border-white/20 shadow-hard-sm hover:bg-cream dark:hover:bg-white/10 hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all"
          >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-ink" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-white" />
            <span className="sr-only">Toggle theme</span>
          </Button>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="bg-white dark:bg-ink border-2 border-ink dark:border-white/20 shadow-hard-sm hover:bg-cream dark:hover:bg-white/10 hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all"
            >
              {isOpen ? <X className="text-ink dark:text-white" /> : <Menu className="text-ink dark:text-white" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
            className="md:hidden pointer-events-auto absolute top-20 right-4 left-4 bg-white dark:bg-ink border-2 border-ink dark:border-white/20 rounded-xl shadow-hard p-4 z-50"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => {
                 const isActive = location === link.href;
                 const Icon = link.icon;
                 return (
                  <Link key={link.name} href={link.href}>
                    <button
                      onClick={() => setIsOpen(false)}
                      className={`
                        w-full text-left px-4 py-3 rounded-lg font-heading font-bold text-lg transition-all flex items-center gap-3
                        ${isActive 
                          ? "bg-ink dark:bg-white text-white dark:text-ink" 
                          : "text-ink dark:text-white hover:bg-cream dark:hover:bg-white/10 hover:text-coral"}
                      `}
                    >
                      <Icon className={`w-5 h-5 ${isActive ? "text-coral" : "text-current"}`} />
                      {link.name}
                    </button>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

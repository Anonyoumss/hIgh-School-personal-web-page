import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import heroBg from "@assets/generated_images/a_hero_background_featuring_study_materials_and_coding_elements..png";
import avatar from "@assets/generated_images/teen_profile_with_hood_and_cyan_accents.png";
import { useLanguage } from "@/components/language-provider";

export default function Hero() {
  const { t, dir } = useLanguage();
  
  return (
    <div className="min-h-full p-8 md:p-12 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Elements inside window */}
      <div className="absolute top-[-50%] right-[-10%] w-[80%] h-[80%] bg-teal/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-[-50%] left-[-10%] w-[80%] h-[80%] bg-coral/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="grid md:grid-cols-2 gap-12 items-center w-full max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: dir === "rtl" ? 50 : -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-2 md:order-1 text-center md:text-start"
        >
          <div className="inline-block px-4 py-2 bg-sky rounded-full text-white font-heading font-bold text-sm mb-6 shadow-hard-sm rotate-[-2deg]">
            {t.hero.greeting}
          </div>
          <h1 className="font-heading text-5xl md:text-7xl font-extrabold text-ink dark:text-white leading-tight mb-6">
            {t.hero.heading1}<span className="text-coral underline decoration-wavy decoration-4 underline-offset-4">{t.hero.headingIdeas}</span>
            {t.hero.heading2}
            <br />
            {t.hero.heading3}<span className="text-teal">{t.hero.headingCode}</span>.
          </h1>
          <p className="font-sans text-xl text-ink/80 dark:text-white/80 mb-8 max-w-lg leading-relaxed mx-auto md:mx-0">
            {t.hero.subheading}
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            <Link href="/projects">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-ink dark:bg-white text-white dark:text-ink font-heading font-bold rounded-xl shadow-hard hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all flex items-center gap-2"
              >
                {t.hero.viewWork} <ArrowRight className={`w-4 h-4 ${dir === 'rtl' ? 'rotate-180' : ''}`} />
              </motion.button>
            </Link>
            <Link href="/about">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white dark:bg-black text-ink dark:text-white border-2 border-ink dark:border-white/20 font-heading font-bold rounded-xl shadow-hard hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
              >
                {t.hero.aboutMe}
              </motion.button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-1 md:order-2 relative flex justify-center"
        >
          <div className="relative w-full max-w-md aspect-square">
            {/* Decorative backing shapes */}
            <div className="absolute inset-0 bg-coral rounded-3xl rotate-6 translate-x-4 translate-y-4 border-2 border-ink"></div>
            <div className="absolute inset-0 bg-teal rounded-3xl -rotate-3 -translate-x-2 -translate-y-2 border-2 border-ink"></div>
            
            {/* Main Image Container */}
            <div className="relative w-full h-full bg-white dark:bg-black rounded-2xl border-2 border-ink dark:border-white/20 overflow-hidden shadow-hard-lg">
              <img 
                src={heroBg} 
                alt="Study Desk Background" 
                className="absolute inset-0 w-full h-full object-cover opacity-20"
              />
              <div className="absolute inset-0 flex items-center justify-center p-8">
                 <img 
                  src={avatar} 
                  alt="Alex Avatar" 
                  className="w-full h-full object-contain drop-shadow-xl hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Floating Stickers */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 bg-yellow-300 p-4 rounded-lg border-2 border-ink dark:border-white/20 shadow-hard-sm rotate-12"
            >
              <span className="text-2xl">🚀</span>
            </motion.div>
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-8 -left-4 bg-mint p-3 rounded-lg border-2 border-ink dark:border-white/20 shadow-hard-sm -rotate-6"
            >
              <span className="font-mono font-bold text-ink">{t.hero.stickerGit}</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}


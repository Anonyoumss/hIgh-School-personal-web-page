import { motion } from "framer-motion";
import { Code, BookOpen, Star, MapPin, Calendar, Box, Brain, Cpu, Palette, Zap, BarChart3 } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

export default function About() {
  const { t, dir } = useLanguage();

  return (
    <div className="p-8 md:p-12">
      <div className="max-w-4xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-4xl md:text-5xl font-bold text-ink dark:text-white mb-4"
          >
            {t.about.title}
          </motion.h2>
          <div className="h-2 w-32 bg-teal mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div 
            initial={{ opacity: 0, x: dir === "rtl" ? 30 : -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-cream dark:bg-zinc-900 p-8 rounded-2xl border-2 border-ink dark:border-white/20 shadow-hard relative"
          >
            <div className={`absolute -top-4 ${dir === "rtl" ? "-right-4" : "-left-4"} bg-coral text-white px-4 py-1 font-heading font-bold border-2 border-ink dark:border-white/20 shadow-hard-sm -rotate-2`}>
              {t.about.bioTag}
            </div>
            <p className="font-sans text-lg text-ink dark:text-white mb-6 leading-relaxed">
              {t.about.bio1}
            </p>
            <p className="font-sans text-lg text-ink dark:text-white mb-6 leading-relaxed">
              {t.about.bio2}
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="flex items-center gap-2 text-ink dark:text-white font-bold font-heading">
                <MapPin className="text-coral" /> {t.about.location}
              </div>
              <div className="flex items-center gap-2 text-ink dark:text-white font-bold font-heading">
                <Calendar className="text-teal" /> {t.about.class}
              </div>
              <div className="flex items-center gap-2 text-ink dark:text-white font-bold font-heading">
                <Code className="text-sky" /> {t.about.stack}
              </div>
              <div className="flex items-center gap-2 text-ink dark:text-white font-bold font-heading">
                <BookOpen className="text-sky" /> {t.about.coffee}
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: dir === "rtl" ? -30 : 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="grid gap-6"
          >
            <div className="bg-sky p-6 rounded-xl border-2 border-ink dark:border-white/20 shadow-hard-sm rotate-1 hover:rotate-0 transition-transform">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-white dark:bg-black border-2 border-ink dark:border-white/20 rounded-lg">
                  <Code className="w-6 h-6 text-ink dark:text-white" />
                </div>
                <h3 className="font-heading text-xl font-bold text-white text-stroke-sm">{t.about.techStackTitle}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: "3D Design", icon: Box },
                  { name: "TypeScript", icon: Code },
                  { name: "Machine Learning", icon: Brain },
                  { name: "Node.js", icon: Cpu },
                  { name: "Python", icon: Code },
                  { name: "Canva", icon: Palette }
                ].map((tech) => {
                  const IconComp = tech.icon;
                  return (
                    <span key={tech.name} className="bg-white dark:bg-black text-ink dark:text-white px-3 py-1 rounded-md border-2 border-ink dark:border-white/20 font-mono text-sm font-bold flex items-center gap-2">
                      <IconComp className="w-4 h-4" />
                      {tech.name}
                    </span>
                  );
                })}
              </div>
            </div>

            <div className="bg-mint p-6 rounded-xl border-2 border-ink dark:border-white/20 shadow-hard-sm -rotate-1 hover:rotate-0 transition-transform">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-white dark:bg-black border-2 border-ink dark:border-white/20 rounded-lg">
                  <BookOpen className="w-6 h-6 text-ink dark:text-white" />
                </div>
                <h3 className="font-heading text-xl font-bold text-white text-stroke-sm">{t.about.learningTitle}</h3>
              </div>
              <ul className="space-y-2 font-heading font-semibold text-ink dark:text-zinc-800">
                <li className="flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-white stroke-2" /> {t.about.learning1}
                </li>
                <li className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-white fill-white" /> {t.about.learning2}
                </li>
                <li className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-white fill-white stroke-ink" /> {t.about.learning3}
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

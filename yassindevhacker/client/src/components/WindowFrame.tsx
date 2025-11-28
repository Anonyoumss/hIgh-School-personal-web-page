import { ReactNode } from "react";
import { motion } from "framer-motion";
import { Minus, Square, X } from "lucide-react";

interface WindowFrameProps {
  children: ReactNode;
  title?: string;
}

export default function WindowFrame({ children, title = "Alex.dev" }: WindowFrameProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: -10 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="w-full max-w-6xl mx-auto bg-white dark:bg-black rounded-xl border-2 border-ink dark:border-white/20 shadow-hard-lg overflow-hidden flex flex-col min-h-[80vh]"
    >
      {/* Window Header */}
      <div className="bg-cream dark:bg-zinc-900 border-b-2 border-ink dark:border-white/20 p-3 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-coral border border-ink dark:border-white/20 hover:bg-red-400 transition-colors cursor-pointer" />
          <div className="w-3 h-3 rounded-full bg-sky border border-ink dark:border-white/20 hover:bg-blue-400 transition-colors cursor-pointer" />
          <div className="w-3 h-3 rounded-full bg-mint border border-ink dark:border-white/20 hover:bg-green-400 transition-colors cursor-pointer" />
        </div>
        
        <div className="absolute left-1/2 -translate-x-1/2 font-mono text-xs font-bold text-ink/60 dark:text-white/60 uppercase tracking-widest flex items-center gap-2">
          <span className="w-2 h-2 bg-teal rounded-full animate-pulse"></span>
          {title}
        </div>

        <div className="flex items-center gap-4 text-ink dark:text-white opacity-50">
          <Minus className="w-4 h-4 cursor-pointer hover:text-coral transition-colors" />
          <Square className="w-3 h-3 cursor-pointer hover:text-coral transition-colors" />
          <X className="w-4 h-4 cursor-pointer hover:text-coral transition-colors" />
        </div>
      </div>

      {/* Window Content */}
      <div className="flex-1 overflow-y-auto relative bg-white dark:bg-black scrollbar-thin scrollbar-thumb-ink/20 scrollbar-track-transparent">
         {children}
      </div>
    </motion.div>
  );
}

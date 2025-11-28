import { motion } from "framer-motion";
import { Book, Code, FileText, PenTool, Coffee, Cpu, Layers, Hash, Braces, Pencil } from "lucide-react";
import { useEffect, useState } from "react";

const icons = [
  { Icon: Book, color: "text-coral" },
  { Icon: Code, color: "text-teal" },
  { Icon: FileText, color: "text-ink dark:text-white" },
  { Icon: PenTool, color: "text-coffee dark:text-orange-400" },
  { Icon: Coffee, color: "text-sky" },
  { Icon: Cpu, color: "text-mint" },
  { Icon: Layers, color: "text-coral" },
  { Icon: Hash, color: "text-teal" },
  { Icon: Braces, color: "text-ink dark:text-white" },
  { Icon: Pencil, color: "text-coffee dark:text-orange-400" },
];

export default function AnimatedBackground() {
  const [elements, setElements] = useState<Array<{
    id: number;
    Icon: any;
    color: string;
    left: number;
    duration: number;
    delay: number;
    size: number;
    opacity: number;
  }>>([]);

  useEffect(() => {
    // Generate random floating elements (Rain effect)
    const newElements = Array.from({ length: 50 }).map((_, i) => {
      const randomIcon = icons[Math.floor(Math.random() * icons.length)];
      return {
        id: i,
        Icon: randomIcon.Icon,
        color: randomIcon.color,
        left: Math.random() * 100, // Random horizontal position
        duration: 5 + Math.random() * 10, // Faster falling speed (5-15s)
        delay: -(Math.random() * 20), // Negative delay to start mid-animation
        size: 20 + Math.random() * 30, // varied size
        opacity: 0.2 + Math.random() * 0.3, // varied opacity for depth (0.2 - 0.5)
      };
    });
    setElements(newElements);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-cyan-50/50 dark:bg-[#083344]/40 dark:bg-gradient-to-br dark:from-[#082f49] dark:to-[#000000]">
      {/* Cyan Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-20 dark:opacity-10" 
        style={{ 
          backgroundImage: `linear-gradient(to right, #06b6d4 1px, transparent 1px), linear-gradient(to bottom, #06b6d4 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      ></div>

      {/* Falling Elements */}
      {elements.map((el) => (
        <motion.div
          key={el.id}
          className={`absolute ${el.color}`}
          style={{ 
            left: `${el.left}%`, 
            top: -100, // Start above screen
            opacity: el.opacity,
          }}
          animate={{
            y: ["0vh", "120vh"],
            rotate: [0, 360], // Gentle rotation while falling
          }}
          transition={{
            duration: el.duration,
            repeat: Infinity,
            ease: "linear",
            delay: el.delay,
          }}
        >
          <el.Icon size={el.size} strokeWidth={1.5} />
        </motion.div>
      ))}
      
      {/* Subtle Gradient Overlay to soften edges */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/40 dark:from-black/40 dark:via-transparent dark:to-black/40 pointer-events-none"></div>
    </div>
  );
}

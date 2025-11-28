import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import project1Icon from "@assets/generated_images/an_icon_representing_a_coding_project..png";
import project2Icon from "@assets/generated_images/an_icon_representing_a_science_project..png";
import project3Icon from "@assets/generated_images/an_icon_representing_a_creative_arts_project..png";
import { useLanguage } from "@/components/language-provider";

export default function Projects() {
  const { t } = useLanguage();

  const projects = [
    {
      id: 2,
      title: t.projects.p2Title,
      description: t.projects.p2Desc,
      tags: ["D3.js", "Arduino", "IoT"],
      icon: project2Icon,
      color: "bg-teal",
      sourceLink: "https://github.com/Anonyoumss",
      demoLink: "https://github.com/Anonyoumss"
    },
    {
      id: 3,
      title: t.projects.p3Title,
      description: t.projects.p3Desc,
      tags: ["PowerShell", "Bash", "ADB", "Scrcpy"],
      icon: project3Icon,
      color: "bg-coral",
      sourceLink: "https://github.com/Anonyoumss/Auto-ADB-Scrcpy-connet",
      demoLink: "https://github.com/Anonyoumss/Auto-ADB-Scrcpy-connet?tab=readme-ov-file#auto-adb-scrcpy-connet"
    },
    {
      id: 4,
      title: t.projects.p4Title,
      description: t.projects.p4Desc,
      tags: ["Discord.js", "Node.js", "Bot"],
      icon: project1Icon,
      color: "bg-sky",
      sourceLink: "https://github.com/Anonyoumss/Discord-Greety-Bot",
      demoLink: "https://github.com/Anonyoumss/Discord-Greety-Bot"
    }
  ];

  return (
    <div className="p-8 md:p-12">
      <div className="flex flex-col items-center mb-12">
        <div className="inline-block px-4 py-1 bg-white dark:bg-black border-2 border-ink dark:border-white/20 rounded-full font-mono text-sm font-bold mb-4 shadow-hard-sm">
          {t.projects.tag}
        </div>
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-ink dark:text-white text-center">
          {t.projects.title}
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative"
          >
            <div className={`absolute inset-0 ${project.color} rounded-2xl border-2 border-ink dark:border-white/20 translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-200`}></div>
            
            <div className="relative bg-white dark:bg-black rounded-2xl border-2 border-ink dark:border-white/20 p-6 h-full flex flex-col hover:-translate-y-1 transition-transform duration-200">
              <div className="w-16 h-16 mb-6 rounded-xl overflow-hidden border-2 border-ink dark:border-white/20 bg-gray-100 dark:bg-zinc-900">
                <img src={project.icon} alt={project.title} className="w-full h-full object-cover" />
              </div>
              
              <h3 className="font-heading text-2xl font-bold text-ink dark:text-white mb-3 group-hover:text-coral transition-colors">
                {project.title}
              </h3>
              
              <p className="font-sans text-ink/80 dark:text-white/80 mb-6 flex-grow">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map(tag => (
                  <span key={tag} className="px-2 py-1 bg-background border border-ink/20 dark:border-white/20 rounded-md text-xs font-bold font-mono text-ink dark:text-white">
                    #{tag}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-3 mt-auto pt-4 border-t border-dashed border-ink/20 dark:border-white/20">
                <a href={project.sourceLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-bold font-heading text-ink dark:text-white hover:text-teal transition-colors">
                  <Github className="w-4 h-4" /> {t.projects.source}
                </a>
                <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-bold font-heading text-ink dark:text-white hover:text-coral transition-colors ml-auto">
                  <ExternalLink className="w-4 h-4" /> {t.projects.demo}
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

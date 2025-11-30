import { Mail, Send, Github, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/components/language-provider";
import { useState } from "react";

export default function Contact() {
  const { t } = useLanguage();
  
  const socialLinks = [
    { icon: "telegram", label: "Telegram", color: "bg-sky", link: "#" },
    { icon: "whatsapp", label: "WhatsApp", color: "bg-teal", link: "#" },
    { icon: "youtube", label: "YouTube", color: "bg-coral", link: "#" },
    { icon: "github", label: "GitHub", color: "bg-ink dark:bg-white", link: "https://github.com/Anonyoumss/" }
  ];

  const IconComponent = ({ icon }: { icon: string }) => {
    switch(icon) {
      case "github":
        return <Github className="w-6 h-6" />;
      case "discord":
        return <MessageCircle className="w-6 h-6" />;
      case "whatsapp":
        return (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.15-1.739-.86-2.015-.96-.276-.099-.476-.15-.682.15-.207.299-.804.96-.985 1.158-.18.198-.36.223-.657.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.149-.174.198-.297.297-.495.099-.198.05-.371-.025-.52-.075-.148-.682-1.643-.936-2.247-.246-.58-.498-.501-.682-.51-.176-.009-.376-.01-.576-.01-.2 0-.524.075-.799.374-.276.299-1.051 1.026-1.051 2.502 0 1.476 1.075 2.903 1.224 3.102.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403c-1.414-1.446-1.414-3.802 0-5.248 1.414-1.446 3.708-1.446 5.122 0 1.414 1.446 1.414 3.802 0 5.248-1.414 1.446-3.708 1.446-5.122 0"/>
          </svg>
        );
      case "telegram":
        return (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.665 3.717l-17.73 6.837c-1.356.52-1.852 1.289-.527 1.959l4.611 1.583 1.688 5.461c.326 1.026.756 1.026 1.217.635l2.807-2.543 4.32 3.753c.797.583 1.206.283 1.371-.953l2.437-18.565c.184-1.453-.479-2.083-1.48-1.635l-.493.245z"/>
          </svg>
        );
      case "youtube":
        return (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
        );
      default:
        return <MessageCircle className="w-6 h-6" />;
    }
  };

  return (
    <div className="p-8 md:p-12 h-full flex items-center justify-center">
      <div className="max-w-4xl mx-auto bg-coral rounded-3xl p-1 md:p-3 border-2 border-ink dark:border-white/20 shadow-hard-lg w-full">
        <div className="bg-cream dark:bg-zinc-900 rounded-2xl border-2 border-ink dark:border-white/20 overflow-hidden grid md:grid-cols-2">
          
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <h2 className="font-heading text-4xl font-bold text-ink dark:text-white mb-4">
              {t.contact.title}
            </h2>
            <p className="font-sans text-lg text-ink/80 dark:text-white/80 mb-8">
              {t.contact.subtitle}
            </p>
            
            <div className="grid grid-cols-4 gap-4">
              {socialLinks.map((social) => (
                <a key={social.label} href={social.link} className={`flex items-center justify-center p-3 rounded-full border-2 border-ink dark:border-white/20 hover:scale-110 transition-transform group ${social.color} ${social.color === "bg-ink dark:bg-white" ? "text-white dark:text-ink" : "text-white"}`}>
                  <IconComponent icon={social.icon} />
                </a>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-black p-8 md:p-12 border-t-2 md:border-t-0 md:border-l-2 border-ink dark:border-white/20">
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="font-heading font-bold text-ink dark:text-white text-sm uppercase">{t.contact.nameLabel}</label>
                <Input className="bg-background border-2 border-ink dark:border-white/20 focus-visible:ring-0 focus-visible:border-coral rounded-lg h-12 font-sans" placeholder={t.contact.namePlaceholder} />
              </div>
              
              <div className="space-y-2">
                <label className="font-heading font-bold text-ink dark:text-white text-sm uppercase">{t.contact.emailLabel}</label>
                <Input className="bg-background border-2 border-ink dark:border-white/20 focus-visible:ring-0 focus-visible:border-coral rounded-lg h-12 font-sans" placeholder={t.contact.emailPlaceholder} />
              </div>
              
              <div className="space-y-2">
                <label className="font-heading font-bold text-ink dark:text-white text-sm uppercase">{t.contact.messageLabel}</label>
                <Textarea className="bg-background border-2 border-ink dark:border-white/20 focus-visible:ring-0 focus-visible:border-coral rounded-lg min-h-[120px] font-sans resize-none" placeholder={t.contact.messagePlaceholder} />
              </div>

              <Button className="w-full h-12 bg-ink text-white font-heading font-bold text-lg rounded-xl hover:bg-coral hover:shadow-hard-sm transition-all border-2 border-transparent hover:border-ink dark:hover:border-white mt-2">
                {t.contact.sendButton} <Send className="w-4 h-4 ml-2" />
              </Button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}

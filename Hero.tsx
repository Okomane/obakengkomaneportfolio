import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import { Button } from './ui/button';

export function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 relative">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl text-white">
            Hi, I'm <span className="text-blue-400">Obakeng</span>
          </h1>
          <h2 className="text-2xl md:text-4xl text-slate-300">
            DevOps Engineer
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Passionate about automation, cloud infrastructure, and building reliable systems that scale.
          </p>
        </div>

        <div className="flex gap-4 justify-center">
          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-blue-500 hover:bg-blue-600 text-white"
          >
            <Mail className="mr-2 h-5 w-5" />
            Get In Touch
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-slate-600 text-slate-300 hover:bg-slate-800"
          >
            <Github className="mr-2 h-5 w-5" />
            View GitHub
          </Button>
        </div>

        <div className="flex gap-6 justify-center pt-4">
          <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
            <Github className="h-6 w-6" />
          </a>
          <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
            <Linkedin className="h-6 w-6" />
          </a>
          <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
            <Mail className="h-6 w-6" />
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 animate-bounce">
        <ArrowDown className="h-6 w-6 text-slate-500" />
      </div>
    </section>
  );
}

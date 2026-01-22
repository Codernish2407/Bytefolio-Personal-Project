import { Button } from '@/components/ui/button';
import { ArrowDown, FileText } from 'lucide-react';
import { BackgroundBeams } from '@/components/ui/background-beams';

export function Hero() {
  return (
    <section id="hero" className="relative h-screen min-h-[700px] w-full overflow-hidden">
      <BackgroundBeams />
      <div className="container mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 text-center">
        <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="block">Nishtha Banerjee</span>
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Aspiring Software Developer
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Computer Science Engineering | Web Development | Problem Solving
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="#projects">
              <Button size="lg">
                View My Work
                <ArrowDown className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline">
                Download Resume
                <FileText className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

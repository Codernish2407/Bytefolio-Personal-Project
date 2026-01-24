import { About } from "@/components/sections/about";
import { Achievements } from "@/components/sections/achievements";
import { Contact } from "@/components/sections/contact";
import { Experience } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <Hero />
      <div className="relative isolate container px-4 mx-auto flex flex-col gap-16 md:gap-24">
        <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-[10rem] -left-[10rem] w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-blob-spin"></div>
          <div 
            className="absolute top-[50rem] -right-[10rem] w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-blob-spin" 
            style={{animationDelay: '-10s'}}>
          </div>
        </div>
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Contact />
      </div>
    </div>
  );
}

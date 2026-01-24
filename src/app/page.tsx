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

      {/* Soft Spatial Drift Background */}
      <div className="fixed inset-0 -z-20 overflow-hidden">
        <div 
          className="absolute top-0 -left-1/4 w-[50rem] h-[50rem] bg-primary/10 rounded-full blur-3xl animate-spatial-drift-1"
        />
        <div 
          className="absolute bottom-0 -right-1/4 w-[50rem] h-[50rem] bg-accent/10 rounded-full blur-3xl animate-spatial-drift-2"
        />
      </div>

      <div className="relative isolate container px-4 mx-auto flex flex-col gap-16 md:gap-24">
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

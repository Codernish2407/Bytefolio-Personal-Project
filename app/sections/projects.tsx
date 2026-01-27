import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { projects } from '@/lib/data';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

export function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl mb-12">
          Projects
        </h2>
        
        {(!projects || projects.length === 0) ? (
          <p className="text-center text-muted-foreground">No projects found.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="glass-card flex flex-col overflow-hidden">
                <CardHeader>
                  {project.images && project.images.length > 0 && (
                    <Carousel className="w-full max-w-full">
                      <CarouselContent>
                        {project.images.map((image, index) => (
                          <CarouselItem key={index}>
                            <div className="aspect-[3/2] relative">
                              <Image
                                src={image}
                                alt={`${project.title} screenshot ${index + 1}`}
                                fill
                                className="object-contain rounded-t-lg"
                                data-ai-hint="project screenshot"
                              />
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      {project.images.length > 1 && (
                        <>
                          <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2" />
                          <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2" />
                        </>
                      )}
                    </Carousel>
                  )}
                  <CardTitle className="pt-4">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription>{project.description}</CardDescription>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.techStack.map((tech) => (
                      <Badge key={tech} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end gap-2">
                  <Button variant="ghost" size="icon" asChild>
                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </Link>
                  </Button>
                  {project.liveUrl && (
                    <Button variant="ghost" size="icon" asChild>
                      <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-5 w-5" />
                        <span className="sr-only">Live Demo</span>
                      </Link>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

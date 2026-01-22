'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCollection, useFirestore, useMemoFirebase } from '@/firebase';
import { collection } from 'firebase/firestore';
import type { Project } from '@/lib/types';

function ProjectsList() {
  const firestore = useFirestore();
  const projectsQuery = useMemoFirebase(() => collection(firestore, 'projects'), [firestore]);
  const { data: projects, isLoading } = useCollection<Project>(projectsQuery);

  if (isLoading) {
    return <p className="text-center text-muted-foreground">Loading projects...</p>;
  }

  if (!projects || projects.length === 0) {
    return <p className="text-center text-muted-foreground">No projects found. The database may be empty.</p>
  }

  return (
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects?.map((project) => (
        <Card key={project.id} className="glass-card flex flex-col overflow-hidden">
          <CardHeader>
            <div className="aspect-[3/2] relative mb-4">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover rounded-t-lg"
                data-ai-hint="project screenshot"
              />
            </div>
            <CardTitle>{project.title}</CardTitle>
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
  )
}

export function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl mb-12">
          Projects
        </h2>
        <ProjectsList />
      </div>
    </section>
  );
}

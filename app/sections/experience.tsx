'use client';

import { experiences } from '@/lib/data';
import { Briefcase, CheckCircle } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { cn } from '@/lib/utils';
import { ScrollArea } from '@/components/ui/scroll-area';

export function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl mb-12">
          Experience
        </h2>
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-4 top-0 h-full w-0.5 bg-border md:left-1/2 md:-translate-x-1/2"></div>
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                <div className="absolute left-4 top-1 -translate-x-1/2 z-10 md:left-1/2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-background border-2 border-primary">
                    <Briefcase className="h-4 w-4 text-primary" />
                  </div>
                </div>

                <div className={cn(
                  "pl-12 md:pl-0 md:w-1/2",
                  index % 2 !== 0 ? 'md:ml-auto md:pl-8' : 'md:pr-8'
                )}>
                  <div className={cn(
                    "text-left",
                     index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                  )}>
                    <h3 className="text-lg font-semibold text-primary">{exp.role}</h3>
                    <p className="text-md font-medium">{exp.company}</p>
                    <p className="text-sm text-muted-foreground">{exp.duration}</p>
                  </div>
                  <div className="mt-2 p-6 rounded-lg glass-card text-left">
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 mt-1 text-accent flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    {exp.certificateUrl && (
                      <div className="mt-4">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="outline" size="sm">
                              {Array.isArray(exp.certificateUrl) && exp.certificateUrl.length > 1 ? 'View Certificates' : 'View Certificate'}
                            </Button>
                          </DialogTrigger>
                          <DialogContent className={cn(
                            "p-0 max-w-4xl",
                            Array.isArray(exp.certificateUrl) && exp.certificateUrl.length > 1 && "lg:max-w-6xl"
                          )}>
                            <DialogHeader className="p-6 pb-2">
                              <DialogTitle>{exp.company} - Certificate{Array.isArray(exp.certificateUrl) && exp.certificateUrl.length > 1 ? 's' : ''}</DialogTitle>
                            </DialogHeader>
                            <ScrollArea className="max-h-[80vh]">
                              <div className="p-6 pt-4">
                                {Array.isArray(exp.certificateUrl) ? (
                                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {exp.certificateUrl.map((url, i) => (
                                      <div key={i} className="relative aspect-[8/11]">
                                        <Image
                                          src={url}
                                          alt={`Certificate for ${exp.role} at ${exp.company} (${i + 1})`}
                                          fill
                                          className="object-contain"
                                          data-ai-hint="certificate document"
                                        />
                                      </div>
                                    ))}
                                  </div>
                                ) : (
                                  <div className="relative aspect-[8/11]">
                                    <Image
                                      src={exp.certificateUrl as string}
                                      alt={`Certificate for ${exp.role} at ${exp.company}`}
                                      fill
                                      className="object-contain"
                                      data-ai-hint="certificate document"
                                    />
                                  </div>
                                )}
                              </div>
                            </ScrollArea>
                          </DialogContent>
                        </Dialog>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

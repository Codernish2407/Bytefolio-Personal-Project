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

export function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl mb-12">
          Experience
        </h2>
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-border"></div>
          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-12 flex items-center w-full">
              <div className="w-1/2 pr-8 text-right">
                <h3 className="text-lg font-semibold text-primary">{exp.role}</h3>
                <p className="text-md font-medium">{exp.company}</p>
                <p className="text-sm text-muted-foreground">{exp.duration}</p>
              </div>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-background border-2 border-primary">
                  <Briefcase className="h-5 w-5 text-primary" />
                </div>
              </div>
              <div className="w-1/2 pl-8">
                <div className="p-6 rounded-lg glass-card">
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
                          <Button variant="outline" size="sm">View Certificate</Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-3xl">
                          <DialogHeader>
                            <DialogTitle>{exp.company} - Certificate</DialogTitle>
                          </DialogHeader>
                          <div className="relative aspect-[8/11] mt-4">
                            <Image
                              src={exp.certificateUrl}
                              alt={`Certificate for ${exp.role} at ${exp.company}`}
                              fill
                              className="object-contain"
                              data-ai-hint="certificate document"
                            />
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  )}
                </div>
              </div>
              {/* This is a simple trick to alternate sides on larger screens */}
              <style jsx>{`
                @media (min-width: 768px) {
                  .relative:nth-child(even) > div:first-child {
                    order: 3;
                    text-align: left;
                    padding-left: 2rem;
                    padding-right: 0;
                  }
                  .relative:nth-child(even) > div:last-child {
                    order: 1;
                    padding-right: 2rem;
                    padding-left: 0;
                  }
                }
              `}</style>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

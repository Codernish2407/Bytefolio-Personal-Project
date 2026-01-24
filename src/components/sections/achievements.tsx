
import { achievements } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Trophy } from 'lucide-react';
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

export function Achievements() {
  return (
    <section id="achievements" className="py-16 md:py-24">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl mb-12">
          Achievements & Hackathons
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <Card key={index} className="glass-card text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-accent/20">
                    <Trophy className="h-8 w-8 text-accent" />
                  </div>
                </div>
                <CardTitle>{achievement.title}</CardTitle>
                <p className="text-sm font-semibold text-primary">{achievement.year}</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{achievement.description}</p>
                {achievement.certificates && (
                  <div className="mt-4">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline">View Certificates</Button>
                      </DialogTrigger>
                      <DialogContent className={cn("max-w-4xl", achievement.certificates.length > 2 && "lg:max-w-6xl")}>
                        <DialogHeader>
                          <DialogTitle>{achievement.title} - Certificates</DialogTitle>
                        </DialogHeader>
                        <div className={cn(
                          "grid grid-cols-1 gap-2 mt-4",
                          "md:grid-cols-3"
                        )}>
                          {achievement.certificates.map((cert, i) => (
                            <Card key={i} className="glass-card overflow-hidden">
                              <CardContent className="p-2">
                                <div className="relative aspect-[8/11]">
                                  <Image
                                    src={cert.url}
                                    alt={`${achievement.title} Certificate ${i + 1}`}
                                    fill
                                    className="object-contain rounded-md"
                                    data-ai-hint="certificate document"
                                  />
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

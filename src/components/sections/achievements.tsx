
import { achievements } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Trophy, CheckCircle, Award, Eye } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Achievements() {
  return (
    <section id="achievements" className="py-16 md:py-24">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl mb-12">
          Achievements & Hackathons
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {achievements.map((achievement, index) => (
            <Card key={index} className="glass-card text-center flex flex-col h-full">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-accent/20">
                    <Trophy className="h-8 w-8 text-accent" />
                  </div>
                </div>
                <CardTitle>{achievement.title}</CardTitle>
                <p className="text-sm font-semibold text-primary">{achievement.year}</p>
                {Array.isArray(achievement.description) ? (
                  <ul className="space-y-2 text-left text-sm text-muted-foreground pt-2">
                    {achievement.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 mt-1 text-accent flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-muted-foreground pt-2">{achievement.description}</p>
                )}
              </CardHeader>
              <CardContent className="flex-grow flex flex-col gap-4 text-left pt-0">
                {achievement.certificates && achievement.certificates.length > 0 && (
                  <ul className="space-y-3">
                    {achievement.certificates.map((cert, certIndex) => (
                      <li key={certIndex} className="bg-card/50 p-3 rounded-lg flex items-center justify-between gap-4 border border-border/20">
                        <div className="flex items-center gap-4">
                          <Award className="h-6 w-6 text-primary flex-shrink-0" />
                          <div className="text-left">
                            <p className="font-semibold text-sm">{cert.title}</p>
                            <p className="text-xs text-muted-foreground">{cert.issuer} - {cert.type}</p>
                          </div>
                        </div>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="ghost" size="icon" aria-label="View Certificate">
                              <Eye className="h-5 w-5" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-5xl w-full h-[90vh]">
                            <DialogHeader>
                              <DialogTitle>{cert.title}</DialogTitle>
                            </DialogHeader>
                            <div className="relative w-full h-full mt-4">
                              <Image
                                src={cert.url}
                                alt={`Certificate for ${cert.title}`}
                                fill
                                className="object-contain"
                                data-ai-hint="certificate document"
                              />
                            </div>
                          </DialogContent>
                        </Dialog>
                      </li>
                    ))}
                  </ul>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

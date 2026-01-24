import { achievements } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Trophy, CheckCircle } from 'lucide-react';
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <Card key={index} className="glass-card text-center flex flex-col">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-accent/20">
                    <Trophy className="h-8 w-8 text-accent" />
                  </div>
                </div>
                <CardTitle>{achievement.title}</CardTitle>
                <p className="text-sm font-semibold text-primary">{achievement.year}</p>
              </CardHeader>
              <CardContent className="flex-grow">
                {Array.isArray(achievement.description) ? (
                  <ul className="space-y-2 text-left">
                    {achievement.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 mt-1 text-accent flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-muted-foreground">{achievement.description}</p>
                )}
              </CardContent>
              {achievement.certificateUrls && (
                <div className="p-6 pt-0 mt-auto">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm">
                        View Certificates
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-6xl">
                      <DialogHeader>
                        <DialogTitle>{achievement.title} - Certificates</DialogTitle>
                      </DialogHeader>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                        {achievement.certificateUrls.map((url, i) => (
                          <div key={i} className="relative aspect-[8/11]">
                            <Image
                              src={url}
                              alt={`Certificate for ${achievement.title} (${i + 1})`}
                              fill
                              className="object-contain"
                              data-ai-hint="certificate document"
                            />
                          </div>
                        ))}
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

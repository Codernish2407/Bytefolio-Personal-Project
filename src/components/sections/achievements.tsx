import { achievements } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Trophy } from 'lucide-react';

export function Achievements() {
  return (
    <section id="achievements" className="py-16 md:py-24">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl mb-12">
          Achievements & Hackathons
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <p className="text-muted-foreground">{achievement.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

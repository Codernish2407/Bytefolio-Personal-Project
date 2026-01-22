import { about } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl text-foreground">
      {children}
    </h2>
  );
}

function SectionWrapper({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <section id={id} className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">{children}</div>
    </section>
  );
}

export function About() {
  return (
    <SectionWrapper id="about">
      <div className="flex flex-col items-center gap-8">
        <SectionTitle>About Me</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
          <Card className="glass-card md:col-span-1 flex flex-col items-center text-center p-6">
            <Image
              src="https://picsum.photos/seed/avatar/200/200"
              alt="Jane Doe"
              width={120}
              height={120}
              className="rounded-full mb-4 border-2 border-primary"
              data-ai-hint="professional headshot"
            />
            <h3 className="text-xl font-semibold">Jane Doe</h3>
            <p className="text-muted-foreground">Full-Stack Developer</p>
          </Card>
          <Card className="glass-card md:col-span-2">
            <CardHeader>
              <CardTitle>Who I Am</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                A passionate developer with a knack for building robust and user-friendly applications. My journey in tech is driven by a curiosity to solve complex problems and a desire to continuously learn and grow.
              </p>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Education:</h4>
                <p>{about.education}</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Interests:</h4>
                <p>{about.interests}</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Current Focus:</h4>
                <p>{about.focus}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </SectionWrapper>
  );
}

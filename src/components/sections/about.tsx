import { about } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

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
  const profileImage = PlaceHolderImages.find(p => p.id === 'profile-picture')?.imageUrl || 'https://ibb.co/sTpSRkm';
  return (
    <SectionWrapper id="about">
      <div className="flex flex-col items-center gap-8">
        <SectionTitle>About Me</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
          <Card className="glass-card md:col-span-1 flex flex-col items-center text-center p-6">
            <Image
              src={profileImage}
              alt="Nishtha Banerjee"
              width={120}
              height={120}
              className="rounded-full mb-4 border-2 border-primary object-cover"
              data-ai-hint="professional headshot"
            />
            <h3 className="text-xl font-semibold">Nishtha Banerjee</h3>
            <p className="text-muted-foreground">B.Tech CSE Student</p>
          </Card>
          <Card className="glass-card md:col-span-2">
            <CardHeader>
              <CardTitle>Professional Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Motivated first-year B.Tech CSE student with hands-on experience from multiple internships, demonstrating a solid foundation in web development and programming. Skilled in frontend development and video editing, with a passion for creating impactful tech solutions. Committed to continuous learning and professional growth, eager to leverage skills in dynamic environments that foster innovation and collaboration. Enthusiastic about contributing to projects that drive positive change in the tech landscape.
              </p>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Education:</h4>
                <div className="text-muted-foreground space-y-3">
                  {about.education.map((edu, index) => (
                    <div key={index}>
                      <p className="font-semibold text-foreground/90">{edu.institution}</p>
                      <p className="text-sm">{edu.location}</p>
                      <p className="text-sm">{edu.degree}</p>
                      <p className="text-sm">{edu.major}</p>
                      <p className="text-sm">{edu.duration}</p>
                    </div>
                  ))}
                </div>
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

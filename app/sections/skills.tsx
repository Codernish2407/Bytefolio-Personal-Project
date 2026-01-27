import { skills } from '@/lib/data';
import type { SkillCategory } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Hammer, BrainCircuit } from 'lucide-react';
import React from 'react';

const categoryIcons: Record<SkillCategory, React.ElementType> = {
  'Languages': Code,
  'Frameworks & Libraries': Code,
  'Tools & Platforms': Hammer,
  'CS Fundamentals': BrainCircuit,
};

const skillCategories: SkillCategory[] = [
  'Languages',
  'Frameworks & Libraries',
  'Tools & Platforms',
  'CS Fundamentals',
];

export function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl mb-12">
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category) => {
            const Icon = categoryIcons[category];
            const categorySkills = skills.filter((skill) => skill.category === category);
            return (
              <Card key={category} className="glass-card">
                <CardHeader className="flex flex-row items-center gap-4">
                  <Icon className="h-8 w-8 text-primary" />
                  <CardTitle>{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {categorySkills.map((skill) => (
                      <Badge key={skill.name} variant="secondary">
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

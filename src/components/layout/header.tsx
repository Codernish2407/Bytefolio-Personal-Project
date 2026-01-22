'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Code } from 'lucide-react';
import { type NavLink } from '@/lib/types';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';

const navLinks: NavLink[] = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const isMobile = useIsMobile();
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      const sections = navLinks.map(link => document.querySelector(link.href) as HTMLElement).filter(Boolean);
      let currentSection = '';

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 100) {
          currentSection = `#${section.id}`;
        }
      });
      
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    // This helps close the mobile menu after clicking a link
    if (isMobile) {
      setTimeout(() => {
        (document.querySelector('[data-state="open"] > button') as HTMLButtonElement)?.click();
      }, 300);
    }
  };

  const navContent = (
    <>
      {navLinks.map((link) => (
        <a
          href={link.href}
          key={link.name}
          onClick={(e) => handleScrollTo(e, link.href)}
          className={cn(
            'px-3 py-2 text-sm font-medium rounded-md transition-colors',
            'text-muted-foreground hover:text-foreground',
            'focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background',
            activeSection === link.href ? 'text-foreground bg-accent/10' : ''
          )}
        >
          {link.name}
        </a>
      ))}
    </>
  );

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isScrolled ? 'border-b border-border/60 bg-background/80 backdrop-blur-lg' : ''
      )}
    >
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <Code className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg">ByteFolio</span>
        </Link>
        {hasMounted ? (
          isMobile ? (
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-4/5 pt-16">
                <nav className="flex flex-col gap-4">{navContent}</nav>
              </SheetContent>
            </Sheet>
          ) : (
            <nav className="flex items-center gap-2">{navContent}</nav>
          )
        ) : null}
      </div>
    </header>
  );
}
